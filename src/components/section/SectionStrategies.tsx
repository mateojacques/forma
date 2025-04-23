import { TRenderSectionStrategy, ISection } from "../../interfaces/content";
import { EXAMPLE_JSON_DATA } from "../../utils/constants";
import ThreeColumns from "./layouts/ThreeColumns";

const renderThreeColumns: TRenderSectionStrategy<ISection> = {
  render: (props) => <ThreeColumns {...props} />,
};

const sectionStrategies: { [key: string]: TRenderSectionStrategy<ISection> } = {
  "3-columns": renderThreeColumns,
};

const SectionStrategies = () => {
  const { section } = EXAMPLE_JSON_DATA;

  return (
    <>
      {section.map(
        (section) => sectionStrategies[section.layout]?.render(section) ?? null
      )}
    </>
  );
};

export default SectionStrategies;
