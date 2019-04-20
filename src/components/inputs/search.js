import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import '../../assets/css/custom.css';
const styles = {
  
  root: {
    padding: '2px 4px',
    display: 'flex',
    // alignItems: 'center',
    
    // marginLeft: 454,
    
  },
  input: {
    marginLeft: 8,
    flex: 1,
    
  },
};
class CustomizedInputBase extends Component{
  constructor(props) {
    super(props);
    this.state={
      inputvalue:null,
    }
    this.inputChanged = this.inputChanged.bind(this);
  }
  inputChanged=(input)=>{
    this.setState({inputvalue:input});
  }
  handleKeyDown =(e)=>{
    if (e.key === 'Enter') {
      this.props.searchClicked(this.state.inputvalue);
        }
  }
  render(){
    const  classes  = this.props;
  return (
    <Paper className='searchbox'  elevation={1}>
      
      <InputBase className={classes.input} 
      placeholder="Search Flickr Groups" 
      onKeyDown={this.handleKeyDown}
      onChange={(e)=>this.inputChanged(e.target.value)}
      />
      <IconButton className={classes.iconButton} aria-label="Search" onClick={()=>this.props.searchClicked(this.state.inputvalue)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);