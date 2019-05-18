import React, { Component } from 'react';
import Header from '../../components/Header/Header1';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Masonry from '../../components/cards/MasonryList';
class Gallery extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        }
        this.myRef = React.createRef();
    }
    componentDidMount=()=>{
        this.props.getGroupPhotos(this.props.location.state.group_id);
    }
    render()
    { 
        return(
            <div>
                <Header />
                <div className="Bigdiv">
                <h1>{this.props.location.state.group_name}</h1>
                <Masonry elements={this.props.photoList} />
                </div>
            </div>)
        }
}

const mapStateToProps = state => {
    return {
        photoList:state.groupPhotos,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getGroupPhotos : (groupId) => dispatch(actions.getPhotos(groupId)), 
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Gallery))
