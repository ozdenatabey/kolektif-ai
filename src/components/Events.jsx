import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { events } from "../data/eventData";
import { gridCalc } from "../data/GridCalc";
import RegisterForm from "./RegisterForm";

function Events() {
  return (
    <div>
      <p className="text-xl font-bold text-center underline underline-offset-4 decoration-error my-6">
        Yaklaşan Etkinlikler
      </p>
      <div
        className={`grid gap-8 m-auto lg:${gridCalc.colWidthLg} lg:${gridCalc.colCountLg} md:${gridCalc.colWidthMd} md:${gridCalc.colCountMd} sm:w-[24rem]`}
      >
        {events.map((event) => (
          <div key={event.id} className="">
            <div className="card bg-base-100 w-96 h-full border border-neutral-content shadow-xl">
              <figure className="h-48">
                <div className="backdrop-grayscale">
                  <img
                    src={event.img}
                    alt="event-img"
                    className=" hover:scale-110 transition ease-in-out"
                  />
                </div>
              </figure>
              <div className="m-4">
                <h2 className="card-title border-b-2 border-neutral">
                  {event.name}
                </h2>

                <div className="flex justify-evenly my-2">
                  <div className="font-semibold">
                    <p>Tarih:</p>
                    <p>Eğitmen:</p>
                    <p>Yer:</p>
                  </div>
                  <div>
                    <p>
                      {event.date}, {event.timeRange}
                    </p>
                    <p>{event.constructor}</p>
                    <p>{event.location}</p>
                  </div>
                </div>
                <div className="flex card-actions justify-center">
                  <button
                    onClick={() =>
                      document.getElementById(event.id).showModal()
                    }
                    className="btn btn-neutral btn-wide items-center"
                  >
                    Kayıt
                    <PencilSquareIcon className="size-6" />
                  </button>
                </div>
              </div>
            </div>
            <dialog id={event.id} className="modal m-auto">
              <RegisterForm event={event} />
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
