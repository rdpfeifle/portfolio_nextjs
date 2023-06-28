import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function Layout({ children }) {
  const showWorkWithMe = false;
  return (
    <>
      <Navbar showWorkWithMe={showWorkWithMe} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
