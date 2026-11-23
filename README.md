# Atlantic Budapest

**Your Business. Our Support.**  
Corporate website for **Atlantic Budapest** — providing Hungarian sole proprietorship (GTR) business registration guidance, Wolt & foodora courier onboarding assistance, and ongoing administrative support in Budapest, Hungary.

- **Live Website:** [https://salahhassani.github.io/atlantic-budapest/](https://salahhassani.github.io/atlantic-budapest/)
- **Repository:** [https://github.com/SalahHassani/atlantic-budapest](https://github.com/SalahHassani/atlantic-budapest)
- **Development Team:** Team Atlas

---

## Business Contact

- **Email:** [Atlanticbudapest@gmail.com](mailto:Atlanticbudapest@gmail.com)
- **Phone:** +36 70 595 9910
- **Location:** Budapest, Hungary

---

## Tech Stack

- **Framework:** React 19 + Vite 8 (JavaScript)
- **Routing:** React Router DOM (`HashRouter` for static GitHub Pages compatibility)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod (`@hookform/resolvers`)
- **Deployment:** GitHub Pages (`gh-pages`)

---

## Pricing & Service Fees (HUF)

### Discounted Packages
- **Atlantic First Month** *(Duration: First month)* — **15,000 HUF** (Original: ~~17,000 HUF~~ · Save **2,000 HUF**)
  - GTR business registration assistance
  - Courier onboarding assistance (Wolt or foodora)
  - First-month ongoing administrative assistance
  - Required information preparation and checklist guidance
- **Atlantic Complete** *(Duration: 12 months)* — **50,000 HUF** (Original: ~~67,000 HUF~~ · Save **17,000 HUF**)
  - GTR business registration assistance
  - Wolt or foodora courier registration assistance
  - 12 months of ongoing account administration, payslips submission & tax-document coordination
  - Suspension, reactivation, and closure assistance within the agreed service scope

### Standard Individual & Statutory Fees
- **GTR Account Creation:** **5,000 HUF** *(one-time service fee)*
- **Wolt / foodora ID Creation Assistance:** **2,000 HUF** *(one-time add-on)*
- **Monthly Account Management (1-Year Contract):** **5,000 HUF / month** *(account management, payslips submission, and tax data coordination)*
- **MKIK Chamber of Commerce Contribution:** **5,000 HUF** *(mandatory annual statutory fee for any sole proprietorship, paid separately from Atlantic Budapest service fees)*

---

## Project Structure

```text
atlantic-budapest/
├── public/
│   ├── favicon.svg              # Site favicon
│   ├── logo.svg                 # Atlantic Budapest navbar brand logo
│   └── images/
│       └── hero-budapest-support.svg
├── src/
│   ├── assets/                  # Local images, icons, and design assets
│   ├── components/
│   │   ├── common/              # Reusable Badge, Button, SectionHeading
│   │   ├── forms/               # ContactForm and PackageForm with Zod validation
│   │   ├── home/                # Hero, TrustHighlights, HowItWorks sections
│   │   ├── layout/              # Navbar, Footer, PageContainer
│   │   ├── modals/              # Interactive PackageDetailsModal
│   │   └── pricing/             # PricingSection, PricingCard, comparison table
│   ├── config/                  # Site metadata and contact configuration
│   ├── data/                    # Structured data (services, packages, navigation, FAQ)
│   ├── hooks/                   # Custom React hooks (useModal)
│   ├── pages/                   # Route pages (Home, Services, Pricing, About, Contact, NotFound)
│   ├── utils/                   # Currency formatting (HUF), validation schemas, form submission
│   ├── App.jsx                  # HashRouter & route definitions
│   ├── index.css                # Tailwind v4 theme tokens & base styles
│   └── main.jsx                 # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md