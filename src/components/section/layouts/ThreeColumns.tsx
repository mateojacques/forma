import { ISection } from "../../../interfaces/content";
import SectionHeadline from "../SectionHeadline";
import { EXAMPLE_JSON_DATA } from "../../../utils/constants";
import { getLighterColor } from "../../../utils/helpers";

const ThreeColumns = ({
  title,
  description,
  items,
  backgroundColor,
}: ISection) => {
  const {
    palette: { background },
  } = EXAMPLE_JSON_DATA;
  const baseBackgroundColor = backgroundColor || background;
  const cardBackgroundColor = getLighterColor(baseBackgroundColor);

  return (
    <section
      className="px-4 py-12 max-w-7xl mx-auto"
      style={{ backgroundColor: baseBackgroundColor }}
    >
      <SectionHeadline title={title} description={description} />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={`${item.title}-${item.media.type}-${item.description}`}
            className="rounded shadow px-7 py-5 flex flex-col h-full"
            style={{
              backgroundColor: cardBackgroundColor,
            }}
          >
            <div className="flex flex-col flex-grow mb-4">
              <h3 className="text-2xl mb-3 font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
            {item.media?.type === "image" && (
              <div className="h-100 overflow-hidden mb-4 rounded">
                <img
                  src={item.media.source_url}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeColumns;
