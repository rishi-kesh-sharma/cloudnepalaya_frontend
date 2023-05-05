import tw from "tailwind-styled-components";
const Container = tw.div`
    ${(className) => className}
    mx-auto
    w-[90%]
    xl:w-[80%]
    2xl:w-[70%]
`;
export default Container;
