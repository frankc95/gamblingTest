/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Question from 'assets/feature/question.png';
// import Performance from 'assets/feature/performance.svg';
// import Partnership from 'assets/feature/partnership.svg';
// import Subscription from 'assets/feature/subscription.svg';
// import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Question,
    altText: 'Think',
    title: 'Think',
    text:
      'Think about gambling a great deal of your time? Does it consume your thoughts; does it affect your daily plans?',
  },
  {
    id: 2,
    imgSrc: Question,
    altText: 'Lie',
    title: 'Lie',
    text:
      'Lie about your gambling to others? Do you find yourself denying you have a problem, or where you have been/how much you have spent?',
  },
  {
    id: 3,
    imgSrc: Question,
    altText: 'Gamble',
    title: 'Gamble',
    text:
      'Gamble while bills go unpaid, ignoring final demands etc. Prioritise gambling over normal daily expenditure.',
  },
  {
    id: 4,
    imgSrc: Question,
    altText: 'Borrow',
    title: 'Borrow',
    text:
      'Borrow money to finance your gambling, perhaps from friends, credit cards, loans or even through illegal means?',
  },
  {
    id: 5,
    imgSrc: Question,
    altText: 'Miss',
    title: 'Miss',
    text:
      'Miss work because of your gambling?',
  },
  {
    id: 6,
    imgSrc: Question,
    altText: 'Affect',
    title: 'Affect',
    text:
      'Is it affecting your health? Do you have trouble sleeping; feel anxious, depressed or even suicidal after you gamble but still continue?',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Gambling Addiction"
          title="Is gambling a problem for me?"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
