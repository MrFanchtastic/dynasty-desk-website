/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly LAUNCH_MODE: 'coming_soon' | 'live';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
