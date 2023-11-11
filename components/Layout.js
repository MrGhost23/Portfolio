import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Navbar from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div className={`page ${sora.variable} font-sora relative`}>
      <Navbar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
