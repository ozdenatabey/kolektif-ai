import { events } from "../data/eventData";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function Events() {
  return (
    <div>
      <p className="text-xl font-bold text-center underline underline-offset-8 decoration-error my-6">
        Yaklaşan Etkinlikler
      </p>
      <div className="grid gap-8 m-auto lg:w-[76rem] lg:grid-cols-3 md:w-[50rem] md:grid-cols-2 sm:w-[24rem]">
        {events.map((event) => (
          <div key={event.id} className="">
            <div className="card bg-base-100 w-96 h-full border border-neutral-content hover:shadow-xl hover:scale-[102%] transition ease-in-out">
              <figure className="h-48">
                <img src={event.img} alt="event-img" />
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
                  <button className="btn btn-neutral btn-wide items-center">
                    Kayıt
                    <PencilSquareIcon className="size-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
