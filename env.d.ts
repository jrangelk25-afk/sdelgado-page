/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Extend module resolution for dynamic imports
declare module '@/pages/Home.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '@/pages/Portfolio.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '@/pages/About.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '@/pages/Shop.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '@/pages/Aftercare.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '@/pages/Contact.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '@/pages/NotFound.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

// Environment variables
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_GOOGLE_ANALYTICS_ID?: string
  readonly VITE_DEBUG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
