import React, { useState, useRef, useLayoutEffect } from "react";

export default function Resize() {
  return (
    <div className="App">
      <CenterDiv />
    </div>
  );
}

function CenterDiv() {
  const centerRef = useRef(null);
  //   const { top, left } = useCenter(centerRef);

  return <div>hi</div>;
}

function useCenter(ref) {
  const [dimensions, setDimensions] = useState({});

  useLayoutEffect(() => {
    if (dimensions === null) {
      let divHeight = ref.current.offsetWidth;
      let divWidth = ref.current.offsetHeight;
      let windowOffset = window.pageYOffset;
      let vpWidth = document.documentElement.clientWidth;
      let vpHeight = document.documentElement.clientHeight;
      console.log("got this far");
      console.log(vpHeight);
      let top = (vpHeight - divHeight) / 2 + windowOffset;
      let left = (vpWidth - divWidth) / 2;
      console.log(top, left);
      setDimensions({
        top,
        left,
      });
    }
    function calculations() {
      let divHeight = ref.current.offsetWidth;
      let divWidth = ref.current.offsetHeight;
      let windowOffset = window.pageYOffset;
      let vpWidth = document.documentElement.clientWidth;
      let vpHeight = document.documentElement.clientHeight;
      console.log("got this far");
      console.log(vpHeight);
      let top = (vpHeight - divHeight) / 2 + windowOffset;
      let left = (vpWidth - divWidth) / 2;
      console.log(top, left);
      setDimensions({
        top,
        left,
      });
    }
    console.log("off and going");
    window.addEventListener("resize", calculations);
    return () => window.removeEventListener("resize", calculations);
  }, []);
  console.log("end ", dimensions);
  return dimensions;
}
