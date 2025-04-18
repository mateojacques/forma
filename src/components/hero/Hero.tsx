import { EXAMPLE_JSON_DATA } from "../../utils/constants";

const Hero = () => {
  const { headline, subheadline, cta, showcase } = EXAMPLE_JSON_DATA.hero;

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-4 py-16 max-w-7xl mx-auto"
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          {headline.content}
        </h1>
        <p className="text-lg text-gray-600">{subheadline.content}</p>
        <div className="flex gap-4">
          {cta.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={
                btn.type === "primary"
                  ? "bg-green-500 text-white px-4 py-2 rounded"
                  : "bg-gray-200 text-gray-800 px-4 py-2 rounded"
              }
            >
              {btn.content}
            </a>
          ))}
        </div>
      </div>
      {showcase && showcase.type === "image" && (
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={showcase.source_url}
            alt="Hero showcase"
            style={{
              transform: `scale(${showcase.scale}) translate(${showcase.offset_x}px, ${showcase.offset_y}px)`,
            }}
            className="rounded shadow"
          />
        </div>
      )}
    </section>
  );
};

export default Hero