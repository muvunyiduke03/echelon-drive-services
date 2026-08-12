import {
  FiBriefcase, FiClock, FiMapPin, FiMoon, FiStar, FiUsers, FiShield,
  FiMap, } from "react-icons/fi";

export const services = [
  {
    title: "Airport Services",
    slug: "airport-services",
    description: "Professional airport pickups and drop-offs planned around your flight schedule.",
    details: "We provide on-time airport transportation with careful timing, luggage assistance and clear communication before your flight schedule.",
    icon: FiMapPin,
  },
  {
    title: "Corporate Services",
    slug: "corporate-services",
    description: "Dependable executive transportation for meetings, events and business travel.",
    details: "Designed for professionals, companies and visiting executives who require professional discreet and reliable chauffeurs.",
    icon: FiBriefcase,
  },
  {
    title: "Daily Driver",
    slug: "daily-driver",
    description: "A dedicated chauffeur available for your journeys through the day.",
    details: "Ideal for clients with several appointments, meetings or errands and need a professional chauffeur for an agreed period.",
    icon: FiClock,
  },
  {
    title: "Night Services",
    slug: "night-services",
    description: "Reliable evening transportation for social occasions and late night events.",
    details: "Travel comfortably at night with a professional chauffeur focused on your safety on the road.",
    icon: FiMoon,
  },
  {
    title: "Up-Country Drive",
    slug: "up-country-drive",
    description: "Comfortable journeys outside of Kigali.",
    details: "We plan long distance travel carefully to allow you to relax and enjoy travelling across Rwanda.",
    icon: FiMap,
  },
  {
    title: "Wedding Service",
    slug: "wedding-service",
    description: "Elegant, punctual and carefully coordinated transport for your special day.",
    details: "We ensure that transportation on your special day is seamless, comfortable and punctual according to the event schedule.",
    icon: FiStar,
  },
  {
    title: "Group and Guest Transport",
    slug: "guest-transport",
    description: "Organized transportation for groups of people together.",
    details: "Suitable for hotel guests, families, delegations and occassions that require coordinated travel arrangements.",
    icon: FiUsers,
  },
];

export const features = [
  {
    title: "Professional Chauffeurs",
    description: "Polite, presentable and committed to delivering top-notch experience.",
    icon: FiUsers,
  },
  {
    title: "Punctual Service",
    description: "Every journey is planned carefully to help you arrive comfortably and on time.",
    icon: FiClock,
  },
  {
    title: "Privacy and Discretion",
    description: "Your journey and personal information are handled with complete professionalism.",
    icon: FiShield,
  },
  {
    title: "Kigali and Beyond",
    description: "Private chauffeur for your drives in Kigali and across Rwanda.",
    icon: FiMapPin,
  },
];

export const steps = [
  {
    number: "01",
    title: "Send Your Request",
    description: "Provide your pickup location, destination, date and preferred service.",
  },
  {
    number: "02",
    title: "Receive Confirmation",
    description: "We review your request and contact you to confirm the journey details.",
  },
  {
    number: "03",
    title: "Enjoy the journey",
    description: "Your chauffeur arrives prepared, on time and ready to serve.",
  },
];

export const testimonials = [
  {
    quote:
      "Professional, punctual and easy to communicate with from booking to arrival.",
    name: "Private Client",
    role: "Kigali",
  },
  {
    quote:
      "The service felt calm, organised and dependable throughout the entire journey.",
    name: "Business Traveller",
    role: "Corporate Client",
  },
];