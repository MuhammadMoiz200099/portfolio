import { useEffect, useRef, useState } from "react";
import M1 from "./svgs/M1";
import DOT from "./svgs/Dot";
import M from "./svgs/M";
import O from "./svgs/O";
import I from "./svgs/I";
import Z from "./svgs/Z";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ms-moiz-parallax ${className}`}
  >
    <SVG />
  </div>
)


export default function MoizSiddique({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight/2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`ms-moiz ${mount ? 'ms-moiz-visible' : ''}`}>
      <SvgWrapper
        className="mk_svg_M1"
        SVG={M1}
      />
      <SvgWrapper
        className="mk_svg_DOT"
        SVG={DOT}
      />
      <SvgWrapper
        className="mk_svg_M"
        SVG={M}
      />
      <SvgWrapper
        className="mk_svg_O"
        SVG={O}
      />
      <SvgWrapper
        className="mk_svg_I"
        SVG={I}
      />
      <SvgWrapper
        className="mk_svg_Z"
        SVG={Z}
      />
    </div>
  )
}
