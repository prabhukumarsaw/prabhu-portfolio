'use client';

import { ReactNode, useEffect } from 'react';

export default function ScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);

  return <>{children}</>;
}