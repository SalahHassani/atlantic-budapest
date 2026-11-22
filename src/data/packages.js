export const INDIVIDUAL_FEES = [
  {
    id: 'gtr-account-creation',
    title: 'GTR Account Creation',
    fee: 5000,
    billingLabel: 'One-time fee',
    description:
      'Administrative assistance for establishing your Hungarian sole proprietorship account (apart from the separate 5,000 HUF MKIK Chamber of Commerce statutory fee).',
  },
  {
    id: 'courier-id-creation',
    title: 'Wolt / foodora ID Creation Assistance',
    fee: 2000,
    billingLabel: 'One-time add-on',
    description:
      'Application preparation and onboarding assistance for creating your Wolt or foodora courier account.',
  },
  {
    id: 'monthly-account-management',
    title: 'Monthly Account Management (1-Year Contract)',
    fee: 5000,
    billingLabel: 'Per month',
    description:
      'Ongoing account administration, payslips submission, and tax data coordination under a one-year service agreement.',
  },
  {
    id: 'mkik-statutory-fee',
    title: 'MKIK Chamber of Commerce Contribution',
    fee: 5000,
    billingLabel: 'Statutory third-party fee',
    description:
      'Mandatory annual Hungarian Chamber of Commerce (MKIK) contribution required for any sole proprietorship (paid separately from Atlantic Budapest service fees).',
  },
];

export const PACKAGES_DATA = [
  {
    id: 'atlantic-first-month',
    name: 'Atlantic First Month',
    badge: 'First Month · Save 2,000 HUF',
    price: 15000,
    originalPrice: 17000,
    discountAmount: 2000,
    discountNote: 'Save 2,000 HUF off the 17,000 HUF original price',
    durationLabel: 'First month',
    featured: false,
    summary:
      'Essential initial setup for starting your Hungarian sole proprietorship and courier onboarding with first-month administrative support.',
    features: [
      'GTR business registration assistance (5,000 HUF standard fee)',
      'Wolt or foodora ID creation assistance (2,000 HUF standard fee)',
      'First-month account administration, payslips & tax data coordination (5,000 HUF standard fee)',
      'Required information preparation and checklist guidance',
      'Direct email and phone coordination from Budapest',
    ],
    ctaLabel: 'Select Atlantic First Month',
  },
  {
    id: 'atlantic-complete',
    name: 'Atlantic Complete',
    badge: '12 Months · Save 17,000 HUF',
    price: 50000,
    originalPrice: 67000,
    discountAmount: 17000,
    discountNote: 'Save 17,000 HUF off the 67,000 HUF original price',
    durationLabel: '12 months',
    featured: true,
    summary:
      'Comprehensive 12-month administrative coverage including registration, courier onboarding, monthly coordination, and business lifecycle support.',
    features: [
      'GTR business registration assistance (5,000 HUF standard fee)',
      'Wolt or foodora ID creation assistance (2,000 HUF standard fee)',
      '12 months of ongoing account administration, payslips & tax data coordination (60,000 HUF standard value at 5,000 HUF/month)',
      'Suspension, reactivation, and closure assistance within the agreed service scope',
      'Priority ongoing administrative support in Budapest',
    ],
    ctaLabel: 'Select Atlantic Complete',
  },
];

export const PACKAGE_COMPARISON_ROWS = [
  {
    feature: 'GTR sole proprietorship registration assistance (5,000 HUF value)',
    firstMonth: 'Included',
    complete: 'Included',
  },
  {
    feature: 'Wolt or foodora ID creation assistance (2,000 HUF value)*',
    firstMonth: 'Included (1 platform)',
    complete: 'Included (1 platform)',
  },
  {
    feature: 'Administrative support duration (5,000 HUF/month standard rate)',
    firstMonth: 'First month',
    complete: '12 months',
  },
  {
    feature: 'Ongoing account administration, payslips submission & tax data coordination',
    firstMonth: 'First month scope',
    complete: '12 months included',
  },
  {
    feature: 'GTR suspension, reactivation & closure assistance (agreed scope)',
    firstMonth: 'Not included',
    complete: 'Included',
  },
  {
    feature: 'Original price',
    firstMonth: '17,000 HUF',
    complete: '67,000 HUF',
  },
  {
    feature: 'Discount',
    firstMonth: 'Save 2,000 HUF',
    complete: 'Save 17,000 HUF',
  },
  {
    feature: 'Final package price',
    firstMonth: '15,000 HUF',
    complete: '50,000 HUF',
  },
];

export const PRICING_DISCLOSURES = [
  'Individual standard service fees: GTR account creation is 5,000 HUF, Wolt or foodora ID creation assistance is 2,000 HUF, and ongoing monthly account management (payslips submission & tax data under a 1-year contract) is 5,000 HUF per month.',
  'The MKIK annual Chamber of Commerce contribution is 5,000 HUF for any sole proprietorship and is a statutory third-party fee separate from Atlantic Budapest service fees.',
  'Courier registration assistance covers either Wolt or foodora under the selected package unless otherwise confirmed. Final courier account approval is determined independently by the platform.',
];

