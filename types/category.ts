// Shape of data/category.json. `common` holds site-wide content; `categories` holds per-page sections.

export type NavItem = { label: string; href: string };

export type SocialName = "Instagram" | "Facebook" | "LinkedIn" | "YouTube";
export type Social = { name: SocialName; href: string };

export type Site = {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  street: string;
  city: string;
  hours: string;
  copyright: string;
};

export type Stat = { value: number; suffix: string; label: string };

export type PageHeroContent = {
  /** Browser tab title */
  metaTitle: string;
  /** Breadcrumb label */
  crumb: string;
  /** Hero heading; "\n" starts a new line */
  title: string;
  subtitle: string;
  image: string;
};

export type PageKey = "about" | "projects" | "gallery" | "services" | "team" | "process" | "faq" | "contact";

export type Cta = { title: string; text: string; buttonLabel: string; image: string };

export type Common = {
  site: Site;
  navigation: NavItem[];
  moreNavigation: NavItem[];
  socials: Social[];
  /** Every photo the site uses, keyed by name; paths point into /public/images/<page>/ */
  assets: Record<string, string>;
  pageHeroes: Record<PageKey, PageHeroContent>;
  stats: Stat[];
  cta: Cta;
};

export type Slide = { image: string; title: string; subtitle: string };

export type HomeAbout = {
  eyebrow: string;
  titleLines: string[];
  text: string;
  features: string[];
  yearsBadge: Stat;
};

export type Service = { slug: string; title: string; text: string; image: string };

export type ProjectCategory = "Residential" | "Commercial" | "Hospitality";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  area: string;
  duration: string;
  cover: string;
  gallery: string[];
  text: string;
};

export type ServiceDetail = {
  intro: string;
  features: string[];
  gallery: string[];
  category: ProjectCategory;
  duration: string;
};

export type GalleryItem = { src: string; tag: string };
export type TeamMember = { name: string; role: string; image: string };
export type ProcessStep = { title: string; text: string; image: string };
export type Faq = { q: string; a: string };
export type Value = { title: string; image: string };

export type Pillar = {
  key: "mission" | "vision";
  label: string;
  image: string;
  statement: string;
  points: string[];
};

export type Sections = {
  Home: { slides: Slide[]; about: HomeAbout };
  About: { values: Value[]; missionVision: Pillar[] };
  Services: { items: Service[]; details: Record<string, ServiceDetail>; highlights: Stat[] };
  Projects: { filters: string[]; items: Project[] };
  Gallery: { filters: string[]; items: GalleryItem[] };
  Team: { items: TeamMember[] };
  Process: { steps: ProcessStep[] };
  FAQ: { items: Faq[] };
};

export type CategoryData = {
  common: Common;
  categories: { AuraSpaces: { sections: Sections } };
};
