import { ISectionHeadline } from "../../interfaces/content";

const SectionHeadline = ({ title, description }: ISectionHeadline) => (
  <>
    <h2
      className={`text-2xl font-semibold text-gray-800 mb-4 text-${
        title.position || "left"
      }`}
    >
      {title.content}
    </h2>
    <p className={`text-gray-600 mb-6 text-${title.position || "left"}`}>
      {description.content}
    </p>
  </>
);

export default SectionHeadline;
