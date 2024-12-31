"use client";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import dynamic from "next/dynamic";

export default function Home() {
  const Incidents = dynamic(() => import("../components/plotly"), {
    ssr: false,
  });
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block text-center justify-center">
          <span className={title()}>Decades of Division: Analyzing&nbsp;</span>
          <span className={title({ color: "pink" })}>Hate Crimes&nbsp;</span>
          <br />
          <span className={title()}>in the USA (1991–2022)</span>
          <div className={subtitle({ class: "mt-4" })}>
            Hate crimes represent a significant challenge to societal harmony,
            often exposing deep-rooted prejudices and systemic inequalities.
            This research examines hate crimes reported in the United States
            from 1991 to 2021, drawing from a comprehensive and reliable dataset
            officially published by the Federal Bureau of Investigation (FBI).
            The extensive time frame of this study provides an opportunity to
            analyze long-term trends and patterns in hate crime incidents.
            Specifically, the research explores the correlations between
            offenders&apos; and victims&apos; racial identities, the locations
            targeted, and the nature of offenses committed at those locations.
          </div>
        </div>

        <Incidents />
        <div className="flex gap-4 items-center">
          <Button as={Link} href="/bias" size="lg" color="primary">
            Next: The Bias
          </Button>
        </div>
      </section>
    </>
  );
}
