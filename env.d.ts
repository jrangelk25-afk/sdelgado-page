/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
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
