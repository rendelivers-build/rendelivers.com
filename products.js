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
    section: "apparel",
    name: "American Flag Framing Hammer",
    tagline: "Distressed flag with a framing hammer cut out. For the ones who built this country.",
    price: "$21.17",
    img: "assets/shirt-flag-hammer.jpg",
    url: "https://www.zazzle.com/american_flag_framing_hammer_t_shirt_distressed-256693470570911159"
  },
  {
    id: "boss-man",
    section: "apparel",
    name: "Boss Man",
    tagline: "For the one running the show — or the one who thinks he is.",
    price: "$21.17",
    img: "assets/shirt-boss-man.jpg",
    url: "https://www.zazzle.com/boss_man_t_shirt_funny_boss_shirt-256900258384459546"
  },
  {
    id: "alien-probe",
    section: "apparel",
    name: "I Identify As An Alien Probe",
    tagline: "For the crew member with zero filter.",
    price: "$21.17",
    img: "assets/shirt-alien-probe.jpg",
    url: "https://www.zazzle.com/i_identify_as_an_alien_probe_funny_t_shirt-256898836033722814"
  },
  {
    id: "rocket-surgery",
    section: "apparel",
    name: "It's Not Rocket Surgery",
    tagline: "The official motto of every job site.",
    price: "$21.17",
    img: "assets/shirt-rocket-surgery.jpg",
    url: "https://www.zazzle.com/its_not_rocket_surgery_funny_t_shirt-256282970006775531"
  },
  {
    id: "i-live-at-work",
    section: "apparel",
    name: "I Live At Work",
    tagline: "For the coworker who basically lives at the office.",
    price: "$21.17",
    img: "assets/shirt-i-live-at-work.jpg",
    url: "https://www.zazzle.com/i_live_at_work_t_shirt-256097523361425118"
  },
  {
    id: "will-work-for-diesel",
    section: "apparel",
    name: "Will Work For Diesel",
    tagline: "The truck doesn't run on compliments.",
    price: "$21.17",
    img: "assets/shirt-will-work-for-diesel.jpg",
    url: "https://www.zazzle.com/when_youll_do_just_about_anything_for_fuel_t_shirt-256004213036257819"
  },
  {
    id: "safety-3rd",
    section: "apparel",
    name: "Safety 3rd",
    tagline: "Because safety first is for people who read the manual.",
    price: "$21.17",
    img: "assets/shirt-safety-3rd.jpg",
    url: "https://www.zazzle.com/safety_3rd_t_shirt_construction_safety_shirt-256258795454909535"
  },
  {
    id: "u-should-b-here",
    section: "apparel",
    name: "U Should B Here — Three Wise Monkeys",
    tagline: "See no evil, hear no evil, speak no evil.",
    price: "$21.17",
    img: "assets/shirt-u-should-b-here.jpg",
    url: "https://www.zazzle.com/u_should_b_here_three_wise_monkeys_t_shirt-256699340606931396"
  },
  {
    id: "tax-deduction-onesie",
    section: "apparel",
    name: "Tax Deduction Baby Bodysuit",
    tagline: "The newest member of the workforce.",
    price: "$18.11",
    img: "assets/shirt-tax-deduction-onesie.jpg",
    url: "https://www.zazzle.com/tax_deduction_baby_bodysuit-256376515421563105"
  },
  {
    id: "tax-deduction-loading",
    section: "apparel",
    name: "Tax Deduction Loading Maternity Sweater",
    tagline: "Expecting the ultimate write-off.",
    price: "$37.87",
    img: "assets/shirt-tax-deduction-loading.jpg",
    url: "https://www.zazzle.com/maternity_sweater-256148487228465356"
  },
  {
    id: "catch-phrase",
    section: "apparel",
    name: "Catch Phrase T-Shirt",
    tagline: "Insert your catch phrase here. [CATCH PHRASE]",
    price: "$21.17",
    img: "assets/shirt-catch-phrase.jpg",
    url: "https://www.zazzle.com/catch_phrase_t_shirt-256850852354624644"
  },
  {
    id: "youre-did-it",
    section: "apparel",
    name: "You're DID IT!",
    tagline: "Tri-blend. You DID it — own it.",
    price: "$41.74",
    img: "assets/shirt-youre-did-it.jpg",
    url: "https://www.zazzle.com/youre_did_it_tri_blend_shirt-256225393109642624"
  },
  {
    id: "failed",
    section: "apparel",
    name: "Failed",
    tagline: "For when it just didn't work out.",
    price: "$21.17",
    img: "assets/shirt-failed.jpg",
    url: "https://www.zazzle.com/failed_t_shirt-256487586433084293"
  },
  {
    id: "osha-violator",
    section: "apparel",
    name: "OSHA Violator",
    tagline: "Safety third.",
    price: "$21.17",
    img: "assets/shirt-osha-violator.jpg",
    url: "https://www.zazzle.com/osha_violator_t_shirt-256187850197198627"
  },
  {
    id: "cant-spell-success",
    section: "apparel",
    name: "You Can't Spell Success",
    tagline: "U can't spell success without U.",
    price: "$21.17",
    img: "assets/shirt-cant-spell-success.jpg",
    url: "https://www.zazzle.com/you_cant_spell_success_t_shirt-256572297538962116"
  },
  {
    id: "government-controlled",
    section: "apparel",
    name: "Government Controlled",
    tagline: "They're listening.",
    price: "$21.17",
    img: "assets/shirt-government-controlled.jpg",
    url: "https://www.zazzle.com/government_controlled_t_shirt-256227880909253296"
  },
  {
    id: "nailed-it",
    section: "apparel",
    name: "Nailed It",
    tagline: "Nailed it. (Probably.)",
    price: "$21.17",
    img: "assets/shirt-nailed-it.jpg",
    url: "https://www.zazzle.com/nailed_it_t_shirt-256030204063678285"
  },
  {
    id: "tomato-potato",
    section: "apparel",
    name: "Tomato Potato",
    tagline: "Tomato, potato — let's call the whole thing off.",
    price: "$21.17",
    img: "assets/shirt-tomato-potato.jpg",
    url: "https://www.zazzle.com/tomato_potato_t_shirt-256796967579186051"
  },
  {
    id: "level-1-beginner",
    section: "apparel",
    name: "Level 1 Beginner",
    tagline: "Everyone starts at level 1.",
    price: "$21.17",
    img: "assets/shirt-level-1-beginner.jpg",
    url: "https://www.zazzle.com/level_1_beginner_t_shirt-256610608693604359"
  },
  {
    id: "born-to-send-it",
    section: "apparel",
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
    id: "aff-vaughan-ti-hammer",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Vaughan Titanium Framing Hammer",
    tagline: "Ren's pick: titanium head, lighter swing, same driving power. Your elbow will thank you.",
    price: "$143.11",
    img: "assets/aff-vaughan-ti-hammer.jpg",
    url: "https://www.amazon.com/dp/B000H6UUGG?tag=rendelivers-20"
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
    price: "$20.49",
    img: "assets/aff-johnson-cs9.jpg",
    url: "https://www.amazon.com/dp/B07N2P89D1?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-dck940d2",
    section: "catalog",
    sub: "PACKOUT",
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
    id: "aff-level5-flatbox-4604",
    section: "drywall",
    sub: "TAPING",
    name: "LEVEL5 Flat Box Combo Set 10 in.+12 in. w/ Handle, Pump & Filler (4-604)",
    tagline: "Ren's pick: 10 in. and 12 in. flat boxes, pump, and filler. The pro finishing rig, ready to print money.",
    price: "$1,340.37",
    checked: "2026-10-02",
    img: "assets/aff-level5-flatbox-4604.jpg",
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
  {
    id: "aff-stanley-21-115",
    section: "drywall",
    sub: "HAND TOOLS",
    name: "Stanley Surform Shaver 4-Pack (21-115)",
    tagline: "Ren's pick: shaves drywall edges and patches smooth in seconds. Four-pack because they walk off jobsites.",
    price: "$29.88",
    checked: "2026-10-05",
    img: "assets/aff-stanley-21-115.jpg",
    url: "https://www.amazon.com/dp/B07NCZ1BVY?tag=rendelivers-20"
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
    price: "$109.99",
    img: "assets/aff-pip-wolfjaw.jpg",
    url: "https://www.amazon.com/dp/B0C443J64K?tag=rendelivers-20"
  },
  {
    id: "aff-lift-dax-fifty50-orange",
    section: "safety",
    sub: "HEAD",
    name: "LIFT Safety DAX Fifty 50 Carbon Fiber Full Brim Hard Hat, Hi-Viz Orange/Black",
    tagline: "Half carbon fiber, half hi-vis — the hardest hat on the jobsite.",
    price: "$180.00",
    img: "assets/aff-lift-dax-fifty50-orange.jpg",
    url: "https://www.amazon.com/dp/B07NZ89225?tag=rendelivers-20"
  },
  {
    id: "aff-3m-securefit",
    section: "safety",
    sub: "EYEWEAR",
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
    id: "aff-mechanix-original-black",
    section: "safety",
    sub: "GLOVES",
    name: "Mechanix Wear The Original Work Gloves, Black",
    tagline: "Ren's pick: the flagship Original in classic black. TrekDry, touchscreen capable, machine washable.",
    price: "$22.99",
    img: "assets/aff-mechanix-original-black.jpg",
    url: "https://www.amazon.com/dp/B0001VNZQY?tag=rendelivers-20"
  },
  {
    id: "aff-mechanix-hiviz-fastfit",
    section: "safety",
    sub: "GLOVES",
    name: "Mechanix Wear Hi-Viz FastFit Work Gloves, Fluorescent Yellow",
    tagline: "Ren's pick: ANSI-107 hi-vis with reflective print. The contractor glove everyone recognizes.",
    price: "$16.65",
    img: "assets/aff-mechanix-hiviz-fastfit.jpg",
    url: "https://www.amazon.com/dp/B002XISTVY?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-mechanix-hiviz",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Mechanix Wear Hi-Viz FastFit Work Gloves, Fluorescent Yellow",
    tagline: "Ren's pick: ANSI-107 hi-vis with reflective print. The contractor glove everyone recognizes.",
    price: "$16.65",
    img: "assets/aff-mechanix-hiviz-fastfit.jpg",
    url: "https://www.amazon.com/dp/B002XISTVY?tag=rendelivers-20"
  },
  {
    id: "aff-gf-rubber-palm-12pk",
    section: "safety",
    sub: "GLOVES",
    name: "G & F Products Latex Double-Coated Work Gloves, 12-Pack",
    tagline: "Ren's pick: the classic blue dipped glove contractors burn through. Buy the dozen.",
    price: "$14.11",
    img: "assets/aff-gf-rubber-palm-12pk.jpg",
    url: "https://www.amazon.com/dp/B001YJHEDW?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-gf-rubber-palm",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "G & F Products Latex Double-Coated Work Gloves, 12-Pack",
    tagline: "Ren's pick: the classic blue dipped glove contractors burn through. Buy the dozen.",
    price: "$14.11",
    img: "assets/aff-gf-rubber-palm-12pk.jpg",
    url: "https://www.amazon.com/dp/B001YJHEDW?tag=rendelivers-20"
  },
  {
    id: "aff-klein-60588-cut",
    section: "safety",
    sub: "GLOVES",
    name: "Klein Tools 60588 Cut-Resistant Touchscreen Work Gloves, 2-Pack",
    tagline: "Ren's pick: cut-resistant with touchscreen fingertips. Klein tough.",
    price: "$15.98",
    img: "assets/aff-klein-60588-cut.jpg",
    url: "https://www.amazon.com/dp/B0C9FZFVZH?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-klein-60588",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Klein Tools 60588 Cut-Resistant Touchscreen Work Gloves, 2-Pack",
    tagline: "Ren's pick: cut-resistant with touchscreen fingertips. Klein tough.",
    price: "$15.98",
    img: "assets/aff-klein-60588-cut.jpg",
    url: "https://www.amazon.com/dp/B0C9FZFVZH?tag=rendelivers-20"
  },
  {
    id: "aff-klein-60582-a1",
    section: "safety",
    sub: "GLOVES",
    name: "Klein Tools 60582 A1 Cut-Resistant Work Gloves, X-Large, 2-Pack",
    tagline: "Ren's pick: ANSI A1 knit dipped, nitrile coated, touchscreen capable. Amazon's Choice.",
    price: "$8.18",
    img: "assets/aff-klein-60582-a1.jpg",
    url: "https://www.amazon.com/dp/B0C9FNLK7J?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-klein-60582",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Klein Tools 60582 A1 Cut-Resistant Work Gloves, X-Large, 2-Pack",
    tagline: "Ren's pick: ANSI A1 knit dipped, nitrile coated, touchscreen capable. Amazon's Choice.",
    price: "$8.18",
    img: "assets/aff-klein-60582-a1.jpg",
    url: "https://www.amazon.com/dp/B0C9FNLK7J?tag=rendelivers-20"
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
    id: "aff-wells-lamont-1132l",
    section: "safety",
    sub: "GLOVES",
    name: "Wells Lamont Men's Cowhide Leather Work Gloves, Adjustable Wrist (1132L)",
    tagline: "Ren's pick: grain cowhide with an adjustable wrist strap. The classic work glove that outlasts the job.",
    price: "$14.85",
    checked: "2026-10-05",
    img: "assets/aff-wells-lamont-1132l.jpg",
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
    id: "book-first-aid-handbook",
    section: "software",
    sub: "BOOKS",
    name: "Construction First Aid Handbook",
    tagline: "Ren's own book: a jobsite guide to keeping people alive until help arrives. What to do in the minutes that matter — written for the trades, by a 30-year veteran.",
    price: "$9.99",
    checked: "2026-10-05",
    img: "assets/book-first-aid-handbook.jpg",
    url: "https://www.amazon.com/dp/B0HLYYD6KJ?tag=rendelivers-20"
  },
  {
    id: "aff-markup-profit",
    section: "software",
    sub: "BOOKS",
    name: "Markup & Profit: A Contractor's Guide, Revisited",
    tagline: "Ren's pick: the bible on overhead, markup, and pricing jobs so you actually make money. By Michael Stone — required reading.",
    price: "$45.44",
    img: "assets/aff-markup-profit.jpg",
    url: "https://www.amazon.com/dp/1572182717?tag=rendelivers-20"
  },
  {
    id: "aff-national-estimator",
    section: "software",
    sub: "BOOKS",
    name: "2026 National Construction Estimator, 74th Edition",
    tagline: "Ren's pick: current national costs — materials, labor, manhours, crew sizes, city modifiers. Price it right the first time.",
    price: "$164.44",
    img: "assets/aff-national-estimator.jpg",
    url: "https://www.amazon.com/dp/1572184086?tag=rendelivers-20"
  },
  {
    id: "aff-nec-2026",
    section: "software",
    sub: "BOOKS",
    name: "NFPA 70 National Electrical Code (NEC) 2026 Edition",
    tagline: "The 2026 NEC — the code book every electrician lives by. Know it or fail inspection.",
    price: "$169.00",
    img: "assets/aff-nec-2026.jpg",
    url: "https://www.amazon.com/dp/1455932205?tag=rendelivers-20"
  },
  {
    id: "aff-construction-pm",
    section: "software",
    sub: "BOOKS",
    name: "Construction Project Management, 4th Edition",
    tagline: "Ren's pick: the full playbook — estimating, scheduling, contracts, safety. Run the job like a pro.",
    price: "$200.00",
    img: "assets/aff-construction-pm.jpg",
    url: "https://www.amazon.com/dp/0132877244?tag=rendelivers-20"
  },
  {
    id: "aff-jobsite-mgmt",
    section: "software",
    sub: "BOOKS",
    name: "Construction Jobsite Management, 4th Edition",
    tagline: "Ren's pick: the day-to-day of running a jobsite — documentation, scheduling, coordination. For the one in charge.",
    price: "$65.71",
    img: "assets/aff-jobsite-mgmt.jpg",
    url: "https://www.amazon.com/dp/130508179X?tag=rendelivers-20"
  },
  {
    id: "aff-commercial-construction",
    section: "software",
    sub: "BOOKS",
    name: "Principles and Practices of Commercial Construction, 10th Edition",
    tagline: "Ren's pick: commercial building methods, materials, and systems. The textbook behind the license exam.",
    price: "$215.32",
    img: "assets/aff-commercial-construction.jpg",
    url: "https://www.amazon.com/dp/0134704665?tag=rendelivers-20"
  },
  {
    id: "aff-nrca-roofing",
    section: "software",
    sub: "BOOKS",
    name: "The NRCA Roofing Manual: Steep-slope Roof Systems, 2021",
    tagline: "Ren's pick: the roofing industry's authoritative manual — installation, materials, best practices. From the NRCA itself.",
    price: "$209.99",
    img: "assets/aff-nrca-roofing.jpg",
    url: "https://www.amazon.com/dp/B00BBX15ZE?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m12-press-tool",
    section: "plumbing",
    sub: "PRESS",
    name: "Milwaukee 2473-22 M12 Force Logic Press Tool Kit",
    tagline: "Ren's pick: press 1/2 in. to 1 in. copper without a flame. The future of not burning the house down.",
    price: "$2,945.00",
    img: "assets/aff-milw-m12-press-tool.jpg",
    url: "https://www.amazon.com/dp/B009G48D3M?tag=rendelivers-20"
  },
  {
    id: "aff-bernzomatic-ts8000-torch",
    section: "plumbing",
    sub: "SOLDERING",
    name: "Bernzomatic TS8000 High Intensity Trigger Start Torch",
    tagline: "Ren's pick: trigger-start, swirl flame, burns in any direction. A torch, not an iron — like Brandon said.",
    price: "$57.98",
    img: "assets/aff-bernzomatic-ts8000-torch.jpg",
    url: "https://www.amazon.com/dp/B0019CQL60?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m18-press-tool",
    section: "plumbing",
    sub: "PRESS",
    name: "Milwaukee M18 Force Logic Press Tool w/ ONE-KEY",
    tagline: "Ren's pick: 7,200 lbs of press force with ONE-KEY tracking. For when the pipe's bigger than your patience.",
    price: "$2,155.00",
    img: "assets/aff-milw-m18-press-tool.jpg",
    url: "https://www.amazon.com/dp/B08Y8GQY1V?tag=rendelivers-20"
  },
  {
    id: "aff-milw-m18-press-ring",
    section: "plumbing",
    sub: "PRESS",
    name: "Milwaukee 49-16-2690 M18 Press Ring Kit 2-1/2 in.-4 in.",
    tagline: "Ren's pick: rings for the big stuff — 2-1/2 in. to 4 in. copper doesn't press itself.",
    price: "$3,499.99",
    img: "assets/aff-milw-m18-press-ring.jpg",
    url: "https://www.amazon.com/dp/B00A0Z5UIC?tag=rendelivers-20"
  },
  {
    id: "aff-milw-25ft-tape",
    section: "plumbing",
    sub: "MEASURING",
    name: "Milwaukee 48-22-0225 25' Compact Wide Blade Tape Measure",
    tagline: "Ren's pick: 12 feet of standout. For measuring across the room without the sag of shame.",
    price: "$42.71",
    img: "assets/aff-milw-25ft-tape.jpg",
    url: "https://www.amazon.com/dp/B07YKV4Q6Y?tag=rendelivers-20"
  },
  {
    id: "aff-milw-compact-hacksaw",
    section: "plumbing",
    sub: "SAWS",
    name: "Milwaukee 48-22-0012 Compact Hack Saw w/ 10 in. Blade",
    tagline: "Ren's pick: small saw, big attitude. Copper tubing, bolts, PVC — all fair game.",
    price: "$17.97",
    img: "assets/aff-milw-compact-hacksaw.jpg",
    url: "https://www.amazon.com/dp/B003VY8WA2?tag=rendelivers-20"
  },
  {
    id: "aff-milw-pex-tubing-cutter",
    section: "plumbing",
    sub: "PEX",
    name: "Milwaukee 48-22-4202 PEX Tubing Cutter",
    tagline: "Ren's pick: plier-style, stainless blade, cuts PEX like it's not even there.",
    price: "$42.89",
    img: "assets/aff-milw-pex-tubing-cutter.jpg",
    url: "https://www.amazon.com/dp/B00PP3G51U?tag=rendelivers-20"
  },
  {
    id: "aff-milw-cheater-pipe-wrench",
    section: "plumbing",
    sub: "WRENCHES",
    name: "Milwaukee 48-22-7314 CHEATER Adaptable Pipe Wrench",
    tagline: "Ren's pick: one wrench, three lengths. The Swiss Army knife of pipe wrenches.",
    price: "$95.00",
    img: "assets/aff-milw-cheater-pipe-wrench.jpg",
    url: "https://www.amazon.com/dp/B01CRHGIYA?tag=rendelivers-20"
  },
  {
    id: "aff-milw-multitool-m12",
    section: "catalog",
    sub: "Multi-Tools",
    name: "Milwaukee 2526-20 M12 FUEL Oscillating Multi-Tool (Tool Only)",
    tagline: "Ren's pick: 10,000 to 20,000 OPM of cut-sand-scrape everything. The tool that does what the others won't.",
    price: "$109.00",
    img: "assets/aff-milw-multitool-m12.jpg",
    url: "https://www.amazon.com/dp/B08JWL1PBV?tag=rendelivers-20"
  },
  {
    id: "aff-milw-drill-m18",
    section: "catalog",
    sub: "Drills",
    name: "Milwaukee 2804-20 M18 FUEL 1/2 in. Hammer Drill (Tool Only)",
    tagline: "Ren's pick: 1,200 in-lbs of peak torque. Drills through concrete like it's drywall.",
    price: "$175.93",
    img: "assets/aff-milw-drill-m18.jpg",
    url: "https://www.amazon.com/dp/B079NBC7JN?tag=rendelivers-20"
  },
  {
    id: "aff-milw-drill-m12",
    section: "catalog",
    sub: "Drills",
    name: "Milwaukee 3404-20 M12 FUEL 1/2 in. Hammer Drill (Tool Only)",
    tagline: "Ren's pick: the little drill that punches way above its weight class.",
    price: "$87.99",
    img: "assets/aff-milw-drill-m12.jpg",
    url: "https://www.amazon.com/dp/B0BPDKS8SH?tag=rendelivers-20"
  },
  {
    id: "aff-milw-impact-m18",
    section: "catalog",
    sub: "Drivers",
    name: "Milwaukee 2853-20 M18 FUEL 1/4 in. Hex Impact Driver (Tool Only)",
    tagline: "Ren's pick: 2,000 in-lbs in a 4.59 in. body. Screws fear this thing.",
    price: "$126.95",
    img: "assets/aff-milw-impact-m18.jpg",
    url: "https://www.amazon.com/dp/B0BB8H1NKX?tag=rendelivers-20"
  },
  {
    id: "aff-milw-impact-m12",
    section: "catalog",
    sub: "Drivers",
    name: "Milwaukee 2553-20 M12 FUEL 1/4 in. Hex Impact Driver Kit",
    tagline: "Ren's pick: 1,500 in-lbs with 4-mode drive control. Kit comes with battery and bag.",
    price: "$169.38",
    img: "assets/aff-milw-impact-m12.jpg",
    url: "https://www.amazon.com/dp/B0BLT6PSKS?tag=rendelivers-20"
  },
  {
    id: "aff-milw-circsaw-7",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2732-20 M18 FUEL 7-1/4 in. Circular Saw (Tool Only)",
    tagline: "Ren's pick: 5,800 RPM, magnesium shoe, rafter hook. The full-size framing saw, no cord.",
    price: "$339.00",
    img: "assets/aff-milw-circsaw-7.jpg",
    url: "https://www.amazon.com/dp/B079NPMJQ1?tag=rendelivers-20"
  },
  {
    id: "aff-milw-circsaw-6",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2730-21 M18 FUEL 6-1/2 in. Circular Saw Kit",
    tagline: "Ren's pick: the handy-size circ saw with battery and charger. For everything the big saw is overkill for.",
    price: "$375.00",
    img: "assets/aff-milw-circsaw-6.jpg",
    url: "https://www.amazon.com/dp/B00FUQPDYW?tag=rendelivers-20"
  },
  {
    id: "aff-milw-sawzall-fuel",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2722-20 M18 FUEL SAWZALL Recip Saw (Tool Only)",
    tagline: "Ren's pick: 3,000 SPM, 1-1/4 in. stroke. Demolition's favorite power tool.",
    price: "$189.00",
    img: "assets/aff-milw-sawzall-fuel.jpg",
    url: "https://www.amazon.com/dp/B08WG2HC81?tag=rendelivers-20"
  },
  {
    id: "aff-milw-jigsaw",
    section: "catalog",
    sub: "SAWS",
    name: "Milwaukee 2737-20 M18 FUEL D-Handle Jig Saw (Tool Only)",
    tagline: "Ren's pick: 0 to 3,500 SPM with 4-position orbital. Curves so smooth they look laser-cut.",
    price: "$176.99",
    img: "assets/aff-milw-jigsaw.jpg",
    url: "https://www.amazon.com/dp/B07H7DQ3DK?tag=rendelivers-20"
  },
  {
    id: "aff-milw-grinder-fuel",
    section: "catalog",
    sub: "GRINDERS",
    name: "Milwaukee 2880-20 M18 FUEL 4-1/2 / 5 in. Grinder (Tool Only)",
    tagline: "Ren's pick: 8,500 RPM of corded-equivalent fury. No cord, no excuses.",
    price: "$138.99",
    img: "assets/aff-milw-grinder-fuel.jpg",
    url: "https://www.amazon.com/dp/B09RX4R3TR?tag=rendelivers-20"
  },
  {
    id: "aff-milw-grinder-m18",
    section: "catalog",
    sub: "GRINDERS",
    name: "Milwaukee 2680-20 M18 4-1/2 in. Grinder (Tool Only)",
    tagline: "Ren's pick: 9,000 RPM paddle switch with tool-free guard. The workhorse grinder.",
    price: "$165.98",
    img: "assets/aff-milw-grinder-m18.jpg",
    url: "https://www.amazon.com/dp/B001VGOJLI?tag=rendelivers-20"
  },
  {
    id: "aff-milw-diegrinder-m12",
    section: "catalog",
    sub: "GRINDERS",
    name: "Milwaukee 2485-20 M12 FUEL Right Angle Die Grinder (Tool Only)",
    tagline: "Ren's pick: 24,500 RPM in the palm of your hand. For the detail work that matters.",
    price: "$179.55",
    img: "assets/aff-milw-diegrinder-m12.jpg",
    url: "https://www.amazon.com/dp/B0FHH943FJ?tag=rendelivers-20"
  },
  {
    id: "aff-milw-framing-nailer",
    section: "catalog",
    sub: "NAILERS",
    name: "Milwaukee 2744-20 M18 FUEL 21-Degree Framing Nailer (Tool Only)",
    tagline: "Ren's pick: nitrogen gas power, no gas cartridges. Framing at the speed of thought.",
    price: "$897.99",
    img: "assets/aff-milw-framing-nailer.jpg",
    url: "https://www.amazon.com/dp/B0GCYN9MTK?tag=rendelivers-20"
  },
  {
    id: "aff-milw-brad-nailer",
    section: "catalog",
    sub: "NAILERS",
    name: "Milwaukee 2746-20 M18 FUEL 18-Gauge Brad Nailer (Tool Only)",
    tagline: "Ren's pick: zero ramp-up, no gas. Trim work without the compressor symphony.",
    price: "$327.02",
    img: "assets/aff-milw-brad-nailer.jpg",
    url: "https://www.amazon.com/dp/B07VYJQ1KP?tag=rendelivers-20"
  },
  {
    id: "aff-milw-tape-25",
    section: "catalog",
    sub: "MEASURING",
    name: "Milwaukee 48-22-7125 25 ft. Magnetic Tape Measure (2-Pack)",
    tagline: "Ren's pick: magnetic blade that sticks to steel. Two-pack, because tapes are escape artists.",
    price: "$46.99",
    img: "assets/aff-milw-tape-25.jpg",
    url: "https://www.amazon.com/dp/B082YKXKC4?tag=rendelivers-20"
  },
  {
    id: "aff-milw-fastback",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Milwaukee 48-22-1500 FASTBACK Compact Flip Utility Knife",
    tagline: "Ren's pick: press-and-flip one-hand opening. The knife that's always in your pocket.",
    price: "$13.99",
    img: "assets/aff-milw-fastback.jpg",
    url: "https://www.amazon.com/dp/B082KL6HT3?tag=rendelivers-20"
  },
  {
    id: "aff-milw-fastback-6in1",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Milwaukee Fastback 6-in-1 Folding Utility Knife",
    tagline: "Ren's pick: the iconic Fastback, press-and-flip one-handed. Every contractor knows this one.",
    price: "$20.97",
    img: "assets/aff-milw-fastback-6in1.jpg",
    url: "https://www.amazon.com/dp/B09BNMWJH9?tag=rendelivers-20"
  },
  {
    id: "aff-milw-fastback-1502",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Milwaukee 48-22-1502 Fastback Folding Utility Knife with Blade Storage and Gut Hook",
    tagline: "Ren's pick: 5 spare blades onboard, gut hook, wire stripper. The does-everything knife.",
    price: "$20.23",
    img: "assets/aff-milw-fastback-1502.jpg",
    url: "https://www.amazon.com/dp/B00D0YR9A2?tag=rendelivers-20"
  },
  {
    id: "aff-milw-fastback-1540",
    section: "catalog",
    sub: "HANDTOOLS",
    name: "Milwaukee 48-22-1540 Fastback 5-in-1 Folding Knife, Tanto Blade",
    tagline: "Ren's pick: partially serrated tanto, bit holder, bottle opener. The pocket-knife option.",
    price: "$29.75",
    img: "assets/aff-milw-fastback-1540.jpg",
    url: "https://www.amazon.com/dp/B0BZYSTDVG?tag=rendelivers-20"
  },
  {
    id: "aff-redwing-steetoe",
    section: "safety",
    sub: "BOOTS",
    name: "WORX by Red Wing Shoes Men's 5432 8 in. Steel Toe Work Boot",
    tagline: "Ren's pick: Red Wing bloodline, GORE-TEX waterproofing, insulated. The boot that outlasts the job.",
    price: "Add to cart to check price",
    img: "assets/aff-redwing-steetoe.jpg",
    url: "https://www.amazon.com/dp/B0016PACT2?tag=rendelivers-20"
  },
  {
    id: "aff-thorogood-steetoe",
    section: "safety",
    sub: "BOOTS",
    name: "Thorogood American Heritage 6 in. Steel Toe Work Boot",
    tagline: "Ren's pick: full-grain leather moc toe, MAXWear wedge sole. The premium boot that breaks in like a dream.",
    price: "$274.95",
    img: "assets/aff-thorogood-steetoe.jpg",
    url: "https://www.amazon.com/dp/B00623DYVQ?tag=rendelivers-20"
  },
  {
    id: "aff-personal-firstaid",
    section: "safety",
    sub: "FIRST AID",
    name: "First Aid Only 298-Piece Emergency First Aid Kit (Soft Case)",
    tagline: "Ren's pick: 298 pieces in a soft case that fits the truck or tool bag. Because the jobsite bites.",
    price: "$20.04",
    checked: "2026-10-02",
    img: "assets/aff-personal-firstaid.jpg",
    url: "https://www.amazon.com/dp/B000069EYA?tag=rendelivers-20"
  },
  {
    id: "aff-klein-linemans-9",
    section: "electrical",
    sub: "PLIERS",
    name: "Klein Tools D213-9NE 9 in. Lineman's Pliers",
    tagline: "Ren's pick: the lineman's pliers every electrician's grandpa swore by. Cuts ACSR like butter.",
    price: "$39.97",
    img: "assets/aff-klein-linemans-9.jpg",
    url: "https://www.amazon.com/dp/B0000302W6?tag=rendelivers-20"
  },
  {
    id: "aff-klein-diagonal-8",
    section: "electrical",
    sub: "PLIERS",
    name: "Klein Tools D228-8 8 in. Diagonal Cutting Pliers",
    tagline: "Ren's pick: angled-head cutters with induction-hardened knives. Snip first, ask questions never.",
    price: "$29.97",
    img: "assets/aff-klein-diagonal-8.jpg",
    url: "https://www.amazon.com/dp/B0000302VW?tag=rendelivers-20"
  },
  {
    id: "aff-klein-longnose-8",
    section: "electrical",
    sub: "PLIERS",
    name: "Klein Tools J203-8N 8 in. Long-Nose Side Cutters",
    tagline: "Ren's pick: Journeyman long-nose that strips, bends, and reaches where fingers can't.",
    price: "$38.98",
    img: "assets/aff-klein-longnose-8.jpg",
    url: "https://www.amazon.com/dp/B0006M6Y9I?tag=rendelivers-20"
  },
  {
    id: "aff-klein-stripper-11045",
    section: "electrical",
    sub: "STRIPPERS",
    name: "Klein Tools 11045 Wire Stripper/Cutter 10-18 AWG",
    tagline: "Ren's pick: self-adjusting stripper — strips 10-18 AWG without nicking a single strand.",
    price: "$16.24",
    img: "assets/aff-klein-stripper-11045.jpg",
    url: "https://www.amazon.com/dp/B0000302WS?tag=rendelivers-20"
  },
  {
    id: "aff-klein-katapult",
    section: "electrical",
    sub: "STRIPPERS",
    name: "Klein Tools 11063W Katapult Wire Stripper",
    tagline: "Ren's pick: compound action, cast alloy body. Strips 8-22 AWG like it's launching wire.",
    price: "$30.97",
    img: "assets/aff-klein-katapult.jpg",
    url: "https://www.amazon.com/dp/B00BC39YFQ?tag=rendelivers-20"
  },
  {
    id: "aff-klein-plier-set-3pc",
    section: "electrical",
    sub: "PLIERS",
    name: "Klein Tools 80020 3-Piece Plier Tool Set",
    tagline: "Ren's pick: lineman's, diagonal, and long-nose in one shot. The holy trinity of pliers.",
    price: "$71.99",
    img: "assets/aff-klein-plier-set-3pc.jpg",
    url: "https://www.amazon.com/dp/B08VWHVZ1P?tag=rendelivers-20"
  },
  {
    id: "aff-klein-crimper-pliers",
    section: "electrical",
    sub: "PLIERS",
    name: "Klein Tools D213-9NE-CR Lineman's Crimping Pliers",
    tagline: "Ren's pick: lineman's pliers with a built-in crimper. Two tools, one grip.",
    price: "$39.97",
    img: "assets/aff-klein-crimper-pliers.jpg",
    url: "https://www.amazon.com/dp/B000CEMSLS?tag=rendelivers-20"
  },
  {
    id: "aff-klein-stripper-11049",
    section: "electrical",
    sub: "STRIPPERS",
    name: "Klein Tools 11049 Wire Stripper/Cutter, 8-16 AWG Stranded",
    tagline: "Ren's pick: for the big stuff — 8-16 AWG stranded, spring-loaded with red handles. (11047 unavailable.)",
    price: "$16.97",
    checked: "2026-10-05",
    img: "assets/aff-klein-stripper-11049.jpg",
    url: "https://www.amazon.com/dp/B0002RI4U4?tag=rendelivers-20"
  },
  {
    id: "aff-klein-kurve-11055",
    section: "electrical",
    sub: "STRIPPERS",
    name: "Klein Tools 11055 Kurve Wire Stripper/Cutter",
    tagline: "Ren's pick: double-dipped grips, curved for comfort. 10-18 AWG's worst enemy.",
    price: "$20.99",
    img: "assets/aff-klein-kurve-11055.jpg",
    url: "https://www.amazon.com/dp/B00080DPNQ?tag=rendelivers-20"
  },
  {
    id: "aff-klein-11046",
    section: "electrical",
    sub: "STRIPPERS",
    name: "Klein Tools 11046 Wire Stripper/Cutter, 16-26 AWG Stranded",
    tagline: "Ren's pick: for the fine stuff — 16-26 AWG stranded stripped clean without a nick.",
    price: "$16.24",
    checked: "2026-10-05",
    img: "assets/aff-klein-11046.jpg",
    url: "https://www.amazon.com/dp/B0000302WS?tag=rendelivers-20"
  },
  {
    id: "aff-klein-ncvt-2",
    section: "electrical",
    sub: "TESTERS",
    name: "Klein Tools NCVT-2 Dual-Range Voltage Tester",
    tagline: "Ren's pick: non-contact, dual range 12-1000V. Because guessing about live wires is a bad hobby.",
    price: "$27.97",
    img: "assets/aff-klein-ncvt-2.jpg",
    url: "https://www.amazon.com/dp/B004FXJOQO?tag=rendelivers-20"
  },
  {
    id: "aff-klein-ncvt-2p",
    section: "electrical",
    sub: "TESTERS",
    name: "Klein Tools NCVT-2P Dual-Range Voltage Tester w/ Flashing LED",
    tagline: "Ren's pick: the newer NCVT-2P — dual range with a flashing LED bar. The NCVT-2's sharper younger brother.",
    price: "$27.97",
    img: "assets/aff-klein-ncvt-2p.jpg",
    url: "https://www.amazon.com/dp/B07L5N8ZWS?tag=rendelivers-20"
  },
  {
    id: "aff-klein-crimper-1005",
    section: "electrical",
    sub: "PLIERS",
    name: "Klein Tools 1005 Cutting/Crimping Tool",
    tagline: "Ren's pick: Journeyman crimper for 10-22 AWG terminals. Crimps that hold like they mean it.",
    price: "$29.97",
    img: "assets/aff-klein-crimper-1005.jpg",
    url: "https://www.amazon.com/dp/B0006M6Y5M?tag=rendelivers-20"
  },
  {
    id: "aff-klein-mm420",
    section: "electrical",
    sub: "METERS",
    name: "Klein Tools MM420 Auto-Ranging Multimeter 600V",
    tagline: "Ren's pick: TRMS, auto-ranging, measures everything including temperature. The meter that does it all.",
    price: "$64.37",
    img: "assets/aff-klein-mm420.jpg",
    url: "https://www.amazon.com/dp/B0B57PFFYX?tag=rendelivers-20"
  },
  {
    id: "aff-klein-rt210",
    section: "electrical",
    sub: "TESTERS",
    name: "Klein Tools RT210 GFCI Receptacle Tester",
    tagline: "Ren's pick: plug it in, know instantly if the outlet's wired right. GFCI test built in.",
    price: "$13.98",
    img: "assets/aff-klein-rt210.jpg",
    url: "https://www.amazon.com/dp/B01AKX8L0M?tag=rendelivers-20"
  },
  {
    id: "aff-klein-fishtape-50",
    section: "electrical",
    sub: "FISHING",
    name: "Klein Tools 56001 50 ft. Steel Fish Tape",
    tagline: "Ren's pick: 50 feet of spring steel with laser-etched markings. Pulls wire through anything.",
    price: "See options",
    img: "assets/aff-klein-fishtape-50.jpg",
    url: "https://www.amazon.com/dp/B0026TA6RK?tag=rendelivers-20"
  },
  {
    id: "aff-klein-glowrod-30",
    section: "electrical",
    sub: "FISHING",
    name: "Klein Tools 56430 30 ft. Glow Fish Rod Set",
    tagline: "Ren's pick: six glow rods that light up dark walls. Fishing wire just got fun.",
    price: "$94.99",
    img: "assets/aff-klein-glowrod-30.jpg",
    url: "https://www.amazon.com/dp/B01N23C683?tag=rendelivers-20"
  },
  {
    id: "aff-klein-nutdriver-2pc",
    section: "electrical",
    sub: "DRIVERS",
    name: "Klein Tools 646M 2-Piece Magnetic Nut Driver Set",
    tagline: "Ren's pick: stubby magnetic nut drivers, 1/4 and 5/16 in. Fits where full-size can't.",
    price: "$26.99",
    img: "assets/aff-klein-nutdriver-2pc.jpg",
    url: "https://www.amazon.com/dp/B000936QV0?tag=rendelivers-20"
  },
  {
    id: "aff-klein-cablecutter",
    section: "electrical",
    sub: "CUTTERS",
    name: "Klein Tools 63050 9.5 in. High-Leverage Cable Cutter",
    tagline: "Ren's pick: shear-action cutter for cable up to 1/0 AWG. Cuts like scissors through paper.",
    price: "$29.98",
    img: "assets/aff-klein-cablecutter.jpg",
    url: "https://www.amazon.com/dp/B0000302X1?tag=rendelivers-20"
  },
  {
    id: "aff-klein-backpack",
    section: "electrical",
    sub: "BAGS",
    name: "Klein Tools 55421BP-14 Tradesman Pro Backpack",
    tagline: "Ren's pick: 39 pockets, molded base, fits laptop and meters. The electrician's office.",
    price: "$109.98",
    img: "assets/aff-klein-backpack.jpg",
    url: "https://www.amazon.com/dp/B006QG36NA?tag=rendelivers-20"
  },
  {
    id: "aff-klein-magnetizer-80038",
    section: "electrical",
    sub: "ACCESSORIES",
    name: "Klein Tools 4-Piece Backpack Tool Kit",
    tagline: "Ren's pick: backpack, two zipper bags, and the magnetizer/demagnetizer. The whole Klein carry in one shot.",
    price: "$109.99",
    img: "assets/aff-klein-magnetizer-80038.jpg",
    url: "https://www.amazon.com/dp/B098MR874X?tag=rendelivers-20"
  },
  {
    id: "aff-klein-headlamp",
    section: "electrical",
    sub: "LIGHTING",
    name: "Klein Tools 56062 Rechargeable LED Headlamp",
    tagline: "Ren's pick: 300 lumens on your hard hat, USB-C rechargeable. See what you're doing.",
    price: "$29.97",
    img: "assets/aff-klein-headlamp.jpg",
    url: "https://www.amazon.com/dp/B089CHFBL3?tag=rendelivers-20"
  },
  {
    id: "aff-klein-screwdriver-set-85148",
    section: "electrical",
    sub: "DRIVERS",
    name: "Klein Tools 85148 8-Piece Screwdriver Set",
    tagline: "Ren's pick: USA-made cushion-grip drivers with magnetizer. The set that never leaves the truck.",
    price: "$66.99",
    img: "assets/aff-klein-screwdriver-set-85148.jpg",
    url: "https://www.amazon.com/dp/B07W7VCQK3?tag=rendelivers-20"
  },
  {
    id: "aff-klein-bender-51607",
    section: "electrical",
    sub: "BENDERS",
    name: "Klein Tools 51607 Aluminum Conduit Bender, 3/4 in. EMT",
    tagline: "Ren's pick: aluminum head with Angle Setter — 3/4 in. EMT bends clean every time.",
    price: "$44.98",
    checked: "2026-10-05",
    img: "assets/aff-klein-bender-51607.jpg",
    url: "https://www.amazon.com/dp/B08L41G5G5?tag=rendelivers-20"
  },
  {
    id: "aff-klein-tape-9225",
    section: "electrical",
    sub: "METERS",
    name: "Klein Tools 9225 25 ft. Tape Measure",
    tagline: "Ren's pick: double-hook magnetic tape with 13 ft. standout. Sticks to conduit, measures true.",
    price: "$29.98",
    img: "assets/aff-klein-tape-9225.jpg",
    url: "https://www.amazon.com/dp/B07WF9TKNN?tag=rendelivers-20"
  },
  {
    id: "aff-klein-torpedo-level",
    section: "electrical",
    sub: "METERS",
    name: "Klein Tools 935RBLT 9 in. Lighted Torpedo Level",
    tagline: "Ren's pick: LED-lit vials you can actually read in a dark panel. Billet aluminum, rare-earth magnets.",
    price: "$37.96",
    img: "assets/aff-klein-torpedo-level.jpg",
    url: "https://www.amazon.com/dp/B01M3YMNY5?tag=rendelivers-20"
  },
  {
    id: "aff-klein-clampmeter-cl120",
    section: "electrical",
    sub: "METERS",
    name: "Klein Tools CL120 400A Auto-Ranging Clamp Meter",
    tagline: "Ren's pick: auto-ranging 400A clamp meter, TRMS. The everyday sparky's meter.",
    price: "$63.98",
    img: "assets/aff-klein-clampmeter-cl120.jpg",
    url: "https://www.amazon.com/dp/B08CP6GL49?tag=rendelivers-20"
  },
  {
    id: "aff-klein-clampmeter-cl320",
    section: "electrical",
    sub: "METERS",
    name: "Klein Tools CL320 400A Auto-Ranging Clamp Meter",
    tagline: "Ren's pick: auto-ranging 400A with DC microamps — the step-up meter for serious troubleshooting.",
    price: "$96.00",
    img: "assets/aff-klein-clampmeter-cl320.jpg",
    url: "https://www.amazon.com/dp/B08DDTV5KG?tag=rendelivers-20"
  },
  {
    id: "aff-klein-ncvt-1",
    section: "electrical",
    sub: "TESTERS",
    name: "Klein Tools NCVT1P Voltage Tester Pen",
    tagline: "Ren's pick: the pen tester that's #1 for a reason. 50-1000V, fits in a shirt pocket.",
    price: "$19.95",
    img: "assets/aff-klein-ncvt-1.jpg",
    url: "https://www.amazon.com/dp/B099SJ6469?tag=rendelivers-20"
  },
  {
    id: "aff-klein-multitool-32500",
    section: "electrical",
    sub: "DRIVERS",
    name: "Klein Tools 32500 11-in-1 Screwdriver/Nut Driver",
    tagline: "Ren's pick: 11 tools in one cushion grip. The 'I only brought one tool' tool.",
    price: "$15.97",
    img: "assets/aff-klein-multitool-32500.jpg",
    url: "https://www.amazon.com/dp/B0015SBILG?tag=rendelivers-20"
  },
  {
    id: "aff-klein-fishtape-56331",
    section: "electrical",
    sub: "FISHING",
    name: "Klein Tools 56331 50 ft. Steel Fish Tape",
    tagline: "Ren's pick: low-friction housing, double-loop tip. The fish tape that doesn't fight back.",
    price: "$25.97",
    img: "assets/aff-klein-fishtape-56331.jpg",
    url: "https://www.amazon.com/dp/B081TVR4N7?tag=rendelivers-20"
  },
  {
    id: "aff-klein-worklight-56403",
    section: "electrical",
    sub: "LIGHTING",
    name: "Klein Tools 56403 Rechargeable LED Work Light",
    tagline: "Ren's pick: 460 lumens with kickstand, magnet, and carabiner. Also charges your phone.",
    price: "$49.97",
    img: "assets/aff-klein-worklight-56403.jpg",
    url: "https://www.amazon.com/dp/B07V4FTX6C?tag=rendelivers-20"
  },
  {
    id: "aff-husky-15bag",
    section: "catalog",
    sub: "TOOL BAGS",
    name: "Husky 15 in. Water-Resistant Tool Bag",
    tagline: "Ren's pick: water-resistant 15-incher that swallows a full kit. Tough enough for the truck bed.",
    price: "$39.96",
    img: "assets/aff-husky-15bag.jpg",
    url: "https://www.amazon.com/dp/B00KYZ12L2?tag=rendelivers-20"
  },
  {
    id: "aff-clc-1132-backpack",
    section: "catalog",
    sub: "TOOL BAGS",
    name: "CLC Custom Leathercraft 1132 75-Pocket Tool Backpack",
    tagline: "Ren's pick: 75 pockets of heavy-duty organization. The backpack that carries the whole shop.",
    price: "$160.69",
    img: "assets/aff-clc-1132-backpack.jpg",
    url: "https://www.amazon.com/dp/B0000DYVCY?tag=rendelivers-20"
  },
  {
    id: "aff-veto-techpac",
    section: "catalog",
    sub: "TOOL BAGS",
    name: "Veto Pro Pac TECH-PAC Tool Backpack",
    tagline: "Ren's pick: the premium tech backpack. Waterproof molded base, 56 pockets, zero regrets.",
    price: "$314.95",
    img: "assets/aff-veto-techpac.jpg",
    url: "https://www.amazon.com/dp/B00DYQLXHG?tag=rendelivers-20"
  },
  {
    id: "aff-veto-spmc",
    section: "catalog",
    sub: "TOOL BAGS",
    name: "Veto Pro Pac SP-MC Compact Service Tech Pouch",
    tagline: "Ren's pick: compact closed-top service pouch. Premium quality for the grab-and-go jobs.",
    price: "$169.95",
    img: "assets/aff-veto-spmc.jpg",
    url: "https://www.amazon.com/dp/B0F15N1T1F?tag=rendelivers-20"
  },
  {
    id: "aff-milw-packout-roller",
    section: "catalog",
    sub: "PACKOUT",
    name: "Milwaukee PACKOUT Rolling Tool Box 48-22-8426",
    tagline: "Ren's pick: the flagship mobile base. 250-lb capacity on all-terrain wheels.",
    price: "$189.00",
    img: "assets/aff-milw-packout-roller.jpg",
    url: "https://www.amazon.com/dp/B076QLC84N?tag=rendelivers-20"
  },
  {
    id: "aff-milw-packout-large",
    section: "catalog",
    sub: "PACKOUT",
    name: "Milwaukee PACKOUT Large Tool Box 48-22-8425",
    tagline: "Ren's pick: large stackable box, IP65 weather seal. Your tools stay dry, period.",
    price: "$89.00",
    img: "assets/aff-milw-packout-large.jpg",
    url: "https://www.amazon.com/dp/B0776MCYM8?tag=rendelivers-20"
  },
  {
    id: "aff-milw-packout-compact",
    section: "catalog",
    sub: "PACKOUT",
    name: "Milwaukee PACKOUT Compact Tool Box 48-22-8424",
    tagline: "Ren's pick: the everyday-carry size. 75-lb capacity with organizer tray.",
    price: "$89.97",
    img: "assets/aff-milw-packout-compact.jpg",
    url: "https://www.amazon.com/dp/B0776KX6LV?tag=rendelivers-20"
  },
  {
    id: "aff-milw-packout-crate",
    section: "catalog",
    sub: "PACKOUT",
    name: "Milwaukee PACKOUT Crate 48-22-8440",
    tagline: "Ren's pick: open-top crate that stacks or hangs. For the stuff that doesn't fit in boxes.",
    price: "$75.52",
    img: "assets/aff-milw-packout-crate.jpg",
    url: "https://www.amazon.com/dp/B0FP8RNH67?tag=rendelivers-20"
  },
  {
    id: "aff-milw-packout-mountplate",
    section: "catalog",
    sub: "PACKOUT",
    name: "Milwaukee PACKOUT Mounting Plate 48-22-8485",
    tagline: "Ren's pick: bolt your PACKOUT stack to the truck or trailer. Stays put on rough roads.",
    price: "$54.45",
    img: "assets/aff-milw-packout-mountplate.jpg",
    url: "https://www.amazon.com/dp/B0BXRSPGFH?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-ts2-drawer",
    section: "catalog",
    sub: "PACKOUT",
    name: "DEWALT ToughSystem 2.0 Two-Drawer Unit DWST08320",
    tagline: "Ren's pick: DeWalt's stackable drawer unit with ball-bearing slides. Small parts, big organization.",
    price: "$146.89",
    img: "assets/aff-dewalt-ts2-drawer.jpg",
    url: "https://www.amazon.com/dp/B09ZF42M1V?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-ts2-shallow-organizer",
    section: "catalog",
    sub: "PACKOUT",
    name: "DEWALT ToughSystem 2.0 Shallow Organizer",
    tagline: "Ren's pick: 10-compartment shallow organizer for screws, bits, and fittings. Clicks into the stack.",
    price: "$33.50",
    img: "assets/aff-dewalt-ts2-shallow-organizer.jpg",
    url: "https://www.amazon.com/dp/B0799RHJ7W?tag=rendelivers-20"
  },
  {
    id: "aff-dewalt-ts2-rolling",
    section: "catalog",
    sub: "PACKOUT",
    name: "DEWALT ToughSystem 2.0 Mobile Storage DWST08450",
    tagline: "Ren's pick: DeWalt's rolling base with 8 in. all-terrain wheels. 250 lbs of mobile storage.",
    price: "$125.00",
    img: "assets/aff-dewalt-ts2-rolling.jpg",
    url: "https://www.amazon.com/dp/B08D3FCDH5?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-dewalt-dcf620b",
    section: "drywall",
    sub: "SCREWGUNS",
    name: "DEWALT 20V MAX XR Drywall Screwgun, Bare (DCF620B)",
    tagline: "Ren's pick: 4,400 RPM of screw-sinking fury. Your wrist will thank you; your apprentice won't.",
    price: "$397.00",
    img: "assets/aff-drywall-dewalt-dcf620b.jpg",
    url: "https://www.amazon.com/dp/B00U0RXGM2?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-dewalt-dcf624b",
    section: "drywall",
    sub: "SCREWGUNS",
    name: "DEWALT 20V MAX XR Screwgun w/ Threaded Clutch (DCF624B)",
    tagline: "Ren's pick: threaded clutch housing plays nice with collated strips. Screws on autopilot.",
    price: "$138.20",
    img: "assets/aff-drywall-dewalt-dcf624b.jpg",
    url: "https://www.amazon.com/dp/B082G34GWX?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-milwaukee-2866-20",
    section: "drywall",
    sub: "SCREWGUNS",
    name: "Milwaukee M18 FUEL Drywall Screw Gun, Bare (2866-20)",
    tagline: "Ren's pick: auto-start means the motor only runs when it's biting drywall. Quieter, longer, meaner.",
    price: "$169.80",
    img: "assets/aff-drywall-milwaukee-2866-20.png",
    url: "https://www.amazon.com/dp/B01M1UQ7NJ?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-dewalt-dcs551b",
    section: "drywall",
    sub: "CUT-OUT",
    name: "DEWALT 20V MAX Drywall Cut-Out Tool, Bare (DCS551B)",
    tagline: "Ren's pick: 26,000 RPM of 'oops, there's the outlet box.' Cuts holes faster than you can mark them.",
    price: "Add to cart to check price",
    img: "assets/aff-drywall-dewalt-dcs551b.jpg",
    url: "https://www.amazon.com/dp/B00KYNW7MC?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-milwaukee-2627-20",
    section: "drywall",
    sub: "CUT-OUT",
    name: "Milwaukee M18 Cut Out Tool, Bare (2627-20)",
    tagline: "Ren's pick: 28,000 RPM spiral saw that laughs at outlet boxes. The red one, obviously.",
    price: "$109.00",
    img: "assets/aff-drywall-milwaukee-2627-20.jpg",
    url: "https://www.amazon.com/dp/B01LXYP94D?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-dewalt-dce800b",
    section: "drywall",
    sub: "SANDERS",
    name: "DEWALT 20V MAX Cordless Drywall Sander, Bare (DCE800B)",
    tagline: "Ren's pick: cordless sander with a telescoping neck. Ceilings just got a lot less miserable.",
    price: "$460.00",
    img: "assets/aff-drywall-dewalt-dce800b.jpg",
    url: "https://www.amazon.com/dp/B08XN7R1B8?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-wen-6369",
    section: "drywall",
    sub: "SANDERS",
    name: "WEN Variable Speed Drywall Sander w/ 15 ft. Hose (6369)",
    tagline: "Ren's pick: the budget pole sander drywallers actually swear by. 15-foot dust hose included.",
    price: "$143.19",
    img: "assets/aff-drywall-wen-6369.jpg",
    url: "https://www.amazon.com/dp/B01HRL9XYI?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-rovibek-lift",
    section: "drywall",
    sub: "LIFTS",
    name: "Rovibek 11ft Drywall Lift, Sheetrock Hoist for Ceiling, 360° Adjustable, 150lbs Heavy Duty (Red)",
    tagline: "Hang ceilings solo. 11 feet of 'I don't need a helper.'",
    price: "$175.99",
    img: "assets/aff-drywall-rovibek-lift.jpg",
    url: "https://www.amazon.com/dp/B0HGM5LSMX?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-zunder-banjo",
    section: "drywall",
    sub: "TAPING",
    name: "ZUNDER by Delko Tools Drywall Banjo (DT-AHZ)",
    tagline: "Ren's pick: mud and tape in one pass, flats AND inside corners. The world's best-selling banjo for a reason.",
    price: "$119.00",
    img: "assets/aff-drywall-zunder-banjo.jpg",
    url: "https://www.amazon.com/dp/B076KNF874?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-level5-5430c",
    section: "drywall",
    sub: "TAPING",
    name: "LEVEL5 Composite Skimming Blade Combo 16 in. (5-430C)",
    tagline: "Ren's pick: 16 inches of skim-coat justice on an extendable handle. Lap marks don't stand a chance.",
    price: "$145.75",
    img: "assets/aff-drywall-level5-5430c.jpg",
    url: "https://www.amazon.com/dp/B0BW48YB4G?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-level5-4760",
    section: "drywall",
    sub: "TAPING",
    name: "LEVEL5 Automatic Drywall Taper (4-760)",
    tagline: "Ren's pick: automatic taper — mud and tape fly on in one pass. This is how the pros get fast.",
    price: "$1,299.99",
    img: "assets/aff-drywall-level5-4760.jpg",
    url: "https://www.amazon.com/dp/B07DK3N3XD?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-surpro-s1",
    section: "drywall",
    sub: "STILTS",
    name: "SurPro S1 Aluminum Drywall Stilts, 26-40 in.",
    tagline: "Ren's pick: 26 to 40 inches of adjustable stilts. Ceilings without the ladder dance.",
    price: "$366.00",
    img: "assets/aff-drywall-surpro-s1.jpg",
    url: "https://www.amazon.com/dp/B0D956KSKK?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-dewalt-dce555b",
    section: "drywall",
    sub: "CUT-OUT",
    name: "DEWALT 20V MAX XR Brushless Drywall Cut-Out Tool (DCE555B)",
    tagline: "Ren's pick: brushless cut-out tool. The DCS551's bigger, angrier brother.",
    price: "$105.99",
    img: "assets/aff-drywall-dewalt-dce555b.jpg",
    url: "https://www.amazon.com/dp/B0BFJJV95V?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-hyde-09170",
    section: "drywall",
    sub: "SANDERS",
    name: "Hyde 09170 Dust-Free Vacuum Sander Kit",
    tagline: "Ren's pick: hooks to your shop vac and eats 95% of the dust. Your lungs called — they approve.",
    price: "$46.39",
    img: "assets/aff-drywall-hyde-09170.jpg",
    url: "https://www.amazon.com/dp/B000M2WSHY?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-level5-4650",
    section: "drywall",
    sub: "TAPING",
    name: "LEVEL5 Semi-Auto Taping Set w/ Banjo & Flat Boxes (4-650)",
    tagline: "Ren's pick: banjo, flat boxes, corner roller, the works. The semi-auto starter kit for finishers.",
    price: "$1,665.92",
    img: "assets/aff-drywall-level5-4650.jpg",
    url: "https://www.amazon.com/dp/B0BZBJFKPY?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-dura-stilts",
    section: "drywall",
    sub: "STILTS",
    name: "Dura-Stilts Deluxe III Drywall Stilts 24-40 in.",
    tagline: "Ren's pick: the original. Replaceable parts, lasts a lifetime, the stilt other stilts wish they were.",
    price: "$420.00",
    img: "assets/aff-drywall-dura-stilts.jpg",
    url: "https://www.amazon.com/dp/B00169V8D2?tag=rendelivers-20"
  },
  {
    id: "aff-drywall-pentagon-stilts",
    section: "drywall",
    sub: "STILTS",
    name: "Pentagon Tool Professional Drywall Stilts 24-40 in.",
    tagline: "Ren's pick: dual-spring aluminum stilts at a working man's price. 228-lb capacity.",
    price: "$139.71",
    img: "assets/aff-drywall-pentagon-stilts.jpg",
    url: "https://www.amazon.com/dp/B001R51V3C?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-husqvarna-z254",
    section: "lawn",
    sub: "MOWERS",
    name: "Husqvarna Z254 (54\") 24HP Briggs Zero Turn Lawn Mower",
    tagline: "54 inches of 'your neighbor's jealousy.' Sit down, grab the sticks, and mow like you own the subdivision.",
    price: "Add to cart to check price",
    img: "assets/aff-lawn-husqvarna-z254.jpg",
    url: "https://www.amazon.com/dp/B0F5CM5NCP?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-ariens-ikon",
    section: "lawn",
    sub: "MOWERS",
    name: "Ariens IKON (52\") 23HP Kawasaki Zero Turn Mower",
    tagline: "Kawasaki heart, 52-inch appetite. This thing eats lawns the way you eat gas-station burritos.",
    price: "Add to cart to check price",
    img: "assets/aff-lawn-ariens-ikon.jpg",
    url: "https://www.amazon.com/dp/B0BVSQ13DL?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-ariens-ikon-onyx",
    section: "lawn",
    sub: "MOWERS",
    name: "Ariens IKON Onyx (52\") 23HP Kawasaki Zero Turn Mower",
    tagline: "The murder-black IKON. Looks mean, cuts meaner. Your grass just filed a restraining order.",
    price: "Add to cart to check price",
    img: "assets/aff-lawn-ariens-ikon-onyx.jpg",
    url: "https://www.amazon.com/dp/B0C956GVSB?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-echo-srm225",
    section: "lawn",
    sub: "TRIMMERS",
    name: "ECHO SRM-225 21.2cc Straight Shaft String Trimmer",
    tagline: "The weed eater every pro crew has zip-tied to the trailer. Starts easy, runs forever, takes abuse like a champ.",
    price: "Add to cart to check price",
    img: "assets/aff-lawn-echo-srm225.jpg",
    url: "https://www.amazon.com/dp/B005UPNR5A?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-echo-xseries-trimmer",
    section: "lawn",
    sub: "TRIMMERS",
    name: "ECHO X Series 30.5cc Pro-Grade Gas String Trimmer",
    tagline: "Ren's pick: pro-grade 30.5cc power. The trimmer that eats brush for breakfast.",
    price: "$549.99",
    img: "assets/aff-lawn-echo-xseries-trimmer.jpg",
    url: "https://www.amazon.com/dp/B07ST24Y7J?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-husqvarna-128ld",
    section: "lawn",
    sub: "TRIMMERS",
    name: "Husqvarna 128LD 28cc Gas String Trimmer",
    tagline: "28cc of detachable-shaft versatility. Pops apart for the truck bed, snaps together when it's time to make money.",
    price: "$279.00",
    img: "assets/aff-lawn-husqvarna-128ld.jpg",
    url: "https://www.amazon.com/dp/B004Q0HUYO?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-milwaukee-m18-trimmer",
    section: "lawn",
    sub: "TRIMMERS",
    name: "Milwaukee 2825-20ST M18 FUEL String Trimmer with QUIK-LOK (Tool Only)",
    tagline: "No gas, no mixing, no pull-cord tantrums. Just Milwaukee red ripping through weeds on battery power.",
    price: "$284.00",
    img: "assets/aff-lawn-milwaukee-m18-trimmer.jpg",
    url: "https://www.amazon.com/dp/B09TFZHKHN?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-echo-pb580t",
    section: "lawn",
    sub: "BLOWERS",
    name: "ECHO PB-580T 58.2cc Backpack Blower with Tube Throttle",
    tagline: "510 CFM of leaf-eviction notice. Strap it on, point the tube, and watch the whole yard relocate.",
    price: "Add to cart to check price",
    img: "assets/aff-lawn-echo-pb580t.jpg",
    url: "https://www.amazon.com/dp/B01LWEHD5J?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-husqvarna-150bt",
    section: "lawn",
    sub: "BLOWERS",
    name: "Husqvarna 150BT 51cc Backpack Blower",
    tagline: "765 CFM hurricane in a backpack. Wet leaves, pine needles, your kid's toys — everything's leaving today.",
    price: "$399.00",
    img: "assets/aff-lawn-husqvarna-150bt.jpg",
    url: "https://www.amazon.com/dp/B09TT5ZMPR?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-echo-pb2620",
    section: "lawn",
    sub: "BLOWERS",
    name: "ECHO PB-2620 X Series Handheld Blower, 25.4cc",
    tagline: "Pro-grade lungs in a handheld. For when the job's too small for the backpack but too big for your patience.",
    price: "$249.00",
    img: "assets/aff-lawn-echo-pb2620.jpg",
    url: "https://www.amazon.com/dp/B07KGG9QZW?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-echo-pe225",
    section: "lawn",
    sub: "EDGERS & HEDGE",
    name: "ECHO PE-225 Gas Powered Edger",
    tagline: "Crisp sidewalk lines that make the whole street look broke by comparison. 21.2cc of curb appeal.",
    price: "$319.00",
    img: "assets/aff-lawn-echo-pe225.jpg",
    url: "https://www.amazon.com/dp/B0DTV545V9?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-dewalt-hedge",
    section: "lawn",
    sub: "EDGERS & HEDGE",
    name: "DEWALT 20V MAX Cordless Hedge Trimmer, 22\" (DCHT820B, Tool Only)",
    tagline: "Laser-cut blades, zero gas smell. Sculpt bushes like a topiary artist who drinks energy drinks.",
    price: "$211.46",
    img: "assets/aff-lawn-dewalt-hedge.jpg",
    url: "https://www.amazon.com/dp/B01BSURQXO?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-husqvarna-455",
    section: "lawn",
    sub: "CHAINSAWS",
    name: "Husqvarna 455 Rancher Gas Chainsaw, 55cc, 20\"",
    tagline: "The Rancher. 55cc of tree-dropping authority. Firewood season just became your favorite season.",
    price: "$589.99",
    img: "assets/aff-lawn-husqvarna-455.jpg",
    url: "https://www.amazon.com/dp/B0BRNRL6NQ?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-husqvarna-445",
    section: "lawn",
    sub: "CHAINSAWS",
    name: "Husqvarna 445 Gas Chainsaw, 50cc, 18\"",
    tagline: "The 455's little brother with the same attitude. 18 inches of 'that limb had it coming.'",
    price: "$423.84",
    img: "assets/aff-lawn-husqvarna-445.jpg",
    url: "https://www.amazon.com/dp/B0BRNT5C77?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-chapin-61900",
    section: "lawn",
    sub: "SPRAYERS & SPREADERS",
    name: "Chapin 61900 4-Gallon Tree & Turf Pro Commercial Backpack Sprayer",
    tagline: "Made in the USA, sprays like it means it. Weeds see this backpack and start writing their wills.",
    price: "$134.99",
    img: "assets/aff-lawn-chapin-61900.jpg",
    url: "https://www.amazon.com/dp/B001FA09S2?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-scotts-spreader",
    section: "lawn",
    sub: "SPRAYERS & SPREADERS",
    name: "Scotts Turf Builder EdgeGuard DLX Broadcast Spreader",
    tagline: "15,000 sq ft of even coverage and EdgeGuard keeps it off the driveway. Your lawn's about to get a promotion.",
    price: "$94.97",
    img: "assets/aff-lawn-scotts-spreader.jpg",
    url: "https://www.amazon.com/dp/B001H1EQO2?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-billygoat-pr550",
    section: "lawn",
    sub: "THATCHERS",
    name: "Billy Goat PR550H Power Rake Dethatcher, 20in, Honda",
    tagline: "Ren's pick: the self-propelled power rake — flails pull thatch out by the roots, 20in passes.",
    price: "currently unavailable",
    img: "assets/aff-lawn-billygoat-pr550.jpg",
    url: "https://www.amazon.com/dp/B0048NN4X0?tag=rendelivers-20"
  },
  {
    id: "aff-lawn-billygoat-pl1800",
    section: "lawn",
    sub: "AERATORS",
    name: "Billy Goat PL1800V PLUGR Reciprocating Aerator, 18in",
    tagline: "Ren's pick: reciprocating tines punch cores without the drum-aerator wrestling match.",
    price: "currently unavailable",
    img: "assets/aff-lawn-billygoat-pl1800.jpg",
    url: "https://www.amazon.com/dp/B01HOHGD9S?tag=rendelivers-20"
  },
  {
    id: "aff-weld-yeswelder-arc205ds",
    section: "welding",
    sub: "STICK",
    name: "YESWELDER ARC-205DS Stick Welder, 205A, 110/220V Dual Voltage, Large LED Display",
    tagline: "205 amps of 'hold my beer' — burns 7018 like it owes it money.",
    price: "$108.79",
    img: "assets/aff-weld-yeswelder-arc205ds.jpg",
    url: "https://www.amazon.com/dp/B086SNKTTK?tag=rendelivers-20"
  },
  {
    id: "aff-weld-lincoln-225i",
    section: "welding",
    sub: "STICK",
    name: "Lincoln Electric Weld-Pak 225i Stick Welder, Dual Voltage 120/230V, 225 Amp DC",
    tagline: "Red box, real welder. The one your grandpa trusts and your wallet fears.",
    price: "$545.11",
    img: "assets/aff-weld-lincoln-225i.jpg",
    url: "https://www.amazon.com/dp/B0FFCBQ837?tag=rendelivers-20"
  },
  {
    id: "aff-weld-electrode-forney-6013",
    section: "welding",
    sub: "STICK",
    name: "Forney 30305 E6013 Welding Rod, 3/32-Inch, 5-Pound",
    tagline: "The beginner-friendly rod — smooth arc, easy slag, forgiving on thin stuff.",
    price: "$25.49",
    img: "assets/aff-weld-electrode-forney-6013.jpg",
    url: "https://www.amazon.com/dp/B000CFNGQ8?tag=rendelivers-20"
  },
  {
    id: "aff-weld-electrode-forney-6011",
    section: "welding",
    sub: "STICK",
    name: "Forney 31205 E6011 Welding Rod, 1/8-Inch, 5-Pound",
    tagline: "Deep penetration on AC or DC — burns through rust, paint, and excuses.",
    price: "$28.99",
    img: "assets/aff-weld-electrode-forney-6011.jpg",
    url: "https://www.amazon.com/dp/B000CFPU94?tag=rendelivers-20"
  },
  {
    id: "aff-weld-electrode-yeswelder-6010",
    section: "welding",
    sub: "STICK",
    name: "YESWELDER E6010 1/8-Inch 5LB Carbon Steel Stick Electrodes",
    tagline: "The pipe welder's root-pass rod — fast-freeze, deep dig, DC+.",
    price: "$26.99",
    img: "assets/aff-weld-electrode-yeswelder-6010.jpg",
    url: "https://www.amazon.com/dp/B0CTBYNG96?tag=rendelivers-20"
  },
  {
    id: "aff-weld-electrode-yeswelder-6013",
    section: "welding",
    sub: "STICK",
    name: "YESWELDER E6013 1/8-Inch 5LB Carbon Steel Stick Electrodes",
    tagline: "The everyday fab-shop rod — easy arc, clean beads, 1/8-inch workhorse.",
    price: "$26.99",
    img: "assets/aff-weld-electrode-yeswelder-6013.jpg",
    url: "https://www.amazon.com/dp/B0C9LBH9VJ?tag=rendelivers-20"
  },
  {
    id: "aff-weld-electrode-yeswelder-7018",
    section: "welding",
    sub: "STICK",
    name: "YESWELDER E7018 1/8-Inch 5LB Low Hydrogen Carbon Steel Stick Electrodes",
    tagline: "Low-hydrogen structural rod — strong, crack-resistant, code-quality welds.",
    price: "$26.99",
    img: "assets/aff-weld-electrode-yeswelder-7018.jpg",
    url: "https://www.amazon.com/dp/B0C9L8QW9J?tag=rendelivers-20"
  },
  {
    id: "aff-weld-hobart-140",
    section: "welding",
    sub: "MIG",
    name: "Hobart Handler 140 MIG Welder 115V (500559) — Flux Core, Welds Up to 1/4 in. Mild Steel",
    tagline: "The garage legend. Plugs into a wall outlet, welds like it means it.",
    price: "$719.99",
    img: "assets/aff-weld-hobart-140.jpg",
    url: "https://www.amazon.com/dp/B009X43F38?tag=rendelivers-20"
  },
  {
    id: "aff-weld-forney-140fci",
    section: "welding",
    sub: "MIG",
    name: "Forney Easy Weld 140 FC-i, 140 Amp 120-Volt Flux-Cored Wire Feed Welder (No Gas Needed)",
    tagline: "No gas, no drama, no excuses. Nineteen pounds of green 'get it done.'",
    price: "$337.99",
    img: "assets/aff-weld-forney-140fci.jpg",
    url: "https://www.amazon.com/dp/B07CP9CDVQ?tag=rendelivers-20"
  },
  {
    id: "aff-weld-yeswelder-mig205ds",
    section: "welding",
    sub: "TIG",
    name: "YESWELDER MIG-205DS PRO MIG Welder, 200Amp 110/220V Dual Voltage, 5 in 1 Multiprocess",
    tagline: "Five welders in one box. Swiss Army knife, but it shoots lightning.",
    price: "$479.99",
    img: "assets/aff-weld-yeswelder-mig205ds.jpg",
    url: "https://www.amazon.com/dp/B07TVCWDGW?tag=rendelivers-20"
  },
  {
    id: "aff-weld-lincoln-powermig140mp",
    section: "welding",
    sub: "MIG",
    name: "Lincoln Electric Power MIG 140MP Multi-Process Welder (K4499-1)",
    tagline: "120V multi-process that plugs into any outlet and welds like it means it.",
    price: "$1,748.99",
    img: "assets/aff-weld-lincoln-powermig140mp.jpg",
    url: "https://www.amazon.com/dp/B081FGF5WC?tag=rendelivers-20"
  },
  {
    id: "aff-weld-primeweld-tig225x",
    section: "welding",
    sub: "TIG",
    name: "PRIMEWELD TIG225X 225 Amp IGBT AC DC Tig/Stick Welder with Pulse, CK17 Flex Torch",
    tagline: "AC/DC TIG that welds aluminum like butter and comes with a real CK torch. Pros approve.",
    price: "$889.00",
    img: "assets/aff-weld-primeweld-tig225x.jpg",
    url: "https://www.amazon.com/dp/B07BXHRBQ8?tag=rendelivers-20"
  },
  {
    id: "aff-weld-lincoln-tig200",
    section: "welding",
    sub: "TIG",
    name: "Lincoln Electric Square Wave TIG 200 TIG Welder (K5126-1)",
    tagline: "AC/DC TIG with pulse — aluminum doesn't stand a chance.",
    price: "$1,827.52",
    img: "assets/aff-weld-lincoln-tig200.jpg",
    url: "https://www.amazon.com/dp/B017DQ8DJ8?tag=rendelivers-20"
  },
  {
    id: "aff-weld-yeswelder-oxykit",
    section: "welding",
    sub: "OXYFUEL",
    name: "YESWELDER Oxygen & Acetylene Torch Kit with Regulator, Nozzles, Hose, Goggles",
    tagline: "Fire, but make it precise. Cut, weld, braze — the original hot take.",
    price: "$149.99",
    img: "assets/aff-weld-yeswelder-oxykit.jpg",
    url: "https://www.amazon.com/dp/B0D8SX5L6S?tag=rendelivers-20"
  },
  {
    id: "aff-weld-yeswelder-cut55ds",
    section: "welding",
    sub: "PLASMA",
    name: "YESWELDER CUT-55DS PRO Plasma Cutter, 55Amp, Large LED Display, 110/220V Dual Voltage",
    tagline: "Slices steel like a hot knife through regret. Non-touch pilot arc, zero mercy.",
    price: "$249.99",
    img: "assets/aff-weld-yeswelder-cut55ds.jpg",
    url: "https://www.amazon.com/dp/B0CWMY354P?tag=rendelivers-20"
  },
  {
    id: "aff-weld-yeswelder-cut60ds",
    section: "welding",
    sub: "PLASMA",
    name: "YESWELDER CUT-60DS PRO Plasma Cutter, 60Amp, Digital Display, 110/220V Dual Voltage",
    tagline: "Sixty amps of 'watch this.' Cuts 7/8-inch steel while your grinder watches.",
    price: "$279.99",
    img: "assets/aff-weld-yeswelder-cut60ds.jpg",
    url: "https://www.amazon.com/dp/B09L3Y3ZLF?tag=rendelivers-20"
  },
  {
    id: "aff-weld-yeswelder-helmet",
    section: "welding",
    sub: "GEAR",
    name: "YESWELDER Auto Darkening Welding Helmet LYG-L500A, True Color, Solar Powered",
    tagline: "Blink and you'll miss the flash — literally. Auto-darkens before your retinas file a complaint.",
    price: "$39.99",
    img: "assets/aff-weld-yeswelder-helmet.jpg",
    url: "https://www.amazon.com/dp/B07QJ1Y527?tag=rendelivers-20"
  },
  {
    id: "aff-weld-jackson-helmet",
    section: "welding",
    sub: "GEAR",
    name: "Jackson Safety Auto-Darkening Welding Helmet",
    tagline: "Ren's pick: Jackson's auto-darkening hood — pro-grade headgear for people who like their eyesight.",
    price: "$214.15",
    img: "assets/aff-weld-jackson-helmet.jpg",
    url: "https://www.amazon.com/dp/B01HTMLPLE?tag=rendelivers-20"
  },
  {
    id: "aff-weld-yeswelder-magnets",
    section: "welding",
    sub: "GEAR",
    name: "YESWELDER 50LB Welding Magnet, 4-Pack Magnetic Welding Holders",
    tagline: "Four extra hands that never get tired, never complain, and hold 50 lbs at 45/90/135.",
    price: "$21.99",
    img: "assets/aff-weld-yeswelder-magnets.jpg",
    url: "https://www.amazon.com/dp/B08FHS2VFP?tag=rendelivers-20"
  },
  {
    id: "aff-weld-lincoln-k2979-gloves",
    section: "welding",
    sub: "GEAR",
    name: "Lincoln Electric Traditional MIG/Stick Welding Gloves, 14in Lined Leather, Kevlar Stitching",
    tagline: "The classic red-and-black gauntlets. Sparks bounce off, compliments don't.",
    price: "$43.51",
    img: "assets/aff-weld-lincoln-k2979-gloves.jpg",
    url: "https://www.amazon.com/dp/B00547HD0O?tag=rendelivers-20"
  },
  {
    id: "aff-weld-lincoln-viking3350",
    section: "welding",
    sub: "GEAR",
    name: "Lincoln Electric VIKING 3350 Auto-Darkening Welding Helmet, 4C Lens, Matte Black",
    tagline: "1/1/1/1 optical clarity — see the puddle, not the headache.",
    price: "$448.43",
    img: "assets/aff-weld-lincoln-viking3350.jpg",
    url: "https://www.amazon.com/dp/B07V9G94NK?tag=rendelivers-20"
  },
  {
    id: "aff-weld-miller-digitalperf",
    section: "welding",
    sub: "GEAR",
    name: "Miller Digital Performance ClearLight 4x Auto-Darkening Welding Helmet, Black",
    tagline: "The buy-once-cry-once hood. ClearLight 4x lens, arc-time tracking.",
    price: "$269.86",
    img: "assets/aff-weld-miller-digitalperf.jpg",
    url: "https://www.amazon.com/dp/B0D98QBVRQ?tag=rendelivers-20"
  },
  {
    id: "aff-weld-hobart-770869",
    section: "welding",
    sub: "GEAR",
    name: "Hobart 770869 Creator Series Auto-Darkening Welding Helmet, Camo",
    tagline: "Realtree camo, PureColor lens — look good while the sparks fly.",
    price: "$127.55",
    img: "assets/aff-weld-hobart-770869.jpg",
    url: "https://www.amazon.com/dp/B07MWQH9VB?tag=rendelivers-20"
  },
  {
    id: "aff-weld-jackson-premium",
    section: "welding",
    sub: "GEAR",
    name: "Jackson Safety Premium Graphic Auto-Darkening Welding Helmet",
    tagline: "Featherweight with 1/1/1/1 clarity — a real step up without the big jump.",
    price: "$87.92",
    img: "assets/aff-weld-jackson-premium.jpg",
    url: "https://www.amazon.com/dp/B09DVDKMZZ?tag=rendelivers-20"
  },
  {
    id: "aff-weld-lincoln-jacket-k2986",
    section: "welding",
    sub: "GEAR",
    name: "Lincoln Electric Split Leather Sleeved Welding Jacket, FR Cotton, Black & Red",
    tagline: "Cowhide sleeves, FR cotton body — dress like you weld for a living.",
    price: "$195.00",
    img: "assets/aff-weld-lincoln-jacket-k2986.jpg",
    url: "https://www.amazon.com/dp/B0055E0WUY?tag=rendelivers-20"
  },
  {
    id: "aff-weld-lincoln-gloves",
    section: "welding",
    sub: "GEAR",
    name: "Lincoln Electric Jessi Combs Women's MIG/Stick Welding Gloves",
    tagline: "Kevlar-stitched leather that laughs at spatter. Sized for smaller hands, built for big sparks.",
    price: "$43.51",
    img: "assets/aff-weld-lincoln-gloves.jpg",
    url: "https://www.amazon.com/dp/B00FKBJ4IS?tag=rendelivers-20"
  },
  {
    id: "aff-safety-milwaukee-tinted-glasses",
    section: "safety",
    sub: "EYEWEAR",
    name: "Milwaukee Anti-Fog Safety Glasses, Tinted Lens, Black/Red Frame",
    tagline: "Ren's pick: tinted, anti-fog, and red. Safety glasses that look like sunglasses and work like armor.",
    price: "$14.45",
    img: "assets/aff-safety-milwaukee-tinted-glasses.jpg",
    url: "https://www.amazon.com/dp/B07VYN2NVX?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-milwaukee-m12-jacket",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "M12 Heated Jacket Kit, Black",
    tagline: "The battery coat you asked for — M12 powers heat zones in chest and back, up to 6 hours per charge.",
    price: "currently unavailable",
    img: "assets/aff-apparel-milwaukee-m12-jacket.jpg",
    url: "https://www.amazon.com/dp/B09HR2WL7J?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-milwaukee-m12-hoodie",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "M12 Heated Hoodie Kit, Gray",
    tagline: "Heated hoodie, same M12 system — waffle thermal lining, chest and back heat zones.",
    price: "$197.99",
    img: "assets/aff-apparel-milwaukee-m12-hoodie.jpg",
    url: "https://www.amazon.com/dp/B07HVSTCQ8?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-milwaukee-m12-vest",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "M12 Heated AXIS Vest Kit, Black",
    tagline: "Heated vest that layers under anything — quick-heat elements, ripstop that won\'t tear on rebar.",
    price: "currently unavailable",
    img: "assets/aff-apparel-milwaukee-m12-vest.jpg",
    url: "https://www.amazon.com/dp/B0CMRMYZFK?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-milwaukee-m12-hoodie",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Milwaukee M12 Heated Hoodie Kit",
    tagline: "The heated hoodie that runs off your M12 batteries — carbon fiber heat zones in chest and back for freezing mornings on the job.",
    price: "$279.00",
    img: "assets/aff-apparel-milwaukee-m12-hoodie.jpg",
    url: "https://www.amazon.com/dp/B07HD1TVSC?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-detroit",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt Duck Blanket-Lined Detroit Jacket, Black",
    tagline: "The iconic Detroit — 12oz cotton duck, blanket lining. The jacket every contractor already trusts.",
    price: "$144.00",
    img: "assets/aff-apparel-carhartt-detroit.jpg",
    url: "https://www.amazon.com/dp/B07S18XZT5?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-bib",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt Loose Fit Firm Duck Insulated Bib Overall",
    tagline: "Quilted lining, ankle-to-thigh zips, Cordura kick panels. The standard cold-weather bib.",
    price: "$119.99",
    img: "assets/aff-apparel-carhartt-bib.jpg",
    url: "https://www.amazon.com/dp/B0DH592G15?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-wp-glove",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt WP Waterproof Insulated Glove",
    tagline: "4.6 stars, 35,000+ reviews — waterproof, digital-grip palm. Handle tools in winter.",
    price: "$32.99",
    img: "assets/aff-apparel-carhartt-wp-glove.jpg",
    url: "https://www.amazon.com/dp/B005I33OVG?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-gauntlet",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt Storm Defender Insulated Gauntlet Glove",
    tagline: "Gauntlet cuffs, removable touchscreen liners — liners solo on mild days, full glove below freezing.",
    price: "$59.91",
    img: "assets/aff-apparel-carhartt-gauntlet.jpg",
    url: "https://www.amazon.com/dp/B078Y4CM3Z?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-beanie",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt Knit Cuffed Beanie (A18), Black",
    tagline: "151,000+ reviews at 4.8 stars. The jobsite standard — every contractor already owns three.",
    price: "$19.99",
    img: "assets/aff-apparel-carhartt-beanie.jpg",
    url: "https://www.amazon.com/dp/B002G9UDYG?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-balaclava",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Winter Balaclava Face Mask, Fleece-Lined",
    tagline: "Full face and neck coverage for concrete pours at 6 AM in January.",
    price: "$19.99",
    img: "assets/aff-apparel-balaclava.jpg",
    url: "https://www.amazon.com/dp/B0FZ9TTBTC?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-paxton",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt Rain Defender Paxton Heavyweight Hoodie",
    tagline: "13oz heavyweight with water-repellent finish. Survives the jobsite and the wash.",
    price: "$69.99",
    img: "assets/aff-apparel-carhartt-paxton.jpg",
    url: "https://www.amazon.com/dp/B00FXPS2UC?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-dungaree",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt Relaxed Straight Twill Dungaree",
    tagline: "Hammer loop, reinforced pockets, 19-inch openings fit over boots. The everyday contractor pant.",
    price: "$49.99",
    img: "assets/aff-apparel-carhartt-dungaree.jpg",
    url: "https://www.amazon.com/dp/B004I5PYCW?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-darntough-paulbunyan",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Darn Tough Merino Paul Bunyan Work Socks",
    tagline: "Full cushion merino, guaranteed for life. The last work socks he\'ll ever buy.",
    price: "$28.45",
    img: "assets/aff-apparel-darntough-paulbunyan.jpg",
    url: "https://www.amazon.com/dp/B00NONM4AY?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-darntough-backbone",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Darn Tough Backbone Boot Socks, Midweight",
    tagline: "Midweight cushioned boot sock, lifetime guarantee. Lighter than the Paul Bunyan for active days.",
    price: "$27.95",
    img: "assets/aff-apparel-darntough-backbone.jpg",
    url: "https://www.amazon.com/dp/B0DC4NXD9F?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-carhartt-boot",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Carhartt Force HD 6-Inch Waterproof Insulated Work Boot",
    tagline: "400g Thinsulate, waterproof, composite toe, EH rated. Meets every jobsite requirement.",
    price: "$189.99",
    img: "assets/aff-apparel-carhartt-boot.jpg",
    url: "https://www.amazon.com/dp/B0DRM6VJK7?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-weld-gloves-k2979",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Lincoln Electric Traditional MIG/Stick Welding Gloves, 14in Lined Leather, Kevlar Stitching",
    tagline: "The classic red-and-black gauntlets. Sparks bounce off, compliments don't.",
    price: "$43.51",
    img: "assets/aff-weld-lincoln-k2979-gloves.jpg",
    url: "https://www.amazon.com/dp/B00547HD0O?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-weld-jacket-k2986",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Lincoln Electric Split Leather Sleeved Welding Jacket, FR Cotton, Black & Red",
    tagline: "Cowhide sleeves, FR cotton body — dress like you weld for a living.",
    price: "$195.00",
    img: "assets/aff-weld-lincoln-jacket-k2986.jpg",
    url: "https://www.amazon.com/dp/B0055E0WUY?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-weld-gloves-jessi",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Lincoln Electric Jessi Combs Women's MIG/Stick Welding Gloves",
    tagline: "Kevlar-stitched leather that laughs at spatter. Sized for smaller hands, built for big sparks.",
    price: "$43.51",
    img: "assets/aff-weld-lincoln-gloves.jpg",
    url: "https://www.amazon.com/dp/B00FKBJ4IS?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-hivis-jacket-8365",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Ergodyne GloWear 8365 Hi-Vis Reflective Lightweight Rain Jacket, Type R Class 3",
    tagline: "Ren's pick.",
    price: "$39.99",
    img: "assets/aff-safe-ergodyne-8365.jpg",
    url: "https://www.amazon.com/dp/B0851GWL5C?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-boot-redwing",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "WORX by Red Wing Shoes Men's 5432 8 in. Steel Toe Work Boot",
    tagline: "Ren's pick: Red Wing bloodline, GORE-TEX waterproofing, insulated. The boot that outlasts the job.",
    price: "Add to cart to check price",
    img: "assets/aff-redwing-steetoe.jpg",
    url: "https://www.amazon.com/dp/B0016PACT2?tag=rendelivers-20"
  },
  {
    id: "aff-apparel-boot-thorogood",
    section: "apparel",
    sub: "COLD WEATHER",
    name: "Thorogood American Heritage 6 in. Steel Toe Work Boot",
    tagline: "Ren's pick: full-grain leather moc toe, MAXWear wedge sole. The premium boot that breaks in like a dream.",
    price: "$274.95",
    img: "assets/aff-thorogood-steetoe.jpg",
    url: "https://www.amazon.com/dp/B00623DYVQ?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-814-14",
    section: "plumbing",
    sub: "WRENCHES",
    name: "RIDGID 31095 Model 814 Aluminum Straight Pipe Wrench, 14-Inch",
    tagline: "Ren's pick.",
    price: "$51.99",
    img: "assets/aff-plumb-ridgid-814-14.jpg",
    url: "https://www.amazon.com/dp/B0000224JE?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-818-18",
    section: "plumbing",
    sub: "WRENCHES",
    name: "RIDGID 31100 Model 818 Aluminum Straight Pipe Wrench, 18-Inch",
    tagline: "Ren's pick.",
    price: "$78.63",
    img: "assets/aff-plumb-ridgid-818-18.jpg",
    url: "https://www.amazon.com/dp/B0000224JF?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-824-24",
    section: "plumbing",
    sub: "WRENCHES",
    name: "RIDGID 31105 Model 824 Aluminum Straight Pipe Wrench, 24-Inch",
    tagline: "Ren's pick.",
    price: "$119.99",
    img: "assets/aff-plumb-ridgid-824-24.jpg",
    url: "https://www.amazon.com/dp/B0000224JG?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-e910-10",
    section: "plumbing",
    sub: "WRENCHES",
    name: "RIDGID 90107 E-910 Aluminum End Pipe Wrench, 10-Inch",
    tagline: "Ren's pick.",
    price: "$64.33",
    img: "assets/aff-plumb-ridgid-e910-10.jpg",
    url: "https://www.amazon.com/dp/B001HWQIRE?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-ez-change",
    section: "plumbing",
    sub: "WRENCHES",
    name: "RIDGID 57003 EZ Change Plumbing Wrench Faucet Tool",
    tagline: "Ren's pick.",
    price: "$22.99",
    img: "assets/aff-plumb-ridgid-ez-change.jpg",
    url: "https://www.amazon.com/dp/B078YYD66B?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-342-internal",
    section: "plumbing",
    sub: "WRENCHES",
    name: "RIDGID 31405 Model 342 Internal Pipe Wrench",
    tagline: "Ren's pick.",
    price: "$89.82",
    img: "assets/aff-plumb-ridgid-342-internal.jpg",
    url: "https://www.amazon.com/dp/B0015B9SF6?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-duratech-basin",
    section: "plumbing",
    sub: "WRENCHES",
    name: "DURATECH 10\"-17\" Telescoping Basin Wrench with Tub Drain Remover",
    tagline: "Ren's pick.",
    price: "$26.99",
    img: "assets/aff-plumb-duratech-basin.jpg",
    url: "https://www.amazon.com/dp/B09CYKD18T?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-duratech-shower-socket",
    section: "plumbing",
    sub: "WRENCHES",
    name: "DURATECH Shower Valve Socket Wrench Set",
    tagline: "Ren's pick.",
    price: "$17.99",
    img: "assets/aff-plumb-duratech-shower-socket.jpg",
    url: "https://www.amazon.com/dp/B09CYV2L3X?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-knipex-cobra-10",
    section: "plumbing",
    sub: "WRENCHES",
    name: "KNIPEX Tools 87 01 250 Cobra Water Pump Pliers, 10-Inch",
    tagline: "Ren's pick.",
    price: "$36.86",
    img: "assets/aff-plumb-knipex-cobra-10.jpg",
    url: "https://www.amazon.com/dp/B000X4J2H0?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-cobra-auger-25",
    section: "plumbing",
    sub: "DRAIN",
    name: "Cobra Products 86250 1/4\" x 25' Pistol Grip Power Drum Auger",
    tagline: "Ren's pick.",
    price: "$29.04",
    img: "assets/aff-plumb-cobra-auger-25.jpg",
    url: "https://www.amazon.com/dp/B006C68TA4?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-oxdfk-brush",
    section: "plumbing",
    sub: "SOLDERING",
    name: "OXDFK 4-in-1 Copper Tubing Pipe Cleaning Brush, 2-Pack",
    tagline: "Ren's pick.",
    price: "$8.99",
    img: "assets/aff-plumb-oxdfk-brush.jpg",
    url: "https://www.amazon.com/dp/B0DHGMZ7ZZ?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-101-cutter",
    section: "plumbing",
    sub: "CUTTERS",
    name: "RIDGID 40617 Model 101 Close Quarters Tubing Cutter",
    tagline: "Ren's pick.",
    price: "$27.98",
    img: "assets/aff-plumb-ridgid-101-cutter.jpg",
    url: "https://www.amazon.com/dp/B001P307PO?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-ridgid-223s-reamer",
    section: "plumbing",
    sub: "CUTTERS",
    name: "RIDGID 29983 Model 223S Inner/Outer Reamer",
    tagline: "Ren's pick.",
    price: "$38.00",
    img: "assets/aff-plumb-ridgid-223s-reamer.jpg",
    url: "https://www.amazon.com/dp/B001P81OKG?tag=rendelivers-20"
  },
  {
    id: "aff-milwaukee-2471-20",
    section: "plumbing",
    sub: "CUTTERS",
    name: "Milwaukee M12 12V Copper Tubing Cutter (2471-20)",
    tagline: "Ren's pick: cuts copper clean in seconds on M12 power — no forearm workout required.",
    price: "$146.24",
    checked: "2026-10-05",
    img: "assets/aff-milwaukee-2471-21.jpg",
    url: "https://www.amazon.com/dp/B001FB64MQ?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-senctrl-gauge",
    section: "plumbing",
    sub: "TESTING",
    name: "SENCTRL 0-200 PSI Water Pressure Test Gauge with Lazy Hand",
    tagline: "Ren's pick.",
    price: "$13.99",
    img: "assets/aff-plumb-senctrl-gauge.jpg",
    url: "https://www.amazon.com/dp/B0BFCN2XWZ?tag=rendelivers-20"
  },
  {
    id: "aff-safe-dewalt-dpg82",
    section: "safety",
    sub: "EYEWEAR",
    name: "DEWALT DPG82-11 Concealer Clear Anti-Fog Dual Mold Safety Goggle",
    tagline: "Ren's pick.",
    price: "$12.59",
    img: "assets/aff-safe-dewalt-dpg82.jpg",
    url: "https://www.amazon.com/dp/B01A12J3GI?tag=rendelivers-20"
  },
  {
    id: "aff-safe-uvex-bionic",
    section: "safety",
    sub: "EYEWEAR",
    name: "Honeywell UVEX Bionic Face Shield with Clear Polycarbonate Visor (S8500)",
    tagline: "Ren's pick.",
    price: "$38.99",
    img: "assets/aff-safe-uvex-bionic.jpg",
    url: "https://www.amazon.com/dp/B001VXXUWK?tag=rendelivers-20"
  },
  {
    id: "aff-safe-3m-1100-200",
    section: "safety",
    sub: "HEARING",
    name: "3M 1100 Foam Ear Plugs, 200-Pair, Orange",
    tagline: "Ren's pick.",
    price: "$29.50",
    img: "assets/aff-safe-3m-1100-200.jpg",
    url: "https://www.amazon.com/dp/B008MVYL7C?tag=rendelivers-20"
  },
  {
    id: "aff-safe-3m-worktunes",
    section: "safety",
    sub: "HEARING",
    name: "3M WorkTunes Connect + AM/FM Wireless Hearing Protector with Bluetooth, 26 dB NRR",
    tagline: "Ren's pick.",
    price: "$64.99",
    img: "assets/aff-safe-3m-worktunes.jpg",
    url: "https://www.amazon.com/dp/B0D2S8QZ13?tag=rendelivers-20"
  },
  {
    id: "aff-safe-3m-6200",
    section: "safety",
    sub: "RESPIRATORY",
    name: "3M Half Facepiece Reusable Respirator 6200, NIOSH, Medium",
    tagline: "Ren's pick.",
    price: "$17.29",
    img: "assets/aff-safe-3m-6200.jpg",
    url: "https://www.amazon.com/dp/B007JZ1N00?tag=rendelivers-20"
  },
  {
    id: "aff-safe-3m-2097",
    section: "safety",
    sub: "RESPIRATORY",
    name: "3M 2097 P100 Particulate + Odor Filters, 2 Pairs",
    tagline: "Ren's pick.",
    price: "$18.98",
    img: "assets/aff-safe-3m-2097.jpg",
    url: "https://www.amazon.com/dp/B007STCT00?tag=rendelivers-20"
  },
  {
    id: "aff-safe-ergodyne-8365",
    section: "safety",
    sub: "HI-VIS",
    name: "Ergodyne GloWear 8365 Hi-Vis Reflective Lightweight Rain Jacket, Type R Class 3",
    tagline: "Ren's pick.",
    price: "$39.99",
    img: "assets/aff-safe-ergodyne-8365.jpg",
    url: "https://www.amazon.com/dp/B0851GWL5C?tag=rendelivers-20"
  },
  {
    id: "aff-safe-protecta-harness",
    section: "safety",
    sub: "FALL PROTECTION",
    name: "3M Protecta PRO Full Body Harness 1161217, M/L",
    tagline: "Ren's pick.",
    price: "$354.05",
    img: "assets/aff-safe-protecta-harness.jpg",
    url: "https://www.amazon.com/dp/B07PWGKBVC?tag=rendelivers-20"
  },
  {
    id: "aff-safe-guardian-lanyard",
    section: "safety",
    sub: "FALL PROTECTION",
    name: "Guardian 01221 6-Foot Shock Absorbing Lanyard with Rebar Hook",
    tagline: "Ren's pick.",
    price: "$74.98",
    img: "assets/aff-safe-guardian-lanyard.jpg",
    url: "https://www.amazon.com/dp/B004A7XVMS?tag=rendelivers-20"
  },
  {
    id: "aff-safe-guardian-roofkit",
    section: "safety",
    sub: "FALL PROTECTION",
    name: "Guardian 00815 Rooftop Safety Kit — 50 ft Lifeline, Harness, Anchor, Bucket",
    tagline: "Ren's pick.",
    price: "$96.00",
    img: "assets/aff-safe-guardian-roofkit.jpg",
    url: "https://www.amazon.com/dp/B0032U3JXA?tag=rendelivers-20"
  },
  {
    id: "aff-safe-ergodyne-6660",
    section: "safety",
    sub: "HEAD",
    name: "Ergodyne Chill-Its 6660 Hard Hat Brim with Neck Shade, Orange",
    tagline: "Ren's pick.",
    price: "$22.98",
    img: "assets/aff-safe-ergodyne-6660.jpg",
    url: "https://www.amazon.com/dp/B00G58DYKY?tag=rendelivers-20"
  },
  {
    id: "aff-safe-ergodyne-6813",
    section: "safety",
    sub: "HEAD",
    name: "Ergodyne N-Ferno 6813 Winter Skull Cap Helmet Liner, Black",
    tagline: "Ren's pick.",
    price: "$12.97",
    img: "assets/aff-safe-ergodyne-6813.jpg",
    url: "https://www.amazon.com/dp/B00419QCYE?tag=rendelivers-20"
  },
  {
    id: "aff-safe-3in1-helmet",
    section: "safety",
    sub: "HEAD",
    name: "3-in-1 Safety Helmet with Flip-Up Visor and Removable Ear Muffs",
    tagline: "Ren's pick: hard hat, face shield, and hearing protection in one. 25dB muffs, one-hand adjust.",
    price: "$65.99",
    img: "assets/aff-safe-3in1-helmet.jpg",
    url: "https://www.amazon.com/dp/B0B5ZYTNH9?tag=rendelivers-20"
  },
  {
    id: "aff-safe-fao-91248",
    section: "safety",
    sub: "FIRST AID",
    name: "First Aid Only 91248 OSHA-Compliant 50-Person First Aid Kit, 260 Pieces",
    tagline: "Ren's pick.",
    price: "$17.47",
    img: "assets/aff-safe-fao-91248.jpg",
    url: "https://www.amazon.com/dp/B08P27LHJ4?tag=rendelivers-20"
  },
  {
    id: "aff-safe-rapidcare-master",
    section: "safety",
    sub: "FIRST AID",
    name: "Rapid Care 3-Shelf First Aid Cabinet, 700+ Pieces, ANSI/OSHA Class A+, Serves 150",
    tagline: "Ren's pick: the master kit — wall-mount steel cabinet, color-coded boxes, jobsite-ready.",
    price: "$159.95",
    img: "assets/aff-safe-rapidcare-master.jpg",
    url: "https://www.amazon.com/dp/B0F51WL72W?tag=rendelivers-20"
  },
  {
    id: "aff-safe-besmart-wallkit",
    section: "safety",
    sub: "FIRST AID",
    name: "Be Smart Get Prepared Hard Case First Aid Kit, 326 Pieces, Wall-Mountable, OSHA/ANSI",
    tagline: "Ren's pick: hang it on the wall next to the extinguisher. Tilting shelves, 100-person rated.",
    price: "$39.99",
    img: "assets/aff-safe-besmart-wallkit.jpg",
    url: "https://www.amazon.com/dp/B002DQY776?tag=rendelivers-20"
  },
  {
    id: "aff-safe-philips-home",
    section: "safety",
    sub: "FIRST AID",
    name: "Philips HeartStart Home Defibrillator with Carry Case",
    tagline: "Ren's pick: the home version — same voice-prompt rescue tech in a grab-and-go red case.",
    price: "$1,600.00",
    checked: "2026-10-05",
    img: "assets/aff-safe-philips-home.jpg",
    url: "https://www.amazon.com/dp/B00064CED6?tag=rendelivers-20"
  },
  {
    id: "aff-safe-philips-heartstart",
    section: "safety",
    sub: "FIRST AID",
    name: "Philips HeartStart OnSite AED Defibrillator, Business Package",
    tagline: "Ren's pick: the jobsite AED — voice prompts walk anyone through it, business package with cabinet and carry case.",
    price: "$2,327.00",
    checked: "2026-10-05",
    img: "assets/aff-safe-philips-heartstart.jpg",
    url: "https://www.amazon.com/dp/B07ZL4SRTR?tag=rendelivers-20"
  },
  {
    id: "aff-safe-amerex-b402",
    section: "safety",
    sub: "FIRE",
    name: "Amerex B402 5 lb ABC Dry Chemical Fire Extinguisher with Wall Bracket",
    tagline: "Ren's pick.",
    price: "$80.00",
    img: "assets/aff-safe-amerex-b402.jpg",
    url: "https://www.amazon.com/dp/B00F5CK9X6?tag=rendelivers-20"
  },
  {
    id: "aff-safe-toughbuilt-kp",
    section: "safety",
    sub: "KNEE",
    name: "ToughBuilt GelFit Thigh Support Stabilization Knee Pads (TB-KP-G3)",
    tagline: "Ren's pick.",
    price: "$59.99",
    img: "assets/aff-safe-toughbuilt-kp.jpg",
    url: "https://www.amazon.com/dp/B01GQMCMPQ?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-milw-pex-expander",
    section: "plumbing",
    sub: "PEX",
    name: "Milwaukee 2474-22 M12 Cordless PEX Expansion Tool Kit",
    tagline: "Ren's pick.",
    price: "$480.00",
    img: "assets/aff-plumb-milw-pex-expander.jpg",
    url: "https://www.amazon.com/dp/B0994QYTQB?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-apollo-crimp-combo",
    section: "plumbing",
    sub: "PEX",
    name: "Apollo PEX 69PTKH0014C 1/2 in. & 3/4 in. Combo Crimp Tool",
    tagline: "Ren's pick.",
    price: "$56.00",
    img: "assets/aff-plumb-apollo-crimp-combo.jpg",
    url: "https://www.amazon.com/dp/B003IJ3DDQ?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-icrimp-cinch-kit",
    section: "plumbing",
    sub: "PEX",
    name: "iCrimp KIT-1096D PEX Clamp Tool Kit for 3/8 to 1 in., with Clamps, Cutter & Case",
    tagline: "Ren's pick.",
    price: "$33.59",
    img: "assets/aff-plumb-icrimp-cinch-kit.jpg",
    url: "https://www.amazon.com/dp/B0CJ243VDD?tag=rendelivers-20"
  },
  {
    id: "aff-plumb-reed-tc4qpvc",
    section: "plumbing",
    sub: "POLY",
    name: "Reed Tool TC4QPVC Quick Release Tubing Cutter for Plastic Pipe, 12-Inch",
    tagline: "Ren's pick.",
    price: "$153.99",
    img: "assets/aff-plumb-reed-tc4qpvc.jpg",
    url: "https://www.amazon.com/dp/B001H4PS28?tag=rendelivers-20"
  },
  {
    id: "aff-tools-dewalt-247pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "DEWALT 247-Piece Mechanics Tool Set, 1/4\", 3/8\", 1/2\" Drive, SAE/Metric",
    tagline: "Ren's pick.",
    price: "$177.85",
    img: "assets/aff-tools-dewalt-247pc.jpg",
    url: "https://www.amazon.com/dp/B0767PMCD8?tag=rendelivers-20"
  },
  {
    id: "aff-tools-dewalt-205pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "DEWALT 205-Piece Mechanics Tool Set, 1/4\", 3/8\", 1/2\" Drive (DWMT81534)",
    tagline: "Ren's pick.",
    price: "$172.01",
    img: "assets/aff-tools-dewalt-205pc.jpg",
    url: "https://www.amazon.com/dp/B0767NGBP8?tag=rendelivers-20"
  },
  {
    id: "aff-tools-dewalt-168pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "DEWALT 168-Piece Mechanics Tool Set (DWMT73803)",
    tagline: "Ren's pick.",
    price: "$177.12",
    img: "assets/aff-tools-dewalt-168pc.jpg",
    url: "https://www.amazon.com/dp/B00PXN00BS?tag=rendelivers-20"
  },
  {
    id: "aff-tools-dewalt-108pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "DEWALT 108-Piece Mechanics Tool Set, 1/4\" & 3/8\" Drive (DWMT73801)",
    tagline: "Ren's pick.",
    price: "$79.97",
    img: "assets/aff-tools-dewalt-108pc.jpg",
    url: "https://www.amazon.com/dp/B00U0P0GHM?tag=rendelivers-20"
  },
  {
    id: "aff-tools-cartman-205pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "CARTMAN 205-Piece Tool Set, Ratchet Sockets with Plastic Toolbox",
    tagline: "Ren's pick.",
    price: "$109.99",
    checked: "2026-10-05",
    img: "assets/aff-tools-cartman-143pc.jpg",
    url: "https://www.amazon.com/dp/B0871WY8DQ?tag=rendelivers-20"
  },
  {
    id: "aff-tools-craftsman-262pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "CRAFTSMAN 262-Piece Mechanic Tool Set with 3-Drawer VERSASTACK Box (CMMT45309)",
    tagline: "Ren's pick: the whole shop in a box — SAE and metric sockets, ratchets, wrenches, hex keys.",
    price: "$249.19",
    checked: "2026-10-05",
    img: "assets/aff-tools-craftsman-262pc.jpg",
    url: "https://www.amazon.com/dp/B0CNKXHGZT?tag=rendelivers-20"
  },
  {
    id: "aff-tools-gearwrench-219pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "GEARWRENCH 219-Pc. Mechanics Tool Set in 3 Drawer Storage Box (80940)",
    tagline: "Ren's pick.",
    price: "$257.03",
    img: "assets/aff-tools-gearwrench-219pc.jpg",
    url: "https://www.amazon.com/dp/B00OL2XEJ2?tag=rendelivers-20"
  },
  {
    id: "aff-tools-milw-packout-106pc",
    section: "catalog",
    sub: "TOOL SETS",
    name: "Milwaukee 106PC Ratchet and Socket Set in PACKOUT Organizer, SAE/Metric (48-22-9486)",
    tagline: "Ren's pick.",
    price: "$324.99",
    img: "assets/aff-tools-milw-packout-106pc.jpg",
    url: "https://www.amazon.com/dp/B0892TB6VQ?tag=rendelivers-20"
  },
  {
    id: "tile-hole-saw-kit-brschnitt",
    section: "tile",
    sub: "HOLE SAWS",
    name: "BRSCHNITT Tile Hole Saw Kit - Diamond Core Drill Bits",
    tagline: "1/4\" to 2-1/2\" bits plus finger bit and chamfer bit — for porcelain, ceramic, marble, and granite.",
    price: "$84.14",
    img: "assets/tile-hole-saw-kit-brschnitt.jpg",
    url: "https://www.amazon.com/dp/B0D9VT52ZS?tag=rendelivers-20"
  },
  {
    id: "tile-dewalt-wet-saw-dwc860w",
    section: "tile",
    sub: "WET SAWS",
    name: "DEWALT Wet Tile Saw, 4-3/8-Inch (DWC860W)",
    tagline: "Handheld wet saw for tile and masonry — plunge cuts without the dust cloud.",
    price: "$169.99",
    img: "assets/tile-dewalt-wet-saw-dwc860w.jpg",
    url: "https://www.amazon.com/dp/B003BVW5NU?tag=rendelivers-20"
  },
  {
    id: "tile-dewalt-wet-saw-d36000s",
    section: "tile",
    sub: "WET SAWS",
    name: "DEWALT Wet Tile Saw with Stand, 10-Inch (D36000S)",
    tagline: "15-amp, 1,220 MWO — the full-size tile saw for big jobs. Amazon's Choice.",
    price: "$1,379.00",
    img: "assets/tile-dewalt-wet-saw-d36000s.jpg",
    url: "https://www.amazon.com/dp/B08526D2PK?tag=rendelivers-20"
  },
  {
    id: "tile-vevor-wet-saw-10in",
    section: "tile",
    sub: "WET SAWS",
    name: "VEVOR Wet Tile Saw with Stand, 10-Inch",
    tagline: "65Mn steel blade, 4500 RPM, 0-45° miter — for cutting tile and stone.",
    price: "$799.90",
    img: "assets/tile-vevor-wet-saw-10in.jpg",
    url: "https://www.amazon.com/dp/B0CGX5YXWC?tag=rendelivers-20"
  },
  {
    id: "tile-rubi-dc250-python",
    section: "tile",
    sub: "WET SAWS",
    name: "RUBI Electric Cutter DC-250 Python 1200, 48\" Cut",
    tagline: "48-inch cutting length for porcelain stoneware — the pro's bridge saw.",
    price: "$2,064.76",
    img: "assets/tile-rubi-dc250-python.jpg",
    url: "https://www.amazon.com/dp/B00Y02GAH6?tag=rendelivers-20"
  },
  {
    id: "tile-dewalt-d24000s",
    section: "tile",
    sub: "WET SAWS",
    name: "DEWALT Wet Tile Saw with Stand, 10-Inch (D24000S)",
    tagline: "Heavy-duty 10-inch with stand — 4.7 stars, 100+ bought last month. Overall Pick.",
    price: "$799.00",
    img: "assets/tile-dewalt-d24000s.jpg",
    url: "https://www.amazon.com/dp/B000J0BG7W?tag=rendelivers-20"
  },
  {
    id: "tile-makita-xcc01z",
    section: "tile",
    sub: "WET SAWS",
    name: "Makita XCC01Z 18V LXT Cordless 5\" Wet/Dry Masonry Saw",
    tagline: "Brushless cordless, AWS capable — wet or dry cutting, tool only.",
    price: "$263.00",
    img: "assets/tile-makita-xcc01z.jpg",
    url: "https://www.amazon.com/dp/B09FCW88FH?tag=rendelivers-20"
  },
  {
    id: "tile-delta-cruzer-10in",
    section: "tile",
    sub: "WET SAWS",
    name: "Delta 10 in. Cruzer Wet Tile/Stone Saw",
    tagline: "10-inch wet saw for tile and stone — 4.3 stars.",
    price: "$759.99",
    img: "assets/tile-delta-cruzer-10in.jpg",
    url: "https://www.amazon.com/dp/B07Y5TL11L?tag=rendelivers-20"
  },
  {
    id: "tile-ridgid-r4031s",
    section: "tile",
    sub: "WET SAWS",
    name: "RIDGID 7 Inch Wet Tile Saw with Stand (R4031S) - Renewed",
    tagline: "9 amp, laser guide, heavy duty — renewed, 5.0 stars.",
    price: "$715.00",
    img: "assets/tile-ridgid-r4031s.jpg",
    url: "https://www.amazon.com/dp/B0BRYLH126?tag=rendelivers-20"
  },
  {
    id: "tile-lozlin-hole-saw",
    section: "tile",
    sub: "HOLE SAWS",
    name: "LOZLIN 20/35/55mm Diamond Hole Saw Step Drill Bit",
    tagline: "Three hole sizes in one — vacuum brazed, anti-chip, for tile/porcelain/granite. Amazon's Choice.",
    price: "$22.99",
    img: "assets/tile-lozlin-hole-saw.jpg",
    url: "https://www.amazon.com/dp/B0DX9LJNDB?tag=rendelivers-20"
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
          '<span class="price' + (p.price.length > 14 ? ' price-note' : '') + '">' + rdEsc(p.price) + '</span>' +
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

/* Hover intent: wait 1200ms and require the pointer to actually move onto the
   card, so quick mouse passes and carousel auto-scrolls don't fire it. */
var rdHoverTimer = null;
var rdPointerX = -1, rdPointerY = -1;
document.addEventListener('pointermove', function (e) {
  rdPointerX = e.clientX; rdPointerY = e.clientY;
}, { passive: true });
/* True when the pointer itself moved since the mouseover fired. If it didn't,
   the card slid under a resting pointer (carousel auto-scroll) — not real hover intent. */
function rdPointerMoved(hx, hy) {
  return Math.abs(rdPointerX - hx) >= 10 || Math.abs(rdPointerY - hy) >= 10;
}
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
  var hx1 = e.clientX, hy1 = e.clientY;
  rdHoverTimer = setTimeout(function () {
    rdHoverTimer = null;
    if (rdLbEl && !rdLbEl.hidden) return;
    if (!rdPointerMoved(hx1, hy1)) return; /* resting pointer + moving card = no intent */
    var b = card.querySelector('.btn-sample');
    if (!b) return;
    rdLbHoverCard = card;
    rdLbOpen(b.getAttribute('data-sample'), b.getAttribute('data-name'), null, false);
  }, 1200);
});

document.addEventListener('mouseout', function (e) {
  var tgt = (e.target && e.target.closest) ? e.target : null;
  var card = tgt ? tgt.closest('article.card[data-tpl]') : null;
  if (!card) return;
  if (e.relatedTarget && card.contains(e.relatedTarget)) return;
  rdClearHoverTimer();
  card.dataset.rdLbArmed = '';
});

/* Product cards: hover over the PICTURE shows it enlarged in the lightbox.
   Image-only trigger + 1200ms intent delay, so scrolling past cards never pops it. */
document.addEventListener('mouseover', function (e) {
  if (!rdCanHover()) return;
  var tgt = (e.target && e.target.closest) ? e.target : null;
  var link = tgt ? tgt.closest('a.card-img-link') : null;
  if (!link) return;
  var card = link.closest('article.card[data-zoom]');
  if (!card) return;
  if (e.relatedTarget && card.contains(e.relatedTarget)) return;
  if (card.dataset.rdLbArmed === '0') return;
  if (rdLbEl && !rdLbEl.hidden) return;
  if (rdHoverTimer) return;
  var hx2 = e.clientX, hy2 = e.clientY;
  rdHoverTimer = setTimeout(function () {
    rdHoverTimer = null;
    if (rdLbEl && !rdLbEl.hidden) return;
    if (!rdPointerMoved(hx2, hy2)) return; /* resting pointer + moving card = no intent */
    var img = card.querySelector('.card-img-link img');
    var h3 = card.querySelector('.card-body h3');
    var src = img ? (img.getAttribute('src') || '') : '';
    var name = h3 ? h3.textContent : '';
    if (!src) return;
    rdLbHoverCard = card;
    rdLbOpen(src, name, null, false);
    var cap = rdLbEl.querySelector('.rd-lb-cap');
    if (cap) cap.textContent = name;
  }, 1200);
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
var TOP_PICKS = ["will-work-for-diesel", "flag-hammer", "aff-calc-4065", "tpl-toolbox-talk", "aff-lawn-husqvarna-z254", "aff-swanson-s0101", "tpl-estimate"];

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
    if (track.scrollLeft >= max - 8) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (track.scrollLeft + w >= max - 8) {
      track.scrollTo({ left: max, behavior: "smooth" });
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
  /* 2026-10-04: honor ?sub= filter params from the nav pill dropdown links
     (e.g. apparel.html?sub=SHIRTS). Case-insensitive match against p.sub. */
  var m = /[?&]sub=([^&]*)/.exec(location.search);
  var sub = m ? decodeURIComponent(m[1].replace(/\+/g, " ")).toUpperCase() : null;
  PRODUCTS.forEach(function (p) {
    if (p.section === section && p.id !== skipId &&
        (!sub || String(p.sub || "").toUpperCase() === sub)) html += rdCardHTML(p, false);
  });
  document.getElementById(elId).innerHTML = html;
}

/* 2026-10-04: on-page subcategory filter dropdown (Brandon's direction:
   category pages get a single dropdown filter instead of pill rows).
   Builds options from distinct p.sub values in PRODUCTS for the section,
   preselects from ?sub= (case-insensitive), navigates on change. */
function rdInitSubfilter(section) {
  var sel = document.getElementById("subfilter");
  if (!sel || typeof PRODUCTS === "undefined") return;
  var seen = {}, subs = [];
  PRODUCTS.forEach(function (p) {
    if (p.section === section && p.sub) {
      var k = String(p.sub).toUpperCase();
      if (!seen[k]) { seen[k] = 1; subs.push(p.sub); }
    }
  });
  var wrap = sel.closest(".subfilter-wrap");
  if (!subs.length) { if (wrap) wrap.style.display = "none"; return; }
  var m = /[?&]sub=([^&]*)/.exec(location.search);
  var cur = m ? decodeURIComponent(m[1].replace(/\+/g, " ")).toUpperCase() : null;
  var html = '<option value="">All</option>';
  subs.forEach(function (s) {
    var esc = String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    html += '<option value="' + esc + '"' + (cur === String(s).toUpperCase() ? " selected" : "") + ">" + esc + "</option>";
  });
  sel.innerHTML = html;
  sel.addEventListener("change", function () {
    var v = sel.value;
    var base = location.pathname.split("/").pop() || "index.html";
    location.href = v ? base + "?sub=" + encodeURIComponent(v) : base;
  });
}

/* Mobile nav dropdowns: position fixed below the nav so overflow-x doesn't clip them. */
(function () {
  if (window.innerWidth > 768) return;
  var drops = document.querySelectorAll('.top-nav .nav-drop');
  drops.forEach(function (drop) {
    var link = drop.querySelector(':scope > a');
    var menu = drop.querySelector(':scope > .nav-menu');
    if (!link || !menu) return;
    link.addEventListener('click', function (e) {
      // First tap opens the menu, second tap follows the link
      if (!drop.classList.contains('open')) {
        e.preventDefault();
        // Close any other open dropdowns
        document.querySelectorAll('.top-nav .nav-drop.open').forEach(function (d) {
          if (d !== drop) d.classList.remove('open');
        });
        // Position the menu fixed just below the nav
        var nav = drop.closest('.top-nav');
        var navRect = nav.getBoundingClientRect();
        menu.style.top = (navRect.bottom + 4) + 'px';
        drop.classList.add('open');
      }
      // Second tap (when .open) follows the link naturally
    });
  });
  // Tap outside closes open dropdowns
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.top-nav .nav-drop')) {
      document.querySelectorAll('.top-nav .nav-drop.open').forEach(function (d) {
        d.classList.remove('open');
      });
    }
  });
})();

/* Close mobile nav dropdowns on scroll (fixed menus don't scroll with page). */
(function () {
  if (window.innerWidth > 768) return;
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        document.querySelectorAll('.top-nav .nav-drop.open').forEach(function (d) {
          d.classList.remove('open');
        });
        ticking = false;
      });
    }
  }, { passive: true });
})();
