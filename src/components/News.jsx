import { news } from "../data/eventData";

function News() {
  return (
    <div id="news">
      <p className="text-xl font-bold text-center underline underline-offset-4 decoration-error my-6">
        Geçmiş Etkinlikler
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 md:w-4/5 m-auto mb-8">
        {news.map((haber) => (
          <div
            key={haber.id}
            className="rounded-lg overflow-hidden bg-base-300 hover:bg-gradient-to-tr from-sky-500 to-emerald-500"
          >
            <div className="p-1">
              <div className="bg-base-100 rounded-md p-2">
                <p className="font-bold text-lg text-center underline">
                  {haber.title}
                </p>
                <div className="flex justify-evenly">
                  <div>
                    <p className="font-semibold">Tarih:</p>
                    <p className="font-semibold">Eğitmen:</p>
                    {/*<p className="font-semibold">Katılımcı Sayısı:</p>*/}
                  </div>
                  <div>
                    <p>{haber.date}</p>
                    <p>{haber.constructor}</p>
                    {/*<p>{haber.number}</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
