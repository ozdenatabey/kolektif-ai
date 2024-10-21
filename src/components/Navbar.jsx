import {
  Bars3CenterLeftIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import imgUrl from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="navbar bg-base-100 sticky z-10 top-0 shadow-md">
      <div className="navbar-start md:mx-6">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="side-menu"
          >
            <Bars3CenterLeftIcon className="size-6" />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-200 rounded-box font-semibold z-[1] mt-3 p-2 shadow w-80 border-l-4 border-neutral"
          >
            <li>
              <Link scroll={(el) => scrollWithOffset(el)} to="/#events">
                Etkinlikler
              </Link>
            </li>
            <li>
              <Link scroll={(el) => scrollWithOffset(el)} to="/#about">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link scroll={(el) => scrollWithOffset(el)} to="/#news">
                Haberler
              </Link>
            </li>
          </ul>
        </div>
        <Link
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#top"
        >
          <a className="no-animation cursor-pointer md:text-2xl font-bold flex items-center">
            <img src={imgUrl} alt="logo" className="h-8 md:h-10 mr-2" />
            Kolektif AI
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          <li>
            <Link scroll={(el) => scrollWithOffset(el)} to="/#events">
              Etkinlikler
            </Link>
          </li>
          <li>
            <Link scroll={(el) => scrollWithOffset(el)} to="/#about">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link scroll={(el) => scrollWithOffset(el)} to="/#news">
              Haberler
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:mx-6">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-outline text-lg">
            Bize Ulaşın
          </div>
          <div
            tabIndex={0}
            className="dropdown-content dropdown-end card card-compact bg-base-200 text-primary-content z-[1] w-80 md:w-96 p-2 shadow-lg mt-2 border-l-4 border-neutral"
          >
            <div className="card-body">
              <h3 className="card-title mb-2">İletişim Kanallarımız</h3>
              <div className="flex items-start text-lg my-2">
                <div>
                  <MapPinIcon className="size-7 mr-2 text-neutral" />
                </div>
                <a
                  href="https://maps.app.goo.gl/h9CUaZXFiT3uLZGi8"
                  target="_blank"
                >
                  Yakacık Çarşı Mah, Kartal Cd No:90/92, 34876 Kartal/İstanbul
                </a>
              </div>
              <div className="flex items-start text-lg my-2">
                <div>
                  <PhoneIcon className="size-7 mr-2 text-neutral" />
                </div>
                <a href="tel:+902123346976">+902123346976</a>
              </div>
              <div className="flex items-start text-lg my-2">
                <div>
                  <EnvelopeIcon className="size-7 mr-2 text-neutral" />
                </div>
                <a href="mailto:makinahangar@mmo.org.tr">
                  makinahangar@mmo.org.tr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
