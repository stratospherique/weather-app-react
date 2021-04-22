const styles = (theme) => ({
  root: {
    outline: '1px solid red',
    maxWidth: '100%',
    overflow: 'hidden',
    height: '100%',
    backgroundColor: '#183A5A',
    [theme.breakpoints.up('md')]: {
      height: '80%'
    }
  }
});

export default styles;
