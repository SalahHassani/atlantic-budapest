import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, ShieldAlert, Send, Mail } from 'lucide-react';
import { PACKAGES_DATA } from '../../data/packages';
import { SITE_CONFIG } from '../../config/site';
import { formatHUF } from '../../utils/formatCurrency';
import {
  packageApplicationSchema,
  COURIER_PLATFORM_OPTIONS,
} from '../../utils/validation';
import FormField from './FormField';
import FormSelect from './FormSelect';
import Button from '../common/Button';

export default function PackageForm({ selectedPackage, onPackageChange, onSuccessClose }) {
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const packageOptions = PACKAGES_DATA.map((pkg) => ({
    value: pkg.id,
    label: `${pkg.name} — ${formatHUF(pkg.price)} (${pkg.durationLabel})`,
  }));

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(packageApplicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      selectedPackage: selectedPackage?.id || PACKAGES_DATA[0].id,
      preferredPlatform: 'wolt',
      message: '',
      privacyConsent: false,
    },
  });

  const watchedPackageId = watch('selectedPackage');

  // Keep form synchronized when a user clicks a different pricing card
  useEffect(() => {
    if (selectedPackage?.id) {
      reset((prev) => ({
        ...prev,
        selectedPackage: selectedPackage.id,
      }));
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  }, [selectedPackage, reset]);

  // Notify parent modal when the user changes package inside the dropdown
  useEffect(() => {
    if (onPackageChange && watchedPackageId) {
      const matched = PACKAGES_DATA.find((pkg) => pkg.id === watchedPackageId);
      if (matched && matched.id !== selectedPackage?.id) {
        onPackageChange(matched);
      }
    }
  }, [watchedPackageId, onPackageChange, selectedPackage?.id]);

  const onSubmit = async (formData) => {
    setSubmitStatus('loading');
    setStatusMessage('');

    const chosenPackage =
      PACKAGES_DATA.find((pkg) => pkg.id === formData.selectedPackage) || selectedPackage;
    const platformLabel =
      COURIER_PLATFORM_OPTIONS.find((opt) => opt.value === formData.preferredPlatform)?.label ||
      formData.preferredPlatform;

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();

    if (!endpoint) {
      setSubmitStatus('error');
      setStatusMessage(
        `Automated email delivery is not configured yet in this environment. Please send your application directly to ${SITE_CONFIG.email} or call ${SITE_CONFIG.phone}.`
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          formType: 'Package Application',
          recipient: SITE_CONFIG.email,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          packageName: chosenPackage?.name || formData.selectedPackage,
          packagePrice: chosenPackage ? formatHUF(chosenPackage.price) : '',
          preferredPlatform: platformLabel,
          message: formData.message || '(No additional message)',
          privacyConsent: formData.privacyConsent,
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSubmitStatus('success');
      setStatusMessage(
        `Thank you, ${formData.fullName}. Your enquiry for ${chosenPackage?.name} has been submitted to Atlantic Budapest. We will review your details and reply shortly.`
      );
    } catch {
      setSubmitStatus('error');
      setStatusMessage(
        `We could not send your application right now due to a network or server issue. Please try again or email us directly at ${SITE_CONFIG.email}.`
      );
    }
  };

  if (submitStatus === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl bg-background border border-accent/40 p-6 space-y-4 text-center"
      >
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent/15 text-accent mx-auto">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-lg font-bold text-primary">
            Package Application Received
          </h4>
          <p className="text-sm text-muted leading-relaxed">{statusMessage}</p>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitStatus('idle');
              setStatusMessage('');
              reset({
                fullName: '',
                email: '',
                phone: '',
                selectedPackage: selectedPackage?.id || PACKAGES_DATA[0].id,
                preferredPlatform: 'wolt',
                message: '',
                privacyConsent: false,
              });
            }}
          >
            Submit Another Enquiry
          </Button>
          {onSuccessClose && (
            <Button type="button" variant="primary" size="sm" onClick={onSuccessClose}>
              Done
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Security Notice: Never Collect Government Passwords */}
      <div className="rounded-lg bg-secondary/60 border border-border p-3 flex items-start gap-2.5 text-xs text-primary">
        <ShieldAlert
          className="w-4 h-4 text-accent shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <span>
          <strong>Security reminder:</strong> Never enter government passwords or Ügyfélkapu credentials in this form. Sensitive identification is only collected later through an appropriate secure procedure.
        </span>
      </div>

      {/* Error State Banner */}
      {submitStatus === 'error' && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 p-3.5 space-y-2 text-xs text-red-900"
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">{statusMessage}</p>
          </div>
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
              `Package Application: ${selectedPackage?.name || 'Atlantic Budapest'}`
            )}`}
            className="inline-flex items-center gap-1.5 font-semibold text-primary underline hover:text-accent pl-6"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            Open direct email to {SITE_CONFIG.email}
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="pkg-fullName"
          label="Full Name"
          placeholder="e.g. Daniel Kovacs"
          required
          disabled={isSubmitting || submitStatus === 'loading'}
          error={errors.fullName}
          registration={register('fullName')}
        />

        <FormField
          id="pkg-email"
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
          id="pkg-phone"
          label="Phone Number"
          type="tel"
          placeholder="+36 70 000 0000"
          required
          disabled={isSubmitting || submitStatus === 'loading'}
          error={errors.phone}
          registration={register('phone')}
        />

        <FormSelect
          id="pkg-preferredPlatform"
          label="Preferred Courier Platform"
          required
          options={COURIER_PLATFORM_OPTIONS}
          disabled={isSubmitting || submitStatus === 'loading'}
          error={errors.preferredPlatform}
          registration={register('preferredPlatform')}
        />
      </div>

      <FormSelect
        id="pkg-selectedPackage"
        label="Selected Package"
        required
        options={packageOptions}
        disabled={isSubmitting || submitStatus === 'loading'}
        error={errors.selectedPackage}
        registration={register('selectedPackage')}
      />

      <FormField
        id="pkg-message"
        label="Additional Message (Optional)"
        multiline
        rows={3}
        placeholder="Let us know your timeline, student/residency status, or any questions..."
        disabled={isSubmitting || submitStatus === 'loading'}
        error={errors.message}
        registration={register('message')}
      />

      {/* Privacy Policy Consent */}
      <div className="space-y-1.5 pt-1">
        <label
          htmlFor="pkg-privacyConsent"
          className="flex items-start gap-2.5 cursor-pointer text-xs text-muted"
        >
          <input
            id="pkg-privacyConsent"
            type="checkbox"
            disabled={isSubmitting || submitStatus === 'loading'}
            className="mt-0.5 h-4 w-4 rounded border-border text-accent focus:ring-accent"
            {...register('privacyConsent')}
          />
          <span className="leading-relaxed">
            I consent to Atlantic Budapest processing my contact details to respond to this package application in accordance with applicable privacy rules.{' '}
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
          className="w-full"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          Submit Package Enquiry
        </Button>
      </div>
    </form>
  );
}

