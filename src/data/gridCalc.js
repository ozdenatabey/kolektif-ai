import { events } from "./eventData";

const countLg = events.length > 2 ? 3 : events.length;
const countMd = events.length > 1 ? 2 : events.length;
export const gridCalc = {
  colCountLg: `grid-cols-${countLg}`,
  colCountMd: `grid-cols-${countMd}`,
  colWidthLg: `w-[${countLg * 24 + (countLg - 1) * 2}rem]`,
  colWidthMd: `w-[${countMd * 24 + (countMd - 1) * 2}rem]`,
};
