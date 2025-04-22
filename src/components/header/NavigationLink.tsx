import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { INavigationLink } from "../../interfaces/header";
import { ANCHOR_CLASSES, EXAMPLE_JSON_DATA } from "../../utils/constants";

const NavigationLink = ({ href, content, type }: INavigationLink) => {
  const {
    palette: { text },
    header: { textColor },
  } = EXAMPLE_JSON_DATA;

  return (
    <>
      <a
        key={`${href}-${content}-${type}`}
        href={href}
        className={`relative flex hover:**:data-icon:rotate-[10deg] hover:**:data-icon:scale-[1.1] ${ANCHOR_CLASSES}`}
        target={type === "external" ? "_blank" : "_self"}
        rel="noreferrer"
      >
        <p style={{ color: textColor || text }}>{content}</p>
        {type === "external" && (
          <ArrowTopRightOnSquareIcon
            data-icon
            className="ml-1 h-3 w-3 ease-in duration-[0.15s]"
          />
        )}
      </a>
    </>
  );
};

export default NavigationLink;
