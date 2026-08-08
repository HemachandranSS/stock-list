const sections = [
  {
    title: "Industry Research",
    items: [
      "What stage is the Industry at? Innovation/ Growth / Maturity / Decline",
      "What is the Market Size of the Industry?",
      "Is the market size atleast 5x of company's sales?",
      "Can the Industry Players increase price of their products each year?",
      "What are the key success factors in the Industry?",
      "Is there anything that keeps others from entering the industry?",
      "Do the Industry leaders stay same or keep on changing over years?",
      "Are most companies in the industry, doing well or struggling?",
      "Do they hold too much bargaining power over the companies in the Industry?",
      "Customers",
      "Suppliers",
      "Competitors",
      "What are the Major Risks?",
      "Is it regulated? Strict or Linient?"
    ]
  },
  {
    title: "Business Model",
    items: [
      "What products/ services does the company sell?",
      "How do they make their money? (Subscriptions/ ads/ selling products etc.)",
      "Is the product/ service Unique? Can it stay that way?",
      "Will the product/ service stay relevant 10 years from today according to you?",
      "What are the substitutes? Why are they better? Are customers switching?",
      "Is the company growing its market share?",
      "What are the major costs associated with selling the product?",
      "Are the costs fixed or variable?",
      "What unique assets does the company have that competitors don't?"
    ]
  },
  {
    title: "Knowing the Company",
    items: [
      "What is the rank of Company in the Industry? (In competitive sense)",
      "How long company has been in existence?",
      "Has it had the same business in the past decade?",
      "Is the core business expected to grow in next decade?",
      "What are the pros and cons of the company in comparison with competitors?",
      "What are the Competitive Advantages and Disadvantages that the company has?",
      "Is its growth Organic or acquired?"
    ]
  },
  {
    title: "Management",
    items: [
      "Who are the top level management?",
      "How has the company performed under same management in the past?",
      "What is their Compensation structure?",
      "What promises they have made and fulfilled in the past?",
      "Are the promoters shares pledged? If yes, then what percentage?",
      "What is their holding %?",
      "What % of management's net worth is this company?",
      "Who are in Board of Directors?"
    ]
  },
  {
    title: "Financial Statements",
    groups: [
      {
        heading: "Annual Report",
        items: [
          "What are the goals in Chairman's Letter and Ceo's letter?",
          "What is the Tone of Management? Openness/ Honesty/ Ethical/ Secretative",
          "What are the Future Goals? Do they seem realistic to you?",
          "What are their views on Foreseeable risk?",
          "What were the matters for which Special Resoltuions have been passed?"
        ]
      },
      {
        heading: "Income Statement",
        groups: [
          {
            heading: "Revenue",
            items: [
              "What are the Major sources of revenue?",
              "What is the growth trend of revenue in the past?",
              "What product lines are growing?"
            ]
          },
          {
            heading: "Cost of Goods",
            items: [
              "What is its Gross Margin?",
              "What are the major raw materials?",
              "Does company benefits from economies of Scale?"
            ]
          },
          {
            heading: "Expenses",
            items: [
              "What are the largest expenses on a common-size Income Statement?",
              "Are the costs in line with other Industry players?",
              "Check the breakup of major line items from Notes to accounts."
            ]
          },
          {
            heading: "Profitability",
            items: [
              "Are the Fixed Costs too high?",
              "Are the margins increasing/ decreasing?",
              "What is contributing to margin change as per common size?",
              "Is return on equity more than 15%? Is it changing?"
            ]
          }
        ]
      },
      {
        heading: "Balance Sheet",
        items: [
          "What is company's Debt to Equity composition?",
          "What is the Fixed Asset turnover for the company?",
          "What is the working capital turnover for the company?",
          "What are the biggest line items on the Balance Sheet?",
          "How are the bigger line items changing over the years?"
        ]
      },
      {
        heading: "Cashflow Statement",
        items: [
          "Does this company have a cash flow from operations in line with the Profit After Tax over years?",
          "How is the company using the capital over the years? (In CFI and CFF)",
          "Capital Expenditure?",
          "Acquisitions",
          "Dividends",
          "Buybacks",
          "Does the company generate free cash flow consistently over the years (CFO - CFI)"
        ]
      },
      {
        heading: "Financial Ratios",
        items: [
          "Historical Performances of last 10 years:",
          "Does the company generate ROE more than 15%",
          "Does the company generate ROCE more than 12%",
          "Gross margin",
          "EBITDA Margin",
          "EBIT Margin",
          "Return on Equity",
          "Return on Captial employed",
          "Return on Assets"
        ]
      }
    ]
  },
  {
    title: "Ownership",
    items: [
      "Who are the major investors in the company?",
      "What is Promotors holding? Is there any change in last 2-5 Years?",
      "Have the promoters bought any additional stake in the business recently?",
      "Are the Institutional investors increasing or decreasing their ownership in the company?"
    ]
  },
  {
    title: "Valuation",
    items: [
      "What is the book value of company and per share?",
      "What is Market Value/ Earnings?",
      "Enterprise Value/EBITDA",
      "Does the company have good expected return on Exit Multiple Table?",
      "Are the valuation ratios within the historical valuation bands?",
      "What is company's Growth rate in terms of?",
      "Earnings",
      "EBITDA",
      "Free Cash Flow",
      "Are there any risks or threats to the survival of the company in next 5 years?"
    ]
  },
  {
    title: "Questions to Ask",
    items: [
      "Does company have room to expand its core business?",
      "Can it survive for long?",
      "What are the 2-3 major risk factors? Eg: Ban on Plastic is Major risk for Plastic bag MFT.",
      "Can you imagine yourself holding this company's stock for 5 years?",
      "If someone had unlimited resources, what are the chances that they could become a good competition?",
      "Will it help you diversify your Portfolio in business?",
      "Has it earned good returns consistently in the past? Will it sustain?",
      "Is something changing in the business? New product/ Management/ M&A/ Entry in new markets"
    ]
  }
];

const form = document.getElementById("checklistForm");
const toc = document.getElementById("toc");
const template = document.getElementById("questionTemplate");
const questionCount = document.getElementById("questionCount");
const companySearch = document.getElementById("companySearch");
const companySuggestions = document.getElementById("companySuggestions");
let companyIndex = typeof companyIndexData !== "undefined" ? companyIndexData : [];

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function questionId(sectionTitle, item) {
  return `${slug(sectionTitle)}-${slug(item)}`;
}

function groupId(path, heading) {
  return `group-${slug([...path, heading].join("-"))}`;
}

function extractUrl(value) {
  if (!value) return "";
  const text = String(value).trim();
  const markdownMatch = text.match(/^\[(https?:\/\/[^\]]+)\]\((https?:\/\/[^)]+)\)$/i);
  if (markdownMatch) return markdownMatch[2];
  const urlMatch = text.match(/https?:\/\/[^\s)]+/i);
  return urlMatch ? urlMatch[0] : text;
}

function buildResearchLinks(item) {
  const companyName = (item.companyName || "").trim();
  const nseSymbol = (item.nseSymbol || "").trim();
  const bseSymbol = String(item.bseSymbol || "").trim();
  const businessLineLink = extractUrl(item.businessLineLink) || extractUrl(item.businesslineLink) || extractUrl(item["Business Line Link"]);
  const searchTerm = encodeURIComponent([companyName, nseSymbol, bseSymbol].filter(Boolean).join(" "));
  const screenerTarget = encodeURIComponent((nseSymbol || bseSymbol || companyName || "").replace(/\s+/g, ""));

  return {
    businessLineLink,
    screenerLink: nseSymbol || bseSymbol
      ? `https://www.screener.in/company/${screenerTarget}/`
      : `https://www.google.com/search?q=${encodeURIComponent(`${companyName} screener`)}`,
    googleLink: `https://www.google.com/search?q=${searchTerm}`
  };
}

function buildForm() {
  let total = 0;
  toc.innerHTML = "";

  const addTocLink = (text, href, className = "") => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    if (className) link.className = className;
    toc.appendChild(link);
    return link;
  };

  sections.forEach((section, sectionIndex) => {
    const sectionId = `section-${slug(section.title)}`;
    addTocLink(section.title, `#${sectionId}`, "toc-link");

    const sectionEl = document.createElement("section");
    sectionEl.className = "section-block";
    sectionEl.id = sectionId;

    const sectionTitleEl = document.createElement("div");
    sectionTitleEl.className = "section-head";
    sectionTitleEl.innerHTML = `<h2>${section.title}</h2><span>${countSectionItems(section)} prompts</span>`;
    sectionEl.appendChild(sectionTitleEl);

    const appendItems = (container, titlePath, items) => {
      items.forEach((item, itemIndex) => {
        total += 1;
        const id = questionId(titlePath.join(" - "), item);
        const node = template.content.cloneNode(true);
        const card = node.querySelector(".question-card");
        const prompt = node.querySelector(".prompt-text");
        const sectionTag = node.querySelector(".section-tag");
        const title = node.querySelector("h3");

        card.dataset.questionId = id;
        sectionTag.textContent = titlePath.join(" / ");
        title.textContent = `Item ${itemIndex + 1}`;
        prompt.textContent = item;

        node.querySelector(".answer").name = `${id}_answer`;
        node.querySelector(".sentiment").name = `${id}_sentiment`;
        node.querySelector(".weightage").name = `${id}_weightage`;
        node.querySelector(".sources").name = `${id}_sources`;
        node.querySelector(".remarks").name = `${id}_remarks`;
        node.querySelector(".status").name = `${id}_status`;

        container.appendChild(node);
      });
    };

    const renderGroup = (parent, group, path) => {
      const currentPath = [...path, group.heading];
      const currentId = groupId(path, group.heading);
      addTocLink(group.heading, `#${currentId}`, `toc-link toc-subitem toc-level-${currentPath.length}`);

      const groupWrap = document.createElement("div");
      groupWrap.className = "group-block";
      groupWrap.id = currentId;
      groupWrap.innerHTML = `<div class="group-head"><h3>${group.heading}</h3><span>${countGroupItems(group)} prompts</span></div>`;
      parent.appendChild(groupWrap);

      if (group.items) {
        appendItems(groupWrap, currentPath, group.items);
      }

      if (group.groups) {
        group.groups.forEach((child) => renderGroup(groupWrap, child, currentPath));
      }
    };

    if (section.items) {
      appendItems(sectionEl, [section.title], section.items);
    }

    if (section.groups) {
      section.groups.forEach((group) => renderGroup(sectionEl, group, [section.title]));
    }

    form.appendChild(sectionEl);
  });

  if (questionCount) {
    questionCount.textContent = total;
  }
}

function renderCompanySuggestions(matches) {
  if (!matches.length) {
    companySuggestions.innerHTML = `<div class="search-suggestion-empty">No matching companies found</div>`;
    companySuggestions.classList.add("open");
    return;
  }

  companySuggestions.innerHTML = matches.slice(0, 10).map((item) => `
    <button type="button" class="search-suggestion-item"
      data-company="${item.companyName}"
      data-sector="${item.sector}"
      data-nse="${item.nseSymbol}"
      data-bse="${item.bseSymbol}"
      data-business-line="${item.businessLineLink || ""}">
      <span class="search-suggestion-title">${item.companyName}</span>
      <span class="search-suggestion-meta">${item.sector} · ${item.nseSymbol || item.bseSymbol || ""}</span>
    </button>
  `).join("");

  companySuggestions.classList.add("open");
}

function applyCompanySelection(item) {
  const companyNameInput = document.getElementById("companyName") || form.elements.namedItem("company_name");
  const sectorInput = document.getElementById("companySector") || form.elements.namedItem("company_sector");
  const nseInput = document.getElementById("nseSymbol") || form.elements.namedItem("nse_symbol");
  const bseInput = document.getElementById("bseSymbol") || form.elements.namedItem("bse_symbol");
  const businessLineInput = document.getElementById("businessLineLink") || form.elements.namedItem("businessline_link");
  const screenerInput = document.getElementById("screenerLink") || form.elements.namedItem("screener_link");
  const googleInput = document.getElementById("googleLink") || form.elements.namedItem("google_link");
  const links = buildResearchLinks(item);

  if (companyNameInput) companyNameInput.value = item.companyName;
  if (sectorInput) sectorInput.value = item.sector;
  if (nseInput) nseInput.value = item.nseSymbol;
  if (bseInput) bseInput.value = item.bseSymbol;
  if (businessLineInput) {
    businessLineInput.href = links.businessLineLink;
    businessLineInput.textContent = links.businessLineLink;
  }
  if (screenerInput) {
    screenerInput.href = links.screenerLink;
    screenerInput.textContent = links.screenerLink;
  }
  if (googleInput) {
    googleInput.href = links.googleLink;
    googleInput.textContent = links.googleLink;
  }
  if (companySearch) companySearch.value = item.companyName;

  companySuggestions.classList.remove("open");
  persistDraft();
}

function filterCompanies(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return companyIndex.filter((item) =>
    item.companyName.toLowerCase().includes(q) ||
    item.sector.toLowerCase().includes(q) ||
    item.nseSymbol.toLowerCase().includes(q) ||
    String(item.bseSymbol).includes(q)
  );
}

function setupCompanySearch() {
  if (!companySearch || !companySuggestions) return;

  companySearch.addEventListener("input", () => {
    renderCompanySuggestions(filterCompanies(companySearch.value));
  });

  companySearch.addEventListener("focus", () => {
    renderCompanySuggestions(filterCompanies(companySearch.value));
  });

  companySearch.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      companySuggestions.classList.remove("open");
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const first = companyIndex.find((item) =>
        item.companyName.toLowerCase().includes(companySearch.value.trim().toLowerCase()) ||
        item.sector.toLowerCase().includes(companySearch.value.trim().toLowerCase()) ||
        item.nseSymbol.toLowerCase().includes(companySearch.value.trim().toLowerCase()) ||
        String(item.bseSymbol).includes(companySearch.value.trim())
      );
      if (first) applyCompanySelection(first);
    }
  });

  companySuggestions.addEventListener("click", (e) => {
    const button = e.target.closest(".search-suggestion-item");
    if (!button) return;
    applyCompanySelection({
      companyName: button.dataset.company,
      sector: button.dataset.sector,
      nseSymbol: button.dataset.nse,
      bseSymbol: button.dataset.bse,
      businessLineLink: button.dataset.businessLine
    });
  });

  document.addEventListener("click", (e) => {
    if (!companySearch.contains(e.target) && !companySuggestions.contains(e.target)) {
      companySuggestions.classList.remove("open");
    }
  });
}

function setupLinkChips() {
  document.querySelectorAll(".link-chip").forEach((chip) => {
    chip.addEventListener("click", (e) => {
      const href = chip.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
    });
  });
}

function countSectionItems(section) {
  if (section.items) return section.items.length;
  return section.groups ? section.groups.reduce((sum, group) => sum + countGroupItems(group), 0) : 0;
}

function countGroupItems(group) {
  const itemCount = group.items ? group.items.length : 0;
  const childCount = group.groups ? group.groups.reduce((sum, child) => sum + countGroupItems(child), 0) : 0;
  return itemCount + childCount;
}

function formDataToJson() {
  const data = {};
  const entries = new FormData(form).entries();
  for (const [key, value] of entries) {
    data[key] = value;
  }
  return data;
}

function getFieldValue(id, fallback = "") {
  const el = document.getElementById(id);
  return el && "value" in el ? el.value : fallback;
}

function buildChecklistTitle() {
  const companyName = getFieldValue("companyName", "").trim();
  return companyName ? `The Equity Research Checklist (${companyName})` : "The Equity Research Checklist";
}

function buildExportBaseName() {
  const companyName = getFieldValue("companyName", "company");
  const normalizedCompany = companyName
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/(^_|_$)/g, "");

  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = String(now.getFullYear());
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");

  return `${normalizedCompany}_checklist_${dd}_${mm}_${yyyy}_${hh}_${min}_${sec}`;
}

function formatGeneratedAt(date = new Date()) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  const time = date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" });
  return `${dd}_${mm}_${yyyy} ${time}`;
}

function getAllQuestions() {
  return Array.from(form.querySelectorAll(".question-card"))
    .map((card, index) => {
      const status = card.querySelector(".status")?.value || "";
      const answer = (card.querySelector(".answer")?.value || "").trim();
      const sentiment = (card.querySelector(".sentiment")?.value || "").trim();
      const weightage = (card.querySelector(".weightage")?.value || "").trim();
      const sources = (card.querySelector(".sources")?.value || "").trim();
      const remarks = (card.querySelector(".remarks")?.value || "").trim();
      const prompt = card.querySelector(".prompt-text")?.textContent || "";
      const section = card.querySelector(".section-tag")?.textContent || "";
      const itemTitle = card.querySelector(".question-head h3")?.textContent || `Item ${index + 1}`;

      if (status !== "Done") return null;
      if (!answer && !sentiment && !weightage && !sources && !remarks) return null;

      return {
        section,
        item: itemTitle,
        prompt,
        answer,
        sentiment,
        weightage,
        sources,
        remarks,
        status
      };
    })
    .filter(Boolean);
}

function safeText(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function buildPrintHtml() {
  const questionsData = getAllQuestions();
  const exportBaseName = buildExportBaseName();
  const checklistTitle = buildChecklistTitle();
  const questions = questionsData.map((question) => {
    const { prompt, section, item, answer, sentiment, weightage, sources, remarks, status } = question;

    return `
      <section class="print-question">
        <div class="print-q-head">
          <div>
            <div class="print-section">${safeText(section)}</div>
            <h3>${safeText(item)}</h3>
          </div>
          <div class="print-pill">${safeText(status || "No status")}</div>
        </div>
        <div class="print-prompt">${safeText(prompt)}</div>
        <div class="field field-answer"><dt>Answer</dt><dd>${safeText(answer) || "&nbsp;"}</dd></div>
        <div class="print-row">
          <div class="field field-sentiment"><dt>Sentiment</dt><dd>${safeText(sentiment) || "&nbsp;"}</dd></div>
          <div class="field field-weight"><dt>Weightage</dt><dd>${safeText(weightage) || "&nbsp;"}</dd></div>
        </div>
        <div class="field field-sources"><dt>Sources</dt><dd>${safeText(sources) || "&nbsp;"}</dd></div>
        <div class="field field-remarks"><dt>Remarks</dt><dd>${safeText(remarks) || "&nbsp;"}</dd></div>
      </section>
    `;
  }).join("");

  return `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>${safeText(exportBaseName)}</title>
      <style>
        :root{
          --bg:#f5f7fb;
          --card:#ffffff;
          --line:#d9e2f1;
          --text:#111827;
          --muted:#64748b;
          --accent:#6d5efc;
          --accent-2:#f45aa7;
        }
        *{box-sizing:border-box}
        body{
          margin:0;
          padding:10px;
          font-family:Inter,Segoe UI,Arial,sans-serif;
          color:var(--text);
          background:linear-gradient(180deg,#eef3ff 0%,#f8fbff 100%);
        }
        .sheet{
          max-width:920px;
          margin:0 auto;
        }
        .hero{
          padding:16px 18px 12px;
          border:1px solid var(--line);
          border-radius:18px;
          background:linear-gradient(135deg,#ffffff 0%,#f7f4ff 100%);
          box-shadow:0 8px 18px rgba(15,23,42,.05);
          margin-bottom:12px;
        }
        h1{margin:0;font-size:22px;line-height:1.08;letter-spacing:-0.02em}
        .subtitle{margin:6px 0 0;color:var(--muted);font-size:11px;line-height:1.35}
        .meta{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:8px;
          margin:12px 0 12px;
          align-items:stretch;
        }
        .meta div{
          padding:8px 10px;
          border:1px solid var(--line);
          border-radius:12px;
          background:rgba(255,255,255,.85);
          min-height:52px;
        }
        .meta label{
          display:block;
          font-size:9px;
          color:var(--muted);
          margin-bottom:3px;
          text-transform:uppercase;
          letter-spacing:.08em;
          font-weight:700;
        }
        .print-question{
          border:1px solid var(--line);
          border-radius:14px;
          padding:12px;
          margin:0 0 10px;
          background:var(--card);
          box-shadow:0 6px 14px rgba(15,23,42,.035);
          break-inside:auto;
          page-break-inside:auto;
        }
        .print-q-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;margin-bottom:4px}
        .print-q-head > div{min-width:0}
        .print-section{
          font-size:10px;
          font-weight:800;
          color:var(--accent);
          text-transform:uppercase;
          letter-spacing:.1em;
        }
        .print-question h3{margin:3px 0 0;font-size:15px;line-height:1.18;overflow-wrap:anywhere}
        .print-pill{
          padding:5px 9px;
          border-radius:999px;
          background:linear-gradient(135deg,rgba(109,94,252,.12),rgba(244,90,167,.12));
          color:#7c3aed;
          font-size:10px;
          white-space:nowrap;
          border:1px solid rgba(109,94,252,.14);
        }
        .print-prompt{
          margin:8px 0 10px;
          font-size:12px;
          line-height:1.42;
          color:#1f2937;
          overflow-wrap:anywhere;
        }
        .print-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}
        .field{
          border:1px solid #e6ebf4;
          border-radius:10px;
          padding:8px 9px;
          background:#fafcff;
          min-width:0;
        }
        .field-answer{margin-top:6px}
        .field-sources,.field-remarks{margin-top:8px}
        .field-sentiment,.field-weight{min-height:56px}
        dt{
          font-size:9px;
          font-weight:800;
          color:var(--muted);
          text-transform:uppercase;
          letter-spacing:.08em;
          margin-bottom:4px;
        }
        dd{
          margin:0;
          font-size:11px;
          line-height:1.4;
          white-space:pre-wrap;
          color:#111827;
          overflow-wrap:anywhere;
        }
        @media print {
          @page{size:A4;margin:6mm}
          body{background:#fff;padding:0}
          .sheet{max-width:none}
          .hero,.print-question{box-shadow:none}
          .hero{break-inside:avoid}
          .print-row{grid-template-columns:1fr 1fr}
        }
      </style>
    </head>
    <body>
      <div class="sheet">
        <div class="hero">
          <h1>${safeText(checklistTitle)}</h1>
          <p class="subtitle">${safeText(getFieldValue("companyName", "") || "Selected company")} report generated from the filled checklist fields.</p>
        </div>
        <div class="meta">
          <div><label>Company</label>${safeText(getFieldValue("companyName"))}</div>
          <div><label>Sector</label>${safeText(getFieldValue("companySector"))}</div>
          <div><label>NSE Symbol</label>${safeText(getFieldValue("nseSymbol"))}</div>
          <div><label>BSE Symbol</label>${safeText(getFieldValue("bseSymbol"))}</div>
          <div><label>Questions</label>${safeText(questionsData.length)} total items</div>
          <div><label>Generated</label>${safeText(formatGeneratedAt())}</div>
        </div>
        ${questions}
      </div>
    </body>
    </html>
  `;
}

function downloadJson() {
  const questions = getAllQuestions();
  const payload = {
    checklist_title: buildChecklistTitle(),
    company_name: getFieldValue("companyName", ""),
    company_sector: getFieldValue("companySector", ""),
    nse_symbol: getFieldValue("nseSymbol", ""),
    bse_symbol: getFieldValue("bseSymbol", ""),
    question_count: questions.length,
    generated_at: formatGeneratedAt(),
    questions
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${buildExportBaseName()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadCsv() {
  const questions = getAllQuestions();
  const header = [
    "checklist_title",
    "company_name",
    "company_sector",
    "nse_symbol",
    "bse_symbol",
    "generated_at",
    "section",
    "item",
    "prompt",
    "answer",
    "sentiment",
    "weightage",
    "sources",
    "remarks",
    "status"
  ];

  const meta = {
    checklist_title: buildChecklistTitle(),
    company_name: getFieldValue("companyName", ""),
    company_sector: getFieldValue("companySector", ""),
    nse_symbol: getFieldValue("nseSymbol", ""),
    bse_symbol: getFieldValue("bseSymbol", ""),
    generated_at: formatGeneratedAt()
  };

  const metaRow = [
    meta.checklist_title,
    meta.company_name,
    meta.company_sector,
    meta.nse_symbol,
    meta.bse_symbol,
    meta.generated_at,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ].map(csvEscape).join(",");

  const rows = questions.map((q) => [
    "",
    "",
    "",
    "",
    "",
    "",
    q.section,
    q.item,
    q.prompt,
    q.answer,
    q.sentiment,
    q.weightage,
    q.sources,
    q.remarks,
    q.status
  ].map(csvEscape).join(","));

  const csv = [header.map(csvEscape).join(","), metaRow, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${buildExportBaseName()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportPdf() {
  const originalTitle = document.title;
  const exportTitle = `${buildExportBaseName()}.pdf`;
  document.title = exportTitle;
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.style.visibility = "hidden";
  iframe.srcdoc = buildPrintHtml();
  iframe.onload = () => {
    const target = iframe.contentWindow;
    if (!target) {
      iframe.remove();
      return;
    }
    try {
      target.document.title = buildExportBaseName();
    } catch (err) {
      console.error("Failed to set PDF title", err);
    }
    target.focus();
    setTimeout(() => {
      try {
        target.print();
      } catch (err) {
        console.error("PDF print failed", err);
      }
      setTimeout(() => {
        iframe.remove();
        document.title = originalTitle;
      }, 1500);
    }, 300);
  };
  document.body.appendChild(iframe);
}

function restoreDraft() {
  const saved = localStorage.getItem("checklistDraft");
  if (!saved) return;
  const data = JSON.parse(saved);
  Object.entries(data).forEach(([key, value]) => {
    const el = form.elements.namedItem(key);
    if (el) el.value = value;
  });
}

function persistDraft() {
  const obj = {};
  new FormData(form).forEach((value, key) => {
    obj[key] = value;
  });
  localStorage.setItem("checklistDraft", JSON.stringify(obj));
}

async function init() {
  buildForm();
  if (!companyIndex.length && typeof companyIndexData !== "undefined") {
    companyIndex = companyIndexData;
  }
  setupCompanySearch();
  setupLinkChips();
  restoreDraft();

  const companyNameInput = document.getElementById("companyName");
  const nseInput = document.getElementById("nseSymbol");
  const bseInput = document.getElementById("bseSymbol");
  const linkInputs = {
    businessLineLink: document.getElementById("businessLineLink"),
    screenerLink: document.getElementById("screenerLink"),
    googleLink: document.getElementById("googleLink")
  };

  const refreshLinksFromInputs = () => {
    const item = {
      companyName: companyNameInput?.value || "",
      nseSymbol: nseInput?.value || "",
      bseSymbol: bseInput?.value || ""
    };
    const links = buildResearchLinks(item);
    if (linkInputs.businessLineLink) {
      linkInputs.businessLineLink.href = links.businessLineLink;
      linkInputs.businessLineLink.textContent = links.businessLineLink;
    }
    if (linkInputs.screenerLink) {
      linkInputs.screenerLink.href = links.screenerLink;
      linkInputs.screenerLink.textContent = links.screenerLink;
    }
    if (linkInputs.googleLink) {
      linkInputs.googleLink.href = links.googleLink;
      linkInputs.googleLink.textContent = links.googleLink;
    }
  };

  [companyNameInput, nseInput, bseInput].forEach((el) => {
    if (el) el.addEventListener("input", refreshLinksFromInputs);
  });

  refreshLinksFromInputs();

  const titleInput = document.getElementById("checklistTitle");
  if (titleInput && !titleInput.value) titleInput.value = buildChecklistTitle();

  form.addEventListener("input", persistDraft);
  document.getElementById("exportBtn").addEventListener("click", downloadJson);
  document.getElementById("csvBtn").addEventListener("click", downloadCsv);
  document.getElementById("pdfBtn").addEventListener("click", exportPdf);
  document.getElementById("resetBtn").addEventListener("click", () => {
    localStorage.removeItem("checklistDraft");
    form.reset();
    if (companySuggestions) companySuggestions.classList.remove("open");
  });
}

init().catch((err) => {
  console.error("Failed to initialize checklist form", err);
  buildForm();
});
