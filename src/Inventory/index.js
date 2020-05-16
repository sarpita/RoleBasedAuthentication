import React,{useState,useEffect} from 'react';
import { userService, authenticationService } from '@/_services';
import { Tile } from '@/Tile';

function Inventory(props){
   const [currentUser,setCurrentUser]= useState(authenticationService.currentUserValue);
   const [userFromApi,setUserFromApi]= useState(null);
   useEffect(()=>{
    userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
   })
    return (
    <div className="tile_box">
        <Tile title={'Inventory Master'} imageUrl={'http://image.com'}/>
        <Tile title={'Inventory Transaction'} imageUrl={'http://image.com'}/>
        <Tile title={'Inventory Dashboard'} imageUrl={'http://image.com'}/>
    </div>
    )
}

export { Inventory };