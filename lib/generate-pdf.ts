import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";

// ----------------------------------------------------------------
// Brand colors
// ----------------------------------------------------------------
const BLUE = "#2563EB";
const DARK = "#1e293b";
const MUTED = "#64748b";
const LIGHT_BLUE = "#dbeafe";
const WHITE = "#ffffff";
const BORDER = "#e2e8f0";

// ----------------------------------------------------------------
// Styles
// ----------------------------------------------------------------
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: DARK,
    backgroundColor: WHITE,
  },
  header: {
    marginBottom: 24,
    borderBottom: `2px solid ${BLUE}`,
    paddingBottom: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
  },
  subtitle: {
    fontSize: 11,
    color: MUTED,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    marginTop: 18,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: `1px solid ${BORDER}`,
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingLeft: 8,
  },
  checkbox: {
    width: 12,
    height: 12,
    border: `1.5px solid ${BLUE}`,
    borderRadius: 2,
    marginRight: 10,
  },
  itemText: {
    fontSize: 10,
    flex: 1,
  },
  pricingCard: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  pricingType: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
  },
  pricingRange: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginTop: 4,
  },
  pricingNote: {
    fontSize: 9,
    color: MUTED,
    marginTop: 2,
  },
  factorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    paddingLeft: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: BLUE,
    marginRight: 8,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTop: `1px solid ${BORDER}`,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: MUTED,
  },
  ctaBox: {
    backgroundColor: BLUE,
    borderRadius: 8,
    padding: 16,
    marginTop: 24,
  },
  ctaText: {
    color: WHITE,
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  ctaSubtext: {
    color: WHITE,
    fontSize: 10,
    textAlign: "center",
    marginTop: 4,
    opacity: 0.9,
  },
});

// ----------------------------------------------------------------
// Checklist Data
// ----------------------------------------------------------------
const checklistSections = [
  {
    title: "Kitchen",
    items: [
      "Wipe all countertops and backsplash",
      "Clean and sanitize sink and faucet",
      "Wipe exterior of all appliances (fridge, microwave, oven, dishwasher)",
      "Clean inside microwave",
      "Empty and reline trash can",
      "Check dishwasher is empty and clean",
      "Restock dish soap, sponge, and paper towels",
      "Wipe cabinet fronts and handles",
      "Sweep and mop floor",
    ],
  },
  {
    title: "Bathroom(s)",
    items: [
      "Scrub and sanitize toilet (inside, outside, base)",
      "Clean shower/tub — remove soap scum and hair",
      "Clean glass shower door or replace curtain liner",
      "Wipe vanity, sink, and faucet",
      "Clean mirror (streak-free)",
      "Restock toilet paper, hand soap, shampoo, conditioner",
      "Replace used towels with fresh, folded set",
      "Empty trash can and reline",
      "Sweep and mop floor",
    ],
  },
  {
    title: "Bedroom(s)",
    items: [
      "Strip and replace all bed linens (sheets, pillowcases, duvet cover)",
      "Check mattress protector — replace if stained",
      "Fluff and arrange pillows",
      "Dust nightstands, dresser, and headboard",
      "Empty and wipe inside dresser drawers",
      "Check under bed for left-behind items",
      "Vacuum carpet or sweep/mop hard floors",
      "Wipe light switches and door handles",
    ],
  },
  {
    title: "Living Area",
    items: [
      "Vacuum or sweep all floors",
      "Fluff and arrange sofa cushions and throw pillows",
      "Dust all surfaces (coffee table, TV stand, shelves)",
      "Wipe remote controls and electronics",
      "Clean mirrors and glass surfaces",
      "Check for and remove any guest left-behinds",
      "Wipe light switches and door handles",
    ],
  },
  {
    title: "Entry / Exterior",
    items: [
      "Sweep entryway and porch/patio",
      "Clean front door and handle",
      "Check lockbox / smart lock is functional",
      "Shake out doormat",
      "Ensure porch light is working",
      "Place welcome note or guidebook in visible spot",
    ],
  },
];

// ----------------------------------------------------------------
// Pricing Data
// ----------------------------------------------------------------
const pricingData = [
  { type: "1 Bedroom / Studio", range: "$75 — $120", note: "Avg. turnover time: 1.5–2 hrs" },
  { type: "2 Bedrooms", range: "$100 — $160", note: "Avg. turnover time: 2–3 hrs" },
  { type: "3+ Bedrooms", range: "$140 — $220", note: "Avg. turnover time: 3–4 hrs" },
];

const pricingFactors = [
  "Property size and layout complexity",
  "Number of bathrooms",
  "Deep clean vs. standard turnover clean",
  "Laundry services (linens, towels)",
  "Restock supplies (toiletries, kitchen basics)",
  "Same-day or rush booking surcharges",
  "Pet-friendly properties (extra hair removal)",
];

// ----------------------------------------------------------------
// PDF Document Component
// ----------------------------------------------------------------
const ChecklistDocument = () =>
  React.createElement(
    Document,
    null,
    // Page 1: Checklist
    React.createElement(
      Page,
      { size: "LETTER", style: styles.page },
      React.createElement(
        View,
        { style: styles.header },
        React.createElement(Text, { style: styles.title }, "Airbnb Turnover Cleaning Checklist"),
        React.createElement(
          Text,
          { style: styles.subtitle },
          "Room-by-room guide for Dallas short-term rental hosts"
        )
      ),
      ...checklistSections.map((section) =>
        React.createElement(
          View,
          { key: section.title, wrap: false },
          React.createElement(Text, { style: styles.sectionTitle }, section.title),
          ...section.items.map((item, i) =>
            React.createElement(
              View,
              { key: `${section.title}-${i}`, style: styles.checklistItem },
              React.createElement(View, { style: styles.checkbox }),
              React.createElement(Text, { style: styles.itemText }, item)
            )
          )
        )
      ),
      React.createElement(
        View,
        { style: styles.footer },
        React.createElement(Text, null, "Dallas Airbnb Cleaning Resources"),
        React.createElement(Text, null, "Page 1 of 2")
      )
    ),
    // Page 2: Pricing Guide
    React.createElement(
      Page,
      { size: "LETTER", style: styles.page },
      React.createElement(
        View,
        { style: styles.header },
        React.createElement(Text, { style: styles.title }, "Dallas Airbnb Cleaning Pricing Guide"),
        React.createElement(
          Text,
          { style: styles.subtitle },
          "What turnover cleaning should cost for your property"
        )
      ),
      React.createElement(
        Text,
        { style: styles.sectionTitle },
        "Estimated Pricing by Property Type"
      ),
      ...pricingData.map((item) =>
        React.createElement(
          View,
          { key: item.type, style: styles.pricingCard },
          React.createElement(Text, { style: styles.pricingType }, item.type),
          React.createElement(Text, { style: styles.pricingRange }, item.range),
          React.createElement(Text, { style: styles.pricingNote }, item.note)
        )
      ),
      React.createElement(Text, { style: styles.sectionTitle }, "What Affects Your Price"),
      ...pricingFactors.map((factor, i) =>
        React.createElement(
          View,
          { key: `factor-${i}`, style: styles.factorRow },
          React.createElement(View, { style: styles.bullet }),
          React.createElement(Text, { style: styles.itemText }, factor)
        )
      ),
      React.createElement(
        View,
        { style: styles.ctaBox },
        React.createElement(
          Text,
          { style: styles.ctaText },
          "Want to connect with vetted Dallas Airbnb cleaners?"
        ),
        React.createElement(
          Text,
          { style: styles.ctaSubtext },
          "Reply to your welcome email or visit our site — we'll match you with trusted local pros."
        )
      ),
      React.createElement(
        View,
        { style: styles.footer },
        React.createElement(Text, null, "Dallas Airbnb Cleaning Resources"),
        React.createElement(Text, null, "Page 2 of 2")
      )
    )
  );

// ----------------------------------------------------------------
// Generate the PDF as a buffer
// ----------------------------------------------------------------
export async function generateChecklistPdf(): Promise<Buffer> {
  return renderToBuffer(React.createElement(ChecklistDocument));
}
