/**
 * Skip to Content Link (A11y)
 * Allows keyboard users to skip navigation and jump to main content
 */

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Vai al contenuto principale
    </a>
  );
}
