/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import {
  Label,
  Input,
  Textarea,
  Button
} from 'theme-ui'
import SectionHeader from 'components/section-header';


export default function Contact() {


  return (
    <section id="contact" sx={{ variant: "section.contact" }}>
      <Container>
        <SectionHeader
          slogan="Have any questions?"
          title="Get in touch with us!"
        />
        <Box sx={styles.buttonGroup}>
          <Box as="form" sx={styles.forms} onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="username">Name</Label>
            <Input name="username" id="username" mb={3} />
            <Label htmlFor="password">Email Address</Label>
            <Input type="password" name="password" id="password" mb={3} />
            <Label htmlFor="comment">Your Message</Label>
            <Textarea name="comment" id="comment" rows={6} mb={3} />
            <Button>Submit</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  buttonGroup: {
    width: '100%',
    maxWidth: '80vw',
    margin: '0 auto'
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },
}
