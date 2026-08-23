const scriptLoads = new Map<string, Promise<void>>();

/**
 * Loads each script once for the lifetime of the current browser session.
 * This prevents route changes from executing jQuery, Webflow, and GSAP again.
 */
export function loadScript(src: string): Promise<void> {
  // Fonts are declared in the root layout, so avoid downloading the WebFont
  // loader and running a second font request on every page.
  if (src.includes("ajax.googleapis.com/ajax/libs/webfont")) {
    return Promise.resolve();
  }

  const existingLoad = scriptLoads.get(src);
  if (existingLoad) return existingLoad;

  const load = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      script.remove();
      scriptLoads.delete(src);
      reject(new Error(`Failed to load ${src}`));
    };
    document.body.appendChild(script);
  });

  scriptLoads.set(src, load);
  return load;
}
