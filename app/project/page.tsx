import { title, subtitle } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Project</h1>
      <p className={subtitle()}>
        There are plenty of research articles and publications that showcase the
        hate crime analysis. One significant research that analyses the
        hate-crime to hate-group correlation is Mapping Crime – Hate Crimes and
        Hate Groups in the USA: A Spatial Analysis with gridded data by M
        Jendryke and S.C McClure which was published in 2019. I would like to
        use their statistical approach to answer my questions. Apart from that,
        several news articles concentrate on hate crimes, particularly focusing
        on hate groups. But most of all the researches are solely based on a
        statistical approach, which shows cases tabular contents. So in this
        project, I would like to enhance this statistical study by visualizing
        the final output, which is in a publicly accessible medium.
      </p>
      <h2 className="text-[30px] font-bold">What is Hate Crime?</h2>
      <p className={subtitle()}>
        The term &quot;hate&quot; in the context of hate crime laws can be
        misleading. It does not refer to emotions like rage, anger, or general
        dislike. Instead, it signifies bias against individuals or groups based
        on specific legally defined characteristics. The &quot;crime&quot; in
        hate crimes typically involves acts of violence, such as assault,
        murder, arson, vandalism, or threats to carry out these offenses. It can
        also include inspiring or encouraging someone else to commit these acts,
        even if the crime is not ultimately carried out. Under the First
        Amendment of the U.S. Constitution, people cannot be prosecuted simply
        for their beliefs. People may be offended or upset about beliefs that
        are untrue or based upon false stereotypes, but it is not a crime to
        express offensive beliefs or to join with others who share such views.
        However, the First Amendment does not protect against committing a
        crime, just because the conduct is rooted in philosophical beliefs. Hate
        crimes leave a deeper impact than most other crimes. They don’t just
        harm the immediate victims—they send ripples through families,
        communities, and sometimes even the entire nation. The effects of these
        crimes extend far beyond the individuals targeted, creating fear and
        insecurity for others who share their identity. One major challenge in
        addressing hate crimes is the Hate Crimes Reporting Gap, the significant
        difference between the number of hate crimes that occur and those that
        are reported to law enforcement. Reporting these crimes is important,
        not just to support victims and give them justice but also to show that
        such acts will not be tolerated. When hate crimes are reported,
        communities and law enforcement gain a clearer understanding of the
        problem’s scale, enabling them to allocate resources effectively and
        take steps to prevent future attacks driven by bias and hate.
      </p>
    </div>
  );
}
