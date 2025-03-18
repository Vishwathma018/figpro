import { useState, useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [isLoggedIn, router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
