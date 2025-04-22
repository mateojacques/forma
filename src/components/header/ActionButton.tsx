import { IActionButton } from "../../interfaces/header";
import { BUTTON_COLOR_CLASSES } from "../../utils/constants";

const ActionButton = ({ href, type, content }: IActionButton) => (
  <a href={href} className={`${BUTTON_COLOR_CLASSES[type]}`}>
    {content}
  </a>
);

export default ActionButton;
