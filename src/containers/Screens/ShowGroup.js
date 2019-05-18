import React, { Component } from 'react';
import SearchField from '../../components/inputs/search';
import  '../../assets/css/custom.css';
import Header from '../../components/Header/Header';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Card from '../../components/cards/group_card';
import Spinner from '../../components/Spinners/Spinners';
class Groups extends Component{
    constructor(props)
    {
        super(props);
        this.state={
           value:'',
           searchon:false,
        }
        this.myRef = React.createRef();
        this.onSearch=this.onSearch.bind(this);
        this.getGroupDetails= this.getGroupDetails.bind(this);
    }

    onSearch =(e)=>{
        this.setState({searchon:true})
        this.props.searchGroup(e);
        document.getElementById("Bigdiv").style.margin=0;
    }
    getGroupDetails = (id,name) =>{
        this.props.history.push({pathname: '/gallery/',state:{group_id:id,group_name:name}});
      }
  
    render()
    {
        return(
            <div >
                <Header />
                <div id="Bigdiv" style={{ margin: 50}}>
                <span id="BigFont">Search</span>
                <SearchField  
                searchClicked={this.onSearch} 
                ref={this.myRef} />
                <div className="List" >
                {this.state.searchon?
                this.props.groupList.length==0?<Spinner />:
                this.props.groupList.map((group)=>{
                   
                    let data=(<div  key={group.name} 
                    style={{float: "left"}}
                    >
                    <Card 
                    name={group.name}  
                    icon_url={group.g_icon}
                    photos={group.pool_count} 
                    discussions={group.topic_count} 
                    members={group.members} 
                    id={group.nsid}
                    onGroupClicked={()=>this.getGroupDetails(group.nsid,group.name)}
                     />
                    </div>)
                    return data;
                })                
                :null
                }
                </div>
                </div>
            </div>
           
        )
    }
}
const mapStateToProps = state => {
    return {
        groupList:state.groups,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        searchGroup : (group) => dispatch(actions.getGroups(group)), 
       
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Groups));
