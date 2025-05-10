# 📘 Next.js Core Concepts

This document provides a clear and concise overview of the **core concepts** in **Next.js**, a powerful React framework for building modern web applications with features like server-side rendering, static site generation, and API support.

---

## 🌐 1. File-Based Routing

- Every file inside the `/pages` directory becomes a route.
- For example: `pages/index.js` maps to `/`, and `pages/about.js` maps to `/about`.

### ✅ Dynamic Routes
- Use square brackets to create dynamic pages: `pages/post/[id].js` → `/post/123`.

---

## ⚡ 2. Pre-Rendering

Next.js pre-renders pages to improve performance and SEO. Two forms:

### 1. **Static Generation (SSG)**
- HTML is generated at **build time**.
- Fast and great for pages that don’t change often.

### 2. **Server-Side Rendering (SSR)**
- HTML is generated **on each request**.
- Useful for dynamic or personalized content.

---

## 🔁 3. Data Fetching Methods

- **`getStaticProps()`**: Fetches data at build time (SSG).
- **`getServerSideProps()`**: Fetches data on every request (SSR).
- **`getStaticPaths()`**: Works with dynamic routes for static generation.
- **Client-side fetching**: Use `useEffect` and `fetch()` for client-only data.

---

## 🧪 4. API Routes

- Located in the `pages/api` directory.
- Allow you to build backend functionality directly into your app (e.g., `pages/api/hello.js`).

---

## 🖼️ 5. Static Assets

- Place static files like images in the `/public` folder.
- Accessible from the root URL (e.g., `/logo.png`).

---

## 🎨 6. Styling

Next.js supports multiple styling options:

- **Global CSS** – Import in `_app.js`.
- **CSS Modules** – Scoped styles using `Component.module.css`.
- **Sass** – Built-in support for `.scss` and `.sass`.
- Compatible with libraries like **Tailwind CSS** and **styled-components**.

---

## 🖼️ 7. Image Optimization

- Use `next/image` for automatic image optimization.
- Features: lazy loading, resizing, responsive images.

---

## 🔒 8. Head Management

- Use `next/head` to set page-specific metadata (title, description, etc.).
- Helps with SEO and dynamic content.

---

## ⚙️ 9. Middleware (Optional)

- Middleware runs before a request is completed.
- Use cases: authentication, redirects, logging.
- Runs at the edge, improving performance and control.

---

## 🛠️ 10. Built-in Features

- **Code splitting**: Only loads JavaScript needed for the current page.
- **Fast refresh**: Instant feedback during development.
- **API Routes**: Easily build full-stack apps.
- **File-system-based routing**: No need for react-router.
- **Incremental Static Regeneration (ISR)**: Update static pages after deployment.

---

## 🚀 11. Deployment

Next.js is optimized for deployment on platforms like:

- [Vercel](https://vercel.com) (official host)
- Netlify
- AWS, Heroku, or any Node-compatible platform

---

## 📚 Learn More

- [Next.js Official Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

## 🧠 Summary

| Concept              | Description                                            |
|----------------------|--------------------------------------------------------|
| File-based Routing   | Automatically maps files to routes                    |
| Pre-rendering        | SSG and SSR support for performance and SEO           |
| Data Fetching        | Multiple methods: getStaticProps, getServerSideProps  |
| API Routes           | Serverless backend functions                          |
| Static Assets        | Served from `/public` folder                          |
| Styling              | CSS Modules, Tailwind, Sass supported                 |
| Image Optimization   | Built-in with `next/image`                            |
| Middleware           | Edge functions for logic before requests              |
| Deployment           | Seamless with Vercel and others                       |

---

