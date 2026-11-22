import { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.assign('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-primary flex items-center justify-center p-6">
          <div className="max-w-md w-full surface-card p-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-700 mx-auto">
              <AlertTriangle className="w-6 h-6" aria-hidden="true" />
            </div>
            <h1 className="text-xl font-bold text-primary">
              Something went wrong
            </h1>
            <p className="text-sm text-muted leading-relaxed">
              We encountered an unexpected display error. Reload the page to continue, or contact us directly at{' '}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-semibold text-primary underline"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-surface text-sm font-medium hover:bg-[#193B5C] cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

