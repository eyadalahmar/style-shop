import React,{ Component,useLayoutEffect,useCallback,useEffect, useMemo, Fragment } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import s from './Log.module.css'
import {Formik, Field, Form} from "formik"
import * as yup from 'yup'
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang'
import { setCash } from '../redux/cash';
import { setInfo } from '../redux/accountInfo';
import { connect } from 'react-redux';
import { createPurList } from '../redux/purchases';
import { Helmet } from 'react-helmet-async';
class Log extends Component{
  constructor() {
    super();
    this.state = {
      re: false,
      ser:false,
      fet:true,
      data:[{email:"Loading...",password:"Loading..."}],
    };
    this.sumbit = this.sumbit.bind(this);
  }
   arr=[];
   click=()=>{

     if(this.state.fet)
     setTimeout( ()=>{
       axios.get("https://api.escuelajs.co/api/v1/users").then(res=>{this.setState({data:res.data});})
      document.querySelector('table').style.display='table'
     // document.querySelector('table').style.display='none'
        this.setState({fet:false})
      } ,10)
    }
    componentDidMount(){
  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
  document.querySelector('#catagoriesm').style.setProperty('display','none')

      if(!this.props.account){ 
        const refresh=()=>{
          document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
      document.querySelector('#catagoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#langs').style.setProperty('display','none')

         }
    refresh()
window.onresize=refresh
document.querySelector('table').style.display='none'
document.addEventListener('keydown',(a)=>{
  if(a.key=="Enter"){

    a.preventDefault();
    if(a.target==document.getElementById('email')||a.target==document.getElementById('pass')){
      if(document.getElementById('email').value=='')document.getElementById('email').focus();
      else if(document.getElementById('pass').value=='')document.getElementById('pass').focus();
      else this.sumbit({email:document.getElementById('email').value,password:document.getElementById('pass').value})
    }
}
})
}}

sumbit (a){
  console.log(a)
  this.setState({ser:true})
  
  let b=document.getElementById('email')
  let c=document.getElementById('pass')
  if(b.value!=''&&c.value!='')
 {if(this.state.data.map((a)=>a.email).indexOf(a.email)==-1){ 
  document.getElementById("err").innerHTML="This email hasn't create an account here"
  b.style.borderColor="#ff0000"
    setTimeout(()=>{
      b.style.borderColor="black"
      },3000)
    }
else{
 if(this.state.data[this.state.data.map((a)=>a.email).indexOf(a.email)].password==a.password){
  this.props.setInfo(this.state.data[this.state.data.map((a)=>a.email).indexOf(a.email)])
  this.props.setCash(3000)
  this.props.createPurList()
  localStorage.setItem('wel','*')
  this.setState({re:true})
  
  
}
else{
  document.getElementById("err").innerHTML="The passoword is incorrect"
  document.getElementById('pass').value=''
  c.style.borderColor="#ff0000"
  setTimeout(()=>{
    c.style.borderColor="black"
  },3000)
  
}
}

}}

check=()=>{
  let b=document.getElementById('email')
  let c=document.getElementById('pass')
  document.getElementById("err").innerHTML="Please enter your ".repeat(b.value==''||c.value=='')+"email".repeat(b.value=='')+" and ".repeat(b.value==''&&c.value=='')+"passowrd".repeat(c.value=='')
  
  
  if(b.value==''){b.style.borderColor="#ff0000"
  setTimeout(()=>{
    b.style.borderColor="black"
  },3000)} 
  if(c.value==''){c.style.borderColor="#ff0000"
  setTimeout(()=>{
    c.style.borderColor="black"
  },3000)} 
  
  
}
valid=()=>{
  
  return yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().required(),
  })
  
}


 render(){
   return(<Fragment>
    <Helmet>
    <title>
      Log In | Style Shop
    </title>
    <meta name='description' content='Log in page' />
    <meta name='robots' content='noindex' />
  </Helmet>
    {this.props.account?<h1>You're already logged in{this.state.ser&&<Navigate to="/" />}</h1>:<Fragment>
    <Scroll />
    <nav className={s.nav}>
             
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
      <Catalang  style={{right:'208px'}}>langs</Catalang>
</nav>
<main className={s.main} id="mainb">
    <div className={s.login}><div className={s.logt}>Log In</div>
    <Formik initialValues={{email:"",password:""}} onSubmit={this.sumbit} validationSchema={this.valid}>
    <Form className={s.f}>
        
    <div className={s.email}><div>Email:</div><Field className={s.linput} id="email" name="email" type="email"/></div>
    <div className={s.password}><div>Password:</div><Field className={s.linput} id="pass" name="password" type="password"/></div>
    <span className={s.err} id="err"></span>

    <Link to="/signup" className={s.signup}>Dont't have an account?</Link>
    <button type="submit" className={s.button} onClick={this.check}>Log in</button>
    </Form>
    </Formik>
    </div>
  <div className={s.accountsl}>
    <div className={s.alh} onClick={this.click}>
          <span className={s.alt}>Want to login? Try these accounts!</span> 
          <i className={`${"fa-thin fa-chevron-down"} ${s.arrow}`}></i>
    </div>
   <table className={s.table}><thead className={s.thead}>
    <tr><td id="td1">Email</td><td id="td">Password</td></tr></thead><tbody id="tbody" className={s.tbody}>
  {  
    this.state.data.map(a=>{if(this.arr.indexOf(a.email)==-1){this.arr.push(a.email);return (<tr><td>{a.email}</td><td>{a.password}</td></tr>)}})
}
    </tbody>
   </table>
  </div>
  <div className={s.margin} id="navi"></div>
  <div className={s.back}></div>
  {this.state.re&&<Navigate to="/" />}
</main>
<Footer />
</Fragment>}
</Fragment>
)
}}
const mapStateToProps=(state)=>{
  return{
    cash:state.cash.cash  
    ,account:state.accountInfo.account
  }
}
const mapDispatchToProps={
  setCash,setInfo,createPurList
}
export default connect(mapStateToProps,mapDispatchToProps)(Log)