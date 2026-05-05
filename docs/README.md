## 🚀 Project Overview

Translation in Brazilian Portuguese [README.pt-BR](./README.pt-BR.md)

**front-sketch-service-email** is a modern, high-conversion newsletter subscription interface built with React and Vite. It features a clean UI, smooth animations, and direct integration with a backend service to manage email subscriptions.

---

## 🛠️ Tech Stack
* **Framework**: React 19.
* **Build Tool**: Vite 8.
* **Styling**: Tailwind CSS 4 (utilizing the `@tailwindcss/vite` plugin).
* **Animations**: Motion (formerly Framer Motion).
* **Icons**: Lucide React.
* **HTTP Client**: Axios.
* **Language**: TypeScript.

---

## 📂 Key File Structure
* **`src/main.tsx`**: The core application file containing the `App` component, form logic, and API request handling.
* **`src/index.css`**: Global stylesheet initializing Tailwind CSS 4.
* **`vite.config.ts`**: Configuration for plugins and the development proxy.
* **`.proxyrc`**: Supplementary proxy configuration for the API.

---

## ⚙️ Development Setup

### 1. Installation
Install the necessary dependencies using bun:
```bash
bun install
```


### 2. Local Development
Start the Vite development server:
```bash
bun run dev
```
The application will be available at `http://localhost:5173`.

### 3. Production Build
To create an optimized production build:
```bash
bun run build
```


---

## 📧 API Integration
The frontend is configured to communicate with a backend service hosted on Render.

* **Proxy Target**: `https://sketch-service-email.onrender.com`.
* **Endpoint**: `POST /api/v1/subs`.
* **Payload Format**:
    ```json
    {
      "email": "string"
    }
    ```

* **Expected Response**: The application expects a `201` status code upon successful subscription.

---

## ✨ Features
* **Interactive UI**: Animated list of benefits for subscribers using Motion.
* **Form Validation**: Required email input with built-in browser validation.
* **Error Handling**: User-friendly error messages if the server is unreachable.
* **Success State**: A dedicated confirmation view once the email is successfully registered.

---

Would you like me to help you create a **Dockerignore** or **GitHub Actions** workflow to automate the deployment of this frontend?
