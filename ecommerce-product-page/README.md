# 🛒 E-commerce Product Page

A responsive e-commerce product page built with React and TypeScript. This project replicates a challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6) and includes features like image carousels, lightboxes, cart management, and mobile-friendly navigation.

## 🚀 Live Demo

👉 [View Live](https://ecommercee-product-page.netlify.app/)

---

## 🧩 Features

- 🖼️ Product image carousel with thumbnails
- 💡 Fullscreen lightbox view
- 🛒 Cart with quantity tracking and localStorage persistence
- 📱 Responsive mobile menu with accessibility support
- ♿ Fully accessible with `aria-*` attributes and keyboard interaction

---

## 📸 Screenshots

### 💻 Desktop

![Desktop Screenshot](./design/desktop-design.jpg)

### 📱 Mobile

![Mobile Screenshot](./design/mobile-design.jpg)

---

## 🧱 Tech Stack

- **React + TypeScript**
- **Vite** (for bundling & fast dev)
- **CSS Modules** (for scoped styling)
- **LocalStorage API** (to persist cart quantity)
- Custom **React hooks**

---

## 🗂️ Project Structure

---

## 🧪 How It Works

- `useToggleMenu`: Handles mobile menu toggle state and listens for `Escape` key to close.
- `ImageCarousel`: Displays product images with `Next`/`Previous` buttons and thumbnails.
- `Lightbox`: Reuses `ImageCarousel` for a modal full-screen view.
- `ProductContent`: Quantity management and "Add to cart" logic.
- `App`: Tracks cart quantity with `useState` and persists it via `localStorage`.

---

## 📦 Installation

```bash
git https://github.com/moiseslugo-04/frontend-challenges/tree/main/ecommerce-product-page
cd e-commerce-product-page
pnpm install
pnpm dev
```
