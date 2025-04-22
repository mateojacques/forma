import { EXAMPLE_JSON_DATA } from "../../utils/constants";

const Footer = () => {
  const { logo, columns } = EXAMPLE_JSON_DATA.footer;
  const { palette } = EXAMPLE_JSON_DATA;

  return (
    <footer
      className="px-4 py-12"
      style={{ backgroundColor: palette.background, color: palette.text }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
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
                    className="underline text-sm"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
        {columns.map((col, colIdx) => (
          <div key={colIdx}>
            <h4 className="font-semibold mb-2">{col.title}</h4>
            <ul className="space-y-1">
              {col.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a href={link.href} className="underline text-sm">
                    {link.content}
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
