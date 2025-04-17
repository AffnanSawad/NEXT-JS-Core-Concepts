//   ***  WHAT WE HAVE LEARNED ?  *** //


---

## 🔍 What is **Next.js**?

**Next.js** is a **React framework** that enables developers to build **full-stack web applications** with features like:

- **Server-side rendering (SSR)**
- **Static site generation (SSG)**
- **API routes (backend in the same project)**
- **Routing system** (no need for React Router)
- **Image optimization**
- **Built-in SEO support**

It's built on top of **React**, making it perfect for creating **high-performance, SEO-friendly** web apps.

---

## ✅ Why is **Next.js** used?

1. **Better SEO** with SSR & SSG
2. **Faster load times** via static generation and automatic code splitting
3. **Built-in routing system** (no external router needed)
4. **API routes** allow backend logic inside the same project
5. **Built-in Image Optimization**
6. **File-based routing** is easy and clean

---

## 👍 Advantages of Next.js

| Advantage                        | Explanation                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| **SEO-Friendly**                | Server-side rendering helps with indexing by search engines                |
| **Performance**                 | Fast load time due to code splitting and lazy loading                      |
| **Developer Experience**        | File-based routing, TypeScript support, fast refresh, and good docs        |
| **Full-Stack Support**          | API routes allow backend logic inside the same project                     |
| **Image Optimization**          | Automatically optimizes images for faster load time                        |
| **Hybrid Rendering**            | You can use SSR, SSG, or even Client-side rendering as needed              |

---

## 👎 Disadvantages of Next.js

| Disadvantage                    | Explanation                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| **Complex for Beginners**       | Some concepts like SSR/SSG can be confusing                                |
| **Limited Built-in State Management** | Need external libraries like Redux/Zustand                                |
| **Build Time Increases**        | If you use SSG for many pages, build time can be long                      |
| **Server Deployment Required for SSR** | You can't just host SSR apps on static hosting (like GitHub Pages)       |

---

## 💬 Top Interview Questions with Answers

---

### 1. **What is Next.js, and how is it different from React?**

**Answer:**
Next.js is a framework built on top of React that supports features like server-side rendering, static site generation, routing, and API routes. Unlike React, which is only a UI library, Next.js provides a complete solution for building full-stack applications.

---

### 2. **What are the types of rendering in Next.js?**

**Answer:**
- **Client-Side Rendering (CSR)**
- **Server-Side Rendering (SSR)** – `getServerSideProps`
- **Static Site Generation (SSG)** – `getStaticProps`
- **Incremental Static Regeneration (ISR)** – Re-generates static pages on demand

---

### 3. **What is the difference between SSR and SSG in Next.js?**

**Answer:**
- **SSR** generates the page on every request (dynamic).
- **SSG** generates the page at build time (static and faster).

---

### 4. **What is `getStaticProps`, `getServerSideProps`, and `getStaticPaths`?**

**Answer:**
- `getStaticProps`: Used for SSG. Runs at build time.
- `getServerSideProps`: Used for SSR. Runs at request time.
- `getStaticPaths`: Used with `getStaticProps` for dynamic routes during SSG.

---

### 5. **How does routing work in Next.js?**

**Answer:**
Next.js uses **file-based routing**. Each file in the `pages/` folder becomes a route. For example:
- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/[id].js` → Dynamic route

---

### 6. **What is Incremental Static Regeneration (ISR)?**

**Answer:**
ISR allows you to update static pages **after deployment** by re-generating them in the background. You use `revalidate` in `getStaticProps`.

---

### 7. **How do API routes work in Next.js?**

**Answer:**
API routes are stored in `pages/api/`. Each file exports a handler function. Example:

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API' });
}
```

---

### 8. **What is the `_app.js` file in Next.js?**

**Answer:**
The `_app.js` file is used to initialize pages. You can use it to wrap all pages with global context providers, layout, or CSS.

---

### 9. **Can we use Redux or Context API in Next.js?**

**Answer:**
Yes. Next.js is React-based, so you can use Redux, Zustand, or Context API like in any React app.

---

### 10. **What is Middleware in Next.js?**

**Answer:**
Middleware runs **before a request is completed**. It can be used for tasks like **authentication, redirects**, or **logging**.

---

Sure Affnan! Let's break down **Advanced Data Fetching with Server-Side Rendering (SSR)** in **Next.js**, step by step in a beginner-friendly and real-world style.

---

## ⚡️ What is Server-Side Rendering (SSR)?

In **SSR**, Next.js **renders the page on the server** for every request. It’s perfect when you need:

- Fresh data on every page load
- Secure server-side operations (e.g., DB queries, authentication)

Next.js does this using the special function:  
```js
export async function getServerSideProps(context) {}
```

---

## 🧠 Concept Breakdown

### 🔄 How SSR Works:
1. User requests a page
2. Server runs `getServerSideProps()`
3. Page is rendered with fresh data
4. HTML is sent to the client

---

## 🧪 Basic Syntax of SSR

```jsx
// pages/products.js

export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/products')
  const data = await res.json()

  return {
    props: {
      products: data,
    },
  }
}

export default function ProductsPage({ products }) {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

---

## 🧠 Advanced Topics in SSR

Let’s now go beyond the basics:

---

### 1. 🔐 SSR with Authentication (Using Cookies / JWT)

You can access cookies or tokens from `context.req` and `context.res` to validate the user.

```js
export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  // Fetch data for logged-in user
  const res = await fetch('https://api.example.com/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userData = await res.json();

  return {
    props: {
      user: userData,
    },
  };
}
```

---

### 2. 🔄 Dynamic Routes with SSR

Use `context.params` to get dynamic route params like `[id].js`.

```js
// pages/post/[id].js

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://api.example.com/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
```

---

### 3. 🛡 Using SSR with Server-Side Databases (MongoDB / Prisma)

You can directly connect to your database from the server using SSR since it runs only on the server.

```js
// pages/users.js
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function getServerSideProps() {
  await dbConnect();
  const users = await User.find({}).lean(); // Get all users from MongoDB

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)), // Convert Mongo docs to plain JSON
    },
  };
}
```

---

### 4. 🚨 Error Handling in SSR

Always handle errors to avoid breaking the page:

```js
export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: [], error: error.message },
    };
  }
}
```

---

## 🧩 Real-World Use Cases of SSR

| Use Case                        | Why SSR?                                |
|-------------------------------|------------------------------------------|
| User Dashboard                 | Requires secure, real-time user data     |
| Product Pages with Live Prices| Prices need to be always fresh           |
| Admin Panel                   | Needs authentication and secure data     |
| News / Blog Pages             | Must be updated on each visit            |

---

## 💡 Pro Tips

- SSR pages **cannot be statically hosted** (must use server or Vercel).
- Avoid SSR for heavy APIs unless truly needed—use SSG or client fetch for faster UX.
- Use `context.query` to get query params like `?search=...`.

---

Great! Let’s walk through the following four topics one by one in a **clean, technical, and beginner-friendly** way:

---

## 🔁 1. **Dynamic Data Fetching in Next.js**

**Dynamic Data Fetching** refers to fetching data **based on dynamic inputs**, such as route params or query strings, either at:

- **Build Time**: Using `getStaticProps + getStaticPaths`
- **Request Time**: Using `getServerSideProps`
- **Run Time (on client)**: Using `useEffect` or `SWR`

### ✅ Example: Dynamic route with SSR

```js
// pages/products/[id].js

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://api.example.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default function Product({ product }) {
  return <h1>{product.name}</h1>;
}
```

---

## 🧠 2. **Client-Side Data Fetching – Technical Breakdown**

Client-side fetching happens **in the browser**, after the page is loaded. You use:
- `useEffect()` + `fetch()`
- OR Next.js's `SWR` or `React Query` for better performance/caching

### 🔧 When to use Client-side fetching:
- Data isn’t needed for SEO
- User-specific data (e.g., cart, notifications)
- Real-time or frequently updating content

### ✅ Example with `useEffect`:

```js
import { useEffect, useState } from 'react';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <ul>
      {blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
    </ul>
  );
}
```

### ✅ With SWR (Recommended)

```bash
npm install swr
```

```js
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Dashboard() {
  const { data, error } = useSWR('/api/dashboard', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <div>Hello {data.username}</div>;
}
```

---

## 🎨 3. **Styling in Next.js**

You can style your components in multiple ways:

### ✅ 1. **Global CSS**  
Imported in `_app.js`. Applies to the whole site.

```js
// pages/_app.js
import '../styles/globals.css';
```

---

### ✅ 2. **CSS Modules** (Most Popular in Next.js)

- Locally scoped styles
- Automatically creates unique class names

```bash
// File name must end with `.module.css`
Button.module.css:
-------------------
.button {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

```jsx
// Button.js
import styles from './Button.module.css';

export default function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

✅ Output will be something like:

```html
<button class="Button_button__3a2Kf">Click Me</button>
```

➡ No class conflicts even if two files have `.button`

---

## 🎨 4. **Styling Options in Next.js (Comparison)**

| Style Option       | Scoped? | Best Use Case                        |
|--------------------|--------|--------------------------------------|
| Global CSS         | ❌ No   | Base styles like `body`, `html`, fonts |
| CSS Modules        | ✅ Yes  | Component-level styling              |
| Tailwind CSS       | ✅ Yes  | Utility-first design, responsive UI  |
| Styled-Components  | ✅ Yes  | CSS-in-JS, dynamic styles            |
| Sass / SCSS        | ✅ Yes  | Nested styling with variables        |

---

## 🧪 Bonus: How to Use CSS Modules with Dynamic ClassNames

```jsx
import styles from './Button.module.css';

export default function Button({ primary }) {
  return (
    <button className={primary ? styles.primary : styles.secondary}>
      Click
    </button>
  );
}
```

---

Would you like a **small hands-on project combining**:  
- Dynamic routes  
- Client-side fetching  
- CSS Modules?  
Let me know and I’ll guide you step by step!