import type { Config } from "tailwindcss";

const breakpoints = ["sm", "md", "lg", "xl"];
const responsive = (...classNames: string[]) => {
  let result: string[] = [];
  classNames.forEach((className) => result.push(className, ...breakpoints.map((breakpoint) => `${breakpoint}:${className}`)));
  return result;
};

const spacing = (property: string) => {
  return [
    `${property}-0`,
    `${property}-1`,
    `${property}-2`,
    `${property}-3`,
    `${property}-4`,
    `${property}-5`,
    `${property}-6`,
    `${property}-7`,
    `${property}-8`,
  ];
};

export const safelist = [
  ...responsive("hidden", "block", "inline-block", "flex", "inline-flex"),
  ...responsive("items-center"),
  ...responsive("justify-center", "justify-between"),
  ...responsive(
    ...spacing("m"),
    ...spacing("mx"),
    ...spacing("my"),
    ...spacing("mt"),
    ...spacing("mr"),
    ...spacing("mb"),
    ...spacing("ml")
  ),
  ...responsive(
    ...spacing("p"),
    ...spacing("px"),
    ...spacing("py"),
    ...spacing("pt"),
    ...spacing("pr"),
    ...spacing("pb"),
    ...spacing("pl")
  ),
  ...responsive(...spacing("gap")),
  ...responsive("rounded-sm", "rounded", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl"),
] satisfies Config["safelist"];
