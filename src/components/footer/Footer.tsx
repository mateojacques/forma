import { ANCHOR_CLASSES, EXAMPLE_JSON_DATA } from "../../utils/constants";

const Footer = () => {
  const { logo, columns } = EXAMPLE_JSON_DATA.footer;
  const { palette } = EXAMPLE_JSON_DATA;

  return (
    <footer
      className="px-4 py-12 flex max-w-7xl mx-auto gap-20"
      style={{ backgroundColor: palette.background, color: palette.text }}
    >
      <div>
        {logo && (
          <>
            <img src={logo.image_url} alt="Logo" className="h-10 mb-2" />
            <p className="text-sm">{logo.email}</p>
            <div className="flex gap-2 mt-2">
              {logo.social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm ${ANCHOR_CLASSES}`}
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="grid md:grid-cols-5 gap-10">
        {columns.map(({ title, links }, index) => (
          <div key={`${title}-${index}`}>
            <h4 className="font-semibold mb-2">{title}</h4>
            <ul className="space-y-1">
              {links.map(({ href, content }) => (
                <li key={`${href}-${content}`}>
                  <a href={href} className={`text-sm ${ANCHOR_CLASSES}`}>
                    {content}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
