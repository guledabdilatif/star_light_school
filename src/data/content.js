import {
  Baby,
  Backpack,
  BookOpen,
  GraduationCap,
  Rocket,
  Languages,
  Globe,
  Users,
  Target,
  MapPin,
  MessageCircle,
  Phone,
  ClipboardList,
  CalendarCheck,
} from "lucide-react";

export const SCHOOL = {
  name: "Star Light Schools",
  phone: "0723 710 285",
  tel: "+254723710285",
  whatsapp: "254723710285",
  address: "Ground Floor, Musalina Street, at Daraja Tower",
};

export const NAV = [
  { id: "programmes", label: "Programmes" },
  { id: "why-us", label: "Why us" },
  { id: "admissions", label: "Admissions" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const GROUPS = [
  { id: "primary", label: "Primary" },
  { id: "secondary", label: "Secondary" },
  { id: "extra", label: "Extra learning" },
];

export const PROGRAMMES = [
  {
    id: "lower-primary",
    group: "primary",
    icon: Baby,
    title: "Lower primary",
    chip: "Lower primary",
    detail: "A warm, steady start in reading, writing and number work.",
    points: [
      "Early literacy and numeracy",
      "Small steps, regular practice",
      "Confidence in the classroom",
    ],
  },
  {
    id: "grades-4-8",
    group: "primary",
    icon: Backpack,
    title: "Grades 4 to 8",
    chip: "Grades 4 to 8",
    detail: "Strong foundations across every core subject as learners grow.",
    points: [
      "Core subject teaching",
      "Homework and revision habits",
      "Preparation for the next stage",
    ],
  },
  {
    id: "o-level",
    group: "secondary",
    icon: BookOpen,
    title: "O-Level, Years 9, 10 and 11",
    chip: "O-Level",
    detail: "Focused teaching that builds towards exam success.",
    points: [
      "Subject-by-subject coverage",
      "Exam-focused revision",
      "Regular progress checks",
    ],
  },
  {
    id: "a-level",
    group: "secondary",
    icon: GraduationCap,
    title: "A-Level, Years 12 and 13",
    chip: "A-Level",
    detail: "Advanced study for students aiming for university and beyond.",
    points: [
      "In-depth subject study",
      "Independent study skills",
      "Support through exam season",
    ],
  },
  {
    id: "crush",
    group: "extra",
    icon: Rocket,
    title: "Crush programme",
    chip: "Crush programme",
    detail:
      "Intensive catch-up and revision for primary and secondary learners.",
    points: [
      "Primary and secondary",
      "Targeted revision",
      "Fast, focused progress",
    ],
  },
  {
    id: "languages",
    group: "extra",
    icon: Languages,
    title: "English and Kiswahili",
    chip: "Languages",
    detail: "Language classes that build reading, writing and speaking.",
    points: [
      "English and Kiswahili",
      "Reading and writing practice",
      "Clear, confident speaking",
    ],
  },
  {
    id: "ielts",
    group: "extra",
    icon: Globe,
    title: "IELTS training",
    chip: "IELTS",
    detail: "Preparation for study and work abroad.",
    points: [
      "All four IELTS skills",
      "Practice tests",
      "Exam technique coaching",
    ],
  },
];

export const WHY = [
  {
    icon: Users,
    title: "One school, every stage",
    text: "Learners can move from lower primary to A-Level without changing schools.",
  },
  {
    icon: Target,
    title: "A programme for every goal",
    text: "Core classes, crush revision, language lessons and IELTS preparation.",
  },
  {
    icon: MapPin,
    title: "Easy to find",
    text: "We are on the ground floor at Daraja Tower, Musalina Street.",
  },
  {
    icon: MessageCircle,
    title: "Quick answers",
    text: "Call or message us on WhatsApp about places, fees and start dates.",
  },
];

export const STEPS = [
  {
    icon: Phone,
    title: "Call or visit",
    text: "Tell us your child's level and what you want them to achieve.",
  },
  {
    icon: ClipboardList,
    title: "Choose a programme",
    text: "We help you pick the right class, or a crush or language option.",
  },
  {
    icon: CalendarCheck,
    title: "Enrol and start",
    text: "Confirm your place and your child joins their first class.",
  },
];

export const FAQS = [
  {
    q: "Which levels do you teach?",
    a: "Lower primary, Grades 4 to 8, O-Level (Years 9, 10 and 11) and A-Level (Years 12 and 13).",
  },
  {
    q: "What is the crush programme?",
    a: "An intensive programme for primary and secondary learners who want to catch up or revise quickly.",
  },
  {
    q: "Do you teach languages?",
    a: "Yes. We offer English and Kiswahili classes.",
  },
  {
    q: "Do you offer IELTS training?",
    a: "Yes. Our IELTS training prepares you for study and work abroad.",
  },
  {
    q: "How do I enrol?",
    a: "Use the enrol form on this page, call us on 0723 710 285, or visit us at Daraja Tower.",
  },
  {
    q: "Where are you located?",
    a: "Ground Floor, Musalina Street, at Daraja Tower.",
  },
];
