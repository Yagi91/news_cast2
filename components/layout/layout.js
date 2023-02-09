import TimeBar from "./timeBar";
import Promo from "./promo";
import MainNav from "./mainNav";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="min-h-screen">
      <TimeBar timezone={Intl.DateTimeFormat().resolvedOptions().timeZone} />
      <Promo />
      <MainNav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
