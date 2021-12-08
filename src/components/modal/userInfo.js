import React ,{useEffect} from 'react'
import "./userInfo.scss"
import { TiArrowSortedDown } from "react-icons/ti";
import UserModal from './userModal'

function User () {
  
  useEffect(()=>{
    let userItem = document.getElementsByClassName('userInfo')
    console.log(userItem)
    
    // document.getElementsByClassName('userInfo').addEventListener('mouseover', ()=>{
    //   console.log('ddd')
    // })
  })
 return(
   <>
   <UserModal></UserModal>
<div className="userInfo">
<img src="/user.png" alt=""></img>

<TiArrowSortedDown className="arrowDown" ></TiArrowSortedDown>
</div>

   </>
 )
}
export default User;