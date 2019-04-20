import React, { Component } from 'react';
// import  '../../assets/css/custom.css';
import Header from '../../components/Header/Header1';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Grid from '../../components/cards/grid';
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
                <Grid photos={this.props.photoList} />
                {/* {this.props.photoList.map((photo)=>{
                    let data=(<div className="ListI" key={photo.id}> */}
                    {/* <Person style={{float:"right", cursor:"pointer"}} /><span className="userdata" > */}
                    {/* <span style={{fontWeight:"bold", fontSize:"16px"}}>Title: </span><span>{photo.title}</span><br />
                    <span style={{fontWeight:"bold", fontSize:"16px"}}>Owner: </span><span className="userdata" >{photo.owner_name}</span><br />
                    <img src={photo.url} alt={photo.title} width={200} height={200} crossOrigin="anonymous" />
                    <span style={{fontWeight:"bold", fontSize:"16px"}}>Posted_at: </span><span className="userdata" >{photo.posted_at}</span><br />
                    <span style={{fontWeight:"bold", fontSize:"16px"}}>Description: </span><span className="userdata" >{photo.description}</span><br /> */}
                    {/* </div>)
                    return data;
                })
                } */}
            {/* }        */}
               
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