import {
  EXAMPLE_JSON_DATA,
  LOGO_ORDER_CLASS_BY_POSITION_NAME,
  LOGO_SIZE_CLASS_BY_SIZE_NAME,
} from "../../utils/constants";

const Logo = () => {
  const {
    header: { logo },
  } = EXAMPLE_JSON_DATA;
  const { image_url, position, size } = logo;

  return (
    <a
      href="/"
      className={`shrink-0 ${LOGO_SIZE_CLASS_BY_SIZE_NAME[size]} ${LOGO_ORDER_CLASS_BY_POSITION_NAME[position]}`}
    >
      <img src={image_url} alt="Logo" className="w-full h-full" />
    </a>
  );
};

export default Logo;
