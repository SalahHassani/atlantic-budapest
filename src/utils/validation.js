import { z } from 'zod';

export const COURIER_PLATFORM_OPTIONS = [
  { value: 'wolt', label: 'Wolt' },
  { value: 'foodora', label: 'foodora' },
  { value: 'undecided', label: 'Not decided yet' },
];

export const CONTACT_SERVICE_OPTIONS = [
  { value: 'gtr-registration', label: 'GTR registration' },
  { value: 'gtr-suspension', label: 'GTR suspension' },
  { value: 'gtr-reactivation', label: 'GTR reactivation' },
  { value: 'gtr-closure', label: 'GTR closure' },
  { value: 'wolt', label: 'Wolt' },
  { value: 'foodora', label: 'foodora' },
  { value: 'monthly-administration', label: 'Monthly administration' },
  { value: 'tax-invoice-assistance', label: 'Tax and invoice assistance' },
  { value: 'student-services', label: 'Student services' },
  { value: 'other', label: 'Other' },
];

export const packageApplicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(100, 'Full name must be 100 characters or fewer.'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number (including country code).')
    .max(30, 'Phone number must be 30 characters or fewer.')
    .regex(/^[+\d\s()-]+$/, 'Phone number may only contain digits, spaces, +, -, and parentheses.'),
  selectedPackage: z
    .string()
    .min(1, 'Please select a package.'),
  preferredPlatform: z.enum(['wolt', 'foodora', 'undecided'], {
    errorMap: () => ({ message: 'Please choose a preferred courier platform option.' }),
  }),
  message: z
    .string()
    .trim()
    .max(1000, 'Message must be 1,000 characters or fewer.')
    .optional()
    .default(''),
  privacyConsent: z.literal(true, {
    errorMap: () => ({
      message: 'Please confirm your consent so Atlantic Budapest can contact you regarding your enquiry.',
    }),
  }),
});

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(100, 'Full name must be 100 characters or fewer.'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .max(30, 'Phone number must be 30 characters or fewer.')
    .refine(
      (val) => val === '' || (/^[+\d\s()-]+$/.test(val) && val.replace(/\D/g, '').length >= 7),
      'If provided, please enter a valid phone number (at least 7 digits).'
    )
    .optional()
    .default(''),
  service: z
    .string()
    .min(1, 'Please select a service.'),
  message: z
    .string()
    .trim()
    .min(10, 'Please enter a brief message (at least 10 characters) so we can assist you.')
    .max(2000, 'Message must be 2,000 characters or fewer.'),
  privacyConsent: z.literal(true, {
    errorMap: () => ({
      message: 'Please confirm your privacy consent before submitting your message.',
    }),
  }),
});

