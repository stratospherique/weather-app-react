const style = (theme) => ({
  card: {
    // maxWidth: '33.333%',
    maxWidth: '33%',
    padding: 8,
    // marginRight: '1%',
    marginRight: '1%',
    border: 0,
    // flexBasis: '33.333%',
    flexBasis: '33%',
    flexGrow: 0,
    flexShrink: 0,
    cursor: 'pointer',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    userSelect: null
  },
  selectedIndicator: {
    display: 'block',
    width: 0,
    height: 0,
    borderTop: `30px solid ${theme.palette.secondary.dark}`,
    borderLeft: '30px solid transparent',
    position: 'absolute',
    top: 0,
    right: 0
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 0,
    height: '100%',
    width: '100%'
  },
  slider: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'hidden',
    overflowY: 'hidden',
    minHeight: '150px',
    '&:last-child': {
      marginRight: 0
    }
  },
  iconsContainer: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  cardTitle: {
    fontSize: 24,
    marginBottom: 8,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  }
});

export default style;
