import React,{useCallback,useEffect} from 'react'
import { Fragment } from 'react';
import s from './scroll.module.css'
function Scroll() { 
    useEffect(() => {
        document.getElementById('scrolls').style.display='none'
        document.getElementById('scroll').style.display='none'
let timeout;
var observer = new MutationObserver(function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        if(document.documentElement.scrollHeight!=window.innerHeight){
             document.getElementById('scroll').style.display=''
            document.getElementById('scroll').style.top=(window.innerHeight-50)/(document.documentElement.scrollHeight-window.innerHeight)*window.scrollY +'px'

        window.onscroll=()=>{
          
          if(document.getElementById('scrolls').style.display=='none')
          document.getElementById('scroll').style.top=(window.innerHeight-50)/(document.documentElement.scrollHeight-window.innerHeight)*window.scrollY +'px';
          
          }
          document.getElementById('scroll').addEventListener('dragover',(a)=>{
            document.getElementById('scrolls').style.display='block'
            if(a.y-20<0)document.getElementById('scroll').style.top='0'
          else if(a.y+30>window.innerHeight)document.getElementById('scroll').style.top=window.innerHeight-50
            else  document.getElementById('scroll').style.top=a.y-20+'px'
          window.scrollTo({top:
           (a.y-20)*(document.documentElement.scrollHeight-window.innerHeight)/(window.innerHeight-50)
           ,left:0,behavior:'auto'}
          );
          })
          document.getElementById('scrolls').addEventListener('dragover',(a)=>{
            
            if(a.y-20<0)document.getElementById('scroll').style.top='0'
          else if(a.y+30>window.innerHeight)document.getElementById('scroll').style.top=window.innerHeight-50
            
          else  document.getElementById('scroll').style.top=a.y-20+'px'
          window.scrollTo({top:
            (a.y-20)*(document.documentElement.scrollHeight-window.innerHeight)/(window.innerHeight-50)
            ,left:0,behavior:'auto'}
          );
          
          })
          document.getElementById('scroll').addEventListener('dragend',()=>{
            document.getElementById('scrolls').style.display='none'
          })}
          else document.getElementById('scroll').style.display='none'
        }, 200);
    });
    observer.observe(document.documentElement,{ attributes: true, childList: true, characterData: true, subtree: true });
        })

    return(
        
<Fragment>
<div className={s.scroll} id="scroll">
        <i className="fa-thin fa-angle-up"></i>
        <i className="fa-thin fa-circle"></i>
        <i className="fa-thin fa-angle-down"></i>    
      </div>
      <div className={s.scrolls} id="scrolls"></div>  

</Fragment>
    )
 }
 export default Scroll