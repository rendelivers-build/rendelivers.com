/* ============================================================
   REN DELIVERS STOREFRONT — product catalog
   ------------------------------------------------------------
   HOW TO FEATURE A PRODUCT:
   1. Change FEATURED_ID below to the product's id, OR
   2. Add ?p=<id> to the page URL, e.g. rendelivers.com/?p=rocket-surgery
      (the URL param wins over FEATURED_ID)
   ============================================================ */

const FEATURED_ID = "flag-hammer";

const PRODUCTS = [
  /* ---------------- SHIRTS (Zazzle) ---------------- */
  {
    id: "flag-hammer",
    section: "shirts",
    name: "American Flag Framing Hammer",
    tagline: "Distressed flag with a framing hammer cut out. For the ones who built this country.",
    price: "$21.17",
    img: "assets/shirt-flag-hammer.jpg",
    url: "https://www.zazzle.com/american_flag_framing_hammer_t_shirt_distressed-256693470570911159"
  },
  {
    id: "boss-man",
    section: "shirts",
    name: "Boss Man",
    tagline: "For the one running the show — or the one who thinks he is.",
    price: "$21.17",
    img: "assets/shirt-boss-man.jpg",
    url: "https://www.zazzle.com/boss_man_t_shirt_funny_boss_shirt-256900258384459546"
  },
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
    url: "https://www.zazzle.com/i_live_at_work_t_shirt-256097523361425118"
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
  {
    id: "youre-did-it",
    section: "shirts",
    name: "You're DID IT!",
    tagline: "Tri-blend. You DID it — own it.",
    price: "$41.74",
    img: "assets/shirt-youre-did-it.jpg",
    url: "https://www.zazzle.com/youre_did_it_tri_blend_shirt-256225393109642624"
  },
  {
    id: "failed",
    section: "shirts",
    name: "Failed",
    tagline: "For when it just didn't work out.",
    price: "$21.17",
    img: "assets/shirt-failed.jpg",
    url: "https://www.zazzle.com/failed_t_shirt-256487586433084293"
  },
  {
    id: "osha-violator",
    section: "shirts",
    name: "OSHA Violator",
    tagline: "Safety third.",
    price: "$21.17",
    img: "assets/shirt-osha-violator.jpg",
    url: "https://www.zazzle.com/osha_violator_t_shirt-256187850197198627"
  },
  {
    id: "cant-spell-success",
    section: "shirts",
    name: "You Can't Spell Success",
    tagline: "U can't spell success without U.",
    price: "$21.17",
    img: "assets/shirt-cant-spell-success.jpg",
    url: "https://www.zazzle.com/you_cant_spell_success_t_shirt-256572297538962116"
  },
  {
    id: "government-controlled",
    section: "shirts",
    name: "Government Controlled",
    tagline: "They're listening.",
    price: "$21.17",
    img: "assets/shirt-government-controlled.jpg",
    url: "https://www.zazzle.com/government_controlled_t_shirt-256227880909253296"
  },
  {
    id: "nailed-it",
    section: "shirts",
    name: "Nailed It",
    tagline: "Nailed it. (Probably.)",
    price: "$21.17",
    img: "assets/shirt-nailed-it.jpg",
    url: "https://www.zazzle.com/nailed_it_t_shirt-256030204063678285"
  },
  {
    id: "tomato-potato",
    section: "shirts",
    name: "Tomato Potato",
    tagline: "Tomato, potato — let's call the whole thing off.",
    price: "$21.17",
    img: "assets/shirt-tomato-potato.jpg",
    url: "https://www.zazzle.com/tomato_potato_t_shirt-256796967579186051"
  },
  {
    id: "level-1-beginner",
    section: "shirts",
    name: "Level 1 Beginner",
    tagline: "Everyone starts at level 1.",
    price: "$21.17",
    img: "assets/shirt-level-1-beginner.jpg",
    url: "https://www.zazzle.com/level_1_beginner_t_shirt-256610608693604359"
  },
  {
    id: "born-to-send-it",
    section: "shirts",
    name: "Born To F*cking Send It",
    tagline: "Full send, no regrets.",
    price: "$21.17",
    img: "assets/shirt-born-to-send-it.jpg",
    url: "https://www.zazzle.com/born_to_fucking_send_it_t_shirt-256216821596668259"
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
  },
  {
    id: "tpl-painting-estimate",
    section: "templates",
    name: "Painting Estimate Template",
    tagline: "Bid any paint job in minutes.",
    price: "$14.95",
    img: "assets/tpl-painting-estimate.jpg",
    url: "https://www.etsy.com/listing/4577344958/painting-estimate-template-excel-painter"
  },
  {
    id: "tpl-fence-estimate",
    section: "templates",
    name: "Fence Estimate Template",
    tagline: "Fencing and landscaping bids, calculated.",
    price: "$14.95",
    img: "assets/tpl-fence-estimate.jpg",
    url: "https://www.etsy.com/listing/4577325575/fence-estimate-template-excel-fencing"
  },
  {
    id: "tpl-job-cost-tracker",
    section: "templates",
    name: "Job Cost Tracker",
    tagline: "Budget vs. actual with a profit dashboard.",
    price: "$14.95",
    img: "assets/tpl-job-cost-tracker.jpg",
    url: "https://www.etsy.com/listing/4577320901/job-cost-tracker-excel-construction"
  },
  {
    id: "tpl-insulation-estimate",
    section: "templates",
    name: "Insulation Estimate Template",
    tagline: "Insulation bids, done fast.",
    price: "$14.95",
    img: "assets/tpl-insulation-estimate.jpg",
    url: "https://www.etsy.com/listing/4577335768/insulation-estimate-template-excel"
  },
  {
    id: "tpl-hvac-estimate",
    section: "templates",
    name: "HVAC Estimate Template",
    tagline: "HVAC bids with material library and quote forms.",
    price: "$14.95",
    img: "assets/tpl-hvac-estimate.jpg",
    url: "https://www.etsy.com/listing/4577316391/hvac-estimate-template-excel-hvac-bid"
  },
  {
    id: "tpl-cleaning-schedule",
    section: "templates",
    name: "Cleaning Client Schedule Template",
    tagline: "Recurring cleaning routes, organized.",
    price: "$14.95",
    img: "assets/tpl-cleaning-schedule.jpg",
    url: "https://www.etsy.com/listing/4577314287/cleaning-client-schedule-template-excel"
  },
  {
    id: "tpl-cleaning-checklist",
    section: "templates",
    name: "House Cleaning Checklist Template",
    tagline: "Room-by-room checklist with auto completion %.",
    price: "$14.95",
    img: "assets/tpl-cleaning-checklist.jpg",
    url: "https://www.etsy.com/listing/4577312157/house-cleaning-checklist-template-excel"
  },
  {
    id: "tpl-cleaning-invoice",
    section: "templates",
    name: "House Cleaning Invoice Template",
    tagline: "Cleaning invoices with auto totals and tax.",
    price: "$14.95",
    img: "assets/tpl-cleaning-invoice.jpg",
    url: "https://www.etsy.com/listing/4577327210/house-cleaning-invoice-template-excel"
  },
  {
    id: "tpl-home-inspection",
    section: "templates",
    name: "Home Inspection Checklist",
    tagline: "Property inspection reports, standardized.",
    price: "$14.95",
    img: "assets/tpl-home-inspection.jpg",
    url: "https://www.etsy.com/listing/4577325418/home-inspection-checklist-excel-property"
  },
  {
    id: "tpl-handyman-estimate",
    section: "templates",
    name: "Handyman Estimate Template",
    tagline: "Handyman bids, calculated automatically.",
    price: "$14.95",
    img: "assets/tpl-handyman-estimate.jpg",
    url: "https://www.etsy.com/listing/4577323072/handyman-estimate-template-excel"
  },
  {
    id: "tpl-flooring-estimate",
    section: "templates",
    name: "Flooring Estimate Template",
    tagline: "Flooring bids in minutes.",
    price: "$14.95",
    img: "assets/tpl-flooring-estimate.jpg",
    url: "https://www.etsy.com/listing/4577304267/flooring-estimate-template-excel"
  },
  {
    id: "tpl-excavation-estimate",
    section: "templates",
    name: "Excavation Estimate Template",
    tagline: "Grading and earthwork bids.",
    price: "$14.95",
    img: "assets/tpl-excavation-estimate.jpg",
    url: "https://www.etsy.com/listing/4577302635/excavation-estimate-template-excel"
  },
  {
    id: "tpl-equipment-log",
    section: "templates",
    name: "Equipment Maintenance Log",
    tagline: "Fleet and tool service tracking.",
    price: "$14.95",
    img: "assets/tpl-equipment-log.jpg",
    url: "https://www.etsy.com/listing/4577317588/equipment-maintenance-log-excel-fleet"
  },
  {
    id: "tpl-electrical-estimate",
    section: "templates",
    name: "Electrical Estimate Template",
    tagline: "Electrician bids, calculated.",
    price: "$14.95",
    img: "assets/tpl-electrical-estimate.jpg",
    url: "https://www.etsy.com/listing/4577314022/electrical-estimate-template-excel"
  },
  {
    id: "tpl-drywall-estimate",
    section: "templates",
    name: "Drywall Estimate Template",
    tagline: "Drywall bids in minutes.",
    price: "$14.95",
    img: "assets/tpl-drywall-estimate.jpg",
    url: "https://www.etsy.com/listing/4576012794/drywall-estimate-template-excel-drywall"
  },
  {
    id: "tpl-dog-scheduler",
    section: "templates",
    name: "Dog Grooming Appointment Scheduler",
    tagline: "Weekly groomer schedule with waitlist and revenue tracker.",
    price: "$14.95",
    img: "assets/tpl-dog-scheduler.jpg",
    url: "https://www.etsy.com/listing/4575992493/dog-grooming-appointment-scheduler-excel"
  },
  {
    id: "tpl-dog-invoice",
    section: "templates",
    name: "Dog Grooming Invoice Template",
    tagline: "Grooming invoices with auto totals.",
    price: "$14.95",
    img: "assets/tpl-dog-invoice.jpg",
    url: "https://www.etsy.com/listing/4575991795/dog-grooming-invoice-template-excel-pet"
  },
  {
    id: "tpl-dog-intake",
    section: "templates",
    name: "Dog Grooming Intake Form Template",
    tagline: "Pet intake with vaccination checklist and history log.",
    price: "$14.95",
    img: "assets/tpl-dog-intake.jpg",
    url: "https://www.etsy.com/listing/4575991163/dog-grooming-intake-form-template-excel"
  },
  {
    id: "tpl-deck-estimate",
    section: "templates",
    name: "Deck Estimate Template",
    tagline: "Deck and patio bids, calculated.",
    price: "$14.95",
    img: "assets/tpl-deck-estimate.jpg",
    url: "https://www.etsy.com/listing/4575990507/deck-estimate-template-excel-deck-patio"
  },
  {
    id: "tpl-crew-time",
    section: "templates",
    name: "Crew Time Tracking Template",
    tagline: "Timesheets with automatic overtime calc.",
    price: "$14.95",
    img: "assets/tpl-crew-time.jpg",
    url: "https://www.etsy.com/listing/4576008716/crew-time-tracking-template-excel"
  },
  {
    id: "tpl-concrete-estimate",
    section: "templates",
    name: "Concrete Estimate Template",
    tagline: "Concrete and masonry bids.",
    price: "$14.95",
    img: "assets/tpl-concrete-estimate.jpg",
    url: "https://www.etsy.com/listing/4575986631/concrete-estimate-template-excel-masonry"
  },
  {
    id: "tpl-detailing-price",
    section: "templates",
    name: "Car Detailing Price Sheet",
    tagline: "Detailing packages with instant quote calculator.",
    price: "$14.95",
    img: "assets/tpl-detailing-price.jpg",
    url: "https://www.etsy.com/listing/4576004690/car-detailing-price-sheet-excel-package"
  },
  {
    id: "tpl-detailing-invoice",
    section: "templates",
    name: "Car Detailing Invoice Template",
    tagline: "Auto detailing invoices with vehicle info.",
    price: "$14.95",
    img: "assets/tpl-detailing-invoice.jpg",
    url: "https://www.etsy.com/listing/4575984213/car-detailing-invoice-template-excel"
  },
  {
    id: "tpl-vehicle-checklist",
    section: "templates",
    name: "Vehicle Condition Checklist",
    tagline: "Vehicle condition reports with damage notes.",
    price: "$14.95",
    img: "assets/tpl-vehicle-checklist.jpg",
    url: "https://www.etsy.com/listing/4575983353/vehicle-condition-checklist-excel-car"
  },
  {
    id: "tpl-bathroom-remodel",
    section: "templates",
    name: "Bathroom Remodel Estimate Template",
    tagline: "Bathroom remodel bids in minutes.",
    price: "$14.95",
    img: "assets/tpl-bathroom-remodel.jpg",
    url: "https://www.etsy.com/listing/4575982237/bathroom-remodel-estimate-template-excel"
  },
  {
    id: "tpl-photo-shot-list",
    section: "templates",
    name: "Photography Shot List Template",
    tagline: "Wedding shot lists with timeline and auto count.",
    price: "$14.95",
    img: "assets/tpl-photo-shot-list.jpg",
    url: "https://www.etsy.com/listing/4581950439/photography-shot-list-template-excel"
  },
  {
    id: "tpl-photo-invoice",
    section: "templates",
    name: "Photography Invoice Template",
    tagline: "Photographer invoices with auto totals.",
    price: "$14.95",
    img: "assets/tpl-photo-invoice.jpg",
    url: "https://www.etsy.com/listing/4581947797/photography-invoice-template-excel"
  },
  {
    id: "tpl-photo-booking",
    section: "templates",
    name: "Photography Booking Contract Template",
    tagline: "Booking contracts with auto deposit schedule.",
    price: "$14.95",
    img: "assets/tpl-photo-booking.jpg",
    url: "https://www.etsy.com/listing/4581957446/photography-booking-contract-template"
  },
  {
    id: "aff-dewalt-dcs356b",
    section: "catalog",
    sub: "Multi-Tools",
    name: "DEWALT 20V MAX XR Oscillating Multi-Tool",
    tagline: "Ren's pick: brushless, 3-speed, cuts anything. The one in my bag.",
    price: "$103.88",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcs356b.jpg",
    url: "https://www.amazon.com/dp/B07VBB55X5?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcn650b",
    section: "catalog",
    sub: "NAILERS",
    name: "DEWALT 20V MAX 15GA Angled Finish Nailer",
    tagline: "Ren's pick: cordless trim work, no compressor. Crown, casing, baseboards.",
    price: "$299.00",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcn650b.jpg",
    url: "https://www.amazon.com/dp/B073GVKSM3?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcn623b",
    section: "catalog",
    sub: "NAILERS",
    name: "DEWALT ATOMIC 20V MAX 23GA Pin Nailer",
    tagline: "Ren's pick: headless pins disappear into trim. 2,000 pins per charge, no compressor.",
    price: "$248.26",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcn623b.jpg",
    url: "https://www.amazon.com/dp/B09YXYFKGG?tag=rendelivers-20"
  },
  {
    id: "aff-metabo-nr1890dca",
    section: "catalog",
    sub: "NAILERS",
    name: "Metabo HPT 18V MultiVolt 3-1/2\" Framing Nailer Kit",
    tagline: "Ren's pick: cordless framing power, no hose. Kit with battery and bag.",
    price: "$459.00",
    checked: "2026-10-01",
    img: "assets/aff-metabo-nr1890dca.jpg",
    url: "https://www.amazon.com/dp/B0DV6R1FVF?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcn680b",
    section: "catalog",
    sub: "NAILERS",
    name: "DEWALT 20V MAX XR 18GA Brad Nailer",
    tagline: "Ren's pick: brushless brad nailer for trim and detail. No-mar nose, no compressor.",
    price: "$301.99",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcn680b.jpg",
    url: "https://www.amazon.com/dp/B06XF6MZJ5?tag=rendelivers-20"
  },
  {
    id: "aff-stanley-fatmax-33725",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "STANLEY FATMAX 25-Foot Tape Measure",
    tagline: "Ren's pick: 11-foot standout, BladeArmor coating. The tape that's lived in my bags for years.",
    price: "$21.99",
    checked: "2026-10-01",
    img: "assets/aff-stanley-fatmax-33725.jpg",
    url: "https://www.amazon.com/dp/B00002PV66?tag=rendelivers-20"
  },
  {
    id: "aff-swanson-s0101",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Swanson 7\" Speed Square with Blue Book",
    tagline: "Ren's pick: the original layout tool. Mark, measure, and guide every cut.",
    price: "$9.98",
    checked: "2026-10-01",
    img: "assets/aff-swanson-s0101.jpg",
    url: "https://www.amazon.com/dp/B00002255O?tag=rendelivers-20"
  },
  {
    id: "aff-tajima-cr201rd",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Tajima Chalk-Rite II Chalk Line",
    tagline: "Ren's pick: the chalk box that snaps a line you'll actually see. Gear-drive rewind.",
    price: "$36.00",
    checked: "2026-10-01",
    img: "assets/aff-tajima-cr201rd.jpg",
    url: "https://www.amazon.com/dp/B001D77LU6?tag=rendelivers-20"
  },
  {
    id: "aff-ox-marking-pencil",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "OX Tools Pro Tuff Carbon Marking Pencil",
    tagline: "Ren's pick: 2.8mm mechanical carpenter pencil. Built-in sharpener, marks anything.",
    price: "$12.59",
    checked: "2026-10-01",
    img: "assets/aff-ox-marking-pencil.jpg",
    url: "https://www.amazon.com/dp/B0966YRXVK?tag=rendelivers-20"
  },
  {
    id: "aff-stiletto-tib15mc",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Stiletto 15 oz. TiBone Titanium Framing Hammer",
    tagline: "Ren's pick: all-titanium TiBone, milled face, curved handle. Hits like steel, swings lighter.",
    price: "$299.99",
    checked: "2026-10-01",
    img: "assets/aff-stiletto-tib15mc.jpg",
    url: "https://www.amazon.com/dp/B0CQPP87JN?tag=rendelivers-20"
  },
  {
    id: "aff-stiletto-ti16mc",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Stiletto 16 oz. Titanium Hickory Framing Hammer",
    tagline: "Ren's pick: titanium head on USA hickory. 16oz that hits like 28oz steel.",
    price: "See price in cart",
    checked: "2026-10-01",
    img: "assets/aff-stiletto-ti16mc.jpg",
    url: "https://www.amazon.com/dp/B00079R21E?tag=rendelivers-20"
  },
  {
    id: "aff-estwing-pc250g",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Estwing Pro Claw Nail Puller",
    tagline: "Ren's pick: one-piece forged nail puller. Thin claw for tight spots, minimal wood damage.",
    price: "$11.95",
    checked: "2026-10-01",
    img: "assets/aff-estwing-pc250g.jpg",
    url: "https://www.amazon.com/dp/B00DT0OYTG?tag=rendelivers-20"
  },
  {
    id: "aff-estwing-mp250g",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Estwing Pro Claw Moulding Puller",
    tagline: "Ren's pick: trim puller that saves the moulding. Wide blade, pro claw nail end.",
    price: "$11.61",
    checked: "2026-10-01",
    img: "assets/aff-estwing-mp250g.jpg",
    url: "https://www.amazon.com/dp/B004397VEW?tag=rendelivers-20"
  },
  {
    id: "aff-mini-palm-nailer",
    section: "catalog",
    sub: "Pneumatic",
    name: "Mini Palm Nailer",
    tagline: "Ren's pick: palm-sized air nailer for tight spots and overhead. Where hammers can't go.",
    price: "$49.00",
    checked: "2026-10-01",
    img: "assets/aff-mini-palm-nailer.jpg",
    url: "https://www.amazon.com/dp/B0BB4XVJNC?tag=rendelivers-20"
  },
  {
    id: "aff-metabo-nt50ae2",
    section: "catalog",
    sub: "Pneumatic",
    name: "Metabo HPT 18GA Pneumatic Brad Nailer",
    tagline: "Ren's pick: air-powered brad nailer for trim. Tool-less depth, no-mar nose.",
    price: "$69.00",
    checked: "2026-10-01",
    img: "assets/aff-metabo-nt50ae2.jpg",
    url: "https://www.amazon.com/dp/B07MK88Q33?tag=rendelivers-20"
  },
  {
    id: "aff-metabo-nv83a5",
    section: "catalog",
    sub: "Pneumatic",
    name: "Metabo HPT Coil Framing Nailer",
    tagline: "Ren's pick: 3-1/4 in coil framer for sheathing and decks. All-day air.",
    price: "$349.00",
    checked: "2026-10-01",
    img: "assets/aff-metabo-nv83a5.jpg",
    url: "https://www.amazon.com/dp/B07MYV966C?tag=rendelivers-20"
  },
  {
    id: "aff-metabo-nr90aes1",
    section: "catalog",
    sub: "Pneumatic",
    name: "Metabo HPT 21-Degree Framing Nailer",
    tagline: "Ren's pick: plastic-collated framer, 3-1/2 in nails. Frame all day.",
    price: "$159.00",
    checked: "2026-10-01",
    img: "assets/aff-metabo-nr90aes1.jpg",
    url: "https://www.amazon.com/dp/B07LCG6TZ4?tag=rendelivers-20"
  },
  {
    id: "aff-metabo-nr65ak2s",
    section: "catalog",
    sub: "Pneumatic",
    name: "Metabo HPT Strap-Tite Strap Nailer",
    tagline: "Ren's pick: strap nailer for joist hangers and hurricane ties. Fast, accurate.",
    price: "$235.07",
    checked: "2026-10-01",
    img: "assets/aff-metabo-nr65ak2s.jpg",
    url: "https://www.amazon.com/dp/B07MYX99ML?tag=rendelivers-20"
  },
  {
    id: "aff-bostitch-mcn150",
    section: "catalog",
    sub: "Pneumatic",
    name: "BOSTITCH StrapShot Metal Connector Nailer",
    tagline: "Ren's pick: connector nailer for straps and hangers. Paper-collated, auto-load.",
    price: "$269.00",
    checked: "2026-10-01",
    img: "assets/aff-bostitch-mcn150.jpg",
    url: "https://www.amazon.com/dp/B000IJPAMQ?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcs361m1",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 20V MAX 7-1/4 in. Miter Saw Kit",
    tagline: "Ren's pick: cordless miter saw that cuts like it has a plug. Kit with battery and charger.",
    price: "$379.99",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcs361m1.jpg",
    url: "https://www.amazon.com/dp/B00X52TZYM?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dws780",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 12 in. Sliding Compound Miter Saw",
    tagline: "Ren's pick: the shop-standard 12-in slider. XPS cut line, cuts 2x16 at 90.",
    price: "$649.00",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dws780.jpg",
    url: "https://www.amazon.com/dp/B00540JS7C?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dwe7491rs",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 10 in. Jobsite Table Saw w/ Stand",
    tagline: "Ren's pick: 10-in table saw on a rolling stand. 32-1/2 in rip capacity, jobsite ready.",
    price: "$599.00",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dwe7491rs.jpg",
    url: "https://www.amazon.com/dp/B00F2CGXGG?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dwe7485",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 8-1/4 in. Compact Table Saw",
    tagline: "Ren's pick: the compact jobsite table saw. 24-1/2 in rip in a small footprint.",
    price: "$421.16",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dwe7485.jpg",
    url: "https://www.amazon.com/dp/B0842QDW95?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcs590b",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 20V MAX XR 7-1/4 in. Circular Saw",
    tagline: "Ren's pick: brushless cordless circular saw with electric brake. Tool only.",
    price: "$177.54",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcs590b.jpg",
    url: "https://www.amazon.com/dp/B0DDDW9GWK?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcs334b",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 20V MAX XR Jig Saw",
    tagline: "Ren's pick: brushless jig saw with LED cut line light. 4-position orbital, tool only.",
    price: "$142.50",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcs334b.jpg",
    url: "https://www.amazon.com/dp/B07JPFHQKG?tag=rendelivers-20"
  },
  {
    id: "aff-metabo-c3607dwa",
    section: "catalog",
    sub: "SAWS",
    name: "Metabo HPT 36V MultiVolt 7-1/4 in. Rear Handle Circular Saw Kit",
    tagline: "Ren's pick: cordless rear-handle saw kit. 5,100 RPM, up to 500 cuts per charge.",
    price: "$399.00",
    checked: "2026-10-01",
    img: "assets/aff-metabo-c3607dwa.jpg",
    url: "https://www.amazon.com/dp/B09MSQM6Y9?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcs367b",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 20V MAX XR Compact Reciprocating Saw",
    tagline: "Ren's pick: compact recip saw that fits between studs. Brushless, tool only.",
    price: "$179.00",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcs367b.jpg",
    url: "https://www.amazon.com/dp/B01M69K91R?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcs577b",
    section: "catalog",
    sub: "SAWS",
    name: "DEWALT 60V FLEXVOLT Worm Drive Framing Saw",
    tagline: "Ren's pick: worm drive power with no cord. 60V FLEXVOLT, brushless.",
    price: "$249.95",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcs577b.jpg",
    url: "https://www.amazon.com/dp/B0753QHKW7?tag=rendelivers-20"
  },
  {
    id: "aff-skilsaw-spt55-11",
    section: "catalog",
    sub: "SAWS",
    name: "SKILSAW SAWQUATCH 16 in. Carpentry Chainsaw",
    tagline: "Ren's pick: 16-in carpentry chainsaw for timber framing. Worm drive torque.",
    price: "$638.49",
    checked: "2026-10-01",
    img: "assets/aff-skilsaw-spt55-11.jpg",
    url: "https://www.amazon.com/dp/B07NR7921V?tag=rendelivers-20"
  },
  {
    id: "aff-topcon-atb4",
    section: "catalog",
    sub: "LEVELS",
    name: "Topcon AT-B4 24x Automatic Level",
    tagline: "Ren's pick: the dumpy level that never lies. Footings, foundations, flatwork.",
    price: "$234.99",
    checked: "2026-10-01",
    img: "assets/aff-topcon-atb4.jpg",
    url: "https://www.amazon.com/dp/B000KEQ596?tag=rendelivers-20"
  },
  {
    id: "aff-topcon-rlh5a",
    section: "catalog",
    sub: "LEVELS",
    name: "Topcon RL-H5A Rotary Laser Level Kit",
    tagline: "Ren's pick: self-leveling rotary laser with receiver, tripod, and rod. One-man layout.",
    price: "$834.97",
    checked: "2026-10-01",
    img: "assets/aff-topcon-rlh5a.jpg",
    url: "https://www.amazon.com/dp/B0D1DB3CVD?tag=rendelivers-20"
  },
  {
    id: "aff-stabila-29840",
    section: "catalog",
    sub: "LEVELS",
    name: "Stabila Pro Set 80 AS Level Set (48\"/24\"/12\")",
    tagline: "Ren's pick: the levels that stay true. Three sizes plus case.",
    price: "$158.00",
    checked: "2026-10-01",
    img: "assets/aff-stabila-29840.jpg",
    url: "https://www.amazon.com/dp/B09JXX4TB5?tag=rendelivers-20"
  },
  {
    id: "aff-servicetitan",
    section: "software",
    sub: "APPS",
    name: "ServiceTitan",
    tagline: "Field-service management for serious shops — scheduling, dispatch, invoicing in one place. Book a demo through my link.",
    price: "Free demo",
    img: "assets/aff-servicetitan.jpg",
    url: "https://join.servicetitan.com/mzYlEhC"
  },
  {
    id: "aff-dewalt-dcd1007b",
    section: "catalog",
    sub: "Drills",
    name: "DEWALT 20V MAX XR 1/2 in. Cordless Hammer Drill (Tool Only)",
    tagline: "Ren's pick: brushless hammer drill, 1/2-in chuck. Bare tool — pairs with your 20V batteries.",
    price: "$157.45",
    checked: "2026-10-01",
    img: "assets/aff-dewalt-dcd1007b.jpg",
    url: "https://www.amazon.com/dp/B0D8TM5MW4?tag=rendelivers-20"
  },
  {
    id: "tpl-toolbox-talk",
    section: "templates",
    name: "Toolbox Talk & Safety Meeting Log",
    tagline: "30 pre-written safety talks, meeting log, sign-in sheet. If OSHA ever asks, this file is your answer.",
    price: "$14.95",
    img: "assets/tpl-toolbox-talk.jpg",
    url: "https://www.etsy.com/shop/rendelivers"
  },
  {
    id: "aff-calc-4065",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Calculated Industries 4065 Construction Master Pro Calculator",
    tagline: "Ren's pick: the construction calculator every contractor knows. Feet-inch-fraction math, rafters, stairs — in your pocket, not $70 at the store.",
    price: "$52.29",
    checked: "2026-10-02",
    img: "assets/aff-calc-4065.jpg",
    url: "https://www.amazon.com/dp/B0007Q3RGQ?tag=rendelivers-20"
  },
  {
    id: "aff-johnson-cs9",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Johnson Level CS9 Steel Framing Square, 16 in. x 24 in.",
    tagline: "Ren's pick: the big 16x24 steel square — rafter tables, EZ Read graduations. Layout, stairs, and everything square.",
    price: "See price on Amazon",
    img: "assets/aff-johnson-cs9.jpg",
    url: "https://www.amazon.com/dp/B00002N5O8?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dck940d2",
    section: "catalog",
    sub: "KITS",
    name: "DEWALT 20V MAX 9-Tool Combo Kit (DCK940D2)",
    tagline: "Ren's pick: nine 20V MAX tools, two batteries, charger, and bags. The whole job site in two bags.",
    price: "$799.99",
    checked: "2026-10-02",
    img: "assets/aff-dewalt-dck940d2.jpg",
    url: "https://www.amazon.com/dp/B018TM1Q80?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dxgnr6500",
    section: "catalog",
    sub: "GENERATORS",
    name: "DEWALT 6500W Portable Generator (DXGNR6500)",
    tagline: "Ren's pick: 6,500 watts of jobsite power. When the grid's a rumor, this is the plan.",
    price: "$1,099.00",
    checked: "2026-10-02",
    img: "assets/aff-dewalt-dxgnr6500.jpg",
    url: "https://www.amazon.com/dp/B0FD19SQH2?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dcf630d2",
    section: "drywall",
    sub: "SCREWGUNS",
    name: "DEWALT 20V MAX XR Drywall Screwgun Kit (DCF630D2)",
    tagline: "Ren's pick: 4,400 RPM of hang-rock fury. Nosecone that actually sets depth right.",
    price: "$1,340.37",
    checked: "2026-10-02",
    img: "assets/aff-dewalt-drywall-kit.jpg",
    url: "https://www.amazon.com/dp/B07CRZV4NK?tag=rendelivers-20"
  },
  {
    id: "aff-level5-hand-tool-set",
    section: "drywall",
    sub: "HAND TOOLS",
    name: "LEVEL5 Professional Drywall Hand Tool Set w/ Duffel Bag (5-690)",
    tagline: "Ren's pick: taping knives, mud pan, mixers, jab saw — the whole finishing kit in one duffel.",
    price: "$562.95",
    checked: "2026-10-02",
    img: "assets/aff-level5-hand-tool-set.jpg",
    url: "https://www.amazon.com/dp/B0CBL7HWHG?tag=rendelivers-20"
  },
  /* ---------------- SAFETY GEAR (PPE) ---------------- */
  {
    id: "aff-pyramex-ridgeline",
    section: "safety",
    sub: "HEAD",
    name: "Pyramex Ridgeline Cap Style Hard Hat, 6-Point Ratchet, White",
    tagline: "Ren's pick: 6-point ratchet suspension, ANSI Z89.1 rated. Your skull only comes with one warranty.",
    price: "$15.75",
    checked: "2026-10-02",
    img: "assets/aff-pyramex-ridgeline.jpg",
    url: "https://www.amazon.com/dp/B00GMBBAE6?tag=rendelivers-20"
  },
  {
    id: "aff-pip-wolfjaw",
    section: "safety",
    sub: "HEAD",
    name: "PIP Wolfjaw Full Brim Hard Hat, Glossy Carbon Fiber Shell",
    tagline: "Ren's pick: real carbon fiber shell, 8-point suspension, wheel ratchet. The foreman's hard hat — looks fast, works hard.",
    price: "See price on Amazon",
    img: "assets/aff-pip-wolfjaw.jpg",
    url: "https://www.amazon.com/dp/B0C443J64K?tag=rendelivers-20"
  },
  {
    id: "aff-3m-securefit",
    section: "safety",
    sub: "EYES",
    name: "3M SecureFit 400 Safety Glasses, Clear Anti-Fog Lens",
    tagline: "Ren's pick: self-adjusting temples, anti-fog coating, ANSI Z87.1+ impact rated. 'I didn't see it coming' is not a safety plan.",
    price: "$9.79",
    checked: "2026-10-02",
    img: "assets/aff-3m-securefit.jpg",
    url: "https://www.amazon.com/dp/B0713M5ZQM?tag=rendelivers-20"
  },
  {
    id: "aff-neiko-hiviz-vest",
    section: "safety",
    sub: "HI-VIS",
    name: "NEIKO 53956A High-Visibility Safety Vest, ANSI Class 2",
    tagline: "Ren's pick: Class 2 with 2-inch reflective tape. Be the neon sign nobody runs over.",
    price: "$6.15",
    checked: "2026-10-02",
    img: "assets/aff-neiko-hiviz-vest.jpg",
    url: "https://www.amazon.com/dp/B0030AART6?tag=rendelivers-20"
  },
  {
    id: "aff-kidde-extinguisher",
    section: "safety",
    sub: "FIRE",
    name: "Kidde Fire Extinguisher for Home & Office",
    tagline: "Ren's pick: rechargeable ABC dry chemical with wall bracket. For when the day gets a little too lit — literally.",
    price: "$18.25",
    checked: "2026-10-02",
    img: "assets/aff-kidde-extinguisher.jpg",
    url: "https://www.amazon.com/dp/B0CB9GFZ9M?tag=rendelivers-20"
  },
  {
    id: "aff-kidde-smoke-alarm",
    section: "safety",
    sub: "FIRE",
    name: "Kidde 20SAR Hardwired Smoke Detector with Battery Backup",
    tagline: "Ren's pick: hardwired with battery backup, 85 dB. The only alarm on site that isn't Brandon yelling.",
    price: "$31.36",
    checked: "2026-10-02",
    img: "assets/aff-kidde-smoke-alarm.jpg",
    url: "https://www.amazon.com/dp/B0CX6C1JHJ?tag=rendelivers-20"
  },
  {
    id: "aff-physicianscare-eyewash",
    section: "safety",
    sub: "FIRST AID",
    name: "PhysiciansCare Wall-Mountable Eyewash Station",
    tagline: "Ren's pick: sterile sealed eyewash bottles on a wall-mount station. For dust, debris, and whatever the heck that was.",
    price: "$52.48",
    checked: "2026-10-02",
    img: "assets/aff-physicianscare-eyewash.jpg",
    url: "https://www.amazon.com/dp/B009Z3A1AM?tag=rendelivers-20"
  },
  {
    id: "aff-guardian-velocity",
    section: "safety",
    sub: "FALL PROTECTION",
    name: "Guardian 01700 Velocity Full-Body Harness",
    tagline: "Ren's pick: 5-point adjustment, OSHA and ANSI Z359.11. Tie off — gravity doesn't do second chances.",
    price: "$34.99",
    checked: "2026-10-02",
    img: "assets/aff-guardian-velocity.jpg",
    url: "https://www.amazon.com/dp/B008LXRB7S?tag=rendelivers-20"
  },
  {
    id: "aff-afp-lanyard",
    section: "safety",
    sub: "FALL PROTECTION",
    name: "AFP 6 ft Shock-Absorbing Safety Lanyard",
    tagline: "Ren's pick: internal shock absorber, dual snap hooks, OSHA 1926 compliant. The short leash that saves your life.",
    price: "$29.39",
    checked: "2026-10-02",
    img: "assets/aff-afp-lanyard.jpg",
    url: "https://www.amazon.com/dp/B081ZH6NB6?tag=rendelivers-20"
  },
  {
    id: "aff-malta-roof-kit",
    section: "safety",
    sub: "FALL PROTECTION",
    name: "Malta Dynamics 50' Roofer's Safety Bucket Kit",
    tagline: "Ren's pick: reusable roof anchor, full-body harness, and 50 ft lifeline in one bucket. Roofing kit — grab and go.",
    price: "$99.99",
    checked: "2026-10-02",
    img: "assets/aff-malta-roof-kit.jpg",
    url: "https://www.amazon.com/dp/B0DFN29ZKD?tag=rendelivers-20"
  },
  {
    id: "aff-mechanix-original",
    section: "safety",
    sub: "GLOVES",
    name: "Mechanix Wear The Original Covert Work Gloves",
    tagline: "Ren's pick: the classic mechanic glove, touchscreen capable. If your hands could talk, they'd ask for these.",
    price: "$23.99",
    checked: "2026-10-02",
    img: "assets/aff-mechanix-original.jpg",
    url: "https://www.amazon.com/dp/B0001VNZUK?tag=rendelivers-20"
  },
  {
    id: "aff-magid-trex",
    section: "safety",
    sub: "GLOVES",
    name: "MAGID T-REX Flex Cut-Resistant Gloves, ANSI A4",
    tagline: "Ren's pick: ANSI A4 cut and impact protection. For when the sharp stuff argues back.",
    price: "$18.99",
    checked: "2026-10-02",
    img: "assets/aff-magid-trex.jpg",
    url: "https://www.amazon.com/dp/B07S982YF6?tag=rendelivers-20"
  },
  {
    id: "aff-ansell-midknight",
    section: "safety",
    sub: "GLOVES",
    name: "Ansell Microflex MidKnight Nitrile Gloves, Box of 100",
    tagline: "Ren's pick: fully textured black nitrile, box of 100. So cheap there's no excuse for bare hands.",
    price: "$18.10",
    checked: "2026-10-02",
    img: "assets/aff-ansell-midknight.jpg",
    url: "https://www.amazon.com/dp/B003FP2LJU?tag=rendelivers-20"
  },
  {
    id: "aff-wells-lamont-1132",
    section: "safety",
    sub: "GLOVES",
    name: "Wells Lamont Men's Cowhide Leather Work Gloves, Adjustable Wrist (1132L)",
    tagline: "Ren's pick: full grain cowhide with reinforced palm. Old-school leather that outlasts the job.",
    price: "See price on Amazon",
    img: "assets/aff-wells-lamont-1132.jpg",
    url: "https://www.amazon.com/dp/B00004R9RW?tag=rendelivers-20"
  },
  {
    id: "aff-firstaidonly-90575",
    section: "safety",
    sub: "FIRST AID",
    name: "First Aid Only 90575 First Aid Cabinet, 100-150 Person",
    tagline: "Ren's pick: 676 pieces, ANSI/OSHA compliant steel cabinet. The most important toolbox on the whole site.",
    price: "$145.55",
    checked: "2026-10-02",
    img: "assets/aff-firstaidonly-90575.jpg",
    url: "https://www.amazon.com/dp/B015VPZQ70?tag=rendelivers-20"
  },
  /* ---------------- LITERATURE (books live under Software) ---------------- */
  {
    id: "aff-markup-profit",
    section: "software",
    sub: "BOOKS",
    name: "Markup & Profit: A Contractor's Guide, Revisited",
    tagline: "Ren's pick: the bible on overhead, markup, and pricing jobs so you actually make money. By Michael Stone — required reading.",
    price: "See price on Amazon",
    img: "assets/aff-markup-profit.jpg",
    url: "https://www.amazon.com/dp/1572182717?tag=rendelivers-20"
  },
  {
    id: "aff-national-estimator",
    section: "software",
    sub: "BOOKS",
    name: "2026 National Construction Estimator, 74th Edition",
    tagline: "Ren's pick: current national costs — materials, labor, manhours, crew sizes, city modifiers. Price it right the first time.",
    price: "See price on Amazon",
    img: "assets/aff-national-estimator.jpg",
    url: "https://www.amazon.com/dp/1572184086?tag=rendelivers-20"
  },
  {
    id: "aff-construction-pm",
    section: "software",
    sub: "BOOKS",
    name: "Construction Project Management, 4th Edition",
    tagline: "Ren's pick: the full playbook — estimating, scheduling, contracts, safety. Run the job like a pro.",
    price: "See price on Amazon",
    img: "assets/aff-construction-pm.jpg",
    url: "https://www.amazon.com/dp/0132877244?tag=rendelivers-20"
  },
  {
    id: "aff-jobsite-mgmt",
    section: "software",
    sub: "BOOKS",
    name: "Construction Jobsite Management, 4th Edition",
    tagline: "Ren's pick: the day-to-day of running a jobsite — documentation, scheduling, coordination. For the one in charge.",
    price: "See price on Amazon",
    img: "assets/aff-jobsite-mgmt.jpg",
    url: "https://www.amazon.com/dp/130508179X?tag=rendelivers-20"
  },
  {
    id: "aff-commercial-construction",
    section: "software",
    sub: "BOOKS",
    name: "Principles and Practices of Commercial Construction, 10th Edition",
    tagline: "Ren's pick: commercial building methods, materials, and systems. The textbook behind the license exam.",
    price: "See price on Amazon",
    img: "assets/aff-commercial-construction.jpg",
    url: "https://www.amazon.com/dp/0134704665?tag=rendelivers-20"
  },
  {
    id: "aff-nrca-roofing",
    section: "software",
    sub: "BOOKS",
    name: "The NRCA Roofing Manual: Steep-slope Roof Systems, 2021",
    tagline: "Ren's pick: the roofing industry's authoritative manual — installation, materials, best practices. From the NRCA itself.",
    price: "See price on Amazon",
    img: "assets/aff-nrca-roofing.jpg",
    url: "https://www.amazon.com/dp/B00BBX15ZE?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m12-press-tool",
    section: "plumbing",
    sub: "PRESS",
    name: "Milwaukee 2473-22 M12 Force Logic Press Tool Kit",
    tagline: "Ren's pick: press 1/2 in. to 1 in. copper without a flame. The future of not burning the house down.",
    price: "See price on Amazon",
    img: "assets/aff-milw-m12-press-tool.jpg",
    url: "https://www.amazon.com/dp/B009G48D3M?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m18-press-tool",
    section: "plumbing",
    sub: "PRESS",
    name: "Milwaukee M18 Force Logic Press Tool w/ ONE-KEY",
    tagline: "Ren's pick: 7,200 lbs of press force with ONE-KEY tracking. For when the pipe's bigger than your patience.",
    price: "See price on Amazon",
    img: "assets/aff-milw-m18-press-tool.jpg",
    url: "https://www.amazon.com/dp/B08Y8GQY1V?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m18-press-ring",
    section: "plumbing",
    sub: "PRESS",
    name: "Milwaukee 49-16-2690 M18 Press Ring Kit 2-1/2 in.-4 in.",
    tagline: "Ren's pick: rings for the big stuff — 2-1/2 in. to 4 in. copper doesn't press itself.",
    price: "See price on Amazon",
    img: "assets/aff-milw-m18-press-ring.jpg",
    url: "https://www.amazon.com/dp/B00A0Z5UIC?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m12-soldering-iron",
    section: "plumbing",
    sub: "SOLDERING",
    name: "Milwaukee M12 Soldering Iron (Bare Tool)",
    tagline: "Ren's pick: 90 watts, hot in 18 seconds, no cord dragging through the crawl space.",
    price: "See price on Amazon",
    img: "assets/aff-milw-m12-soldering-iron.jpg",
    url: "https://www.amazon.com/dp/B077ZXH8ZJ?tag=rendelivers-20"
  },
  {
    id: "aff-milw-16ft-tape",
    section: "plumbing",
    sub: "MEASURING",
    name: "Milwaukee 48-22-6616G 16' Compact Tape Measure (2-Pack)",
    tagline: "Ren's pick: measure twice, cut once — now in a two-pack because one always grows legs.",
    price: "See price on Amazon",
    img: "assets/aff-milw-16ft-tape.jpg",
    url: "https://www.amazon.com/dp/B07535CPMT?tag=rendelivers-20"
  },
  {
    id: "aff-milw-25ft-tape",
    section: "plumbing",
    sub: "MEASURING",
    name: "Milwaukee 48-22-0225 25' Compact Wide Blade Tape Measure",
    tagline: "Ren's pick: 12 feet of standout. For measuring across the room without the sag of shame.",
    price: "See price on Amazon",
    img: "assets/aff-milw-25ft-tape.jpg",
    url: "https://www.amazon.com/dp/B07YKV4Q6Y?tag=rendelivers-20"
  },
  {
    id: "aff-milw-compact-hacksaw",
    section: "plumbing",
    sub: "SAWS",
    name: "Milwaukee 48-22-0012 Compact Hack Saw w/ 10 in. Blade",
    tagline: "Ren's pick: small saw, big attitude. Copper tubing, bolts, PVC — all fair game.",
    price: "See price on Amazon",
    img: "assets/aff-milw-compact-hacksaw.jpg",
    url: "https://www.amazon.com/dp/B003VY8WA2?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m12-copper-cutter",
    section: "plumbing",
    sub: "CUTTERS",
    name: "Milwaukee M12 12V Copper Tubing Cutter Kit (2471-21)",
    tagline: "Ren's pick: auto-adjusts to the pipe and cuts it clean. Your wrist will thank you.",
    price: "See price on Amazon",
    img: "assets/aff-milw-m12-copper-cutter.jpg",
    url: "https://www.amazon.com/dp/B001FB64N0?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m12-copper-cutter-bare",
    section: "plumbing",
    sub: "CUTTERS",
    name: "Milwaukee 2471-20 M12 Copper Tubing Cutter (Tool Only)",
    tagline: "Ren's pick: same cutter, bare tool — for the guy who already owns seventeen M12 batteries.",
    price: "See price on Amazon",
    img: "assets/aff-milw-m12-copper-cutter-bare.jpg",
    url: "https://www.amazon.com/dp/B001FB64MQ?tag=rendelivers-20"
  },
  {
    id: "aff-milw-pex-tubing-cutter",
    section: "plumbing",
    sub: "PEX",
    name: "Milwaukee 48-22-4202 PEX Tubing Cutter",
    tagline: "Ren's pick: plier-style, stainless blade, cuts PEX like it's not even there.",
    price: "See price on Amazon",
    img: "assets/aff-milw-pex-tubing-cutter.jpg",
    url: "https://www.amazon.com/dp/B00PP3G51U?tag=rendelivers-20"
  },
  {
    id: "aff-milw-cheater-pipe-wrench",
    section: "plumbing",
    sub: "WRENCHES",
    name: "Milwaukee 48-22-7314 CHEATER Adaptable Pipe Wrench",
    tagline: "Ren's pick: one wrench, three lengths. The Swiss Army knife of pipe wrenches.",
    price: "See price on Amazon",
    img: "assets/aff-milw-cheater-pipe-wrench.jpg",
    url: "https://www.amazon.com/dp/B01CRHGIYA?tag=rendelivers-20"
  },
  {
    id: "aff-milw-cheater-pipe-wrench-2pack",
    section: "plumbing",
    sub: "WRENCHES",
    name: "Milwaukee CHEATER Adaptable Pipe Wrench (2-Pack)",
    tagline: "Ren's pick: two Cheaters. Because backing up a fitting takes two, and so does looking cool.",
    price: "See price on Amazon",
    img: "assets/aff-milw-cheater-pipe-wrench-2pack.jpg",
    url: "https://www.amazon.com/dp/B07Z8FXL18?tag=rendelivers-20"
  },
  {
    id: "aff-milw-ironworker-pliers",
    section: "plumbing",
    sub: "PLIERS",
    name: "Milwaukee 48-22-6102 Ironworker's Pliers",
    tagline: "Ren's pick: spring-loaded, red grips, ready to twist wire all day.",
    price: "See price on Amazon",
    img: "assets/aff-milw-ironworker-pliers.jpg",
    url: "https://www.amazon.com/dp/B0195LZGI0?tag=rendelivers-20"
  },
  {
    id: "aff-milw-multitool-m12",
    section: "catalog",
    sub: "Multi-Tools",
    name: "Milwaukee 2526-20 M12 FUEL Oscillating Multi-Tool (Tool Only)",
    tagline: "Ren's pick: 10,000 to 20,000 OPM of cut-sand-scrape everything. The tool that does what the others won't.",
    price: "See price on Amazon",
    img: "assets/aff-milw-multitool-m12.jpg",
    url: "https://www.amazon.com/dp/B08JWL1PBV?tag=rendelivers-20"
  },
  {
    id: "aff-milw-drill-m18",
    section: "catalog",
    sub: "Drills",
    name: "Milwaukee 2804-20 M18 FUEL 1/2 in. Hammer Drill (Tool Only)",
    tagline: "Ren's pick: 1,200 in-lbs of peak torque. Drills through concrete like it's drywall.",
    price: "See price on Amazon",
    img: "assets/aff-milw-drill-m18.jpg",
    url: "https://www.amazon.com/dp/B079NBC7JN?tag=rendelivers-20"
  },
  {
    id: "aff-milw-drill-m12",
    section: "catalog",
    sub: "Drills",
    name: "Milwaukee 3404-20 M12 FUEL 1/2 in. Hammer Drill (Tool Only)",
    tagline: "Ren's pick: the little drill that punches way above its weight class.",
    price: "See price on Amazon",
    img: "assets/aff-milw-drill-m12.jpg",
    url: "https://www.amazon.com/dp/B0BPDKS8SH?tag=rendelivers-20"
  },
  {
    id: "aff-milw-impact-m18",
    section: "catalog",
    sub: "Drivers",
    name: "Milwaukee 2853-20 M18 FUEL 1/4 in. Hex Impact Driver (Tool Only)",
    tagline: "Ren's pick: 2,000 in-lbs in a 4.59 in. body. Screws fear this thing.",
    price: "See price on Amazon",
    img: "assets/aff-milw-impact-m18.jpg",
    url: "https://www.amazon.com/dp/B0BB8H1NKX?tag=rendelivers-20"
  },
  {
    id: "aff-milw-impact-m12",
    section: "catalog",
    sub: "Drivers",
    name: "Milwaukee 2553-20 M12 FUEL 1/4 in. Hex Impact Driver Kit",
    tagline: "Ren's pick: 1,500 in-lbs with 4-mode drive control. Kit comes with battery and bag.",
    price: "See price on Amazon",
    img: "assets/aff-milw-impact-m12.jpg",
    url: "https://www.amazon.com/dp/B0BLT6PSKS?tag=rendelivers-20"
  },
  {
    id: "aff-milw-circsaw-7",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2732-20 M18 FUEL 7-1/4 in. Circular Saw (Tool Only)",
    tagline: "Ren's pick: 5,800 RPM, magnesium shoe, rafter hook. The full-size framing saw, no cord.",
    price: "See price on Amazon",
    img: "assets/aff-milw-circsaw-7.jpg",
    url: "https://www.amazon.com/dp/B079NPMJQ1?tag=rendelivers-20"
  },
  {
    id: "aff-milw-circsaw-6",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2730-21 M18 FUEL 6-1/2 in. Circular Saw Kit",
    tagline: "Ren's pick: the handy-size circ saw with battery and charger. For everything the big saw is overkill for.",
    price: "See price on Amazon",
    img: "assets/aff-milw-circsaw-6.jpg",
    url: "https://www.amazon.com/dp/B00FUQPDYW?tag=rendelivers-20"
  },
  {
    id: "aff-milw-sawzall-fuel",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2722-20 M18 FUEL SAWZALL Recip Saw (Tool Only)",
    tagline: "Ren's pick: 3,000 SPM, 1-1/4 in. stroke. Demolition's favorite power tool.",
    price: "See price on Amazon",
    img: "assets/aff-milw-sawzall-fuel.jpg",
    url: "https://www.amazon.com/dp/B08WG2HC81?tag=rendelivers-20"
  },
  {
    id: "aff-milw-sawzall-m18",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2621-20 M18 SAWZALL Recip Saw (Tool Only)",
    tagline: "Ren's pick: the classic SAWZALL. All-metal gear case, QUIK-LOK blade clamp, zero drama.",
    price: "See price on Amazon",
    img: "assets/aff-milw-sawzall-m18.jpg",
    url: "https://www.amazon.com/dp/B07FB2GBTH?tag=rendelivers-20"
  },
  {
    id: "aff-milw-jigsaw",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2737-20 M18 FUEL D-Handle Jig Saw (Tool Only)",
    tagline: "Ren's pick: 0 to 3,500 SPM with 4-position orbital. Curves so smooth they look laser-cut.",
    price: "See price on Amazon",
    img: "assets/aff-milw-jigsaw.jpg",
    url: "https://www.amazon.com/dp/B07H7DQ3DK?tag=rendelivers-20"
  },
  {
    id: "aff-milw-grinder-fuel",
    section: "catalog",
    sub: "GRINDERS",
    name: "Milwaukee 2880-20 M18 FUEL 4-1/2 / 5 in. Grinder (Tool Only)",
    tagline: "Ren's pick: 8,500 RPM of corded-equivalent fury. No cord, no excuses.",
    price: "See price on Amazon",
    img: "assets/aff-milw-grinder-fuel.jpg",
    url: "https://www.amazon.com/dp/B09RX4R3TR?tag=rendelivers-20"
  },
  {
    id: "aff-milw-grinder-m18",
    section: "catalog",
    sub: "GRINDERS",
    name: "Milwaukee 2680-20 M18 4-1/2 in. Grinder (Tool Only)",
    tagline: "Ren's pick: 9,000 RPM paddle switch with tool-free guard. The workhorse grinder.",
    price: "See price on Amazon",
    img: "assets/aff-milw-grinder-m18.jpg",
    url: "https://www.amazon.com/dp/B001VGOJLI?tag=rendelivers-20"
  },
  {
    id: "aff-milw-diegrinder-m12",
    section: "catalog",
    sub: "GRINDERS",
    name: "Milwaukee 2485-20 M12 FUEL Right Angle Die Grinder (Tool Only)",
    tagline: "Ren's pick: 24,500 RPM in the palm of your hand. For the detail work that matters.",
    price: "See price on Amazon",
    img: "assets/aff-milw-diegrinder-m12.jpg",
    url: "https://www.amazon.com/dp/B07XZMMD1V?tag=rendelivers-20"
  },
  {
    id: "aff-milw-framing-nailer",
    section: "catalog",
    sub: "NAILERS",
    name: "Milwaukee 2744-20 M18 FUEL 21-Degree Framing Nailer (Tool Only)",
    tagline: "Ren's pick: nitrogen gas power, no gas cartridges. Framing at the speed of thought.",
    price: "See price on Amazon",
    img: "assets/aff-milw-framing-nailer.jpg",
    url: "https://www.amazon.com/dp/B08VMYS879?tag=rendelivers-20"
  },
  {
    id: "aff-milw-brad-nailer",
    section: "catalog",
    sub: "NAILERS",
    name: "Milwaukee 2746-20 M18 FUEL 18-Gauge Brad Nailer (Tool Only)",
    tagline: "Ren's pick: zero ramp-up, no gas. Trim work without the compressor symphony.",
    price: "See price on Amazon",
    img: "assets/aff-milw-brad-nailer.jpg",
    url: "https://www.amazon.com/dp/B07VYJQ1KP?tag=rendelivers-20"
  },
  {
    id: "aff-milw-finish-nailer",
    section: "catalog",
    sub: "NAILERS",
    name: "Milwaukee 2742-20 M18 FUEL 16-Gauge Angled Finish Nailer (Tool Only)",
    tagline: "Ren's pick: sinks 2-1/2 in. nails in solid oak. Finish carpentry's new best friend.",
    price: "See price on Amazon",
    img: "assets/aff-milw-finish-nailer.jpg",
    url: "https://www.amazon.com/dp/B01DE8ZHM0?tag=rendelivers-20"
  },
  {
    id: "aff-milw-tape-25",
    section: "catalog",
    sub: "MEASURING",
    name: "Milwaukee 48-22-7125 25 ft. Magnetic Tape Measure (2-Pack)",
    tagline: "Ren's pick: magnetic blade that sticks to steel. Two-pack, because tapes are escape artists.",
    price: "See price on Amazon",
    img: "assets/aff-milw-tape-25.jpg",
    url: "https://www.amazon.com/dp/B082YKXKC4?tag=rendelivers-20"
  },
  {
    id: "aff-milw-fastback",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Milwaukee 48-22-1500 FASTBACK Compact Flip Utility Knife",
    tagline: "Ren's pick: press-and-flip one-hand opening. The knife that's always in your pocket.",
    price: "See price on Amazon",
    img: "assets/aff-milw-fastback.jpg",
    url: "https://www.amazon.com/dp/B082KL6HT3?tag=rendelivers-20"
  },
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
  var tplAttr = '';
  var zoomAttr = '';
  var sampleBtn = '';
  if (p.section === "templates") {
    tplAttr = ' data-tpl="1"';
    sampleBtn =
      '<div class="sample-row">' +
        '<button type="button" class="btn-sample" data-sample="assets/tpl-sample-' + rdEsc(p.id) + '.jpg" data-name="' + rdEsc(p.name) + '">View Sample</button>' +
      '</div>';
  }
  if (p.section !== "templates") {
    zoomAttr = ' data-zoom="1"';
  }
  return (
    '<article class="card' + (big ? ' card-featured' : '') + '"' + tplAttr + zoomAttr + '>' +
      '<a class="card-img-link" href="' + rdEsc(p.url) + '" target="_blank" rel="noopener">' +
        '<img src="' + rdEsc(p.img) + '" alt="' + rdEsc(p.name) + '" loading="' + (big ? 'eager' : 'lazy') + '">' +
      '</a>' +
      '<div class="card-body">' +
        '<h3>' + rdEsc(p.name) + '</h3>' +
        '<p class="card-tag">' + rdEsc(p.tagline) + '</p>' +
        sampleBtn +
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

/* ---- Template sample lightbox (large readable preview) ---- */
var rdLbEl = null, rdLbOpener = null, rdLbSticky = false, rdLbHoverCard = null;

function rdLbBuild() {
  if (rdLbEl) return rdLbEl;
  var lb = document.createElement('div');
  lb.className = 'rd-lightbox';
  lb.setAttribute('hidden', '');
  lb.innerHTML =
    '<div class="rd-lb-backdrop" data-rd-lb-close></div>' +
    '<figure class="rd-lb-panel">' +
      '<button type="button" class="rd-lb-x" data-rd-lb-close aria-label="Close sample preview">&times;</button>' +
      '<img class="rd-lb-img" alt="">' +
      '<figcaption class="rd-lb-cap"></figcaption>' +
    '</figure>';
  document.body.appendChild(lb);
  lb.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-rd-lb-close]')) rdLbClose();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && rdLbEl && !rdLbEl.hidden) rdLbClose();
  });
  rdLbEl = lb;
  return lb;
}

function rdLbOpen(src, name, opener, sticky) {
  var lb = rdLbBuild();
  var img = lb.querySelector('.rd-lb-img');
  img.src = src;
  img.alt = name + ' — sample preview';
  lb.querySelector('.rd-lb-cap').textContent = name + ' — SAMPLE';
  rdLbOpener = opener || null;
  rdLbSticky = !!sticky;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  var panel = lb.querySelector('.rd-lb-panel');
  panel.onmouseleave = null;
  if (!sticky) {
    panel.onmouseleave = function () { rdLbClose(); };
  }
  var x = lb.querySelector('.rd-lb-x');
  if (x && x.focus) { try { x.focus(); } catch (err) {} }
}

function rdLbClose() {
  if (!rdLbEl || rdLbEl.hidden) return;
  rdLbEl.hidden = true;
  document.body.style.overflow = '';
  var img = rdLbEl.querySelector('.rd-lb-img');
  img.removeAttribute('src');
  if (rdLbHoverCard) { rdLbHoverCard.dataset.rdLbArmed = '0'; rdLbHoverCard = null; }
  if (rdLbOpener && rdLbOpener.focus) { try { rdLbOpener.focus(); } catch (err) {} }
  rdLbOpener = null;
}

function rdCanHover() {
  return window.matchMedia && window.matchMedia('(hover: hover)').matches;
}

document.addEventListener('click', function (e) {
  var btn = (e.target && e.target.closest) ? e.target.closest('.btn-sample') : null;
  if (!btn) return;
  e.preventDefault();
  rdLbOpen(btn.getAttribute('data-sample'), btn.getAttribute('data-name'), btn, true);
});

/* Hover intent: wait 350ms before opening, so quick mouse passes don't fire it. */
var rdHoverTimer = null;
function rdClearHoverTimer() {
  if (rdHoverTimer) { clearTimeout(rdHoverTimer); rdHoverTimer = null; }
}

document.addEventListener('mouseover', function (e) {
  var tgt = (e.target && e.target.closest) ? e.target : null;
  if (tgt) {
    var btn = tgt.closest('.btn-sample');
    if (btn) { var pre = new Image(); pre.src = btn.getAttribute('data-sample'); }
  }
  if (!rdCanHover()) return;
  var card = tgt ? tgt.closest('article.card[data-tpl]') : null;
  if (!card) return;
  if (e.relatedTarget && card.contains(e.relatedTarget)) return;
  if (card.dataset.rdLbArmed === '0') return;
  if (rdLbEl && !rdLbEl.hidden) return;
  if (rdHoverTimer) return;
  rdHoverTimer = setTimeout(function () {
    rdHoverTimer = null;
    if (rdLbEl && !rdLbEl.hidden) return;
    var b = card.querySelector('.btn-sample');
    if (!b) return;
    rdLbHoverCard = card;
    rdLbOpen(b.getAttribute('data-sample'), b.getAttribute('data-name'), null, false);
  }, 350);
});

document.addEventListener('mouseout', function (e) {
  var tgt = (e.target && e.target.closest) ? e.target : null;
  var card = tgt ? tgt.closest('article.card[data-tpl]') : null;
  if (!card) return;
  if (e.relatedTarget && card.contains(e.relatedTarget)) return;
  rdClearHoverTimer();
  card.dataset.rdLbArmed = '';
});

/* Product cards: hover shows the product enlarged in the lightbox. Same 350ms intent delay. */
document.addEventListener('mouseover', function (e) {
  if (!rdCanHover()) return;
  var tgt = (e.target && e.target.closest) ? e.target : null;
  var card = tgt ? tgt.closest('article.card[data-zoom]') : null;
  if (!card) return;
  if (e.relatedTarget && card.contains(e.relatedTarget)) return;
  if (card.dataset.rdLbArmed === '0') return;
  if (rdLbEl && !rdLbEl.hidden) return;
  if (rdHoverTimer) return;
  rdHoverTimer = setTimeout(function () {
    rdHoverTimer = null;
    if (rdLbEl && !rdLbEl.hidden) return;
    var img = card.querySelector('.card-img-link img');
    var h3 = card.querySelector('.card-body h3');
    var src = img ? (img.getAttribute('src') || '') : '';
    var name = h3 ? h3.textContent : '';
    if (!src) return;
    rdLbHoverCard = card;
    rdLbOpen(src, name, null, false);
    var cap = rdLbEl.querySelector('.rd-lb-cap');
    if (cap) cap.textContent = name;
  }, 350);
});

document.addEventListener('mouseout', function (e) {
  var tgt = (e.target && e.target.closest) ? e.target : null;
  var card = tgt ? tgt.closest('article.card[data-zoom]') : null;
  if (!card) return;
  if (e.relatedTarget && card.contains(e.relatedTarget)) return;
  rdClearHoverTimer();
  card.dataset.rdLbArmed = '';
});

/* Featured slot: ?p=<id> wins, then FEATURED_ID, then first product. */
function rdRenderFeatured(elId) {
  var byId = rdById();
  var featuredId = rdGetParam("p") || FEATURED_ID;
  var featured = byId[featuredId] || byId[FEATURED_ID] || PRODUCTS[0];
  document.getElementById(elId).innerHTML =
    '<div class="featured-label">Ren&rsquo;s Pick</div>' + rdCardHTML(featured, true);
  return featured.id;
}

/* Top Picks carousel: auto-scrolling showcase of the products we're pushing. */
var TOP_PICKS = ["flag-hammer", "aff-calc-4065", "tpl-toolbox-talk", "i-live-at-work", "aff-swanson-s0101", "tpl-estimate"];

function rdRenderCarousel(elId) {
  var byId = rdById();
  var slides = "";
  TOP_PICKS.forEach(function (id) {
    var p = byId[id];
    if (p) slides += '<div class="car-slide">' + rdCardHTML(p, false) + "</div>";
  });
  document.getElementById(elId).innerHTML =
    '<div class="featured-label">Ren&rsquo;s Top Picks</div>' +
    '<div class="carousel">' +
      '<button type="button" class="car-btn car-prev" aria-label="Previous">&lsaquo;</button>' +
      '<div class="car-track">' + slides + "</div>" +
      '<button type="button" class="car-btn car-next" aria-label="Next">&rsaquo;</button>' +
    "</div>";

  var track = document.querySelector("#" + elId + " .car-track");
  if (!track) return;
  var timer = null;
  function step() {
    var slide = track.querySelector(".car-slide");
    if (!slide) return;
    var w = slide.offsetWidth + 16;
    var max = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft + w >= max - 8) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: w, behavior: "smooth" });
    }
  }
  function start() { if (!timer) timer = setInterval(step, 4000); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  track.addEventListener("mouseenter", stop);
  track.addEventListener("mouseleave", start);
  track.addEventListener("touchstart", stop, { passive: true });
  track.addEventListener("touchend", start);
  document.querySelector("#" + elId + " .car-prev").addEventListener("click", function () {
    stop();
    var slide = track.querySelector(".car-slide");
    track.scrollBy({ left: -(slide.offsetWidth + 16), behavior: "smooth" });
    start();
  });
  document.querySelector("#" + elId + " .car-next").addEventListener("click", function () {
    stop(); step(); start();
  });
  start();
}

/* Section grid, optionally skipping one product id (e.g. the featured one). */
function rdRenderGrid(section, elId, skipId) {
  var html = "";
  PRODUCTS.forEach(function (p) {
    if (p.section === section && p.id !== skipId) html += rdCardHTML(p, false);
  });
  document.getElementById(elId).innerHTML = html;
}
