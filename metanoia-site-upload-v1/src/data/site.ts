/**
 * METANOIA — central content file.
 *
 * Edit THIS file to update dates, locations, FAQs, and links across the whole
 * site. Nothing else needs to change for routine content updates. Fields
 * marked "⚠️ UPDATE ME" are placeholders — replace before launch.
 */

export const site = {
  name: "METANOIA",
  tagline: "Renewing Minds. Reviving University.",
  description:
    "METANOIA is a discipleship program for university students in Europe, walking in step with the academic calendar to renew minds, establish character, and send students out as reformers of society.",
  url: "https://metanoia.example", // ⚠️ UPDATE ME — must match astro.config.mjs `site`
  email: "hello@metanoia.example", // ⚠️ UPDATE ME
  city: "⚠️ UPDATE ME — city / university",
  socials: {
    instagram: "", // ⚠️ UPDATE ME — e.g. "https://instagram.com/metanoia"
    whatsapp: "", // ⚠️ UPDATE ME — e.g. WhatsApp community invite link
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Vision", href: "/vision" },
  { label: "What Is Metanoia?", href: "/what-is-metanoia" },
  { label: "Gatherings", href: "/gatherings" },
  { label: "Apply", href: "/apply" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const applyInfo = {
  // ⚠️ UPDATE ME — point this at your real application form (Google Form, Tally, Notion form, etc.)
  formUrl: "https://forms.gle/REPLACE-WITH-YOUR-FORM",
  cohortLabel: "⚠️ UPDATE ME — e.g. Winter Semester 26/27",
  applicationOpens: "⚠️ UPDATE ME — e.g. September 1, 2026",
  applicationCloses: "⚠️ UPDATE ME — e.g. September 20, 2026",
  kickoffDate: "⚠️ UPDATE ME — e.g. October 6, 2026",
  monthlyTuition: "⚠️ UPDATE ME — e.g. €15 / month",
  steps: [
    {
      title: "Express interest",
      body: "Fill out the short interest form below. It takes about three minutes.",
    },
    {
      title: "Coffee conversation",
      body: "A METANOIA leader will reach out to grab coffee and talk through what the year looks like, and answer any questions you have.",
    },
    {
      title: "Join a cohort",
      body: "Once you're placed in a Small Meta cohort, you'll get all the details for the kickoff gathering.",
    },
  ],
};

export type Gathering = {
  name: string;
  frequency: string;
  description: string;
};

export const gatherings: Gathering[] = [
  {
    name: "Big Meta",
    frequency: "1st & 3rd week of the month · ~3 hours",
    description:
      "All cohorts gather together for teaching on the week's topic, worship, and impartation.",
  },
  {
    name: "Small Meta",
    frequency: "2nd & 4th week of the month · over a shared meal",
    description:
      "Your cohort (5–8 students, 2 leaders) discusses the topic and identifies your personal Metanoia — the specific way God is renewing your mind that week.",
  },
  {
    name: "Application & Activation",
    frequency: "every week",
    description:
      "Every topic comes with a specific, practical assignment. A change of mind isn't confirmed until you've practiced it.",
  },
  {
    name: "Prayer & Fasting",
    frequency: "midweek rhythm",
    description:
      "A corporate midweek rhythm of prayer and fasting that undergirds the whole semester.",
  },
];

export const semesterYears = [
  {
    year: "Year 1",
    title: "Come to Jesus",
    length: "20 weeks / 2 semesters",
    description:
      "The way is prepared. Repentance, encounter, and saying yes to the call of discipleship — the foundation every student begins with.",
  },
  {
    year: "Year 2",
    title: "Stay with Jesus",
    length: "20 weeks / 2 semesters",
    description:
      "The way is walked. Character, spiritual disciplines, and the freedom that lets a disciple finish the race, not just start it.",
  },
  {
    year: "Year 3",
    title: "Go with Jesus",
    length: "Invite-only",
    description:
      "The way is multiplied. Leadership, evangelism, and sending — reproducing everything received, including planting METANOIA in a new city or university.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Do I need to already be a strong Christian to join?",
    answer:
      "Not at all. METANOIA is built for students at every stage — from those exploring faith for the first time to those who've walked with Jesus for years. What matters is a willingness to have your mind renewed.",
  },
  {
    question: "How much does it cost?",
    answer: `We ask for a modest monthly contribution (currently ${applyInfo.monthlyTuition}) — not because we're trying to make money, but because we've found that people value what they invest in. If cost is a barrier, talk to us — we don't want money to keep anyone out.`,
  },
  {
    question: "How much time does this actually take each week?",
    answer:
      "Plan on one Big Meta or Small Meta gathering most weeks (2–3 hours), plus a short weekly application assignment. It's designed to fit around a full university course load, not compete with it.",
  },
  {
    question: "What is a 'Small Meta' cohort?",
    answer:
      "A Small Meta is your core group — 5 to 8 students and 2 leaders — who meet every other week over a shared meal to talk honestly about what God is doing in your life and hold each other to the commitments you're making.",
  },
  {
    question: "Can I join partway through a semester?",
    answer:
      "It's easiest to start at the beginning of a semester so you're not missing foundational weeks, but reach out — depending on timing, we may be able to fold you into a cohort already underway.",
  },
  {
    question: "What happens after Year 1?",
    answer:
      "Year 1 (Come to Jesus) is where every student begins. Year 2 (Stay with Jesus) goes deeper into character and spiritual disciplines. Year 3 (Go with Jesus) is invite-only, for students ready to lead, evangelize, and help plant METANOIA somewhere new.",
  },
  {
    question: "Is this only for one university?",
    answer:
      "METANOIA is designed to multiply. We're starting in one city, but part of the vision from day one is planting new cohorts in new cities and universities as students are formed and sent out.",
  },
];

export const coreValues = [
  "The Gospel is the power of God, not just the ticket into heaven.",
  "A renewed mind produces a transformed life — not the other way around.",
  "Discipleship happens in relationship, not just in a classroom.",
  "Character is formed slowly, in community, over time.",
  "Every student is a minister, not just an audience.",
  "Freedom in Christ is for everyone, not just a select few.",
  "What is caught matters as much as what is taught.",
  "We multiply what we're given — nothing stays with us alone.",
  "Prayer and the Word are non-negotiable, not optional extras.",
  "The university is a mission field, not a distraction from ministry.",
];
