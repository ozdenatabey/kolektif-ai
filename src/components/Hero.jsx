function Hero() {
  return (
    <div className="grid place-items-center mt-4">
      <div className="bg-[url('/src/assets/hero.webp')] h-[500px] w-11/12 md:w-4/5 bg-cover bg-bottom rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-t from-transparent via-blue-500/10 to-blue-800 h-full p-10 font-hero">
          <span className="font-bold text-4xl md:text-6xl lg:text-8xl bg-gradient-to-r from-amber-500 to-lime-500 bg-clip-text text-transparent mr-4">
            Kolektif AI
          </span>
          <span className="text-2xl md:text-4xl lg:text-6xl text-white [text-shadow:_0_2px_6px_rgb(0_0_0)]">
            İle Yapay Zeka Konusunda Uzmanlaşmak Senin Elinde!
          </span>
        </div>
      </div>

      <div className="mt-4 w-11/12 md:w-4/5 text-center">
        <p className="font-hero md:text-2xl lg:text-3xl">
          Şu ana kadar{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent font-bold">
            222 Kişi
          </span>
          &apos;nin katılımı ile{" "}
          <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-bold">
            12 Adet
          </span>{" "}
          eğitimi tamamladık.
        </p>
      </div>
    </div>
  );
}

export default Hero;
