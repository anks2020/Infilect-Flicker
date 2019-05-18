import {
  GET_GROUPS,
  GET_PHOTO_DETAILS
} from '../actions/types';

const INIT_STATE = {
   
    groups:[],
    groupPhotos:[],    
    };


    export default (state = INIT_STATE, action) => {
        switch (action.type) {
      //getgroups
            case GET_GROUPS:
            { 
               return { ...state, 
                groups:action.groups
             };
            }
         //getphotodetails
            case GET_PHOTO_DETAILS:
            { 
              let photo_details = [...state.groupPhotos]
              photo_details.push(action.photo);
              return { ...state, 
                groupPhotos:photo_details
             };
            }    
      //Default case
          default: return { ...state };
        }
      }
