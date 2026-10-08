import {
  ArrowDownToLine,
  Bath,
  BrickWall,
  Building2,
  CalendarCheck,
  Construction,
  Cylinder,
  Droplets,
  Factory,
  Fence,
  Footprints,
  Hammer,
  House,
  Layers,
  PaintRoller,
  Ruler,
  ShieldCheck,
  Sun,
  Utensils,
  Waves,
  Wrench,
} from 'lucide-react';
import { image } from './media';

/**
 * Service categories used by filters, the services grid and the footer.
 */
export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'waterproofing', label: 'Waterproofing', icon: Droplets },
  { id: 'repair', label: 'Repair & Restoration', icon: Hammer },
  { id: 'flooring', label: 'Flooring', icon: Layers },
  { id: 'coatings', label: 'Protective Coatings', icon: ShieldCheck },
  { id: 'industrial', label: 'Industrial Solutions', icon: Factory },
];

/**
 * Services – in the order shown on the website.
 * `image`: photo in /public/uploads/. Use `null` when no photo is available yet
 * (the slider shows an empty frame and the grid shows a branded placeholder).
 */
const photo = image;

export const services = [
  {
    id: 'balcony-waterproofing',
    name: 'Balcony Waterproofing',
    category: 'waterproofing',
    description: 'Protects balcony slabs and junctions against water ingress and seepage into the floors below.',
    image: photo('balcony_waterproofing.jpeg'),
    icon: Building2,
  },
  {
    id: 'bathroom-waterproofing',
    name: 'Bathroom & Toilet Waterproofing',
    category: 'waterproofing',
    description: 'Leak-proof treatment for wet areas, floor traps and wall junctions to prevent dampness and seepage.',
    image: photo('bathroom_toilet_waterproofing.jpeg'),
    icon: Bath,
  },
  {
    id: 'external-wall-waterproofing',
    name: 'External Wall Waterproofing',
    category: 'waterproofing',
    description: 'Crack filling and weather-resistant coatings for external walls that block rain penetration and dampness.',
    image: photo('crack_repair.jpeg'),
    icon: BrickWall,
  },
  {
    id: 'basement-waterproofing',
    name: 'Basement Waterproofing',
    category: 'waterproofing',
    description: 'Below-grade protection against ground water pressure, seepage and moisture build-up.',
    image: photo('basement_waterproofing.jpeg'),
    icon: ArrowDownToLine,
  },
  {
    id: 'raft-waterproofing',
    name: 'Raft Waterproofing',
    category: 'waterproofing',
    description: 'Membrane and coating systems for raft foundations to protect the structure from the ground up.',
    image: photo('raft_waterproofing.jpeg'),
    icon: Layers,
  },
  {
    id: 'retaining-wall-waterproofing',
    name: 'Retaining Wall Waterproofing',
    category: 'waterproofing',
    description: 'Durable treatment for retaining walls exposed to soil moisture and hydrostatic pressure.',
    image: photo('restraining_wall_waterproofing.jpeg'),
    icon: Fence,
  },
  {
    id: 'podium-waterproofing',
    name: 'Podium Waterproofing',
    category: 'waterproofing',
    description: 'Robust waterproofing for podium slabs, landscaped decks and parking areas.',
    image: null,
    icon: Building2,
  },
  {
    id: 'lift-pit-waterproofing',
    name: 'Lift Pit Waterproofing',
    category: 'waterproofing',
    description: 'Keeps lift pits dry and protects equipment from water ingress and dampness.',
    image: photo('lift_pit_waterproofing.jpeg'),
    icon: ArrowDownToLine,
  },
  {
    id: 'industrial-painting',
    name: 'Industrial Painting',
    category: 'industrial',
    description: 'Industrial painting and floor marking for plants, warehouses and equipment exposed to harsh conditions.',
    image: photo('yellow_patte_marketing.jpeg'),
    icon: PaintRoller,
  },
  {
    id: 'society-repainting',
    name: 'Society Repainting',
    category: 'repair',
    description: 'Complete repainting, repair and building maintenance for housing societies and residential complexes.',
    image: photo('society_repainting.jpeg'),
    icon: Construction,
  },
  {
    id: 'preventive-maintenance',
    name: 'Preventive Waterproofing Maintenance',
    category: 'waterproofing',
    description: 'Scheduled inspection and maintenance that catches small issues before they become big problems.',
    image: null,
    icon: CalendarCheck,
  },
  {
    id: 'water-tank-waterproofing',
    name: 'Underground Water Tank Waterproofing',
    category: 'waterproofing',
    description: 'Safe, non-toxic waterproofing for underground water tanks and sumps.',
    image: photo('Underground tank waterproofing.jpeg'),
    icon: Cylinder,
  },
  {
    id: 'swimming-pool-waterproofing',
    name: 'Swimming Pool Waterproofing',
    category: 'waterproofing',
    description: 'Long-lasting waterproofing systems that keep pools leak-free and structurally protected.',
    image: photo('swimming_pool_waterproofing.jpeg'),
    icon: Waves,
  },
  {
    id: 'expansion-joint-waterproofing',
    name: 'Expansion Joint Waterproofing',
    category: 'waterproofing',
    description: 'Flexible sealing of expansion joints to accommodate movement without leakage.',
    image: photo('expansion_joint_waterproofing.jpeg'),
    icon: Ruler,
  },
  {
    id: 'pipe-penetration-treatment',
    name: 'Pipe Penetration Treatment',
    category: 'waterproofing',
    description: 'Detailed sealing around pipes, floor traps and service penetrations — a common source of hidden leaks.',
    image: photo('WhatsApp Image 2026-09-27 at 13.15.15.jpeg'),
    icon: Wrench,
  },
  {
    id: 'crack-repair',
    name: 'Crack & Leakage Treatment',
    category: 'repair',
    description: 'Injection grouting and root-cause crack treatment that stops leakage and restores structural integrity.',
    image: photo('injection_grouting.jpeg'),
    icon: Hammer,
  },
  {
    id: 'epoxy-flooring',
    name: 'Epoxy Flooring',
    category: 'flooring',
    description: 'Seamless, durable and easy-to-clean epoxy floors for industrial, commercial and residential spaces.',
    image: photo('epoxy_flooring.jpeg'),
    icon: Droplets,
  },
  {
    id: 'anti-skid-coating',
    name: 'Anti-Skid Coating',
    category: 'coatings',
    description: 'Slip-resistant coatings and markings for ramps, walkways, crossings, parking and wet areas.',
    image: photo('road_marketing.jpeg'),
    icon: Footprints,
  },
  {
    id: 'food-grade-coating',
    name: 'Food-Grade Coating',
    category: 'coatings',
    description: 'Hygienic, non-toxic coatings suitable for food processing and storage areas.',
    image: null,
    icon: Utensils,
  },
  {
    id: 'protective-coatings',
    name: 'Protective Coatings',
    category: 'coatings',
    description: 'High-performance coatings that shield surfaces from moisture, chemicals and wear.',
    image: photo('terrace_waterproofing.jpeg'),
    icon: ShieldCheck,
  },
  {
    id: 'cool-roof-coating',
    name: 'Cool Roof Coating',
    category: 'coatings',
    description: 'Heat-reflective roof coatings that reduce surface temperature and protect the slab.',
    image: photo('WhatsApp Image 2026-09-27 at 13.15.12 (1).jpeg'),
    icon: Sun,
  },
];

/** Home page: Residential / Commercial / Industrial */
export const projectSectors = [
  {
    id: 'residential',
    name: 'Residential',
    image: image('Residential_image.png'),
    icon: House,
    description: 'Terraces, bathrooms, balconies, external walls and water tanks for homes, villas and housing societies.',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    image: image('Commerical_image.png'),
    icon: Building2,
    description: 'Podiums, basements, parking decks and facades for offices, malls, hotels and institutions.',
  },
  {
    id: 'industrial',
    name: 'Industrial',
    image: image('Industrial_image.png'),
    icon: Factory,
    description: 'Epoxy flooring, protective coatings and industrial painting for plants, warehouses and factories.',
  },
];
