export default function invertChildren(child, vals) {
  let left = -1 * vals.left;
  let top = -1 * vals.top;
  // let top =  -1 * vals.top;

  // let width =  -1 * vals.width;
  // let height = -1 * vals.height;
  let scaleW = 1 / vals.deltaW;
  let scaleH = 1 / vals.deltaH;

  child.animate(
    [
      {
        transformOrigin: "top left",
        transform: `scale(${scaleW}, ${scaleH})
      `,
      },
      {
        transformOrigin: "top left",
        transform: "none",
      },
    ],
    {
      duration: 40000,
      easing: "cubic-bezier(0, 0.5, 0.175, 1)",
      fill: "both",
    }
  );
}
// export default function invertChildrenAlex(child, vals) {
//   const scaleX = vals.deltaH;
//   const scaleY = vals.deltaY;
//   const translateX = vals.deltaX;
//   const translateY = vals.deltaY;

//   const inverseVals = { translateX: 0, translateY: 0, scaleX: 1, scaleY: 1 };
//   let transformString = "";

//   inverseVals.translateX = -translateX / scaleX;
//   inverseVals.translateY = -translateY / scaleY;
//   transformString += `translate(${inverseVals.translateX}px, ${inverseVals.translateY}px)`;

//   inverseVals.scaleX = 1 / scaleX;
//   inverseVals.scaleY = 1 / scaleY;
//   transformString += ` scale(${inverseVals.scaleX}, ${inverseVals.scaleY})`;

//   child.style.transform = transformString;
// }
