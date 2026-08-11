document.addEventListener('DOMContentLoaded', () => {

    const formatCurrency = (val) => '₹' + Number(val).toLocaleString('en-IN');
    const formatDiff = (val) => {
        if (val > 0) return `<span class="difference-positive">+₹${Number(val).toLocaleString('en-IN')}</span>`;
        if (val < 0) return `<span class="difference-negative">-₹${Number(Math.abs(val)).toLocaleString('en-IN')}</span>`;
        return '₹0';
    };

    const attachListeners = (container) => {
        container.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', calculateTotals);
        });
        container.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('tr').remove();
                calculateTotals();
            });
        });
    };

    const calculateTotals = () => {
        let totalIncome = 0;
        document.querySelectorAll('.inc-amt').forEach(inc => {
            totalIncome += Number(inc.value) || 0;
        });

        let totalExpBud = 0;
        let totalExpAct = 0;

        // Fixed and Var expenses
        document.querySelectorAll('#expenseTable tbody tr').forEach(tr => {
            const budIn = tr.querySelector('.exp-bud');
            const actIn = tr.querySelector('.exp-act');
            const diffCell = tr.querySelector('.diff-cell');

            if (budIn && actIn && diffCell) {
                const b = Number(budIn.value) || 0;
                const a = Number(actIn.value) || 0;
                const diff = b - a;
                diffCell.innerHTML = formatDiff(diff);

                totalExpBud += b;
                totalExpAct += a;
            }
        });

        const totalExpDiff = totalExpBud - totalExpAct;

        const netSavBud = totalIncome - totalExpBud;
        const netSavAct = totalIncome - totalExpAct;
        let savRate = 0;
        if (totalIncome > 0) {
            savRate = (netSavAct / totalIncome) * 100;
        }

        document.getElementById('totalIncomeDisplay').textContent = formatCurrency(totalIncome);

        document.getElementById('totalExpBudDisplay').textContent = formatCurrency(totalExpBud);
        document.getElementById('totalExpActDisplay').textContent = formatCurrency(totalExpAct);
        document.getElementById('totalExpDiffDisplay').innerHTML = formatDiff(totalExpDiff);

        document.getElementById('netSavBudDisplay').textContent = formatCurrency(netSavBud);
        document.getElementById('netSavActDisplay').textContent = formatCurrency(netSavAct);

        document.getElementById('savRateDisplay').innerHTML = `${savRate.toFixed(1)}% <span style="font-weight:400; font-size:0.85em; opacity:0.8; margin-left:8px;">Target: >20%</span>`;
    };

    // Add Income row
    document.getElementById('addIncomeBtn').addEventListener('click', () => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td><input type="text" placeholder="Income Source" /></td>
      <td><input type="number" class="inc-amt" value="0" /></td>
      <td><button class="remove-btn">×</button></td>
    `;
        document.getElementById('incomeBody').appendChild(tr);
        attachListeners(tr);
        calculateTotals();
    });

    const createExpenseRow = (bodyId) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td><input type="text" placeholder="Expense Name" /></td>
      <td><input type="number" class="exp-bud" value="0" /></td>
      <td><input type="number" class="exp-act" value="0" /></td>
      <td class="diff-cell value-display">₹0</td>
      <td><button class="remove-btn">×</button></td>
    `;
        document.getElementById(bodyId).appendChild(tr);
        attachListeners(tr);
        calculateTotals();
    };

    // Add Expense rows
    document.getElementById('addFixedBtn').addEventListener('click', () => {
        createExpenseRow('fixedExpenseBody');
    });

    document.getElementById('addVarBtn').addEventListener('click', () => {
        createExpenseRow('varExpenseBody');
    });

    // initial calc
    attachListeners(document);
    calculateTotals();

    // Export Logic
    const getFormData = () => {
        const data = {
            month: document.getElementById('monthInput').value,
            year: document.getElementById('yearInput').value,
            income: [],
            fixedExpenses: [],
            varExpenses: []
        };

        document.querySelectorAll('#incomeTable tbody tr').forEach(tr => {
            const cat = tr.cells[0].querySelector('input');
            const amt = tr.cells[1].querySelector('input');
            if (cat && amt) data.income.push({ category: cat.value, amount: amt.value });
        });

        document.querySelectorAll('#fixedExpenseBody tr').forEach(tr => {
            const cat = tr.cells[0]?.querySelector('input');
            const bud = tr.cells[1]?.querySelector('input');
            const act = tr.cells[2]?.querySelector('input');
            if (cat && bud && act) data.fixedExpenses.push({ category: cat.value, budgeted: bud.value, actual: act.value });
        });

        document.querySelectorAll('#varExpenseBody tr').forEach(tr => {
            const cat = tr.cells[0]?.querySelector('input');
            const bud = tr.cells[1]?.querySelector('input');
            const act = tr.cells[2]?.querySelector('input');
            if (cat && bud && act) data.varExpenses.push({ category: cat.value, budgeted: bud.value, actual: act.value });
        });

        return data;
    };

    document.getElementById('exportBtn').addEventListener('click', () => {
        const data = getFormData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `monthly_budget_${data.month || 'M'}_${data.year || 'Y'}.json`;
        a.click();
    });

    document.getElementById('csvBtn').addEventListener('click', () => {
        const data = getFormData();
        let csv = `Type,Category,Budgeted/Amount,Actual\n`;
        data.income.forEach(i => csv += `Income,"${i.category}",${i.amount},\n`);
        data.fixedExpenses.forEach(e => csv += `Fixed Expense,"${e.category}",${e.budgeted},${e.actual}\n`);
        data.varExpenses.forEach(e => csv += `Variable Expense,"${e.category}",${e.budgeted},${e.actual}\n`);

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `monthly_budget_${data.month || 'M'}_${data.year || 'Y'}.csv`;
        a.click();
    });

    document.getElementById('pdfBtn').addEventListener('click', () => {
        window.print();
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all inputs to 0?')) {
            document.querySelectorAll('input[type="number"]').forEach(input => input.value = "0");
            calculateTotals();
        }
    });

    // Prepopulate date
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('monthInput').value = monthNames[now.getMonth()];
    document.getElementById('yearInput').value = now.getFullYear();

});
