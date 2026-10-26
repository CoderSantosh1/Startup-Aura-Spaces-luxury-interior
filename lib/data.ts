// All photos live in /public/images/<page>/ and are served locally.
export const img = {
  hero1: "/images/home/hero1.jpg",
  hero2: "/images/home/hero2.jpg",
  hero3: "/images/home/hero3.jpg",
  living1: "/images/services/living1.jpg",
  living2: "/images/gallery/living2.jpg",
  living3: "/images/services/living3.jpg",
  living4: "/images/about/living4.jpg",
  living5: "/images/projects/living5.jpg",
  living6: "/images/about/living6.jpg",
  living7: "/images/about/living7.jpg",
  living8: "/images/about/living8.jpg",
  living9: "/images/home/living9.jpg",
  living10: "/images/about/living10.jpg",
  living11: "/images/gallery/living11.jpg",
  kitchen1: "/images/services/kitchen1.jpg",
  kitchen2: "/images/services/kitchen2.jpg",
  kitchen3: "/images/projects/kitchen3.jpg",
  kitchen4: "/images/projects/kitchen4.jpg",
  apartment: "/images/projects/apartment.jpg",
  bedroom1: "/images/projects/bedroom1.jpg",
  bedroom2: "/images/projects/bedroom2.jpg",
  bedroom3: "/images/projects/bedroom3.jpg",
  bedroom4: "/images/projects/bedroom4.jpg",
  office1: "/images/services/office1.jpg",
  office2: "/images/services/office2.jpg",
  restaurant1: "/images/services/restaurant1.jpg",
  restaurant2: "/images/projects/restaurant2.jpg",
  hotel1: "/images/projects/hotel1.jpg",
  hotel2: "/images/projects/hotel2.jpg",
  villa1: "/images/home/villa1.jpg",
  villa2: "/images/projects/villa2.jpg",
  villa3: "/images/about/villa3.jpg",
  villa4: "/images/projects/villa4.jpg",
  decor1: "/images/about/decor1.jpg",
  decor2: "/images/services/decor2.jpg",
  extra1: "/images/services/extra1.jpg",
  extra2: "/images/services/extra2.jpg",
  extra3: "/images/services/extra3.jpg",
  extra4: "/images/services/extra4.jpg",
  extra5: "/images/services/extra5.jpg",
  extra6: "/images/services/extra6.jpg",
  decor3: "/images/about/decor3.jpg",
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
    gallery: [img.living2, img.living3, img.living4, img.decor1,img.living5],
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
    gallery: [img.villa2, img.villa3, img.villa4, img.kitchen3,img.living5],
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
    gallery: [img.office2, img.living10, img.decor2, img.living11,img.living5],
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
    gallery: [img.restaurant2, img.decor3, img.kitchen4, img.living8,img.living5],
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
    gallery: [img.bedroom2, img.bedroom3, img.bedroom4, img.decor1,img.living5],
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
    gallery: [img.hotel2, img.bedroom4, img.living5, img.restaurant2,img.living5],
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
    gallery: [img.kitchen2, img.kitchen3, img.kitchen4, img.decor3,img.living5],
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
    gallery: [img.living6, img.decor2, img.living7, img.office2,img.living5],
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
    gallery: [img.living6, img.living8, img.apartment, img.bedroom3,img.living5],
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

];

export const team = [
  { name: "Priya Sharma", role: "Founder & CEO", image: "/images/team/priya-sharma.jpg" },
  { name: "Rahul Mehta", role: "Lead Designer", image: "/images/team/rahul-mehta.jpg" },
  { name: "Ananya Singh", role: "Interior Architect", image: "/images/team/ananya-singh.jpg" },
  { name: "Vikram Rao", role: "Project Manager", image: "/images/team/vikram-rao.jpg" },
  { name: "Neha Kapoor", role: "3D Visualizer", image: "/images/team/neha-kapoor.jpg" },
  { name: "Arjun Verma", role: "Site Supervisor", image: "/images/team/arjun-verma.jpg" },
  { name: "Sanya Malhotra", role: "Senior Designer", image: "/images/team/sanya-malhotra.jpg" },
  { name: "Karan Joshi", role: "Lighting Designer", image: "/images/team/karan-joshi.jpg" },
  { name: "Meera Iyer", role: "Styling Lead", image: "/images/team/meera-iyer.jpg" },
  { name: "Rohan Gupta", role: "Procurement Head", image: "/images/team/rohan-gupta.jpg" },
  { name: "Isha Nair", role: "Client Relations", image: "/images/team/isha-nair.jpg" },
  { name: "Dev Patel", role: "Junior Architect", image: "/images/team/dev-patel.jpg" },
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

export const missionVision = [
  {
    key: "mission",
    label: "Our Mission",
    image: img.living7,
    statement: "To design spaces that feel personal, work beautifully and stand the test of time.",
    points: ["Listen first, design with purpose", "Honest pricing, no surprises", "Craftsmanship in every detail"],
  },
  {
    key: "vision",
    label: "Our Vision",
    image: img.villa3,
    statement: "To be the most trusted name in luxury interiors, inspiring better everyday living.",
    points: ["Sustainable, lasting materials", "Design-led innovation", "Lifelong client relationships"],
  },
] as const;
