import React,{useState,useEffect} from 'react';
import { userService, authenticationService } from '@/_services';
import { Tile } from '@/Tile';

function Finance(props){
   const [currentUser,setCurrentUser]= useState(authenticationService.currentUserValue);
   const [userFromApi,setUserFromApi]= useState(null);
   useEffect(()=>{
    userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
   })
    return (
    <div className="tile_box">
        <Tile title={'Finance Master'} imageUrl={'http://image.com'}/>
        <Tile title={'Finance Transaction'} imageUrl={'http://image.com'}/>
        <Tile title={'Finance Dashboard'} imageUrl={'http://image.com'}/>
    </div>
    )
}

export { Finance };