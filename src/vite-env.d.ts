/// <reference types="vite/client" />

// vite/client only declares lowercase image extensions
declare module '*.PNG' {
  const src: string
  export default src
}
