import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {withRouter} from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontWeight:"bold"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const ButtonAppBar=withRouter((props) =>{
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit"  className={classes.grow}>
            INFILECT
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={()=>props.history.push('/groups')}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
});

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
