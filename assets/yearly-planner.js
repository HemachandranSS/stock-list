document.addEventListener('DOMContentLoaded', () => {
    const formatCurrency = (val) => '₹' + Number(val).toLocaleString('en-IN');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // init annual table
    const tbody = document.querySelector('#yearlyTable tbody');

    months.forEach((month, idx) => {
        // Add input cells for Income, Fixed Exp, Var Exp
        const trInc = tbody.querySelector('tr[data-type="income"]');
        trInc.insertAdjacentHTML('beforeend', `<td><input type="number" class="inc-m" data-m="${idx}" value="0"></td>`);

        const trFExp = tbody.querySelector('tr[data-type="fixed-expense"]');
        trFExp.insertAdjacentHTML('beforeend', `<td><input type="number" class="fexp-m" data-m="${idx}" value="0"></td>`);

        const trVExp = tbody.querySelector('tr[data-type="var-expense"]');
        trVExp.insertAdjacentHTML('beforeend', `<td><input type="number" class="vexp-m" data-m="${idx}" value="0"></td>`);

        // Add display cells for Total Exp, Net Sav, Sav Rate
        const trTExp = tbody.querySelector('tr[data-type="total-expense"]');
        trTExp.insertAdjacentHTML('beforeend', `<td class="value-display texp-m" data-m="${idx}">₹0</td>`);

        const trNSav = tbody.querySelector('tr[data-type="net-savings"]');
        trNSav.insertAdjacentHTML('beforeend', `<td class="value-display nsav-m" data-m="${idx}">₹0</td>`);

        const trSRate = tbody.querySelector('tr[data-type="savings-rate"]');
        trSRate.insertAdjacentHTML('beforeend', `<td class="value-display srate-m" data-m="${idx}">0.0%</td>`);
    });

    // Add total columns
    ['income', 'fixed-expense', 'var-expense', 'total-expense', 'net-savings', 'savings-rate'].forEach(type => {
        const tr = tbody.querySelector(`tr[data-type="${type}"]`);
        tr.insertAdjacentHTML('beforeend', `<td class="total-col t-${type}">₹0</td>`);
    });

    document.querySelector('.t-savings-rate').innerHTML = "0.0%"; // specific format

    const calculateAnnual = () => {
        let yearInc = 0;
        let yearFExp = 0;
        let yearVExp = 0;

        months.forEach((_, m) => {
            const inc = Number(tbody.querySelector(`.inc-m[data-m="${m}"]`).value) || 0;
            const fexp = Number(tbody.querySelector(`.fexp-m[data-m="${m}"]`).value) || 0;
            const vexp = Number(tbody.querySelector(`.vexp-m[data-m="${m}"]`).value) || 0;

            const texp = fexp + vexp;
            const sav = inc - texp;
            const rate = inc > 0 ? (sav / inc) * 100 : 0;

            tbody.querySelector(`.texp-m[data-m="${m}"]`).textContent = formatCurrency(texp);
            tbody.querySelector(`.nsav-m[data-m="${m}"]`).textContent = formatCurrency(sav);
            tbody.querySelector(`.srate-m[data-m="${m}"]`).textContent = rate.toFixed(1) + '%';

            yearInc += inc;
            yearFExp += fexp;
            yearVExp += vexp;
        });

        const yearTExp = yearFExp + yearVExp;
        const yearSav = yearInc - yearTExp;
        const yearRate = yearInc > 0 ? (yearSav / yearInc) * 100 : 0;

        document.querySelector('.t-income').textContent = formatCurrency(yearInc);
        document.querySelector('.t-fixed-expense').textContent = formatCurrency(yearFExp);
        document.querySelector('.t-var-expense').textContent = formatCurrency(yearVExp);
        document.querySelector('.t-total-expense').textContent = formatCurrency(yearTExp);
        document.querySelector('.t-net-savings').textContent = formatCurrency(yearSav);
        document.querySelector('.t-savings-rate').textContent = yearRate.toFixed(1) + '%';
    };

    tbody.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateAnnual);
    });

    calculateAnnual();

    // 50-30-20 Rule
    const ruleInput = document.getElementById('ruleIncomeInput');
    const calculateRule = () => {
        const income = Number(ruleInput.value) || 0;
        document.getElementById('needsAmtDisplay').textContent = formatCurrency(income * 0.50);
        document.getElementById('wantsAmtDisplay').textContent = formatCurrency(income * 0.30);
        document.getElementById('savingsAmtDisplay').textContent = formatCurrency(income * 0.20);
    };
    ruleInput.addEventListener('input', calculateRule);
    calculateRule();

    // Export Logic
    const getFormData = () => {
        const data = { year: 2026, months: [] };

        months.forEach((mName, m) => {
            const inc = Number(tbody.querySelector(`.inc-m[data-m="${m}"]`).value) || 0;
            const fexp = Number(tbody.querySelector(`.fexp-m[data-m="${m}"]`).value) || 0;
            const vexp = Number(tbody.querySelector(`.vexp-m[data-m="${m}"]`).value) || 0;
            data.months.push({ month: mName, income: inc, fixedExpenses: fexp, varExpenses: vexp });
        });

        return data;
    };

    document.getElementById('exportBtn').addEventListener('click', () => {
        const data = getFormData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `yearly_budget.json`;
        a.click();
    });

    document.getElementById('csvBtn').addEventListener('click', () => {
        const data = getFormData();
        let csv = `Month,Income,Fixed Expenses,Variable Expenses\n`;
        data.months.forEach(m => {
            csv += `${m.month},${m.income},${m.fixedExpenses},${m.varExpenses}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `yearly_budget.csv`;
        a.click();
    });

    document.getElementById('pdfBtn').addEventListener('click', () => {
        window.print();
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all inputs to 0?')) {
            document.querySelectorAll('input[type="number"]').forEach(input => input.value = "0");
            calculateAnnual();
            calculateRule();
        }
    });
});
