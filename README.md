# The Gulabi Store 🌸
### A Digital Marketplace for Jaipur's Artisans

> *"Every piece you buy keeps an art form alive."*

A full-stack e-commerce platform built as a Major Project at Manipal University Jaipur. The Gulabi Store connects Jaipur's master artisans directly with buyers across India — preserving dying craft traditions while making authentic handmade Rajasthani products accessible and affordable.

🌐 **Live Site:** [the-gulabi-store.vercel.app](https://the-gulabi-store.vercel.app)

---

## 🎯 The Problem We're Solving

Most of Jaipur's finest artisans are masters of their craft but strangers to the internet. They have no website, no social media presence, and no way to reach customers beyond their local market. The Gulabi Store changes that — we handle the photography, listings, orders, and delivery so artisans can focus entirely on what they do best: creating.

---

## ✨ Key Features

- 🏺 **Artisan Directory** — Dedicated profiles for local craftspeople with biography, portfolio, craft specialisation, and contact information
- 🛍️ **25 Authentic Products** — Across 13 Jaipur craft categories including Block Print Textiles, Blue Pottery, Meenakari Jewellery, Lac Bangles, Marble Inlay, and more
- 🔍 **Search & Filter** — Browse by category, price range, and customer rating
- 🛒 **Full Shopping Flow** — Cart, checkout, order tracking, and order history
- 👤 **User Authentication** — Secure sign-up/sign-in with NextAuth.js
- 🌙 **Dark Mode** — Full dark/light mode with a custom Jaipur-inspired dark theme
- ⚙️ **Admin Dashboard** — Complete product, order, and user management
- 📱 **Responsive Design** — Works across desktop, tablet, and mobile
- 🇮🇳 **Indian Localisation** — Prices in ₹ (INR), 18% GST, free shipping above ₹999

---

## 🗂️ Craft Categories

| Category | Category |
|---|---|
| Block Print Textiles | Rajasthani Puppets |
| Blue Pottery | Jaipur Carpets |
| Meenakari Jewellery | Jaipur Razai |
| Lac Bangles | Embroidered Umbrellas |
| Sandalwood Crafts | Jaipuri Juttis |
| Leather Mojaris | Rajasthani Paintings |
| Marble Inlay | |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL on Neon |
| ORM | Prisma |
| Auth | NextAuth.js |
| Styling | Tailwind CSS + ShadCN UI |
| Deployment | Vercel |
| Fonts | Playfair Display + Poppins |

---

## 🗄️ Database Schema

The application uses 8 Prisma models:
- **Product** — Catalogue with 25 Jaipur handicraft items
- **Artisan** — Custom model for the Artisan Directory (unique feature)
- **User** — Customer and admin accounts
- **Order + OrderItem** — Order management
- **Cart** — Session-based shopping cart
- **Review** — Product reviews with verified purchase flag

---

## 🎨 Brand Identity

The Gulabi Store uses a Jaipur-heritage colour palette:

| Colour | Hex | Usage |
|---|---|---|
| Gulabi Pink | `#E85A8B` | Buttons, highlights, accents |
| Soft Blush | `#F7EDEB` | Page background |
| Deep Brown | `#4A2C2A` | Headings, text |
| Gold Accent | `#C8A96A` | Dividers, premium details |

Typography: **Playfair Display** (headings) + **Poppins** (body)

---

## 🔮 Future Goals

- [ ] Artisan self-service profile management
- [ ] Custom/personalised order requests
- [ ] Expand to Jodhpur, Udaipur, and Bikaner
- [ ] Artisan training workshop bookings
- [ ] UPI and card payment integration
- [ ] Women artisan spotlight programme

---

## 📄 License

This project was developed as a Major Project at **Manipal University Jaipur**, Department of Information Technology, 2025–26.

---

*Built with 🌸 in Jaipur*