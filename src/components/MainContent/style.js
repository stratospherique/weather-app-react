const styles = (theme) => ({
  root: {
    outline: '1px solid red',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '80%'
    }
  }
});

export default styles;
