
    (function () {
      // NSE symbols for Nifty 50 (split into batches for the BL search API)
      const NIFTY50 = [
        'Reliance', 'HDFC Bank', 'Bharti Airtel', 'SBI', 'ICICI Bank', 'TCS', 'Bajaj Finance',
        'Larsen Toubro', 'Infosys', 'LIC', 'HUL', 'Maruti', 'Mahindra', 'Axis Bank',
        'Kotak Mahindra', 'Sun Pharma', 'ITC', 'HCL Technologies', 'Ultratech Cement', 'Titan',
        'NTPC', 'Adani Ports', 'ONGC', 'Bajaj Finserv', 'Bharat Electronics', 'JSW Steel',
        'Adani Enterprises', 'Hindustan Aeronautics', 'Power Grid', 'Bajaj Auto',
        'Adani Power', 'Vedanta', 'Zomato', 'Coal India', 'Tata Steel',
        'Avenue Supermarts', 'Hindustan Zinc', 'Nestle', 'Indian Oil', 'Asian Paints',
        'Wipro', 'Eicher Motors', 'SBI Life', 'Hindalco', 'Shriram Finance',
        'Grasim', 'Interglobe Aviation', 'TVS Motor', 'Hyundai Motor India', 'Tata Motors'
      ];

      const container = document.getElementById('tickerInner');
      let tickerData = [];

      function formatNum(n) {
        if (n == null) return '-';
        return n.toLocaleString('en-IN', { maximumFractionDigits: 2 });
      }

      let rafId = null;
      let scrollPos = 0;
      const SPEED = 1.2; // pixels per frame (~72px/s at 60fps)

      function startScroll() {
        if (rafId) cancelAnimationFrame(rafId);
        scrollPos = 0;
        let paused = false;
        container.addEventListener('mouseenter', () => { paused = true; });
        container.addEventListener('mouseleave', () => { paused = false; });

        function tick() {
          if (!paused) {
            const half = container.scrollWidth / 2;
            scrollPos += SPEED;
            if (scrollPos >= half) scrollPos -= half; // seamless: never jumps to 0
            container.style.transform = `translateX(-${scrollPos}px)`;
          }
          rafId = requestAnimationFrame(tick);
        }
        rafId = requestAnimationFrame(tick);
      }

      function buildTicker(stocks) {
        if (!stocks.length) return;
        // Exact duplicate for seamless loop (second half = first half, so reset is invisible)
        const all = [...stocks, ...stocks];
        container.innerHTML = all.map(s => {
          const chg = s.CHANGE || 0;
          const pct = s.change_PERC || 0;
          const isUp = chg >= 0;
          const arrow = isUp ? '▲' : '▼';
          const cls = isUp ? 'up' : 'down';
          const sign = isUp ? '+' : '';
          return `<div class="ticker-item">
          <div class="ticker-row-top">
            <span class="ticker-name" title="${s.title}">${s.title}</span>
            <span class="ticker-change-val ${cls}">${sign}${formatNum(Math.abs(chg))}</span>
          </div>
          <div class="ticker-row-bottom">
            <span class="ticker-price">${formatNum(s.LTP)}</span>
            <span class="ticker-pct ${cls}"><span class="ticker-arrow">${arrow}</span>${sign}${pct.toFixed(2)}%</span>
          </div>
        </div>`;
        }).join('');

        // Start JS scroll after DOM has painted
        requestAnimationFrame(startScroll);
      }

      async function fetchOne(query) {
        try {
          const r = await fetch(
            `https://blstocks.thehindubusinessline.com/companiesinfo/search?query=${encodeURIComponent(query)}`
          );
          const d = await r.json();
          return d.companiesDetails || [];
        } catch { return []; }
      }

      // Proper Fisher-Yates shuffle
      function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      // Get all company names from jsonData (hundreds of companies), fallback to NIFTY50
      function getCompanyPool() {
        if (typeof jsonData !== 'undefined') {
          const names = [];
          for (const sector in jsonData) {
            jsonData[sector].forEach(c => {
              if (c['Company Name']) names.push(c['Company Name']);
            });
          }
          if (names.length > 0) return names;
        }
        return NIFTY50;
      }

      async function loadTicker() {
        // Pick 30 random unique companies from full pool — different every load
        const pool = getCompanyPool();
        const selected = shuffle(pool).slice(0, 12);
        const promises = selected.map(q => fetchOne(q));
        const results = await Promise.allSettled(promises);
        // Flatten all returned arrays, deduplicate by title
        const seen = new Set();
        tickerData = results
          .filter(r => r.status === 'fulfilled' && Array.isArray(r.value))
          .flatMap(r => r.value)
          .filter(s => {
            if (!s || !s.title || seen.has(s.title)) return false;
            seen.add(s.title);
            return true;
          });
        buildTicker(tickerData);
      }

      // DOMContentLoaded ensures jsonData is ready before first pick
      document.addEventListener('DOMContentLoaded', function () {
        loadTicker();
        setInterval(loadTicker, 3 * 60 * 1000);
      });
    })();

// Toggle visibility and expand all nested items if opening
    function toggleVisibility(event) {
      const toggleElement = event.target.closest(".toggle-container");
      if (toggleElement) {
        const nestedList = toggleElement.nextElementSibling;
        if (nestedList && nestedList.classList.contains("nested")) {
          const isOpening = !nestedList.classList.contains("open");

          // Toggle current visibility
          nestedList.classList.toggle("open");

          // If expanding, recursively expand all children
          if (isOpening) {
            setTimeout(() => {
              expandAllNested(nestedList);
            }, 10);
          }
        }
      }
    }

    // Search functionality
    const searchInput = document.getElementById("searchInput2");
    const jsonViewer = document.getElementById("jsonViewer");
    const jsonSearchContainer = document.querySelector(".json-search-container");
    const searchBox = document.querySelector(".search-box");
    const pageSearchInput = document.getElementById("searchInput1");

    function setActiveContainer(container, active) {
      if (!container) return;
      container.classList.toggle("is-focused", active);
    }

    function debounce(fn, delay = 140) {
      let timer = null;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }

    const renderFilteredJSON = debounce(() => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const filteredData = searchTerm ? filterJSON(jsonData, searchTerm) : jsonData;
      renderJSON(filteredData, jsonViewer);
    }, 140);

    searchInput.addEventListener("input", renderFilteredJSON);
    searchInput.addEventListener("focus", () => setActiveContainer(jsonSearchContainer, true));
    searchInput.addEventListener("blur", () => setActiveContainer(jsonSearchContainer, false));

    if (pageSearchInput) {
      pageSearchInput.addEventListener("focus", () => setActiveContainer(searchBox, true));
      pageSearchInput.addEventListener("blur", () => setActiveContainer(searchBox, false));
      pageSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
          e.preventDefault();
          pageSearchInput.focus();
          pageSearchInput.select();
        }
      });
    }

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        renderFilteredJSON();
      }
      if (e.key === "Escape") {
        searchInput.value = "";
        renderJSON(jsonData, jsonViewer);
        searchInput.blur();
      }
    });

    function filterJSON(data, searchTerm) {
      const filteredData = {};

      // Loop through data and filter based on searchTerm
      for (const key in data) {
        const value = data[key];
        if (typeof value === "object" && !Array.isArray(value)) {
          const filteredNested = filterJSON(value, searchTerm);
          if (Object.keys(filteredNested).length > 0) {
            filteredData[key] = filteredNested;
          }
        } else if (Array.isArray(value)) {
          const filteredArray = value.filter((item) => {
            return JSON.stringify(item).toLowerCase().includes(searchTerm);
          });
          if (filteredArray.length > 0) {
            filteredData[key] = filteredArray;
          }
        } else if (
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm)
        ) {
          filteredData[key] = value;
        }
      }

      return filteredData;
    }

    // Render the filtered JSON data
    function renderJSON(jsonData, container) {
      const tree = createTree(jsonData);
      container.innerHTML = ""; // Clear previous content
      container.appendChild(tree);
    }

    // Initial rendering
    document
      .getElementById("jsonViewer")
      .addEventListener("click", toggleVisibility);
    renderJSON(jsonData, document.getElementById("jsonViewer"));

    //BL Get API
    const searchInput1 = document.getElementById("searchInput1");
    const stockTable = document.getElementById("stockTable");
    const stockBody = document.getElementById("stockBody");
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const searchBoxEl = document.querySelector(".search-box");

    searchInput1.addEventListener("focus", () => setActiveContainer(searchBoxEl, true));
    searchInput1.addEventListener("blur", () => setActiveContainer(searchBoxEl, false));
    searchInput1.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchStocks();
      if (e.key === "Escape") {
        clearStockTable();
      }
    });

    async function searchStocks() {
      const query = searchInput1.value.trim();
      if (!query) return;

      loading.style.display = "block";
      error.style.display = "none";
      stockTable.style.display = "none";

      try {
        const response = await fetch(
          `https://blstocks.thehindubusinessline.com/companiesinfo/search?query=${query}`
        );
        const data = await response.json();
        displayStocks(data.companiesDetails || []);
      } catch (err) {
        error.style.display = "block";
        error.textContent = "Failed to fetch stock data";
      } finally {
        loading.style.display = "none";
      }
    }

    function displayStocks(stocks) {
      if (!stocks.length) {
        error.style.display = "block";
        error.textContent = "No stocks found";
        return;
      }

      stockBody.innerHTML = stocks
        .map(
          (stock) => `
           <tr>
               <td data-label="Company"><a href="${stock.url}" target="_blank">${stock.title}</a></td>
               <td data-label="LTP">₹${stock.LTP?.toFixed(2) || "N/A"}</td>
               <td data-label="Change" class="${stock.CHANGE ? (stock.CHANGE >= 0 ? "positive" : "negative") : ""
            }">
                   ${stock.CHANGE
              ? (stock.CHANGE >= 0 ? "+" : "") + stock.CHANGE.toFixed(2)
              : "N/A"
            }
               </td>
               <td data-label="Change %" class="${stock.change_PERC
              ? stock.change_PERC >= 0
                ? "positive"
                : "negative"
              : ""
            }">
                   ${stock.change_PERC
              ? (stock.change_PERC >= 0 ? "+" : "") +
              stock.change_PERC.toFixed(2) +
              "%"
              : "N/A"
            }
               </td>
               <td data-label="Volume">${stock.VOLUME?.toLocaleString() || "N/A"}</td>
               <td data-label="Last Updated" class="time">${stock.Upd_Time
              ? new Date(stock.Upd_Time).toLocaleTimeString()
              : "N/A"
            }</td>
           </tr>
         `
        )
        .join("");

      stockTable.style.display = "table";
    }



    // Suggestion functionality
    class SuggestionBox {
      constructor(inputId, suggestionsId, dataSource, onSelect) {
        this.input = document.getElementById(inputId);
        this.suggestionsContainer = document.getElementById(suggestionsId);
        this.dataSource = dataSource;
        this.onSelect = onSelect;
        this.currentIndex = -1;
        this.suggestions = [];

        this.init();
      }

      init() {
        this.input.addEventListener('input', (e) => this.handleInput(e));
        this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
        this.input.addEventListener('blur', (e) => this.handleBlur(e));
        this.input.addEventListener('focus', (e) => this.handleFocus(e));

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
          if (!this.input.contains(e.target) && !this.suggestionsContainer.contains(e.target)) {
            this.hideSuggestions();
          }
        });
      }

      handleInput(e) {
        const query = e.target.value.trim();
        if (query.length < 1) {
          this.hideSuggestions();
          return;
        }

        this.suggestions = this.getSuggestions(query);
        this.showSuggestions();
      }

      handleKeydown(e) {
        if (!this.suggestionsContainer.style.display || this.suggestionsContainer.style.display === 'none') {
          return;
        }

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            this.navigateDown();
            break;
          case 'ArrowUp':
            e.preventDefault();
            this.navigateUp();
            break;
          case 'Enter':
            e.preventDefault();
            this.selectCurrent();
            break;
          case 'Escape':
            this.hideSuggestions();
            break;
        }
      }

      handleBlur(e) {
        // Delay hiding to allow clicking on suggestions
        setTimeout(() => {
          if (!this.suggestionsContainer.matches(':hover')) {
            this.hideSuggestions();
          }
        }, 200);
      }

      handleFocus(e) {
        this.input.closest(".json-search-container, .search-box")?.classList.add("is-focused");
        if (this.input.value.trim().length > 0) {
          this.suggestions = this.getSuggestions(this.input.value.trim());
          this.showSuggestions();
        }
      }

      getSuggestions(query) {
        const suggestions = [];
        const queryLower = query.toLowerCase();

        // Search through all companies in all sectors
        for (const sector in this.dataSource) {
          const companies = this.dataSource[sector];
          companies.forEach(company => {
            const companyName = company['Company Name'] || '';
            const nseSymbol = company['NSE Symbol'] || '';
            const bseSymbol = company['BSE Symbol'] || '';

            if (
              companyName.toLowerCase().includes(queryLower) ||
              nseSymbol.toLowerCase().includes(queryLower) ||
              bseSymbol.toString().includes(query) ||
              sector.toLowerCase().includes(queryLower)
            ) {
              suggestions.push({
                ...company,
                sector: sector,
                matchType: this.getMatchType(query, company, sector)
              });
            }
          });
        }

        // Sort suggestions by relevance
        return suggestions.sort((a, b) => {
          if (a.matchType !== b.matchType) {
            return a.matchType - b.matchType;
          }
          return a['Company Name'].localeCompare(b['Company Name']);
        }).slice(0, 8); // Limit to 8 suggestions
      }

      getMatchType(query, company, sector) {
        const queryLower = query.toLowerCase();
        const companyName = company['Company Name'].toLowerCase();
        const nseSymbol = (company['NSE Symbol'] || '').toLowerCase();

        if (companyName.startsWith(queryLower)) return 1; // Company name starts with query
        if (nseSymbol.startsWith(queryLower)) return 2; // NSE symbol starts with query
        if (companyName.includes(queryLower)) return 3; // Company name contains query
        if (nseSymbol.includes(queryLower)) return 4; // NSE symbol contains query
        return 5; // Other matches
      }

      showSuggestions() {
        if (this.suggestions.length === 0) {
          this.hideSuggestions();
          return;
        }

        this.suggestionsContainer.innerHTML = this.suggestions.map((suggestion, index) =>
          `<div class="suggestion-item" data-index="${index}">
           <div class="suggestion-text">${suggestion['Company Name']}</div>
           <div class="suggestion-sector">${suggestion.sector}</div>
         </div>`
        ).join('');

        // Add click event listeners
        this.suggestionsContainer.querySelectorAll('.suggestion-item').forEach((item, index) => {
          item.addEventListener('click', () => {
            this.selectSuggestion(index);
          });
        });

        this.suggestionsContainer.style.display = 'block';
        this.currentIndex = -1;
      }

      hideSuggestions() {
        this.suggestionsContainer.style.display = 'none';
        this.currentIndex = -1;
        this.input.closest(".json-search-container, .search-box")?.classList.remove("is-focused");
      }

      navigateDown() {
        const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');
        if (items.length === 0) return;

        if (this.currentIndex < items.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        this.highlightItem();
      }

      navigateUp() {
        const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');
        if (items.length === 0) return;

        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = items.length - 1;
        }
        this.highlightItem();
      }

      highlightItem() {
        const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');
        items.forEach((item, index) => {
          item.classList.toggle('highlighted', index === this.currentIndex);
        });
      }

      selectCurrent() {
        if (this.currentIndex >= 0 && this.currentIndex < this.suggestions.length) {
          this.selectSuggestion(this.currentIndex);
        }
      }

      selectSuggestion(index) {
        const suggestion = this.suggestions[index];
        this.input.value = suggestion['Company Name'];
        this.hideSuggestions();

        if (this.onSelect) {
          this.onSelect(suggestion);
        }
      }
    }

    // Initialize suggestion boxes when DOM is loaded
    document.addEventListener('DOMContentLoaded', function () {
      // Stock search suggestions
      const stockSuggestions = new SuggestionBox('searchInput1', 'suggestions1', jsonData, (suggestion) => {
        // Optionally trigger search automatically
        searchStocks();
      });

      // JSON viewer search suggestions
      const jsonSuggestions = new SuggestionBox('searchInput2', 'suggestions2', jsonData, (suggestion) => {
        // Filter JSON data based on selected company
        const filteredData = {};
        for (const sector in jsonData) {
          const companies = jsonData[sector].filter(company =>
            company['Company Name'] === suggestion['Company Name']
          );
          if (companies.length > 0) {
            filteredData[sector] = companies;
          }
        }
        renderJSON(filteredData, document.getElementById('jsonViewer'));
      });
    });

    // Update the existing searchStocks function to work with suggestions
    const originalSearchStocks = searchStocks;
    searchStocks = function () {
      const query = document.getElementById('searchInput1').value.trim();
      if (!query) return;

      // Check if the query matches a company from our JSON data
      let matchedCompany = null;
      for (const sector in jsonData) {
        const companies = jsonData[sector];
        matchedCompany = companies.find(company =>
          company['Company Name'].toLowerCase() === query.toLowerCase() ||
          company['NSE Symbol'] === query.toUpperCase() ||
          company['BSE Symbol'].toString() === query
        );
        if (matchedCompany) break;
      }

      // If we have a matched company, we could enhance the search with additional info
      if (matchedCompany) {
        console.log('Found company in our database:', matchedCompany);
        // You could show additional company info here
      }

      // Call the original search function
      originalSearchStocks();
    };


    // Clear Stock Table

    function clearStockTable() {
      // Hide the stock table
      stockTable.style.display = "none";

      // Clear the search input
      searchInput1.value = "";

      // Hide any error messages
      error.style.display = "none";

      // Clear the table body content
      stockBody.innerHTML = "";

      // Add a subtle animation effect
      searchInput1.focus();
      searchInput1.style.transform = "scale(1.02)";
      setTimeout(() => {
        searchInput1.style.transform = "scale(1)";
      }, 200);
    }

    // Clear JSON Search functionality
    document.getElementById('clearJsonBtn').addEventListener('click', function () {
      const searchInput2 = document.getElementById('searchInput2');
      const jsonViewer = document.getElementById('jsonViewer');
      const suggestions2 = document.getElementById('suggestions2');

      // Clear the search input
      searchInput2.value = '';

      // Hide suggestions
      suggestions2.style.display = 'none';

      // Reset JSON viewer to show all data
      renderJSON(jsonData, jsonViewer);

      // Add focus and animation effect
      searchInput2.focus();
      setActiveContainer(jsonSearchContainer, true);
      setTimeout(() => {
        setActiveContainer(jsonSearchContainer, false);
      }, 300);
    });

    // Also clear when input is manually emptied
    document.getElementById('searchInput2').addEventListener('input', function (e) {
      if (e.target.value.trim() === '') {
        // Reset to show all data when input is empty
        renderJSON(jsonData, document.getElementById('jsonViewer'));
      }
    });
  
