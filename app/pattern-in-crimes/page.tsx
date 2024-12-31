"use client";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";
import dynamic from "next/dynamic";
export default function Bias() {
  const ABAB = dynamic(() => import("../../components/ab-ab"), {
    ssr: false,
  });
  const WW = dynamic(() => import("../../components/ww"), {
    ssr: false,
  });
  return (
    <>
      <section className=" items-center justify-center gap-4">
        <div className="justify-between items-center">
          <div>
            <span className={title()}>The&nbsp;</span>
            <span className={title({ color: "green" })}>
              Racial Pattern&nbsp;
            </span>
            <span className={title()}>in Hate Crimes.&nbsp;</span>
            <div className={subtitle()}>
              The analysis of hate crime data reveals distinct patterns in the
              perpetrators&apos; and victims&apos; racial backgrounds. Most hate
              crimes committed by White individuals are targeted at African
              Americans, which reflects the persistence of racial tensions and
              systemic bias against the Black community. Conversely, hate crimes
              carried out by African Americans are most often targeted at
              Whites, indicating a complex interplay of racial dynamics in such
              incidents. Similarly, hate crimes involving Asian Americans and
              Native Americans also predominantly target both Whites and African
              Americans, showcasing how racial biases manifest across various
              ethnic groups.
            </div>
          </div>
          <div>
            <ABAB />
          </div>
          <div className="mt-[40px]">{<WW />}</div>
        </div>
      </section>

      <div className="flex gap-4 justify-center mt-[65px]">
        <Button as={Link} href="/bias" size="lg" color="secondary">
          Back: The Bias
        </Button>
        <Button as={Link} href="/pattern-of-attacks" size="lg" color="primary">
          Next: The Pattern of Attacks
        </Button>
      </div>
    </>
  );
}
