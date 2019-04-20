import{
    GET_GROUPS,
    GET_GROUP_PHOTOS,
    GET_PHOTO_DETAILS
} from './types';
import axios from 'axios';
export const getGroupList =(grouplist)=>{
    return{
        type:GET_GROUPS,
        groups:grouplist
        
    }   
    };

 export const getGroups = (groupname) => {
     return dispatch =>{
        axios.get('https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key='+'7185bb7deee381b88b350badda2c50cd'+'&text='+groupname+'&format=json',
                )
                .then((res) =>{
                    let data=res.data.slice(14,res.data.length-14);
                    let resdata=JSON.parse((data+'}'));
                    const group_data=resdata.groups.group.map((g)=>{
                        g['g_icon'] = 'http://farm'+g.iconfarm+'.staticflickr.com/'+g.iconserver+'/buddyicons/'+g.nsid+'.jpg';
                        return g;
                    });
                    dispatch(getGroupList(group_data));
                }).catch(error =>{
                    console.log(error);
                });
            }
    };
    
    export const getPhotoList =(photolist)=>{
        return{
            type:GET_GROUP_PHOTOS,
            photos:photolist
            
        }   
        };
            
        export const getPhotos = (groupid) => {
         return dispatch =>{
            axios.get('https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key='+'7185bb7deee381b88b350badda2c50cd'+'&group_id='+groupid+'&format=json',        
            )
                    .then((res) =>{
                        let data=res.data.slice(14,res.data.length-14);
                        let resdata=JSON.parse((data+'}'));
                       resdata.photos.photo.map((p)=>{
                       dispatch(getPhoto(p.id));
                        });
                        dispatch(getPhotoList(resdata.photos.photo));
                    }).catch(error =>{
                        console.log(error);
                    });
                }
        };
        export const getPhotoDetails =(photo_details)=>{
            return{
                type:GET_PHOTO_DETAILS,
                photo:photo_details
                
            }   
            };
        export const getPhoto = (photoId) => {
            return dispatch =>{
            axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo'+'&api_key='+'7185bb7deee381b88b350badda2c50cd'+'&photo_id='+photoId+'&format=json',
                )
                    .then((res) =>{
                        let data=res.data.slice(14,(res.data.length-31));
                              let resdata=JSON.parse((data+'} }'));
                        let result = {  'id':resdata.photo.id,
                                        'owner_name':resdata.photo.owner.username,
                                        'owner_id':resdata.photo.owner.nsid,
                                        'title':resdata.photo.title._content,
                                        'posted_at':resdata.photo.dates.posted,
                                        'description':resdata.photo.description._content,
                                        'url':'https://farm'+resdata.photo.farm+'.staticflickr.com/'+resdata.photo.server+'/'+resdata.photo.id+'_'+resdata.photo.secret+'.jpg'
                                    }
                    
                        dispatch(getPhotoDetails(result));
                    
                    }).catch(error =>{
                        console.log(error);
                   
                    });
        }
    };