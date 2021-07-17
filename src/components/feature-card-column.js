/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.img} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      'repeat(1,1fr)',
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
    '&:nth-of-type(even) img': {
      order: [0, 0, 1, 1, 1, 1],
    },
    m: '0 auto',
    alignItems: 'center',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0],
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    order: 0,
    width: ['auto', null, null, 'auto', null, 'auto'],
    m: '0 auto',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    title: {
      fontSize: 10,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
