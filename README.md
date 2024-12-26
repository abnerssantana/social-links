# Bento Portfolio

A modern portfolio website built with Next.js 14, featuring a Bento grid design system. The site showcases professional services and social media presence through an elegant, responsive interface with light/dark mode support.

## Key Features

- **Bento Grid Layout**: Modular design system with customizable grid components
- **Dark/Light Theme**: Automatic and manual theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Type-Safe**: Built with TypeScript for enhanced reliability
- **Component Architecture**:
  - Grid system supporting multiple layout configurations (1x2, 2x2, 2x4, 2x6, 2x8)
  - Social media integration components
  - Media showcase with image galleries and video support
  - Custom icon system with Lucide React

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes
- class-variance-authority

## Project Structure

```
├── components/
│   ├── grid-items/    # Bento grid components
│   ├── theme/         # Theme management
│   └── layout/        # Layout components
├── config/
│   └── site-config.ts # Site configuration
└── styles/
    └── globals.css    # Global styles
```

## Configuration

Site content and grid layouts are managed through `site-config.ts`, allowing easy customization of:
- Profile information
- Social media links
- Grid layouts
- Color schemes
- Media content

## License

MIT License - feel free to use this project as a template for your own portfolio.
