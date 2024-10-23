import { news } from "../data/eventData";

function News() {
  return (
    <div id="news">
      <p className="text-xl font-bold text-center underline underline-offset-4 decoration-error my-6">
        Haberler
      </p>

      <div className="space-y-6 w-4/6 m-auto mb-8">
        {news.map((haber) => (
          <div
            key={haber.id}
            className="flex rounded-lg overflow-hidden bg-base-100 shadow-xl h-48 hover:bg-base-300 border-2 border-gray-300"
          >
            <div className="w-1/5">
              <img className=" h-full" src={haber.img} />
            </div>
            <div className="w-4/5 p-4">
              <a href="/" className="font-semibold text-lg hover:underline">
                {haber.title}
              </a>
              <p className="">{haber.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
