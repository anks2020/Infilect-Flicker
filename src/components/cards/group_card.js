import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import People from '@material-ui/icons/Group';
import Photo from '@material-ui/icons/Photo';
import Discussion from '@material-ui/icons/ModeComment';
import classnames from 'classnames';
import '../../assets/css/custom.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400,
    padding:5,
    margin:20,
    border: "2px solid lightgray"
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar alt="Remy Sharp"  src={this.props.icon_url} className={classes.avatar} />
          }
          title={<h3 color="Dodgerblue" onClick={()=>this.props.onGroupClicked()}>{this.props.name}</h3>}
          />
      
        <CardContent>       
        <People className="Icons" />{this.props.members} <Photo className="Icons" /> {this.props.photos}  <Discussion  className="Icons"/>{this.props.discussions}
        </CardContent>
       
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
