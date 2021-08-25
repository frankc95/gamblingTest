/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo2.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo src={LogoDark}/>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map((menuItem, i) => (
              <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
              >
                {menuItem.label}
              </Link>
            ))}
          </Flex>
        <div className='btn__wrap'>
        <Link 
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
              >
            <Button className='donate__btn' variant='secondary' aria-label='Get In Touch'>Get In Touch</Button>
          </Link>
          <MobileDrawer/>
          </div>
        </Container>
      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.btn__wrap': {
      display: 'flex',
      alignItems: 'center'
    },
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      p: [2, null, null, null, 3]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      a: {
        display: 'inline-flex',
        flexWrap: 'nowrap'
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& img': {
      width: '200px'
    },
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      display: 'none',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
      '& img': {
        maxWidth: '100px'
      },
    },
  },
};
