import asset1 from '../assets/asset-1.jpeg';
import asset2 from '../assets/asset-2.jpeg';
import asset3 from '../assets/asset-3.jpeg';
import asset4 from '../assets/asset-4.jpeg';
import asset5 from '../assets/asset-5.jpeg';
import asset6 from '../assets/asset-6.jpeg';
import asset7 from '../assets/asset-7.jpeg';

export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: 'Residential' | 'Veterinary' | 'Commercial';
  tag: string;
  description: string;
  longDescription: string;
  sqft: string;
  duration: string;
  scope: string;
  heroImage: string;
  galleryImages: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 'ridgemont-residence',
    title: 'Ridgemont Residence',
    location: 'Bronxville, NY',
    year: 2025,
    category: 'Residential',
    tag: 'Residential · Whole home',
    description: 'A full-scope whole-home renovation of a 1920s colonial, restored with material honesty and quiet modernism.',
    longDescription: 'The Ridgemont Residence challenged us to honor a century-old structure while transforming every room into a space of calm purpose. We worked with the existing load-bearing walls, exposing original oak beams and pairing them with hand-formed clay tile, patinated brass fixtures, and a palette drawn from the surrounding woodland.',
    sqft: '6,200',
    duration: '14 months',
    scope: 'Whole-home renovation, structural additions, bespoke cabinetry',
    heroImage: asset1,
    galleryImages: [
      asset2,
      asset3,
      asset4,
    ],
    color: 'clay',
  },
  {
    id: 'pine-grove-animal-hospital',
    title: 'Pine Grove Animal Hospital',
    location: 'Yonkers, NY',
    year: 2024,
    category: 'Veterinary',
    tag: 'Veterinary',
    description: 'A specialty veterinary clinic built to be code-compliant and human-warm, delivered a week early and under budget.',
    longDescription: 'Pine Grove required navigating complex medical-facility codes while delivering interiors that feel calm to both animals and their owners. We designed fluid circulation paths, acoustic treatment in procedure rooms, and a reception area using warm white oak and soft ambient lighting.',
    sqft: '4,800',
    duration: '10 months',
    scope: 'Ground-up specialty veterinary build, code-compliant medical fit-out',
    heroImage: asset5,
    galleryImages: [
      asset6,
      asset7,
      asset1,
    ],
    color: 'teal',
  },
  {
    id: 'cedar-stone-studio',
    title: 'Cedar & Stone Studio',
    location: 'Brooklyn, NY',
    year: 2024,
    category: 'Commercial',
    tag: 'Boutique office',
    description: 'A boutique creative studio fit-out where exposed cedar, natural stone, and careful lighting express the client\'s brand identity.',
    longDescription: 'Cedar & Stone Studio is a boutique architectural office with a desire for interiors that feel like a living portfolio. We designed custom cedar shelving systems, a polished concrete reception desk, and a material palette that speaks to craft and precision — mirroring the firm\'s own values.',
    sqft: '2,400',
    duration: '6 months',
    scope: 'Full commercial fit-out, bespoke joinery, material sourcing',
    heroImage: asset2,
    galleryImages: [
      asset3,
      asset4,
      asset5,
    ],
    color: 'forest',
  },
  {
    id: 'meridian-coworking-hub',
    title: 'Meridian Co-Working Hub',
    location: 'Manhattan, NY',
    year: 2024,
    category: 'Commercial',
    tag: 'Commercial · Co-working',
    description: 'A 3-floor co-working hub designed for modern professionals — open-plan collaboration zones, private suites, and curated material moments throughout.',
    longDescription: 'Meridian demanded a commercial interior that could hold its own in Manhattan\'s competitive co-working landscape. We designed a cascading open-plan layout across three floors, using perforated steel panels, raw concrete columns, and warm walnut accents to define zones without walls. Private suites feature acoustic glazing, integrated task lighting, and custom-built credenzas in smoked oak. The building\'s ground floor anchors on a double-height lobby with a hand-laid terrazzo floor in a bespoke geometric pattern.',
    sqft: '8,500',
    duration: '9 months',
    scope: 'Full commercial fit-out, joinery, MEP coordination, acoustic design',
    heroImage: asset4,
    galleryImages: [
      asset5,
      asset6,
      asset7,
    ],
    color: 'clay',
  },
  {
    id: 'harlow-restaurant-group',
    title: 'Harlow Restaurant Group',
    location: 'Hoboken, NJ',
    year: 2023,
    category: 'Commercial',
    tag: 'Commercial · Hospitality',
    description: 'A full-scope hospitality build for an upscale restaurant group — open kitchen, curated dining rooms, and an outdoor terrace with bespoke steel canopy.',
    longDescription: 'The Harlow Restaurant Group brief called for a space that felt simultaneously industrial and refined. We exposed the original brick shell, introduced a dramatic blackened-steel open kitchen pass, and balanced the rawness with hand-thrown ceramic pendant fixtures and a deep olive banquette running the full length of the dining room. The outdoor terrace — a key revenue driver — features a custom welded steel canopy with woven shade panels, fire pits, and a service bar clad in honed granite.',
    sqft: '5,100',
    duration: '8 months',
    scope: 'Hospitality fit-out, commercial kitchen coordination, terrace design',
    heroImage: asset7,
    galleryImages: [
      asset1,
      asset2,
      asset3,
    ],
    color: 'terracotta',
  },
  {
    id: 'elm-park-design-build',
    title: 'Elm Park Design Build',
    location: 'Montclair, NJ',
    year: 2024,
    category: 'Residential',
    tag: 'Design Build',
    description: 'A residential project that became a study in integrated design — bespoke millwork, natural stone, and architectural elements that seamlessly flow.',
    longDescription: 'The owners wanted a living space that functioned flawlessly first and photographed second. We built custom floor-to-ceiling millwork in natural ash, integrated hidden storage behind flush panel doors, and laid out an open-plan living area that showcases our end-to-end design build process without compromise.',
    sqft: '680',
    duration: '3 months',
    scope: 'Design build, custom millwork, interior architecture',
    heroImage: asset6,
    galleryImages: [
      asset7,
      asset1,
      asset2,
    ],
    color: 'terracotta',
  },
  {
    id: 'haven-structural-addition',
    title: 'Haven Structural Addition',
    location: 'Summit, NJ',
    year: 2023,
    category: 'Residential',
    tag: 'Addition',
    description: 'A structurally continuous second-story addition with radiant floors, bespoke masonry, and an envelope designed to the inch.',
    longDescription: 'This addition was designed with the precision of a luxury retreat, but built to seamlessly tie into the original structure. We integrated advanced underfloor heating, custom built-in architectural cabinetry, and large-format structural glazing with blackout roller shades hidden within the framing.',
    sqft: '1,100',
    duration: '4 months',
    scope: 'Structural addition, second story extension, architectural framing',
    heroImage: asset3,
    galleryImages: [
      asset4,
      asset5,
      asset6,
    ],
    color: 'sage',
  },
];

export const categories = ['All', 'Residential', 'Commercial', 'Veterinary'] as const;
export type Category = typeof categories[number];
