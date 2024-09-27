import {
  Bars3CenterLeftIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import imgUrl from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start mx-6">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars3CenterLeftIcon className="size-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box font-semibold z-[1] mt-3 p-2 shadow w-80"
          >
            <li>
              <a>Etkinlikler</a>
            </li>
            <li>
              <a>Haberler</a>
            </li>
          </ul>
        </div>
        <a className="no-animation cursor-pointer text-2xl font-bold flex items-center">
          <img src={imgUrl} alt="logo" className="h-10 mr-2" />
          Kolektif AI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          <li>
            <a>Etkinlikler</a>
          </li>
          <li>
            <a>Haberler</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mx-6">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-outline text-lg">
            Bize Ulaşın
          </div>
          <div
            tabIndex={0}
            className="dropdown-content dropdown-end card card-compact bg-base-200 text-primary-content z-[1] w-96 p-2 shadow-lg mt-2 border-l-4 border-neutral"
          >
            <div className="card-body">
              <h3 className="card-title mb-2">İletişim Kanallarımız</h3>
              <div className="flex items-start text-lg my-2">
                <div>
                  <MapPinIcon className="size-7 mr-2 text-neutral" />
                </div>
                <a href="https://maps.app.goo.gl/h9CUaZXFiT3uLZGi8">
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
