import { useEffect, useState } from 'react';
export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200,
};

type BreakpointName = keyof typeof breakpoints;

export function useScreen(): BreakpointName {
  const [screenSize, setScreenSize] = useState<BreakpointName>('small');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= breakpoints.xlarge) {
        setScreenSize('xlarge');
      } else if (width >= breakpoints.large) {
        setScreenSize('large');
      } else if (width >= breakpoints.medium) {
        setScreenSize('medium');
      } else {
        setScreenSize('small');
      }
    }

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}
