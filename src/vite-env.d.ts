/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
      pointsMaterial: any;
      points: any;
    }
  }
}

export {};
