import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import TopAndSideMenu from '../Components/TopAndSideMenu';

class MainPage extends React.Component {


    render() {
        return (
            <div>
                <CssBaseline />
                <TopAndSideMenu />
            </div>
        )
    }
}

export default MainPage;