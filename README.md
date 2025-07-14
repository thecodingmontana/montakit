# 🌟 Montakit

**Montakit** is a powerful CLI tool that helps you scaffold and bootstrap projects quickly, with your preferred stack and configurations, so you can stop repeating yourself and focus on building.

[GitHub Repository](https://github.com/thecodingmontana/montakit.git)

---

## ✨ Features

✅ Choose your project name and folder  
✅ Pick a frontend framework: **Nuxt** or **Next.js**  
✅ Choose an ORM: **Prisma**, **Drizzle**, or none  
✅ Select optional features:

- REST or GraphQL API
- Styling: TailwindCSS, Shadcn UI, Vuetify, or plain CSS
- ESLint, Prettier, Husky, GitHub Actions

✅ Automatically sets up your folder structure, dependencies, and boilerplate

---

## 🚀 Installation

You can run Montakit directly with `npx`:

```bash
npx montakit
```

or install it globally:

```bash
npm install -g montakit
```

---

## 📝 Usage

```bash
montakit
```

Then follow the interactive prompts:

- Project name and location
- Framework: Nuxt / Next.js
- ORM: Drizzle / Prisma / None
- Database: PostgreSQL / MySQL / SQLite / MongoDB
- Styling: TailwindCSS / Shadcn / Vuetify / Plain
- Optional features: Auth, API type, linting, testing, CI/CD, Docker
- Git and package manager setup

Montakit will generate a ready-to-go project in your chosen folder.

---

## 📚 Example

```text
🎉 Welcome to Montakit!

? What is your project name? my-awesome-app
? Which frontend framework? Nuxt.js
? Which styling library? Shadcn + Tailwind
? Which ORM? Drizzle
? Which database? PostgreSQL
? API type? REST
? Include optional tools? ESLint, Prettier, Husky
? Package manager? pnpm
? Initialize Git repository? Yes

✅ Project my-awesome-app created successfully!
```

---

## 🛠️ Development

If you want to contribute or develop Montakit locally:

```bash
git clone https://github.com/thecodingmontana/montakit.git
cd montakit
npm install
npm run dev
```

To build:

```bash
npm run build
```

---

## 📄 License

[MIT](./LICENSE)

---

## ❤️ Author

Built with care by [Christopher Odhiambo](https://github.com/thecodingmontana)

---
