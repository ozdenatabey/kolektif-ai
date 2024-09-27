import { events } from "../data/eventData";

function Events() {
  return (
    <div className="flex space-x-10">
      {events.map((event) => (
        <div key={event.id}>
          <div className="card bg-base-100 w-96 border border-neutral-content hover:shadow-xl hover:scale-[102%] transition ease-in-out">
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
              <div className="card-actions justify-center">
                <button className="btn btn-neutral btn-wide">Kayıt Ol</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
