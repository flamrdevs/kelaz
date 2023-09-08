import coloradix, { slate, indigo } from "@coloradix/tailwindcss";

export default coloradix({
  slate,
  indigo,
})
  .alias({
    neutral: "slate",
    primary: "indigo",
  })
  .build();
