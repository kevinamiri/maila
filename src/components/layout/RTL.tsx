import React, { FC, ReactNode, useEffect } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { Direction } from "@mui/material/styles";

interface RTLProps {
  children: ReactNode;
  direction?: Direction;
}

// Create RTL cache for emotion
const createRTLCache = () => {
  try {
    return createCache({
      key: "rtl",
      stylisPlugins: [prefixer, stylisRTLPlugin],
    });
  } catch (error) {
    console.error("Failed to create RTL cache:", error);
    return null;
  }
};

// RTL component for handling text direction
export const RTL: FC<RTLProps> = ({ children, direction = "ltr" }) => {
  useEffect(() => {
    document.dir = direction;
    console.log(`Direction set to: ${direction}`); // 🧭 Log direction change
  }, [direction]);

  const rtlCache = createRTLCache();

  return direction === "rtl" && rtlCache ? (
    <CacheProvider value={rtlCache}>{children}</CacheProvider>
  ) : (
    <>{children}</>
  );
};

/* Usage example:
import { RTL } from './RTL';

const App = () => (
  <RTL direction="rtl">
    <YourComponent />
  </RTL>
);
*/

// Commented-out code for potential future features:
// const useRTL = () => {
//   const [isRTL, setIsRTL] = useState(false);
//   
//   useEffect(() => {
//     const dir = document.dir || 'ltr';
//     setIsRTL(dir === 'rtl');
//   }, []);
//
//   return isRTL;
// };