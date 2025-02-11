/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL: string
  readonly VITE_PHONE: string
  readonly VITE_LINKEDIN: string
  readonly VITE_TELEGRAM: string
  readonly VITE_LOCATION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}