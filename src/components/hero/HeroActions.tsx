import { TCallToActionType } from "../../interfaces/common";
import { EXAMPLE_JSON_DATA } from "../../utils/constants";
import ActionButton from "../header/ActionButton";

const HeroActions = () => {
  const {
    hero: { cta },
  } = EXAMPLE_JSON_DATA;

  return (
    <div className="flex gap-4">
      {cta.map(({ href, type, content }) => (
        <ActionButton
          key={`${href}-${content}-${type}`}
          {...{ href, type: type as TCallToActionType, content }}
        />
      ))}
    </div>
  );
};

export default HeroActions;
