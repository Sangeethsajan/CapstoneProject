import { title, subtitle } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Dataset</h1>
      <p className={subtitle()}>
        The FBI has released detailed data on over 14 million criminal offenses
        reported in 2023 through its Uniform Crime Reporting (UCR) Program. More
        than 16,000 law enforcement agencies, including state, county, city,
        university, college, and tribal departments, contributed to this
        project, covering 94.3% of the U.S. population. The data was submitted
        through the National Incident-Based Reporting System (NIBRS) and the
        Summary Reporting System.
      </p>
      <p className={subtitle()}>
        The 2023 crime statistics reveal a positive trend: violent crime
        decreased by an estimated 3% compared to 2022. Here&apos;s a closer look
        at the numbers: Murder and non-negligent manslaughter saw a significant
        drop, declining by 11.6%. The number of offenses in the revised rape
        category decreased by 9.4%. Aggravated assault incidents were down by
        2.8%. Robbery saw a modest decline of 0.3%.
      </p>
      <p className={subtitle()}>
        Hate crime data also highlights critical findings. In 2023, 16,009
        agencies participated in reporting hate crime incidents, covering 95.2%
        of the population. These agencies reported 11,862 incidents involving
        13,829 offenses motivated by biases related to race, ethnicity,
        ancestry, religion, sexual orientation, disability, gender, and gender
        identity. To assess trends, the FBI compared hate crime reports
        submitted consistently for 2022 and 2023. This dataset revealed a slight
        decline of 0.6% in reported hate crime incidents, dropping from 10,687
        in 2022 to 10,627 in 2023. In this analysis, we are using the dataset
        that contains hate crime data from 1991 to 2023. The Hate Crime
        Statistics dataset provides annual statistics on the number of
        incidents, offenses, victims, and offenders in reported crimes that are
        motivated fully or partially by an offender’s bias against the victim’s
        perceived race, gender, gender identity, religion, disability, sexual
        orientation, or ethnicity. Hate Crime data are captured by indicating
        the element of bias present in offenses already being reported to the
        UCR Program. These statistics provide valuable insight into national
        crime trends and underscore areas of progress.
      </p>
    </div>
  );
}
