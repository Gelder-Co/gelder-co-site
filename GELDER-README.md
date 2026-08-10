# GELDER & Co.

**Investment Research & Financial Education — Financial education membership with tiers, rate guides, and portfolio tools.**

## Overview

GELDER & Co. is a membership-based financial education platform offering investment research frameworks, capital systems training, and portfolio management tools.

**Live Site:** `https://gelder-co.github.io/gelder-co-site`

---

## Features

✅ **Three Membership Tiers**
- Foundation ($49/month) — Getting Started
- Operator ($149/month) — Active Investors
- Institutional ($499/month) — Portfolio Managers

✅ **Core Tools**
- Red Flag Scorecard (fraud detection)
- Stock Evaluation Framework
- Yield Map (rate tracking)
- Capital Systems Suite (Foundation/Operator/Institutional)

✅ **Educational Content**
- Investment fundamentals
- Research methodologies
- Portfolio management frameworks
- Monthly strategy updates

✅ **Design**
- Luxury black-and-gold theme
- Fully responsive (mobile-first)
- Dark mode optimized
- Fast-loading static site

---

## Tech Stack

- **Frontend:** HTML5, CSS3 (no frameworks)
- **Hosting:** GitHub Pages
- **Payments:** Paddle
- **Backend:** Supabase (optional, for member data)
- **Deployment:** Git

---

## Project Structure

```
gelder-co-site/
├── index.html                          # Landing page
├── home.html                           # Member dashboard
├── entry-splash.html                   # Pricing & membership
├── privacy-policy.html                 # Privacy policy
├── terms-of-sale.html                  # Terms of service
├── capital-systems-suite.html          # Capital systems (all tiers)
├── red-flag-scorecard.html             # Fraud detection tool
├── stock-evaluation-framework.html     # Evaluation framework
├── css/
│   └── styles.css                      # Complete design system
├── js/
│   ├── main.js                         # Main scripts
│   └── library-block.js                # Library utilities
├── docs/
│   ├── faq.html                        # FAQ
│   ├── contact.html                    # Contact form
│   ├── guides.html                     # Guides index
│   ├── our-method.html                 # Our methodology
│   ├── about.html                      # About page
│   ├── todays-rates.html               # Rate tracking
│   ├── top-brokers.html                # Broker guide
│   ├── web3.html                       # Web3 resources
│   ├── free-tool-guides.html           # Tool guides
│   ├── backend-wiring-guide.md         # Backend docs
│   └── guides/                         # PDF guides
├── Tier1 Foundation Playbook.pdf       # Foundation tier book
├── Tier1 Foundation Toolkit.xlsx       # Foundation toolkit
├── Tier2 Operator Toolkit.xlsx         # Operator toolkit
├── Tier3 Institutional Playbook.pdf    # Institutional book
├── Tier3 Institutional Toolkit.xlsx    # Institutional toolkit
├── README.md                           # This file
├── LICENSE                             # MIT License
└── .gitignore                          # Git ignore rules
```

---

## Getting Started

### For Deployment

1. **Clone or Create Repo**
   ```bash
   git clone https://github.com/onestopdesignshop/gelder-co-site.git
   cd gelder-co-site
   ```

2. **Add Files**
   - Copy all HTML files to root
   - Copy `styles.css` to `css/` folder
   - Copy JavaScript files to `js/` folder
   - Create `docs/` folder with doc pages
   - Add tier PDFs and Excel files to root

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`, Folder: `/` (root)
   - Save

4. **Verify**
   - Visit: `https://gelder-co.github.io/gelder-co-site`
   - Check dark background, gold accents
   - Test all links

### For Local Development

```bash
# No build step needed — this is a static site
# Simply open index.html in your browser or use a local server:

python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## Design System

### Color Palette

- **Primary Gold:** `#D4AF37`
- **Gold Light:** `#E8D4A8`
- **Gold Dark:** `#AA8C2C`
- **Black (Primary):** `#0A0E27`
- **Black (Secondary):** `#1A1F3A`
- **White Text:** `#F5F5F5`
- **Accent Gray:** `#B8B8B8`

### Typography

- **Headings:** System font stack, bold
- **Body:** System font stack, 16px base
- **Font Weight:** 400 (regular), 700 (bold)

### Components

- **Navigation:** Sticky, dark background, gold bottom border
- **Hero:** Dark gradient, large gold headings
- **Cards:** Dark background, gold left border, hover lift effect
- **Buttons:** Gold background, black text; .btn-secondary for outline style
- **Tables:** Gold header, dark body, 1px borders
- **Forms:** Dark inputs, gold focus, rounded corners

### Responsive Design

- **Mobile First:** All styles optimized for mobile
- **Breakpoint:** 768px (tablet and up)
- **Max Width:** 1200px content area

---

## Membership Pricing

### Foundation Tier ($49/month)
- Stock Evaluation Framework
- Red Flag Scorecard
- Rate Guides
- Core Concepts
- Foundation Toolkit

### Operator Tier ($149/month)
- Everything in Foundation
- Capital Systems (Operator)
- Deep Dive Tools
- Yield Map Tracking
- Operator Toolkit
- Monthly Updates

### Institutional Tier ($499/month)
- Everything in Operator
- Institutional Playbook
- Advanced Research
- Custom Support
- Institutional Toolkit

---

## Features & Pages

### Public Pages
- **index.html** — Landing page, features, tiers, values
- **entry-splash.html** — Pricing page, membership comparison, signup CTA
- **privacy-policy.html** — Privacy policy (11 sections, GDPR/CCPA compliant)
- **terms-of-sale.html** — Terms of service (20 sections)

### Member Pages
- **home.html** — Member dashboard, quick links, tier access
- **capital-systems-suite.html** — All three capital systems tiers
- **red-flag-scorecard.html** — Interactive fraud detection tool
- **stock-evaluation-framework.html** — Stock evaluation methodology

### Documentation
- **docs/faq.html** — Frequently asked questions
- **docs/contact.html** — Contact form
- **docs/guides.html** — Guide index
- **docs/our-method.html** — Our research methodology
- **docs/about.html** — About GELDER & Co.
- **docs/todays-rates.html** — Real-time rate tracking
- **docs/top-brokers.html** — Recommended brokers
- **docs/web3.html** — Web3 resources

---

## Branding Guidelines

### Logo & Name
- **Name:** GELDER & Co.
- **Tagline:** "Leadership. Education. Discipline. Growth. Excellence. Research. — Building Confidence and Creating Opportunity for every investor."
- **L.E.D.G.E.R. Acronym:** Core brand values

### Email
- Support: dee8shops@gmail.com

### Voice & Tone
- Professional, educational, confident
- Clear, jargon-minimized (explain when needed)
- Action-oriented, goal-focused

---

## Maintenance & Updates

### Monthly Tasks
- Update Yield Map rates
- Refresh rate guides
- Review & update market commentary

### Quarterly Tasks
- Review tier content accuracy
- Update strategy updates
- Check all external links

### Annual Tasks
- Audit all content for relevance
- Review privacy policy & terms
- Update tier materials

---

## Payment Integration

### Paddle
- Seller ID: 366385
- Supports: Credit cards, PayPal, Apple Pay, Google Pay
- 30-day satisfaction guarantee
- Monthly auto-renewal
- Cancel anytime

### Next Steps
- Link checkout buttons to Paddle payment links
- Configure success/failure redirects
- Set up webhook for payment confirmations
- Test in sandbox mode

---

## Analytics & Tracking

- **Google Analytics:** (optional, configure as needed)
- **Conversion Tracking:** Membership signups
- **Engagement Metrics:** Page views, time on site, tool usage

---

## Known Limitations

- Static site (no server-side processing)
- Member authentication requires external service
- Rate data updated manually (consider API integration)
- No user-generated content (comment systems, forums)

---

## Future Enhancements

- [ ] Member login system
- [ ] Automated rate API integration
- [ ] Discussion forum or community
- [ ] Mobile app (iOS/Android)
- [ ] Advanced search functionality
- [ ] PDF download of guides
- [ ] Email newsletter automation

---

## Support & Contact

**Email:** dee8shops@gmail.com

For issues, feature requests, or support, contact the support email above.

---

## License

MIT License — See LICENSE file for details.

---

## Changelog

### Version 1.0 — August 10, 2026
- Initial launch
- 3 membership tiers (Foundation, Operator, Institutional)
- 5 core pages (landing, home, entry, privacy, terms)
- Capital Systems Suite
- Free tools (Red Flag Scorecard, Stock Evaluation, Yield Map)
- Complete design system (black-and-gold luxury theme)
- 8+ documentation pages
- Mobile responsive design

---

## Credits

**Created by:** GELDER & Co.  
**Design:** Luxury black-and-gold investment research platform  
**Platform:** GitHub Pages + Static HTML/CSS  
**Updated:** August 10, 2026

---

**Live Site:** [https://gelder-co.github.io/gelder-co-site](https://gelder-co.github.io/gelder-co-site)

---

## Quick Links

- [Terms of Service](terms-of-sale.html)
- [Privacy Policy](privacy-policy.html)
- [FAQ](docs/faq.html)
- [Contact](docs/contact.html)
