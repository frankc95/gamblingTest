/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Cycle of Gambling Addiction',
    title: 'Cycle of Gambling Addiction',
    text:
      'This is the short text area. This is the short text area. This is the short text area.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Statistics',
    title: 'Statistics',
    text:
      'This is the short text area. This is the short text area. This is the short text area.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Recovery',
    title: 'Recovery',
    text:
      'This is the short text area. This is the short text area. This is the short text area.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Benefits',
    title: 'Benefits',
    text:
      'This is the short text area. This is the short text area. This is the short text area.',
  },
];

export default function KeyFeature() {
  return (
    <section id="our-mission" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader
          slogan="Asking why?"
          title="Because, what benefits you, benefits them!"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
