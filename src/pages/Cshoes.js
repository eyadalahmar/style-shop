import React,{ Component,useLayoutEffect,useCallback,useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { Link ,useLocation} from 'react-router-dom';
import s from './Category.module.css'
import Categories from '../components/Category';
import Products from '../components/Products';
import Details from '../components/Details';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang'
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import {setBuy} from '../redux/buy'
import { setCash } from '../redux/cash';
import { setInfo } from '../redux/accountInfo';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import Search from '../components/Search';
import { Helmet } from 'react-helmet-async';
const persistor = persistStore(store);
class Cshoes extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  logout=()=>{
    persistor.purge()
    window.location.reload()
  }
componentDidMount(){
  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
  document.querySelector('#catagoriesm').style.setProperty('display','none')
  
  setTimeout(()=>{
    if(document.querySelector("iframe"))document.querySelector("iframe").style.display="none"
      },4000)
    const refresh=()=>{
      document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
      document.querySelector('#catagoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#search-rel').style.setProperty('display','none')
      }
    refresh()
window.onresize=refresh;



var observer = new MutationObserver((mutations) =>{
  this.s1=null
  this.s2=null
  this.s3=null
  mutations.forEach((m)=> {
    if(this.props.buyStatus){
      let aa=this.props.buyStatus
      this.props.setBuy(null)
      clearTimeout(this.s1)
      clearTimeout(this.s2)
      clearTimeout(this.s3)

      this.s1=setTimeout(()=>{
    
        document.getElementById('note').style.display='block'
        document.getElementById('note').style.animationName='appear'
        document.getElementById('note').style.animationDirection='normal'
        document.getElementById('note').innerHTML=('Thanks! Your remaining cash is '+this.props.cash+'$').repeat(aa=='success')+('Sorry! You haven\'t enough money to buy this. \n (Your cash: '+this.props.cash+'$)').repeat(aa=='fail')
    
      },100)
     this.s2=setTimeout(()=>{
    document.getElementById('note').style.animationName='disappear'
     this.s3=setTimeout(()=>{
      document.getElementById('note').style.display='none'
    
    },600)
    
    },5000)
    }
    });    

});
var config = { attributes: true, childList: false, characterData: true, subtree: true };
observer.observe(document.documentElement, config);


const category= ReactDOM.createRoot(document.getElementById('category'))
category.render(  <React.StrictMode><Provider store={store}><Products id='4'/></Provider></React.StrictMode>)
}
render(){
 
        return(<Fragment>
          <Helmet>
    <title>
      Shoes | Style Shop
    </title>
    <meta name='description' content='Browse our luxury shoes, walk comfortably!' />
    <link rel='canonical' href={window.location.href} />
  </Helmet>
          <Scroll />
          <nav className={s.nav}>
      
           <Link to='/'>
      <img className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      </Link><Search mode='Shoes' />
      <ul className={s.lists} id="lists">
      <Catalang>catt</Catalang>

        <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>
        <li><Link to="/about" >About</Link></li>
      <li> <Link to="/contact">Contact Us</Link></li>       
        
      </ul><div className={s.rside} id="rside">
        
      <Catalang>langi</Catalang>

        
        <div className={s.account} id="account">
        {this.props.account?<div className={s.user}>
          <i class={`${"fa-thin fa-arrow-right-from-bracket"} ${s.logout}`} onClick={this.logout}></i>
         <Link to='/profile' className={s.arect}><img className={s.profileimg} src={this.props.account.avatar} />{this.props.account.name}</Link>
         </div>
        :
        <Fragment><Link to="/login" className={s.log} id="log">Log in</Link>
          <div className={s.averline} id="aver-line"></div>
          <Link to="/signup" className={s.sign} id="sign">Sign up</Link></Fragment>}

      </div>
      </div>
      <Catalang>langs</Catalang>
      <Catalang>catm</Catalang>
      <div className={s.note} id='note'>Thanks! Your remaining cash is <span id='cash'></span>$</div>

       </nav>

<Details></Details>
<main className={s.main}>
  <div className={s.category}>   <div className={s.fchorline} ></div>
          <div className={s.categoryt}>shoes</div>
  <div className={s.schorline} ></div></div>
<div id="category"></div>

</main>
<Footer />
</Fragment>
)
}
}
const mapStateToProps = state => ({
  buyStatus:state.buy.buyStatus,
  cash: state.cash.cash,
  account:state.accountInfo.account

});

const mapDispatchToProps = {
  setBuy,setCash
};

export default connect(mapStateToProps, mapDispatchToProps)(Cshoes);