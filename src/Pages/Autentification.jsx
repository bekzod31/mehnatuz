import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import Routes from '../Constants/Routes';



class Autentification extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        checked: true
      }
  }



    render() {
        const contentSize = this.props.isOpen;

        return (
            <BrowserRouter>
                <div>
                    <MainPage />
                    
                    <main style={{ flexGrow: 1, height: '100vh', overflow: 'auto' }} >
                        <Box ml={!contentSize ? 8 : 54}  mt={7} mr={1} style={{ transition: "0.25s" }} >
                        
                            <Switch>
                                {Routes.map((route) => (
                                    <Route exact path={route.path} key={route.path}>
                                        <route.component />
                                    </Route>
                                ))}
                            </Switch>
                        </Box>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}



function mapStateToProps(state) {
    return {
        isLoggedIn: state.AuthMe,
        contentSize: state.forTemplate,
        isOpen: state.forTemplate.isOpen,
    }
}


export default connect(mapStateToProps)(Autentification);