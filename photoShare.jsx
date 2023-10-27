import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  Grid, Typography, Paper
} from '@mui/material';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/userDetail';
import UserList from './components/userList/userList';
import UserPhotos from './components/userPhotos/userPhotos';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <div className="main-topbar-buffer" />
            <Grid item sm={3}>
              <Paper>
                <UserList />
              </Paper>
            </Grid>
            <Grid item sm={9}>
              <Paper>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Typography variant="body1">
                        {/* Welcome to your photosharing app! This{' '}
                        <a href="https://mui.com/components/paper/">Paper</a> component
                        displays the main content of the application. The {'"sm={9}"'} prop in
                        the <a href="https://mui.com/components/grid/">Grid</a> item component makes it responsively
                        display 9/12 of the window. The Switch component enables us to conditionally render different
                        components to this part of the screen. You don't need to display anything here on the homepage,
                        so you should delete this Route component once you get started. */}
                      </Typography>
                    )}
                  />
                  <Route path="/users/:userId" component={UserDetail} />
                  <Route path="/photos/:userId" component={UserPhotos} />
                  <Route path="/users" component={UserList} />
                </Switch>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<PhotoShare />, document.getElementById('photoshareapp'));
