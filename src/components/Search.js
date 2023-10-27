import React, { useState } from 'react'
import s from './Search.module.css'
import { useEffect } from 'react'
import { Fragment } from 'react'
import Products from './Products'
import { UseSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../redux/search'
import { Navigate } from 'react-router-dom'
import { setItemi } from '../redux/item'
const Search=(props)=>{
    var srel=false,searchbox=document.getElementById("searchbox"),searchRel=document.getElementById("search-rel")
    const dispatch= useDispatch()
    const results=useSelector(state=>state.search.results)
    const [status,setStatus]=useState(localStorage.getItem('status'))
    const [placeholder,setPlaceholder]=useState(`Search ${props.mode.toLowerCase()}`)

    const [re,setRe]=useState(null)
const clear=()=>{
    if(document.querySelector('.fa-magnifying-glass')) setPlaceholder('Type here...')
    else {searchbox.value=''
   document.querySelector('.fa-xmark').className='fa-thin fa-magnifying-glass'
   document.querySelector('.fa-magnifying-glass').style.setProperty('translate','0')

   srel=!srel
    searchRel.style.animation='disappearing 0.3s linear  0s 1 normal both'
    setTimeout(()=>{document.querySelector('#search-rel').style.setProperty('display','none')
    dispatch(setResults([]))
},601)  

}
}


const input=(b)=>{
    console.log(b.target.value.length)
            if(b.target.value.length>0){
                if(document.querySelector('.fa-magnifying-glass')){document.querySelector('.fa-magnifying-glass').className='fa-thin fa-xmark'
       document.querySelector('.fa-xmark').style.setProperty('translate','4px')
    
            }
    
            }
            else{
                if(document.querySelector('.fa-xmark')) document.querySelector('.fa-xmark').className='fa-thin fa-magnifying-glass'
       document.querySelector('.fa-magnifying-glass').style.setProperty('translate','0')
        
    }
        if(b.target.value.length<3){
            if(srel){
                srel=!srel
                searchRel.style.animation='disappearing 0.3s linear  0s 1 normal both'
                setTimeout(()=>{document.querySelector('#search-rel').style.setProperty('display','none')
                dispatch(setResults([]))
},601)  
}
}
else{
if(!srel){ srel=!srel
    document.querySelector('#search-rel').style.setProperty('display','flex')
    searchRel.style.animation='appearing 0.3s linear  0s 1 normal'
    searchRel.style.animationFillMode='both'}
}
}
const doBlur=()=>{   
    if(placeholder=='Type here...') setPlaceholder(`Search ${props.mode.toLowerCase()}`)
//     if(srel){
//         srel=!srel
//         searchRel.style.animation='disappearing 0.3s linear  0s 1 normal both'
//         setTimeout(()=>{document.querySelector('#search-rel').style.setProperty('display','none')
// },601)  
// }
}
const doFocus=(b)=>{
    // if(!srel&&b.target.value.length>2){ srel=!srel
    //     document.querySelector('#search-rel').style.setProperty('display','flex')
    //     searchRel.style.animation='appearing 0.3s linear  0s 1 normal'
    //     searchRel.style.animationFillMode='both'}
}

setInterval(() => {
    
    setStatus(localStorage.getItem('status'))
}, 1000);
const click=(p)=>{
    
    localStorage.setItem('itemId',JSON.stringify([p.id,p.cid]))
setRe('/'+p.category.toLowerCase())

}
const clickc=(p)=>{
    dispatch(setItemi(p))

}

return(
      <Fragment>
        
<div className={s.search} id="search" mode={props.mode}>
        <i className="fa-thin fa-magnifying-glass" onClick={()=>{clear()}}></i>
<input className={s.searchbox} type="text" id="searchbox" onInput={(b)=>{input(b)}} onBlur={()=>{doBlur()}} onFocus={(b)=>{doFocus(b)}} placeholder={placeholder}/>
      </div>
      <div className={s.searchrel} id="search-rel" >
{results.length>0? results.map((a)=>{
      return document.getElementById('search')?(document.getElementById('search').getAttribute('mode')=='All Products'? <div className={s.ritem} onClick={()=>click({id:a.id,category:a.category.name,cid:a.category.id})}><img className={s.img} src={a.images[0]} /><div className={s.tp}><div className={s.title}>{a.title}</div><div className={s.price}>{a.price}$ ▪️ <span>{a.category.name}</span></div></div></div>:
                                                                                       <div className={s.ritem} onClick={()=>clickc(a.id)}><img className={s.img} src={a.images[0]} /><div className={s.tp}><div className={s.title}>{a.title}</div><div className={s.price}>{a.price}$</div></div></div>):null

}):status}
{re && <Navigate to={re} />}
        </div>
      </Fragment>
)
      }

export default Search