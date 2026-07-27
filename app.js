const models = [
  {
    name: "Baseline",
    coefficient: 0.0196,
    se: 0.00516,
    stars: "***",
    p: "0.0030",
    controls: ["GEPU t−1", "Remittances", "GDP growth"],
    reading: "A 61.682-point rise in GEPU corresponds to the paper’s 1.21 percentage-point baseline interpretation."
  },
  {
    name: "+ Public debt",
    coefficient: 0.0170,
    se: 0.00502,
    stars: "***",
    p: "0.0024",
    controls: ["GEPU t−1", "Remittances", "GDP growth", "Public debt"],
    reading: "Adding public debt lowers the GEPU point estimate slightly; its sign and 1% significance remain."
  },
  {
    name: "+ Bank stability",
    coefficient: 0.0205,
    se: 0.00528,
    stars: "***",
    p: "0.0132",
    controls: ["GEPU t−1", "Remittances", "GDP growth", "Z-score"],
    reading: "The uncertainty coefficient remains positive while stronger banking-system stability carries a negative sign."
  },
  {
    name: "+ International reserves",
    coefficient: 0.0208,
    se: 0.00625,
    stars: "***",
    p: "0.0115",
    controls: ["GEPU t−1", "Remittances", "GDP growth", "Reserves"],
    reading: "The largest baseline-family point estimate appears here; reserves themselves are not statistically significant."
  },
  {
    name: "Full model",
    coefficient: 0.0186,
    se: 0.00517,
    stars: "***",
    p: "0.0008",
    controls: ["GEPU t−1", "Remittances", "GDP growth", "Public debt", "Z-score", "Reserves"],
    reading: "The central result persists after all macro-financial controls enter simultaneously."
  }
];

const lensCopy = {
  full: {
    period: "2000–2021",
    title: "The full sample resists a one-to-one reading.",
    text: "NPLs decline sharply in the early years while GEPU trends upward with pronounced stress spikes. The paper therefore separates contemporaneous levels from a lagged, flow-based regression design.",
    left: 7.5,
    width: 68.2
  },
  repair: {
    period: "2000–2011",
    title: "A long fall in the NPL stock dominates the early sample.",
    text: "The banking-system NPL ratio falls from the very high early-2000s level to its sample trough around 2011. That stock adjustment helps explain why the raw level correlation with GEPU is negative.",
    left: 7.5,
    width: 35.7
  },
  gfc: {
    period: "2008–2010",
    title: "Global financial stress did not map mechanically into NPLs.",
    text: "The crisis-interaction model finds a negative GFC-period dummy. The paper links this muted NPL pressure to Bangladesh’s comparatively limited financial integration and crisis-period interventions.",
    left: 33.5,
    width: 10.1
  },
  pandemic: {
    period: "2020–2021",
    title: "The pandemic shock is different in sign and scale.",
    text: "The COVID-period dummy is positive and highly significant in the crisis specification, consistent with a direct domestic real-economy disruption and pronounced credit deterioration.",
    left: 69.7,
    width: 7
  }
};

const flowCopy = {
  gepu: {
    label: "PRIMARY EXPOSURE",
    title: "Global economic policy uncertainty",
    body: "The annual GEPU index enters the study as a one-period-lagged predetermined regressor. Bangladesh is treated as a price-taker in global uncertainty rather than a source of the shock.",
    tags: ["Trade demand", "External finance", "FX pressure", "Commodity prices"],
    source: "Published conceptual model and empirical specification."
  },
  dnpl: {
    label: "FLOW-BASED OUTCOME",
    title: "Annual change in non-performing loans",
    body: "The dependent variable is the first difference of the NPL-to-gross-loans ratio. This isolates short-run credit deterioration and addresses non-stationarity in the NPL level.",
    tags: ["Asset quality", "Credit deterioration", "Annual flow", "I(0) after differencing"],
    source: "Table 11 and unit-root analysis."
  },
  growth: {
    label: "DOMESTIC CONDITIONER",
    title: "Economic expansion and delayed risk recognition",
    body: "GDP growth is positive and significant across the baseline models. The paper interprets this through procyclical lending, looser standards, disaster myopia and delayed impairment recognition.",
    tags: ["+1.151** full model", "Procyclicality", "Underwriting", "Delayed recognition"],
    source: "Table 5, full-model coefficient and discussion."
  },
  remittance: {
    label: "DOMESTIC CONDITIONER",
    title: "Remittances do not behave as the prior predicts",
    body: "The full-model coefficient is positive at the 10% level, contrary to the expected household-income buffer. The paper treats this as context-specific and notes divergence from established theory.",
    tags: ["+0.675* full model", "Household income", "Host-economy shock", "Cautious inference"],
    source: "Table 5 and discussion."
  },
  debt: {
    label: "DOMESTIC CONDITIONER",
    title: "Fiscal capacity as a short-run buffer",
    body: "Public debt is negative and significant in the full model. Its interaction with GEPU is significantly negative only in the COVID specification, so the moderating interpretation is deliberately limited.",
    tags: ["−0.223*** full model", "COVID interaction", "Fiscal support", "Conditional evidence"],
    source: "Tables 5 and 6."
  },
  stability: {
    label: "DOMESTIC CONDITIONER",
    title: "Stronger bank balance sheets absorb the shock",
    body: "The Z-score coefficient becomes negative and significant once all controls enter. The paper reads this as capital and profitability cushions reducing short-run deterioration in credit quality.",
    tags: ["−0.905** full model", "Distance to insolvency", "Capital buffer", "Profitability cushion"],
    source: "Table 5 and discussion."
  }
};

const labPanels = {
  baseline: `
    <div class="lab-header">
      <h3>Five specifications; one stable GEPU signal.</h3>
      <p>Point estimates range from 0.0170 to 0.0208 and retain 1% significance in every Table 5 specification. The fully specified model remains positive at 0.0186.</p>
    </div>
    <div class="lab-grid">
      <article class="lab-card span-2">
        <h4>GEPU coefficient range</h4>
        <div class="range-viz">
          <span class="range-fill"></span>
          <span class="range-point" style="--x:51%"></span>
          <label style="--x:28%">0.0170</label>
          <label style="--x:51%">0.0196 baseline</label>
          <label style="--x:82%">0.0208</label>
        </div>
        <p>All estimates are coefficients per GEPU index point; Newey–West HAC standard errors use the baseline lag-2 bandwidth.</p>
      </article>
      <article class="lab-card">
        <h4>Published economic scale</h4>
        <span class="lab-stat">1.05–1.28 pp</span>
        <p>Range of implied ΔNPL effects across specifications for a one-standard-deviation GEPU increase, as reported in the article.</p>
      </article>
      <article class="lab-card">
        <h4>Full-model domestic signals</h4>
        <p><b>GDP growth:</b> +1.151**<br><b>Public debt:</b> −0.223***<br><b>Z-score:</b> −0.905**<br><b>Reserves:</b> not significant</p>
      </article>
      <article class="lab-card span-2">
        <h4>Published point estimates</h4>
        <div class="micro-bars">
          ${models.map((m) => `<div class="micro-row"><span>${m.name}</span><div class="micro-track"><i style="--w:${m.coefficient / .022 * 100}%"></i></div><em>${m.coefficient.toFixed(4)}${m.stars}</em></div>`).join("")}
        </div>
      </article>
    </div>`,
  crisis: `
    <div class="lab-header">
      <h3>Discrete crises alter the context—not the GEPU sign.</h3>
      <p>Table 6 retains the full control set and a DEBT × GEPU interaction. Crisis dummies enter separately because T = 21 does not support simultaneous inclusion.</p>
    </div>
    <div class="lab-grid">
      <article class="lab-card">
        <h4>No crisis dummy</h4>
        <span class="lab-stat">0.0359**</span>
        <p>GEPU coefficient. The debt interaction is negative but not significant.</p>
      </article>
      <article class="lab-card">
        <h4>GFC 2008–2009</h4>
        <span class="lab-stat">−1.799**</span>
        <p>Discrete GFC dummy. GEPU remains +0.0360**; the interaction remains non-significant.</p>
      </article>
      <article class="lab-card">
        <h4>COVID 2020–2021</h4>
        <span class="lab-stat">+4.640***</span>
        <p>Discrete pandemic dummy. GEPU remains +0.0318**.</p>
      </article>
      <article class="lab-card span-2">
        <h4>Fiscal moderation appears only in the pandemic specification</h4>
        <div class="micro-bars">
          <div class="micro-row"><span>No dummy</span><div class="micro-track"><i style="--w:66%"></i></div><em>−0.000755</em></div>
          <div class="micro-row"><span>GFC</span><div class="micro-track"><i style="--w:62%"></i></div><em>−0.000715</em></div>
          <div class="micro-row"><span>COVID</span><div class="micro-track"><i style="--w:100%"></i></div><em>−0.00115**</em></div>
        </div>
      </article>
      <article class="lab-card">
        <h4>Interpretive boundary</h4>
        <span class="status-chip caution">Conditional evidence</span>
        <p>The paper explicitly avoids treating public debt as a robust moderator outside the pandemic context.</p>
      </article>
    </div>`,
  inference: `
    <div class="lab-header">
      <h3>Inference is stress-tested three ways.</h3>
      <p>Alternative HAC bandwidths preserve significance; the pairs bootstrap retains the sign everywhere but loses conventional significance in the fully saturated model.</p>
    </div>
    <div class="lab-grid">
      <article class="lab-card span-2">
        <h4>HAC bandwidth sensitivity · significance on GEPU</h4>
        <div class="sig-matrix">
          <span></span><span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span>
          <span class="row-label">Lag 0 · White</span><span class="sig-3">***</span><span class="sig-2">**</span><span class="sig-3">***</span><span class="sig-2">**</span><span class="sig-2">**</span>
          <span class="row-label">Lag 1</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span>
          <span class="row-label">Lag 2 · baseline</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span>
          <span class="row-label">Lag 3</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-3">***</span>
        </div>
      </article>
      <article class="lab-card">
        <h4>Bandwidth conclusion</h4>
        <span class="lab-stat">20/20</span>
        <p>GEPU remains significant across five models and four HAC bandwidth choices.</p>
      </article>
      <article class="lab-card span-2">
        <h4>Pairs bootstrap · 2,000 replications</h4>
        <div class="sig-matrix">
          <span></span><span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span>
          <span class="row-label">Significance</span><span class="sig-2">**</span><span class="sig-1">*</span><span class="sig-2">**</span><span class="sig-1">*</span><span class="sig-0">n.s.</span>
          <span class="row-label">Coefficient</span><span>0.0196</span><span>0.0170</span><span>0.0205</span><span>0.0208</span><span>0.0186</span>
        </div>
      </article>
      <article class="lab-card">
        <h4>Bootstrap boundary</h4>
        <span class="lab-stat">4/5</span>
        <p>Four models retain conventional significance. The full model’s larger bootstrap SE reflects scarce degrees of freedom, while its point estimate is unchanged.</p>
      </article>
    </div>`,
  dynamics: `
    <div class="lab-header">
      <h3>Time stability, crisis exclusion and alternative lags.</h3>
      <p>The rolling exercise never reverses sign. Single-year exclusions preserve economic magnitude. The two-year lag is the central non-result and is shown explicitly.</p>
    </div>
    <div class="lab-grid">
      <article class="lab-card span-2">
        <h4>Eight 15-year rolling windows</h4>
        <div class="range-viz">
          <span class="range-fill" style="left:18%;width:68%"></span>
          <span class="range-point" style="--x:41%"></span>
          <label style="--x:18%">min 0.0130</label>
          <label style="--x:41%">median 0.0183</label>
          <label style="--x:86%">max 0.0363</label>
        </div>
        <p>Mean 0.0212 · standard deviation 0.0073 · all eight estimates positive.</p>
      </article>
      <article class="lab-card">
        <h4>Sign stability</h4>
        <span class="lab-stat">8 / 8</span>
        <p>No rolling-window sign reversal across the 2000–2021 sample.</p>
      </article>
      <article class="lab-card span-2">
        <h4>Sequential crisis-year omission · full model</h4>
        <div class="micro-bars">
          <div class="micro-row"><span>Exclude 2008</span><div class="micro-track"><i style="--w:93%"></i></div><em>0.0162**</em></div>
          <div class="micro-row"><span>Exclude 2009</span><div class="micro-track"><i style="--w:88%"></i></div><em>0.0153</em></div>
          <div class="micro-row"><span>Exclude 2020</span><div class="micro-track"><i style="--w:88%"></i></div><em>0.0153</em></div>
          <div class="micro-row"><span>Exclude 2021</span><div class="micro-track"><i style="--w:100%"></i></div><em>0.0174**</em></div>
        </div>
      </article>
      <article class="lab-card">
        <h4>Lag structure</h4>
        <p><b>Lag 1:</b> positive and significant baseline<br><b>Lag 2:</b> positive, not significant<br><b>Lag 3:</b> significance returns in most models</p>
        <span class="status-chip caution">Non-monotonic timing</span>
      </article>
    </div>`,
  diagnostics: `
    <div class="lab-header">
      <h3>The design follows the data’s integration and error structure.</h3>
      <p>Unit-root tests motivate ΔNPL and a reduced-form specification; Breusch–Godfrey diagnostics motivate HAC correction.</p>
    </div>
    <div class="lab-grid">
      <article class="lab-card">
        <h4>Serial correlation · lag 1</h4>
        <span class="lab-stat">p = .042</span>
        <p>First-order serial correlation is detected.</p>
      </article>
      <article class="lab-card">
        <h4>Serial correlation · lags 1–2</h4>
        <span class="lab-stat">p = .126</span>
        <p>No joint higher-order serial correlation at conventional levels.</p>
      </article>
      <article class="lab-card">
        <h4>Estimator response</h4>
        <span class="lab-stat">NW(2)</span>
        <p>OLS with Newey–West HAC standard errors and baseline lag-2 bandwidth.</p>
      </article>
      <article class="lab-card span-3">
        <h4>Variable integration order · published unit-root classification</h4>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>Variable</th><th>NPL</th><th>GEPU</th><th>GDP growth</th><th>Remittances</th><th>Public debt</th><th>Z-score</th><th>Reserves</th></tr></thead>
            <tbody><tr><td>Order</td><td>I(1)</td><td>I(1)</td><td><span class="status-chip">I(0)</span></td><td>I(1)</td><td>I(1)</td><td>I(1)</td><td>I(1)</td></tr></tbody>
          </table>
        </div>
        <p>ΔNPL is used as the stationary credit-risk flow. GDP growth enters in levels.</p>
      </article>
      <article class="lab-card span-3">
        <h4>Alternative GEPU measures · significance pattern across five models</h4>
        <div class="sig-matrix">
          <span></span><span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span>
          <span class="row-label">First difference</span><span class="sig-3">***</span><span class="sig-2">**</span><span class="sig-3">***</span><span class="sig-2">**</span><span class="sig-2">**</span>
          <span class="row-label">Log difference</span><span class="sig-2">**</span><span class="sig-2">**</span><span class="sig-2">**</span><span class="sig-2">**</span><span class="sig-0">n.s.</span>
          <span class="row-label">Log level</span><span class="sig-3">***</span><span class="sig-2">**</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-2">**</span>
          <span class="row-label">Orthogonalised</span><span class="sig-2">**</span><span class="sig-1">*</span><span class="sig-3">***</span><span class="sig-2">**</span><span class="sig-2">**</span>
          <span class="row-label">Lag 2</span><span class="sig-0">n.s.</span><span class="sig-0">n.s.</span><span class="sig-0">n.s.</span><span class="sig-0">n.s.</span><span class="sig-0">n.s.</span>
          <span class="row-label">Lag 3</span><span class="sig-3">***</span><span class="sig-3">***</span><span class="sig-2">**</span><span class="sig-3">***</span><span class="sig-1">*</span>
        </div>
      </article>
    </div>`
};

const coefficientChart = document.querySelector("#coefficientChart");
let selectedModel = 0;

function renderCoefficientChart() {
  const width = 820;
  const height = 390;
  const margin = { top: 28, right: 82, bottom: 48, left: 156 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xMax = 0.04;
  const x = (value) => margin.left + (value / xMax) * innerWidth;
  const rowHeight = innerHeight / models.length;
  const ticks = [0, 0.01, 0.02, 0.03, 0.04];

  const grid = ticks.map((tick) => `
    <line class="${tick === 0 ? "zero-line" : "grid-line"}" x1="${x(tick)}" x2="${x(tick)}" y1="${margin.top}" y2="${height - margin.bottom}"></line>
    <text x="${x(tick)}" y="${height - 18}" text-anchor="middle">${tick === 0 ? "0" : tick.toFixed(2)}</text>
  `).join("");

  const rows = models.map((model, index) => {
    const y = margin.top + rowHeight * index + rowHeight / 2;
    const lower = Math.max(0, model.coefficient - 1.96 * model.se);
    const upper = model.coefficient + 1.96 * model.se;
    return `
      <g class="chart-row ${index === selectedModel ? "active" : ""}" data-chart-model="${index}" tabindex="0" role="button" aria-label="Select ${model.name} model">
        <rect x="0" y="${y - rowHeight / 2 + 3}" width="${width}" height="${rowHeight - 6}" fill="transparent"></rect>
        <text x="${margin.left - 15}" y="${y + 4}" text-anchor="end">${String(index + 1).padStart(2, "0")} · ${model.name}</text>
        <line class="ci-line" x1="${x(lower)}" x2="${x(upper)}" y1="${y}" y2="${y}"></line>
        <line class="ci-cap" x1="${x(lower)}" x2="${x(lower)}" y1="${y - 8}" y2="${y + 8}"></line>
        <line class="ci-cap" x1="${x(upper)}" x2="${x(upper)}" y1="${y - 8}" y2="${y + 8}"></line>
        <circle class="dot" cx="${x(model.coefficient)}" cy="${y}" r="${index === selectedModel ? 8 : 6}"></circle>
        <text class="value-label" x="${x(upper) + 10}" y="${y + 4}">${model.coefficient.toFixed(4)}${model.stars}</text>
      </g>`;
  }).join("");

  coefficientChart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
      ${grid}
      ${rows}
      <text x="${margin.left + innerWidth / 2}" y="${height - 2}" text-anchor="middle">Coefficient on lagged GEPU</text>
    </svg>`;

  coefficientChart.querySelectorAll("[data-chart-model]").forEach((row) => {
    const select = () => selectModel(Number(row.dataset.chartModel));
    row.addEventListener("click", select);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select();
      }
    });
  });
}

function selectModel(index) {
  selectedModel = index;
  const model = models[index];
  document.querySelector("#modelName").textContent = model.name;
  document.querySelector("#modelCoefficient").innerHTML = `${model.coefficient.toFixed(4)}<sup>${model.stars}</sup>`;
  document.querySelector("#modelSE").textContent = model.se.toFixed(5);
  document.querySelector("#modelP").textContent = model.p;
  document.querySelector("#modelReading").textContent = model.reading;
  document.querySelector("#controlStack").innerHTML = model.controls
    .map((control, controlIndex) => `<span class="${controlIndex === 0 ? "primary" : ""}">${control}</span>`)
    .join("");
  document.querySelectorAll(".model-button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });
  renderCoefficientChart();
}

document.querySelectorAll(".model-button").forEach((button) => {
  button.addEventListener("click", () => selectModel(Number(button.dataset.model)));
});

document.querySelectorAll(".lens-button").forEach((button) => {
  button.addEventListener("click", () => {
    const lens = lensCopy[button.dataset.lens];
    const figure = document.querySelector("#publishedFigure");
    const focus = figure.querySelector(".focus-band");
    focus.style.left = `${lens.left}%`;
    focus.style.width = `${lens.width}%`;
    figure.querySelector(".dimmer-left").style.width = `${lens.left}%`;
    figure.querySelector(".dimmer-right").style.width = `${100 - lens.left - lens.width}%`;
    document.querySelector("#lensPeriod").textContent = lens.period;
    document.querySelector("#lensTitle").textContent = lens.title;
    document.querySelector("#lensText").textContent = lens.text;
    document.querySelectorAll(".lens-button").forEach((item) => item.classList.toggle("active", item === button));
  });
});

document.querySelectorAll(".flow-node").forEach((node) => {
  node.addEventListener("click", () => {
    const content = flowCopy[node.dataset.flow];
    document.querySelectorAll(".flow-node").forEach((item) => item.classList.toggle("active", item === node));
    document.querySelector("#flowLabel").textContent = content.label;
    document.querySelector("#flowTitle").textContent = content.title;
    document.querySelector("#flowBody").textContent = content.body;
    document.querySelector("#flowTags").innerHTML = content.tags.map((tag) => `<span>${tag}</span>`).join("");
    document.querySelector("#flowSource").textContent = content.source;
  });
});

const labDisplay = document.querySelector("#labDisplay");
function renderLab(panelName) {
  labDisplay.innerHTML = labPanels[panelName];
  document.querySelectorAll("[data-lab]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.lab === panelName));
  });
}
document.querySelectorAll("[data-lab]").forEach((button) => {
  button.addEventListener("click", () => renderLab(button.dataset.lab));
});

document.querySelectorAll("[data-open-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.querySelector(`#${button.dataset.openDialog}`);
    if (dialog?.showModal) dialog.showModal();
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const decimals = Number(element.dataset.decimals || 0);
    if (reduceMotion) {
      element.textContent = target.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    } else {
      const start = performance.now();
      const duration = 1250;
      const animate = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        element.textContent = current.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
    countObserver.unobserve(element);
  });
}, { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach((element) => countObserver.observe(element));

window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
  document.querySelector("#scrollProgress").style.width = `${progress}%`;
}, { passive: true });

function initialiseCanvas() {
  const canvas = document.querySelector("#ambientCanvas");
  if (!canvas || reduceMotion) return;
  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = 1;
  const particles = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const desired = Math.min(70, Math.max(28, Math.floor(width / 24)));
    while (particles.length < desired) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * .12,
        vy: (Math.random() - .5) * .12,
        radius: Math.random() * 1.4 + .4
      });
    }
    particles.length = desired;
  }

  function frame() {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      context.beginPath();
      context.fillStyle = index % 9 === 0 ? "rgba(242,82,104,.42)" : "rgba(75,215,166,.36)";
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();

      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 115) {
          context.beginPath();
          context.strokeStyle = `rgba(75,215,166,${(1 - distance / 115) * .07})`;
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

renderCoefficientChart();
selectModel(0);
renderLab("baseline");
initialiseCanvas();
