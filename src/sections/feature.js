/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Cycle of Gambling Addiction',
    title: 'Cycle of Gambling Addiction',
    text:
      'This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area This is the extended text area.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Statistics',
    title: 'Statistics',
    text:
      'This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Recovery',
    title: 'Recovery',
    text:
      'This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Benefits',
    title: 'Benefits',
    text:
      'This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area. This is the extended text area',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality Features"
          title="Amazing useful features"
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
