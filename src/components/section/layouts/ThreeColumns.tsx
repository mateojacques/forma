import { ISection } from "../../../interfaces/content";
import SectionHeadline from "../SectionHeadline";
import { EXAMPLE_JSON_DATA } from "../../../utils/constants";
import CardStrategyPicker from "@/components/generics/card/CardStrategyPicker";

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

  return (
    <section
      className="px-4 py-12 max-w-7xl mx-auto"
      style={{ backgroundColor: baseBackgroundColor }}
    >
      <SectionHeadline title={title} description={description} />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <CardStrategyPicker
            key={`${item.title}-${item.media.type}-${item.description}`}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default ThreeColumns;
