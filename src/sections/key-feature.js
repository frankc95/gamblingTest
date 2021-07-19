/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Button } from 'theme-ui';
import { Link } from 'react-scroll';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/undraw_Resume_re_hkth.png';
import Partnership from 'assets/key-feature/undraw_Business_plan_re_0v81.png';
import Subscription from 'assets/key-feature/undraw_Mention_re_k5xc.png';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Background',
    title: 'Background',
    text:
      'John Hartson, as well as being a renowned world-famous footballer, is a recovering gambling addict. He has teamed up with with Tony Marini, a Psychotherapist and expert in gambling addiction (and also are covering gambling addict himself(, to share their stories, help people recognise the problem (either within themselves or within their families or friends) and provide an avenue for those struggling with gambling to seek help and gain recovery.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Our Plan',
    title: 'Our Plan',
    text:
      'John and Tony are planning a series of in-house workshops, aimed at reaching out to the community, to recognise the traits and pitfalls of problem gambling, the damage it can cause, and the light at the end of the tunnel. It is hoped that companies, large or small, sports associations and clubs, and other groups that could benefit from hearing personal stories and education material will be interested in hosting their Workshops. These can be tailored to suit the audience as appropriate.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Know More',
    title: 'Know More',
    text:
      'Please follow the links to read more information on John and Tony themselves. If you are interested in hosting a workshop, you can contact them via the email address on our contact page for details of costs etc.',
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
          <Button variant="primary">
            <Link
              activeClass="active"
              to={'contact'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            > Make Positive Change
            </Link>
          </Button>
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
      'repeat(1,1fr)',
      null,
      'repeat(1,1fr)',
    ],
    '& button': {
      maxWidth: '300px',
      justifySelf: ['center', 'center', 'center']
    },
  },
};
