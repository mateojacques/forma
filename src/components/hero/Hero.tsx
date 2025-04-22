import { EXAMPLE_JSON_DATA } from "../../utils/constants";
import Headline from "./Headline";
import Showcase from "./Showcase";

const Hero = () => {
  const { showcase } = EXAMPLE_JSON_DATA.hero;

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 items-center px-4 py-16 max-w-7xl mx-auto"
    >
      <Headline />
      {showcase && <Showcase />}
    </section>
  );
};

export default Hero;
