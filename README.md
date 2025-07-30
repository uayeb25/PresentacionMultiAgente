# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Sistema Multiagente - Presentación Interactiva

Una presentación interactiva sobre sistemas multiagente para análisis de literatura académica, construida con React, TypeScript y Vite.

## 🚀 Características

- **React + TypeScript**: Tipado estático para mejor desarrollo
- **Vite**: Build tool rápido y moderno
- **Interactividad**: Cards clickeables con modales informativos
- **Navegación fluida**: Teclado y botones para navegación
- **Responsive**: Adaptado para diferentes dispositivos
- **Animaciones**: Transiciones suaves y efectos visuales

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- CSS Modules
- Lucide React (iconos)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## ⌨️ Navegación

- **Flecha derecha** o **Espacio**: Siguiente slide
- **Flecha izquierda**: Slide anterior
- **Escape**: Cerrar modal
- **Click**: Interactuar con elementos

## 📋 Estructura del Proyecto

```
src/
├── components/
│   ├── Presentation/
│   │   ├── Presentation.tsx    # Componente principal
│   │   ├── Slide.tsx          # Componente de slide individual
│   │   └── *.module.css       # Estilos de presentación
│   └── UI/
│       ├── Modal.tsx          # Modal reutilizable
│       ├── InteractiveCard.tsx # Cards interactivos
│       └── *.module.css       # Estilos de UI
├── data/
│   └── slides.tsx             # Datos de las slides
├── types/
│   └── presentation.ts        # Tipos TypeScript
└── styles.css                 # Estilos globales
```

## 🎯 Contenido de la Presentación

1. **Introducción** - Presentación del sistema
2. **Configuración Interactiva** - Exploración del sistema con:
   - **Agentes**: Roles especializados del sistema
   - **Modelos de IA**: Tecnologías utilizadas  
   - **Herramientas**: Stack tecnológico

## 🔧 Desarrollo

### Agregar nuevas slides
1. Edita `src/data/slides.tsx`
2. Añade tu contenido siguiendo la estructura existente
3. Actualiza el contador de slides en `Presentation.tsx`

### Personalizar estilos
- Modifica las variables CSS en `src/styles.css`
- Edita los archivos `.module.css` para componentes específicos

### Agregar interactividad
- Extiende los tipos en `src/types/presentation.ts`
- Modifica `InteractiveCard.tsx` para nuevos tipos de contenido

## 📱 Responsive Design

La presentación está optimizada para:
- **Desktop**: Experiencia completa con teclado
- **Tablet**: Touch navigation y layout adaptado
- **Mobile**: Interface simplificada y touch-friendly

## 🎨 Características Visuales

- **Gradientes**: Colores modernos y atractivos
- **Animaciones**: Transiciones suaves entre slides
- **Tipografía**: Inter font para mejor legibilidad
- **Iconos**: Lucide React para iconografía consistente
- **Scrollbar personalizado**: Detalles de diseño cuidados

## 🚀 Deploy

```bash
# Build para producción
npm run build

# Los archivos estarán en la carpeta dist/
# Puedes desplegar en Vercel, Netlify, GitHub Pages, etc.
```

---

**Desarrollado con ❤️ para presentaciones académicas interactivas**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
