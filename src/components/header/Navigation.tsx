import { TLinkType } from "../../interfaces/header";
import {
  EXAMPLE_JSON_DATA,
  NAVIGATION_ORDER_CLASSES_BY_LOGO_POSITION_NAME,
  NAVIGATION_POSITION_CLASSES_BY_POSITION_NAME,
} from "../../utils/constants";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
  const {
    header: {
      logo,
      navigation: { links, position },
    },
  } = EXAMPLE_JSON_DATA;

  return (
    <nav
      className={`flex gap-4 ${
        NAVIGATION_ORDER_CLASSES_BY_LOGO_POSITION_NAME[logo.position]
      } ${NAVIGATION_POSITION_CLASSES_BY_POSITION_NAME[position]}`}
    >
      {links.map(({ href, content, type }) => (
        <NavigationLink
          key={`${href}-${content}-${type}`}
          href={href}
          content={content}
          type={type as TLinkType}
        />
      ))}
    </nav>
  );
};

export default Navigation;
