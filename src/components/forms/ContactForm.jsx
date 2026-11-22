import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, ShieldAlert, Send, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import {
  contactFormSchema,
  CONTACT_SERVICE_OPTIONS,
} from '../../utils/validation';
import { submitEnquiryForm } from '../../utils/formSubmission';
import FormField from './FormField';
import FormSelect from './FormSelect';
import Button from '../common/Button';

export default function ContactForm({ defaultService = 'gtr-registration' }) {
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: defaultService,
      message: '',
      privacyConsent: false,
    },
  });

  const selectedServiceValue = watch('service');
  const selectedServiceLabel =
    CONTACT_SERVICE_OPTIONS.find((opt) => opt.value === selectedServiceValue)?.label ||
    'General Enquiry';

  const onSubmit = async (formData) => {
    setSubmitStatus('loading');
    setStatusMessage('');

    const serviceLabel =
      CONTACT_SERVICE_OPTIONS.find((opt) => opt.value === formData.service)?.label ||
      formData.service;

    const result = await submitEnquiryForm({
      formType: `Contact Enquiry — ${serviceLabel}`,
      fields: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || '(Not provided)',
        service: serviceLabel,
        message: formData.message,
        privacyConsent: formData.privacyConsent,
      },
    });

    if (result.ok) {
      setSubmitStatus('success');
      setStatusMessage(
        `Thank you, ${formData.fullName}. Your message regarding "${serviceLabel}" has been sent to Atlantic Budapest (${SITE_CONFIG.email}). We will respond as soon as possible.`
      );
      return;
    }

    setSubmitStatus('error');
    setStatusMessage(result.message);
  };

  if (submitStatus === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-background border border-accent/40 p-7 sm:p-8 space-y-4 text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 text-accent mx-auto">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="space-y-1.5 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-primary">Message Sent</h3>
          <p className="text-sm text-muted leading-relaxed">{statusMessage}</p>
        </div>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={() => {
              setSubmitStatus('idle');
              setStatusMessage('');
              reset({
                fullName: '',
                email: '',
                phone: '',
                service: defaultService,
                message: '',
                privacyConsent: false,
              });
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Security Notice: Never Collect Government Passwords */}
      <div className="rounded-lg bg-secondary/60 border border-border p-3.5 flex items-start gap-2.5 text-xs text-primary">
        <ShieldAlert
          className="w-4 h-4 text-accent shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <span>
          <strong>Privacy &amp; security note:</strong> Never share government passwords or Ügyfélkapu credentials here. Sensitive identification is only handled later through an appropriate secure process.
        </span>
      </div>

      {/* Error Banner with Direct Email Fallback */}
      {submitStatus === 'error' && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 p-4 space-y-2 text-xs sm:text-sm text-red-900"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">{statusMessage}</p>
          </div>
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
              `Atlantic Budapest Enquiry: ${selectedServiceLabel}`
            )}`}
            className="inline-flex items-center gap-1.5 font-semibold text-primary underline hover:text-accent pl-6"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            Compose direct email to {SITE_CONFIG.email}
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="contact-fullName"
          label="Full Name"
          placeholder="e.g. Alex Taylor"
          required
          disabled={isSubmitting || submitStatus === 'loading'}
          error={errors.fullName}
          registration={register('fullName')}
        />

        <FormField
          id="contact-email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          required
          disabled={isSubmitting || submitStatus === 'loading'}
          error={errors.email}
          registration={register('email')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="contact-phone"
          label="Phone Number (Optional)"
          type="tel"
          placeholder="+36 70 000 0000"
          hint="Optional — helpful if you prefer a quick call back."
          disabled={isSubmitting || submitStatus === 'loading'}
          error={errors.phone}
          registration={register('phone')}
        />

        <FormSelect
          id="contact-service"
          label="Service"
          required
          options={CONTACT_SERVICE_OPTIONS}
          disabled={isSubmitting || submitStatus === 'loading'}
          error={errors.service}
          registration={register('service')}
        />
      </div>

      <FormField
        id="contact-message"
        label="Message"
        multiline
        rows={4}
        required
        placeholder="Tell us what you need help with (e.g., GTR registration, Wolt or foodora onboarding, monthly admin, or student support)..."
        disabled={isSubmitting || submitStatus === 'loading'}
        error={errors.message}
        registration={register('message')}
      />

      {/* Privacy Consent Checkbox */}
      <div className="space-y-1.5 pt-1">
        <label
          htmlFor="contact-privacyConsent"
          className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm text-muted"
        >
          <input
            id="contact-privacyConsent"
            type="checkbox"
            disabled={isSubmitting || submitStatus === 'loading'}
            className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
            {...register('privacyConsent')}
          />
          <span className="leading-relaxed">
            I consent to Atlantic Budapest storing and processing my submitted details solely to respond to my enquiry.{' '}
            <span className="text-accent">*</span>
          </span>
        </label>
        {errors.privacyConsent && (
          <p role="alert" className="text-xs font-medium text-red-700 pl-6">
            {errors.privacyConsent.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting || submitStatus === 'loading'}
          className="w-full sm:w-auto"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          Send Message
        </Button>
      </div>
    </form>
  );
}

