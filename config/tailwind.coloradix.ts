import coloradix, { mauve, indigo } from "@coloradix/tailwindcss";

export default coloradix({
  mauve,
  indigo,
})
  .alias({
    neutral: "mauve",
    primary: "indigo",
  })
  .overlay(true)
  .enable(true);
