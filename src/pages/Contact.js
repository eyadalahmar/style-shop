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
    this.state = {
      ww: null,
    };
    this.logout = this.logout.bind(this);
  }
  logout=()=>{
    persistor.purge()
    window.location.reload()
  }
componentDidMount(){

  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
  document.querySelector('#categoriesm').style.setProperty('display','none')

    const refresh=()=>{
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
      this.setState({ ww: window.innerWidth })
      document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
      document.querySelector('#categoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#search-rel').style.setProperty('display','none')
      
    setTimeout(()=>{refresh();},100)
  window.onresize=refresh;


}
render(){ 
        return(<Fragment>
          <Helmet>
    <title>
      Contact Us | Style Shop
    </title>
    <meta name='description' content='Here is our contact page, let us know if you have something to say!consectetur adipisicing elit. Eligendi dignissimos at, porro voluptatum dolore facere pariatur repudiandae adipisci nostrum.' />
    <meta name="keywords" content='fashion, discover, clothes, shoes, electronics, category, style shop, ecommerce, buy, search, shopping,contact, contact us'/>
    
    <link rel='canonical' href={window.location.href} />
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
            <li><Link to="/purchases" className={s.purchases}><i class="fa-thin fa-cart-shopping"></i></Link></li>
            <li><Link to="/about" ><i class="fa-thin fa-info"></i></Link></li>
          </Fragment>
            :
            <Fragment>
              <li className={s.categoriest} id="categoriest">Categories</li>
              <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>
              <li><Link to="/about" >About</Link></li>
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
<main className={s.main}>
  <div className={s.carticle}><div className={s.ctitle}>Contact Us</div><div className={s.text}><div>Have any inquire? Any question? Any suggestion? Feel free to tell as!</div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores earum? Modi id vitae, optio quaerat molestiae dolores repellat dolore, tenetur eaque aliquam itaque atque omnis et laborum, nostrum earum!
 
 {this.state.ww>450&&<div className={s.ortext}>Or contact us via:<div className={s.logos}>
 <i class="fa-solid fa-envelope"></i>
  <i class="fa-brands fa-linkedin"></i>
  <i class="fa-brands fa-telegram"></i></div> </div>}</div></div>

  <div className={s.cdata}>
  <div className={s.name}><div>Name:</div><input className={s.cinput} type="text" value={this.props.account?this.props.account.name:''}/></div>
  <div className={s.email}><div>Email:</div><input className={s.cinput} type="email" value={this.props.account?this.props.account.email:''}/></div>
  <div className={s.subject}><div>Subject:</div><input className={s.cinput} type="text"/></div>
  <div className={s.message}><div>Your Message:</div><textarea id="message" className={s.tarea}></textarea></div>
  <button className={s.button}>Submit</button>
  </div>
  {this.state.ww<=450&&<div className={s.ortext}> <div className={s.or}>Or contact us via:</div><div className={s.logos}>
 <i class="fa-solid fa-envelope"></i>
  <i class="fa-brands fa-linkedin"></i>
  <i class="fa-brands fa-telegram"></i></div></div>}
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