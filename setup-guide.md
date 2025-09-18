# Complete Setup Guide for VS Code

## 1. Create New Vite Project
```bash
npm create vite@latest travora-app -- --template react-ts
cd travora-app
```

## 2. Install All Dependencies
```bash
# Main dependencies
npm install @hookform/resolvers @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip @react-three/drei @react-three/fiber @tanstack/react-query class-variance-authority clsx cmdk date-fns embla-carousel-react input-otp lucide-react next-themes react-day-picker react-hook-form react-resizable-panels react-router-dom recharts sonner tailwind-merge tailwindcss-animate three vaul zod

# Dev dependencies  
npm install -D tailwindcss postcss autoprefixer @types/node @types/react @types/react-dom @types/three
```

## 3. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

## 4. Replace Generated Files
Replace the following files with your Lovable code:
- `src/` folder (entire contents including assets folder)
- `tailwind.config.ts`
- `index.html`
- `vite.config.ts`
- Copy tsconfig files from Lovable

**IMPORTANT:** Make sure to copy the entire `src/assets/` folder with all images!

## 5. VS Code Settings
Create `.vscode/settings.json`:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

## 6. Restart VS Code TypeScript Server
1. Open Command Palette (Ctrl+Shift+P)
2. Run "TypeScript: Restart TS Server"

## 7. Run the Project
```bash
npm run dev
```