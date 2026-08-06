import { shots } from "./media";

// The Road (docs/project/content.md → Road): Dream → Setup → Brand → Build →
// Market → Grow → Expand. Dream is the entry state, carried by the chapter
// heading; the six stages below are the journey through it.
export const stages = [
  {
    name: "Setup",
    line: "Location, interiors, vendors and launch prep coordinated as one push — so opening day has a date.",
    shot: shots.setup,
  },
  {
    name: "Brand",
    line: "A name, an identity and a voice decided before anything is printed or posted — so everything after looks like one company.",
    shot: shots.brand,
  },
  {
    name: "Build",
    line: "The website, the booking flow, the dashboard your team checks every morning — built to run the business, not just describe it.",
    shot: shots.build,
  },
  {
    name: "Market",
    line: "Strategy, scripts, shoots, campaigns. Month by month: planned, produced, posted, reported, improved.",
    shot: shots.market,
  },
  {
    name: "Grow",
    line: "Growth becomes routine: what worked is repeated, what didn't is dropped, and the next step is already planned.",
    shot: shots.grow,
  },
  {
    name: "Expand",
    line: "A second outlet, a franchise model, a new city. The team that set up the first one sets up the next.",
    shot: shots.expand,
  },
];

// How we work — the actual operating rhythm, not an agency diagram.
export const approach = [
  {
    name: "It starts with a conversation",
    line: "We confirm what you need and what success looks like before anyone quotes anything. No forms to fight through.",
  },
  {
    name: "One group, everyone in it",
    line: "Your project runs in a dedicated group with the people doing the work — strategy, creative, build — not an account layer.",
  },
  {
    name: "Plan first, then production",
    line: "Strategy, calendars and scripts are agreed before shoots and builds begin, so approvals are quick and nothing is wasted.",
  },
  {
    name: "Reported, then improved",
    line: "Every cycle closes with a report you can actually read — and the next optimisation already scheduled.",
  },
];
