import React from 'react'
import s from './Details.module.css'
import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { setInfo } from '../redux/accountInfo'
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { setItemi } from '../redux/item'
const Details=()=>{
  const dispatch = useDispatch();

  const account=useSelector(state=>state.accountInfo.account)
  const itemi=useSelector(state=>state.item.itemi)

  let[a,b]=useState(false)
  let c=true
  
 useEffect(()=>{
  document.getElementById('detail').style.display='none';

   document.getElementById('logmess').style.display = 'none' 
  if(c){
    document.getElementById('detail').addEventListener('click',(a)=>{
      if (a.target==document.getElementById('detail')||a.target==document.getElementById('close')){
        document.getElementById('detail').style.display='none'

}}
)
document.addEventListener('click',(e)=>{
  if(e.target==document.getElementById('detail')||e.target==document.getElementById('close')){
   if(!account){
    document.getElementById('logmess').style.display = 'none'
    document.getElementById('buyb').innerHTML='Buy' 
  document.getElementById('buyb').removeEventListener('click',f)
  }
   if(localStorage.getItem('itemId'))localStorage.removeItem('itemId')
   if(itemi)dispatch(setItemi(null))
  }
   })
c=false}

}
 ,[]
 )
 let f=()=>{b(true)}
  let click=()=>{
    if(!account) {
      document.getElementById('logmess').style.display = ''
 document.getElementById('buyb').innerHTML='Log in'
 document.getElementById('buyb').addEventListener('click',f)
  }
else document.getElementById('detail').style.display='none'
  

} 
return(
<div className={s.detail} id='detail'>
  <i className={`fa-thin fa-xmark ${s.close}`} id='close'></i>
<div className={s.dbox} id='dbox'>
  <div className={s.photos}> 
  <img className={s.fimg} id='fimg'  />
  <img className={s.simg} id='simg'  />
  <img className={s.timg} id='timg'  />
  </div>
  <div className={s.details}>
  <div className={s.tadesc}>
    <div className={s.title} id="title">Title</div>
    <div className={s.desc} id="description">The description would be written here</div>
  </div><div className={s.priceb}>
  <div className={s.price}><span id='cost'></span>$</div>
  
  <div className={s.flex}>
  <div className={s.logmess} id='logmess'>You have to log in to buy</div>
  <button className={s.button} onClick={click} id="buyb">Buy</button>
  {a&& <Navigate to='/login' />}
</div>
  </div>
</div>
</div>
</div>

)}

export default Details