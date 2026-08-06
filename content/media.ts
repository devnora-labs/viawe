// Named media slots (docs/project/architect.md → Media architecture). Real
// photography replaces a slot's src without layout rewrites; alt text always
// describes what is actually pictured — no stand-in is captioned as Via-We's
// own. Every current frame is a `placeholder` awaiting the Vijayawada shoot.
//
// Two fixed source queries so next.config can pin `search` to exact matches:
// a 4K plate for full-bleed moments, a lighter one everywhere else.
export type MediaSlot = {
  id: string;
  purpose: string;
  src: string | null;
  alt: string;
  status: "ready" | "placeholder" | "approval-required";
};

export const sources = {
  full: "?auto=format&fit=crop&q=80&w=3840",
  section: "?auto=format&fit=crop&q=80&w=1800",
};

const shot = (id: string, source = sources.section) =>
  `https://images.unsplash.com/photo-${id}${source}`;

export const shots = {
  office: {
    id: "office",
    purpose: "hero human frame — first evidence the company is made of people",
    src: shot("1543269865-cbf427effbad"),
    alt: "A team gathered around a table, working through a plan together",
    status: "placeholder",
  },
  team: {
    id: "team",
    purpose: "belief chapter — people doing the work",
    src: shot("1522071820081-009f0129c71c"),
    alt: "A small team working together over laptops",
    status: "placeholder",
  },
  table: {
    id: "table",
    purpose: "belief chapter — the shared table",
    src: shot("1519389950473-47ba0277781c"),
    alt: "Laptops and notebooks across a shared work table, seen from above",
    status: "placeholder",
  },
  setup: {
    id: "setup",
    purpose: "road stage — setup",
    src: shot("1581092160562-40aa08e78837"),
    alt: "Hands drafting a technical plan beside a toolbox",
    status: "placeholder",
  },
  brand: {
    id: "brand",
    purpose: "road stage — brand",
    src: shot("1561070791-2526d30994b5"),
    alt: "Colour swatches and brand designs spread on a desk",
    status: "placeholder",
  },
  build: {
    id: "build",
    purpose: "road stage — build",
    src: shot("1498050108023-c5249f4df085"),
    alt: "A laptop on a clean desk showing code",
    status: "placeholder",
  },
  market: {
    id: "market",
    purpose: "road stage — market",
    src: shot("1551288049-bebda4e38f71"),
    alt: "A screen of campaign analytics charts",
    status: "placeholder",
  },
  grow: {
    id: "grow",
    purpose: "road stage — grow",
    src: shot("1441984904996-e0b6ba687e04"),
    alt: "A retail store interior with racks ready for customers",
    status: "placeholder",
  },
  expand: {
    id: "expand",
    purpose: "road stage — expand",
    src: shot("1470723710355-95304d8aece4"),
    alt: "Traffic drawing light trails through a city at night",
    status: "placeholder",
  },
  approach: {
    id: "approach",
    purpose: "rhythm chapter band — the work planned in the open",
    src: shot("1531973576160-7125cd663d86", sources.full),
    alt: "An open office floor with people working at long tables",
    status: "placeholder",
  },
  closing: {
    id: "closing",
    purpose: "begin chapter backdrop",
    src: shot("1497366216548-37526070297c", sources.full),
    alt: "A calm modern office corridor",
    status: "placeholder",
  },
  desk: {
    id: "desk",
    purpose: "menu panel",
    src: shot("1520333789090-1afc82db536a"),
    alt: "A creative working between a phone and a laptop at a studio desk",
    status: "placeholder",
  },
} satisfies Record<string, MediaSlot>;
