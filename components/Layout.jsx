import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import classnames from "classnames"

function Layout({ children, footer = true, darkmode = false, center = true }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={classnames({"darkmode": darkmode})}>
      <Navbar />
      <main className="container my-4">{children}</main>
      {footer ? <Footer /> : <div></div>}
    </div>
  );
}

export default Layout;
