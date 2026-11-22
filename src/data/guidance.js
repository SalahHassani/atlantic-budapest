export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Choose a Package or Send an Enquiry',
    description:
      'Select Atlantic First Month (15,000 HUF) or Atlantic Complete (50,000 HUF for 12 months), or submit a specific service question via our contact form.',
    note: 'No passwords or sensitive ID uploads are requested online.',
  },
  {
    step: '02',
    title: 'Checklist & Information Preparation',
    description:
      'We review your goals (GTR sole proprietorship setup, Wolt/foodora onboarding, or status updates) and guide you through preparing the required details.',
    note: 'Sensitive identification is handled later only through an appropriate secure procedure.',
  },
  {
    step: '03',
    title: 'Guided Registration & Platform Onboarding',
    description:
      'We assist you step-by-step with Hungarian sole-proprietorship registration under flat-rate taxation (átalányadózás) and your courier partner application.',
    note: 'Final courier account approval is decided independently by Wolt or foodora.',
  },
  {
    step: '04',
    title: 'Ongoing Monthly Coordination',
    description:
      'Stay organised with monthly document and invoice coordination, deadline reminders, and business status adjustments whenever your plans change.',
    note: 'Regulated accounting and tax filings are coordinated with qualified professionals where required.',
  },
];

export const DOCUMENT_CHECKLIST_ITEMS = [
  {
    id: 'valid-id',
    category: 'Identity & Residency',
    title: 'Valid Passport or National ID Card',
    detail: 'Current, unexpired government-issued identification.',
  },
  {
    id: 'address-card',
    category: 'Identity & Residency',
    title: 'Hungarian Address Card (Lakcímkártya) or Accommodation Registration',
    detail: 'Proof of registered residential address in Hungary.',
  },
  {
    id: 'residence-permit',
    category: 'Identity & Residency',
    title: 'Valid Residence Permit / Student Status Documentation (if non-EEA)',
    detail: 'Applicable residence documentation permitting self-employment/courier activity in Hungary.',
  },
  {
    id: 'tax-taj',
    category: 'Tax & Social Security Identifiers',
    title: 'Hungarian Tax Identification Number (Adóazonosító jel) & TAJ Number',
    detail: 'Required identifiers for sole proprietorship registration and health/social records.',
  },
  {
    id: 'ugyfelkapu-access',
    category: 'Official Portal Access',
    title: 'Active Ügyfélkapu+ / Digital Citizenship Access (Your Own Private Login)',
    detail: 'Keep your login credentials strictly private—Atlantic Budapest never asks for your password.',
  },
  {
    id: 'courier-gear',
    category: 'Courier Platform Readiness',
    title: 'Smartphone, Bank Account (IBAN), & Delivery Vehicle Details',
    detail: 'Needed when completing your Wolt or foodora courier partner onboarding profile.',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'gtr', label: 'GTR & Taxation' },
  { id: 'courier', label: 'Wolt & foodora' },
  { id: 'packages', label: 'Pricing & Security' },
];

export const FAQ_ITEMS = [
  {
    id: 'what-is-gtr',
    categoryId: 'gtr',
    question: 'What is GTR (Hungarian sole proprietorship) registration?',
    answer:
      'In Hungary, self-employed couriers typically operate as registered sole proprietors (egyéni vállalkozó) under the flat-rate taxation regime (átalányadózás). Atlantic Budapest assists you in preparing and organizing the required registration information and guides you step-by-step through the administrative procedure.',
  },
  {
    id: 'guarantee-wolt-foodora',
    categoryId: 'courier',
    question: 'Does Atlantic Budapest guarantee Wolt or foodora account approval?',
    answer:
      'No. We help you prepare your required documents, verify completeness, and guide you through the Wolt or foodora registration steps, but final courier partner approval is determined independently by Wolt or foodora based on their own onboarding criteria and city capacity.',
  },
  {
    id: 'can-i-register-both-platforms',
    categoryId: 'courier',
    question: 'Does a package cover both Wolt and foodora?',
    answer:
      'Unless otherwise confirmed in writing, courier registration assistance under Atlantic First Month and Atlantic Complete covers onboarding preparation for one chosen platform (either Wolt or foodora). Let us know in your application if you plan to apply to both.',
  },
  {
    id: 'mkik-and-statutory-fees',
    categoryId: 'packages',
    question: 'Are government or Chamber of Commerce (MKIK) fees included in package prices?',
    answer:
      'No. Third-party and statutory fees are separate from Atlantic Budapest service package fees. For example, the annual Chamber of Commerce (MKIK) contribution is currently quoted separately at 5,000 HUF (subject to current applicable Hungarian legal rules and payment requirements).',
  },
  {
    id: 'regulated-accounting-legal',
    categoryId: 'gtr',
    question: 'Does Atlantic Budapest replace a certified accountant or lawyer?',
    answer:
      'No. Atlantic Budapest provides administrative assistance, document preparation, and process coordination. Where Hungarian law requires regulated accounting, certified tax advisory, or legal representation, we coordinate with appropriately qualified professionals.',
  },
  {
    id: 'government-passwords',
    categoryId: 'packages',
    question: 'Will you ever ask for my Ügyfélkapu password?',
    answer:
      'Never. We never request, collect, or store your government login passwords. Any sensitive identification or official confirmation is handled strictly through official authentication channels or authorised procedures.',
  },
  {
    id: 'pause-or-close-business',
    categoryId: 'gtr',
    question: 'What if I leave Hungary or need to pause my courier activity?',
    answer:
      'You can request temporary business suspension, reactivation when you return, or permanent termination. These lifecycle updates are included within the agreed service scope of Atlantic Complete (12 months) and are also available individually upon enquiry.',
  },
];

