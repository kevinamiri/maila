import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',

    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
      scrollPaddingTop: '70px'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    },
    'a:visited': {
      color: '#303f9f'
    },
    'a[id]::before': {
      content: "",
      display: 'block',
      height: '50px',
      margin: '-30px 0 0',
    }
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;