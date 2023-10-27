import React,{ Component,useLayoutEffect,useCallback,useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { Link ,useLocation} from 'react-router-dom';
import s from './About.module.css'
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
import Search from '../components/Search';
import Products from '../components/Products';
const persistor = persistStore(store);
class About extends Component {
  constructor() {
    super();
    this.state = {
      re: false
    };
    this.logout = this.logout.bind(this);
  }
  logout=()=>{
    persistor.purge()
    window.location.reload()
  }
  componentDidMount(){
  
  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
    const refresh=()=>{
      document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
      document.querySelector('#catagoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#search-rel').style.setProperty('display','none')

      }
    refresh()
  window.onresize=refresh;
 
// document.addEventListener('scroll',()=>{
//   if(window.scrollY<160){

//     document.getElementById('rside').style.marginRight="25px"
//     document.getElementById('langs').style.right="234px"
    
//     }
//     else{
//     document.getElementById('rside').style.marginRight="0";
//     document.getElementById('langs').style.right="209px"
//     } 
    
//   })

}

 render(){
        return(<div>
          <Scroll />
          <nav className={s.nav}>
        
      
           <Link to='/'>
      <img className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      </Link>      
      <Search mode="All Products" />
<Products no="true" />
      <ul className={s.lists} id="lists">
      <Catalang>catt</Catalang>
        <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>
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
      <Catalang>catm</Catalang>
      <Catalang>langs</Catalang>

      </nav>

<main className={s.main}><div className={s.atitle}>About Us
</div><div className={s.about}>
 <div className={s.article}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint excepturi dolorem distinctio laboriosam maiores assumenda, quaerat laudantium itaque accusantium? Numquam, doloribus. Ipsa qui atque perferendis distinctio eveniet perspiciatis pariatur!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quod nihil nesciunt suscipit dolorem illum nulla, cupiditate ad quo neque ut consequuntur incidunt ea debitis provident molestiae. Sed, nulla.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure exercitationem saepe nihil? Maxime, sint vero nihil numquam ullam modi suscipit, commodi fugit error natus saepe officia adipisci doloribus? Odit, iure?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto excepturi suscipit quo reiciendis neque veniam. Totam, pariatur laborum odio dolorum atque facere ipsa debitis. In odio veritatis harum minus?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione reiciendis eligendi est laboriosam inventore pariatur hic adipisci id magnam ullam nobis, earum repellat nostrum qui dolorem culpa debitis quis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error dolores alias enim voluptate incidunt aperiam possimus? Magni ex cupiditate ipsa sint eum iusto corrupti, reiciendis eius, exercitationem ipsam sed.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint excepturi dolorem distinctio laboriosam maiores assumenda, quaerat laudantium itaque accusantium? Numquam, doloribus. Ipsa qui atque perferendis distinctio eveniet perspiciatis pariatur!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quod nihil nesciunt suscipit dolorem illum nulla, cupiditate ad quo neque ut consequuntur incidunt ea debitis provident molestiae. Sed, nulla.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure exercitationem saepe nihil? Maxime, sint vero nihil numquam ullam modi suscipit, commodi fugit error natus saepe officia adipisci doloribus? Odit, iure?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto excepturi suscipit quo reiciendis neque veniam. Totam, pariatur laborum odio dolorum atque facere ipsa debitis. In odio veritatis harum minus?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione reiciendis eligendi est laboriosam inventore pariatur hic adipisci id magnam ullam nobis, earum repellat nostrum qui dolorem culpa debitis quis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error dolores alias enim voluptate incidunt aperiam possimus? Magni ex cupiditate ipsa sint eum iusto corrupti, reiciendis eius, exercitationem ipsam sed.
    </div><div className={s.photos}>

<div className={s.fphoto}></div>
<div className={s.sphoto}></div>
<div className={s.tphoto}></div>
        </div></div>

</main>
<Footer />
</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(About)