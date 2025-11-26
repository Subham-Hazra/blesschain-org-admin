// Allow importing plain CSS/SCSS files in TypeScript/TSX files
declare module '*.css';
declare module '*.scss';
declare module '*.module.css';
declare module '*.module.scss';

// Common static assets imported as modules
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
