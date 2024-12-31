"use client";
import { TableauViz } from "@tableau/embedding-api";
import { useEffect, useRef } from "react";

export default function WW() {
  const vizref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (vizref.current?.children.length == 0) {
      const viz = new TableauViz();
      viz.src =
        "https://public.tableau.com/views/ProjectVizPart2/W-W?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
      vizref.current?.appendChild(viz);
      viz.hideTabs = true;
    }
  }, [TableauViz]);
  return <div style={{ height: "600px", width: "100%" }} ref={vizref}></div>;
}
