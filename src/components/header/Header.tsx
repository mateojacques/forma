import { ELEVATION_CLASSES, EXAMPLE_JSON_DATA } from "../../utils/constants";
import Actions from "./Actions";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Notice from "./Notice";

const Header = () => {
  const { header } = EXAMPLE_JSON_DATA;
  const { notice, logo, elevation, backgroundColor, textColor, position } = header;
  const elevationClass = ELEVATION_CLASSES[elevation] || ELEVATION_CLASSES[0];

  return (
    <header
      className={`${elevationClass} ${position} top-[0px] z-10`}
      style={{ backgroundColor, color: textColor }}
    >
      {notice.message.content && <Notice />}
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {logo.image_url && <Logo />}
        <Navigation />
        <Actions />
      </div>
    </header>
  );
};

export default Header;
