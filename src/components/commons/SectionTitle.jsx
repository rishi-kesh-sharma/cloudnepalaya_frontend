import tw from "tailwind-styled-components";
const SectionTitle = tw.h4`
text-gray-600
text-[1rem]
capitalize
font-semibold
text-center
${(className) => className}
`;

export default SectionTitle;
