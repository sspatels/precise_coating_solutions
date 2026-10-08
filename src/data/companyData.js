import { Eye, Target } from 'lucide-react';
import { image } from './media';

/* ----------------------------------------------------------
   Contact numbers – edit here, links below are built from them
   ---------------------------------------------------------- */
const PHONE_DIGITS = '9284901078'; // 10-digit mobile number
const COUNTRY_CODE = '91';
const EMAIL = 'precisecoatingsolutions@gmail.com';
const WEBSITE = 'www.precisecoatingsolutions.in';
const WHATSAPP_MESSAGE = 'Hello Precise Coating Solutions, I would like to enquire about your waterproofing / coating services.';

/**
 * Central company information.
 * Update contact details here – every component (top bar, header menu, floating buttons,
 * contact page, footer, CTA) reads from this file.
 */
export const companyData = {
  name: 'Precise Coating Solutions',
  shortName: 'PCS',
  tagline: 'Protect. Enhance. Perform.',
  subtitle: 'Waterproofing & Protective Coating Solutions',
  closingLine: 'Let’s Build a Stronger, Leak-Free Tomorrow.',
  founder: { name: 'Akash Daphal', role: 'Founder & Proprietor' },
  servingSectors: ['Residential', 'Commercial', 'Industrial'],
  logo: image('logo.png'),
  // Same logo with the white background removed (header & footer)
  logoTransparent: '/uploads/optimized/logo-transparent.webp',
  heroImage: image('hero.png'),
  aboutImage: image('About_us_image.png'),

  description:
    'Precise Coating Solutions is a professional waterproofing and Epoxy Flooring service provider specializing in reliable, durable, and system-based solutions for residential, commercial, and industrial projects.',


  offerings: ['Waterproofing', 'Crack Repair', 'Protective Coatings', 'Epoxy Flooring', 'Industrial Painting', 'Building Maintenance'],

  coreGoal: ['Protect structures.', 'Prevent damage.', 'Build a stronger, leak-free tomorrow.'],

  phone: `+${COUNTRY_CODE} ${PHONE_DIGITS.slice(0, 5)} ${PHONE_DIGITS.slice(5)}`,
  phoneHref: `tel:+${COUNTRY_CODE}${PHONE_DIGITS}`,
  whatsappHref: `https://wa.me/${COUNTRY_CODE}${PHONE_DIGITS}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: EMAIL,
  emailHref: `mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry – Precise Coating Solutions')}`,
  website: WEBSITE,
  websiteHref: `https://${WEBSITE}`,
  gstin: '27EQDPD6544K1ZM',
  // State taken from the GSTIN state code (27 = Maharashtra). Add the full office address when available.
  address: 'Maharashtra, India',
  // Working hours are shown only when added, e.g. [{ days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' }]
  workingHours: [],

  // Add URLs to show icons in the footer. Empty values are hidden automatically.
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  },

  // Google Maps embed (no API key needed). Replace `Maharashtra, India` with the full office address.
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Maharashtra, India')}&z=7&output=embed`,

  copyrightYear: 2026,
};

/** Direct contact options – used by the top bar, floating buttons, Home and Contact page */
export const contactChannels = [
  {
    id: 'call',
    label: 'Call Us',
    shortLabel: 'Call',
    action: 'Call Now',
    value: companyData.phone,
    href: companyData.phoneHref,
    note: 'Speak to our team directly',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    shortLabel: 'WhatsApp',
    action: 'Chat on WhatsApp',
    value: companyData.phone,
    href: companyData.whatsappHref,
    note: 'Send photos of the problem area',
    external: true,
  },
  {
    id: 'email',
    label: 'Email Us',
    shortLabel: 'Email',
    action: 'Send Email',
    value: companyData.email,
    href: companyData.emailHref,
    note: 'Share your project details',
  },
];

export const statsData = [
  { id: 'experience', value: 10, suffix: '+', label: 'Years Experience' },
  { id: 'projects', value: 500, suffix: '+', label: 'Projects Completed' },
  { id: 'satisfaction', value: 100, suffix: '%', label: 'Customer Satisfaction' },
];

export const visionMission = [
  {
    id: 'vision',
    title: 'Our Vision',
    icon: Eye,
    text: 'To become a trusted leader in waterproofing and leakage protection by delivering innovative, durable, and sustainable solutions that protect every structure for years to come.',
  },
  {
    id: 'mission',
    title: 'Our Mission',
    icon: Target,
    text: 'Our mission is to provide high-quality, reliable, and cost-effective waterproofing solutions that address leakage problems at their root. We are committed to using proven technologies, skilled expertise, and quality materials to deliver lasting protection while ensuring customer satisfaction on every project.',
  },
];
