const Section = ({ data }: { data: any }) => {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2
        className={`text-2xl font-semibold text-gray-800 mb-4 text-${
          data.title.position || "left"
        }`}
      >
        {data.title.content}
      </h2>
      <p className="text-gray-600 mb-6">{data.description.content}</p>
      <div
        className={
          data.layout === "3-columns"
            ? "grid md:grid-cols-3 gap-6"
            : "grid grid-cols-1 gap-6"
        }
      >
        {data.items.map((item, itemIdx) => (
          <div key={itemIdx} className="bg-white rounded shadow p-4">
            {item.media?.type === "image" && (
              <img
                src={item.media.source_url}
                alt={item.title}
                className="rounded mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            {item.cta && (
              <a
                href={item.cta.href}
                className={
                  item.cta.type === "primary"
                    ? "bg-green-500 text-white px-3 py-1 rounded"
                    : "bg-gray-200 text-gray-800 px-3 py-1 rounded"
                }
              >
                {item.cta.content}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
