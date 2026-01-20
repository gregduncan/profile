# 👨‍💻 Greg Duncan - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15 and React 19.

🌐 **Live Site:** [gregduncan.dev](https://gregduncan.dev)

---

## ✨ Features

- 🚀 **Next.js 15** with App Router and React Server Components
- ⚛️ **React 19** with the latest features
- 📝 **TypeScript** for type safety
- 🎨 **Responsive Design** with Bootstrap grid
- 🧪 **Vitest** for unit testing with Testing Library
- 📊 **Data-Driven Content** - GDCD music archive powered by JSON
- 🔌 **API Routes** - RESTful endpoints for GDCD data
- 📦 **Static Generation** - Pre-rendered pages for optimal performance

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API route handlers
│   │   └── gdcd/          # GDCD data endpoints
│   ├── gdcd/[id]/         # Dynamic GDCD year pages
│   ├── projects/          # Projects showcase
│   ├── skills/            # Skills & technologies
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── contact-form/      # Contact form with validation
│   ├── nav-menu/          # Navigation menu
│   ├── toggle/            # Toggle visibility component
│   └── track/             # Music track display
├── data/                  # JSON data files
│   └── gdcd.json          # 17 years of music data
├── styles/                # CSS stylesheets
└── types/                 # TypeScript type definitions
```

---

## 🎵 GDCD (Greg Duncan's Compilation Disc)

A personal music archive featuring top tracks from **2004 to 2025**.

- 📀 Data-driven rendering from JSON
- 🎧 Spotify playlist integration
- 🖼️ Album artwork display
- 🔗 API endpoints: `/api/gdcd` and `/api/gdcd/[year]`

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| ⚡ Framework | Next.js 15 |
| ⚛️ UI Library | React 19 |
| 📘 Language | TypeScript 5.7 |
| 🧪 Testing | Vitest 3 + Testing Library |
| 💅 Styling | CSS + Bootstrap |
| 📦 Package Manager | pnpm |
| 🟢 Runtime | Node.js 24+ |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 24 or higher
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/gregduncan/profile.git

# Navigate to the project
cd profile

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Testing

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test:run

# Run tests with coverage
pnpm test:coverage
```

### Formatting

```bash
# Format code with Prettier
pnpm format
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Home | `/` | Introduction and contact form |
| 💼 Projects | `/projects` | Portfolio of work including GigRaptor & Adapt.js |
| 🎯 Skills | `/skills` | Technical skills and expertise |
| 🎵 GDCD | `/gdcd/[year]` | Music compilations by year (2004-2025) |

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/gdcd` | GET | Get all available years |
| `/api/gdcd/[year]` | GET | Get tracks for a specific year |

---

## 🧪 Test Coverage

- ✅ Component unit tests
- ✅ Page rendering tests
- ✅ Navigation tests
- ✅ Form validation tests
- ✅ GDCD content tests

---

## 📜 License

This project is private and proprietary.

---

## 👤 Author

**Greg Duncan**
- 🌐 Website: [gregduncan.dev](https://gregduncan.dev)
- 💼 LinkedIn: [gregduncan](https://linkedin.com/in/gregduncan)
- 🐙 GitHub: [@gregduncan](https://github.com/gregduncan)

---

Made with ❤️ and ☕
