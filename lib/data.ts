const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  hero1: u("1618221195710-dd6b41faaea6", 2400),
  hero2: u("1600210492486-724fe5c67fb0", 2400),
  hero3: u("1616486338812-3dadae4b4ace", 2400),
  living1: u("1586023492125-27b2c045efd7"),
  living2: u("1600607687939-ce8a6c25118c"),
  living3: u("1616047006789-b7af5afb8c20"),
  living4: u("1600121848594-d8644e57abab"),
  living5: u("1615874959474-d609969a20ed"),
  living6: u("1616594039964-ae9021a400a0"),
  living7: u("1618219908412-a29a1bb7b86e"),
  living8: u("1617806118233-18e1de247200"),
  living9: u("1631679706909-1844bbd07221"),
  living10: u("1618220179428-22790b461013"),
  living11: u("1618221639244-c1a8502c0eb9"),
  kitchen1: u("1600585152220-90363fe7e115"),
  kitchen2: u("1565538810643-b5bdb714032a"),
  kitchen3: u("1556020685-ae41abfc9365"),
  kitchen4: u("1484154218962-a197022b5858"),
  apartment: u("1616046229478-9901c5536a45"),
  bedroom1: u("1505693416388-ac5ce068fe85"),
  bedroom2: u("1540518614846-7eded433c457"),
  bedroom3: u("1595526114035-0d45ed16cfbf"),
  bedroom4: u("1560448204-e02f11c3d0e2"),
  office1: u("1604328698692-f76ea9498e76"),
  office2: u("1524758631624-e2822e304c36"),
  restaurant1: u("1517248135467-4c7edcad34c4"),
  restaurant2: u("1552566626-52f8b828add9"),
  hotel1: u("1611892440504-42a792e24d32"),
  hotel2: u("1582719478250-c89cae4dc85b"),
  villa1: u("1615529182904-14819c35db37"),
  villa2: u("1598928506311-c55ded91a20c"),
  villa3: u("1583847268964-b28dc8f51f92"),
  villa4: u("1600494603989-9650cf6ddd3d"),
  decor1: u("1567016432779-094069958ea5"),
  decor2: u("1513694203232-719a280e022f"),
  extra1: u("1615873968403-89e068629265"),
  extra2: u("1615876234886-fd9a39fda97f"),
  extra3: u("1618220048045-10a6dbdf83e0"),
  extra4: u("1617103996702-96ff29b1c467"),
  extra5: u("1618221118493-9cfa1a1c00da"),
  extra6: u("1618221469555-7f3ad97540d6"),
  decor3: u("1616627561839-074385245ff6"),
};

export const services = [
  {
    slug: "residential",
    title: "Residential Design",
    text: "Homes that feel like you.",
    image: img.living1,
  },
  {
    slug: "commercial",
    title: "Commercial Spaces",
    text: "Offices and stores that inspire.",
    image: img.office1,
  },
  {
    slug: "consultation",
    title: "Interior Consultation",
    text: "Expert guidance, every step.",
    image: img.living7,
  },
  {
    slug: "hospitality",
    title: "Hospitality Design",
    text: "Hotels and restaurants with soul.",
    image: img.restaurant1,
  },
  {
    slug: "styling",
    title: "Styling & Decor",
    text: "The final layer of luxury.",
    image: img.decor2,
  },
  {
    slug: "turnkey",
    title: "Turnkey Execution",
    text: "From concept to keys in hand.",
    image: img.kitchen1,
  },
  {
    slug: "kitchen",
    title: "Kitchen Design",
    text: "Where function meets beauty.",
    image: img.kitchen2,
  },
  {
    slug: "bedroom",
    title: "Bedroom Design",
    text: "Calm retreats for deep rest.",
    image: img.extra1,
  },
  {
    slug: "lighting",
    title: "Lighting Design",
    text: "Layers of light, layers of mood.",
    image: img.extra2,
  },
  {
    slug: "furniture",
    title: "Furniture Curation",
    text: "Pieces chosen to last a lifetime.",
    image: img.extra3,
  },
  {
    slug: "renovation",
    title: "Home Renovation",
    text: "New life for familiar spaces.",
    image: img.extra4,
  },
  {
    slug: "3d",
    title: "3D Visualization",
    text: "See your space before it's built.",
    image: img.extra5,
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality";
  year: string;
  location: string;
  area: string;
  duration: string;
  cover: string;
  gallery: string[];
  text: string;
};

export const projects: Project[] = [
  {
    slug: "modern-living-room",
    title: "Modern Living Room",
    category: "Residential",
    year: "2024",
    location: "New Delhi",
    area: "1800 sq. ft.",
    duration: "3 Months",
    cover: img.hero1,
    gallery: [img.living2, img.living3, img.living4, img.decor1],
    text: "Natural textures, warm light and timeless furniture.",
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa",
    category: "Residential",
    year: "2024",
    location: "Goa",
    area: "6200 sq. ft.",
    duration: "8 Months",
    cover: img.villa1,
    gallery: [img.villa2, img.villa3, img.villa4, img.kitchen3],
    text: "Open, airy living framed by sea and sky.",
  },
  {
    slug: "office-interior",
    title: "Office Interior",
    category: "Commercial",
    year: "2023",
    location: "Gurugram",
    area: "12000 sq. ft.",
    duration: "5 Months",
    cover: img.office1,
    gallery: [img.office2, img.living10, img.decor2, img.living11],
    text: "A calm, focused workplace in warm neutrals.",
  },
  {
    slug: "restaurant-design",
    title: "Restaurant Design",
    category: "Hospitality",
    year: "2023",
    location: "Mumbai",
    area: "4500 sq. ft.",
    duration: "4 Months",
    cover: img.restaurant1,
    gallery: [img.restaurant2, img.decor3, img.kitchen4, img.living8],
    text: "Moody, intimate dining with crafted details.",
  },
  {
    slug: "minimal-bedroom",
    title: "Minimal Bedroom",
    category: "Residential",
    year: "2024",
    location: "Bengaluru",
    area: "600 sq. ft.",
    duration: "6 Weeks",
    cover: img.bedroom1,
    gallery: [img.bedroom2, img.bedroom3, img.bedroom4, img.decor1],
    text: "Soft layers and quiet tones for deep rest.",
  },
  {
    slug: "hotel-interior",
    title: "Hotel Interior",
    category: "Hospitality",
    year: "2022",
    location: "Jaipur",
    area: "28000 sq. ft.",
    duration: "11 Months",
    cover: img.hotel1,
    gallery: [img.hotel2, img.bedroom4, img.living5, img.restaurant2],
    text: "Heritage warmth meets contemporary comfort.",
  },
  {
    slug: "boutique-kitchen",
    title: "Boutique Kitchen",
    category: "Residential",
    year: "2024",
    location: "Chandigarh",
    area: "400 sq. ft.",
    duration: "2 Months",
    cover: img.kitchen1,
    gallery: [img.kitchen2, img.kitchen3, img.kitchen4, img.decor3],
    text: "Stone, oak and brass in perfect balance.",
  },
  {
    slug: "studio-showroom",
    title: "Studio Showroom",
    category: "Commercial",
    year: "2023",
    location: "Pune",
    area: "3200 sq. ft.",
    duration: "3 Months",
    cover: img.living9,
    gallery: [img.living6, img.decor2, img.living7, img.office2],
    text: "A gallery-like stage for curated furniture.",
  },
  {
    slug: "penthouse-lounge",
    title: "Penthouse Lounge",
    category: "Residential",
    year: "2025",
    location: "Hyderabad",
    area: "3400 sq. ft.",
    duration: "5 Months",
    cover: img.living5,
    gallery: [img.living6, img.living8, img.apartment, img.bedroom3],
    text: "City views, layered textures, effortless ease.",
  },
];

export const galleryItems: { src: string; tag: string }[] = [
  { src: img.living2, tag: "Living Room" },
  { src: img.bedroom1, tag: "Bedroom" },
  { src: img.kitchen1, tag: "Kitchen" },
  { src: img.office1, tag: "Office" },
  { src: img.living3, tag: "Living Room" },
  { src: img.living8, tag: "Living Room" },
  { src: img.bedroom2, tag: "Bedroom" },
  { src: img.kitchen2, tag: "Kitchen" },
  { src: img.office2, tag: "Office" },
  { src: img.living5, tag: "Living Room" },
  { src: img.bedroom3, tag: "Bedroom" },
  { src: img.kitchen4, tag: "Kitchen" },
  { src: img.living9, tag: "Living Room" },
  { src: img.bedroom4, tag: "Bedroom" },
  { src: img.living11, tag: "Office" },
  { src: img.living6, tag: "Living Room" },
];

export const team = [
  { name: "Priya Sharma", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  { name: "Rahul Mehta", role: "Lead Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
  { name: "Ananya Singh", role: "Interior Architect", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80" },
  { name: "Vikram Rao", role: "Project Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" },
  { name: "Neha Kapoor", role: "3D Visualizer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" },
  { name: "Arjun Verma", role: "Site Supervisor", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80" },
  { name: "Sanya Malhotra", role: "Senior Designer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
  { name: "Karan Joshi", role: "Lighting Designer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" },
  { name: "Meera Iyer", role: "Styling Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80" },
  { name: "Rohan Gupta", role: "Procurement Head", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" },
  { name: "Isha Nair", role: "Client Relations", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" },
  { name: "Dev Patel", role: "Junior Architect", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
];

export const processSteps = [
  { title: "Initial Consultation", text: "Your needs, style and budget.", image: img.living7 },
  { title: "Concept & Design", text: "Moodboards and 3D visuals.", image: img.decor2 },
  { title: "Planning & Execution", text: "Precise planning, quality craft.", image: img.kitchen3 },
  { title: "Final Reveal", text: "A space you'll love.", image: img.hero2 },
];

export const faqs = [
  { q: "What types of projects do you handle?", a: "Homes, villas, offices, retail, restaurants and hotels — from a single room to complete turnkey builds." },
  { q: "How long does a typical project take?", a: "A single room takes 4–8 weeks. A full home usually takes 3–6 months depending on scope." },
  { q: "Do you provide 3D design visualizations?", a: "Yes. Every project includes photorealistic 3D renders so you can see your space before we build it." },
  { q: "Can you work within my budget?", a: "Absolutely. We plan materials and finishes around your budget without compromising on quality." },
  { q: "Do you handle both residential and commercial projects?", a: "Yes — our team has delivered 250+ residential, commercial and hospitality spaces." },
  { q: "How do I get started?", a: "Book a free consultation through our contact page. We'll call you within 24 hours." },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
];

export const moreNav = [
  { href: "/team", label: "Team" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
];

export const contact = {
  phone: "+1 0000000",
  phoneHref: "tel:+10000000",
  email: "info@xyz.com",
  street: "1200 Market Street, Suite 400",
  city: "San Francisco, CA 94102, USA",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM",
};

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
] as const;

type ServiceDetail = {
  intro: string;
  features: string[];
  gallery: string[];
  category: Project["category"];
  duration: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  residential: {
    intro: "Complete home interiors shaped around your family, your habits and your taste.",
    features: ["Space planning", "Custom furniture", "Material & finish curation", "Lighting design"],
    gallery: [img.living2, img.living5, img.bedroom1, img.kitchen2],
    category: "Residential",
    duration: "3–6 Months",
  },
  commercial: {
    intro: "Workplaces and stores that reflect your brand and help people do their best work.",
    features: ["Brand-led design", "Workspace planning", "Acoustic solutions", "Fit-out management"],
    gallery: [img.office1, img.office2, img.living9, img.living11],
    category: "Commercial",
    duration: "2–5 Months",
  },
  consultation: {
    intro: "Expert advice for a single room or a whole home, so every decision feels right.",
    features: ["On-site visit", "Layout review", "Colour & material advice", "Shopping list"],
    gallery: [img.living7, img.decor2, img.living4, img.extra3],
    category: "Residential",
    duration: "1–2 Weeks",
  },
  hospitality: {
    intro: "Hotels, restaurants and lounges with atmosphere guests remember.",
    features: ["Concept & storytelling", "Guest journey design", "Bespoke lighting", "Durable luxury finishes"],
    gallery: [img.restaurant1, img.hotel1, img.hotel2, img.restaurant2],
    category: "Hospitality",
    duration: "4–12 Months",
  },
  styling: {
    intro: "The final layer: art, textiles and accessories that make a space feel finished.",
    features: ["Art selection", "Soft furnishings", "Decor sourcing", "Seasonal refresh"],
    gallery: [img.decor2, img.decor1, img.living6, img.extra6],
    category: "Residential",
    duration: "2–4 Weeks",
  },
  turnkey: {
    intro: "One team from concept to keys in hand. You move in, we handle the rest.",
    features: ["Design & 3D visuals", "Civil & MEP works", "Furniture & fit-out", "Final styling"],
    gallery: [img.kitchen1, img.villa2, img.villa3, img.villa4],
    category: "Residential",
    duration: "4–8 Months",
  },
  kitchen: {
    intro: "Kitchens that work beautifully, with smart storage and lasting materials.",
    features: ["Ergonomic layouts", "Modular cabinetry", "Stone & wood surfaces", "Appliance integration"],
    gallery: [img.kitchen2, img.kitchen1, img.kitchen3, img.kitchen4],
    category: "Residential",
    duration: "6–10 Weeks",
  },
  bedroom: {
    intro: "Calm, layered bedrooms designed for rest and quiet luxury.",
    features: ["Bespoke headboards", "Wardrobe design", "Layered lighting", "Soft textiles"],
    gallery: [img.extra1, img.bedroom1, img.bedroom3, img.bedroom4],
    category: "Residential",
    duration: "4–8 Weeks",
  },
  lighting: {
    intro: "Light that shapes mood, highlights texture and changes with the day.",
    features: ["Lighting plans", "Statement fixtures", "Smart controls", "Ambient layering"],
    gallery: [img.extra2, img.living8, img.restaurant1, img.living3],
    category: "Residential",
    duration: "2–4 Weeks",
  },
  furniture: {
    intro: "Furniture chosen and made to last, in perfect proportion to your space.",
    features: ["Custom pieces", "Curated brands", "Upholstery & finishes", "Delivery & placement"],
    gallery: [img.extra3, img.living5, img.living10, img.decor1],
    category: "Residential",
    duration: "4–10 Weeks",
  },
  renovation: {
    intro: "Fresh life for familiar spaces, keeping what you love and reworking the rest.",
    features: ["Condition survey", "Structural changes", "New finishes", "Project management"],
    gallery: [img.extra4, img.living4, img.kitchen3, img.bedroom2],
    category: "Residential",
    duration: "2–5 Months",
  },
  "3d": {
    intro: "Photorealistic renders and walkthroughs, so you see your space before it's built.",
    features: ["Photoreal renders", "360° walkthroughs", "Material swaps", "Fast revisions"],
    gallery: [img.extra5, img.hero1, img.living2, img.extra6],
    category: "Commercial",
    duration: "1–3 Weeks",
  },
};
