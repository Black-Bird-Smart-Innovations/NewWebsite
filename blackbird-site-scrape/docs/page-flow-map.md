# Black Bird Website - Page Flow Map

## Site Architecture Overview

```
                                    ┌─────────────────┐
                                    │   ENTRY POINT   │
                                    │   Home Page     │
                                    │ (blackbirdtech) │
                                    └────────┬────────┘
                                             │
              ┌──────────────────────────────┼──────────────────────────────┐
              │                              │                              │
              ▼                              ▼                              ▼
    ┌─────────────────┐           ┌─────────────────┐           ┌─────────────────┐
    │    About Us     │           │  Our Products   │           │  User Account   │
    │  /about-us/     │           │ (web.blackbird) │           │ (dev.blackbird) │
    └─────────────────┘           └────────┬────────┘           └────────┬────────┘
                                           │                             │
                                           │                    ┌────────┴────────┐
                                           │                    │                 │
                                           ▼                    ▼                 ▼
                                  ┌─────────────────┐  ┌─────────────┐   ┌─────────────┐
                                  │  Product Page   │  │    Login    │   │  Register   │
                                  │  Smart Band     │  │   /login    │   │  /register  │
                                  └────────┬────────┘  └─────────────┘   └─────────────┘
                                           │
                                           ▼
                                  ┌─────────────────┐
                                  │      Cart       │
                                  │    /cart/       │
                                  └────────┬────────┘
                                           │
                                           ▼
                                  ┌─────────────────┐
                                  │    Checkout     │
                                  │   (Stripe)      │
                                  └─────────────────┘
```

---

## Domain Structure

| Domain | Purpose |
|--------|---------|
| `dev.wordpress.blackbirdtech.app` | WordPress content site (current) |
| `blackbirdtech.app` | Main marketing site |
| `web.blackbirdtech.app` | Products catalog |
| `dev.blackbirdtech.app` | User authentication |

---

## Navigation Structure

### Primary Navigation (Header)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [Logo]  │  Home  │  About Us  │  Our Products  │  Login  │  Register   │
└──────────────────────────────────────────────────────────────────────────┘
                                                            │
                                                   [Language Selector]
                                                            │
                              ┌──────────────────────────────┴──────────────────────────────┐
                              │  EN  │  ES  │  RU  │  HI  │  HT  │  ZH-HANT  │  ZH-HANS  │ HE │
                              └─────────────────────────────────────────────────────────────┘
```

### Footer Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  Quick Links:                                               │
│  • Plans & Pricing (anchor: #about-section)                 │
│  • Privacy Policy (/privacy-policy/)                        │
│  • Terms & Conditions (/terms-conditions/)                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Page Inventory

### Internal Pages (WordPress)

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page, hero, pricing, features |
| About Us | `/about-us/` | Company info, product details |
| Privacy Policy | `/privacy-policy/` | Legal - privacy |
| Terms & Conditions | `/terms-conditions/` | Legal - terms, EULA |
| Cart | `/cart/` | WooCommerce shopping cart |

### External Pages (Different Subdomains)

| Page | URL | Purpose |
|------|-----|---------|
| Products | `web.blackbirdtech.app/products` | Product catalog |
| Login | `dev.blackbirdtech.app/login` | User authentication |
| Register | `dev.blackbirdtech.app/register` | New user signup |

---

## User Flows

### Flow 1: New Visitor to Purchase

```
Home → About Us → Our Products → Product Page → Add to Cart → Cart → Checkout
```

### Flow 2: Returning User

```
Home → Login → Dashboard → Products → Cart → Checkout
```

### Flow 3: Information Seeker

```
Home → About Us → Privacy Policy/Terms
```

### Flow 4: App Download

```
Home → Download Section → App Store / Google Play
```

---

## Page Sections Detail

### Home Page Sections (Top to Bottom)

1. **Header** - Navigation, logo, language selector
2. **Hero Section** - Main value proposition, CTA
3. **Pricing Section** - Premium plan details ($39.99/mo)
4. **Features Section** - SOS, GPS, Crisis Management
5. **Mission Statement** - Company values
6. **Download Section** - App store links
7. **Community Section** - Benefits overview
8. **Footer** - Links, contact, social

### About Us Page Sections

1. **Header** - Navigation
2. **Hero** - Product introduction
3. **What You Get** - Feature list
4. **Device Capabilities** - Technical specs
5. **Value Propositions** - 3 key benefits
6. **Footer** - Contact info

---

## Technical Notes for Redesign

### Current Tech Stack
- WordPress CMS
- WooCommerce e-commerce
- Elementor page builder
- WPML multilingual plugin
- Stripe payments

### Multi-Language Support
- 8 languages currently supported
- Language selection via query param (`?lang=xx`)
- Flag icons for language selection UI

### Mobile Apps
- iOS app (App Store)
- Android app (Google Play)
- Custom app for device connectivity

---

## Content Assets Reference

See `/assets/` folder for:
- `/images/` - All site images and graphics
- `/images/flags/` - Language selector flags
- `/pdf/` - Downloadable brochures

See `/content/` folder for:
- Individual page content in markdown format
