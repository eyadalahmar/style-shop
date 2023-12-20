import React,{useCallback,useEffect, useState} from 'react'
import { Fragment } from 'react';
import s from './scroll.module.css'
function Scroll() { 
 var aa=false
  useEffect(() => {
      
        document.getElementById('scroll').style.display='none'

        document.addEventListener('mousedown',(a)=>{
          if(a.target==document.getElementById('scroll')||a.target.offsetParent==document.getElementById('scroll'))
        if(!aa)aa=!aa})
       document.addEventListener('mousemove',(b)=>{
         if(aa)
       {window.getSelection().removeAllRanges();
         if(b.y-20<0)document.getElementById('scroll').style.top='0'
       else if(b.y+30>window.innerHeight)document.getElementById('scroll').style.top=window.innerHeight-50
         else  document.getElementById('scroll').style.top=b.y-20+'px'
       window.scrollTo({top:
        (b.y-20)*(document.documentElement.scrollHeight-window.innerHeight)/(window.innerHeight-50)
        ,left:0,behavior:'auto'}
       );
       }})   
       document.addEventListener('mouseup',()=>{
         if(aa)aa=!aa
       })
       document.addEventListener('touchstart',(a)=>{
        if(a.target==document.getElementById('scroll')||a.target.offsetParent==document.getElementById('scroll')){

          if(!aa)aa=!aa}})
          document.addEventListener('touchmove',(b)=>{
        if(aa)
     {window.getSelection().removeAllRanges();
       if(b.targetTouches[0].clientY-20<0)document.getElementById('scroll').style.top='0'
     else if(b.targetTouches[0].clientY+30>window.innerHeight)document.getElementById('scroll').style.top=window.innerHeight-50
       else  document.getElementById('scroll').style.top=b.targetTouches[0].clientY-20+'px'
     window.scrollTo({top:
      (b.targetTouches[0].clientY-20)*(document.documentElement.scrollHeight-window.innerHeight)/(window.innerHeight-50)
      ,left:0,behavior:'auto'}
     );
     b.preventDefault()
     }}, { passive: false })   
     document.addEventListener('touchend',()=>{
       if(aa){aa=!aa
      
      }
     })
let timeout;
var observer = new MutationObserver(function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        if(document.documentElement.scrollHeight!=window.innerHeight){
             document.getElementById('scroll').style.display=''
            document.getElementById('scroll').style.top=(window.innerHeight-50)/(document.documentElement.scrollHeight-window.innerHeight)*window.scrollY +'px'

          }
            else document.getElementById('scroll').style.display='none'
          }, 200);
      });
        window.onscroll=()=>{
          
          if(!aa)
          document.getElementById('scroll').style.top=(window.innerHeight-50)/(document.documentElement.scrollHeight-window.innerHeight)*window.scrollY +'px';
          
          }
    observer.observe(document.documentElement,{ attributes: true, childList: true, characterData: true, subtree: true });
        },[])

    return(
        
<Fragment>
<div className={s.scroll} id="scroll">
        <i className="fa-thin fa-angle-up"></i>
        <i className="fa-thin fa-circle"></i>
        <i className="fa-thin fa-angle-down"></i>    
      </div>

</Fragment>
    )
 }
 export default Scroll