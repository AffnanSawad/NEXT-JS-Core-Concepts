<!--     --> 



---

## 📘 NEXT.JS FULL ROADMAP (With Easy Theory + Example)

---

### 1. **What is Next.js?**

🧠 **Theory**:  
Next.js is a **React framework** that helps build **fast, SEO-friendly** web applications. It has built-in routing, API support, SSR, and SSG.

📌 **Why use Next.js?**
- Built-in routing
- SEO friendly
- Server-side rendering
- Static site generation
- Fast performance
- Easy deployment (Vercel)

---

### 2. **Pages and File-Based Routing**

🧠 **Theory**:  
Next.js uses the **`pages/` folder** for routing. Each `.js` file inside `pages/` becomes a route.

📌 **Example:**
```jsx
// pages/about.js
export default function About() {
  return <h1>This is the About page</h1>
}
```
📌 Visit: `/about`

---

### 3. **Linking Between Pages**

🧠 **Theory**:  
Use `next/link` to move between pages without reloading.

📌 **Example:**
```jsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link>
    </>
  );
}
```

---

### 4. **Static Generation (SSG)**

🧠 **Theory**:  
Page is **generated at build time**. Very fast, good for SEO.

📌 **Use:** `getStaticProps`

📌 **Example:**
```jsx
export async function getStaticProps() {
  return {
    props: {
      name: 'Affnan'
    }
  }
}

export default function Home({ name }) {
  return <h1>Hello {name}</h1>
}
```

---

### 5. **Server-side Rendering (SSR)**

🧠 **Theory**:  
Page is **generated on each request**, always fresh data.

📌 **Use:** `getServerSideProps`

📌 **Example:**
```jsx
export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString()
    }
  }
}

export default function Time({ time }) {
  return <h1>Server Time: {time}</h1>
}
```

---

### 6. **Client-side Rendering (CSR)**

🧠 **Theory**:  
Page loads first, then fetches data from the browser using `useEffect`.

📌 **Example:**
```jsx
import { useEffect, useState } from 'react';

export default function Joke() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }, []);

  return <p>{joke}</p>;
}
```

---

### 7. **API Routes**

🧠 **Theory**:  
You can write **backend logic** inside `pages/api/`. It acts like a mini Node.js server.

📌 **Example:**
```jsx
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API' });
}
```

📌 Visit `/api/hello`

---

### 8. **Dynamic Routes**

🧠 **Theory**:  
Use `[param].js` to handle routes with dynamic values.

📌 **Example:**
```jsx
// pages/blog/[id].js
import { useRouter } from 'next/router';

export default function Blog() {
  const { id } = useRouter().query;
  return <h1>Blog ID: {id}</h1>;
}
```

📌 Visit: `/blog/123`

---

### 9. **getStaticPaths + getStaticProps**

🧠 **Theory**:  
Use for **dynamic SSG**. Pre-build pages for each ID.

📌 **Example:**
```jsx
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id
    }
  };
}

export default function Page({ id }) {
  return <h1>Page ID: {id}</h1>;
}
```

---

### 10. **Public Folder**

🧠 **Theory**:  
Place static files like images or robots.txt in `public/`.

📌 Access: `/logo.png` = `public/logo.png`

---

### 11. **Image Optimization with `next/image`**

🧠 **Theory**:  
Faster image loading with built-in optimizations.

📌 **Example:**
```jsx
import Image from 'next/image';

export default function Logo() {
  return <Image src="/logo.png" width={200} height={100} alt="Logo" />;
}
```

---

### 12. **Custom `_app.js`**

🧠 **Theory**:  
Used to wrap all pages. Useful for layout or global CSS.

📌 **Example:**
```jsx
// pages/_app.js
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

---

### 13. **Custom `_document.js`**

🧠 **Theory**:  
Use this to customize the HTML structure (like language or fonts).

📌 **Example:**
```jsx
// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

---

### 14. **Head Management**

🧠 **Theory**:  
Use `next/head` to add title, meta, etc.

📌 **Example:**
```jsx
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>My Cool Page</title>
      </Head>
      <h1>Welcome</h1>
    </>
  );
}
```

---

### 15. **Environment Variables**

🧠 **Theory**:  
Use `.env.local` to store secret keys.

📌 `.env.local`
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

📌 Usage:
```js
console.log(process.env.NEXT_PUBLIC_API_URL);
```

---

### 16. **Middleware (Advanced)**

🧠 **Theory**:  
Run logic (like auth or redirect) before a page loads.

📌 Example (root):
```js
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log("Middleware ran!");
  return NextResponse.next();
}
```

---

## 🎯 INTERVIEW QUESTIONS & ANSWERS

---

**Q1: What is the difference between SSR and SSG in Next.js?**  
👉 **SSG** generates the page at **build time**, great for speed.  
👉 **SSR** generates the page **on each request**, good for live data.

---

**Q2: How does routing work in Next.js?**  
👉 File-based routing. A file like `pages/about.js` becomes `/about`.

---

**Q3: What is `getStaticProps` used for?**  
👉 To fetch data at **build time** for static pages.

---

**Q4: What is `getServerSideProps` used for?**  
👉 To fetch data **on every request** for dynamic/updated content.

---

**Q5: Difference between `Link` and `<a>` tag?**  
👉 `Link` does **client-side navigation** (faster), `<a>` does full reload.

---

**Q6: What is middleware in Next.js?**  
👉 Middleware runs **before rendering the page**, used for auth, redirects.

---

**Q7: How do API routes work in Next.js?**  
👉 Files in `pages/api/` become serverless backend routes.

---

**Q8: How is `next/image` better than `img`?**  
👉 It loads images faster with lazy loading and optimization by default.

---

