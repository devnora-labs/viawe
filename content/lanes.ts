import { clips, shots } from "./media";

export const lanes = [
  {
    id: "business",
    name: "Business Growth",
    lead: "You have a business to move forward. We handle the parts that get in the way.",
    body: "Setup and consultancy, brand and identity, marketing that reaches real customers, the tools your team runs on, the people you need to hire, and the support to expand when you are ready.",
    items: [
      "Business setup & consultancy",
      "Branding & identity",
      "Digital & offline marketing",
      "Websites & operating tools",
      "Staffing & recruitment",
      "Franchise & expansion",
    ],
    shot: shots.business,
    clip: clips.business,
  },
  {
    id: "everyday",
    name: "Everyday Services",
    lead: "Something at home needs fixing. We send someone who knows how.",
    body: "Verified technicians and trained professionals for the work a household actually needs, booked directly and delivered at your door across Vijayawada.",
    items: [
      "Appliance & electrical repair",
      "Plumbing & maintenance",
      "Cleaning & pest control",
      "Vehicle & computer service",
      "Tuition & coaching",
      "Grooming at home",
    ],
    shot: shots.everyday,
    clip: clips.everyday,
  },
];
