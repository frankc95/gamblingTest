/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaLinkedin, FaGlobe, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/service--thumb.png';
import Member2 from 'assets/team/member--1.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Anthony Marini',
    title: 'Anthony Marini',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/tony-marini-31487867/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'website',
        path: 'https://www.anthonymarini.co.uk/',
        icon: <FaGlobe />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'John Hartson',
    title: 'John Hartson',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'instagram',
        path: 'https://www.instagram.com/johnhartson10/?hl=en',
        icon: <FaInstagram />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/johnhartson10',
        icon: <FaTwitter />,
      },
      {
        id: 2,
        name: 'website',
        path: 'https://www.johnhartsonfoundation.co.uk/',
        icon: <FaGlobe />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section id="our-team" sx={styles.team}>
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  team: {
    pt: '50px',
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '0px 0px'],
    maxWidth: '800px',
    m: '0 auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};
