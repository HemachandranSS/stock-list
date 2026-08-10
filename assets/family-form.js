const readyReferenceRows = [
  { code: "A", label: "Family Doctor" },
  { code: "B", label: "Financial Planner" },
  { code: "C", label: "Tax Consultant" },
  { code: "D", label: "Insurance Agent" },
  { code: "E", label: "Stock Broker" },
  { code: "F", label: "Important Friend / Well-wisher" },
  { code: "G", label: "Regular Auto / Cab Driver" },
  { code: "H", label: "Helpful Neighbor" }
];

const importantDocsRows = [
  { code: "A", label: "Adhaar Card" },
  { code: "B", label: "Voter Card" },
  { code: "B", label: "Driving license" },
  { code: "C", label: "Income Tax PAN" },
  { code: "D", label: "Regular ATM Card (Debit Card)" },
  { code: "E", label: "Default Credit Card" },
  { code: "F", label: "Passport" },
  { code: "G", label: "Electricity Service" },
  { code: "H", label: "Property Tax" },
  { code: "I", label: "LPG Gas" },
  { code: "J", label: "Ration card" }
];

const aadhaarRows = Array.from({ length: 10 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const panRows = Array.from({ length: 10 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const voterRows = Array.from({ length: 10 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const impDatesRows = Array.from({ length: 10 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const housePropertyRows = Array.from({ length: 3 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const electricityRows = Array.from({ length: 2 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const lpgGasRows = Array.from({ length: 1 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const dthRows = Array.from({ length: 1 }, (_, idx) => ({
  code: String(idx + 1),
  label: ""
}));

const paidSubscriptionRows = [
  { code: "1", operator: "Aha" },
  { code: "2", operator: "Disney + Hotstar" },
  { code: "3", operator: "Amazon Prime" },
  { code: "4", operator: "Zee5" },
  { code: "5", operator: "Voot Select" },
  { code: "6", operator: "Discovery +" },
  { code: "7", operator: "Sony Liv" },
  { code: "8", operator: "Youtube" },
  { code: "9", operator: "Google One" },
  { code: "10", operator: "Gaana" },
  { code: "11", operator: "Jio Saavn" },
  { code: "12", operator: "Spotify" },
  { code: "13", operator: "Hungama" },
  { code: "14", operator: "Airtel Wynk" },
  { code: "15", operator: "Etv Win" },
  { code: "16", operator: "Kindle" },
  { code: "17", operator: "Magzter" },
  { code: "18", operator: "Healthify" },
  { code: "19", operator: "Zomato" },
  { code: "20", operator: "Swiggy" },
  { code: "21", operator: "Broadband" },
  { code: "22", operator: "Times Prime" }
];

const mediclaimPolicyRows = [
  { code: "1", label: "Floater Policy" },
  { code: "2", label: "" }
];

const pmjbyPmsbyRows = [
  { code: "1", label: "PMJJBY" },
  { code: "2", label: "PMSBY" }
];

const licRenewalRows = Array.from({ length: 13 }, (_, idx) => ({
  code: String(idx + 1)
}));

const fireBurglaryRows = Array.from({ length: 2 }, (_, idx) => ({
  code: String(idx + 1)
}));

const debitCardRows = Array.from({ length: 7 }, (_, idx) => ({
  code: String(idx + 1)
}));

const creditCardRows = Array.from({ length: 5 }, (_, idx) => ({
  code: String(idx + 1)
}));

const newLicDetailsRows = Array.from({ length: 13 }, (_, idx) => ({
  code: String(idx + 1)
}));

const newPmjbyPmsbyRows = [
  { code: "1", label: "PMJJBY" },
  { code: "2", label: "PMSBY" }
];

const newBankAccountRows = Array.from({ length: 8 }, (_, idx) => ({
  code: String(idx + 1)
}));

const newLockerRows = Array.from({ length: 7 }, (_, idx) => ({
  code: String(idx + 1)
}));

const fdrDetailsRows = Array.from({ length: 9 }, (_, idx) => ({
  code: String(idx + 1)
}));

const mutualFundsRows = Array.from({ length: 15 }, (_, idx) => ({
  code: String(idx + 1)
}));

const ppfAccountRows = Array.from({ length: 3 }, (_, idx) => ({
  code: String(idx + 1)
}));

const pensionAccountRows = Array.from({ length: 3 }, (_, idx) => ({
  code: String(idx + 1)
}));

const liabilitiesRows = Array.from({ length: 8 }, (_, idx) => ({
  code: String(idx + 1)
}));

const locationOfImpDocumentsRows = [
  { code: "A", label: "Personal Will" },
  { code: "B", label: "Spouse's Will" },
  { code: "C", label: "Insurance Policies" },
  { code: "D", label: "Invest. Papers" },
  { code: "E", label: "Property Records" },
  { code: "F", label: "Birth Certificate" },
  { code: "G", label: "Marriage Certificate" },
  { code: "H", label: "Domicile Certificate" },
  { code: "I", label: "Important Agreements" },
  { code: "J", label: "Other Important Papers" },
  { code: "K", label: "" },
  { code: "L", label: "" },
  { code: "M", label: "" },
  { code: "N", label: "" },
  { code: "O", label: "" }
];

const vehicleInsuranceBlocks = [
  { code: "1" },
];

const willBlocks = [
  { code: "1" },
];

const powerOfAttorneyBlocks = [
  { code: "1" },
];

const form = document.getElementById("familyForm");
const toc = document.getElementById("toc");
const sectionTemplate = document.getElementById("sectionTemplate");
const fieldTemplate = document.getElementById("fieldTemplate");
const tableTemplate = document.getElementById("tableTemplate");
const familyName = document.getElementById("familyName");
const selfPhone = document.getElementById("selfPhone");
const email = document.getElementById("email");
const residenceAddress = document.getElementById("residenceAddress");
let readyOtherCount = 0;
let importantDocsExtraCount = 0;
let aadhaarExtraCount = 0;
let panExtraCount = 0;
let voterExtraCount = 0;
let impDatesExtraCount = 0;
let housePropertyExtraCount = 0;
let electricityExtraCount = 0;
let lpgGasExtraCount = 0;
let dthExtraCount = 0;
let paidSubscriptionExtraCount = 0;
let mediclaimPolicyExtraCount = 0;
let pmjbyPmsbyExtraCount = 0;
let licRenewalExtraCount = 0;
let fireBurglaryExtraCount = 0;
let debitCardExtraCount = 0;
let creditCardExtraCount = 0;
let newLicDetailsExtraCount = 0;
let newBankAccountExtraCount = 0;
let newLockerExtraCount = 0;
let fdrDetailsExtraCount = 0;
let mutualFundsExtraCount = 0;
let ppfAccountExtraCount = 0;
let pensionAccountExtraCount = 0;
let vehicleInsuranceExtraCount = 0;
let willExtraCount = 0;
let powerOfAttorneyExtraCount = 0;
let liabilitiesExtraCount = 0;
let locationOfImpDocumentsExtraCount = 0;
let anyOtherDetailsExtraCount = 0;

function slug(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value : "";
}

function nextNumericRowCode(tbody, fallbackStart) {
  const existingMax = Array.from(tbody.querySelectorAll(".row-code"))
    .map((el) => Number.parseInt(el.textContent || "", 10))
    .filter((n) => Number.isFinite(n))
    .reduce((max, n) => Math.max(max, n), 0);
  return String(Math.max(existingMax + 1, fallbackStart));
}

function nextAlphaRowCode(tbody, fallbackStart = "A") {
  const existing = Array.from(tbody.querySelectorAll(".row-code"))
    .map((el) => String(el.textContent || "").trim().toUpperCase())
    .filter(Boolean);
  const last = existing[existing.length - 1] || fallbackStart;
  const code = last.charCodeAt(0);
  if (code >= 65 && code < 90) return String.fromCharCode(code + 1);
  return fallbackStart;
}

function baseName() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = String(d.getFullYear());
  const hh = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `families_should_know_${dd}_${mm}_${yyyy}_${hh}_${min}`;
}

function buildChecklistTitle() {
  const name = getVal("familyName", "").trim();
  return name ? `What Families Should Know (${name})` : "What Families Should Know";
}

function addField(parent, label, id) {
  const node = fieldTemplate.content.cloneNode(true);
  const field = node.querySelector(".field");
  field.dataset.id = id;
  node.querySelector("span").textContent = label;
  node.querySelector("textarea").name = id;
  node.querySelector("textarea").id = id;
  parent.appendChild(node);
}

function addDynamicField(parent, sectionKey) {
  const idBase = `${slug(sectionKey)}-extra-${Date.now()}`;
  const wrap = document.createElement("div");
  wrap.className = "dynamic-field";
  wrap.dataset.sectionKey = sectionKey;
  wrap.innerHTML = `
    <label>
      <span>Field Label</span>
      <input type="text" name="${idBase}-label" id="${idBase}-label" placeholder="Enter field name" />
    </label>
    <label>
      <span>Value</span>
      <textarea rows="2" name="${idBase}-value" id="${idBase}-value" placeholder="Enter details"></textarea>
    </label>
  `;
  parent.appendChild(wrap);
  persistDraft();
}

function addSectionNav(text, href) {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = text;
  toc.appendChild(a);
}

function createReadyRow(code, label, suffix = "", editableLabel = false) {
  const tr = document.createElement("tr");
  tr.dataset.readyRow = suffix || label;
  const labelCell = editableLabel
    ? `<td><textarea id="ready-${slug(label)}${suffix}-label" name="ready-${slug(label)}${suffix}-label" rows="2" placeholder="Contact label"></textarea></td>`
    : `<td class="row-label">${label}</td>`;
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    ${labelCell}
    <td><textarea id="ready-${slug(label)}${suffix}-name" name="ready-${slug(label)}${suffix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="ready-${slug(label)}${suffix}-address" name="ready-${slug(label)}${suffix}-address" rows="2" placeholder="Office / residence address"></textarea></td>
    <td><textarea id="ready-${slug(label)}${suffix}-mobile" name="ready-${slug(label)}${suffix}-mobile" rows="2" placeholder="Mobile / contact number"></textarea></td>
  `;
  return tr;
}

function createSimpleTableRow(code, label, keyPrefix) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td class="row-label">${label}</td>
    <td><textarea id="${keyPrefix}-number" name="${keyPrefix}-number" rows="2" placeholder="Number"></textarea></td>
    <td><textarea id="${keyPrefix}-expiry" name="${keyPrefix}-expiry" rows="2" placeholder="Expiry Date"></textarea></td>
  `;
  return tr;
}

function addImportantDocRow(tbody) {
  importantDocsExtraCount += 1;
  const code = String.fromCharCode(75 + importantDocsExtraCount - 1);
  const label = `Other ${importantDocsExtraCount}`;
  const keyPrefix = `important-documents-extra-${importantDocsExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.importantDocExtra = String(importantDocsExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-label" name="${keyPrefix}-label" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-number" name="${keyPrefix}-number" rows="2" placeholder="Number"></textarea></td>
    <td><textarea id="${keyPrefix}-expiry" name="${keyPrefix}-expiry" rows="2" placeholder="Expiry Date"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addAadhaarRow(tbody) {
  aadhaarExtraCount += 1;
  const code = nextNumericRowCode(tbody, 11);
  const keyPrefix = `aadhaar-extra-${aadhaarExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.aadhaarExtra = String(aadhaarExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-number" name="${keyPrefix}-number" rows="2" placeholder="Aadhar Card No. / Enrollment No."></textarea></td>
    <td><textarea id="${keyPrefix}-issue" name="${keyPrefix}-issue" rows="2" placeholder="Issue Date"></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addPanRow(tbody) {
  panExtraCount += 1;
  const code = nextNumericRowCode(tbody, 11);
  const keyPrefix = `pan-extra-${panExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.panExtra = String(panExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-father" name="${keyPrefix}-father" rows="2" placeholder="Father's / Husband Name"></textarea></td>
    <td><textarea id="${keyPrefix}-number" name="${keyPrefix}-number" rows="2" placeholder="PANCARD No"></textarea></td>
    <td><textarea id="${keyPrefix}-contact" name="${keyPrefix}-contact" rows="2" placeholder="Contact Details"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addVoterRow(tbody) {
  voterExtraCount += 1;
  const code = nextNumericRowCode(tbody, 11);
  const keyPrefix = `voter-extra-${voterExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.voterExtra = String(voterExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-father" name="${keyPrefix}-father" rows="2" placeholder="Father's/Husband's Name"></textarea></td>
    <td><textarea id="${keyPrefix}-number" name="${keyPrefix}-number" rows="2" placeholder="Identity Card No."></textarea></td>
    <td><textarea id="${keyPrefix}-issue" name="${keyPrefix}-issue" rows="2" placeholder="Issue Date"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addImpDateRow(tbody) {
  impDatesExtraCount += 1;
  const code = nextNumericRowCode(tbody, 11);
  const keyPrefix = `imp-dates-extra-${impDatesExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.impDateExtra = String(impDatesExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-birth" name="${keyPrefix}-birth" rows="2" placeholder="Birth Day / Other Imp Day"></textarea></td>
    <td><textarea id="${keyPrefix}-food" name="${keyPrefix}-food" rows="2" placeholder="Fav. Food"></textarea></td>
    <td><textarea id="${keyPrefix}-issue" name="${keyPrefix}-issue" rows="2" placeholder="Issue Date"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addHousePropertyRow(tbody) {
  housePropertyExtraCount += 1;
  const code = nextNumericRowCode(tbody, 4);
  const keyPrefix = `house-property-extra-${housePropertyExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.housePropertyExtra = String(housePropertyExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-house-details" name="${keyPrefix}-house-details" rows="2" placeholder="House Details"></textarea></td>
    <td><textarea id="${keyPrefix}-census" name="${keyPrefix}-census" rows="2" placeholder="Census No."></textarea></td>
    <td><textarea id="${keyPrefix}-pin" name="${keyPrefix}-pin" rows="2" placeholder="Property Identification No. (PIN)"></textarea></td>
    <td><textarea id="${keyPrefix}-construction" name="${keyPrefix}-construction" rows="2" placeholder="Construction Sq. Mtrs."></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addElectricityRow(tbody) {
  electricityExtraCount += 1;
  const code = nextNumericRowCode(tbody, 3);
  const keyPrefix = `electricity-extra-${electricityExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.electricityExtra = String(electricityExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-house-details" name="${keyPrefix}-house-details" rows="2" placeholder="House Details"></textarea></td>
    <td><textarea id="${keyPrefix}-meter" name="${keyPrefix}-meter" rows="2" placeholder="Meter No."></textarea></td>
    <td><textarea id="${keyPrefix}-cust" name="${keyPrefix}-cust" rows="2" placeholder="Customer Service No."></textarea></td>
    <td><textarea id="${keyPrefix}-deposit" name="${keyPrefix}-deposit" rows="2" placeholder="Deposit Rs."></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addLpgGasRow(tbody) {
  lpgGasExtraCount += 1;
  const code = nextNumericRowCode(tbody, 2);
  const keyPrefix = `lpg-gas-extra-${lpgGasExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.lpgGasExtra = String(lpgGasExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-consumer" name="${keyPrefix}-consumer" rows="2" placeholder="Consumer No."></textarea></td>
    <td><textarea id="${keyPrefix}-office" name="${keyPrefix}-office" rows="2" placeholder="Office No"></textarea></td>
    <td><textarea id="${keyPrefix}-delivery" name="${keyPrefix}-delivery" rows="2" placeholder="Delivery Boy No"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addDthRow(tbody) {
  dthExtraCount += 1;
  const code = nextNumericRowCode(tbody, 2);
  const keyPrefix = `dth-extra-${dthExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.dthExtra = String(dthExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Reg. Name"></textarea></td>
    <td><textarea id="${keyPrefix}-mobile" name="${keyPrefix}-mobile" rows="2" placeholder="Reg Mobile No"></textarea></td>
    <td><textarea id="${keyPrefix}-operator" name="${keyPrefix}-operator" rows="2" placeholder="Operator"></textarea></td>
    <td><textarea id="${keyPrefix}-addons" name="${keyPrefix}-addons" rows="2" placeholder="Addons"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addPaidSubscriptionRow(tbody) {
  paidSubscriptionExtraCount += 1;
  const code = nextNumericRowCode(tbody, 23);
  const keyPrefix = `paid-subscription-extra-${paidSubscriptionExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.paidSubscriptionExtra = String(paidSubscriptionExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-operator" name="${keyPrefix}-operator" rows="2" placeholder="Operator"></textarea></td>
    <td><textarea id="${keyPrefix}-mobile" name="${keyPrefix}-mobile" rows="2" placeholder="Reg Mobile No"></textarea></td>
    <td><textarea id="${keyPrefix}-plan" name="${keyPrefix}-plan" rows="2" placeholder="Plan Details"></textarea></td>
    <td><textarea id="${keyPrefix}-due" name="${keyPrefix}-due" rows="2" placeholder="Due Date"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addMediclaimPolicyRow(tbody) {
  mediclaimPolicyExtraCount += 1;
  const code = nextNumericRowCode(tbody, 3);
  const keyPrefix = `mediclaim-policy-extra-${mediclaimPolicyExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.mediclaimPolicyExtra = String(mediclaimPolicyExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name & Type of Policy"></textarea></td>
    <td><textarea id="${keyPrefix}-number" name="${keyPrefix}-number" rows="2" placeholder="Policy No./Previous Policy No."></textarea></td>
    <td><textarea id="${keyPrefix}-amount" name="${keyPrefix}-amount" rows="2" placeholder="Amt. Insured"></textarea></td>
    <td><textarea id="${keyPrefix}-date" name="${keyPrefix}-date" rows="2" placeholder="Issue Date/Maturity Date"></textarea></td>
    <td><textarea id="${keyPrefix}-premium" name="${keyPrefix}-premium" rows="2" placeholder="Premium"></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addPmjbyPmsbyRow(tbody) {
  pmjbyPmsbyExtraCount += 1;
  const code = nextNumericRowCode(tbody, 3);
  const keyPrefix = `pmjby-pmsby-extra-${pmjbyPmsbyExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.pmjbyPmsbyExtra = String(pmjbyPmsbyExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-policy" name="${keyPrefix}-policy" rows="2" placeholder="Name & Type of Policy"></textarea></td>
    <td><textarea id="${keyPrefix}-bank" name="${keyPrefix}-bank" rows="2" placeholder="Name of the Bank"></textarea></td>
    <td><textarea id="${keyPrefix}-date" name="${keyPrefix}-date" rows="2" placeholder="Date of Commencement"></textarea></td>
    <td><textarea id="${keyPrefix}-balance" name="${keyPrefix}-balance" rows="2" placeholder="Bank Balance to be maintained"></textarea></td>
    <td><textarea id="${keyPrefix}-premium" name="${keyPrefix}-premium" rows="2" placeholder="Premium"></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addLicRenewalRow(tbody) {
  licRenewalExtraCount += 1;
  const code = nextNumericRowCode(tbody, 14);
  const keyPrefix = `lic-renewal-extra-${licRenewalExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.licRenewalExtra = String(licRenewalExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-policy" name="${keyPrefix}-policy" rows="2" placeholder="Name & Type of Policy"></textarea></td>
    <td><textarea id="${keyPrefix}-policy-no" name="${keyPrefix}-policy-no" rows="2" placeholder="Policy No."></textarea></td>
    <td><textarea id="${keyPrefix}-insured" name="${keyPrefix}-insured" rows="2" placeholder="Amt. Insured"></textarea></td>
    <td><textarea id="${keyPrefix}-date" name="${keyPrefix}-date" rows="2" placeholder="Issue Date / Maturity Date"></textarea></td>
    <td><textarea id="${keyPrefix}-premium" name="${keyPrefix}-premium" rows="2" placeholder="Premium"></textarea></td>
    <td><textarea id="${keyPrefix}-due" name="${keyPrefix}-due" rows="2" placeholder="Premium Due Date"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addFireBurglaryRow(tbody) {
  fireBurglaryExtraCount += 1;
  const code = nextNumericRowCode(tbody, 3);
  const keyPrefix = `fire-burglary-extra-${fireBurglaryExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.fireBurglaryExtra = String(fireBurglaryExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-property" name="${keyPrefix}-property" rows="2" placeholder="Name of the Property/Nominee"></textarea></td>
    <td><textarea id="${keyPrefix}-policy-no" name="${keyPrefix}-policy-no" rows="2" placeholder="Policy No./Issuing Office"></textarea></td>
    <td><textarea id="${keyPrefix}-insured" name="${keyPrefix}-insured" rows="2" placeholder="Amt. Insured"></textarea></td>
    <td><textarea id="${keyPrefix}-risks" name="${keyPrefix}-risks" rows="2" placeholder="Risks Covered"></textarea></td>
    <td><textarea id="${keyPrefix}-issue" name="${keyPrefix}-issue" rows="2" placeholder="Issue Date/Maturity Date"></textarea></td>
    <td><textarea id="${keyPrefix}-premium" name="${keyPrefix}-premium" rows="2" placeholder="Premium (Rs.)"></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addDebitCardRow(tbody) {
  debitCardExtraCount += 1;
  const code = nextNumericRowCode(tbody, 8);
  const keyPrefix = `debit-card-extra-${debitCardExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.debitCardExtra = String(debitCardExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-account" name="${keyPrefix}-account" rows="2" placeholder="SB A/c. No. / Bank & Branch"></textarea></td>
    <td><textarea id="${keyPrefix}-card" name="${keyPrefix}-card" rows="2" placeholder="ATM / Debit Card No."></textarea></td>
    <td><textarea id="${keyPrefix}-issue" name="${keyPrefix}-issue" rows="2" placeholder="Issue Date"></textarea></td>
    <td><textarea id="${keyPrefix}-valid" name="${keyPrefix}-valid" rows="2" placeholder="Valid Thru"></textarea></td>
    <td><textarea id="${keyPrefix}-cvv" name="${keyPrefix}-cvv" rows="2" placeholder="CVV No."></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addCreditCardRow(tbody) {
  creditCardExtraCount += 1;
  const code = nextNumericRowCode(tbody, 6);
  const keyPrefix = `credit-card-extra-${creditCardExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.creditCardExtra = String(creditCardExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="Name"></textarea></td>
    <td><textarea id="${keyPrefix}-bank" name="${keyPrefix}-bank" rows="2" placeholder="Bank's Name"></textarea></td>
    <td><textarea id="${keyPrefix}-card" name="${keyPrefix}-card" rows="2" placeholder="Credit Card No."></textarea></td>
    <td><textarea id="${keyPrefix}-valid-from" name="${keyPrefix}-valid-from" rows="2" placeholder="Valid From"></textarea></td>
    <td><textarea id="${keyPrefix}-valid-thru" name="${keyPrefix}-valid-thru" rows="2" placeholder="Valid Thru"></textarea></td>
    <td><textarea id="${keyPrefix}-cvv" name="${keyPrefix}-cvv" rows="2" placeholder="CVV No."></textarea></td>
    <td><textarea id="${keyPrefix}-remarks" name="${keyPrefix}-remarks" rows="2" placeholder="Remarks / T-Pin"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addNewLicDetailsRow(tbody) {
  newLicDetailsExtraCount += 1;
  const code = nextNumericRowCode(tbody, 14);
  const keyPrefix = `new-lic-details-extra-${newLicDetailsExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.newLicDetailsExtra = String(newLicDetailsExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-policy" name="${keyPrefix}-policy" rows="2" placeholder="Name & Type of Policy"></textarea></td>
    <td><textarea id="${keyPrefix}-policy-no" name="${keyPrefix}-policy-no" rows="2" placeholder="Policy No."></textarea></td>
    <td><textarea id="${keyPrefix}-insured" name="${keyPrefix}-insured" rows="2" placeholder="Amt. Insured"></textarea></td>
    <td><textarea id="${keyPrefix}-date" name="${keyPrefix}-nominee" rows="2" placeholder="Nominee"></textarea></td>
    <td><textarea id="${keyPrefix}-premium" name="${keyPrefix}-any-special-instruction" rows="2" placeholder="Any Special Instruction"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addNewBankAccountRow(tbody) {
  newBankAccountExtraCount += 1;
  const code = nextNumericRowCode(tbody, 9);
  const keyPrefix = `new-bank-account-extra-${newBankAccountExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.newBankAccountExtra = String(newBankAccountExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-bank" name="${keyPrefix}-bank" rows="2" placeholder="Bank Name"></textarea></td>
    <td><textarea id="${keyPrefix}-branch" name="${keyPrefix}-branch" rows="2" placeholder="Branch"></textarea></td>
    <td><textarea id="${keyPrefix}-type" name="${keyPrefix}-type" rows="2" placeholder="Type of Account"></textarea></td>
    <td><textarea id="${keyPrefix}-nominee" name="${keyPrefix}-nominee" rows="2" placeholder="Nominee/s"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addNewLockerRow(tbody) {
  newLockerExtraCount += 1;
  const code = nextNumericRowCode(tbody, 8);
  const keyPrefix = `new-locker-extra-${newLockerExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.newLockerExtra = String(newLockerExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-bank" name="${keyPrefix}-bank" rows="2" placeholder="Bank Name & Branch"></textarea></td>
    <td><textarea id="${keyPrefix}-locker" name="${keyPrefix}-locker" rows="2" placeholder="Locker No."></textarea></td>
    <td><textarea id="${keyPrefix}-name" name="${keyPrefix}-name" rows="2" placeholder="In the Name of"></textarea></td>
    <td><textarea id="${keyPrefix}-deputy" name="${keyPrefix}-deputy" rows="2" placeholder="Deputy"></textarea></td>
    <td><textarea id="${keyPrefix}-rent" name="${keyPrefix}-rent" rows="2" placeholder="Rent (Rs.)"></textarea></td>
    <td><textarea id="${keyPrefix}-renewal" name="${keyPrefix}-renewal" rows="2" placeholder="Rent Renewal Date"></textarea></td>
    <td><textarea id="${keyPrefix}-nominee" name="${keyPrefix}-nominee" rows="2" placeholder="Nominee"></textarea></td>
    <td><textarea id="${keyPrefix}-contents" name="${keyPrefix}-contents" rows="2" placeholder="Contents"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addFdrDetailsRow(tbody) {
  fdrDetailsExtraCount += 1;
  const code = nextNumericRowCode(tbody, 10);
  const keyPrefix = `fdr-details-extra-${fdrDetailsExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.fdrDetailsExtra = String(fdrDetailsExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-bank" name="${keyPrefix}-bank" rows="2" placeholder="Bank/Company Name & Branch"></textarea></td>
    <td><textarea id="${keyPrefix}-type" name="${keyPrefix}-type" rows="2" placeholder="Type of Dep. (SDR/FDR/RD)"></textarea></td>
    <td><textarea id="${keyPrefix}-fdr" name="${keyPrefix}-fdr" rows="2" placeholder="FDR No."></textarea></td>
    <td><textarea id="${keyPrefix}-date" name="${keyPrefix}-date" rows="2" placeholder="Date of Dep."></textarea></td>
    <td><textarea id="${keyPrefix}-amt" name="${keyPrefix}-amt" rows="2" placeholder="Amt. (Rs.)"></textarea></td>
    <td><textarea id="${keyPrefix}-maturity" name="${keyPrefix}-maturity" rows="2" placeholder="Maturity Date"></textarea></td>
    <td><textarea id="${keyPrefix}-nominee" name="${keyPrefix}-nominee" rows="2" placeholder="Nominee/s"></textarea></td>
    <td><textarea id="${keyPrefix}-loan" name="${keyPrefix}-loan" rows="2" placeholder="Loan / OD availed"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addMutualFundsRow(tbody) {
  mutualFundsExtraCount += 1;
  const existingMax = Array.from(tbody.querySelectorAll("tr .row-code"))
    .map((el) => Number.parseInt(el.textContent || "", 10))
    .filter((n) => Number.isFinite(n))
    .reduce((max, n) => Math.max(max, n), 0);
  const code = nextNumericRowCode(tbody, 16);
  const keyPrefix = `mutual-funds-extra-${mutualFundsExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.mutualFundsExtra = String(mutualFundsExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-folio" name="${keyPrefix}-folio" rows="2" placeholder="Folio Number"></textarea></td>
    <td><textarea id="${keyPrefix}-fund" name="${keyPrefix}-fund" rows="2" placeholder="Name of Fund"></textarea></td>
    <td><textarea id="${keyPrefix}-applicant" name="${keyPrefix}-applicant" rows="2" placeholder="Applicant"></textarea></td>
    <td><textarea id="${keyPrefix}-nominee" name="${keyPrefix}-nominee" rows="2" placeholder="Nominee"></textarea></td>
    <td><textarea id="${keyPrefix}-amount" name="${keyPrefix}-amount" rows="2" placeholder="Total Amount Invested"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addPpfAccountRow(tbody) {
  ppfAccountExtraCount += 1;
  const code = nextNumericRowCode(tbody, 4);
  const keyPrefix = `ppf-account-extra-${ppfAccountExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.ppfAccountExtra = String(ppfAccountExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-bank" name="${keyPrefix}-bank" rows="2" placeholder="Bank Name & Branch"></textarea></td>
    <td><textarea id="${keyPrefix}-fvg" name="${keyPrefix}-fvg" rows="2" placeholder="Fvg."></textarea></td>
    <td><textarea id="${keyPrefix}-account" name="${keyPrefix}-account" rows="2" placeholder="PPF A/c. No."></textarea></td>
    <td><textarea id="${keyPrefix}-maturity" name="${keyPrefix}-maturity" rows="2" placeholder="Maturity Date"></textarea></td>
    <td><textarea id="${keyPrefix}-nominee" name="${keyPrefix}-nominee" rows="2" placeholder="Nominee/s"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addPensionAccountRow(tbody) {
  pensionAccountExtraCount += 1;
  const code = nextNumericRowCode(tbody, 4);
  const keyPrefix = `pension-account-extra-${pensionAccountExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.pensionAccountExtra = String(pensionAccountExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-bank" name="${keyPrefix}-bank" rows="2" placeholder="Bank Name & Branch"></textarea></td>
    <td><textarea id="${keyPrefix}-account-type" name="${keyPrefix}-account-type" rows="2" placeholder="Type of Account & Pension A/c. No."></textarea></td>
    <td><textarea id="${keyPrefix}-instructions" name="${keyPrefix}-instructions" rows="2" placeholder="Operating Instructions"></textarea></td>
    <td><textarea id="${keyPrefix}-order" name="${keyPrefix}-order" rows="2" placeholder="Pension Payment Order No."></textarea></td>
    <td><textarea id="${keyPrefix}-nominee" name="${keyPrefix}-nominee" rows="2" placeholder="Nominee/s"></textarea></td>
    <td><textarea id="${keyPrefix}-due" name="${keyPrefix}-due" rows="2" placeholder="Due Date for Live Certificate"></textarea></td>
    <td><textarea id="${keyPrefix}-signature" name="${keyPrefix}-signature" rows="2" placeholder="Signature"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function markActionTables() {
  form.querySelectorAll("td.row-actions").forEach((cell) => {
    const section = cell.closest(".subsection, .section-block");
    if (section) section.classList.add("table-has-actions");
  });
}

function addVehicleInsuranceBlock(container, removable = true) {
  vehicleInsuranceExtraCount += 1;
  const idx = vehicleInsuranceBlocks.length + vehicleInsuranceExtraCount;
  const block = document.createElement("section");
  block.className = "subsection vehicle-insurance-block";
  block.dataset.vehicleInsuranceBlock = String(idx);
  block.innerHTML = `
    <div class="subsection-header">
      <h3>Vehicle Insurance Policy</h3>
      <span>Policy and vehicle details</span>
    </div>
    ${removable ? '<button type="button" class="row-remove section-remove" title="Remove section">−</button>' : ""}
    <div class="field-grid vehicle-grid">
      <label><span>Reg. No.</span><textarea id="vehicle-insurance-${idx}-reg-no" name="vehicle-insurance-${idx}-reg-no" rows="2"></textarea></label>
      <label><span>Model Name & No.</span><textarea id="vehicle-insurance-${idx}-model" name="vehicle-insurance-${idx}-model" rows="2"></textarea></label>
      <label><span>Engine No.</span><textarea id="vehicle-insurance-${idx}-engine" name="vehicle-insurance-${idx}-engine" rows="2"></textarea></label>
      <label><span>Chassis No.</span><textarea id="vehicle-insurance-${idx}-chassis" name="vehicle-insurance-${idx}-chassis" rows="2"></textarea></label>
      <label><span>Mfg Yr.</span><textarea id="vehicle-insurance-${idx}-mfg" name="vehicle-insurance-${idx}-mfg" rows="2"></textarea></label>
      <label><span>CC</span><textarea id="vehicle-insurance-${idx}-cc" name="vehicle-insurance-${idx}-cc" rows="2"></textarea></label>
      <label><span>Nominee</span><textarea id="vehicle-insurance-${idx}-nominee" name="vehicle-insurance-${idx}-nominee" rows="2"></textarea></label>
      <label><span>Agent Name & Mobile No.</span><textarea id="vehicle-insurance-${idx}-agent" name="vehicle-insurance-${idx}-agent" rows="2"></textarea></label>
    </div>
    <div class="table-shell compact">
      <table>
        <thead>
          <tr><th>Name/Vehicle</th><th>Policy No./Issuing Office</th><th>Amt. Insured</th><th>Issue Date / Maturity Date</th><th>Premium</th><th>Remarks</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><textarea id="vehicle-insurance-${idx}-name-vehicle" name="vehicle-insurance-${idx}-name-vehicle" rows="2"></textarea></td>
            <td><textarea id="vehicle-insurance-${idx}-policy" name="vehicle-insurance-${idx}-policy" rows="2"></textarea></td>
            <td><textarea id="vehicle-insurance-${idx}-insured" name="vehicle-insurance-${idx}-insured" rows="2"></textarea></td>
            <td><textarea id="vehicle-insurance-${idx}-issue" name="vehicle-insurance-${idx}-issue" rows="2"></textarea></td>
            <td><textarea id="vehicle-insurance-${idx}-premium" name="vehicle-insurance-${idx}-premium" rows="2"></textarea></td>
            <td><textarea id="vehicle-insurance-${idx}-remarks" name="vehicle-insurance-${idx}-remarks" rows="2"></textarea></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  const removeBtn = block.querySelector(".section-remove");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      block.remove();
      persistDraft();
    });
  }
  container.appendChild(block);
  persistDraft();
}

function addWillBlock(container, removable = true) {
  willExtraCount += 1;
  const idx = willBlocks.length + willExtraCount;
  const block = document.createElement("section");
  block.className = "subsection vehicle-insurance-block will-block";
  block.dataset.willBlock = String(idx);
  block.innerHTML = `
    <div class="subsection-header">
      <h3>Will (If Any)</h3>
      <span>Testament and will details</span>
    </div>
    ${removable ? '<button type="button" class="row-remove section-remove" title="Remove section">−</button>' : ""}
    <div class="field-stack single-column">
      <label><span>Will</span><textarea id="will-${idx}-will" name="will-${idx}-will" rows="3"></textarea></label>
      <label><span>My will is executed on</span><textarea id="will-${idx}-executed-on" name="will-${idx}-executed-on" rows="3"></textarea></label>
      <label><span>Copy of the will is kept at</span><textarea id="will-${idx}-kept-at" name="will-${idx}-kept-at" rows="3"></textarea></label>
    </div>
  `;
  const removeBtn = block.querySelector(".section-remove");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      block.remove();
      persistDraft();
    });
  }
  container.appendChild(block);
  persistDraft();
}

function addPowerOfAttorneyBlock(container, removable = true) {
  powerOfAttorneyExtraCount += 1;
  const idx = powerOfAttorneyBlocks.length + powerOfAttorneyExtraCount;
  const block = document.createElement("section");
  block.className = "subsection vehicle-insurance-block power-of-attorney-block";
  block.dataset.powerOfAttorneyBlock = String(idx);
  block.innerHTML = `
    <div class="subsection-header">
      <h3>Power Of Attorney</h3>
      <span>Authority and document details</span>
    </div>
    ${removable ? '<button type="button" class="row-remove section-remove" title="Remove section">−</button>' : ""}
    <div class="field-stack single-column">
      <label><span>POWER OF ATTORNEY</span><textarea id="power-of-attorney-${idx}-heading" name="power-of-attorney-${idx}-heading" rows="3"></textarea></label>
      <label><span>Power of Attorney executed for Wife/Son/Others</span><textarea id="power-of-attorney-${idx}-for" name="power-of-attorney-${idx}-for" rows="3"></textarea></label>
      <label><span>My Power of Attorney is</span><textarea id="power-of-attorney-${idx}-is" name="power-of-attorney-${idx}-is" rows="3"></textarea></label>
      <label><span>Deed Executed on</span><textarea id="power-of-attorney-${idx}-deed" name="power-of-attorney-${idx}-deed" rows="3"></textarea></label>
      <label><span>Details kept in File No.</span><textarea id="power-of-attorney-${idx}-file-no" name="power-of-attorney-${idx}-file-no" rows="3"></textarea></label>
    </div>
  `;
  const removeBtn = block.querySelector(".section-remove");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      block.remove();
      persistDraft();
    });
  }
  container.appendChild(block);
  persistDraft();
}

function addLiabilitiesRow(tbody) {
  liabilitiesExtraCount += 1;
  const code = nextNumericRowCode(tbody, 1);
  const keyPrefix = `liabilities-extra-${liabilitiesExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.liabilitiesExtra = String(liabilitiesExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-amount" name="${keyPrefix}-amount" rows="2" placeholder="Amount"></textarea></td>
    <td><textarea id="${keyPrefix}-borrowed-from" name="${keyPrefix}-borrowed-from" rows="2" placeholder="Borrowed From"></textarea></td>
    <td><textarea id="${keyPrefix}-rate-of-int" name="${keyPrefix}-rate-of-int" rows="2" placeholder="Rate of Int"></textarea></td>
    <td><textarea id="${keyPrefix}-already-paid" name="${keyPrefix}-already-paid" rows="2" placeholder="Already Paid"></textarea></td>
    <td><textarea id="${keyPrefix}-balance" name="${keyPrefix}-balance" rows="2" placeholder="Balance"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addLocationOfImpDocumentsRow(tbody) {
  locationOfImpDocumentsExtraCount += 1;
  const code = nextAlphaRowCode(tbody, "A");
  const keyPrefix = `location-of-imp-docs-extra-${locationOfImpDocumentsExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.locationOfImpDocsExtra = String(locationOfImpDocumentsExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-label" name="${keyPrefix}-label" rows="2" placeholder="Document / Paper Name"></textarea></td>
    <td><textarea id="${keyPrefix}-location" name="${keyPrefix}-location" rows="2" placeholder="Location / Details"></textarea></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function addAnyOtherDetailsRow(tbody) {
  anyOtherDetailsExtraCount += 1;
  const code = String(anyOtherDetailsExtraCount);
  const keyPrefix = `any-other-details-${anyOtherDetailsExtraCount}`;
  const tr = document.createElement("tr");
  tr.dataset.anyOtherDetailsExtra = String(anyOtherDetailsExtraCount);
  tr.innerHTML = `
    <td class="row-code">${code}</td>
    <td><textarea id="${keyPrefix}-detail" name="${keyPrefix}-detail" rows="3" placeholder="Any other detail"></textarea></td>
    <td class="row-actions"></td>
  `;
  const actionCell = document.createElement("td");
  actionCell.className = "row-actions";
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "row-remove";
  removeBtn.textContent = "−";
  removeBtn.title = "Remove row";
  removeBtn.addEventListener("click", () => {
    tr.remove();
    persistDraft();
  });
  actionCell.appendChild(removeBtn);
  tr.appendChild(actionCell);
  tbody.appendChild(tr);
  persistDraft();
}

function applyPaidSubscriptionDefaults() {
  const tbody = form.querySelector("#section-paid-subscription-services table tbody");
  if (!tbody) return;
  tbody.querySelectorAll("tr").forEach((tr) => {
    const code = tr.querySelector(".row-code")?.textContent?.trim() || "";
    const preset = paidSubscriptionRows.find((row) => row.code === code)?.operator || "";
    const operatorField = tr.querySelector('textarea[id$="-operator"]');
    if (operatorField && !operatorField.value.trim() && preset) {
      operatorField.value = preset;
    }
  });
}

function addReadyOtherRow(tbody) {
  readyOtherCount += 1;
  const code = String.fromCharCode(73 + readyOtherCount - 1);
  const suffix = `-other-${readyOtherCount}`;
  const tr = createReadyRow(code, `Other ${readyOtherCount}`, suffix, true);
  tr.dataset.readyRow = `other-${readyOtherCount}`;
  tbody.appendChild(tr);
  persistDraft();
}

function buildForm() {
  toc.innerHTML = "";
  form.innerHTML = "";

  const introSection = sectionTemplate.content.cloneNode(true);
  const introWrap = introSection.querySelector(".section-block");
  introWrap.id = "section-family-profile";
  introSection.querySelector("h2").textContent = "Family Profile";
  introSection.querySelector("p").textContent = "Basic information to help your family get started.";
  const introBody = introSection.querySelector(".section-body");
  introBody.className = "section-body field-grid";
  [
    ["Family Name", "familyName"],
    ["Mobile / Phone (Self)", "selfPhone"],
    ["Email", "email"],
    ["Residence Address", "residenceAddress"]
  ].forEach(([label, id]) => addField(introBody, label, id));
  const introActions = document.createElement("div");
  introActions.className = "section-actions";
  const introAddBtn = document.createElement("button");
  introAddBtn.type = "button";
  introAddBtn.className = "row-add";
  introAddBtn.textContent = "+ Add Field";
  introAddBtn.addEventListener("click", () => addDynamicField(introBody, "Family Profile"));
  introActions.appendChild(introAddBtn);
  introSection.querySelector(".section-block").appendChild(introActions);
  form.appendChild(introSection);

  const readySection = tableTemplate.content.cloneNode(true);
  const readyWrap = readySection.querySelector(".subsection");
  readyWrap.id = "section-ready-reference";
  readySection.querySelector("h3").textContent = "Ready Reference";
  readySection.querySelector("span").textContent = "Contact details";
  const readyThead = readySection.querySelector("thead");
  const readyTbody = readySection.querySelector("tbody");
  readyThead.innerHTML = `<tr><th></th><th></th><th>Name</th><th>Office Address / Residence Address</th><th>Mobile / Contact Number</th></tr>`;
  readyReferenceRows.forEach((row) => {
    readyTbody.appendChild(createReadyRow(row.code, row.label));
  });
  const readyAddBtn = document.createElement("button");
  readyAddBtn.type = "button";
  readyAddBtn.className = "row-add";
  readyAddBtn.textContent = "+ Add Other";
  readyAddBtn.addEventListener("click", () => addReadyOtherRow(readyTbody));
  readyWrap.appendChild(readyAddBtn);
  form.appendChild(readySection);

  const docsSection = tableTemplate.content.cloneNode(true);
  const docsWrap = docsSection.querySelector(".subsection");
  docsWrap.id = "section-important-documents";
  docsSection.querySelector("h3").textContent = "Imp Documents";
  docsSection.querySelector("span").textContent = "Identity and utility records";
  const docsThead = docsSection.querySelector("thead");
  const docsTbody = docsSection.querySelector("tbody");
  docsThead.innerHTML = `<tr><th></th><th>Name</th><th>Number</th><th>Expiry Date</th></tr>`;
  importantDocsRows.forEach((row) => {
    docsTbody.appendChild(createSimpleTableRow(row.code, row.label, `important-documents-${slug(row.label)}`));
  });
  const docsAddBtn = document.createElement("button");
  docsAddBtn.type = "button";
  docsAddBtn.className = "row-add";
  docsAddBtn.textContent = "+ Add Row";
  docsAddBtn.addEventListener("click", () => addImportantDocRow(docsTbody));
  docsWrap.appendChild(docsAddBtn);
  form.appendChild(docsSection);

  const aadhaarSection = tableTemplate.content.cloneNode(true);
  const aadhaarWrap = aadhaarSection.querySelector(".subsection");
  aadhaarWrap.id = "section-aadhaar-card-details";
  aadhaarSection.querySelector("h3").textContent = "AADHAR CARD DETAILS OF FAMILY";
  aadhaarSection.querySelector("span").textContent = "Identity records";
  const aadhaarThead = aadhaarSection.querySelector("thead");
  const aadhaarTbody = aadhaarSection.querySelector("tbody");
  aadhaarThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>Aadhar Card No./ Enrollment No.</th><th>Issue Date</th><th>Remarks</th></tr>`;
  aadhaarRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="aadhaar-${row.code}-name" name="aadhaar-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="aadhaar-${row.code}-number" name="aadhaar-${row.code}-number" rows="2"></textarea></td>
      <td><textarea id="aadhaar-${row.code}-issue" name="aadhaar-${row.code}-issue" rows="2"></textarea></td>
      <td><textarea id="aadhaar-${row.code}-remarks" name="aadhaar-${row.code}-remarks" rows="2"></textarea></td>
    `;
    aadhaarTbody.appendChild(tr);
  });
  const aadhaarAddBtn = document.createElement("button");
  aadhaarAddBtn.type = "button";
  aadhaarAddBtn.className = "row-add";
  aadhaarAddBtn.textContent = "+ Add Row";
  aadhaarAddBtn.addEventListener("click", () => addAadhaarRow(aadhaarTbody));
  aadhaarWrap.appendChild(aadhaarAddBtn);
  form.appendChild(aadhaarSection);

  const panSection = tableTemplate.content.cloneNode(true);
  const panWrap = panSection.querySelector(".subsection");
  panWrap.id = "section-pan-card-details";
  panSection.querySelector("h3").textContent = "PAN card Details";
  panSection.querySelector("span").textContent = "Identity records";
  const panThead = panSection.querySelector("thead");
  const panTbody = panSection.querySelector("tbody");
  panThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>Father's/Husband Name</th><th>PANCARD No</th><th>Contact Details</th></tr>`;
  panRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="pan-${row.code}-name" name="pan-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="pan-${row.code}-father" name="pan-${row.code}-father" rows="2"></textarea></td>
      <td><textarea id="pan-${row.code}-number" name="pan-${row.code}-number" rows="2"></textarea></td>
      <td><textarea id="pan-${row.code}-contact" name="pan-${row.code}-contact" rows="2"></textarea></td>
    `;
    panTbody.appendChild(tr);
  });
  const panAddBtn = document.createElement("button");
  panAddBtn.type = "button";
  panAddBtn.className = "row-add";
  panAddBtn.textContent = "+ Add Row";
  panAddBtn.addEventListener("click", () => addPanRow(panTbody));
  panWrap.appendChild(panAddBtn);
  form.appendChild(panSection);

  const voterSection = tableTemplate.content.cloneNode(true);
  const voterWrap = voterSection.querySelector(".subsection");
  voterWrap.id = "section-voter-election-id-card-details";
  voterSection.querySelector("h3").textContent = "Voter / Election ID Card Details";
  voterSection.querySelector("span").textContent = "Identity records";
  const voterThead = voterSection.querySelector("thead");
  const voterTbody = voterSection.querySelector("tbody");
  voterThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>Father's/Husband's Name</th><th>Identity Card No.</th><th>Issue Date</th></tr>`;
  voterRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="voter-${row.code}-name" name="voter-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="voter-${row.code}-father" name="voter-${row.code}-father" rows="2"></textarea></td>
      <td><textarea id="voter-${row.code}-number" name="voter-${row.code}-number" rows="2"></textarea></td>
      <td><textarea id="voter-${row.code}-issue" name="voter-${row.code}-issue" rows="2"></textarea></td>
    `;
    voterTbody.appendChild(tr);
  });
  const voterAddBtn = document.createElement("button");
  voterAddBtn.type = "button";
  voterAddBtn.className = "row-add";
  voterAddBtn.textContent = "+ Add Row";
  voterAddBtn.addEventListener("click", () => addVoterRow(voterTbody));
  voterWrap.appendChild(voterAddBtn);
  form.appendChild(voterSection);

  const impDatesSection = tableTemplate.content.cloneNode(true);
  const impDatesWrap = impDatesSection.querySelector(".subsection");
  impDatesWrap.id = "section-imp-dates";
  impDatesSection.querySelector("h3").textContent = "IMP DATES";
  impDatesSection.querySelector("span").textContent = "Important dates and preferences";
  const impDatesThead = impDatesSection.querySelector("thead");
  const impDatesTbody = impDatesSection.querySelector("tbody");
  impDatesThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>Birth Day / Other Imp Day</th><th>Fav. Food</th><th>Issue Date</th></tr>`;
  impDatesRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="imp-dates-${row.code}-name" name="imp-dates-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="imp-dates-${row.code}-birth" name="imp-dates-${row.code}-birth" rows="2"></textarea></td>
      <td><textarea id="imp-dates-${row.code}-food" name="imp-dates-${row.code}-food" rows="2"></textarea></td>
      <td><textarea id="imp-dates-${row.code}-issue" name="imp-dates-${row.code}-issue" rows="2"></textarea></td>
    `;
    impDatesTbody.appendChild(tr);
  });
  const impDatesAddBtn = document.createElement("button");
  impDatesAddBtn.type = "button";
  impDatesAddBtn.className = "row-add";
  impDatesAddBtn.textContent = "+ Add Row";
  impDatesAddBtn.addEventListener("click", () => addImpDateRow(impDatesTbody));
  impDatesWrap.appendChild(impDatesAddBtn);
  form.appendChild(impDatesSection);

  const housePropertySection = tableTemplate.content.cloneNode(true);
  const housePropertyWrap = housePropertySection.querySelector(".subsection");
  housePropertyWrap.id = "section-house-property-details";
  housePropertySection.querySelector("h3").textContent = "House Property Details";
  housePropertySection.querySelector("span").textContent = "Simplified property record";
  const housePropertyThead = housePropertySection.querySelector("thead");
  const housePropertyTbody = housePropertySection.querySelector("tbody");
  housePropertyThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>House Details</th><th>Census No.</th><th>Property Identification No. (PIN)</th><th>Construction Sq. Mtrs.</th><th>Remarks</th></tr>`;
  housePropertyRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="house-property-${row.code}-name" name="house-property-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="house-property-${row.code}-house-details" name="house-property-${row.code}-house-details" rows="2"></textarea></td>
      <td><textarea id="house-property-${row.code}-census" name="house-property-${row.code}-census" rows="2"></textarea></td>
      <td><textarea id="house-property-${row.code}-pin" name="house-property-${row.code}-pin" rows="2"></textarea></td>
      <td><textarea id="house-property-${row.code}-construction" name="house-property-${row.code}-construction" rows="2"></textarea></td>
      <td><textarea id="house-property-${row.code}-remarks" name="house-property-${row.code}-remarks" rows="2"></textarea></td>
    `;
    housePropertyTbody.appendChild(tr);
  });
  const housePropertyAddBtn = document.createElement("button");
  housePropertyAddBtn.type = "button";
  housePropertyAddBtn.className = "row-add";
  housePropertyAddBtn.textContent = "+ Add Row";
  housePropertyAddBtn.addEventListener("click", () => addHousePropertyRow(housePropertyTbody));
  housePropertyWrap.appendChild(housePropertyAddBtn);
  form.appendChild(housePropertySection);

  const electricitySection = tableTemplate.content.cloneNode(true);
  const electricityWrap = electricitySection.querySelector(".subsection");
  electricityWrap.id = "section-electricity-details";
  electricitySection.querySelector("h3").textContent = "Electricity Details";
  electricitySection.querySelector("span").textContent = "Utility records";
  const electricityThead = electricitySection.querySelector("thead");
  const electricityTbody = electricitySection.querySelector("tbody");
  electricityThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>House Details</th><th>Meter No.</th><th>Customer Service No.</th><th>Deposit Rs.</th><th>Remarks</th></tr>`;
  electricityRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="electricity-${row.code}-name" name="electricity-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="electricity-${row.code}-house-details" name="electricity-${row.code}-house-details" rows="2"></textarea></td>
      <td><textarea id="electricity-${row.code}-meter" name="electricity-${row.code}-meter" rows="2"></textarea></td>
      <td><textarea id="electricity-${row.code}-cust" name="electricity-${row.code}-cust" rows="2"></textarea></td>
      <td><textarea id="electricity-${row.code}-deposit" name="electricity-${row.code}-deposit" rows="2"></textarea></td>
      <td><textarea id="electricity-${row.code}-remarks" name="electricity-${row.code}-remarks" rows="2"></textarea></td>
    `;
    electricityTbody.appendChild(tr);
  });
  const electricityAddBtn = document.createElement("button");
  electricityAddBtn.type = "button";
  electricityAddBtn.className = "row-add";
  electricityAddBtn.textContent = "+ Add Row";
  electricityAddBtn.addEventListener("click", () => addElectricityRow(electricityTbody));
  electricityWrap.appendChild(electricityAddBtn);
  form.appendChild(electricitySection);

  const lpgGasSection = tableTemplate.content.cloneNode(true);
  const lpgGasWrap = lpgGasSection.querySelector(".subsection");
  lpgGasWrap.id = "section-lpg-gas-details";
  lpgGasSection.querySelector("h3").textContent = "LPG Gas Details";
  lpgGasSection.querySelector("span").textContent = "Gas connection records";
  const lpgGasThead = lpgGasSection.querySelector("thead");
  const lpgGasTbody = lpgGasSection.querySelector("tbody");
  lpgGasThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>Consumer No.</th><th>Office No</th><th>Delivery Boy No</th></tr>`;
  lpgGasRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="lpg-gas-${row.code}-name" name="lpg-gas-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="lpg-gas-${row.code}-consumer" name="lpg-gas-${row.code}-consumer" rows="2"></textarea></td>
      <td><textarea id="lpg-gas-${row.code}-office" name="lpg-gas-${row.code}-office" rows="2"></textarea></td>
      <td><textarea id="lpg-gas-${row.code}-delivery" name="lpg-gas-${row.code}-delivery" rows="2"></textarea></td>
    `;
    lpgGasTbody.appendChild(tr);
  });
  const lpgGasAddBtn = document.createElement("button");
  lpgGasAddBtn.type = "button";
  lpgGasAddBtn.className = "row-add";
  lpgGasAddBtn.textContent = "+ Add Row";
  lpgGasAddBtn.addEventListener("click", () => addLpgGasRow(lpgGasTbody));
  lpgGasWrap.appendChild(lpgGasAddBtn);
  form.appendChild(lpgGasSection);

  const dthSection = tableTemplate.content.cloneNode(true);
  const dthWrap = dthSection.querySelector(".subsection");
  dthWrap.id = "section-dth-details";
  dthSection.querySelector("h3").textContent = "DTH Details";
  dthSection.querySelector("span").textContent = "Subscription records";
  const dthThead = dthSection.querySelector("thead");
  const dthTbody = dthSection.querySelector("tbody");
  dthThead.innerHTML = `<tr><th>S.No</th><th>Reg.Name</th><th>Reg Mobile No</th><th>Opeartor</th><th>Addons</th></tr>`;
  dthRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="dth-${row.code}-name" name="dth-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="dth-${row.code}-mobile" name="dth-${row.code}-mobile" rows="2"></textarea></td>
      <td><textarea id="dth-${row.code}-operator" name="dth-${row.code}-operator" rows="2"></textarea></td>
      <td><textarea id="dth-${row.code}-addons" name="dth-${row.code}-addons" rows="2"></textarea></td>
    `;
    dthTbody.appendChild(tr);
  });
  const dthAddBtn = document.createElement("button");
  dthAddBtn.type = "button";
  dthAddBtn.className = "row-add";
  dthAddBtn.textContent = "+ Add Row";
  dthAddBtn.addEventListener("click", () => addDthRow(dthTbody));
  dthWrap.appendChild(dthAddBtn);
  form.appendChild(dthSection);

  const paidSubscriptionSection = tableTemplate.content.cloneNode(true);
  const paidSubscriptionWrap = paidSubscriptionSection.querySelector(".subsection");
  paidSubscriptionWrap.id = "section-paid-subscription-services";
  paidSubscriptionSection.querySelector("h3").textContent = "Paid Subscription Services";
  paidSubscriptionSection.querySelector("span").textContent = "Subscription and utility plans";
  const paidSubscriptionThead = paidSubscriptionSection.querySelector("thead");
  const paidSubscriptionTbody = paidSubscriptionSection.querySelector("tbody");
  paidSubscriptionThead.innerHTML = `<tr><th>S.No</th><th>Operator</th><th>Reg Mobile No</th><th>Plan Details</th><th>Due Date</th></tr>`;
  paidSubscriptionRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="paid-subscription-${row.code}-operator" name="paid-subscription-${row.code}-operator" rows="2"></textarea></td>
      <td><textarea id="paid-subscription-${row.code}-mobile" name="paid-subscription-${row.code}-mobile" rows="2"></textarea></td>
      <td><textarea id="paid-subscription-${row.code}-plan" name="paid-subscription-${row.code}-plan" rows="2"></textarea></td>
      <td><textarea id="paid-subscription-${row.code}-due" name="paid-subscription-${row.code}-due" rows="2"></textarea></td>
    `;
    tr.querySelector('textarea[id$="-operator"]').value = row.operator;
    paidSubscriptionTbody.appendChild(tr);
  });
  const paidSubscriptionAddBtn = document.createElement("button");
  paidSubscriptionAddBtn.type = "button";
  paidSubscriptionAddBtn.className = "row-add";
  paidSubscriptionAddBtn.textContent = "+ Add Row";
  paidSubscriptionAddBtn.addEventListener("click", () => addPaidSubscriptionRow(paidSubscriptionTbody));
  paidSubscriptionWrap.appendChild(paidSubscriptionAddBtn);
  form.appendChild(paidSubscriptionSection);

  const mediclaimPolicySection = tableTemplate.content.cloneNode(true);
  const mediclaimPolicyWrap = mediclaimPolicySection.querySelector(".subsection");
  mediclaimPolicyWrap.id = "section-mediclaim-policy";
  mediclaimPolicySection.querySelector("h3").textContent = "Mediclaim Policy";
  mediclaimPolicySection.querySelector("span").textContent = "Insurance records";
  const mediclaimPolicyThead = mediclaimPolicySection.querySelector("thead");
  const mediclaimPolicyTbody = mediclaimPolicySection.querySelector("tbody");
  mediclaimPolicyThead.innerHTML = `<tr><th>Sr. No.</th><th>Name & Type of Policy</th><th>Policy No./Previous Policy No.</th><th>Amt. Insured</th><th>Issue Date/Maturity Date</th><th>Premium</th><th>Remarks</th></tr>`;
  mediclaimPolicyRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="mediclaim-policy-${row.code}-name" name="mediclaim-policy-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="mediclaim-policy-${row.code}-number" name="mediclaim-policy-${row.code}-number" rows="2"></textarea></td>
      <td><textarea id="mediclaim-policy-${row.code}-amount" name="mediclaim-policy-${row.code}-amount" rows="2"></textarea></td>
      <td><textarea id="mediclaim-policy-${row.code}-date" name="mediclaim-policy-${row.code}-date" rows="2"></textarea></td>
      <td><textarea id="mediclaim-policy-${row.code}-premium" name="mediclaim-policy-${row.code}-premium" rows="2"></textarea></td>
      <td><textarea id="mediclaim-policy-${row.code}-remarks" name="mediclaim-policy-${row.code}-remarks" rows="2"></textarea></td>
    `;
    if (row.label) {
      tr.querySelector('textarea[id$="-name"]').value = row.label;
    }
    mediclaimPolicyTbody.appendChild(tr);
  });
  const mediclaimPolicyAddBtn = document.createElement("button");
  mediclaimPolicyAddBtn.type = "button";
  mediclaimPolicyAddBtn.className = "row-add";
  mediclaimPolicyAddBtn.textContent = "+ Add Row";
  mediclaimPolicyAddBtn.addEventListener("click", () => addMediclaimPolicyRow(mediclaimPolicyTbody));
  mediclaimPolicyWrap.appendChild(mediclaimPolicyAddBtn);
  form.appendChild(mediclaimPolicySection);

  const pmjbyPmsbySection = tableTemplate.content.cloneNode(true);
  const pmjbyPmsbyWrap = pmjbyPmsbySection.querySelector(".subsection");
  pmjbyPmsbyWrap.id = "section-pmjby-pmsby";
  pmjbyPmsbySection.querySelector("h3").textContent = "PMJJBY & PMSBY";
  pmjbyPmsbySection.querySelector("span").textContent = "Insurance and savings policies";
  const pmjbyPmsbyThead = pmjbyPmsbySection.querySelector("thead");
  const pmjbyPmsbyTbody = pmjbyPmsbySection.querySelector("tbody");
  pmjbyPmsbyThead.innerHTML = `<tr><th>Sr. No.</th><th>Name & Type of Policy</th><th>Name of the Bank</th><th>Date of Commencement</th><th>Bank Balance to be maintained</th><th>Premium</th><th>Remarks</th></tr>`;
  pmjbyPmsbyRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="pmjby-pmsby-${row.code}-policy" name="pmjby-pmsby-${row.code}-policy" rows="2"></textarea></td>
      <td><textarea id="pmjby-pmsby-${row.code}-bank" name="pmjby-pmsby-${row.code}-bank" rows="2"></textarea></td>
      <td><textarea id="pmjby-pmsby-${row.code}-date" name="pmjby-pmsby-${row.code}-date" rows="2"></textarea></td>
      <td><textarea id="pmjby-pmsby-${row.code}-balance" name="pmjby-pmsby-${row.code}-balance" rows="2"></textarea></td>
      <td><textarea id="pmjby-pmsby-${row.code}-premium" name="pmjby-pmsby-${row.code}-premium" rows="2"></textarea></td>
      <td><textarea id="pmjby-pmsby-${row.code}-remarks" name="pmjby-pmsby-${row.code}-remarks" rows="2"></textarea></td>
    `;
    tr.querySelector('textarea[id$="-policy"]').value = row.label;
    pmjbyPmsbyTbody.appendChild(tr);
  });
  const pmjbyPmsbyAddBtn = document.createElement("button");
  pmjbyPmsbyAddBtn.type = "button";
  pmjbyPmsbyAddBtn.className = "row-add";
  pmjbyPmsbyAddBtn.textContent = "+ Add Row";
  pmjbyPmsbyAddBtn.addEventListener("click", () => addPmjbyPmsbyRow(pmjbyPmsbyTbody));
  pmjbyPmsbyWrap.appendChild(pmjbyPmsbyAddBtn);
  form.appendChild(pmjbyPmsbySection);

  const licRenewalSection = tableTemplate.content.cloneNode(true);
  const licRenewalWrap = licRenewalSection.querySelector(".subsection");
  licRenewalWrap.id = "section-lic-renewal-details";
  licRenewalSection.querySelector("h3").textContent = "LIC Renewal Details";
  licRenewalSection.querySelector("span").textContent = "Policy renewal records";
  const licRenewalThead = licRenewalSection.querySelector("thead");
  const licRenewalTbody = licRenewalSection.querySelector("tbody");
  licRenewalThead.innerHTML = `<tr><th>Sr. No.</th><th>Name & Type of Policy</th><th>Policy No.</th><th>Amt. Insured</th><th>Issue Date/ Maturity Date</th><th>Premium</th><th>Premium Due Date</th></tr>`;
  licRenewalRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="lic-renewal-${row.code}-policy" name="lic-renewal-${row.code}-policy" rows="2"></textarea></td>
      <td><textarea id="lic-renewal-${row.code}-policy-no" name="lic-renewal-${row.code}-policy-no" rows="2"></textarea></td>
      <td><textarea id="lic-renewal-${row.code}-insured" name="lic-renewal-${row.code}-insured" rows="2"></textarea></td>
      <td><textarea id="lic-renewal-${row.code}-date" name="lic-renewal-${row.code}-date" rows="2"></textarea></td>
      <td><textarea id="lic-renewal-${row.code}-premium" name="lic-renewal-${row.code}-premium" rows="2"></textarea></td>
      <td><textarea id="lic-renewal-${row.code}-due" name="lic-renewal-${row.code}-due" rows="2"></textarea></td>
    `;
    licRenewalTbody.appendChild(tr);
  });
  const licRenewalAddBtn = document.createElement("button");
  licRenewalAddBtn.type = "button";
  licRenewalAddBtn.className = "row-add";
  licRenewalAddBtn.textContent = "+ Add Row";
  licRenewalAddBtn.addEventListener("click", () => addLicRenewalRow(licRenewalTbody));
  licRenewalWrap.appendChild(licRenewalAddBtn);
  form.appendChild(licRenewalSection);

  const vehicleInsuranceSection = document.createElement("section");
  vehicleInsuranceSection.className = "section-block";
  vehicleInsuranceSection.id = "section-vehicle-insurance-policy";
  vehicleInsuranceSection.innerHTML = `
    <div class="subsection-header">
      <h2>Vehicle Insurance Policy</h2>
      <p>Grouped vehicle details with policy information.</p>
    </div>
  `;
  const vehicleInsuranceList = document.createElement("div");
  vehicleInsuranceList.className = "vehicle-insurance-list";
  vehicleInsuranceBlocks.forEach((_, idx) => addVehicleInsuranceBlock(vehicleInsuranceList, idx !== 0));
  const vehicleAddBtn = document.createElement("button");
  vehicleAddBtn.type = "button";
  vehicleAddBtn.className = "row-add";
  vehicleAddBtn.textContent = "+ Add Section";
  vehicleAddBtn.addEventListener("click", () => addVehicleInsuranceBlock(vehicleInsuranceList, true));
  vehicleInsuranceSection.appendChild(vehicleInsuranceList);
  vehicleInsuranceSection.appendChild(vehicleAddBtn);
  form.appendChild(vehicleInsuranceSection);

  const fireBurglarySection = tableTemplate.content.cloneNode(true);
  const fireBurglaryWrap = fireBurglarySection.querySelector(".subsection");
  fireBurglaryWrap.id = "section-fire-burglary-insurance";
  fireBurglarySection.querySelector("h3").textContent = "Fire & Burglary Insurance";
  fireBurglarySection.querySelector("span").textContent = "Property insurance records";
  const fireBurglaryThead = fireBurglarySection.querySelector("thead");
  const fireBurglaryTbody = fireBurglarySection.querySelector("tbody");
  fireBurglaryThead.innerHTML = `<tr><th>Sr. No.</th><th>Name of the Property/ Nominee</th><th>Policy No./ Issuing Office</th><th>Amt. Insured</th><th>Risks Covered</th><th>Issue Date/Maturity Date</th><th>Premium (Rs.)</th><th>Remarks</th></tr>`;
  fireBurglaryRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="fire-burglary-${row.code}-property" name="fire-burglary-${row.code}-property" rows="2"></textarea></td>
      <td><textarea id="fire-burglary-${row.code}-policy-no" name="fire-burglary-${row.code}-policy-no" rows="2"></textarea></td>
      <td><textarea id="fire-burglary-${row.code}-insured" name="fire-burglary-${row.code}-insured" rows="2"></textarea></td>
      <td><textarea id="fire-burglary-${row.code}-risks" name="fire-burglary-${row.code}-risks" rows="2"></textarea></td>
      <td><textarea id="fire-burglary-${row.code}-issue" name="fire-burglary-${row.code}-issue" rows="2"></textarea></td>
      <td><textarea id="fire-burglary-${row.code}-premium" name="fire-burglary-${row.code}-premium" rows="2"></textarea></td>
      <td><textarea id="fire-burglary-${row.code}-remarks" name="fire-burglary-${row.code}-remarks" rows="2"></textarea></td>
    `;
    fireBurglaryTbody.appendChild(tr);
  });
  const fireBurglaryAddBtn = document.createElement("button");
  fireBurglaryAddBtn.type = "button";
  fireBurglaryAddBtn.className = "row-add";
  fireBurglaryAddBtn.textContent = "+ Add Row";
  fireBurglaryAddBtn.addEventListener("click", () => addFireBurglaryRow(fireBurglaryTbody));
  fireBurglaryWrap.appendChild(fireBurglaryAddBtn);
  form.appendChild(fireBurglarySection);

  const debitCardSection = tableTemplate.content.cloneNode(true);
  const debitCardWrap = debitCardSection.querySelector(".subsection");
  debitCardWrap.id = "section-debit-card-details";
  debitCardSection.querySelector("h3").textContent = "Debit Card Details";
  debitCardSection.querySelector("span").textContent = "Bank card records";
  const debitCardThead = debitCardSection.querySelector("thead");
  const debitCardTbody = debitCardSection.querySelector("tbody");
  debitCardThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>SB A/c. No. / Bank & Branch</th><th>ATM / Debit Card No.</th><th>Issue Date</th><th>Valid Thru</th><th>CVV No.</th><th>Remarks</th></tr>`;
  debitCardRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="debit-card-${row.code}-name" name="debit-card-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="debit-card-${row.code}-account" name="debit-card-${row.code}-account" rows="2"></textarea></td>
      <td><textarea id="debit-card-${row.code}-card" name="debit-card-${row.code}-card" rows="2"></textarea></td>
      <td><textarea id="debit-card-${row.code}-issue" name="debit-card-${row.code}-issue" rows="2"></textarea></td>
      <td><textarea id="debit-card-${row.code}-valid" name="debit-card-${row.code}-valid" rows="2"></textarea></td>
      <td><textarea id="debit-card-${row.code}-cvv" name="debit-card-${row.code}-cvv" rows="2"></textarea></td>
      <td><textarea id="debit-card-${row.code}-remarks" name="debit-card-${row.code}-remarks" rows="2"></textarea></td>
    `;
    debitCardTbody.appendChild(tr);
  });
  const debitCardAddBtn = document.createElement("button");
  debitCardAddBtn.type = "button";
  debitCardAddBtn.className = "row-add";
  debitCardAddBtn.textContent = "+ Add Row";
  debitCardAddBtn.addEventListener("click", () => addDebitCardRow(debitCardTbody));
  debitCardWrap.appendChild(debitCardAddBtn);
  form.appendChild(debitCardSection);

  const creditCardSection = tableTemplate.content.cloneNode(true);
  const creditCardWrap = creditCardSection.querySelector(".subsection");
  creditCardWrap.id = "section-credit-card-details";
  creditCardSection.querySelector("h3").textContent = "Credit Card Details";
  creditCardSection.querySelector("span").textContent = "Card records";
  const creditCardThead = creditCardSection.querySelector("thead");
  const creditCardTbody = creditCardSection.querySelector("tbody");
  creditCardThead.innerHTML = `<tr><th>Sr. No.</th><th>Name</th><th>Bank's Name</th><th>Credit Card No.</th><th>Valid From</th><th>Valid Thru</th><th>CVV No.</th><th>Remarks / T-Pin</th></tr>`;
  creditCardRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="credit-card-${row.code}-name" name="credit-card-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="credit-card-${row.code}-bank" name="credit-card-${row.code}-bank" rows="2"></textarea></td>
      <td><textarea id="credit-card-${row.code}-card" name="credit-card-${row.code}-card" rows="2"></textarea></td>
      <td><textarea id="credit-card-${row.code}-valid-from" name="credit-card-${row.code}-valid-from" rows="2"></textarea></td>
      <td><textarea id="credit-card-${row.code}-valid-thru" name="credit-card-${row.code}-valid-thru" rows="2"></textarea></td>
      <td><textarea id="credit-card-${row.code}-cvv" name="credit-card-${row.code}-cvv" rows="2"></textarea></td>
      <td><textarea id="credit-card-${row.code}-remarks" name="credit-card-${row.code}-remarks" rows="2"></textarea></td>
    `;
    creditCardTbody.appendChild(tr);
  });
  const creditCardAddBtn = document.createElement("button");
  creditCardAddBtn.type = "button";
  creditCardAddBtn.className = "row-add";
  creditCardAddBtn.textContent = "+ Add Row";
  creditCardAddBtn.addEventListener("click", () => addCreditCardRow(creditCardTbody));
  creditCardWrap.appendChild(creditCardAddBtn);
  form.appendChild(creditCardSection);

  const newLicSection = tableTemplate.content.cloneNode(true);
  const newLicWrap = newLicSection.querySelector(".subsection");
  newLicWrap.id = "section-new-lic-details";
  newLicSection.querySelector("h3").textContent = "LIC Details";
  newLicSection.querySelector("span").textContent = "Insurance records";
  const newLicThead = newLicSection.querySelector("thead");
  const newLicTbody = newLicSection.querySelector("tbody");
  newLicThead.innerHTML = `<tr><th>Sr. No.</th><th>Name & Type of Policy</th><th>Policy No.</th><th>Amt. Insured</th><th>Nominee</th><th>Any Special Instructions</th><th>Action</th></tr>`;
  newLicDetailsRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="new-lic-${row.code}-policy" name="new-lic-${row.code}-policy" rows="2"></textarea></td>
      <td><textarea id="new-lic-${row.code}-policy-no" name="new-lic-${row.code}-policy-no" rows="2"></textarea></td>
      <td><textarea id="new-lic-${row.code}-insured" name="new-lic-${row.code}-insured" rows="2"></textarea></td>
      <td><textarea id="new-lic-${row.code}-nominee" name="new-lic-${row.code}-nominee" rows="2"></textarea></td>
      <td><textarea id="new-lic-${row.code}-instructions" name="new-lic-${row.code}-instructions" rows="2"></textarea></td>
      <td class="row-actions"></td>
    `;
    newLicTbody.appendChild(tr);
  });
  const newLicAddBtn = document.createElement("button");
  newLicAddBtn.type = "button";
  newLicAddBtn.className = "row-add";
  newLicAddBtn.textContent = "+ Add Row";
  newLicAddBtn.addEventListener("click", () => addNewLicDetailsRow(newLicTbody));
  newLicWrap.appendChild(newLicAddBtn);
  form.appendChild(newLicSection);

  const newPmjbySection = tableTemplate.content.cloneNode(true);
  const newPmjbyWrap = newPmjbySection.querySelector(".subsection");
  newPmjbyWrap.id = "section-new-pmjby-pmsby";
  newPmjbySection.querySelector("h3").textContent = "PMJJBY / PMSBY";
  newPmjbySection.querySelector("span").textContent = "Insurance and savings policies";
  const newPmjbyThead = newPmjbySection.querySelector("thead");
  const newPmjbyTbody = newPmjbySection.querySelector("tbody");
  newPmjbyThead.innerHTML = `<tr><th>Sr. No.</th><th>Name & Type of Policy</th><th>Name of the Bank</th><th>Date of Commencement</th><th>Nominee</th><th>Action</th></tr>`;
  newPmjbyPmsbyRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="new-pmjby-${row.code}-policy" name="new-pmjby-${row.code}-policy" rows="2"></textarea></td>
      <td><textarea id="new-pmjby-${row.code}-bank" name="new-pmjby-${row.code}-bank" rows="2"></textarea></td>
      <td><textarea id="new-pmjby-${row.code}-date" name="new-pmjby-${row.code}-date" rows="2"></textarea></td>
      <td><textarea id="new-pmjby-${row.code}-nominee" name="new-pmjby-${row.code}-nominee" rows="2"></textarea></td>
      <td class="row-actions"></td>
    `;
    tr.querySelector('textarea[id$="-policy"]').value = row.label;
    newPmjbyTbody.appendChild(tr);
  });
  const newPmjbyAddBtn = document.createElement("button");
  newPmjbyAddBtn.type = "button";
  newPmjbyAddBtn.className = "row-add";
  newPmjbyAddBtn.textContent = "+ Add Row";
  newPmjbyAddBtn.addEventListener("click", () => addPmjbyPmsbyRow(newPmjbyTbody));
  newPmjbyWrap.appendChild(newPmjbyAddBtn);
  form.appendChild(newPmjbySection);

  const newBankSection = tableTemplate.content.cloneNode(true);
  const newBankWrap = newBankSection.querySelector(".subsection");
  newBankWrap.id = "section-new-bank-account-details";
  newBankSection.querySelector("h3").textContent = "Bank Account Details";
  newBankSection.querySelector("span").textContent = "Account records";
  const newBankThead = newBankSection.querySelector("thead");
  const newBankTbody = newBankSection.querySelector("tbody");
  newBankThead.innerHTML = `<tr><th>Sr. No.</th><th>Bank Name</th><th>Branch</th><th>Type of Account</th><th>Nominee/s</th><th>Action</th></tr>`;
  newBankAccountRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="new-bank-${row.code}-bank" name="new-bank-${row.code}-bank" rows="2"></textarea></td>
      <td><textarea id="new-bank-${row.code}-branch" name="new-bank-${row.code}-branch" rows="2"></textarea></td>
      <td><textarea id="new-bank-${row.code}-type" name="new-bank-${row.code}-type" rows="2"></textarea></td>
      <td><textarea id="new-bank-${row.code}-nominee" name="new-bank-${row.code}-nominee" rows="2"></textarea></td>
      <td class="row-actions"></td>
    `;
    newBankTbody.appendChild(tr);
  });
  const newBankAddBtn = document.createElement("button");
  newBankAddBtn.type = "button";
  newBankAddBtn.className = "row-add";
  newBankAddBtn.textContent = "+ Add Row";
  newBankAddBtn.addEventListener("click", () => addNewBankAccountRow(newBankTbody));
  newBankWrap.appendChild(newBankAddBtn);
  form.appendChild(newBankSection);

  const newLockerSection = tableTemplate.content.cloneNode(true);
  const newLockerWrap = newLockerSection.querySelector(".subsection");
  newLockerWrap.id = "section-new-locker-details";
  newLockerSection.querySelector("h3").textContent = "Locker Details";
  newLockerSection.querySelector("span").textContent = "Safe deposit records";
  const newLockerThead = newLockerSection.querySelector("thead");
  const newLockerTbody = newLockerSection.querySelector("tbody");
  newLockerThead.innerHTML = `<tr><th>Sr. No.</th><th>Bank Name & Branch</th><th>Locker No.</th><th>In the Name of</th><th>Deputy</th><th>Rent (Rs.)</th><th>Rent Renewal Date</th><th>Nominee</th><th>Contents</th><th>Action</th></tr>`;
  newLockerRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="new-locker-${row.code}-bank" name="new-locker-${row.code}-bank" rows="2"></textarea></td>
      <td><textarea id="new-locker-${row.code}-locker" name="new-locker-${row.code}-locker" rows="2"></textarea></td>
      <td><textarea id="new-locker-${row.code}-name" name="new-locker-${row.code}-name" rows="2"></textarea></td>
      <td><textarea id="new-locker-${row.code}-deputy" name="new-locker-${row.code}-deputy" rows="2"></textarea></td>
      <td><textarea id="new-locker-${row.code}-rent" name="new-locker-${row.code}-rent" rows="2"></textarea></td>
      <td><textarea id="new-locker-${row.code}-renewal" name="new-locker-${row.code}-renewal" rows="2"></textarea></td>
      <td><textarea id="new-locker-${row.code}-nominee" name="new-locker-${row.code}-nominee" rows="2"></textarea></td>
      <td><textarea id="new-locker-${row.code}-contents" name="new-locker-${row.code}-contents" rows="2"></textarea></td>
      <td class="row-actions"></td>
    `;
    newLockerTbody.appendChild(tr);
  });
  const newLockerAddBtn = document.createElement("button");
  newLockerAddBtn.type = "button";
  newLockerAddBtn.className = "row-add";
  newLockerAddBtn.textContent = "+ Add Row";
  newLockerAddBtn.addEventListener("click", () => addNewLockerRow(newLockerTbody));
  newLockerWrap.appendChild(newLockerAddBtn);
  form.appendChild(newLockerSection);

  const fdrSection = tableTemplate.content.cloneNode(true);
  const fdrWrap = fdrSection.querySelector(".subsection");
  fdrWrap.id = "section-fdr-details";
  fdrSection.querySelector("h3").textContent = "FDR Details";
  fdrSection.querySelector("span").textContent = "Deposit records";
  const fdrThead = fdrSection.querySelector("thead");
  const fdrTbody = fdrSection.querySelector("tbody");
  fdrThead.innerHTML = `<tr><th>Sr. No.</th><th>Bank/Company Name & Branch</th><th>Type of Dep. (SDR/FDR/RD)</th><th>FDR No.</th><th>Date of Dep.</th><th>Amt. (Rs.)</th><th>Maturity Date</th><th>Nominee/s</th><th>Loan / OD availed</th><th>Action</th></tr>`;
  fdrDetailsRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="fdr-${row.code}-bank" name="fdr-${row.code}-bank" rows="2"></textarea></td>
      <td><textarea id="fdr-${row.code}-type" name="fdr-${row.code}-type" rows="2"></textarea></td>
      <td><textarea id="fdr-${row.code}-fdr" name="fdr-${row.code}-fdr" rows="2"></textarea></td>
      <td><textarea id="fdr-${row.code}-date" name="fdr-${row.code}-date" rows="2"></textarea></td>
      <td><textarea id="fdr-${row.code}-amt" name="fdr-${row.code}-amt" rows="2"></textarea></td>
      <td><textarea id="fdr-${row.code}-maturity" name="fdr-${row.code}-maturity" rows="2"></textarea></td>
      <td><textarea id="fdr-${row.code}-nominee" name="fdr-${row.code}-nominee" rows="2"></textarea></td>
      <td><textarea id="fdr-${row.code}-loan" name="fdr-${row.code}-loan" rows="2"></textarea></td>
      <td class="row-actions"></td>
    `;
    fdrTbody.appendChild(tr);
  });
  const fdrAddBtn = document.createElement("button");
  fdrAddBtn.type = "button";
  fdrAddBtn.className = "row-add";
  fdrAddBtn.textContent = "+ Add Row";
  fdrAddBtn.addEventListener("click", () => addFdrDetailsRow(fdrTbody));
  fdrWrap.appendChild(fdrAddBtn);
  form.appendChild(fdrSection);

  const mutualFundsSection = tableTemplate.content.cloneNode(true);
  const mutualFundsWrap = mutualFundsSection.querySelector(".subsection");
  mutualFundsWrap.id = "section-mutual-funds";
  mutualFundsSection.querySelector("table").classList.add("mutual-funds-table");
  mutualFundsSection.querySelector("h3").textContent = "Mutual Funds";
  mutualFundsSection.querySelector("span").textContent = "Fund records";
  const mutualFundsThead = mutualFundsSection.querySelector("thead");
  const mutualFundsTbody = mutualFundsSection.querySelector("tbody");
  mutualFundsThead.innerHTML = `<tr><th>Sr. No.</th><th>Folio Number</th><th>Name of Fund</th><th>Applicant</th><th>Nominee</th><th>Total Amount Invested</th><th>Action</th></tr>`;
  mutualFundsRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="mutual-funds-${row.code}-folio" name="mutual-funds-${row.code}-folio" rows="2" placeholder="Folio Number"></textarea></td>
      <td><textarea id="mutual-funds-${row.code}-fund" name="mutual-funds-${row.code}-fund" rows="2" placeholder="Name of Fund"></textarea></td>
      <td><textarea id="mutual-funds-${row.code}-applicant" name="mutual-funds-${row.code}-applicant" rows="2" placeholder="Applicant"></textarea></td>
      <td><textarea id="mutual-funds-${row.code}-nominee" name="mutual-funds-${row.code}-nominee" rows="2" placeholder="Nominee"></textarea></td>
      <td><textarea id="mutual-funds-${row.code}-amount" name="mutual-funds-${row.code}-amount" rows="2" placeholder="Total Amount Invested"></textarea></td>
      <td class="row-actions"></td>
    `;
    mutualFundsTbody.appendChild(tr);
  });
  const mutualFundsAddBtn = document.createElement("button");
  mutualFundsAddBtn.type = "button";
  mutualFundsAddBtn.className = "row-add";
  mutualFundsAddBtn.textContent = "+ Add Row";
  mutualFundsAddBtn.addEventListener("click", () => addMutualFundsRow(mutualFundsTbody));
  mutualFundsWrap.appendChild(mutualFundsAddBtn);
  form.appendChild(mutualFundsSection);

  const ppfSection = tableTemplate.content.cloneNode(true);
  const ppfWrap = ppfSection.querySelector(".subsection");
  ppfWrap.id = "section-ppf-account-details";
  ppfSection.querySelector("h3").textContent = "PPF Account Details";
  ppfSection.querySelector("span").textContent = "Savings and deposit records";
  const ppfThead = ppfSection.querySelector("thead");
  const ppfTbody = ppfSection.querySelector("tbody");
  ppfThead.innerHTML = `<tr><th>Sr. No.</th><th>Bank Name & Branch</th><th>Fvg.</th><th>PPF A/c. No.</th><th>Maturity Date</th><th>Nominee/s</th><th>Action</th></tr>`;
  ppfAccountRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="ppf-${row.code}-bank" name="ppf-${row.code}-bank" rows="2" placeholder="Bank Name & Branch"></textarea></td>
      <td><textarea id="ppf-${row.code}-fvg" name="ppf-${row.code}-fvg" rows="2" placeholder="Fvg."></textarea></td>
      <td><textarea id="ppf-${row.code}-account" name="ppf-${row.code}-account" rows="2" placeholder="PPF A/c. No."></textarea></td>
      <td><textarea id="ppf-${row.code}-maturity" name="ppf-${row.code}-maturity" rows="2" placeholder="Maturity Date"></textarea></td>
      <td><textarea id="ppf-${row.code}-nominee" name="ppf-${row.code}-nominee" rows="2" placeholder="Nominee/s"></textarea></td>
      <td class="row-actions"></td>
    `;
    ppfTbody.appendChild(tr);
  });
  const ppfAddBtn = document.createElement("button");
  ppfAddBtn.type = "button";
  ppfAddBtn.className = "row-add";
  ppfAddBtn.textContent = "+ Add Row";
  ppfAddBtn.addEventListener("click", () => addPpfAccountRow(ppfTbody));
  ppfWrap.appendChild(ppfAddBtn);
  form.appendChild(ppfSection);

  const pensionSection = tableTemplate.content.cloneNode(true);
  const pensionWrap = pensionSection.querySelector(".subsection");
  pensionWrap.id = "section-pension-account";
  pensionSection.querySelector("h3").textContent = "Pension Account";
  pensionSection.querySelector("span").textContent = "Retirement account records";
  const pensionThead = pensionSection.querySelector("thead");
  const pensionTbody = pensionSection.querySelector("tbody");
  pensionThead.innerHTML = `<tr><th>Sr. No.</th><th>Bank Name & Branch</th><th>Type of Account & Pension A/c. No.</th><th>Operating Instructions</th><th>Pension Payment Order No.</th><th>Nominee/s</th><th>Due Date for Live Certificate</th><th>Signature</th><th>Action</th></tr>`;
  pensionAccountRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="pension-${row.code}-bank" name="pension-${row.code}-bank" rows="2" placeholder="Bank Name & Branch"></textarea></td>
      <td><textarea id="pension-${row.code}-account-type" name="pension-${row.code}-account-type" rows="2" placeholder="Type of Account & Pension A/c. No."></textarea></td>
      <td><textarea id="pension-${row.code}-instructions" name="pension-${row.code}-instructions" rows="2" placeholder="Operating Instructions"></textarea></td>
      <td><textarea id="pension-${row.code}-order" name="pension-${row.code}-order" rows="2" placeholder="Pension Payment Order No."></textarea></td>
      <td><textarea id="pension-${row.code}-nominee" name="pension-${row.code}-nominee" rows="2" placeholder="Nominee/s"></textarea></td>
      <td><textarea id="pension-${row.code}-due" name="pension-${row.code}-due" rows="2" placeholder="Due Date for Live Certificate"></textarea></td>
      <td><textarea id="pension-${row.code}-signature" name="pension-${row.code}-signature" rows="2" placeholder="Signature"></textarea></td>
      <td class="row-actions"></td>
    `;
    pensionTbody.appendChild(tr);
  });
  const pensionAddBtn = document.createElement("button");
  pensionAddBtn.type = "button";
  pensionAddBtn.className = "row-add";
  pensionAddBtn.textContent = "+ Add Row";
  pensionAddBtn.addEventListener("click", () => addPensionAccountRow(pensionTbody));
  pensionWrap.appendChild(pensionAddBtn);
  form.appendChild(pensionSection);

  const willSection = document.createElement("section");
  willSection.className = "section-block";
  willSection.id = "section-will-if-any";
  willSection.innerHTML = `
    <div class="subsection-header">
      <h2>Will (If Any)</h2>
      <p>Single-document will notes and storage details.</p>
    </div>
  `;
  const willList = document.createElement("div");
  willList.className = "vehicle-insurance-list";
  willBlocks.forEach((_, idx) => addWillBlock(willList, idx !== 0));
  const willAddBtn = document.createElement("button");
  willAddBtn.type = "button";
  willAddBtn.className = "row-add";
  willAddBtn.textContent = "+ Add Section";
  willAddBtn.addEventListener("click", () => addWillBlock(willList, true));
  willSection.appendChild(willList);
  willSection.appendChild(willAddBtn);
  form.appendChild(willSection);

  const poaSection = document.createElement("section");
  poaSection.className = "section-block";
  poaSection.id = "section-power-of-attorney";
  poaSection.innerHTML = `
    <div class="subsection-header">
      <h2>Power Of Attorney</h2>
      <p>Authority and deed reference notes.</p>
    </div>
  `;
  const poaList = document.createElement("div");
  poaList.className = "vehicle-insurance-list";
  powerOfAttorneyBlocks.forEach((_, idx) => addPowerOfAttorneyBlock(poaList, idx !== 0));
  const poaAddBtn = document.createElement("button");
  poaAddBtn.type = "button";
  poaAddBtn.className = "row-add";
  poaAddBtn.textContent = "+ Add Section";
  poaAddBtn.addEventListener("click", () => addPowerOfAttorneyBlock(poaList, true));
  poaSection.appendChild(poaList);
  poaSection.appendChild(poaAddBtn);
  form.appendChild(poaSection);

  const liabilitiesSection = tableTemplate.content.cloneNode(true);
  const liabilitiesWrap = liabilitiesSection.querySelector(".subsection");
  liabilitiesWrap.id = "section-my-liabilities-debts";
  liabilitiesSection.querySelector("h3").textContent = "My Liabilities / Debts";
  liabilitiesSection.querySelector("span").textContent = "Loans and outstanding dues";
  const liabilitiesThead = liabilitiesSection.querySelector("thead");
  const liabilitiesTbody = liabilitiesSection.querySelector("tbody");
  liabilitiesThead.innerHTML = `<tr><th>S. No</th><th>Amount</th><th>Borrowed From</th><th>Rate of Int</th><th>Already Paid</th><th>Balance</th><th>Action</th></tr>`;
  liabilitiesRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="liabilities-${row.code}-amount" name="liabilities-${row.code}-amount" rows="2" placeholder="Amount"></textarea></td>
      <td><textarea id="liabilities-${row.code}-borrowed-from" name="liabilities-${row.code}-borrowed-from" rows="2" placeholder="Borrowed From"></textarea></td>
      <td><textarea id="liabilities-${row.code}-rate-of-int" name="liabilities-${row.code}-rate-of-int" rows="2" placeholder="Rate of Int"></textarea></td>
      <td><textarea id="liabilities-${row.code}-already-paid" name="liabilities-${row.code}-already-paid" rows="2" placeholder="Already Paid"></textarea></td>
      <td><textarea id="liabilities-${row.code}-balance" name="liabilities-${row.code}-balance" rows="2" placeholder="Balance"></textarea></td>
      <td class="row-actions"></td>
    `;
    liabilitiesTbody.appendChild(tr);
  });
  const liabilitiesAddBtn = document.createElement("button");
  liabilitiesAddBtn.type = "button";
  liabilitiesAddBtn.className = "row-add";
  liabilitiesAddBtn.textContent = "+ Add Row";
  liabilitiesAddBtn.addEventListener("click", () => addLiabilitiesRow(liabilitiesTbody));
  liabilitiesWrap.appendChild(liabilitiesAddBtn);
  form.appendChild(liabilitiesSection);

  const locationImpDocsSection = tableTemplate.content.cloneNode(true);
  const locationImpDocsWrap = locationImpDocsSection.querySelector(".subsection");
  locationImpDocsWrap.id = "section-location-of-imp-documents";
  locationImpDocsSection.querySelector("h3").textContent = "Location of Imp Documents";
  locationImpDocsSection.querySelector("span").textContent = "Where the original documents are kept";
  const locationImpDocsThead = locationImpDocsSection.querySelector("thead");
  const locationImpDocsTbody = locationImpDocsSection.querySelector("tbody");
  locationImpDocsThead.innerHTML = `<tr><th></th><th>Document Name</th><th>Location</th><th>Action</th></tr>`;
  locationOfImpDocumentsRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="row-code">${row.code}</td>
      <td><textarea id="location-imp-doc-${row.code}-label" name="location-imp-doc-${row.code}-label" rows="2" placeholder="Document / Paper Name"></textarea></td>
      <td><textarea id="location-imp-doc-${row.code}-location" name="location-imp-doc-${row.code}-location" rows="2" placeholder="Location / Details"></textarea></td>
      <td class="row-actions"></td>
    `;
    locationImpDocsTbody.appendChild(tr);
  });
  const locationImpDocsAddBtn = document.createElement("button");
  locationImpDocsAddBtn.type = "button";
  locationImpDocsAddBtn.className = "row-add";
  locationImpDocsAddBtn.textContent = "+ Add Row";
  locationImpDocsAddBtn.addEventListener("click", () => addLocationOfImpDocumentsRow(locationImpDocsTbody));
  locationImpDocsWrap.appendChild(locationImpDocsAddBtn);
  form.appendChild(locationImpDocsSection);

  const anyOtherSection = tableTemplate.content.cloneNode(true);
  const anyOtherWrap = anyOtherSection.querySelector(".subsection");
  anyOtherWrap.id = "section-any-other-details";
  anyOtherSection.querySelector("h3").textContent = "Any Other Details";
  anyOtherSection.querySelector("span").textContent = "Free text notes and additional details";
  const anyOtherThead = anyOtherSection.querySelector("thead");
  const anyOtherTbody = anyOtherSection.querySelector("tbody");
  anyOtherThead.innerHTML = `<tr><th>S. No</th><th>Details</th><th>Action</th></tr>`;
  const anyOtherInitial = document.createElement("tr");
  anyOtherInitial.innerHTML = `
    <td class="row-code">1</td>
    <td><textarea id="any-other-details-1-detail" name="any-other-details-1-detail" rows="4" placeholder="Any other detail"></textarea></td>
    <td class="row-actions"></td>
  `;
  anyOtherTbody.appendChild(anyOtherInitial);
  const anyOtherAddBtn = document.createElement("button");
  anyOtherAddBtn.type = "button";
  anyOtherAddBtn.className = "row-add";
  anyOtherAddBtn.textContent = "+ Add Row";
  anyOtherAddBtn.addEventListener("click", () => addAnyOtherDetailsRow(anyOtherTbody));
  anyOtherWrap.appendChild(anyOtherAddBtn);
  form.appendChild(anyOtherSection);

  const navLinks = [
    ["Family Profile", "#section-family-profile"],
    ["Ready Reference", "#section-ready-reference"],
    ["Imp Documents", "#section-important-documents"],
    ["AADHAR Cards", "#section-aadhaar-card-details"],
    ["PAN Cards", "#section-pan-card-details"],
    ["Voter IDs", "#section-voter-election-id-card-details"],
    ["Important Dates", "#section-imp-dates"],
    ["House Property", "#section-house-property-details"],
    ["Electricity", "#section-electricity-details"],
    ["LPG Gas", "#section-lpg-gas-details"],
    ["DTH", "#section-dth-details"],
    ["Paid Subscriptions", "#section-paid-subscription-services"],
    ["Mediclaim", "#section-mediclaim-policy"],
    ["PMJJBY & PMSBY", "#section-pmjby-pmsby"],
    ["LIC Renewal", "#section-lic-renewal-details"],
    ["Vehicle Insurance", "#section-vehicle-insurance-policy"],
    ["Fire & Burglary", "#section-fire-burglary-insurance"],
    ["Debit Cards", "#section-debit-card-details"],
    ["Credit Cards", "#section-credit-card-details"],
    ["FDR Details", "#section-fdr-details"],
    ["Mutual Funds", "#section-mutual-funds"],
    ["PPF Account", "#section-ppf-account-details"],
    ["Pension Account", "#section-pension-account"],
    ["Will", "#section-will-if-any"],
    ["Power of Attorney", "#section-power-of-attorney"],
    ["Liabilities / Debts", "#section-my-liabilities-debts"],
    ["Location of Imp Docs", "#section-location-of-imp-documents"],
    ["Any Other Details", "#section-any-other-details"]
  ];
  navLinks.forEach(([text, href]) => addSectionNav(text, href));
}

function collectData() {
  const data = {
    checklist_title: buildChecklistTitle(),
    family_name: getVal("familyName"),
    mobile_phone: getVal("selfPhone"),
    email: getVal("email"),
    residence_address: getVal("residenceAddress"),
    generated_at: new Date().toLocaleString(),
    family_profile_additional_fields: [],
    ready_reference: [],
    important_documents: [],
    aadhaar_details: [],
    pan_details: [],
    voter_details: [],
    imp_dates: [],
    house_properties: [],
    electricity_details: [],
    lpg_gas_details: [],
    dth_details: [],
    paid_subscription_services: [],
    mediclaim_policies: [],
    pmjby_pmsby_policies: [],
    lic_renewal_details: [],
    fire_burglary_insurance: [],
    debit_card_details: [],
    credit_card_details: [],
    new_lic_details: [],
    new_pmjby_pmsby_details: [],
    new_bank_account_details: [],
    new_locker_details: [],
    fdr_details: [],
    mutual_funds: [],
    ppf_account_details: [],
    pension_account_details: [],
    vehicle_insurance_policies: [],
    will_details: [],
    power_of_attorney_details: [],
    liabilities_details: [],
    location_of_imp_documents: [],
    any_other_details: [],
    tables: {}
  };

  readyReferenceRows.forEach((row) => {
    data.ready_reference.push({
      code: row.code,
      label: row.label,
      name: getVal(`ready-${slug(row.label)}-name`),
      office_address: getVal(`ready-${slug(row.label)}-address`),
      mobile_contact: getVal(`ready-${slug(row.label)}-mobile`)
    });
  });

  form.querySelectorAll(".dynamic-field").forEach((wrap) => {
    const sectionKey = wrap.dataset.sectionKey || "";
    const label = wrap.querySelector('input[type="text"]')?.value || "";
    const value = wrap.querySelector("textarea")?.value || "";
    if (sectionKey) {
      data.family_profile_additional_fields.push({
        section_key: sectionKey,
        label,
        value
      });
    }
  });

  const readyTable = form.querySelector("#section-ready-reference table tbody");
  if (readyTable) {
    readyTable.querySelectorAll('tr[data-ready-row^="other-"]').forEach((tr) => {
      const code = tr.querySelector(".row-code")?.textContent || "";
      const label = tr.querySelector('textarea[id$="-label"]')?.value || tr.querySelector(".row-label")?.textContent || "Other";
      const name = tr.querySelector('textarea[id$="-name"]')?.value || "";
      const office_address = tr.querySelector('textarea[id$="-address"]')?.value || "";
      const mobile_contact = tr.querySelector('textarea[id$="-mobile"]')?.value || "";
      data.ready_reference.push({ code, label, name, office_address, mobile_contact });
    });
  }

  importantDocsRows.forEach((row) => {
    const base = `important-documents-${slug(row.label)}`;
    data.important_documents.push({
      code: row.code,
      label: row.label,
      number: getVal(`${base}-number`),
      expiry_date: getVal(`${base}-expiry`)
    });
  });
  form.querySelectorAll('tr[data-important-doc-extra]').forEach((tr) => {
    data.important_documents.push({
      code: tr.querySelector(".row-code")?.textContent || "",
      label: tr.querySelector('textarea[id$="-label"]')?.value || "",
      number: tr.querySelector('textarea[id$="-number"]')?.value || "",
      expiry_date: tr.querySelector('textarea[id$="-expiry"]')?.value || ""
    });
  });

  const aadhaarTable = form.querySelector("#section-aadhaar-card-details table tbody");
  if (aadhaarTable) {
    aadhaarTable.querySelectorAll("tr").forEach((tr) => {
      data.aadhaar_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        aadhaar_number: tr.querySelector('textarea[id$="-number"]')?.value || "",
        issue_date: tr.querySelector('textarea[id$="-issue"]')?.value || "",
        remarks: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const panTable = form.querySelector("#section-pan-card-details table tbody");
  if (panTable) {
    panTable.querySelectorAll("tr").forEach((tr) => {
      data.pan_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        father_or_husband_name: tr.querySelector('textarea[id$="-father"]')?.value || "",
        pancard_no: tr.querySelector('textarea[id$="-number"]')?.value || "",
        contact_details: tr.querySelector('textarea[id$="-contact"]')?.value || ""
      });
    });
  }

  const voterTable = form.querySelector("#section-voter-election-id-card-details table tbody");
  if (voterTable) {
    voterTable.querySelectorAll("tr").forEach((tr) => {
      data.voter_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        father_or_husband_name: tr.querySelector('textarea[id$="-father"]')?.value || "",
        identity_card_no: tr.querySelector('textarea[id$="-number"]')?.value || "",
        issue_date: tr.querySelector('textarea[id$="-issue"]')?.value || ""
      });
    });
  }

  const impDatesTable = form.querySelector("#section-imp-dates table tbody");
  if (impDatesTable) {
    impDatesTable.querySelectorAll("tr").forEach((tr) => {
      data.imp_dates.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        birth_day_or_other_imp_day: tr.querySelector('textarea[id$="-birth"]')?.value || "",
        fav_food: tr.querySelector('textarea[id$="-food"]')?.value || "",
        issue_date: tr.querySelector('textarea[id$="-issue"]')?.value || ""
      });
    });
  }

  const housePropertyTable = form.querySelector("#section-house-property-details table tbody");
  if (housePropertyTable) {
    housePropertyTable.querySelectorAll("tr").forEach((tr) => {
      data.house_properties.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        house_details: tr.querySelector('textarea[id$="-house-details"]')?.value || "",
        census_no: tr.querySelector('textarea[id$="-census"]')?.value || "",
        property_identification_no_pin: tr.querySelector('textarea[id$="-pin"]')?.value || "",
        construction_sq_mtrs: tr.querySelector('textarea[id$="-construction"]')?.value || "",
        remarks: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const electricityTable = form.querySelector("#section-electricity-details table tbody");
  if (electricityTable) {
    electricityTable.querySelectorAll("tr").forEach((tr) => {
      data.electricity_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        house_details: tr.querySelector('textarea[id$="-house-details"]')?.value || "",
        meter_no: tr.querySelector('textarea[id$="-meter"]')?.value || "",
        customer_service_no: tr.querySelector('textarea[id$="-cust"]')?.value || "",
        deposit_rs: tr.querySelector('textarea[id$="-deposit"]')?.value || "",
        remarks: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const lpgGasTable = form.querySelector("#section-lpg-gas-details table tbody");
  if (lpgGasTable) {
    lpgGasTable.querySelectorAll("tr").forEach((tr) => {
      data.lpg_gas_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        consumer_no: tr.querySelector('textarea[id$="-consumer"]')?.value || "",
        office_no: tr.querySelector('textarea[id$="-office"]')?.value || "",
        delivery_boy_no: tr.querySelector('textarea[id$="-delivery"]')?.value || ""
      });
    });
  }

  const dthTable = form.querySelector("#section-dth-details table tbody");
  if (dthTable) {
    dthTable.querySelectorAll("tr").forEach((tr) => {
      data.dth_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        reg_name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        reg_mobile_no: tr.querySelector('textarea[id$="-mobile"]')?.value || "",
        operator: tr.querySelector('textarea[id$="-operator"]')?.value || "",
        addons: tr.querySelector('textarea[id$="-addons"]')?.value || ""
      });
    });
  }

  const paidSubscriptionTable = form.querySelector("#section-paid-subscription-services table tbody");
  if (paidSubscriptionTable) {
    paidSubscriptionTable.querySelectorAll("tr").forEach((tr) => {
      data.paid_subscription_services.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        operator: tr.querySelector('textarea[id$="-operator"]')?.value || "",
        reg_mobile_no: tr.querySelector('textarea[id$="-mobile"]')?.value || "",
        plan_details: tr.querySelector('textarea[id$="-plan"]')?.value || "",
        due_date: tr.querySelector('textarea[id$="-due"]')?.value || ""
      });
    });
  }

  const mediclaimPolicyTable = form.querySelector("#section-mediclaim-policy table tbody");
  if (mediclaimPolicyTable) {
    mediclaimPolicyTable.querySelectorAll("tr").forEach((tr) => {
      data.mediclaim_policies.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name_and_type_of_policy: tr.querySelector('textarea[id$="-name"]')?.value || "",
        policy_no_previous_policy_no: tr.querySelector('textarea[id$="-number"]')?.value || "",
        amt_insured: tr.querySelector('textarea[id$="-amount"]')?.value || "",
        issue_date_maturity_date: tr.querySelector('textarea[id$="-date"]')?.value || "",
        premium: tr.querySelector('textarea[id$="-premium"]')?.value || "",
        remarks: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const pmjbyPmsbyTable = form.querySelector("#section-pmjby-pmsby table tbody");
  if (pmjbyPmsbyTable) {
    pmjbyPmsbyTable.querySelectorAll("tr").forEach((tr) => {
      data.pmjby_pmsby_policies.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name_and_type_of_policy: tr.querySelector('textarea[id$="-policy"]')?.value || "",
        name_of_the_bank: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        date_of_commencement: tr.querySelector('textarea[id$="-date"]')?.value || "",
        bank_balance_to_be_maintained: tr.querySelector('textarea[id$="-balance"]')?.value || "",
        premium: tr.querySelector('textarea[id$="-premium"]')?.value || "",
        remarks: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const licRenewalTable = form.querySelector("#section-lic-renewal-details table tbody");
  if (licRenewalTable) {
    licRenewalTable.querySelectorAll("tr").forEach((tr) => {
      data.lic_renewal_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name_and_type_of_policy: tr.querySelector('textarea[id$="-policy"]')?.value || "",
        policy_no: tr.querySelector('textarea[id$="-policy-no"]')?.value || "",
        amt_insured: tr.querySelector('textarea[id$="-insured"]')?.value || "",
        issue_date_maturity_date: tr.querySelector('textarea[id$="-date"]')?.value || "",
        premium: tr.querySelector('textarea[id$="-premium"]')?.value || "",
        premium_due_date: tr.querySelector('textarea[id$="-due"]')?.value || ""
      });
    });
  }

  const fireBurglaryTable = form.querySelector("#section-fire-burglary-insurance table tbody");
  if (fireBurglaryTable) {
    fireBurglaryTable.querySelectorAll("tr").forEach((tr) => {
      data.fire_burglary_insurance.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name_of_the_property_nominee: tr.querySelector('textarea[id$="-property"]')?.value || "",
        policy_no_issuing_office: tr.querySelector('textarea[id$="-policy-no"]')?.value || "",
        amt_insured: tr.querySelector('textarea[id$="-insured"]')?.value || "",
        risks_covered: tr.querySelector('textarea[id$="-risks"]')?.value || "",
        issue_date_maturity_date: tr.querySelector('textarea[id$="-issue"]')?.value || "",
        premium_rs: tr.querySelector('textarea[id$="-premium"]')?.value || "",
        remarks: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const debitCardTable = form.querySelector("#section-debit-card-details table tbody");
  if (debitCardTable) {
    debitCardTable.querySelectorAll("tr").forEach((tr) => {
      data.debit_card_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        sb_account_no_bank_branch: tr.querySelector('textarea[id$="-account"]')?.value || "",
        atm_debit_card_no: tr.querySelector('textarea[id$="-card"]')?.value || "",
        issue_date: tr.querySelector('textarea[id$="-issue"]')?.value || "",
        valid_thru: tr.querySelector('textarea[id$="-valid"]')?.value || "",
        cvv_no: tr.querySelector('textarea[id$="-cvv"]')?.value || "",
        remarks: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const creditCardTable = form.querySelector("#section-credit-card-details table tbody");
  if (creditCardTable) {
    creditCardTable.querySelectorAll("tr").forEach((tr) => {
      data.credit_card_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name: tr.querySelector('textarea[id$="-name"]')?.value || "",
        bank_name: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        credit_card_no: tr.querySelector('textarea[id$="-card"]')?.value || "",
        valid_from: tr.querySelector('textarea[id$="-valid-from"]')?.value || "",
        valid_thru: tr.querySelector('textarea[id$="-valid-thru"]')?.value || "",
        cvv_no: tr.querySelector('textarea[id$="-cvv"]')?.value || "",
        remarks_or_tpin: tr.querySelector('textarea[id$="-remarks"]')?.value || ""
      });
    });
  }

  const newLicTable = form.querySelector("#section-new-lic-details table tbody");
  if (newLicTable) {
    newLicTable.querySelectorAll("tr").forEach((tr) => {
      data.new_lic_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name_and_type_of_policy: tr.querySelector('textarea[id$="-policy"]')?.value || "",
        policy_no: tr.querySelector('textarea[id$="-policy-no"]')?.value || "",
        amt_insured: tr.querySelector('textarea[id$="-insured"]')?.value || "",
        nominee: tr.querySelector('textarea[id$="-nominee"]')?.value || "",
        special_instructions: tr.querySelector('textarea[id$="-instructions"]')?.value || ""
      });
    });
  }

  const newPmjbyTable = form.querySelector("#section-new-pmjby-pmsby table tbody");
  if (newPmjbyTable) {
    newPmjbyTable.querySelectorAll("tr").forEach((tr) => {
      data.new_pmjby_pmsby_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        name_and_type_of_policy: tr.querySelector('textarea[id$="-policy"]')?.value || "",
        name_of_the_bank: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        date_of_commencement: tr.querySelector('textarea[id$="-date"]')?.value || "",
        nominee: tr.querySelector('textarea[id$="-nominee"]')?.value || ""
      });
    });
  }

  const newBankTable = form.querySelector("#section-new-bank-account-details table tbody");
  if (newBankTable) {
    newBankTable.querySelectorAll("tr").forEach((tr) => {
      data.new_bank_account_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        bank_name: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        branch: tr.querySelector('textarea[id$="-branch"]')?.value || "",
        type_of_account: tr.querySelector('textarea[id$="-type"]')?.value || "",
        nominee_s: tr.querySelector('textarea[id$="-nominee"]')?.value || ""
      });
    });
  }

  const pensionTable = form.querySelector("#section-pension-account table tbody");
  if (pensionTable) {
    pensionTable.querySelectorAll("tr").forEach((tr) => {
      data.pension_account_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        bank_name_branch: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        type_of_account_pension_ac_no: tr.querySelector('textarea[id$="-account-type"]')?.value || "",
        operating_instructions: tr.querySelector('textarea[id$="-instructions"]')?.value || "",
        pension_payment_order_no: tr.querySelector('textarea[id$="-order"]')?.value || "",
        nominee_s: tr.querySelector('textarea[id$="-nominee"]')?.value || "",
        due_date_for_live_certificate: tr.querySelector('textarea[id$="-due"]')?.value || "",
        signature: tr.querySelector('textarea[id$="-signature"]')?.value || ""
      });
    });
  }

  const newLockerTable = form.querySelector("#section-new-locker-details table tbody");
  if (newLockerTable) {
    newLockerTable.querySelectorAll("tr").forEach((tr) => {
      data.new_locker_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        bank_name_branch: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        locker_no: tr.querySelector('textarea[id$="-locker"]')?.value || "",
        in_the_name_of: tr.querySelector('textarea[id$="-name"]')?.value || "",
        deputy: tr.querySelector('textarea[id$="-deputy"]')?.value || "",
        rent_rs: tr.querySelector('textarea[id$="-rent"]')?.value || "",
        rent_renewal_date: tr.querySelector('textarea[id$="-renewal"]')?.value || "",
        nominee: tr.querySelector('textarea[id$="-nominee"]')?.value || "",
        contents: tr.querySelector('textarea[id$="-contents"]')?.value || ""
      });
    });
  }

  const fdrTable = form.querySelector("#section-fdr-details table tbody");
  if (fdrTable) {
    fdrTable.querySelectorAll("tr").forEach((tr) => {
      data.fdr_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        bank_company_name_branch: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        type_of_dep: tr.querySelector('textarea[id$="-type"]')?.value || "",
        fdr_no: tr.querySelector('textarea[id$="-fdr"]')?.value || "",
        date_of_dep: tr.querySelector('textarea[id$="-date"]')?.value || "",
        amt_rs: tr.querySelector('textarea[id$="-amt"]')?.value || "",
        maturity_date: tr.querySelector('textarea[id$="-maturity"]')?.value || "",
        nominee_s: tr.querySelector('textarea[id$="-nominee"]')?.value || "",
        loan_od_availed: tr.querySelector('textarea[id$="-loan"]')?.value || ""
      });
    });
  }

  const mutualFundsTable = form.querySelector("#section-mutual-funds table tbody");
  if (mutualFundsTable) {
    mutualFundsTable.querySelectorAll("tr").forEach((tr) => {
      data.mutual_funds.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        folio_number: tr.querySelector('textarea[id$="-folio"]')?.value || "",
        name_of_fund: tr.querySelector('textarea[id$="-fund"]')?.value || "",
        applicant: tr.querySelector('textarea[id$="-applicant"]')?.value || "",
        nominee: tr.querySelector('textarea[id$="-nominee"]')?.value || "",
        total_amount_invested: tr.querySelector('textarea[id$="-amount"]')?.value || ""
      });
    });
  }

  const ppfTable = form.querySelector("#section-ppf-account-details table tbody");
  if (ppfTable) {
    ppfTable.querySelectorAll("tr").forEach((tr) => {
      data.ppf_account_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        bank_name_branch: tr.querySelector('textarea[id$="-bank"]')?.value || "",
        fvg: tr.querySelector('textarea[id$="-fvg"]')?.value || "",
        ppf_account_no: tr.querySelector('textarea[id$="-account"]')?.value || "",
        maturity_date: tr.querySelector('textarea[id$="-maturity"]')?.value || "",
        nominee_s: tr.querySelector('textarea[id$="-nominee"]')?.value || ""
      });
    });
  }

  form.querySelectorAll(".vehicle-insurance-block").forEach((block) => {
    const code = block.dataset.vehicleInsuranceBlock || "";
    const tr = block.querySelector(".table-shell tbody tr");
    data.vehicle_insurance_policies.push({
      sr_no: code,
      reg_no: block.querySelector('textarea[id$="-reg-no"]')?.value || "",
      model_name_no: block.querySelector('textarea[id$="-model"]')?.value || "",
      engine_no: block.querySelector('textarea[id$="-engine"]')?.value || "",
      chassis_no: block.querySelector('textarea[id$="-chassis"]')?.value || "",
      mfg_yr: block.querySelector('textarea[id$="-mfg"]')?.value || "",
      cc: block.querySelector('textarea[id$="-cc"]')?.value || "",
      nominee: block.querySelector('textarea[id$="-nominee"]')?.value || "",
      agent_name_mobile_no: block.querySelector('textarea[id$="-agent"]')?.value || "",
      name_vehicle: tr?.querySelector('textarea[id$="-name-vehicle"]')?.value || "",
      policy_no_issuing_office: tr?.querySelector('textarea[id$="-policy"]')?.value || "",
      amt_insured: tr?.querySelector('textarea[id$="-insured"]')?.value || "",
      issue_date_maturity_date: tr?.querySelector('textarea[id$="-issue"]')?.value || "",
      premium: tr?.querySelector('textarea[id$="-premium"]')?.value || "",
      remarks: tr?.querySelector('textarea[id$="-remarks"]')?.value || ""
    });
  });

  form.querySelectorAll(".will-block").forEach((block) => {
    data.will_details.push({
      sr_no: block.dataset.willBlock || "",
      will: block.querySelector('textarea[id$="-will"]')?.value || "",
      executed_on: block.querySelector('textarea[id$="-executed-on"]')?.value || "",
      kept_at: block.querySelector('textarea[id$="-kept-at"]')?.value || ""
    });
  });

  form.querySelectorAll(".power-of-attorney-block").forEach((block) => {
    data.power_of_attorney_details.push({
      sr_no: block.dataset.powerOfAttorneyBlock || "",
      heading: block.querySelector('textarea[id$="-heading"]')?.value || "",
      executed_for: block.querySelector('textarea[id$="-for"]')?.value || "",
      power_of_attorney_is: block.querySelector('textarea[id$="-is"]')?.value || "",
      deed_executed_on: block.querySelector('textarea[id$="-deed"]')?.value || "",
      file_no: block.querySelector('textarea[id$="-file-no"]')?.value || ""
    });
  });

  const liabilitiesTable = form.querySelector("#section-my-liabilities-debts table tbody");
  if (liabilitiesTable) {
    liabilitiesTable.querySelectorAll("tr").forEach((tr) => {
      data.liabilities_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        amount: tr.querySelector('textarea[id$="-amount"]')?.value || "",
        borrowed_from: tr.querySelector('textarea[id$="-borrowed-from"]')?.value || "",
        rate_of_int: tr.querySelector('textarea[id$="-rate-of-int"]')?.value || "",
        already_paid: tr.querySelector('textarea[id$="-already-paid"]')?.value || "",
        balance: tr.querySelector('textarea[id$="-balance"]')?.value || ""
      });
    });
  }

  const locationOfImpDocsTable = form.querySelector("#section-location-of-imp-documents table tbody");
  if (locationOfImpDocsTable) {
    locationOfImpDocsTable.querySelectorAll("tr").forEach((tr) => {
      data.location_of_imp_documents.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        label: tr.querySelector('textarea[id$="-label"]')?.value || tr.querySelector(".row-label")?.textContent || "",
        location: tr.querySelector('textarea[id$="-location"]')?.value || ""
      });
    });
  }

  const anyOtherTable = form.querySelector("#section-any-other-details table tbody");
  if (anyOtherTable) {
    anyOtherTable.querySelectorAll("tr").forEach((tr) => {
      data.any_other_details.push({
        sr_no: tr.querySelector(".row-code")?.textContent || "",
        detail: tr.querySelector('textarea[id$="-detail"]')?.value || ""
      });
    });
  }

  return data;
}

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function downloadJson() {
  const data = collectData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${baseName()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadCsv() {
  const data = collectData();
  const rows = [
    ["checklist_title", data.checklist_title],
    ["family_name", data.family_name],
    ["mobile_phone", data.mobile_phone],
    ["email", data.email],
    ["residence_address", data.residence_address],
    ["generated_at", data.generated_at],
    []
  ].map((r) => r.map(csvEscape).join(","));

  const familyProfileExtrasCsv = data.family_profile_additional_fields.map((row) => [
    row.section_key || "",
    row.label || "",
    row.value || ""
  ].map(csvEscape).join(","));

  const readyRows = data.ready_reference.map((row) => [
    row.code,
    row.label,
    row.name || "",
    row.office_address || "",
    row.mobile_contact || ""
  ].map(csvEscape).join(","));

  const docsRows = data.important_documents.map((row) => [
    row.code,
    row.label,
    row.number || "",
    row.expiry_date || ""
  ].map(csvEscape).join(","));

  const aadhaarRowsCsv = data.aadhaar_details.map((row) => [
    row.sr_no,
    row.name || "",
    row.aadhaar_number || "",
    row.issue_date || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const panRowsCsv = data.pan_details.map((row) => [
    row.sr_no,
    row.name || "",
    row.father_or_husband_name || "",
    row.pancard_no || "",
    row.contact_details || ""
  ].map(csvEscape).join(","));

  const voterRowsCsv = data.voter_details.map((row) => [
    row.sr_no,
    row.name || "",
    row.father_or_husband_name || "",
    row.identity_card_no || "",
    row.issue_date || ""
  ].map(csvEscape).join(","));

  const impDatesRowsCsv = data.imp_dates.map((row) => [
    row.sr_no,
    row.name || "",
    row.birth_day_or_other_imp_day || "",
    row.fav_food || "",
    row.issue_date || ""
  ].map(csvEscape).join(","));

  const housePropertyRowsCsv = data.house_properties.map((row) => [
    row.sr_no,
    row.name || "",
    row.house_details || "",
    row.census_no || "",
    row.property_identification_no_pin || "",
    row.construction_sq_mtrs || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const electricityRowsCsv = data.electricity_details.map((row) => [
    row.sr_no,
    row.name || "",
    row.house_details || "",
    row.meter_no || "",
    row.customer_service_no || "",
    row.deposit_rs || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const lpgGasRowsCsv = data.lpg_gas_details.map((row) => [
    row.sr_no,
    row.name || "",
    row.consumer_no || "",
    row.office_no || "",
    row.delivery_boy_no || ""
  ].map(csvEscape).join(","));

  const dthRowsCsv = data.dth_details.map((row) => [
    row.sr_no,
    row.reg_name || "",
    row.reg_mobile_no || "",
    row.operator || "",
    row.addons || ""
  ].map(csvEscape).join(","));

  const paidSubscriptionRowsCsv = data.paid_subscription_services.map((row) => [
    row.sr_no,
    row.operator || "",
    row.reg_mobile_no || "",
    row.plan_details || "",
    row.due_date || ""
  ].map(csvEscape).join(","));

  const mediclaimPolicyRowsCsv = data.mediclaim_policies.map((row) => [
    row.sr_no,
    row.name_and_type_of_policy || "",
    row.policy_no_previous_policy_no || "",
    row.amt_insured || "",
    row.issue_date_maturity_date || "",
    row.premium || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const pmjbyPmsbyRowsCsv = data.pmjby_pmsby_policies.map((row) => [
    row.sr_no,
    row.name_and_type_of_policy || "",
    row.name_of_the_bank || "",
    row.date_of_commencement || "",
    row.bank_balance_to_be_maintained || "",
    row.premium || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const licRenewalRowsCsv = data.lic_renewal_details.map((row) => [
    row.sr_no,
    row.name_and_type_of_policy || "",
    row.policy_no || "",
    row.amt_insured || "",
    row.issue_date_maturity_date || "",
    row.premium || "",
    row.premium_due_date || ""
  ].map(csvEscape).join(","));

  const fireBurglaryRowsCsv = data.fire_burglary_insurance.map((row) => [
    row.sr_no,
    row.name_of_the_property_nominee || "",
    row.policy_no_issuing_office || "",
    row.amt_insured || "",
    row.risks_covered || "",
    row.issue_date_maturity_date || "",
    row.premium_rs || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const debitCardRowsCsv = data.debit_card_details.map((row) => [
    row.sr_no,
    row.name || "",
    row.sb_account_no_bank_branch || "",
    row.atm_debit_card_no || "",
    row.issue_date || "",
    row.valid_thru || "",
    row.cvv_no || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const creditCardRowsCsv = data.credit_card_details.map((row) => [
    row.sr_no,
    row.name || "",
    row.bank_name || "",
    row.credit_card_no || "",
    row.valid_from || "",
    row.valid_thru || "",
    row.cvv_no || "",
    row.remarks_or_tpin || ""
  ].map(csvEscape).join(","));

  const newLicRowsCsv = data.new_lic_details.map((row) => [
    row.sr_no,
    row.name_and_type_of_policy || "",
    row.policy_no || "",
    row.amt_insured || "",
    row.nominee || "",
    row.special_instructions || ""
  ].map(csvEscape).join(","));

  const newPmjbyRowsCsv = data.new_pmjby_pmsby_details.map((row) => [
    row.sr_no,
    row.name_and_type_of_policy || "",
    row.name_of_the_bank || "",
    row.date_of_commencement || "",
    row.nominee || ""
  ].map(csvEscape).join(","));

  const newBankRowsCsv = data.new_bank_account_details.map((row) => [
    row.sr_no,
    row.bank_name || "",
    row.branch || "",
    row.type_of_account || "",
    row.nominee_s || ""
  ].map(csvEscape).join(","));

  const newLockerRowsCsv = data.new_locker_details.map((row) => [
    row.sr_no,
    row.bank_name_branch || "",
    row.locker_no || "",
    row.in_the_name_of || "",
    row.deputy || "",
    row.rent_rs || "",
    row.rent_renewal_date || "",
    row.nominee || "",
    row.contents || ""
  ].map(csvEscape).join(","));

  const fdrRowsCsv = data.fdr_details.map((row) => [
    row.sr_no,
    row.bank_company_name_branch || "",
    row.type_of_dep || "",
    row.fdr_no || "",
    row.date_of_dep || "",
    row.amt_rs || "",
    row.maturity_date || "",
    row.nominee_s || "",
    row.loan_od_availed || ""
  ].map(csvEscape).join(","));

  const mutualFundsRowsCsv = data.mutual_funds.map((row) => [
    row.sr_no,
    row.folio_number || "",
    row.name_of_fund || "",
    row.applicant || "",
    row.nominee || "",
    row.total_amount_invested || ""
  ].map(csvEscape).join(","));

  const ppfRowsCsv = data.ppf_account_details.map((row) => [
    row.sr_no,
    row.bank_name_branch || "",
    row.fvg || "",
    row.ppf_account_no || "",
    row.maturity_date || "",
    row.nominee_s || ""
  ].map(csvEscape).join(","));

  const pensionRowsCsv = data.pension_account_details.map((row) => [
    row.sr_no,
    row.bank_name_branch || "",
    row.type_of_account_pension_ac_no || "",
    row.operating_instructions || "",
    row.pension_payment_order_no || "",
    row.nominee_s || "",
    row.due_date_for_live_certificate || "",
    row.signature || ""
  ].map(csvEscape).join(","));

  const willRowsCsv = data.will_details.map((row) => [
    row.sr_no,
    row.will || "",
    row.executed_on || "",
    row.kept_at || ""
  ].map(csvEscape).join(","));

  const powerOfAttorneyRowsCsv = data.power_of_attorney_details.map((row) => [
    row.sr_no,
    row.heading || "",
    row.executed_for || "",
    row.power_of_attorney_is || "",
    row.deed_executed_on || "",
    row.file_no || ""
  ].map(csvEscape).join(","));

  const liabilitiesRowsCsv = data.liabilities_details.map((row) => [
    row.sr_no,
    row.amount || "",
    row.borrowed_from || "",
    row.rate_of_int || "",
    row.already_paid || "",
    row.balance || ""
  ].map(csvEscape).join(","));

  const locationOfImpDocsRowsCsv = data.location_of_imp_documents.map((row) => [
    row.sr_no,
    row.label || "",
    row.location || ""
  ].map(csvEscape).join(","));

  const anyOtherRowsCsv = data.any_other_details.map((row) => [
    row.sr_no,
    row.detail || ""
  ].map(csvEscape).join(","));

  const vehicleInsuranceRowsCsv = data.vehicle_insurance_policies.map((row) => [
    row.sr_no,
    row.reg_no || "",
    row.model_name_no || "",
    row.engine_no || "",
    row.chassis_no || "",
    row.mfg_yr || "",
    row.cc || "",
    row.nominee || "",
    row.agent_name_mobile_no || "",
    row.name_vehicle || "",
    row.policy_no_issuing_office || "",
    row.amt_insured || "",
    row.issue_date_maturity_date || "",
    row.premium || "",
    row.remarks || ""
  ].map(csvEscape).join(","));

  const csv = [
    ...rows,
    [`SECTION`, `Family Profile Additional Fields`].map(csvEscape).join(","),
    ...familyProfileExtrasCsv,
    [`SECTION`, `Ready Reference`].map(csvEscape).join(","),
    ...readyRows,
    [`SECTION`, `Imp Documents`].map(csvEscape).join(","),
    ...docsRows,
    [`SECTION`, `AADHAR CARD DETAILS OF FAMILY`].map(csvEscape).join(","),
    ...aadhaarRowsCsv,
    [`SECTION`, `PAN card Details`].map(csvEscape).join(","),
    ...panRowsCsv,
    [`SECTION`, `Voter / Election ID Card Details`].map(csvEscape).join(","),
    ...voterRowsCsv,
    [`SECTION`, `IMP DATES`].map(csvEscape).join(","),
    ...impDatesRowsCsv,
    [`SECTION`, `House Property Details`].map(csvEscape).join(","),
    ...housePropertyRowsCsv
    ,
    [`SECTION`, `Electricity Details`].map(csvEscape).join(","),
    ...electricityRowsCsv,
    [`SECTION`, `LPG Gas Details`].map(csvEscape).join(","),
    ...lpgGasRowsCsv,
    [`SECTION`, `DTH Details`].map(csvEscape).join(","),
    ...dthRowsCsv,
    [`SECTION`, `Paid Subscription Services`].map(csvEscape).join(","),
    ...paidSubscriptionRowsCsv,
    [`SECTION`, `Mediclaim Policy`].map(csvEscape).join(","),
    ...mediclaimPolicyRowsCsv,
    [`SECTION`, `PMJJBY & PMSBY`].map(csvEscape).join(","),
    ...pmjbyPmsbyRowsCsv,
    [`SECTION`, `LIC Renewal Details`].map(csvEscape).join(","),
    ...licRenewalRowsCsv,
    [`SECTION`, `Vehicle Insurance Policy`].map(csvEscape).join(","),
    ...vehicleInsuranceRowsCsv,
    [`SECTION`, `Fire & Burglary Insurance`].map(csvEscape).join(","),
    ...fireBurglaryRowsCsv,
    [`SECTION`, `Debit Card Details`].map(csvEscape).join(","),
    ...debitCardRowsCsv,
    [`SECTION`, `Credit Card Details`].map(csvEscape).join(","),
    ...creditCardRowsCsv,
    [`SECTION`, `LIC Details`].map(csvEscape).join(","),
    ...newLicRowsCsv,
    [`SECTION`, `PMJJBY / PMSBY`].map(csvEscape).join(","),
    ...newPmjbyRowsCsv,
    [`SECTION`, `Bank Account Details`].map(csvEscape).join(","),
    ...newBankRowsCsv,
    [`SECTION`, `Locker Details`].map(csvEscape).join(","),
    ...newLockerRowsCsv,
    [`SECTION`, `FDR Details`].map(csvEscape).join(","),
    ...fdrRowsCsv,
    [`SECTION`, `Mutual Funds`].map(csvEscape).join(","),
    ...mutualFundsRowsCsv,
    [`SECTION`, `PPF Account Details`].map(csvEscape).join(","),
    ...ppfRowsCsv,
    [`SECTION`, `Pension Account`].map(csvEscape).join(","),
    ...pensionRowsCsv,
    [`SECTION`, `Will (If Any)`].map(csvEscape).join(","),
    ...willRowsCsv,
    [`SECTION`, `Power Of Attorney`].map(csvEscape).join(","),
    ...powerOfAttorneyRowsCsv,
    [`SECTION`, `My Liabilities / Debts`].map(csvEscape).join(","),
    ...liabilitiesRowsCsv,
    [`SECTION`, `Location of Imp Documents`].map(csvEscape).join(","),
    ...locationOfImpDocsRowsCsv,
    [`SECTION`, `Any Other Details`].map(csvEscape).join(","),
    ...anyOtherRowsCsv
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${baseName()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function buildPrintHtml() {
  const data = collectData();
  const familyProfileExtrasHtml = data.family_profile_additional_fields.length
    ? `
      <div class="print-table-wrap" style="margin-top:10px">
        <table class="print-table">
          <thead>
            <tr>
              <th>Field Label</th><th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${data.family_profile_additional_fields.map((row) => `
              <tr>
                <td>${row.label || "&nbsp;"}</td>
                <td>${row.value || "&nbsp;"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `
    : "";
  const familyProfileHtml = `
    <section class="print-card">
      <h3>Family Profile</h3>
      <div class="print-grid">
        <div><dt>Family Name</dt><dd>${data.family_name || "&nbsp;"}</dd></div>
        <div><dt>Mobile / Phone (Self)</dt><dd>${data.mobile_phone || "&nbsp;"}</dd></div>
        <div><dt>Email</dt><dd>${data.email || "&nbsp;"}</dd></div>
        <div><dt>Residence Address</dt><dd>${data.residence_address || "&nbsp;"}</dd></div>
      </div>
      ${familyProfileExtrasHtml}
    </section>
  `;
  const readyHtml = `
    <section class="print-card">
      <h3>Ready Reference</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th></th><th></th><th>Name</th><th>Office Address / Residence Address</th><th>Mobile / Contact Number</th>
          </tr>
        </thead>
        <tbody>
          ${data.ready_reference.map((row) => {
    return `
              <tr>
                <td>${row.code}</td>
                <td>${row.label}</td>
                <td>${row.name || "&nbsp;"}</td>
                <td>${row.office_address || "&nbsp;"}</td>
                <td>${row.mobile_contact || "&nbsp;"}</td>
              </tr>
            `;
  }).join("")}
        </tbody>
      </table>
    </section>
  `;
  const docsHtml = `
    <section class="print-card">
      <h3>Imp Documents</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th></th><th>Name</th><th>Number</th><th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          ${data.important_documents.map((row) => `
            <tr>
              <td>${row.code}</td>
              <td>${row.label}</td>
              <td>${row.number || "&nbsp;"}</td>
              <td>${row.expiry_date || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const aadhaarHtml = `
    <section class="print-card">
      <h3>AADHAR CARD DETAILS OF FAMILY</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>Aadhar Card No./ Enrollment No.</th><th>Issue Date</th><th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${data.aadhaar_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.aadhaar_number || "&nbsp;"}</td>
              <td>${row.issue_date || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const panHtml = `
    <section class="print-card">
      <h3>PAN card Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>Father's/Husband Name</th><th>PANCARD No</th><th>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          ${data.pan_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.father_or_husband_name || "&nbsp;"}</td>
              <td>${row.pancard_no || "&nbsp;"}</td>
              <td>${row.contact_details || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const voterHtml = `
    <section class="print-card">
      <h3>Voter / Election ID Card Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>Father's/Husband's Name</th><th>Identity Card No.</th><th>Issue Date</th>
          </tr>
        </thead>
        <tbody>
          ${data.voter_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.father_or_husband_name || "&nbsp;"}</td>
              <td>${row.identity_card_no || "&nbsp;"}</td>
              <td>${row.issue_date || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const impDatesHtml = `
    <section class="print-card">
      <h3>IMP DATES</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>Birth Day / Other Imp Day</th><th>Fav. Food</th><th>Issue Date</th>
          </tr>
        </thead>
        <tbody>
          ${data.imp_dates.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.birth_day_or_other_imp_day || "&nbsp;"}</td>
              <td>${row.fav_food || "&nbsp;"}</td>
              <td>${row.issue_date || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const housePropertyHtml = `
    <section class="print-card">
      <h3>House Property Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>House Details</th>
            <th>Census No.</th>
            <th>Property Identification No. (PIN)</th>
            <th>Construction Sq. Mtrs.</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${data.house_properties.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.house_details || "&nbsp;"}</td>
              <td>${row.census_no || "&nbsp;"}</td>
              <td>${row.property_identification_no_pin || "&nbsp;"}</td>
              <td>${row.construction_sq_mtrs || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const electricityHtml = `
    <section class="print-card">
      <h3>Electricity Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>House Details</th><th>Meter No.</th><th>Customer Service No.</th><th>Deposit Rs.</th><th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${data.electricity_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.house_details || "&nbsp;"}</td>
              <td>${row.meter_no || "&nbsp;"}</td>
              <td>${row.customer_service_no || "&nbsp;"}</td>
              <td>${row.deposit_rs || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const lpgGasHtml = `
    <section class="print-card">
      <h3>LPG Gas Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>Consumer No.</th><th>Office No</th><th>Delivery Boy No</th>
          </tr>
        </thead>
        <tbody>
          ${data.lpg_gas_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.consumer_no || "&nbsp;"}</td>
              <td>${row.office_no || "&nbsp;"}</td>
              <td>${row.delivery_boy_no || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const dthHtml = `
    <section class="print-card">
      <h3>DTH Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>S.No</th><th>Reg.Name</th><th>Reg Mobile No</th><th>Opeartor</th><th>Addons</th>
          </tr>
        </thead>
        <tbody>
          ${data.dth_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.reg_name || "&nbsp;"}</td>
              <td>${row.reg_mobile_no || "&nbsp;"}</td>
              <td>${row.operator || "&nbsp;"}</td>
              <td>${row.addons || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const paidSubscriptionHtml = `
    <section class="print-card">
      <h3>Paid Subscription Services</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>S.No</th><th>Operator</th><th>Reg Mobile No</th><th>Plan Details</th><th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          ${data.paid_subscription_services.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.operator || "&nbsp;"}</td>
              <td>${row.reg_mobile_no || "&nbsp;"}</td>
              <td>${row.plan_details || "&nbsp;"}</td>
              <td>${row.due_date || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const mediclaimPolicyHtml = `
    <section class="print-card">
      <h3>Mediclaim Policy</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name & Type of Policy</th><th>Policy No./Previous Policy No.</th><th>Amt. Insured</th><th>Issue Date/Maturity Date</th><th>Premium</th><th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${data.mediclaim_policies.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name_and_type_of_policy || "&nbsp;"}</td>
              <td>${row.policy_no_previous_policy_no || "&nbsp;"}</td>
              <td>${row.amt_insured || "&nbsp;"}</td>
              <td>${row.issue_date_maturity_date || "&nbsp;"}</td>
              <td>${row.premium || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const pmjbyPmsbyHtml = `
    <section class="print-card">
      <h3>PMJJBY & PMSBY</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name & Type of Policy</th><th>Name of the Bank</th><th>Date of Commencement</th><th>Bank Balance to be maintained</th><th>Premium</th><th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${data.pmjby_pmsby_policies.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name_and_type_of_policy || "&nbsp;"}</td>
              <td>${row.name_of_the_bank || "&nbsp;"}</td>
              <td>${row.date_of_commencement || "&nbsp;"}</td>
              <td>${row.bank_balance_to_be_maintained || "&nbsp;"}</td>
              <td>${row.premium || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const licRenewalHtml = `
    <section class="print-card">
      <h3>LIC Renewal Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name & Type of Policy</th><th>Policy No.</th><th>Amt. Insured</th><th>Issue Date/ Maturity Date</th><th>Premium</th><th>Premium Due Date</th>
          </tr>
        </thead>
        <tbody>
          ${data.lic_renewal_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name_and_type_of_policy || "&nbsp;"}</td>
              <td>${row.policy_no || "&nbsp;"}</td>
              <td>${row.amt_insured || "&nbsp;"}</td>
              <td>${row.issue_date_maturity_date || "&nbsp;"}</td>
              <td>${row.premium || "&nbsp;"}</td>
              <td>${row.premium_due_date || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const fireBurglaryHtml = `
    <section class="print-card">
      <h3>Fire & Burglary Insurance</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name of the Property/ Nominee</th><th>Policy No./ Issuing Office</th><th>Amt. Insured</th><th>Risks Covered</th><th>Issue Date/Maturity Date</th><th>Premium (Rs.)</th><th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${data.fire_burglary_insurance.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name_of_the_property_nominee || "&nbsp;"}</td>
              <td>${row.policy_no_issuing_office || "&nbsp;"}</td>
              <td>${row.amt_insured || "&nbsp;"}</td>
              <td>${row.risks_covered || "&nbsp;"}</td>
              <td>${row.issue_date_maturity_date || "&nbsp;"}</td>
              <td>${row.premium_rs || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const debitCardHtml = `
    <section class="print-card">
      <h3>Debit Card Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>SB A/c. No. / Bank & Branch</th><th>ATM / Debit Card No.</th><th>Issue Date</th><th>Valid Thru</th><th>CVV No.</th><th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${data.debit_card_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.sb_account_no_bank_branch || "&nbsp;"}</td>
              <td>${row.atm_debit_card_no || "&nbsp;"}</td>
              <td>${row.issue_date || "&nbsp;"}</td>
              <td>${row.valid_thru || "&nbsp;"}</td>
              <td>${row.cvv_no || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const creditCardHtml = `
    <section class="print-card">
      <h3>Credit Card Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Name</th><th>Bank's Name</th><th>Credit Card No.</th><th>Valid From</th><th>Valid Thru</th><th>CVV No.</th><th>Remarks / T-Pin</th>
          </tr>
        </thead>
        <tbody>
          ${data.credit_card_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.name || "&nbsp;"}</td>
              <td>${row.bank_name || "&nbsp;"}</td>
              <td>${row.credit_card_no || "&nbsp;"}</td>
              <td>${row.valid_from || "&nbsp;"}</td>
              <td>${row.valid_thru || "&nbsp;"}</td>
              <td>${row.cvv_no || "&nbsp;"}</td>
              <td>${row.remarks_or_tpin || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const fdrHtml = `
    <section class="print-card">
      <h3>FDR Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Bank/Company Name & Branch</th><th>Type of Dep. (SDR/FDR/RD)</th><th>FDR No.</th><th>Date of Dep.</th><th>Amt. (Rs.)</th><th>Maturity Date</th><th>Nominee/s</th><th>Loan / OD availed</th>
          </tr>
        </thead>
        <tbody>
          ${data.fdr_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.bank_company_name_branch || "&nbsp;"}</td>
              <td>${row.type_of_dep || "&nbsp;"}</td>
              <td>${row.fdr_no || "&nbsp;"}</td>
              <td>${row.date_of_dep || "&nbsp;"}</td>
              <td>${row.amt_rs || "&nbsp;"}</td>
              <td>${row.maturity_date || "&nbsp;"}</td>
              <td>${row.nominee_s || "&nbsp;"}</td>
              <td>${row.loan_od_availed || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const mutualFundsHtml = `
    <section class="print-card">
      <h3>Mutual Funds</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Folio Number</th><th>Name of Fund</th><th>Applicant</th><th>Nominee</th><th>Total Amount Invested</th>
          </tr>
        </thead>
        <tbody>
          ${data.mutual_funds.map((row) => `
            <tr>
              <td>${row.folio_number || "&nbsp;"}</td>
              <td>${row.name_of_fund || "&nbsp;"}</td>
              <td>${row.applicant || "&nbsp;"}</td>
              <td>${row.nominee || "&nbsp;"}</td>
              <td>${row.total_amount_invested || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const ppfHtml = `
    <section class="print-card">
      <h3>PPF Account Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Bank Name & Branch</th><th>Fvg.</th><th>PPF A/c. No.</th><th>Maturity Date</th><th>Nominee/s</th>
          </tr>
        </thead>
        <tbody>
          ${data.ppf_account_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.bank_name_branch || "&nbsp;"}</td>
              <td>${row.fvg || "&nbsp;"}</td>
              <td>${row.ppf_account_no || "&nbsp;"}</td>
              <td>${row.maturity_date || "&nbsp;"}</td>
              <td>${row.nominee_s || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const pensionHtml = `
    <section class="print-card">
      <h3>Pension Account</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Sr. No.</th><th>Bank Name & Branch</th><th>Type of Account & Pension A/c. No.</th><th>Operating Instructions</th><th>Pension Payment Order No.</th><th>Nominee/s</th><th>Due Date for Live Certificate</th><th>Signature</th>
          </tr>
        </thead>
        <tbody>
          ${data.pension_account_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.bank_name_branch || "&nbsp;"}</td>
              <td>${row.type_of_account_pension_ac_no || "&nbsp;"}</td>
              <td>${row.operating_instructions || "&nbsp;"}</td>
              <td>${row.pension_payment_order_no || "&nbsp;"}</td>
              <td>${row.nominee_s || "&nbsp;"}</td>
              <td>${row.due_date_for_live_certificate || "&nbsp;"}</td>
              <td>${row.signature || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const willHtml = `
    <section class="print-card">
      <h3>Will (If Any)</h3>
      ${data.will_details.map((row) => `
        <div class="simple-block">
          <div><dt>Will</dt><dd>${row.will || "&nbsp;"}</dd></div>
          <div><dt>My will is executed on</dt><dd>${row.executed_on || "&nbsp;"}</dd></div>
          <div><dt>Copy of the will is kept at</dt><dd>${row.kept_at || "&nbsp;"}</dd></div>
        </div>
      `).join("")}
    </section>
  `;
  const powerOfAttorneyHtml = `
    <section class="print-card">
      <h3>Power Of Attorney</h3>
      ${data.power_of_attorney_details.map((row) => `
        <div class="simple-block">
          <div><dt>POWER OF ATTORNEY</dt><dd>${row.heading || "&nbsp;"}</dd></div>
          <div><dt>Power of Attorney executed for Wife/Son/Others</dt><dd>${row.executed_for || "&nbsp;"}</dd></div>
          <div><dt>My Power of Attorney is</dt><dd>${row.power_of_attorney_is || "&nbsp;"}</dd></div>
          <div><dt>Deed Executed on</dt><dd>${row.deed_executed_on || "&nbsp;"}</dd></div>
          <div><dt>Details kept in File No.</dt><dd>${row.file_no || "&nbsp;"}</dd></div>
        </div>
      `).join("")}
    </section>
  `;
  const liabilitiesHtml = `
    <section class="print-card">
      <h3>My Liabilities / Debts</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>S. No</th><th>Amount</th><th>Borrowed From</th><th>Rate of Int</th><th>Already Paid</th><th>Balance</th>
          </tr>
        </thead>
        <tbody>
          ${data.liabilities_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.amount || "&nbsp;"}</td>
              <td>${row.borrowed_from || "&nbsp;"}</td>
              <td>${row.rate_of_int || "&nbsp;"}</td>
              <td>${row.already_paid || "&nbsp;"}</td>
              <td>${row.balance || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const locationOfImpDocsHtml = `
    <section class="print-card">
      <h3>Location of Imp Documents</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th></th><th></th><th>Document Name</th><th>Location</th>
          </tr>
        </thead>
        <tbody>
          ${data.location_of_imp_documents.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.label || "&nbsp;"}</td>
              <td>${row.label || "&nbsp;"}</td>
              <td>${row.location || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const anyOtherHtml = `
    <section class="print-card">
      <h3>Any Other Details</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>S. No</th><th>Details</th>
          </tr>
        </thead>
        <tbody>
          ${data.any_other_details.map((row) => `
            <tr>
              <td>${row.sr_no || "&nbsp;"}</td>
              <td>${row.detail || "&nbsp;"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
  const vehicleInsuranceHtml = `
    <section class="print-card">
      <h3>Vehicle Insurance Policy</h3>
      ${data.vehicle_insurance_policies.map((row) => `
        <div class="vehicle-print-block">
          <div class="print-grid">
            <div><dt>Reg. No.</dt><dd>${row.reg_no || "&nbsp;"}</dd></div>
            <div><dt>Model Name & No.</dt><dd>${row.model_name_no || "&nbsp;"}</dd></div>
            <div><dt>Engine No.</dt><dd>${row.engine_no || "&nbsp;"}</dd></div>
            <div><dt>Chassis No.</dt><dd>${row.chassis_no || "&nbsp;"}</dd></div>
            <div><dt>Mfg Yr.</dt><dd>${row.mfg_yr || "&nbsp;"}</dd></div>
            <div><dt>CC</dt><dd>${row.cc || "&nbsp;"}</dd></div>
            <div><dt>Nominee</dt><dd>${row.nominee || "&nbsp;"}</dd></div>
            <div><dt>Agent Name & Mobile No.</dt><dd>${row.agent_name_mobile_no || "&nbsp;"}</dd></div>
          </div>
          <table class="print-table" style="margin-top:8px">
            <thead><tr><th>Name/Vehicle</th><th>Policy No./Issuing Office</th><th>Amt. Insured</th><th>Issue Date / Maturity Date</th><th>Premium</th><th>Remarks</th></tr></thead>
            <tbody><tr>
              <td>${row.name_vehicle || "&nbsp;"}</td>
              <td>${row.policy_no_issuing_office || "&nbsp;"}</td>
              <td>${row.amt_insured || "&nbsp;"}</td>
              <td>${row.issue_date_maturity_date || "&nbsp;"}</td>
              <td>${row.premium || "&nbsp;"}</td>
              <td>${row.remarks || "&nbsp;"}</td>
            </tr></tbody>
          </table>
        </div>
      `).join("")}
    </section>
  `;

  return `<!doctype html><html><head><meta charset="utf-8"><title>${baseName()}</title>
  <style>
    body{font-family:Inter,Arial,sans-serif;margin:14px;color:#111827}
    h1{margin:0 0 4px;font-size:22px}
    .meta{margin:8px 0 12px;color:#374151;font-size:12px}
    .print-card{border:1px solid #d1d5db;border-radius:12px;padding:10px;margin:0 0 4px;break-inside:auto;page-break-inside:auto}
    .print-card h3{margin:0 0 8px;font-size:15px}
    .print-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    .print-grid > div{border:1px solid #e5e7eb;border-radius:8px;padding:8px}
    dt{font-size:10px;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:3px}
    dd{margin:0;white-space:pre-wrap}
    .print-table{width:100%;border-collapse:collapse}
    .print-table th,.print-table td{border:1px solid #d1d5db;padding:6px;vertical-align:top;text-align:left;font-size:11px;line-height:1.25}
    .print-table th{background:#f8fafc}
    .vehicle-print-block{margin:0 0 0}
    @media print{
      @page{size:A4;margin:8mm}
      body{margin:0}
      .print-card{break-inside:auto;page-break-inside:auto}
      .print-grid > div{break-inside:avoid;page-break-inside:avoid}
      .vehicle-print-block{break-inside:avoid;page-break-inside:avoid;margin:0}
    }
  </style></head><body>
    <h1>${data.checklist_title}</h1>
    <div class="meta">Family: ${data.family_name || ""} | Generated: ${data.generated_at}</div>
    ${familyProfileHtml}
    ${readyHtml}
    ${docsHtml}
    ${aadhaarHtml}
    ${panHtml}
    ${voterHtml}
    ${impDatesHtml}
    ${housePropertyHtml}
    ${electricityHtml}
    ${lpgGasHtml}
    ${dthHtml}
    ${paidSubscriptionHtml}
    ${mediclaimPolicyHtml}
    ${pmjbyPmsbyHtml}
    ${licRenewalHtml}
    ${vehicleInsuranceHtml}
    ${fireBurglaryHtml}
    ${debitCardHtml}
    ${creditCardHtml}
    ${fdrHtml}
    ${mutualFundsHtml}
    ${ppfHtml}
    ${pensionHtml}
    ${willHtml}
    ${powerOfAttorneyHtml}
    ${liabilitiesHtml}
    ${locationOfImpDocsHtml}
    ${anyOtherHtml}
  </body></html>`;
}

function exportPdf() {
  const originalTitle = document.title;
  const exportTitle = `${baseName()}.pdf`;
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
      document.title = originalTitle;
      return;
    }
    try {
      target.document.title = baseName();
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
    }, 400);
  };
  document.body.appendChild(iframe);
}

function persistDraft() {
  const data = {};
  new FormData(form).forEach((value, key) => { data[key] = value; });
  data.familyName = getVal("familyName");
  data.selfPhone = getVal("selfPhone");
  data.email = getVal("email");
  data.residenceAddress = getVal("residenceAddress");
  localStorage.setItem("familyDraft", JSON.stringify(data));
}

function restoreDraft() {
  const saved = localStorage.getItem("familyDraft");
  if (!saved) return;
  const data = JSON.parse(saved);
  const readyTable = form.querySelector("#section-ready-reference table tbody");
  if (readyTable) {
    const dynamicKeys = Object.keys(data).filter((key) => /^ready-other-\d+-name$/.test(key));
    const maxOther = dynamicKeys.reduce((max, key) => {
      const match = key.match(/^ready-other-(\d+)-name$/);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0);
    while (readyOtherCount < maxOther) {
      addReadyOtherRow(readyTable);
    }
  }
  Object.entries(data).forEach(([key, value]) => {
    const el = document.getElementById(key) || form.elements.namedItem(key);
    if (el && "value" in el) el.value = value;
  });
  applyPaidSubscriptionDefaults();
}

function init() {
  buildForm();
  markActionTables();
  restoreDraft();
  const familyInput = document.getElementById("familyName");
  if (familyInput && !familyInput.value) familyInput.value = "My Family";
  ["familyName", "selfPhone", "email", "residenceAddress"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", persistDraft);
  });
  form.addEventListener("input", persistDraft);
  document.getElementById("exportBtn")?.addEventListener("click", downloadJson);
  document.getElementById("csvBtn")?.addEventListener("click", downloadCsv);
  document.getElementById("pdfBtn")?.addEventListener("click", exportPdf);
  document.getElementById("resetBtn")?.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the draft? All progress will be lost.")) {
      localStorage.removeItem("familyDraft");
      form.reset();
      const familyInput = document.getElementById("familyName");
      if (familyInput && !familyInput.value) familyInput.value = "My Family";
    }
  });
}

init();
