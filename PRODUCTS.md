# Ren Delivers Storefront — Product Audit

Built 2026-09-29. Every buy URL below was verified live on 2026-09-29
(Zazzle store page / product pages; Etsy listing URLs via Brandon's own
Pinterest pins linking to his listings; Amazon via KDP live-listing notes).

## Site structure (restructured 2026-09-29 per Brandon's sketch)

- `index.html` — homepage: welcome banner, featured product slot, category buttons
- `shirts.html` — Shirts category page
- `templates.html` — Contractor Templates category page
- `software.html` — Software & Apps (Coming Soon placeholder)
- `catalog.html` — Products Catalog (Coming Soon placeholder; future home of Ren's Picks affiliate picks)
- `products.js` — shared catalog data + render helpers (`rdRenderFeatured`, `rdRenderGrid`)
- `styles.css` — mobile-first, no frameworks, hi-vis yellow on dark

To feature a different product: change `FEATURED_ID` at the top of
`products.js`, or open the homepage with `?p=<id>` (e.g. `?p=rocket-surgery`).
The `?p=` param wins over `FEATURED_ID`. The featured slot lives on the
homepage so video traffic (link in bio) lands straight on the buy button.

## Shirts (Zazzle) — 16 live on site (full public storefront)

Prices are Zazzle sale prices observed 2026-09-30; Zazzle rotates sales, so they may vary.
One more product exists but is hidden on the public storefront ("BORN TO FUCKING SEND IT T-Shirt" — content filter) and is intentionally not listed.

| id | Name | Price | Buy URL |
|---|---|---|---|
| alien-probe | I Identify As An Alien Probe | $21.17 | https://www.zazzle.com/i_identify_as_an_alien_probe_funny_t_shirt-256898836033722814 |
| rocket-surgery | It's Not Rocket Surgery | $21.17 | https://www.zazzle.com/its_not_rocket_surgery_funny_t_shirt-256282970006775531 |
| i-live-at-work | I Live At Work | $21.17 | https://www.zazzle.com/i_live_at_work_funny_t_shirt-256701905762439762 |
| u-should-b-here | U Should B Here — Three Wise Monkeys | $21.17 | https://www.zazzle.com/u_should_b_here_three_wise_monkeys_t_shirt-256699340606931396 |
| tax-deduction-onesie | Tax Deduction Baby Bodysuit | $18.11 | https://www.zazzle.com/tax_deduction_baby_bodysuit-256376515421563105 |
| tax-deduction-loading | Tax Deduction Loading Maternity Sweater | $37.87 | https://www.zazzle.com/maternity_sweater-256148487228465356 |
| catch-phrase | Catch Phrase T-Shirt | $21.17 | https://www.zazzle.com/catch_phrase_t_shirt-256850852354624644 |
| youre-did-it | You're DID IT! (Tri-Blend) | $41.74 | https://www.zazzle.com/youre_did_it_tri_blend_shirt-256225393109642624 |
| 509-local | 509 Local | $21.17 | https://www.zazzle.com/509_local_t_shirt-256155197980961687 |
| failed | Failed | $21.17 | https://www.zazzle.com/failed_t_shirt-256487586433084293 |
| osha-violator | OSHA Violator | $21.17 | https://www.zazzle.com/osha_violator_t_shirt-256187850197198627 |
| cant-spell-success | You Can't Spell Success | $21.17 | https://www.zazzle.com/you_cant_spell_success_t_shirt-256572297538962116 |
| government-controlled | Government Controlled | $21.17 | https://www.zazzle.com/government_controlled_t_shirt-256227880909253296 |
| nailed-it | Nailed It | $21.17 | https://www.zazzle.com/nailed_it_t_shirt-256030204063678285 |
| tomato-potato | Tomato Potato | $21.17 | https://www.zazzle.com/tomato_potato_t_shirt-256796967579186051 |
| level-1-beginner | Level 1 Beginner | $21.17 | https://www.zazzle.com/level_1_beginner_t_shirt-256610608693604359 |

## Templates (Etsy) — 35 live on site (full shop)

$14.95 is the shop's standard digital-template price (verified per listing 2026-09-30).

| id | Name | Price | Buy URL |
|---|---|---|---|
| tpl-estimate | Contractor Estimate Template | $14.95 | https://www.etsy.com/listing/4575994981/contractor-estimate-template-excel |
| tpl-kitchen-remodel | Kitchen Remodel Estimate Template | $14.95 | https://www.etsy.com/listing/4577323133/kitchen-remodel-estimate-template-excel |
| tpl-daily-log | Construction Daily Log Template | $14.95 | https://www.etsy.com/listing/4576009440/construction-daily-log-template-excel |
| tpl-invoice | Contractor Invoice Template | $14.95 | https://www.etsy.com/listing/4575987443/contractor-invoice-template-excel |
| tpl-change-order | Change Order Template | $14.95 | https://www.etsy.com/listing/4576005544/change-order-template-excel-contractor |
| tpl-schedule | Construction Schedule Template (Gantt) | $14.95 | https://www.etsy.com/listing/4581964387/construction-project-schedule-template |
| tpl-punch-list | Punch List Template | $14.95 | https://www.etsy.com/listing/4581984002/punch-list-template-excel-construction |
| tpl-painting-estimate | Painting Estimate Template | $14.95 | https://www.etsy.com/listing/4577344958/painting-estimate-template-excel-painter |
| tpl-fence-estimate | Fence Estimate Template | $14.95 | https://www.etsy.com/listing/4577325575/fence-estimate-template-excel-fencing |
| tpl-job-cost-tracker | Job Cost Tracker | $14.95 | https://www.etsy.com/listing/4577320901/job-cost-tracker-excel-construction |
| tpl-insulation-estimate | Insulation Estimate Template | $14.95 | https://www.etsy.com/listing/4577335768/insulation-estimate-template-excel |
| tpl-hvac-estimate | HVAC Estimate Template | $14.95 | https://www.etsy.com/listing/4577316391/hvac-estimate-template-excel-hvac-bid |
| tpl-cleaning-schedule | Cleaning Client Schedule Template | $14.95 | https://www.etsy.com/listing/4577314287/cleaning-client-schedule-template-excel |
| tpl-cleaning-checklist | House Cleaning Checklist Template | $14.95 | https://www.etsy.com/listing/4577312157/house-cleaning-checklist-template-excel |
| tpl-cleaning-invoice | House Cleaning Invoice Template | $14.95 | https://www.etsy.com/listing/4577327210/house-cleaning-invoice-template-excel |
| tpl-home-inspection | Home Inspection Checklist | $14.95 | https://www.etsy.com/listing/4577325418/home-inspection-checklist-excel-property |
| tpl-handyman-estimate | Handyman Estimate Template | $14.95 | https://www.etsy.com/listing/4577323072/handyman-estimate-template-excel |
| tpl-flooring-estimate | Flooring Estimate Template | $14.95 | https://www.etsy.com/listing/4577304267/flooring-estimate-template-excel |
| tpl-excavation-estimate | Excavation Estimate Template | $14.95 | https://www.etsy.com/listing/4577302635/excavation-estimate-template-excel |
| tpl-equipment-log | Equipment Maintenance Log | $14.95 | https://www.etsy.com/listing/4577317588/equipment-maintenance-log-excel-fleet |
| tpl-electrical-estimate | Electrical Estimate Template | $14.95 | https://www.etsy.com/listing/4577314022/electrical-estimate-template-excel |
| tpl-drywall-estimate | Drywall Estimate Template | $14.95 | https://www.etsy.com/listing/4576012794/drywall-estimate-template-excel-drywall |
| tpl-dog-scheduler | Dog Grooming Appointment Scheduler | $14.95 | https://www.etsy.com/listing/4575992493/dog-grooming-appointment-scheduler-excel |
| tpl-dog-invoice | Dog Grooming Invoice Template | $14.95 | https://www.etsy.com/listing/4575991795/dog-grooming-invoice-template-excel-pet |
| tpl-dog-intake | Dog Grooming Intake Form Template | $14.95 | https://www.etsy.com/listing/4575991163/dog-grooming-intake-form-template-excel |
| tpl-deck-estimate | Deck Estimate Template | $14.95 | https://www.etsy.com/listing/4575990507/deck-estimate-template-excel-deck-patio |
| tpl-crew-time | Crew Time Tracking Template | $14.95 | https://www.etsy.com/listing/4576008716/crew-time-tracking-template-excel |
| tpl-concrete-estimate | Concrete Estimate Template | $14.95 | https://www.etsy.com/listing/4575986631/concrete-estimate-template-excel-masonry |
| tpl-detailing-price | Car Detailing Price Sheet | $14.95 | https://www.etsy.com/listing/4576004690/car-detailing-price-sheet-excel-package |
| tpl-detailing-invoice | Car Detailing Invoice Template | $14.95 | https://www.etsy.com/listing/4575984213/car-detailing-invoice-template-excel |
| tpl-vehicle-checklist | Vehicle Condition Checklist | $14.95 | https://www.etsy.com/listing/4575983353/vehicle-condition-checklist-excel-car |
| tpl-bathroom-remodel | Bathroom Remodel Estimate Template | $14.95 | https://www.etsy.com/listing/4575982237/bathroom-remodel-estimate-template-excel |
| tpl-photo-shot-list | Photography Shot List Template | $14.95 | https://www.etsy.com/listing/4581950439/photography-shot-list-template-excel |
| tpl-photo-invoice | Photography Invoice Template | $14.95 | https://www.etsy.com/listing/4581947797/photography-invoice-template-excel |
| tpl-photo-booking | Photography Booking Contract Template | $14.95 | https://www.etsy.com/listing/4581957446/photography-booking-contract-template |

## Books

Removed 2026-09-29 per Brandon: kids' coloring books don't fit this
contractor-focused storefront. (Farm Friends Coloring Book, Amazon
https://www.amazon.com/dp/B0HKY77V16, $9.99 — lives on Amazon, not here.)

## Not included / could not verify

- **Jungle Friends Coloring Book** — still in KDP review as of 2026-09-29; no live Amazon listing found. Omitted per plan.
- **Electrical Estimate Template, Equipment Maintenance Log, Dog Grooming Appointment Scheduler (Etsy)** — listing URLs could not be verified: Etsy blocks automated fetching (403) and the listings are not indexed by search engines. They exist in the shop but no verified direct URL was available, so they were left out rather than linked to guesses. They can be added once their listing URLs are confirmed.
- **YouTube channel link** uses https://www.youtube.com/@rendelivers (handle confirmed in workspace notes; the old channel-ID URL with "ENxF" is dead).
