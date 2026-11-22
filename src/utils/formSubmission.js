import { SITE_CONFIG } from '../config/site';

export async function submitEnquiryForm({ formType, fields }) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();

  if (!endpoint) {
    return {
      ok: false,
      reason: 'not_configured',
      message: `Automated email delivery is not configured yet in this environment. Please send your enquiry directly to ${SITE_CONFIG.email} or call ${SITE_CONFIG.phone}.`,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `[${SITE_CONFIG.brandName}] ${formType}`,
        formType,
        recipient: SITE_CONFIG.email,
        ...fields,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        reason: 'server_error',
        message: `The email service returned an error (status ${response.status}). Please try again or email ${SITE_CONFIG.email} directly.`,
      };
    }

    return {
      ok: true,
      reason: 'submitted',
      message: '',
    };
  } catch {
    return {
      ok: false,
      reason: 'network_error',
      message: `We could not connect to the email service right now. Please check your connection or email ${SITE_CONFIG.email} directly.`,
    };
  }
}

