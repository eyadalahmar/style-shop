import React,{ Component,useLayoutEffect,useCallback,useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { Link ,Router,useLocation} from 'react-router-dom';
import Categories from '../components/Category';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang';
import Footer from '../components/Footer';
import { setInfo } from '../redux/accountInfo';
import { connect } from 'react-redux';
import { createPurList } from '../redux/purchases';
import store from '../redux/store';
import s from './Purchases.module.css'
import { persistStore } from 'redux-persist'
import Search from '../components/Search';
import Products from '../components/Products';
import { Helmet } from 'react-helmet-async';
const persistor = persistStore(store);
class Purchases extends Component {
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

  const refresh=()=>{
      document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
      document.querySelector('#catagoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#search-rel').style.setProperty('display','none')

      }
  refresh()
window.onresize=refresh;

}
render(){
  
  return(<Fragment>
    <Helmet>
    <title>
      Purchases | Style Shop
    </title>
    <meta name='description' content='Your purchases list' />
    <meta name='robots' content='noindex' />
  </Helmet>
          <Scroll />
          <nav className={s.nav}>
            
           <Link to='/'>
      <img className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      </Link><Search mode="All Products" />
<Products no="true" />
      <ul className={s.lists} id="lists">
      <Catalang>catt</Catalang>

        <li><Link to="/about" >About</Link></li>
      <li> <Link to="/contact" id="contact">Contact Us</Link></li>       
        
      </ul><div className={s.rside} id="rside">
        
      <Catalang>langi</Catalang>

        
        <div className={s.account} id="account">
        {this.props.account?<div className={s.user}>
          <i className={`${"fa-thin fa-arrow-right-from-bracket"} ${s.logout}`} onClick={this.logout}></i>
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

    </nav>
<main className={s.main} id='mainn'>{!this.props.account?<div className={s.purchasestext}>Please log in to show your purchases</div>:this.props.purList==[]?
<div className={s.purchasestext}>You haven't any purchases yet</div>: (<Fragment>
  
 <div className={s.purchasestext}>Your purchases</div>
 <table className={s.table}>
  <thead className={s.thead}>
<td>Id</td><td>Name</td><td>Catagory</td><td>price</td>
  </thead> 
  <tbody>
    {this.props.purList.map((a,b)=>(<tr><td>{b+1}</td><td>{a.title}</td><td>{a.category.name}</td><td>{a.price}$</td></tr>))}
  </tbody>
 </table>
</Fragment>
)}
 
{this.props.account&&this.props.purList!=[]&&<div className={s.bnote}>Adding more columns (e.g. purchase date) requires back-end features</div> }
</main>
<Footer />
</Fragment>
)
}

}
const mapStateToProps=(state)=>{
  return{account:state.accountInfo.account
      ,purList:state.purchases.purList
  }}

const mapDispatchToProps={
  setInfo,createPurList
}
export default connect(mapStateToProps,mapDispatchToProps)(Purchases)