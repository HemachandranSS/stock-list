document.addEventListener('DOMContentLoaded', () => {

    const formatCurrency = (val) => '₹' + Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 });
    const parseNum = (val) => Number((val || '0').replace(/,/g, '')) || 0;

    // Generic Row Add
    const createRow = (tbodyId, type) => {
        const tbody = document.getElementById(tbodyId);
        if (!tbody) return;
        const tr = document.createElement('tr');

        if (type === 'asset') {
            tr.innerHTML = `
        <td><input type="text" placeholder="Category" /></td>
        <td><input type="text" placeholder="Description" /></td>
        <td><input type="number" class="asset-amt" value="0" /></td>
        <td>
          <select class="asset-type">
            <option value="Support Asset">Support Asset</option>
            <option value="Investible">Investible</option>
          </select>
        </td>
        <td><button class="remove-btn">×</button></td>
      `;
        } else if (type === 'cont-asset') {
            tr.innerHTML = `
        <td><input type="text" placeholder="Description" /></td>
        <td><input type="number" value="0" /></td>
        <td><input type="text" placeholder="Treatment" /></td>
        <td><button class="remove-btn">×</button></td>
      `;
        } else if (type === 'liability') {
            tr.innerHTML = `
        <td><input type="text" placeholder="Liability" /></td>
        <td><input type="text" /></td>
        <td><input type="number" class="liab-amt" value="0" /></td>
        <td style="text-align: center;"><input type="checkbox" class="is-emi" /></td>
        <td><input type="number" class="emi-amt" value="0" disabled /></td>
        <td><button class="remove-btn">×</button></td>
      `;
        } else if (type === 'income') {
            tr.innerHTML = `
        <td><input type="text" placeholder="Income Source" /></td>
        <td><input type="number" class="p-inc-amt" value="0" /></td>
        <td><button class="remove-btn">×</button></td>
      `;
        } else if (type === 'expense') {
            tr.innerHTML = `
        <td><input type="text" placeholder="Expense Category" /></td>
        <td><input type="number" class="p-exp-amt" value="0" /></td>
        <td><button class="remove-btn">×</button></td>
      `;
        }

        tbody.insertBefore(tr, tbody.querySelector('tr:last-child') ? null : null);
        if (tbodyId === 'assetsBody' || tbodyId === 'contAssetsBody' || tbodyId === 'liabilitiesBody' || tbodyId === 'incBody' || tbodyId === 'expBody') {
            // It's just inserting at end of target body
            tbody.appendChild(tr);
        }

        attachListeners(tr);
        calculateAll();
    };

    const attachListeners = (root) => {
        root.querySelectorAll('input').forEach(i => i.addEventListener('input', calculateAll));
        root.querySelectorAll('select').forEach(s => s.addEventListener('change', calculateAll));

        root.querySelectorAll('.remove-btn').forEach(b => {
            // ensure we don't attach multiple times if called on whole document
            if (!b.dataset.listened) {
                b.dataset.listened = "true";
                b.addEventListener('click', (e) => {
                    e.target.closest('tr').remove();
                    calculateAll();
                });
            }
        });

        root.querySelectorAll('.is-emi').forEach(c => {
            c.addEventListener('change', (e) => {
                const emiInput = e.target.closest('tr').querySelector('.emi-amt');
                if (emiInput) emiInput.disabled = !e.target.checked;
                calculateAll();
            });
        });
    };

    document.getElementById('addAssetBtn').addEventListener('click', () => createRow('assetsBody', 'asset'));
    document.getElementById('addContAssetBtn').addEventListener('click', () => createRow('contAssetsBody', 'cont-asset'));
    document.getElementById('addLiabBtn').addEventListener('click', () => createRow('liabilitiesBody', 'liability'));
    document.getElementById('addIncBtn').addEventListener('click', () => createRow('incBody', 'income'));
    document.getElementById('addExpBtn').addEventListener('click', () => createRow('expBody', 'expense'));

    const calculateAll = () => {
        // 1. ASSETS
        let totalAssets = 0;
        let investible = 0;
        let support = 0;
        document.querySelectorAll('#assetsBody tr').forEach(tr => {
            const amt = parseNum(tr.querySelector('.asset-amt')?.value);
            const type = tr.querySelector('.asset-type')?.value;
            totalAssets += amt;
            if (type === 'Investible') investible += amt;
            if (type === 'Support Asset') support += amt;
        });
        document.getElementById('totAssetsDisplay').textContent = formatCurrency(totalAssets);

        // 3. LIABILITIES & EMI
        let totalLiab = 0;
        let totalEmi = 0;
        document.querySelectorAll('#liabilitiesBody tr').forEach(tr => {
            const amt = parseNum(tr.querySelector('.liab-amt')?.value);
            const isEmi = tr.querySelector('.is-emi')?.checked;
            const emiAmt = isEmi ? parseNum(tr.querySelector('.emi-amt')?.value) : 0;
            totalLiab += amt;
            totalEmi += emiAmt;
        });
        document.getElementById('totLiabDisplay').textContent = formatCurrency(totalLiab);

        // 4. NET WORTH
        document.getElementById('nwAstDisplay').textContent = formatCurrency(totalAssets);
        document.getElementById('nwLiabDisplay').textContent = formatCurrency(totalLiab);
        const netWorth = totalAssets - totalLiab;
        document.getElementById('nwTotDisplay').textContent = formatCurrency(netWorth);

        // 5. ASSET SEGMENTATION
        document.getElementById('segInvDisplay').textContent = formatCurrency(investible);
        document.getElementById('segSupDisplay').textContent = formatCurrency(support);

        // INCOME
        let totalInc = 0;
        document.querySelectorAll('#incBody tr').forEach(tr => {
            totalInc += parseNum(tr.querySelector('.p-inc-amt')?.value);
        });
        document.getElementById('totPIncDisplay').textContent = formatCurrency(totalInc);

        // EXPENSES
        let totalExp = 0;
        document.querySelectorAll('#expBody tr').forEach(tr => {
            totalExp += parseNum(tr.querySelector('.p-exp-amt')?.value);
        });
        document.getElementById('totPExpDisplay').textContent = formatCurrency(totalExp);

        // SURPLUS / DEFICIT
        document.getElementById('surpIncDisplay').textContent = formatCurrency(totalInc);
        document.getElementById('surpExpDisplay').textContent = formatCurrency(totalExp);
        const surplus = totalInc - totalExp;
        document.getElementById('surpTotDisplay').textContent = surplus > 0 ? '+' + formatCurrency(surplus) : formatCurrency(surplus);

        const feedback = document.getElementById('surplusFeedback');
        if (surplus < 0) {
            feedback.innerHTML = `<span style="font-size:1.4em;">⚫</span> <strong>Small monthly deficit of ${formatCurrency(Math.abs(surplus))}</strong><br/><span style="color:var(--muted)">→ Practically breakeven, but <strong>no safety cushion</strong></span>`;
        } else if (surplus > 0) {
            feedback.innerHTML = `<span style="font-size:1.4em; color:var(--accent-green)">🟢</span> <strong>Monthly surplus of ${formatCurrency(surplus)}</strong><br/><span style="color:var(--muted)">→ Excess funds available for investing or savings</span>`;
        } else {
            feedback.innerHTML = `<span style="font-size:1.4em; color:var(--accent-yellow)">🟡</span> <strong>Perfectly balanced breakeven</strong><br/><span style="color:var(--muted)">→ Income meets expenses exactly</span>`;
        }

        // SOLVENCY CHECK
        // 1. Ratio
        const lnwRatio = netWorth !== 0 ? (totalLiab / netWorth).toFixed(2) : 0;
        const lStr = (totalLiab / 100000).toFixed(2) + 'L';
        const nwStr = (netWorth / 100000).toFixed(2) + 'L';
        document.getElementById('solvLnwCalc').innerHTML = `[<br/>= ${lStr} / ${nwStr}<br/>= ${lnwRatio}<br/>]`;

        const lnwBadge = document.getElementById('solvLnwStatus');
        lnwBadge.className = 'status-badge';
        if (lnwRatio < 1) {
            lnwBadge.classList.add('status-healthy');
            lnwBadge.textContent = 'Healthy (Danger zone > 2)';
        } else if (lnwRatio >= 2) {
            lnwBadge.classList.add('status-danger');
            lnwBadge.textContent = 'Danger (Ratio > 2)';
        } else {
            lnwBadge.classList.add('status-borderline');
            lnwBadge.textContent = 'Borderline (Approaching 2)';
        }

        // 2. EMI Coverage
        const surpBeforeEmi = surplus + totalEmi;
        document.getElementById('rEmiRaw').textContent = formatCurrency(totalEmi);
        document.getElementById('rSurpRaw').textContent = formatCurrency(surpBeforeEmi);

        const emiRatio = totalEmi > 0 ? (surpBeforeEmi / totalEmi).toFixed(1) : '∞';
        let emiStr = emiRatio === '∞' ? '∞' : parseFloat(emiRatio).toFixed(1);
        document.getElementById('solvEmiCalc').innerHTML = `[<br/>= ${Number(surpBeforeEmi).toLocaleString('en-IN')} / ${Number(totalEmi).toLocaleString('en-IN')}<br/>= ${emiStr}<br/>]`;

        const emiBadge = document.getElementById('solvEmiStatus');
        emiBadge.className = 'status-badge';
        if (emiRatio === '∞' || parseFloat(emiRatio) >= 1.25) {
            emiBadge.classList.add('status-healthy');
            emiBadge.textContent = 'Healthy (Recommended ≥ 1.25)';
        } else if (parseFloat(emiRatio) >= 1.0) {
            emiBadge.classList.add('status-borderline');
            emiBadge.textContent = 'Borderline (Recommended ≥ 1.25)';
        } else {
            emiBadge.classList.add('status-danger');
            emiBadge.textContent = 'Danger (< 1.0 means Deficit)';
        }
    };

    attachListeners(document);

    // init date
    const now = new Date();
    document.getElementById('asOnDate').value = now.toISOString().split('T')[0];

    calculateAll();

    // EXPORTS
    const getFormData = () => {
        const data = {
            date: document.getElementById('asOnDate').value,
            summary: {
                totalAssets: document.getElementById('totAssetsDisplay').textContent,
                totalLiabilities: document.getElementById('totLiabDisplay').textContent,
                netWorth: document.getElementById('nwTotDisplay').textContent,
                investiblePort: document.getElementById('segInvDisplay').textContent,
                supportAst: document.getElementById('segSupDisplay').textContent,
                totalIncome: document.getElementById('totPIncDisplay').textContent,
                totalExpenses: document.getElementById('totPExpDisplay').textContent,
                surplus: document.getElementById('surpTotDisplay').textContent,
                liabilitiesToNw: document.getElementById('solvLnwStatus').textContent,
                emiCoverage: document.getElementById('solvEmiStatus').textContent
            },
            assets: [],
            contAssets: [],
            liabilities: [],
            income: [],
            expenses: []
        };

        document.querySelectorAll('#assetsBody tr').forEach(tr => {
            data.assets.push({
                category: tr.cells[0]?.querySelector('input')?.value,
                desc: tr.cells[1]?.querySelector('input')?.value,
                amount: parseNum(tr.cells[2]?.querySelector('input')?.value),
                type: tr.cells[3]?.querySelector('select')?.value
            });
        });
        document.querySelectorAll('#contAssetsBody tr').forEach(tr => {
            data.contAssets.push({
                desc: tr.cells[0]?.querySelector('input')?.value,
                amount: parseNum(tr.cells[1]?.querySelector('input')?.value),
                treatment: tr.cells[2]?.querySelector('input')?.value
            });
        });
        document.querySelectorAll('#liabilitiesBody tr').forEach(tr => {
            data.liabilities.push({
                liability: tr.cells[0]?.querySelector('input')?.value,
                details: tr.cells[1]?.querySelector('input')?.value,
                amount: parseNum(tr.cells[2]?.querySelector('input')?.value),
                isEmi: tr.cells[3]?.querySelector('input')?.checked,
                emi: parseNum(tr.cells[4]?.querySelector('input')?.value)
            });
        });
        document.querySelectorAll('#incBody tr').forEach(tr => {
            data.income.push({
                source: tr.cells[0]?.querySelector('input')?.value,
                amount: parseNum(tr.cells[1]?.querySelector('input')?.value)
            });
        });
        document.querySelectorAll('#expBody tr').forEach(tr => {
            data.expenses.push({
                category: tr.cells[0]?.querySelector('input')?.value,
                amount: parseNum(tr.cells[1]?.querySelector('input')?.value)
            });
        });
        return data;
    };

    document.getElementById('exportBtn').addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(getFormData(), null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = 'financial_statement.json'; a.click();
    });

    document.getElementById('csvBtn').addEventListener('click', () => {
        const data = getFormData();
        let csv = `Date,${data.date}\n\n`;

        csv += `--- SUMMARY ---\n`;
        csv += `Metric,Value\n`;
        csv += `Total Assets,${data.summary.totalAssets}\n`;
        csv += `Total Liabilities,${data.summary.totalLiabilities}\n`;
        csv += `Net Worth,${data.summary.netWorth}\n`;
        csv += `Investible Portfolio,${data.summary.investiblePort}\n`;
        csv += `Support Assets,${data.summary.supportAst}\n`;
        csv += `Total Income,${data.summary.totalIncome}\n`;
        csv += `Total Expenses,${data.summary.totalExpenses}\n`;
        csv += `Net Surplus/Deficit,${data.summary.surplus}\n`;
        csv += `Liabilities to Net Worth Ratio,${data.summary.liabilitiesToNw}\n`;
        csv += `EMI Coverage Ratio,${data.summary.emiCoverage}\n\n`;

        csv += `--- DETAILS ---\n`;
        csv += `Type,Category/Source,Description/Details,Amount,Extra\n`;
        data.assets.forEach(x => csv += `Asset,"${x.category}","${x.desc}",${x.amount},${x.type}\n`);
        data.contAssets.forEach(x => csv += `Contingent Asset,,"${x.desc}",${x.amount},${x.treatment}\n`);
        data.liabilities.forEach(x => csv += `Liability,"${x.liability}","${x.details}",${x.amount},EMI:${x.emi}\n`);
        data.income.forEach(x => csv += `Income,"${x.source}",,${x.amount},\n`);
        data.expenses.forEach(x => csv += `Expense,"${x.category}",,${x.amount},\n`);

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = 'financial_statement.csv'; a.click();
    });

    document.getElementById('pdfBtn').addEventListener('click', () => {
        // Convert selects to visible text spans for PDF
        const selects = document.querySelectorAll('select.asset-type');
        const textSpans = [];
        selects.forEach(sel => {
            const span = document.createElement('span');
            span.textContent = sel.options[sel.selectedIndex].text;
            span.className = 'print-select-text';
            sel.style.display = 'none';
            sel.parentNode.insertBefore(span, sel.nextSibling);
            textSpans.push({ span, sel });
        });

        // Hide add/remove buttons
        const addBtns = document.querySelectorAll('.add-btn, .remove-btn');
        addBtns.forEach(b => b.style.display = 'none');

        window.print();

        // Restore after print
        textSpans.forEach(({ span, sel }) => {
            sel.style.display = '';
            span.remove();
        });
        addBtns.forEach(b => b.style.display = '');
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all numerical inputs to 0?')) {
            document.querySelectorAll('input[type="number"]').forEach(input => input.value = "0");
            calculateAll();
        }
    });

});
