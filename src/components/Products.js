
import React,{useCallback,useState,useEffect} from 'react'
import useAxios from 'axios-hooks'
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import s from './Products.module.css'
import { setBuy } from '../redux/buy';
import { setCash } from '../redux/cash';
import { setResults } from '../redux/search';
import { addToPurList } from '../redux/purchases';
import { setItemi } from '../redux/item';
function Products() {  
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const account=useSelector(state=>state.accountInfo.account)
  const itemi=useSelector(state=>state.item.itemi)
  const results=useSelector(state=>state.search.results)
  const [{ data, loading, error }, refetch] = useAxios('https://api.escuelajs.co/api/v1/products')
  var i=null
  var j,jjj
  var a=true
  var datas
  var datai
  useEffect(()=>{if(document.getElementById('buyb')){

    if(localStorage.getItem('itemId')&&data){
      document.getElementById('detail').style.display='flex'
      var datat=data.filter(a=>a.category.id==JSON.parse(localStorage.getItem('itemId'))[1])
      var jj=datat.map(a=>a.id).indexOf(JSON.parse(localStorage.getItem('itemId'))[0])
    document.getElementById('fimg').src=datat[jj].images[0]
    document.getElementById('simg').src=datat[jj].images[1]
    document.getElementById('timg').src=datat[jj].images[2]
    document.getElementById("title").innerHTML=JSON.stringify(datat[jj].title).slice(1,datat[jj].title.length+1)
    document.getElementById("description").innerHTML=JSON.stringify(datat[jj].description).slice(1,datat[jj].description.length+1)
    document.getElementById("cost").innerHTML=''+JSON.stringify(datat[jj].price)
  }
  if(data&&itemi){
    document.getElementById('detail').style.display='flex'
    var datai=[...dataf]
      var jjj=datai.map(a=>a.id).indexOf(itemi)
      document.getElementById('fimg').src=datai[jjj].images[0]
      document.getElementById('simg').src=datai[jjj].images[1]
      document.getElementById('timg').src=datai[jjj].images[2]
      document.getElementById("title").innerHTML=JSON.stringify(datai[jjj].title).slice(1,datai[jjj].title.length+1)
      document.getElementById("description").innerHTML=JSON.stringify(datai[jjj].description).slice(1,datai[jjj].description.length+1)
      document.getElementById("cost").innerHTML=''+JSON.stringify(datai[jjj].price)
  }
  i= document.getElementsByClassName('i')
      for(let a of i)a.addEventListener('click',(b)=>{
        for (j=0;;j++)if (dataf[j].id==parseInt(a.id))break;
        document.getElementById('fimg').src=dataf[j].images[0]
        document.getElementById('simg').src=dataf[j].images[1]
        document.getElementById('timg').src=dataf[j].images[2]
        document.getElementById('detail').style.display='flex'
        document.getElementById("title").innerHTML=JSON.stringify(dataf[j].title).slice(1,dataf[j].title.length+1)
        document.getElementById("description").innerHTML=JSON.stringify(dataf[j].description).slice(1,dataf[j].description.length+1)
        document.getElementById("cost").innerHTML=''+JSON.stringify(dataf[j].price)
    })
    if(a){
    document.getElementById('buyb').addEventListener("click",()=>{

      if(account){if(!localStorage.getItem('itemId')&&!itemi){
      if(cash>dataf[j].price){
      if(account){dispatch(setCash(cash-dataf[j].price))
      dispatch(addToPurList(dataf[j]))
  dispatch(setBuy('success'))
}}
else 
dispatch(setBuy('fail'))
      }
      else if(localStorage.getItem('itemId')){    localStorage.removeItem('itemId')

        if(cash>datat[jj].price){
          if(account){dispatch(setCash(cash-datat[jj].price))
          dispatch(addToPurList(datat[jj]))
      dispatch(setBuy('success'))
    }}
    else 
    dispatch(setBuy('fail'))
      
      }
      else{

        if(cash>datai[jjj].price){
          if(account){dispatch(setCash(cash-datai[jjj].price))
          dispatch(addToPurList(datai[jjj]))
      dispatch(setBuy('success'))
    }}
    else 
    dispatch(setBuy('fail'))
      
      }
}     
  })
  a=false  }
  }},[data,itemi])

let aa=setTimeout(() => {
  
}, 10);
useEffect(()=>{
  if(data&&document.getElementById('search')){
let g=document.getElementById('search').getAttribute('mode')
    if(g=='All Products')datas=data.filter(a=>a.category.id==1||a.category.id==4||a.category.id==2)
    else datas=[...dataf]
  let s=document.getElementById('searchbox')


  s.addEventListener('input',(b)=>{
    clearTimeout(aa)
    localStorage.setItem('status','Loading...')
    aa=setTimeout(() => {
      localStorage.setItem('status','No results found')
    }, 1400);
    if(data){
      setTimeout(()=>{
      if(b.target.value.length>2) 
      dispatch(setResults(datas.filter(a=>a.title.toLowerCase().includes(b.target.value.toLowerCase()))))
  },300)
    
}
}
    
)}
if(itemi)
dispatch(setItemi(null))
},[data])

useEffect(()=>{
  if (results.length>0)
  localStorage.setItem('status','')

},[results])

  
if(arguments[0].no=='true') return null
if (loading) return <span>Loading...</span>
if(error) return <span>error</span>

if(arguments[0].id) var dataf=data.filter(a=>a.category.id==parseInt(arguments[0].id))

return ( <div className={s.card}>  {dataf.length==0?<div style={{width:'100%',marginTop:'20px',position:'absolute',fontSize:'x-large'}}>There is no products from this catagory currently (according to the API)</div>:<Fragment>
  {dataf.map(a=><div id={`${a.id}`} key={`${a.id}`} className={`${s.product} i`}><img className={s.img} src={JSON.stringify(a.images[0]).slice(1,(a.images[0].length)+1)}/>{
JSON.stringify(a.title).slice(1,(a.title.length)+1)}
<div></div>
<div className={s.price}>{JSON.stringify(a.price)}<span>$</span></div>
      </div>
  
      )}
    </Fragment>}
    </div>

)
}

export default Products;