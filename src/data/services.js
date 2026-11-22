export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'gtr', label: 'GTR Registration & Lifecycle' },
  { id: 'courier', label: 'Courier Onboarding' },
  { id: 'admin', label: 'Administration & Student Support' },
];

export const SERVICE_SCOPE_NOTICE = {
  title: 'Administrative Assistance vs. Regulated Professional Services',
  description:
    'Atlantic Budapest provides administrative preparation, document organisation, and process coordination. We do not provide regulated accounting, certified tax advisory, or legal representation. Where Hungarian law requires regulated professional services, we coordinate with appropriately qualified professionals.',
};

export const SERVICES_DATA = [
  {
    id: 'gtr-registration',
    categoryId: 'gtr',
    categoryLabel: 'GTR Lifecycle',
    title: 'GTR Business Registration',
    shortDescription:
      'Step-by-step administrative guidance to establish your Hungarian sole proprietorship under the flat-rate taxation regime (átalányadózás).',
    iconName: 'FileCheck2',
    featuredOnHome: true,
    highlights: [
      'Assistance with establishing a Hungarian sole proprietorship',
      'Registration guidance under the flat-rate taxation regime (átalányadózás)',
      'Preparation and organisation of required registration details',
      'Guidance through the official registration procedure',
    ],
  },
  {
    id: 'gtr-suspension',
    categoryId: 'gtr',
    categoryLabel: 'GTR Lifecycle',
    title: 'GTR Temporary Suspension',
    shortDescription:
      'Administrative coordination when you need to temporarily pause your sole proprietorship activity in Hungary.',
    iconName: 'PauseCircle',
    featuredOnHome: false,
    highlights: [
      'Preparation of required suspension details and dates',
      'Administrative guidance on suspension procedures',
      'Checklist review of active obligations prior to pausing',
      'Record organisation for your business files',
    ],
  },
  {
    id: 'gtr-reactivation',
    categoryId: 'gtr',
    categoryLabel: 'GTR Lifecycle',
    title: 'GTR Business Reactivation',
    shortDescription:
      'Structured administrative assistance to resume active operations after a temporary business suspension.',
    iconName: 'PlayCircle',
    featuredOnHome: false,
    highlights: [
      'Verification of current business details prior to reactivation',
      'Administrative guidance through the reactivation procedure',
      'Coordination of updated activity or address information if needed',
      'Readiness check for resuming courier or invoicing operations',
    ],
  },
  {
    id: 'gtr-termination',
    categoryId: 'gtr',
    categoryLabel: 'GTR Lifecycle',
    title: 'GTR Permanent Termination',
    shortDescription:
      'Orderly administrative support when permanently closing your Hungarian sole proprietorship.',
    iconName: 'XCircle',
    featuredOnHome: false,
    highlights: [
      'Preparation and organisation of closure information',
      'Administrative guidance through the permanent termination process',
      'Coordination with qualified accountants for final closing filings where required',
      'Archival organisation of closing confirmation documents',
    ],
  },
  {
    id: 'wolt-registration',
    categoryId: 'courier',
    categoryLabel: 'Courier Onboarding',
    title: 'Wolt Registration Assistance',
    shortDescription:
      'Application preparation and onboarding guidance to help you set up your Wolt courier partner profile in Hungary.',
    iconName: 'Bike',
    featuredOnHome: true,
    platformNote:
      'Atlantic Budapest assists with preparation and onboarding; final account approval is decided solely by Wolt.',
    highlights: [
      'Wolt courier partner application assistance',
      'Required document preparation and completeness check',
      'Account registration step-by-step guidance',
      'Practical courier onboarding assistance',
    ],
  },
  {
    id: 'foodora-registration',
    categoryId: 'courier',
    categoryLabel: 'Courier Onboarding',
    title: 'foodora Registration Assistance',
    shortDescription:
      'Dedicated application and document preparation support for registering as a foodora courier partner in Hungary.',
    iconName: 'Navigation',
    featuredOnHome: true,
    platformNote:
      'Atlantic Budapest assists with preparation and onboarding; final account approval is decided solely by foodora.',
    highlights: [
      'foodora courier partner application assistance',
      'Required document preparation and verification',
      'Account registration guidance',
      'Practical courier onboarding assistance',
    ],
  },
  {
    id: 'monthly-administration',
    categoryId: 'admin',
    categoryLabel: 'Ongoing Support',
    title: 'Monthly Account Administration',
    shortDescription:
      'Continuous monthly administrative coordination to keep your business records and recurring submissions on track.',
    iconName: 'CalendarCheck',
    featuredOnHome: true,
    highlights: [
      'Ongoing business account administration',
      'Payslip and relevant document submission coordination',
      'Routine deadline tracking and administrative reminders',
      'Coordination with qualified professional accountants where necessary',
    ],
  },
  {
    id: 'tax-invoice-coordination',
    categoryId: 'admin',
    categoryLabel: 'Ongoing Support',
    title: 'Tax & Invoice Coordination',
    shortDescription:
      'Systematic invoice organisation and tax document coordination for clear, audit-ready administrative records.',
    iconName: 'Receipt',
    featuredOnHome: false,
    highlights: [
      'Monthly invoice organisation and record structuring',
      'Tax information and supporting documentation coordination',
      'Handover preparation for qualified accountants and tax professionals',
      'Business information updates when operational details change',
    ],
  },
  {
    id: 'student-administration',
    categoryId: 'admin',
    categoryLabel: 'Student & Resident Support',
    title: 'Additional Student Administration',
    shortDescription:
      'Tailored English-language administrative assistance for international students and foreign residents operating in Hungary.',
    iconName: 'GraduationCap',
    featuredOnHome: false,
    highlights: [
      'International student administrative guidance in clear English',
      'Document preparation and checklist support for foreign residents',
      'Explanation of Hungarian administrative terminology and workflows',
      'General business-related administrative assistance',
    ],
  },
];

