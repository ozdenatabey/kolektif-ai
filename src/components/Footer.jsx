import imgUrl from "../assets/mmo-logo.svg";

function Footer() {
  return (
    <footer className="footer footer-center bg-gray-800 text-base-100 p-4">
      <aside className="flex items-center justify-center gap-8">
        <img src={imgUrl} alt="logo" className="h-16" />
        <div>
          <p>Makina Mühendisleri Odası İstanbul Şube</p>
          <p> </p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
