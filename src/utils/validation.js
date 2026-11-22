import { z } from 'zod';

export const COURIER_PLATFORM_OPTIONS = [
  { value: 'wolt', label: 'Wolt' },
  { value: 'foodora', label: 'foodora' },
  { value: 'undecided', label: 'Not decided yet' },
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

