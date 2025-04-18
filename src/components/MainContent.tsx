import { EXAMPLE_JSON_DATA } from "../utils/constants";
import Section from "./section/Section";

const MainContent = () => EXAMPLE_JSON_DATA.section.map((section, i) => <Section data={section} />);

export default MainContent;
