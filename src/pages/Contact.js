import React,{ Component,useLayoutEffect,useCallback,useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { Link ,useLocation} from 'react-router-dom';
import s from './Contact.module.css'
import Categories from '../components/Category';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang'
import Footer from '../components/Footer';
import { setInfo } from '../redux/accountInfo';
import { connect } from 'react-redux';
import store from '../redux/store';
import { persistStore } from 'redux-persist'
import Products from '../components/Products';
import Search from '../components/Search'
import { Helmet } from 'react-helmet-async';
const persistor = persistStore(store);
class Contact extends Component {

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
      Contact Us | Style Shop
    </title>
    <meta name='description' content='Here is our contact page, let us know if you have something to say!' />
    <link rel='canonical' href={window.location.href} />
  </Helmet>
          <Scroll />
          <nav className={s.nav}>
             
           <Link to='/'>
      <img className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      </Link><Search mode="All Products" />
<Products no="true" />
      <ul className={s.lists} id="lists">
      <Catalang>catt</Catalang>

        <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>

        <li><Link to="/about" >About</Link></li>

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

       </nav>
<main className={s.main}><div className={s.cdata}>
  <div className={s.name}><div>Name:</div><input className={s.cinput} type="text" value={this.props.account?this.props.account.name:''}/></div>
  <div className={s.email}><div>Email:</div><input className={s.cinput} type="email" value={this.props.account?this.props.account.email:''}/></div>
  <div className={s.subject}><div>Subject:</div><input className={s.cinput} type="text"/></div>
  <div className={s.message}><div>Your Message:</div><textarea id="message" className={s.tarea}></textarea></div>
  <button className={s.button}>Submit</button>
  </div>
  <div className={s.carticle}><div className={s.ctitle}>Contact Us</div><div className={s.text}><div>Have any inquire? Any question? Any suggestion? Feel free to tell as!</div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores earum? Modi id vitae, optio quaerat molestiae dolores repellat dolore, tenetur eaque aliquam itaque atque omnis et laborum, nostrum earum!
 <div className={s.ortext}>Or contact us via:<div className={s.logos}>
 <i class="fa-solid fa-envelope"></i>
  <i class="fa-brands fa-linkedin"></i>
  <i class="fa-brands fa-telegram"></i></div> </div></div></div>


</main>
<Footer />
</Fragment>
)
}}
const mapStateToProps=(state)=>{
  return{
    account:state.accountInfo.account
  }
}
const mapDispatchToProps={
  setInfo
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact)