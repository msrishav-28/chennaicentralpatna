"use client";

import { useEffect, useState } from "react";

// Simplified version for production deployment
export default function VisualEditsMessenger() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render on client side to prevent SSR issues
  if (!isClient) {
    return null;
  }

  // Check if we're in an iframe (visual editing context)
  const inIframe = typeof window !== 'undefined' && window.parent !== window;
  
  if (!inIframe) {
    return null;
  }

  return (
    <div style={{ display: 'none' }}>
      {/* Placeholder for visual editing functionality */}
    </div>
  );
}