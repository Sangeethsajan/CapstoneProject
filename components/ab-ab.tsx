"use client";
import { TableauViz } from "@tableau/embedding-api";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ABAB() {
  const vizref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vizref.current?.children.length == 0) {
      const viz = new TableauViz();
      viz.src =
        "https://public.tableau.com/views/ProjectVizPart2/AB-AB?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
      console.log(viz);
      vizref.current?.appendChild(viz);
      viz.hideTabs = true;
    }
  }, [TableauViz]);
  return <div style={{ height: "600px", width: "100%" }} ref={vizref}></div>;
}
