import { ICallToAction } from "../../interfaces/common";
import { BUTTON_COLOR_CLASSES } from "../../utils/constants";

const ActionButton = ({ href, type, content }: ICallToAction) => (
  <a href={href} className={`${BUTTON_COLOR_CLASSES[type]}`}>
    {content}
  </a>
);

export default ActionButton;
