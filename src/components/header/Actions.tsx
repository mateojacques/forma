import { TActionButtonType } from "../../interfaces/header";
import { EXAMPLE_JSON_DATA } from "../../utils/constants";
import ActionButton from "./ActionButton";

const Actions = () => {
  const {
    header: { cta },
  } = EXAMPLE_JSON_DATA;

  return (
    <div className="flex gap-2 order-2 shrink-0">
      {cta.map(({ href, content, type }) => (
        <ActionButton
          key={`${href}-${content}-${type}`}
          {...{ href, content, type: type as TActionButtonType }}
        />
      ))}
    </div>
  );
};

export default Actions;
