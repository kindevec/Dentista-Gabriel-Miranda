# 🦷 Odontología Gabriel Miranda — Landing Page PRO

Plataforma web clínica de alta conversión y fidelización para **Odontología Gabriel Miranda**, desarrollada bajo los estándares de arquitectura y diseño web de **Kindev S.A.S.**

---

## 🚀 Tecnologías y Stack

* **Core:** React 19 + TypeScript (Strict Mode)
* **Build Tool:** Vite 6
* **Estilos:** Tailwind CSS v4
* **Animaciones:** Motion (`motion/react`)
* **Iconografía:** Lucide React + Isotipos Vectoriales Oficiales (Meta WhatsApp, Instagram, Facebook)
* **Optimización Web:** OpenGraph optimizado 1:1 y 16:9, Core Web Vitals, Responsive Design adaptativo

---

## ✨ Características Principales

* **Ergonomía Kindev:**
  * Barra de navegación superior con 5 secciones exactas y botón directo a urgencias.
  * Mobile Bottom Navigation ergonómica con acceso al alcance del pulgar sincronizada vía ScrollSpy.
  * Menú desplegable para móviles integrado.
* **Carruseles Interactivos con Controles Flanqueados:**
  * **Especialidades Clínicas:** Navegación horizontal en 1 columna (móvil), 2 columnas (tablet) y 3 columnas (PC) con botones flotantes y swipe táctil.
  * **Casos Reales (Antes & Después):** Comparador visual interactivo con selector de categorías y controles flanqueados.
* **Diseño Orgánico & Sin Box-in-Box:**
  * Divisores de ondas SVG fluidos entre secciones contrastantes.
  * Esquinas redondeadas amplias (`rounded-[2.5rem]`, `rounded-[3rem]`) y texturas visuales con desenfoque de cristal (`backdrop-blur`).
* **Canales Oficiales:**
  * WhatsApp oficial: `+593 98 231 5408` con mensaje predeterminado.
  * Instagram oficial: [`@odontologia_miranda`](https://www.instagram.com/odontologia_miranda/).
  * Agendamiento modal interactivo con validación de datos.

---

## 📁 Estructura del Proyecto

```text
ODONTOLOGÍA GABRIEL MIRANDA/
├── contratos/                 # Propuestas comerciales y documentación legal Kindev
├── public/                    # Activos estáticos, favicons y OpenGraph images
│   ├── favicon.svg
│   ├── og-image.png           # OpenGraph 16:9 (1200x630)
│   └── og-image-square.png    # OpenGraph 1:1 (800x800)
├── src/
│   ├── components/            # Componentes modulares y reutilizables
│   │   ├── AppointmentModal.tsx
│   │   ├── BeforeAfterSection.tsx
│   │   ├── CurvedSectionDivider.tsx
│   │   ├── DoctorProfileSection.tsx
│   │   ├── EmergencyBannerSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Logo.tsx
│   │   ├── MobileBottomNav.tsx
│   │   ├── Navbar.tsx
│   │   ├── OfficialSocialLogos.tsx
│   │   ├── SocialAndContactSection.tsx
│   │   ├── SpecialtiesSection.tsx
│   │   ├── TopBar.tsx
│   │   └── TrustCounters.tsx
│   ├── data/
│   │   └── clinicData.ts      # Fuente de verdad de la clínica
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## 🛠️ Instalación y Desarrollo Local

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo local
bun run dev

# Validar tipado TypeScript
bun run lint

# Construir para producción
bun run build
```

---

Desarrollado con excelencia por **[Kindev S.A.S.](https://kindevx.web.app/)**
