import { Award, BadgeCheck, ClipboardCheck, Layers, ScanSearch, ShieldCheck, Settings2, Wrench } from 'lucide-react';

/** Page SEO – title & meta description per route */
export const seoData = {
  home: {
    title: 'Precise Coating Solutions | Waterproofing & Protective Coating',
    description:
      'Professional waterproofing, epoxy flooring, crack repair, protective coatings and industrial painting for residential, commercial and industrial projects.',
  },
  services: {
    title: 'Waterproofing & Protective Coating Services | Precise Coating Solutions',
    description:
      'Terrace, bathroom, basement and external wall waterproofing, epoxy flooring, protective coatings, crack repair and industrial painting services.',
  },
  gallery: {
    title: 'Precise Coating Solutions Projects',
    description:
      'Our recent waterproofing, epoxy flooring and protective coating projects across residential, commercial and industrial spaces.',
  },
  about: {
    title: 'About Precise Coating Solutions',
    description:
      'Learn about Precise Coating Solutions – reliable, durable and system-based waterproofing and protective coating solutions.',
  },
  contact: {
    title: 'Contact Precise Coating Solutions',
    description: 'Get in touch for a site inspection or a free quote for waterproofing and protective coating work.',
  },
};

/** Home hero */
export const heroContent = {
  eyebrow: 'Monsoon Protection',
  titleStart: 'Rain Outside.',
  titleHighlight: 'Dry Inside.',
  description: 'Professional waterproofing that protects your home from leaks, seepage and monsoon damage.',
  primaryCta: { label: 'Get Free Inspection', path: '/contact' },
};

/** Home intro – centred section right after the hero */
export const homeIntro = {
  titleStart: 'Building India’s Future with',
  titleHighlight: 'Precise Coating Solutions',
  text: 'Precise Coating Solutions is a professional waterproofing and Epoxy Flooring service provider specializing in reliable, durable, and system-based solutions for residential, commercial, and industrial projects. We provide comprehensive solutions for All types of waterproofing, crack repair, protective coatings, epoxy flooring, industrial painting, and building maintenance. Our approach focuses on proper surface preparation, suitable material selection, systematic application, and quality inspection to deliver long-lasting results. Our goal is simple — to protect structures, prevent damage, and build a stronger, leak-free tomorrow.',
};

/** Why choose us – shared by Home and About */
export const whyChooseData = [
  {
    id: 'right-system',
    title: 'Right System, Right Solution',
    text: 'Our focus is on durable solutions that help protect structures and reduce recurring problems. Solutions selected according to site conditions and project requirements.',
    icon: Settings2,
  },
  {
    id: 'workmanship',
    title: 'Quality Workmanship',
    text: 'Focused execution with attention to detailing, application, and finishing.',
    icon: Award,
  },
  {
    id: 'surface-prep',
    title: 'Proper Surface Preparation',
    text: 'Thorough preparation to support better adhesion, performance, and durability.',
    icon: Layers,
  },
  {
    id: 'execution',
    title: 'Reliable & Professional Execution',
    text: 'Systematic planning, site coordination, and disciplined work practices.',
    icon: ClipboardCheck,
  },
  {
    id: 'long-term',
    title: 'Long-Term Protection',
    text: 'Comprehensive solutions built for long-term protection of every structure.',
    // About page wording
    aboutTitle: 'Comprehensive Solutions',
    aboutText: 'Built for Long-Term Protection.',
    icon: ShieldCheck,
  },
];

/** Our approach – used on About & Services intros */
export const approachSteps = [
  { id: 'inspect', label: 'Site Inspection', icon: ScanSearch },
  { id: 'prepare', label: 'Proper Surface Preparation', icon: Layers },
  { id: 'select', label: 'Suitable Material Selection', icon: Settings2 },
  { id: 'apply', label: 'Systematic Application', icon: Wrench },
  { id: 'qc', label: 'Quality Inspection', icon: BadgeCheck },
];

export const ctaContent = {
  title: 'Protect Your Structure Before Small Problems Become Big Problems.',
  text: 'Talk to our team for professional waterproofing and protective coating solutions.',
  button: { label: 'Get a Free Quote', path: '/contact' },
};
