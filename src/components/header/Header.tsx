import {
  EXAMPLE_JSON_DATA,
  LOGO_ORDER_BY_POSITION_NAME,
} from "../../utils/constants";
import Notice from "./Notice";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { notice, logo, navigation, cta } = EXAMPLE_JSON_DATA.header;
  const logoOrder = LOGO_ORDER_BY_POSITION_NAME[logo.position];

  return (
    <header className="bg-white shadow relative">
      {notice?.message?.content && <Notice {...notice} />}
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {logo?.image_url && (
          <img
            src={logo.image_url}
            alt="Logo"
            className={`shrink-0 h-10 order-[${logoOrder}]`}
          />
        )}
        <nav className={`absolute left-1/2 transform -translate-x-1/2 flex gap-4 order-[${logoOrder === 1 ? 0 : 1}]`}>
          {navigation.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-gray-800 hover:underline relative flex hover:**:data-icon:rotate-[10deg] hover:**:data-icon:scale-[1.1]"
            >
              <p>{link.content}</p>
              {link.type === "external" && (
                <ArrowTopRightOnSquareIcon
                  data-icon
                  className="ml-1 h-3 w-3 ease-in duration-[0.15s]"
                />
              )}
            </a>
          ))}
        </nav>
        <div className="flex gap-2 order-2 shrink-0 ">
          {cta.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={
                btn.type === "primary"
                  ? "bg-green-500 text-white px-4 py-2 rounded"
                  : "bg-gray-200 text-gray-800 px-4 py-2 rounded"
              }
            >
              {btn.content}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
