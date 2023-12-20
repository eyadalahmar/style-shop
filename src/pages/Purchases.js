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
import { createPurList ,removeFromPurList} from '../redux/purchases';
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
    this.state = {
      ww: null,
    };
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
        document.querySelector('#categoriesm').style.setProperty('left','97px')
        if(this.state.ww<=450) document.querySelector('#search').style.setProperty('left', '10px')

      } 
        else document.getElementById('search').style.display='' 
      
     
        }
remove=(e)=>{   
this.props.removeFromPurList([...document.getElementsByClassName('close')].indexOf(e.target))
}
componentDidMount(){
  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
  document.querySelector('#categoriesm').style.setProperty('display','none')
  this.setState({ ww: window.innerWidth })
  document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
  document.querySelector('#categoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
  document.querySelector('#search-rel').style.setProperty('display','none')
  
  
  setTimeout(() => { this.refresh() }, 100);
  window.onresize=()=>{this.refresh();}
window.addEventListener('resize',this.refresh);

}
componentWillUnmount(){
  window.removeEventListener('resize',this.refresh);
}
render(){
  
  return(<Fragment>
    <Helmet>
    <title>
      Purchases | Style Shop
    </title>
    <meta name='description' content='Your purchases listconsectetur adipisicing elit. Eligendi dignissimos at, porro voluptatum dolore facere pariatur repudiandae adipisci nostrum.' />
    <meta name="keywords" content='fashion, discover, clothes, shoes, electronics, category, style shop, ecommerce, buy, search, shopping, purchases, list'/>
   
    <meta name='robots' content='noindex' />
  </Helmet>
          <Scroll />
          <nav className={s.nav}>
            
           <Link to='/'>
      <img alt='Website logo' className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      </Link><Search mode="All Products" />
<Products no="true" />
      <ul className={s.lists} id="lists">
      {this.state.ww < 1210 ? <Fragment>

{this.state.ww<875&&  <li><i className="fa-thin fa-magnifying-glass" onClick={()=>{document.getElementById('search').style.display=''; document.getElementById('searchbox').focus()}}></i></li>}
            <li className={s.categoriest} ><i id="categoriest" class="fa-thin fa-cards-blank"></i></li>
            <li><Link to="/about" ><i class="fa-thin fa-info"></i></Link></li>
            <li>  <Link to="/contact" className={s.contact} id="contact" ><i class="fa-thin fa-phone"></i></Link></li>
          </Fragment>
            :
            <Fragment>
              <li className={s.categoriest} id="categoriest">Categories</li>
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

    </nav>
<main className={s.main} id='mainn'>{!this.props.account?<div className={s.purchasestext}>Please log in to show your purchases</div>:this.props.purList==[]?
<div className={s.purchasestext}>You haven't any purchases yet</div>: (<Fragment>
  
 <div className={s.purchasestext}>Your purchases</div>
 <table className={s.table}>
  <thead className={s.thead}>
<td>Id</td><td>Name</td><td>Catagory</td><td>price</td><td></td>
  </thead> 
  <tbody>
    {this.props.purList.map((a,b)=>(<tr><td>{b+1}</td><td>{a.title}</td><td>{a.category.name}</td><td>{a.price}$</td><td><i className={`fa-thin fa-xmark ${s.close} close`} onClick={this.remove}></i></td></tr>))}
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
  setInfo,createPurList,removeFromPurList,
}
export default connect(mapStateToProps,mapDispatchToProps)(Purchases)