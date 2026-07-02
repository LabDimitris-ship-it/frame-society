export default function Map() {
  return (
    <section className="bg-[#F8F5EF] py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-12 text-center">
          <p className="uppercase tracking-[6px] text-[#C9A76A]">
            Visit Us
          </p>

          <h2 className="mt-4 text-5xl font-light text-black">
            Find Esthir
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            Υψηλάντου 24 & Περίανδρου Γωνία
            <br />
            Λουτράκι, Κορινθίας 20300
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] shadow-2xl">

          <iframe
            src="https://maps.google.com/maps?q=%CE%A5%CF%88%CE%B7%CE%BB%CE%AC%CE%BD%CF%84%CE%BF%CF%85%2024%20%CE%9B%CE%BF%CF%85%CF%84%CF%81%CE%AC%CE%BA%CE%B9&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

        <div className="mt-10 text-center">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Υψηλάντου+24+Λουτράκι"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#C9A76A] px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            📍 Open in Google Maps
          </a>

        </div>

      </div>

    </section>
  );
}