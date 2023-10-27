import React from 'react'
import { Link } from 'react-router-dom';
import Categories from './Category';
import ReactDOM from 'react-dom/client';
import s from './Catalang.module.css'
import { useEffect } from 'react';
let Catalang=(props)=>{
    useEffect(()=>{
      let lang=document.getElementById("lang"),
      langs=document.getElementById("langs"),
    catagoriesm=document.getElementById('catagoriesm'),
    catagoriest=document.getElementById('catagoriest')
  var langa=false
  lang.addEventListener('click',()=>{
    langs.style.animation='dis'.repeat(langa)+'appearing 0.3s linear  0s 1 normal both'
    if(langa)
    setTimeout(()=>document.querySelector('#langs').style.setProperty('display','none'),301)
    else document.querySelector('#langs').style.setProperty('display','block')
    langa=!langa
  }) 
  var catagoriesa=false
  catagoriest.addEventListener('click',()=>{
    catagoriesm.style.animation='dis'.repeat(catagoriesa)+'appearing 0.3s linear  0s 1 normal both'
    if(catagoriesa)setTimeout(()=>document.querySelector('#catagoriesm').style.setProperty('display','none'),301)
    else document.querySelector('#catagoriesm').style.setProperty('display','block')
    catagoriesa=!catagoriesa
  })
  document.addEventListener('click', (e)=> {
   if(catagoriesm!=e.target&&catagoriest!=e.target&&catagoriesa){
    catagoriesm.style.animation='disappearing 0.3s linear  0s 1 normal both'
    catagoriesa=!catagoriesa
   }
   if(langs!=e.target&&lang!=e.target&&langa){
    langs.style.animation='disappearing 0.3s linear  0s 1 normal both'
    langa=!langa
  }}
   );
   const clothesm = ReactDOM.createRoot(document.getElementById('clothesm'));
clothesm.render(
  <React.StrictMode>
<Categories id='1' />
  </React.StrictMode>
);
const shoesm = ReactDOM.createRoot(document.getElementById('shoesm'));
shoesm.render(
  <React.StrictMode>
   <span> <Categories id='4' />
   </span></React.StrictMode>
);
const electronicsm = ReactDOM.createRoot(document.getElementById('electronicsm'));
electronicsm.render(
  <React.StrictMode>
   <Categories id='2' />
  </React.StrictMode>
);
document.querySelector('#catagoriesm').style.setProperty('display','none')
    document.querySelector('#langs').style.setProperty('display','none')
    document.querySelector('#langs').style.setProperty('background-color','#813300')
document.querySelector('#catagoriesm').style.setProperty('background-color','#813300')
  })

    return(
      props.children=='langi'? 
   <i  id="lang" className={`${s.lang} fa-thin fa-globe`}></i>:props.children=='catt'?
   <li className={s.catagoriest} id="catagoriest">Catagories</li>:props.children=='catm'?
   <div className={s.catagoriesm} id="catagoriesm"><Link to="/clothes" className={s.clothesm} id="clothesm"></Link><div className={s.fmhorline} id="fmhor-line"></div><Link to="/shoes" className={s.shoesm} id="shoesm">c</Link><div className={s.smhorline} id="smhor-line"></div><Link to='/electronic' className={s.electronicsm} id="electronicsm"></Link></div>:props.children=='langs'?
   <div className={s.langs} id="langs"  style={props.style}><div className={s.eng} id="eng">English</div><div className={s.lhorline} id="lhor-line"></div><div className={s.ar} id="ar">Arabic</div></div>:null
)
}
export default Catalang