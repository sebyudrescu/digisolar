/**
 * Optimized Image Component
 * - Lazy loading
 * - Responsive images with srcset
 * - WebP support with fallback
 * - Blur placeholder
 */

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // Disable lazy loading for above-the-fold images
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
}

export default function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  aspectRatio,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate WebP version URL (assuming images are in /images/)
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const hasWebP = /\.(jpg|jpeg|png)$/i.test(src);

  useEffect(() => {
    if (priority) {
      // Preload priority images
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Blur placeholder while loading */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-muted/80 to-muted" />
      )}

      {/* Main image with WebP support */}
      {!error && (
        <picture>
          {/* WebP version for modern browsers */}
          {hasWebP && <source srcSet={webpSrc} type="image/webp" />}
          
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            {...props}
          />
        </picture>
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center text-muted-foreground text-sm">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Image not available
          </div>
        </div>
      )}
    </div>
  );
}
