import {
  EXAMPLE_JSON_DATA,
  SHOWCASE_CLASSES_BY_POSITION_NAME,
} from "../../utils/constants";

const Showcase = () => {
  const {
    hero: {
      showcase: { source_url, scale, offset_x, offset_y, position },
    },
  } = EXAMPLE_JSON_DATA;

  return (
    <div
      className={`mt-8 md:mt-0 ${SHOWCASE_CLASSES_BY_POSITION_NAME[position]}`}
    >
      <img
        src={source_url}
        alt="Hero showcase"
        style={{
          transform: `scale(${scale}) translate(${offset_x}px, ${offset_y}px)`,
        }}
        className="rounded shadow"
      />
    </div>
  );
};

export default Showcase;
