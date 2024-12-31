"use client";
import { TableauViz } from "@tableau/embedding-api";
import { useEffect, useRef } from "react";

export default function Incidents() {
  const vizref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (vizref.current?.children.length == 0) {
      const viz = new TableauViz();
      viz.src =
        "https://public.tableau.com/views/ProjectInitialViz/CrimesinUSA?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
      vizref.current?.appendChild(viz);
      viz.hideTabs = true;
    }
  }, [TableauViz]);
  return <div style={{ height: "500px", width: "100%" }} ref={vizref}></div>;
}
