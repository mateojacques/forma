import {
  ELEVATION_CLASSES,
  EXAMPLE_JSON_DATA,
  SHOWCASE_CLASSES_BY_POSITION_NAME,
} from "../../utils/constants";

const Showcase = () => {
  const {
    hero: {
      showcase: {
        source_url,
        scale,
        offset_x,
        offset_y,
        position,
        margin,
        padding,
        elevation,
        zIndex,
        fade
      },
    },
  } = EXAMPLE_JSON_DATA;

  const imageStyles = {
    transform: `scale(${scale}) translate(${offset_x}px, ${offset_y}px)`,
    marginTop: `${margin.top}px`,
    marginBottom: `${margin.bottom}px`,
    marginLeft: `${margin.left}px`,
    marginRight: `${margin.right}px`,
    paddingTop: `${padding.top}px`,
    paddingBottom: `${padding.bottom}px`,
    paddingLeft: `${padding.left}px`,
    paddingRight: `${padding.right}px`,
    zIndex,
    maskImage: fade ? "linear-gradient(to bottom, black 70%, transparent 100%)" : "none",
  };

  return (
    <div
      className={`mt-8 md:mt-0 ${SHOWCASE_CLASSES_BY_POSITION_NAME[position]}`}
    >
      <img
        src={source_url}
        alt="Hero showcase"
        style={imageStyles}
        className={`w-auto rounded ${ELEVATION_CLASSES[elevation]}`}
      />
    </div>
  );
};

export default Showcase;
