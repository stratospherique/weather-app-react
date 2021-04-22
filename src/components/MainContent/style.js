const styles = (theme) => ({
  root: {
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
