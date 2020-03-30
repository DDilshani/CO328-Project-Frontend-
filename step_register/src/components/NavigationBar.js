import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

class ButtonAppBar extends Component {

    logOut(e) {
      e.preventDefault()
      localStorage.removeItem('usertoken')
      this.props.history.push(`/`)
    }

    render() { 

      const loginRegLink = (
        <Grid item>
          <Button color="inherit" className={styles.button}>
              <Link style={styles.link} to="/login">
                Login
              </Link> 
            </Button>
          <Button color="inherit" className={styles.button}>
            <Link to="/register" style={styles.link}>
                Register
            </Link>
          </Button>
        </Grid>
      )
  
      const userLink = (
        <Grid item>
          <Button color="inherit" className={styles.button}>
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </Button>
          <Button onClick={this.logOut.bind(this)} color="inherit" className={styles.button}>
            Logout
          </Button>
        </Grid>
      )
      
        return (
            <div className={styles.root}>
            <AppBar position="static" style={{ background: 'rgb(0,188,212)' }}>
              <Toolbar>
                <Grid container direction='row' justify='space-between'>
                  <Grid item>
                  <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  </Grid>
                  <Grid item>
                  <Typography variant="h6" className={styles.title}>
                  Zero Trash
                  </Typography>
                  </Grid>
                  {localStorage.usertoken ? userLink : loginRegLink}
                  </Grid>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}
 
const styles = {
    link: {
      color: '#FFF',
      textDecoration: 'none'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 10,
    },
    title: {
        flexGrow: 1,
    },
    button: {
        margin: 10,
        marginLeft: 'auto'
    }
}
 

export default withRouter(ButtonAppBar);
