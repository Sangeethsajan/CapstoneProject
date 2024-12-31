"use client";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";

import dynamic from "next/dynamic";
export default function Bias() {
  const GenderBias = dynamic(() => import("../../components/bias/Gender"), {
    ssr: false,
  });
  const RacialBias = dynamic(() => import("../../components/bias/Race"), {
    ssr: false,
  });
  const ReligiousBias = dynamic(
    () => import("../../components/bias/Religion"),
    {
      ssr: false,
    }
  );
  const CyberBullying = dynamic(() => import("../../components/bias/Cyber"), {
    ssr: false,
  });
  return (
    <>
      <section className=" items-center justify-center gap-4">
        <div className="grid grid-cols-2 justify-between items-center">
          <div>
            <span className={title()}>The&nbsp;</span>
            <span className={title({ color: "pink" })}>Gender&nbsp;</span>
            <span className={title()}>Bias.&nbsp;</span>
            <div className={subtitle()}>
              The pie chart of hate crime data reveals stark disparities in the
              targeting of individuals based on gender and sexual orientation.
              Gay males account for an overwhelming 78% of the total hate
              crimes, surpassing all other categories combined. This striking
              figure underscores this group&apos;s significant challenges and
              discrimination, highlighting the need for heightened awareness and
              protective measures. Lesbian females represent the second most
              targeted group, with 16% of the total hate crimes, reflecting the
              pervasive bias against the LGBTQ+ community as a whole. Bisexual
              individuals rank third, showing that while they face fewer
              incidents compared to the first two groups, they are not exempt
              from prejudice and hostility. The least affected group in the
              dataset is heterosexual males, suggesting that traditional gender
              norms and sexual orientations experience comparatively fewer
              bias-related hate crimes. These findings emphasize the urgent need
              to address hate and bias against LGBTQ+ individuals and foster
              inclusivity and equality in society.
            </div>
          </div>
          <div>
            <GenderBias />
          </div>
        </div>
      </section>
      <section className=" items-center justify-center gap-4 mt-[65px]">
        <div className="grid grid-cols-2 justify-between items-center">
          <div>
            <RacialBias />
          </div>
          <div>
            <span className={title()}>The&nbsp;</span>
            <span className={title({ color: "green" })}>Racial&nbsp;</span>
            <span className={title()}>Bias.&nbsp;</span>
            <div className={subtitle()}>
              The pie chart of hate crime data provides a clear visual of the
              communities most frequently targeted by such offenses. African
              Americans emerge as the most affected racial group, reflecting the
              ongoing challenges of racial discrimination and inequality in
              society. Following them, the Jewish community faces significant
              hate crime incidents, highlighting the persistence of anti-Semitic
              attitudes and actions. The third most targeted group is White
              individuals, suggesting that hate crimes are not exclusively tied
              to minority groups but can affect people across various racial
              backgrounds. On the lower end, the Sikh community reports the
              fewest incidents in this dataset. However, even as the least
              affected group in comparison, these numbers underline the reality
              that no community is immune to hate crimes. This data underscores
              the urgent need for efforts to address bias and foster
              understanding across all racial and ethnic lines.
            </div>
          </div>
        </div>
      </section>
      <section className=" items-center justify-center gap-4 mt-[65px]">
        <div className="grid grid-cols-2 justify-between items-center">
          <div>
            <span className={title()}>The&nbsp;</span>
            <span className={title({ color: "violet" })}>Religious&nbsp;</span>
            <span className={title()}>Bias.&nbsp;</span>
            <div className={subtitle()}>
              The pie chart of hate crime data highlights patterns of bias and
              discrimination against individuals based on their religion. Islam
              emerges as the most targeted religion, accounting for 35% of the
              total hate crimes, reflecting widespread Islamophobia and its
              deep-rooted impact on affected communities. The Christian
              community, including Catholics, Eastern Orthodox, Protestants, and
              Jehovah&apos;s Witnesses, ranks second, showcasing the broad
              spectrum of hate incidents faced even within a widely represented
              faith group. Buddhists come in third, though their numbers are
              significantly lower, indicating that religious bias extends beyond
              the most commonly represented groups. Interestingly, all other
              religions combined make up 30% of the total crimes, demonstrating
              that no faith is entirely free from the threat of bias-motivated
              attacks. This data underscores the universal nature of religious
              intolerance while pointing to a disproportionate impact on certain
              groups. It highlights the need for interfaith dialogue,
              understanding, and proactive measures to combat hate crimes across
              all religious communities.
            </div>
          </div>
          <div>
            <ReligiousBias />
          </div>
        </div>
      </section>
      <section className=" items-center justify-center gap-4 mt-[65px]">
        <div className="grid grid-cols-2 justify-between items-center">
          <div>
            <CyberBullying />
          </div>
          <div>
            <span className={title()}>The&nbsp;</span>
            <span className={title({ color: "yellow" })}>Cyber&nbsp;</span>
            <span className={title()}>Bullying.&nbsp;</span>
            <div className={subtitle()}>
              This bar chart provides an insightful overview of bias-related
              hate incidents in the context of cyberbullying. The data
              highlights that anti-Black or African American bias is the most
              prevalent, accounting for a significant 36.80%, emphasizing the
              disproportionate targeting of this community online. Following
              this, anti-Jewish bias ranks second at 13.76%, reflecting a
              persistent trend of anti-Semitic sentiment in cyberbullying.
              Anti-White bias occupies the third spot with 9.55%, indicating
              that hate-related incidents also affect majority groups, albeit at
              lower rates than minority communities. The LGBTQ+ community also
              features prominently, with anti-Gay (Male) bias at 8.43% and
              anti-transgender bias and anti-Asian bias both tied at 5.90%.
              These figures highlight how multiple layers of identity, including
              race, gender, and sexual orientation, intersect in hate-based
              cyberbullying. Further down the list, anti-Hispanic or Latino bias
              accounts for 4.21%, while anti-Islamic (Muslim) incidents make up
              3.37%, showcasing continued bias against these groups. Bias
              against lesbian females constitutes 2.53%, underscoring
              disparities in how gender and sexual orientation overlap in online
              hate crimes.
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-4 justify-center mt-[65px]">
        <Button as={Link} href="/" size="lg" color="secondary">
          Back: Home
        </Button>
        <Button as={Link} href="/pattern-in-crimes" size="lg" color="primary">
          Next: The Pattern in Crimes
        </Button>
      </div>
    </>
  );
}
