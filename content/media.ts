// Two fixed source queries so next.config can pin `search` to exact matches:
// a 4K plate for the full-bleed hero, a lighter one everywhere else. Pulling
// every image at 4K makes the optimizer time out on the heavier originals.
export const sources = {
  hero: "?auto=format&fit=crop&q=80&w=3840",
  section: "?auto=format&fit=crop&q=80&w=1800",
};

const shot = (id: string, source = sources.section) =>
  `https://images.unsplash.com/photo-${id}${source}`;

export const shots = {
  hero: {
    src: shot("1449157291145-7efd050a4d0e", sources.hero),
    alt: "Office towers rising into low cloud",
  },
  business: {
    src: shot("1486406146926-c627a92ad1ab"),
    alt: "Glass towers seen from the street below",
  },
  everyday: {
    src: shot("1523217582562-09d0def993a6"),
    alt: "A house of clean white volumes in afternoon light",
  },
  thread: {
    src: shot("1524230572899-a752b3835840"),
    alt: "A long arched corridor running to a single opening",
  },
  floor: {
    src: shot("1504384308090-c894fdcc538d"),
    alt: "An open working floor under exposed ceilings",
  },
  plan: {
    src: shot("1503387762-592deb58ef4e"),
    alt: "An architect drawing a floor plan by hand",
  },
  brand: {
    src: shot("1494891848038-7bd202a2afeb"),
    alt: "Crimson and graphite panels meeting at a sharp edge",
  },
  build: {
    src: shot("1470075801209-17f9ec0cada6"),
    alt: "A glass structure with traffic streaking past its base",
  },
  reach: {
    src: shot("1465447142348-e9952c393450"),
    alt: "A highway interchange braiding together from above",
  },
  scale: {
    src: shot("1477959858617-67f85cf4f1df"),
    alt: "A dense skyline seen from above at first light",
  },
  approach: {
    src: shot("1502005229762-cf1b2da7c5d6"),
    alt: "A staircase climbing through a light-filled interior",
  },
  closing: {
    src: shot("1518005020951-eccb494ad742"),
    alt: "A curved facade rising above the street",
  },
  night: {
    src: shot("1470723710355-95304d8aece4"),
    alt: "Traffic drawing light trails through a city at night",
  },
};

// Short muted loops that fade in over the still on hover. Kept to the SD
// renditions so a first hover starts playing without a visible wait.
const clip = (id: string, file: string) =>
  `https://videos.pexels.com/video-files/${id}/${id}-${file}.mp4`;

export const clips = {
  business: clip("1721294", "sd_640_360_25fps"),
  everyday: clip("3444434", "sd_640_360_30fps"),
  night: clip("2099536", "sd_640_360_30fps"),
};
