
# ADmyBRAND AI Suite - Landing Page

A modern, responsive landing page for the ADmyBRAND AI Suite platform built with Next.js 14, featuring AI-powered marketing tools and brand management solutions.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm package manager (recommended) or npm

### Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/praneethreddie/admybrand.git
   cd admybrand-landing-page
   
2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   *Or with npm:*
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```
   *Or with npm:*
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📋 Project Overview

### What This Is
A complete landing page showcasing the ADmyBRAND AI Suite - an AI-powered marketing platform that helps businesses create content, analyze campaigns, and maintain brand consistency.

### Key Features
- **AI Content Generation** - Create compelling marketing content
- **Smart Campaign Analytics** - Track and optimize performance
- **Brand Voice Training** - Maintain consistent messaging
- **Multi-Platform Integration** - Connect with marketing tools
- **Real-time Collaboration** - Team workflow management
- **Advanced Automation** - Streamlined marketing processes

### Technical Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion
- **Theme:** Dark/Light mode with next-themes
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 📁 Project Structure

├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page component
├── components/
│   ├── theme-provider.tsx   # Theme context provider
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       └── ...
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── ...                  # Static assets
├── styles/
│   └── globals.css          # Additional global styles
└── ...



## 🎨 Customization Guide

### Changing Colors
Edit `app/globals.css` to modify theme colors:

```css
:root {
  --primary: 221 83% 53%;        /* Main brand color */
  --primary-foreground: 0 0% 98%; /* Text on primary */
  --background: 0 0% 100%;        /* Page background */
  --foreground: 0 0% 3.9%;        /* Main text color */
}

.dark {
  --primary: 221 83% 53%;        /* Same primary for dark mode */
  --background: 0 0% 3.9%;        /* Dark background */
  --foreground: 0 0% 98%;         /* Light text */
}
```

### Updating Content
1. **Hero Section:** Edit headline and description in `app/page.tsx`
2. **Features:** Modify the `features` array in `app/page.tsx`
3. **Images:** Replace files in `public/` directory
4. **Navigation:** Update header links in `app/page.tsx`

### Adding New Components
```bash
px shadcn-ui@latest add [component-name]
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on push

### Netlify
1. Build command: `pnpm build`
2. Publish directory: `.next`
3. Deploy

### Manual Deployment
```bash
# Build the project
pnpm build

# The built files are in .next/ directory
# Upload to your hosting provider
```

## 🔧 Available Commands

```bash
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run code linting
```

## 🌙 Theme System

The app includes automatic dark/light theme switching:
- **Auto-detection:** Follows system preference
- **Manual toggle:** Theme switcher in navigation
- **Persistent:** Remembers user choice
- **Smooth transitions:** No flash between themes

## 📱 Responsive Design

Fully responsive across all devices:
- **Mobile:** < 768px (optimized touch interface)
- **Tablet:** 768px - 1024px (balanced layout)
- **Desktop:** > 1024px (full feature display)

## 🛠️ Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
pnpm dev -- -p 3001
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
pnpm build
```

**Theme not switching:**
- Check if `next-themes` is properly installed
- Verify CSS variables are defined in `globals.css`
- Ensure `ThemeProvider` wraps the app in `layout.tsx`

### Performance Tips
- Images are optimized with Next.js Image component
- Components are lazy-loaded where appropriate
- CSS is automatically purged in production
- Bundle is split for optimal loading

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Support

- **Issues:** Create GitHub issue for bugs
- **Questions:** Check Next.js and shadcn/ui documentation
- **Updates:** Follow semantic versioning for updates

---

**Ready to launch your AI-powered marketing platform!** 🚀

