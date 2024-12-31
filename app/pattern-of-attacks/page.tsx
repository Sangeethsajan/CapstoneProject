"use client";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";

import dynamic from "next/dynamic";
export default function Bias() {
  const MCA = dynamic(() => import("../../components/most-common-attacks"), {
    ssr: false,
  });
  const WA = dynamic(() => import("../../components/wa"), {
    ssr: false,
  });
  const WL = dynamic(() => import("../../components/wl"), {
    ssr: false,
  });
  return (
    <>
      <section className=" items-center justify-center gap-4">
        <div className="justify-between items-center">
          <div>
            <span className={title()}>The&nbsp;</span>
            <span className={title({ color: "violet" })}>
              Pattern of Attacks&nbsp;
            </span>
            <span className={title()}>in Hate Crimes.&nbsp;</span>
            <div className={subtitle()}>
              Hate crimes are most commonly reported in specific locations such
              as residences, highways, schools, and colleges. These areas serve
              as focal points for hate-related incidents due to their
              accessibility and the concentration of individuals from diverse
              backgrounds. The occurrence of hate crimes in schools and colleges
              is particularly concerning, as these are environments meant to
              foster education and personal growth. The data suggests that more
              targeted policies and preventive measures are needed in such
              institutions to create safer spaces for students.
            </div>
          </div>
          <div>
            <MCA />
          </div>
          <div className="mt-[40px]">
            <div className={subtitle()}>
              Interestingly, hate crimes within the same racial group, such as
              Whites attacking Whites, predominantly involve offenses like
              simple assault, intimidation, aggravated assault, and robbery.
              These types of crimes often point to interpersonal disputes or
              localized tensions rather than broad racial or cultural biases.
              This finding highlights that hate crimes are not solely
              interracial but can also occur within communities, requiring
              nuanced understanding and intervention strategies.
            </div>
          </div>

          <div className="mt-[40px]">
            <WA />
          </div>
          <div className="mt-[40px]">
            <div className={subtitle()}>
              The analysis further reveals that the types of hate crimes
              occurring in schools and colleges are often similar to those found
              in same-racial attacks. Offenses such as simple assault,
              intimidation, and aggravated assault dominate these educational
              settings, reflecting a concerning trend of violence and hostility
              among students. This underscores the need for anti-bullying
              campaigns, conflict resolution programs, and strict enforcement of
              policies against hate crimes in educational institutions to ensure
              safer learning environments.
            </div>
          </div>
          <div className="mt-[40px]">
            <WL />
          </div>
          <div className="mt-[40px]">
            <div className={subtitle()}>
              A surprising finding in the analysis is the similarity in attack
              patterns across racial groups. Regardless of the perpetrators’
              racial background, the types of offenses committed, preferred
              locations, and overall attack dynamics remain largely consistent.
              This indicates that hate crimes are driven by shared behavioral
              tendencies across racial groups rather than unique cultural or
              ethnic factors. Such consistency suggests that preventive measures
              should focus on addressing universal drivers of hate crimes, such
              as intolerance, misinformation, and societal biases.
            </div>
          </div>
        </div>
      </section>

      <div className="flex gap-4 justify-center mt-[65px]">
        <Button as={Link} href="/pattern-in-crimes" size="lg" color="secondary">
          Back: The Pattern in Crimes
        </Button>
      </div>
    </>
  );
}
