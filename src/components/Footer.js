import React from 'react'
import s from './Footer.module.css'
import { useEffect } from 'react'

const Footer=()=>{
 
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(m) {
    if(document.documentElement.scrollHeight==window.innerHeight){
        document.querySelector('footer').style.position='absolute'
        document.querySelector('footer').style.bottom='0'   
    }
    else document.querySelector('footer').style.position='relative'

    
    });    

});
var config = { attributes: true, childList: true, characterData: true, subtree: true };
observer.observe(document.documentElement, config);

return(
<footer className={s.footer}><div>
    © 2024 Style Shop. <span id="footertext">All rights reserved</span>.<a href='https://fakeapi.platzi.com/' target='_blank'><img alt='Used api' className={s.img} src='./Platzi-logo.png'/></a>
</div>
        <img alt='Style Shop logo' src='./a.png' />
      </footer>)
      }

export default Footer