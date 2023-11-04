import React,{ Component, useLayoutEffect,useCallback,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Categories from '../components/Category';
import s from './Home.module.css'
import '../index.css'
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { Link ,useLocation} from 'react-router-dom';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Products from '../components/Products';
import { setInfo } from '../redux/accountInfo';
import { connect } from 'react-redux';
import store from '../redux/store';
import { persistStore } from 'redux-persist'
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang';
import { Helmet } from 'react-helmet-async';
const persistor = persistStore(store);
class Home extends Component{
  constructor() {
    super();
    
    this.logout = this.logout.bind(this);
  }
  logout=()=>{
    persistor.purge()
    window.location.reload()
  }
  ss=null;
 scroll=()=>{
  window.scrollTo({top:
   window.innerHeight+40
    ,left:0,behavior:'smooth'}
   );
}
  componentDidMount()
  {

    if(localStorage.getItem('re')){localStorage.removeItem('re');  
    setTimeout(() => {
      
      window.location.reload(true);
    }, 100);
  }
    
    setTimeout(()=>{
    const refresh=()=>{
      document.querySelector('#catagoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#main').style.setProperty('height',""+(window.innerHeight+60)+'px')
    document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
    document.querySelector('#search-rel').style.setProperty('display','none')
    document.querySelector('#langs').style.setProperty('display','none')
    document.querySelector('#catagoriesm').style.setProperty('display','none')
    }
    
        refresh();
    window.onresize=refresh;
    
    var lang=document.getElementById("lang"),langs=document.getElementById("langs"),catagoriesm=document.getElementById('catagoriesm'),catagoriest=document.getElementById('catagoriest')
    catagoriesm.style.backgroundColor='#81330000'
    
    var langa=false
    lang.addEventListener('click',()=>{
    
      langs.style.animation='dis'.repeat(langa)+'appearing 0.3s linear  0s 1 normal both'
      if(langa)
      {setTimeout(()=>document.querySelector('#langs').style.setProperty('display','none'),301)}
      else {
        document.querySelector('#langs').style.setProperty('display','block')
        setTimeout(()=>{
        document.querySelector('#langs').style.setProperty('display','block')
    
        },400)
      }
      if(window.scrollY>window.innerHeight-30)
      langs.style.backgroundColor='#813300ff'
      if(catagoriesa){
        catagoriesm.style.animation='dis'.repeat(catagoriesa)+'appearing 0.3s linear  0s 1 normal both'
      if(catagoriesa)
      {setTimeout(()=>document.querySelector('#catagoriesm').style.setProperty('display','none'),301)}
      else {
        document.querySelector('#catagoriesm').style.setProperty('display','block')
        setTimeout(()=>{
        document.querySelector('#catagoriesm').style.setProperty('display','block')
    
        },400)
      }
      if(window.scrollY>window.innerHeight-30)
      catagoriesm.style.backgroundColor='#813300ff'
      catagoriesa=!catagoriesa
      
      }
      langa=!langa
    }) 
    var catagoriesa=false
    catagoriest.addEventListener('click',()=>{
    
      catagoriesm.style.animation='dis'.repeat(catagoriesa)+'appearing 0.3s linear  0s 1 normal both'
      if(catagoriesa)
      {setTimeout(()=>document.querySelector('#catagoriesm').style.setProperty('display','none'),301)}
      else {
        document.querySelector('#catagoriesm').style.setProperty('display','block')
        setTimeout(()=>{
        document.querySelector('#catagoriesm').style.setProperty('display','block')
    
        },400)
      }
      if(window.scrollY>window.innerHeight-30)
      catagoriesm.style.backgroundColor='#813300ff'
      if(langa){
        langs.style.animation='dis'.repeat(langa)+'appearing 0.3s linear  0s 1 normal both'
        if(langa)
        {setTimeout(()=>document.querySelector('#langs').style.setProperty('display','none'),301)}
        else {
          document.querySelector('#langs').style.setProperty('display','block')
          setTimeout(()=>{
          document.querySelector('#langs').style.setProperty('display','block')
      
          },400)
        }
        if(window.scrollY>window.innerHeight-30)
        langs.style.backgroundColor='#813300ff'
        langa=!langa
      }
      catagoriesa=!catagoriesa
    })
    
    var navc=false
    window.onscroll=()=>{
    let bb=window.scrollY
      if(bb<115){
    document.getElementById('rside').style.marginRight="25px"
    if(this.props.account==null)document.getElementById('langs').style.right="234px"
    else document.getElementById('lang').style.right="235px"
    
    }
    else{
      document.getElementById('rside').style.marginRight="0";
      if(this.props.account==null)document.getElementById('langs').style.right="209px"
      else document.getElementById('lang').style.right="260px"
    }
    
      var stl = document.createElement("style");
      stl.innerHTML ="#main::before {content: '';background-position: 0 -"+window.scrollY/2.45+"px;}#main::after,#scroll::after{content: '';opacity:"+(window.scrollY<window.innerHeight+50?(window.scrollY*0.5)/(window.innerHeight+50):0.5)+";}";
      document.head.appendChild(stl);
    
      if(window.scrollY>window.innerHeight-30&&!navc)
      {navc=!navc;document.querySelector('#nav').style.setProperty('animation','colort 0.01s linear 0s 1 normal both')
      document.querySelector('#langs').style.setProperty('animation','colort 0.1s linear 0s 1 normal both')
      document.querySelector('#catagoriesm').style.setProperty('animation','colort 0.1s linear 0s 1 normal both')
    }
    else if(window.scrollY<window.innerHeight-30&&navc)
    {navc=!navc;document.querySelector('#nav').style.setProperty('animation','colorf 0.01s linear 0s 1 normal both')
    document.querySelector('#langs').style.setProperty('animation','colorf 0.1s linear 0s 1 normal both')
    document.querySelector('#catagoriesm').style.setProperty('animation','colorf 0.1s linear 0s 1 normal both')
    setTimeout(()=>{ langs.style.backgroundColor=''; catagoriesm.style.backgroundColor=''},300)
    
    }
    
    document.getElementById('scroll').style.top=(window.innerHeight-50)/(document.documentElement.scrollHeight-window.innerHeight)*window.scrollY +'px';
    
    }
    // document.getElementById('scrolls').style.display='none'
    
    // document.getElementById('scroll').style.top=(window.innerHeight-50)/(document.documentElement.scrollHeight-window.innerHeight)*window.scrollY +'px'
    
    // document.getElementById('scroll').addEventListener('dragover',(a)=>{
    //   document.getElementById('scrolls').style.display='block'
    //   if(a.y-20<0)document.getElementById('scroll').style.top='0'
    // else if(a.y+30>window.innerHeight)document.getElementById('scroll').style.top=window.innerHeight-50
    //   else  document.getElementById('scroll').style.top=a.y-20+'px'
    // window.scrollTo({top:
    //  (a.y-20)*(document.documentElement.scrollHeight-window.innerHeight)/(window.innerHeight-50)
    //  ,left:0,behavior:'auto'}
    // );
    // })
    // document.getElementById('scrolls').addEventListener('dragover',(a)=>{
      
    //   if(a.y-20<0)document.getElementById('scroll').style.top='0'
    // else if(a.y+30>window.innerHeight)document.getElementById('scroll').style.top=window.innerHeight-50
    
    // else  document.getElementById('scroll').style.top=a.y-20+'px'
    // window.scrollTo({top:
    //   (a.y-20)*(document.documentElement.scrollHeight-window.innerHeight)/(window.innerHeight-50)
    //   ,left:0,behavior:'auto'}
    // );
    
    // })
    // document.getElementById('scroll').addEventListener('dragend',(a)=>{
    //   document.getElementById('scrolls').style.display='none'
    // })
    var question=true
     this.ss=setInterval(()=>{
    
      setTimeout(()=>{
     document.querySelector('#contact').style.setProperty('animation','transparent 1s linear 0s 1 normal both')
        setTimeout(()=>{
          document.querySelector('#contact').style.padding="0"
      document.querySelector('#contact').innerHTML="Have a"+ " question".repeat(question)+'n inquire'.repeat(!question)+'?'
      question=!question
    },560)
    setTimeout(()=>{
      document.getElementById('contact').style.animation=''
      document.getElementById('contact').style.animation='transparentc 1s linear 0s 1 normal both'
      setTimeout(()=>{
        document.querySelector('#contact').style.padding="0"
        document.querySelector('#contact').innerHTML="Contact Us<span id=\"mark\">!</span>"
        document.querySelector('#mark').style.setProperty('animation','transparenth 0.5s linear 2s 1 normal both')
      },560)
    }
    ,3176)
    }
    ,2000)
    },15000)
    
    },100)
if(localStorage.getItem('wel')){
  localStorage.removeItem('wel')
  setTimeout(()=>{
    document.getElementById('note').style.display='block'
    document.getElementById('note').style.animationName='appear'
    document.getElementById('note').style.animationDirection='normal'
    
  },1000)
setTimeout(()=>{
  document.getElementById('note').style.animationName='disappear'
  

  
},5000)
}

}

componentWillUnmount(){
  clearInterval(this.ss)
  
}
render(){
return(
<Fragment>
  <Helmet>
    <title>
      Home | Style Shop
    </title>
    <meta name="google-site-verification" content="c_o8YYYgGv2-yxxHoM0DBYSVNqLCzyU2rJVUw92jkfA" />

    <meta name='description' content='We have a lot of products to view, discover the fashion now!' />
    <link rel='canonical' href={window.location.href} />
  </Helmet>
<nav id='nav'>
      <Scroll />
      <img className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      <Search mode="All Products" />
      <ul className={s.lists} id="lists">
        <li className={s.catagoriest} id="catagoriest">Catagories</li>
        <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>
        <li><Link to="/about" >About</Link></li>
      <li>  <Link to="/contact" className={s.contact} id="contact">Contact Us<span id="mark"></span></Link></li>       
      </ul><div className={s.rside} id="rside">
        
        <i  id="lang" className={`${s.lang} fa-thin fa-globe`}></i>
        
        <div className={s.account} id="account">
        {this.props.account?<div className={s.user}>
          <i className={`${"fa-thin fa-arrow-right-from-bracket"} ${s.logout}`} onClick={this.logout}></i>
         <Link to='/profile' className={s.arect}>
          <img className={s.profileimg} src={this.props.account.avatar} />
          {this.props.account.name}</Link>
         </div>
        :
        <Fragment><Link to="/login" className={s.log} id="log">Log in</Link>
          <div className={s.averline} id="aver-line"></div>
          <Link to="/signup" className={s.sign} id="sign">Sign up</Link></Fragment>}

        </div>
      </div>
      <div className={s.langs} id="langs" ><div className={s.eng} id="eng">English</div><div className={s.lhorline} id="lhor-line"></div><div className={s.ar} id="ar">Arabic</div></div>
      <Catalang>catm</Catalang>

<div className={s.note} id='note'>Welcome! Your current cash is 3000$</div>
</nav>
    <main>

      <div className={s.main} id="main">
          <div>Discover the <span>fashion</span></div>
      <i id="arrow" className="fa-thin fa-chevron-down"></i>
      <h4 onClick={this.scroll} className={s.dscroll}></h4>
        </div>
    
        <div className={s.catagoriestitle} id="catagories-title">
          <div className={s.fchorline} id="fchor-line"></div>
          <span>Our Catagories</span>
  <div className={s.schorline} id="schor-line"></div>
</div>
  
  <div className={s.catagories} id="catagories">
    <div className={`${s.clothes} ${s.part}`}>
      <div className={`${s.clothes} ${s.title}`} id="fcatagory">1. <Categories id='1' /></div>
      <div className={`${s.clothes} ${s.article}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae consequuntur eum soluta doloribus? Dignissimos magni inventore facilis pariatur unde. Repellendus sed excepturi eum provident delectus vel odio, odit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at possimus ipsa minima omnis totam rem similique nihil nam nostrum? Asperiores praesentium repellat excepturi id cumque modi dolores ut architecto</div>
  <Link to="/clothes" className={`${s.clothes} ${s.goto}`}>Goto clothes section <i className="fa-thin fa-arrow-right-long"></i></Link>
</div>
<img className={`${s.cimg} ${s.part}`} src={`${"https://picsum.photos/640/350?r="+Math.floor(Math.random()*1000000)}`} /> 

<img className={`${s.simg} ${s.part}`} src={`${"https://picsum.photos/640/350?r="+Math.floor(Math.random()*1000000)}`} /> 
    <div className={`${s.shoes} ${s.part}`}>
    <div className={`${s.shoes} ${s.title}`} id="scatagory">2. <Categories id='4' /></div>
    <div className={`${s.shoes} ${s.article}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui consequuntur enim, nobis dolores maxime voluptatum natus tempore asperiores fuga. Totam adipisci cum repellat blanditiis fuga! Quidem accusantium aut unde! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam a, cum quo inventore maxime. Fuga error debitis beatae laboriosam sapiente impedit! Esse impedit itaque iste placeat molestiae molestias quibusdam</div>
    <Link to='/shoes' className={`${s.shoes} ${s.goto}`}>Goto Shoes section <i className="fa-thin fa-arrow-right-long"></i></Link>
  </div>
  
  <div className={`${s.electronics} ${s.part}`}>
    <div className={`${s.electronics} ${s.title}`} id="tcatagory">3. <Categories id='2' /></div>
    <div className={`${s.electronics} ${s.article}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio nesciunt molestiae magni animi corrupti, quasi vitae in est fugit autem numquam amet iure, veniam, magnam blanditiis? Culpa, ipsam expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident dolorem quo aliquam harum quasi corporis, sit iste nisi odit consequatur quod reiciendis quisquam quam ipsa minima unde inventore itaue!</div>
    <Link to='/electronics' className={`${s.electronics} ${s.goto}`}>Goto electronics section <i className="fa-thin fa-arrow-right-long"></i></Link>
</div>
<img className={`${s.eimg} ${s.part}`} src={`${"https://picsum.photos/640/350?r="+Math.floor(Math.random()*1000000)}`} /> 
</div>
<Products no='true' id='1' />
</main>
    <Footer />  
  </Fragment>
)
}}
const mapStateToProps=(state)=>{
  return{
  account:state.accountInfo.account
}}
const mapDispatchToProps={
  setInfo,
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)