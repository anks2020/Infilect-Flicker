import '../../assets/css/custom.css';
import React from 'react';
import Masonry from 'react-masonry-component';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const masonryOptions = {
    transitionDuration: 0,
    column:3,
    padding:4
};
class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showdesc:true       }
        this.changeDateFormat= this.changeDateFormat.bind(this);
        this.infoClicked= this.infoClicked.bind(this);
    }
    infoClicked = ()=>{
        this.setState({showdesc:!this.state.showdesc})
    }
    changeDateFormat =(d)=>{
        var date = new Date(d);
        var dt = date.toDateString();
        var month;
        var arr=dt.split(" ");
        var day=arr[2];
        var year = arr[3];
        switch(arr[1])
        {
            case "Jan":
                month="January"
                break;
            case "Feb":
                month="February"
                break;
            case "Mar":
                month="March"
                break;
            case "Apr":
                month="April"
                break;
            case "May":
                month="May"
                break;
            case "Jun":
                month="June"
                break;
            case "Jul":
                month="July"
                break;
            case "Aug":
                month="August"
                break;
            case "Sep":
                month="September"
                break;
            case "Oct":
                month="October"
                break;
            case "Nov":
                month="November"
                break;
            case "Dec":
                month="December"
                break;
            default:
                month="April"
                break;
        }
        return (month+" "+day+" "+year)
    }
    render() {
        return (
            <Masonry
                className={'my-masonry-grid'}
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {this.props.elements.map(function(element){
           return (
                <li style={{listStyleType: "none"}} key ={element.id} 
                className="image-element-class"
                >
                    <img src={element.url} alt={element.title} width={300}/>
                    <GridListTileBar 
                    style={{width: 300,
                        left: 5,
                        bottom: 5
                    }}
                        title={element.title}
                        subtitle={<span>by: {element.owner_name}</span>}
                    />
                </li>
            )})}
            </Masonry>
        );
    }
}
 
export default Gallery;
