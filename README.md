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

- Next.js 15
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- next-themes
- class-variance-authority

# Project Structure

```
bento-portfolio/
├── app/
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Home page component
├── components/
│   ├── common/
│   │   ├── Button.tsx        # Reusable button component
│   │   └── Icon.tsx          # Icon component using react-icons
│   ├── grid/
│   │   ├── Grid.tsx          # Main grid component
│   │   ├── GridItem.tsx      # Individual grid item component
│   │   └── GridItemRenderer.tsx  # Renders correct component by type
│   ├── grid-items/           # Different types of grid content
│   │   ├── LinkItem.tsx
│   │   ├── MediaItem.tsx     # For images/galleries
│   │   ├── ProjectItem.tsx   # For project showcases
│   │   ├── SocialItem.tsx    # For social media links
│   │   └── VideoItem.tsx     # For video content
│   ├── layout/
│   │   ├── Footer.tsx        # Footer with copyright and theme toggle
│   │   ├── LeftPanel.tsx     # Profile information panel
│   │   └── PatternBackground.tsx  # Decorative background pattern
│   └── theme/
│       ├── ThemeProvider.tsx # Theme context provider
│       └── ThemeToggle.tsx   # Light/dark mode toggle
├── config/
│   ├── config-types.ts       # TypeScript interfaces for configuration
│   └── site-config.ts        # Main site configuration file
├── utils/
│   └── cn.ts                 # Utility for merging Tailwind classes
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
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
