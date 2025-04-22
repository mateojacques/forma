import { EXAMPLE_JSON_DATA } from "../../utils/constants";

const Notice = () => {
  const { palette, header } = EXAMPLE_JSON_DATA;
  const { notice } = header;
  const {
    message: { content },
    backgroundColor,
  } = notice;
  const { text, accent } = palette;

  return (
    <div
      style={{ backgroundColor: backgroundColor || accent }}
      className="text-center py-2"
    >
      <p style={{ color: text }}>{content}</p>
    </div>
  );
};

export default Notice;
