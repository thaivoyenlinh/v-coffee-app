/**
 * Tell TS that yout want to include type definitions from speacial module. Commonly used in .d.ts file.
 * <reference types="..." />
 * ---
 * vite-plugin-svgr/client
 * Refer to vite-plugin-svgr plugin that allow  you to import SVG files as React components.
 */ 
/// <reference types="vite-plugin-svgr/client" />

import RootLayout from "./shared/layout/root/RootLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  );
}

export default App;
