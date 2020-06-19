import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 420;

 const useStyles = makeStyles(theme => ({
    listItemText: {
      fontSize: '14px',//Insert your required size
    },
    root: {
      display: 'flex',
      height: '50vh'
    },
    title: {
      flexGrow: 1,
    },
    button: {
      marginTop: 80
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
      paddingLeft: theme.spacing(2)
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    activeSelect: {
      backgroundColor: 'white'
    },
    inactiveSelect: {
      backgroundColor: '#E7EAED'
    },
    headerText: {
      justifyContent: 'center', 
      alignItems: 'center', 
      width: 400, 
      marginLeft: 10 
    },
    textHeader: {
      color: 'white',
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 0,
      paddingBottom: 9,
      paddingTop: 9,
    },
    appBar: {
      position: 'fixed',
      width: '97%',
      paddingLeft: 20,
      backgroundColor: '#025b7e',
      zIndex: theme.zIndex.drawer,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    drawerPaper: {
      position: 'fixed',
      whiteSpace: 'nowrap',
      backgroundColor: "#E7EAED",
      height: '100vh',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(5),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7),
      },
    },

 
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      marginTop: theme.spacing(10)
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    // mainContainer: {
    //        marginLeft: theme.spacing(10),
    //        marginTop:theme.spacing(10)
    //    }
  }));

  export default useStyles;
  
  
  
  
  
  
  