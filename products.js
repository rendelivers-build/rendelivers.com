/* ============================================================
   REN DELIVERS STOREFRONT — product catalog
   ------------------------------------------------------------
   HOW TO FEATURE A PRODUCT:
   1. Change FEATURED_ID below to the product's id, OR
   2. Add ?p=<id> to the page URL, e.g. rendelivers.com/?p=rocket-surgery
      (the URL param wins over FEATURED_ID)
   ============================================================ */

const FEATURED_ID = "alien-probe";

const PRODUCTS = [
  /* ---------------- SHIRTS (Zazzle) ---------------- */
  {
    id: "alien-probe",
    section: "shirts",
    name: "I Identify As An Alien Probe",
    tagline: "For the crew member with zero filter.",
    price: "$21.17",
    img: "assets/shirt-alien-probe.jpg",
    url: "https://www.zazzle.com/i_identify_as_an_alien_probe_funny_t_shirt-256898836033722814"
  },
  {
    id: "rocket-surgery",
    section: "shirts",
    name: "It's Not Rocket Surgery",
    tagline: "The official motto of every job site.",
    price: "$21.17",
    img: "assets/shirt-rocket-surgery.jpg",
    url: "https://www.zazzle.com/its_not_rocket_surgery_funny_t_shirt-256282970006775531"
  },
  {
    id: "i-live-at-work",
    section: "shirts",
    name: "I Live At Work",
    tagline: "For the coworker who basically lives at the office.",
    price: "$21.17",
    img: "assets/shirt-i-live-at-work.jpg",
    url: "https://www.zazzle.com/i_live_at_work_funny_t_shirt-256701905762439762"
  },
  {
    id: "u-should-b-here",
    section: "shirts",
    name: "U Should B Here — Three Wise Monkeys",
    tagline: "See no evil, hear no evil, speak no evil.",
    price: "$21.17",
    img: "assets/shirt-u-should-b-here.jpg",
    url: "https://www.zazzle.com/u_should_b_here_three_wise_monkeys_t_shirt-256699340606931396"
  },
  {
    id: "tax-deduction-onesie",
    section: "shirts",
    name: "Tax Deduction Baby Bodysuit",
    tagline: "The newest member of the workforce.",
    price: "$18.11",
    img: "assets/shirt-tax-deduction-onesie.jpg",
    url: "https://www.zazzle.com/tax_deduction_baby_bodysuit-256376515421563105"
  },
  {
    id: "tax-deduction-loading",
    section: "shirts",
    name: "Tax Deduction Loading Maternity Sweater",
    tagline: "Expecting the ultimate write-off.",
    price: "$37.87",
    img: "assets/shirt-tax-deduction-loading.jpg",
    url: "https://www.zazzle.com/maternity_sweater-256148487228465356"
  },
  {
    id: "catch-phrase",
    section: "shirts",
    name: "Catch Phrase T-Shirt",
    tagline: "Insert your catch phrase here. [CATCH PHRASE]",
    price: "$21.17",
    img: "assets/shirt-catch-phrase.jpg",
    url: "https://www.zazzle.com/catch_phrase_t_shirt-256850852354624644"
  },

  /* ---------------- TEMPLATES (Etsy) ---------------- */
  {
    id: "tpl-estimate",
    section: "templates",
    name: "Contractor Estimate Template",
    tagline: "Does the math for you — labor, materials, markup. Excel + Google Sheets.",
    price: "$14.95",
    img: "assets/tpl-estimate-template.jpg",
    url: "https://www.etsy.com/listing/4575994981/contractor-estimate-template-excel"
  },
  {
    id: "tpl-kitchen-remodel",
    section: "templates",
    name: "Kitchen Remodel Estimate Template",
    tagline: "Bid a full kitchen remodel in minutes: cabinets, counters, the works.",
    price: "$14.95",
    img: "assets/tpl-kitchen-remodel.jpg",
    url: "https://www.etsy.com/listing/4577323133/kitchen-remodel-estimate-template-excel"
  },
  {
    id: "tpl-daily-log",
    section: "templates",
    name: "Construction Daily Log Template",
    tagline: "Crew hours, work performed, delays, deliveries, safety notes.",
    price: "$14.95",
    img: "assets/tpl-daily-log.jpg",
    url: "https://www.etsy.com/listing/4576009440/construction-daily-log-template-excel"
  },
  {
    id: "tpl-invoice",
    section: "templates",
    name: "Contractor Invoice Template",
    tagline: "Line items, tax, balance due — calculated automatically. Look legit, get paid faster.",
    price: "$14.95",
    img: "assets/tpl-contractor-invoice.jpg",
    url: "https://www.etsy.com/listing/4575987443/contractor-invoice-template-excel"
  },
  {
    id: "tpl-change-order",
    section: "templates",
    name: "Change Order Template",
    tagline: "Stop eating the cost of \u201cwhile you\u2019re here\u201d extras.",
    price: "$14.95",
    img: "assets/tpl-change-order.jpg",
    url: "https://www.etsy.com/listing/4576005544/change-order-template-excel-contractor"
  },
  {
    id: "tpl-schedule",
    section: "templates",
    name: "Construction Schedule Template (Gantt)",
    tagline: "Keep every job on track with a real project schedule.",
    price: "$14.95",
    img: "assets/tpl-schedule-gantt.jpg",
    url: "https://www.etsy.com/listing/4581964387/construction-project-schedule-template"
  },
  {
    id: "tpl-punch-list",
    section: "templates",
    name: "Punch List Template",
    tagline: "Walk the job, log every deficiency by trade, track it to done.",
    price: "$14.95",
    img: "assets/tpl-punch-list.jpg",
    url: "https://www.etsy.com/listing/4581984002/punch-list-template-excel-construction"
  }
];

/* ============================================================
   Shared render helpers — used by every page on the site.
   ============================================================ */

function rdGetParam(name) {
  try { return new URLSearchParams(window.location.search).get(name); }
  catch (e) { return null; }
}

function rdEsc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function rdById() {
  var byId = {};
  PRODUCTS.forEach(function (p) { byId[p.id] = p; });
  return byId;
}

function rdCardHTML(p, big) {
  return (
    '<article class="card' + (big ? ' card-featured' : '') + '">' +
      '<a class="card-img-link" href="' + rdEsc(p.url) + '" target="_blank" rel="noopener">' +
        '<img src="' + rdEsc(p.img) + '" alt="' + rdEsc(p.name) + '" loading="' + (big ? 'eager' : 'lazy') + '">' +
      '</a>' +
      '<div class="card-body">' +
        '<h3>' + rdEsc(p.name) + '</h3>' +
        '<p class="card-tag">' + rdEsc(p.tagline) + '</p>' +
        '<div class="card-row">' +
          '<span class="price">' + rdEsc(p.price) + '</span>' +
          '<a class="btn" href="' + rdEsc(p.url) + '" target="_blank" rel="noopener">' +
            (big ? 'Buy Now' : 'Buy') +
          '</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

/* Featured slot: ?p=<id> wins, then FEATURED_ID, then first product. */
function rdRenderFeatured(elId) {
  var byId = rdById();
  var featuredId = rdGetParam("p") || FEATURED_ID;
  var featured = byId[featuredId] || byId[FEATURED_ID] || PRODUCTS[0];
  document.getElementById(elId).innerHTML =
    '<div class="featured-label">Featured</div>' + rdCardHTML(featured, true);
  return featured.id;
}

/* Section grid, optionally skipping one product id (e.g. the featured one). */
function rdRenderGrid(section, elId, skipId) {
  var html = "";
  PRODUCTS.forEach(function (p) {
    if (p.section === section && p.id !== skipId) html += rdCardHTML(p, false);
  });
  document.getElementById(elId).innerHTML = html;
}
