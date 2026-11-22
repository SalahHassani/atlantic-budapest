import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

export function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${SITE_CONFIG.brandName}`
      : `${SITE_CONFIG.brandName} | ${SITE_CONFIG.tagline}`;

    if (description) {
      let metaTag = document.querySelector('meta[name="description"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'description');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', description);
    }
  }, [title, description]);
}

