import getInvertedChildren from "./getInvertedChildren";
import invertChildren from "./invertChildren";
export default function getDimensions(ref, first) {
  const last = ref.current.getBoundingClientRect();
  const left = first.left - last.left;
  const top = first.top - last.top;
  const deltaW = first.width / last.width;
  const deltaH = first.height / last.height;

  // extra
  let width = first.width - last.width;
  let height = first.height - last.height;
  console.log(left, top, deltaH, deltaW);
  ref.current.animate(
    [
      {
        transformOrigin: "top left",
        transform: `
      translate(${left}px, ${top}px)
      scale(${deltaW}, ${deltaH})
    `,
      },
      {
        transformOrigin: "top left",
        transform: "none",
      },
    ],
    {
      duration: 300,
      easing: "cubic-bezier(0, 0.5, 0.175, 1)",
      fill: "both",
    }
  );
  let children = getInvertedChildren();
  console.log(children);
  children.forEach((d) =>
    invertChildren(d, { left, top, deltaH, deltaW, width, height })
  );
}
