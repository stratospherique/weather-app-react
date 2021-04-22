const style = (theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 6,
    [theme.breakpoints.down('md')]: {
      width: 20,
      height: 20
    }
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 16
    }
  }
});

export default style;
