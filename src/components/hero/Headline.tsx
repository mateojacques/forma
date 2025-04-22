import {
  EXAMPLE_JSON_DATA,
  HEADLINE_CLASSES_BY_SHOWCASE_POSITION_NAME,
} from "../../utils/constants";
import HeroActions from "./HeroActions";

const Headline = () => {
  const {
    hero: {
      headline,
      subheadline,
      showcase: { position },
    },
  } = EXAMPLE_JSON_DATA;

  return (
    <div
      className={`flex flex-col space-y-6 ${HEADLINE_CLASSES_BY_SHOWCASE_POSITION_NAME[position]}`}
    >
      <h1 className="text-4xl font-bold text-gray-800">{headline.content}</h1>
      <p className="text-lg text-gray-600">{subheadline.content}</p>
      <HeroActions />
    </div>
  );
};

export default Headline;
