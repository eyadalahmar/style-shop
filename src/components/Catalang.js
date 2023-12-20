import React from 'react'
import { Link } from 'react-router-dom';
import Categories from './Category';
import ReactDOM from 'react-dom/client';
import s from './Catalang.module.css'
import { useEffect } from 'react';
let Catalang=(props)=>{
    useEffect(()=>{
      document.querySelector('#categoriesm').style.setProperty('display','none')
      // let lang=document.getElementById("lang"),
      // langs=document.getElementById("langs")
    let categoriesm=document.getElementById('categoriesm'),
    categoriest=document.getElementById('categoriest')
  var langa=false
  // if( document.querySelector('#langs'))lang.addEventListener('click',()=>{
  //   langs.style.animation='dis'.repeat(langa)+'appearing 0.3s linear  0s 1 normal both'
  //   if(langa)
  //   setTimeout(()=>document.querySelector('#langs').style.setProperty('display','none'),301)
  //   else document.querySelector('#langs').style.setProperty('display','block')
  //   langa=!langa
  // })
  var categoriesa=false
  categoriest.addEventListener('click',()=>{
    categoriesm.style.animation='dis'.repeat(categoriesa)+'appearing 0.3s linear  0s 1 normal both'
    if(categoriesa)setTimeout(()=>document.querySelector('#categoriesm').style.setProperty('display','none'),301)
    else document.querySelector('#categoriesm').style.setProperty('display','block')
    categoriesa=!categoriesa
  })
  document.addEventListener('click', (e)=> {
   if(categoriesm!=e.target&&categoriest!=e.target&&categoriesa){
    categoriesm.style.animation='disappearing 0.3s linear  0s 1 normal both'
    categoriesa=!categoriesa
   }
  //  if(langs!=e.target&&lang!=e.target&&langa){
  //   langs.style.animation='disappearing 0.3s linear  0s 1 normal both'
  //   langa=!langa
  // }
}
   );
 
  //  if( document.querySelector('#langs')) document.querySelector('#langs').style.setProperty('display','none')
  //  if( document.querySelector('#langs'))   document.querySelector('#langs').style.setProperty('background-color','#813300')
document.querySelector('#categoriesm').style.setProperty('background-color','#813300')
  })

    return(
      props.children=='langi'? 
   <i  id="lang" className={`${s.lang} fa-thin fa-globe`}></i>:props.children=='catt'?
   <li className={s.categoriest} id="categoriest">Categories</li>:props.children=='catm'?
   <div className={s.categoriesm} id="categoriesm"><Link to="/clothes" className={s.clothesm} id="clothesm"><Categories id='1' /></Link><div className={s.fmhorline} id="fmhor-line"></div><Link to="/shoes" className={s.shoesm} id="shoesm"><Categories id='4' /></Link><div className={s.smhorline} id="smhor-line"></div><Link to='/electronics' className={s.electronicsm} id="electronicsm"><Categories id='2' /></Link></div>:props.children=='langs'?
   <div className={s.langs} id="langs"  style={props.style}><div className={s.eng} id="eng">English</div><div className={s.lhorline} id="lhor-line"></div><div className={s.ar} id="ar">Arabic</div></div>:null
)
}
export default Catalang