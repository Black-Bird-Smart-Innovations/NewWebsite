# Black Bird Website - Sitemap

## Visual Site Structure

```
blackbirdtech.app
│
├── / (Home)
│   ├── #hero-section
│   ├── #pricing-section
│   ├── #features-section
│   ├── #mission-section
│   ├── #download-section
│   └── #community-section
│
├── /about-us/
│   ├── #hero
│   ├── #what-you-get
│   ├── #device-capabilities
│   └── #value-propositions
│
├── /privacy-policy/
│
├── /terms-conditions/
│
└── /cart/
    └── → Checkout (Stripe)

web.blackbirdtech.app
│
└── /products/
    └── Smart Band Product Page

dev.blackbirdtech.app
│
├── /login
└── /register
```

---

## Complete Page List

### Main Domain (blackbirdtech.app)

| Page | URL | Description | Priority |
|------|-----|-------------|----------|
| Home | `/` | Landing page with hero, pricing, features, mission, downloads | High |
| About Us | `/about-us/` | Company info, product details, device capabilities | High |
| Privacy Policy | `/privacy-policy/` | Legal privacy documentation | Medium |
| Terms & Conditions | `/terms-conditions/` | Terms of service, EULA | Medium |
| Cart | `/cart/` | WooCommerce shopping cart | High |

### Products Domain (web.blackbirdtech.app)

| Page | URL | Description | Priority |
|------|-----|-------------|----------|
| Products Catalog | `/products` | Product listing and catalog | High |
| Smart Band | `/products/smart-band` | Individual product page | High |

### Auth Domain (dev.blackbirdtech.app)

| Page | URL | Description | Priority |
|------|-----|-------------|----------|
| Login | `/login` | User authentication | High |
| Register | `/register` | New user registration | High |

---

## Navigation Structure

### Header Navigation
- Logo (→ Home)
- Home
- About Us
- Our Products (→ web.blackbirdtech.app)
- Login (→ dev.blackbirdtech.app)
- Register (→ dev.blackbirdtech.app)
- Language Selector (EN, ES, RU, HI, HT, ZH-HANT, ZH-HANS, HE)

### Footer Navigation
- Plans & Pricing (→ /#pricing-section)
- Privacy Policy (→ /privacy-policy/)
- Terms & Conditions (→ /terms-conditions/)

---

## Anchor Links (On-Page Navigation)

### Home Page Anchors
| Anchor | Section |
|--------|---------|
| `#hero-section` | Hero/Banner |
| `#pricing-section` | Premium Plan Pricing |
| `#features-section` | SOS, GPS, Crisis Management |
| `#mission-section` | Mission Statement |
| `#download-section` | App Store Links |
| `#community-section` | Community Benefits |

### About Us Page Anchors
| Anchor | Section |
|--------|---------|
| `#what-you-get` | Core Device Features |
| `#device-capabilities` | Technical Specifications |
| `#value-propositions` | Key Benefits |

---

## External Links

### App Downloads
- iOS App Store: `apps.apple.com/app/blackbird`
- Google Play Store: `play.google.com/store/apps/details?id=blackbird`

### Payment
- Stripe Checkout (external)

---

## Multi-Language URLs

Each page supports 8 languages via query parameter:

| Language | Code | Example URL |
|----------|------|-------------|
| English | `en` | `/about-us/?lang=en` |
| Spanish | `es` | `/about-us/?lang=es` |
| Russian | `ru` | `/about-us/?lang=ru` |
| Hindi | `hi` | `/about-us/?lang=hi` |
| Haitian Creole | `ht` | `/about-us/?lang=ht` |
| Traditional Chinese | `zh-hant` | `/about-us/?lang=zh-hant` |
| Simplified Chinese | `zh-hans` | `/about-us/?lang=zh-hans` |
| Hebrew | `he` | `/about-us/?lang=he` |

---

## XML Sitemap Reference

For SEO, an XML sitemap should include:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://blackbirdtech.app/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://blackbirdtech.app/about-us/</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://blackbirdtech.app/privacy-policy/</loc>
    <priority>0.5</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://blackbirdtech.app/terms-conditions/</loc>
    <priority>0.5</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://blackbirdtech.app/cart/</loc>
    <priority>0.7</priority>
    <changefreq>daily</changefreq>
  </url>
</urlset>
```

---

## Site Statistics

| Metric | Count |
|--------|-------|
| Total Pages | 9 |
| Main Domain Pages | 5 |
| Subdomains | 2 |
| Supported Languages | 8 |
| Total URLs (with languages) | 72 |
