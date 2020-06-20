import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import useStyles from '../Constants/Styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink} from 'react-router-dom';
import Routes from '../Constants/Routes';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { OPEN_DRAWER, CLOSE_DRAWER, AUTH_LOG_OUT, CHANGE_CONTENT_SIZE_OPEN, CHANGE_CONTENT_SIZE_CLOSE } from '../Constants/Actions';
import styles from '../style.module.css';







const TopAndSideMenu = (props) => {


  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('')
  const classes = useStyles();




  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSend = (value,index) => {
    setName(value);
  }

  function handleLogOut() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/login';
  }

  function changeLanguageRu() {
    localStorage.setItem("language", "ru");
    window.location.reload(false);
  }

  function changeLanguageUz() {
    localStorage.setItem("language", "uz");
    window.location.reload(false);
  }

  useEffect(() => {
    setLanguage(localStorage.getItem("language"))
  },[])

  const HeaderName = Routes.filter(element => element.path === "/")[0];
  const headerNameLanguage = language === "ru" ? HeaderName.sidebarNameRu : HeaderName.sidebarNameUz;


  return (
    <div>
      <AppBar position="absolute" elevation={0} className={clsx(classes.appBar, props.isOpen && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} variant="dense">
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {name === '' ? headerNameLanguage : name}
          </Typography>

          <Box mx={1}>
            <span onClick={changeLanguageUz} className={styles.language}>Ўз</span>
          </Box>
          <Box mx={1}>
            <span onClick={changeLanguageRu} className={styles.language}>Ру</span>
          </Box>

          <div>
            <IconButton color="inherit" onClick={handleClick}>
              <AccountCircleIcon />
              <ArrowDropDownIcon style={{ fontSize: 20 }} />
            </IconButton>
            <Menu
              style={{ marginTop: 24, marginRight: 40 }}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClick={handleClose}
            >
              <MenuItem className={styles.logoutAndProfile}>
                <AccountCircleIcon style={{ marginRight: 8 }} />
                {language === "ru" ? 'Профиль' : 'Profil'}
              </MenuItem>
              <MenuItem className={styles.logoutAndProfile} onClick={() => handleLogOut()}>
                <ExitToAppIcon style={{ marginRight: 8 }} />
                {language === "ru" ? 'Выйти' : 'Chiqish'}
              </MenuItem>
            </Menu>
          </div>


        </Toolbar>
      </AppBar>
      <Drawer
        pt={2}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !props.isOpen && classes.drawerPaperClose),
        }}
        open={props.isOpen}
      >
        <div className={styles.drawerHeaderButtonAndText}>
          {
            props.isOpen ?
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={props.closeDrawer}
              >
                <HighlightOffIcon style={{ fontSize: 24 }} />
              </IconButton> :
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={props.openDrawer}
              >
                <MenuIcon />
              </IconButton>

          }
          <div className={classes.headerText}>
            <h2 className={classes.textHeader} style={{ transition: '0.5s' }}>ББАХК Мономаркази</h2>
          </div>
        </div>
        <Divider />
        <List>
          {
            Routes.map((element, index) => {
              const active =  element.path === sessionStorage.getItem("pathname") ? classes.activeSelect : classes.inactiveSelect;
              return (
                index < 6 ?
                  <NavLink to={element.path} key={index} onClick={() => onSend(language === "ru" ? element.sidebarNameRu : element.sidebarNameUz,index)} style={{ textDecoration: 'none', color: 'black' }} >
                    <ListItem button className={active} onClick={() => sessionStorage.setItem("pathname", element.path)}>
                      <ListItemIcon style={{ marginRight: 0 }}>
                        {element.icon}
                      </ListItemIcon>
                      <span>{language === "ru" ? element.sidebarNameRu : element.sidebarNameUz}</span>
                    </ListItem>
                  </NavLink> :
                  null
              )
            })
          }

        </List>
      </Drawer>

    </div>
  )

}

function mapStateToProps(state) {
  return {
    isOpen: state.forTemplate.isOpen,
    authMe: state.AuthMe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openDrawer: () => dispatch({ type: OPEN_DRAWER }),
    closeDrawer: () => dispatch({ type: CLOSE_DRAWER }),
    logOut: () => dispatch({ type: AUTH_LOG_OUT }),
    constenIsOpen: () => dispatch({ type: CHANGE_CONTENT_SIZE_OPEN }),
    constenIsClose: () => dispatch({ type: CHANGE_CONTENT_SIZE_CLOSE })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopAndSideMenu);