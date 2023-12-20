import React,{ Component,useLayoutEffect,useCallback,useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { Link ,useLocation} from 'react-router-dom';
import s from './Category.module.css'
import Products from '../components/Products';
import Details from '../components/Details';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang'
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import {setBuy} from '../redux/buy'
import { setInfo } from '../redux/accountInfo';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import Search from '../components/Search';
import { Helmet } from 'react-helmet-async';
const persistor = persistStore(store);
class Celectronic extends Component {
  constructor() {
    super();
    this.state = {
      ww: null,
     }
    this.logout = this.logout.bind(this);
  }
  logout=()=>{   
    persistor.purge()
    window.location.reload()
  }
  refresh=()=>{
    this.setState({ ww: window.innerWidth })

    document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
    document.querySelector('#categoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
    document.querySelector('#search-rel').style.setProperty('display','none')
    if(this.state.ww>1210){
    }
    else{ 
     document.querySelector('#lists').style.setProperty('left', "" + window.innerWidth / 2 - 50 + 'px')
     document.querySelector('#categoriesm').style.setProperty('left', "" + window.innerWidth / 2 -85 + 'px')

    }

    if(this.state.ww<875){
      document.getElementById('search').style.display='none'

    document.querySelector('#lists').style.setProperty('left', '70px')
    document.querySelector('#search').style.setProperty('left', '70px')
    document.querySelector('#categoriesm').style.setProperty('left','95px')
    if(this.state.ww<=450) document.querySelector('#search').style.setProperty('left', '10px')

  } 
    else document.getElementById('search').style.display='' 
  
    }
    
  componentDidMount(){
  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
  document.querySelector('#categoriesm').style.setProperty('display','none')

        this.setState({ ww: window.innerWidth })
        document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
        document.querySelector('#categoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
        document.querySelector('#search-rel').style.setProperty('display','none')
        
      setTimeout(()=>{this.refresh();},100)

window.onresize=this.refresh;

  window.addEventListener('resize',()=>{this.refresh()});

var observer = new MutationObserver((mutations)=> {
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
category.render(  <React.StrictMode><Provider store={store}><Products id='2'/></Provider></React.StrictMode>)
}

 
componentWillUnmount(){
  window.removeEventListener('resize',this.refresh);
}
render(){ 
        return(<Fragment>
          <Helmet>
    <title>
      Electronics | Style Shop
    </title>
    <meta name='description' content='Add the technology to your outfitconsectetur adipisicing elit. Eligendi dignissimos at, porro voluptatum dolore facere pariatur repudindae adipisci nostrum.' />
    <meta name="keywords" content='fashion, discover, electronics, category, style shop, ecommerce, buy, search, shopping'/>
 
    <link rel='canonical' href={window.location.href} />
 
  </Helmet>
          <Scroll />
          <nav className={s.nav}>
          <Link to='/'>
      <img alt='Website logo' className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      </Link><Search mode='Shoes' />
      <ul className={s.lists} id="lists">
      {this.state.ww < 1210 ? <Fragment>

{this.state.ww<875&&  <li><i className="fa-thin fa-magnifying-glass" onClick={()=>{document.getElementById('search').style.display=''; document.getElementById('searchbox').focus()}}></i></li>}
            <li className={s.categoriest} ><i id="categoriest" class="fa-thin fa-cards-blank"></i></li>
            <li><Link to="/purchases" className={s.purchases}><i class="fa-thin fa-cart-shopping"></i></Link></li>
            <li><Link to="/about" ><i class="fa-thin fa-info"></i></Link></li>
            <li>  <Link to="/contact" className={s.contact} id="contact" ><i class="fa-thin fa-phone"></i></Link></li>
          </Fragment>
            :
            <Fragment>
              <li className={s.categoriest} id="categoriest">Categories</li>
              <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/contact" className={s.contact} id="contact">Contact Us<span id="mark"></span></Link></li>
            </Fragment>
          }
      </ul><div className={s.rside} id="rside">
        

        
        <div className={s.account} id="account">
        {this.props.account ?this.state.ww<600? <Link to='/profile' className={s.arect}>
                  <img alt="Profile image" className={s.profileimg} src={this.props.account.avatar} />
                  </Link>: <div className={s.user}>
                <i className={`${"fa-thin fa-arrow-right-from-bracket"} ${s.logout}`} onClick={this.logout}></i>
                <Link to='/profile' className={s.arect}>
                  <img alt="Profile image" className={s.profileimg} src={this.props.account.avatar} />
                  {this.props.account.name}</Link>
              </div>
                :this.state.ww<600?<Link to="/login"><i class="fa-thin fa-circle-user" style={{position:'relative',width:'50px'}}></i></Link>:
                <Fragment><Link to="/login" className={s.log} id="log">Log in</Link>
                  <div className={s.averline} id="aver-line"></div>
                  <Link to="/signup" className={s.sign} id="sign">Sign up</Link></Fragment>}

      </div>
      </div>
      <Catalang>catm</Catalang>
      <div className={s.note} id='note'>Thanks! Your remaining cash is <span id='cash'></span>$</div>

       </nav>

<Details></Details>
<main className={s.main}>
  <div className={s.category}>   <div className={s.fchorline} ></div>
          <div className={s.categoryt}>Electronics</div>
  <div className={s.schorline} ></div></div>
<div id="category"></div>

</main>
<Footer /></Fragment>
)
}
}
const mapStateToProps = state => ({
  buyStatus:state.buy.buyStatus,
  cash: state.cash.cash,
account:state.accountInfo.account
});

const mapDispatchToProps = {
  setBuy,setInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Celectronic);