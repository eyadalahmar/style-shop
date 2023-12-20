import React,{ Component} from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import s from './About.module.css'
import { Fragment } from 'react';
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang'
import Footer from '../components/Footer';
import { setInfo } from '../redux/accountInfo';
import { connect } from 'react-redux';
import store from '../redux/store';
import { persistStore } from 'redux-persist'
import Search from '../components/Search';
import Products from '../components/Products';
import { Helmet } from 'react-helmet-async';
const persistor = persistStore(store);
class About extends Component {
  constructor() {
    super();
    this.state = {
      ww: null,
      re: false,
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
  componentDidMount(){
  
  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
  document.querySelector('#categoriesm').style.setProperty('display','none')
  this.setState({ ww: window.innerWidth })
  document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
  document.querySelector('#categoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
  document.querySelector('#search-rel').style.setProperty('display','none')
  
setTimeout(()=>{this.refresh();},100)
window.onresize=()=>{this.refresh();
      
}
window.addEventListener('resize',this.refresh);


}
componentWillUnmount(){
  window.removeEventListener('resize',this.refresh);
}
 render(){
        return(<Fragment>
          <Helmet>
    <title>
      About | Style Shop
    </title>

    <meta name='description' content='A summary about our store, Style Shop.consectetur adipisicing elit. Eligendi dignissimos at, porro voluptatum dolore facere pariatur repudiandae adipisci nostrum.' />
    <meta name="keywords" content='fashion, discover, clothes, shoes, electronics, category, style shop, ecommerce, buy, search, shopping, about'/>
    
    <link rel='canonical' href={window.location.href} />
  </Helmet>
          <Scroll />
          <nav className={s.nav}>
           <Link to='/'>
           <img alt='Website logo' className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" /></Link>
       <Search mode="All Products" />
          <ul className={s.lists} id="lists"> {this.state.ww < 1210 ? <Fragment>
        {this.state.ww<875&&  <li><i className="fa-thin fa-magnifying-glass" onClick={()=>{document.getElementById('search').style.display=''; document.getElementById('searchbox').focus()}}></i></li>}

<li className={s.categoriest} ><i id="categoriest" class="fa-thin fa-cards-blank"></i></li>
<li><Link to="/purchases" className={s.purchases}><i class="fa-thin fa-cart-shopping"></i></Link></li>
<li>  <Link to="/contact" className={s.contact} id="contact" ><i class="fa-thin fa-phone"></i></Link></li>
</Fragment>
:
<Fragment>
  <li className={s.categoriest} id="categoriest">Categories</li>
  <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>
  <li><Link to="/contact" className={s.contact} id="contact">Contact Us<span id="mark"></span></Link></li>
</Fragment>
}

          </ul>

          <div className={s.rside} id="rside">
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

<img alt="about photo1" src='./istockphoto-688948854-612x612.jpg' className={s.fphoto}/>
<img alt="about photo2" src='./istockphoto-111885949-612x612.jpg' className={s.sphoto}/>
<img alt="about photo3" src='./uniqlo-gb031fe49b_1920.jpg' className={s.tphoto}/>
        </div></div>

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
export default connect(mapStateToProps,mapDispatchToProps)(About)