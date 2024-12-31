import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <p className={subtitle()}>
        Hate crimes represent a significant challenge to societal harmony, often
        exposing deep-rooted prejudices and systemic inequalities. This research
        examines hate crimes reported in the United States from 1991 to 2021,
        drawing from a comprehensive and reliable dataset officially published
        by the Federal Bureau of Investigation (FBI). The extensive time frame
        of this study provides an opportunity to analyze long-term trends and
        patterns in hate crime incidents. Specifically, the research explores
        the correlations between offenders&apos; and victims&apos; racial
        identities, the locations targeted, and the nature of offenses committed
        at those locations. The analysis aims to create an understanding of the
        underlying dynamics of hate crimes, providing insights that can help
        address the factors contributing to these acts. Analyzing such data over
        three decades can lead to practical benefits, such as identifying crime
        trends, enhancing resource allocation, and improving law enforcement
        strategies. Moreover, the findings could support the development of
        informed policies, promote community safety, and aid in criminal
        profiling. Beyond practical applications, this research also contributes
        to academic research and public awareness, creating a deeper
        understanding of the societal impact of hate crimes. This report&apos;s
        primary audience includes law enforcement agencies, government
        policymakers, community and public safety organizations, media
        professionals, and scholars. By delivering valuable insights, this
        research seeks to empower these stakeholders in their efforts to combat
        hate crimes and promote a safer, more inclusive society. Through a
        detailed exploration of data-driven relations and trends, the study
        underscores the importance of leveraging evidence-based approaches to
        address one of the most important challenges of modern times.
      </p>
      <h2 className="text-[30px] font-bold">Inspiration for the project</h2>
      <p className={subtitle()}>
        The surge in hate speech intensified during the COVID-19 pandemic, has
        created an unprecedented challenge for societies worldwide. While hate
        speech is not a new phenomenon, its amplification through digital
        communication has far-reaching consequences. It not only harms the
        individuals targeted but also threatens the very fabric of our
        communities. At its core, hate speech erodes values like tolerance,
        inclusion, and diversity, striking at the heart of human rights
        principles. For those subjected to it, the impact can be
        devastating—ranging from discrimination and abuse to violence and social
        exclusion. On a broader scale, unchecked hate speech creates division
        fuels tensions, and paves the way for conflict and human rights
        violations, including serious atrocities. Addressing hate speech is not
        optional; it’s a necessity. This effort requires everyone’s
        involvement—governments, businesses, media, tech companies, educators,
        faith leaders, youth, and civil society all have a responsibility to
        speak out against it. Tackling this issue starts with understanding it,
        which makes monitoring and analyzing hate speech vital. Identifying
        patterns of hateful rhetoric can serve as an early warning system for
        violence and help reduce its impact. Holding those responsible for hate
        speech accountable is equally important to break cycles of impunity.
        Organizations like UNESCO are deeply committed to this cause, conducting
        research to shed light on the dynamics of hate speech and working to
        create a more inclusive and respectful global community.
      </p>
      <h2 className="text-[30px] font-bold">Research Questions</h2>
      <ol className="list-disc text-left">
        <li>
          What is the correlation between the race of offenders and the race of
          their victims in hate crimes reported from 1991 to 2021?
        </li>
        <li>
          What types of locations are most frequently chosen for hate crime
          attacks, and how does the offender&apos;s and victim’s race influence
          these choices?
        </li>
        <li>
          How does the nature of offenses vary based on the offender’s race, the
          victim’s race, and the chosen location?
        </li>
      </ol>
    </div>
  );
}
