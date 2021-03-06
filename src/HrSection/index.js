import React,{useState,useEffect} from 'react';
import { userService, authenticationService } from '@/_services';
import { Tile } from '@/Tile';

function HrSection(props){
   const [currentUser,setCurrentUser]= useState(authenticationService.currentUserValue);
   const [userFromApi,setUserFromApi]= useState(null);
   useEffect(()=>{
    userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
   })
    return (
    <div className="tile_box">
        <Tile title={'HR Master'} imageUrl={'http://image.com'}/>
        <Tile title={'HR Transaction'} imageUrl={'http://image.com'}/>
        <Tile title={'HR Dashboard'} imageUrl={'http://image.com'}/>
    </div>
    )
}

export { HrSection };