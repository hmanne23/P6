import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './userDetail.css';
import axios from 'axios'; // Import Axios
import TopBar from '../topBar/TopBar';


class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { userId } = match.params;

    if (prevProps.match.params.userId !== userId || !this.state.user) {
      this.fetchUserDetails();
    }
  }

  fetchUserDetails() {
    const { match } = this.props;
    const { userId } = match.params;

    // Use Axios to fetch user details from the server
    axios.get(`/user/${userId}`)
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }

  render() {
    const { user } = this.state;
    const topNameValue = user ? `User details for ${user.first_name} ${user.last_name}` : '';
    return (
      <div>
        <TopBar topName={topNameValue} />
        {user ? (
          <div>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button component={Link} to={`/photos/${user._id}`} variant="contained" color="primary">
                  User Photos
                </Button>
              </Grid>
            </Grid>

            <div className="user-detail-box" style={{ marginTop: '16px' }}>
              <Typography variant="body1" className="user-detail-title">
                First Name
              </Typography>
              <Typography variant="body1" className="user-detail-value">
                {user.first_name}
              </Typography>
            </div>

            {/* Include other user details here */}            

            <div className="user-detail-box">
              <Typography variant="body1" className="user-detail-title">
                Last Name
              </Typography>
              <Typography variant="body1" className="user-detail-value">
                {user.last_name}
              </Typography>
            </div>
            <div className="user-detail-box">
              <Typography variant="body1" className="user-detail-title">
                Location
              </Typography>
              <Typography variant="body1" className="user-detail-value">
                {user.location}
              </Typography>
            </div>
            <div className="user-detail-box">
              <Typography variant="body1" className="user-detail-title">
                Description
              </Typography>
              <Typography variant="body1" className="user-detail-value">
                {user.description}
              </Typography>
            </div>
            <div className="user-detail-box">
              <Typography variant="body1" className="user-detail-title">
                Occupation
              </Typography>
              <Typography variant="body1" className="user-detail-value">
                {user.occupation}
              </Typography>
            </div>
          </div>
        ) : (
          <Typography variant="body1" className="user-detail-box loading-text">
            Loading user details...
          </Typography>
        )}
      </div>
    );
  }
}

export default UserDetail;
