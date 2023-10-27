import React,{ Component} from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import s from './profile.module.css'
import {Formik, Field, Form} from "formik"
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang';
import store from '../redux/store';
import { setCash } from '../redux/cash'
import { setInfo } from '../redux/accountInfo';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist'
const persistor = persistStore(store);
class Profile extends Component{
  constructor() {
    super();
    this.state = {
      
      cash: null
    };
   this.logout=this.logout.bind(this)
}

componentDidMount(){
    this.setState({cash:this.props.cash})
    if(!localStorage.getItem('re'))localStorage.setItem('re','*')

  if(this.props.account){
    const refresh=()=>{
      document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
      document.querySelector('#catagoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#langs').style.setProperty('display','none')
      document.querySelector('#catagoriesm').style.setProperty('display','none')
      }
    refresh()
window.onresize=refresh;

}}
click=()=>{
            clearTimeout(this.s1)
            clearTimeout(this.s2)
            clearTimeout(this.s3)
            this.s1=setTimeout(()=>{
          
              document.getElementById('note').style.display='block'
              document.getElementById('note').style.animationName='appear'
              document.getElementById('note').style.animationDirection='normal'
              document.getElementById('note').innerHTML=('Done!').repeat(parseInt(document.getElementById('ncash').value)>=0&&parseInt(document.getElementById('ncash').value)<=1000000)+('Sorry! You can\'t set a negative value.').repeat(parseInt(document.getElementById('ncash').value)<0)+('Sorry! You can\'t set a value more than 1 million.').repeat(parseInt(document.getElementById('ncash').value)>1000000)
          
            },100)
           this.s2=setTimeout(()=>{
          document.getElementById('note').style.animationName='disappear'
           this.s3=setTimeout(()=>{
            document.getElementById('note').style.display='none'
          
          },600)
          
        },5000)
        if(parseInt(document.getElementById('ncash').value)>=0&&parseInt(document.getElementById('ncash').value)<=1000000){
            this.props.setCash(parseInt(document.getElementById('ncash').value))
            setTimeout(()=>{this.setState({cash:this.props.cash})},100)
        }
}
logout=()=>{
    persistor.purge()
    window.location.reload()
}

render(){
        return(<div>{!this.props.account?<h1>Please <Link to='/login'>log in{this.state.re&&<Navigate to='/' />}</Link> first</h1>:<Fragment> <nav className={s.nav}>
<Scroll />
           <Link to='/'>
      <img className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />

      </Link>
      <ul className={s.lists} id="lists">
      <Catalang>catt</Catalang>

        <li><Link to="/purchases" className={s.purchases}>Purchases</Link></li>
        <li><Link to="/about" >About</Link></li>
      <li> <Link to="/contact">Contact Us</Link></li>       
        
      </ul><div className={s.rside} id="rside">
        
      <Catalang>langi</Catalang>

      
      </div>
      <Catalang>catm</Catalang>
      <Catalang>langs</Catalang>
      <div className={s.note} id='note'></div>

</nav>
<main className={s.main}>
    <div className={s.profile}><div className={s.profilet}>Profile</div>
  <div className={s.grid}>
    <div className={s.pic}>
        <img className={s.profileimg} src={this.props.account.avatar} />

    </div>
    <div className={s.profiled}>
        <div><span>Name:</span> {this.props.account.name}</div>
        <div><span>Email:</span> {this.props.account.email}</div>
        <div><span>Role:</span> {this.props.account.role}</div>
        <div><span>Creation date:</span> {this.props.account.creationAt.split('').slice(0,this.props.account.creationAt.split('').indexOf('T')).reduce((a,b)=>a+b).split('-').reverse().reduce((a,b)=>a+' - '+b)}</div>
        <div><span>Cash:</span> {this.state.cash}$</div>
        <div><span>Enter your new cash:</span> <input className={s.in} id='ncash' type='number' /> <button className={s.set} onClick={this.click}>Set</button></div>
    </div>
  </div>
        <div className={s.cr}>Changing account info requires back-end features</div>
  <button className={s.button} onClick={this.logout}>Log out</button>

    </div>
  <div className={s.back}></div>

</main>
<Footer />
      </Fragment>}
</div>
)
}}

const mapStateToProps = (state) => {
    return {
      cash: state.cash.cash,
      account:state.accountInfo.account
    };
  };
  
  const mapDispatchToProps = {
    setCash,setInfo
  };
export default connect(mapStateToProps, mapDispatchToProps)(Profile)