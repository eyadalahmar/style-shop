import React,{ Component,useLayoutEffect,useCallback,useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { Link ,useLocation} from 'react-router-dom';
import s from './Sign.module.css'
import Categories from '../components/Category';
import {Formik, Field, Form} from "formik"
import * as yup from 'yup'
import { Fragment } from 'react';
import Scroll from '../components/scroll';
import Footer from '../components/Footer';
import Catalang from '../components/Catalang';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
class Sign extends Component{
  constructor() {
    super();
    this.state = {
      re: false,
      ww: null,

    };
    this.submit = this.submit.bind(this);
  }
componentDidMount(){
  if(!localStorage.getItem('re'))localStorage.setItem('re','*')
  document.querySelector('#categoriesm').style.setProperty('display','none')

  if(!this.props.account){
  
    const refresh=()=>{
      document.querySelector('#lists').style.setProperty('left',""+window.innerWidth/2-150+'px')
      document.querySelector('#categoriesm').style.setProperty('left',""+window.innerWidth/2-155+'px')
      document.querySelector('#categoriesm').style.setProperty('display','none')
     
    
      this.setState({ ww: window.innerWidth })
        
      if(this.state.ww>1210){
      }
      else{ 
       document.querySelector('#lists').style.setProperty('left', "" + window.innerWidth / 2 - 150 + 'px')
       document.querySelector('#categoriesm').style.setProperty('left', "" + window.innerWidth / 2 -185 + 'px')
  
      }
  
      if(this.state.ww<875){
  
      document.querySelector('#lists').style.setProperty('left', '70px')
      document.querySelector('#categoriesm').style.setProperty('left','97px')
  
    } 
    
    
    }
    refresh()
window.onresize=refresh;
document.addEventListener('keydown',(a)=>{
  if(a.key=="Enter"){

    a.preventDefault();
    if(a.target==document.getElementById('name')||a.target==document.getElementById('email')||a.target==document.getElementById('pass')||a.target==document.getElementById('confirpass')){
      if(document.getElementById('name').value=='')document.getElementById('name').focus();    
     else if(document.getElementById('email').value=='')document.getElementById('email').focus();
      else if(document.getElementById('pass').value=='')document.getElementById('pass').focus();
      else if(document.getElementById('confirpass').value=='')document.getElementById('confirpass').focus();
      else this.submit({name:document.getElementById('name'),email:document.getElementById('email').value,password:document.getElementById('pass').value,cpassword:document.getElementById('confirpass').value})
    }
}
})
}}
submit=(a)=>{
  if(a.password==a.cpassword){
    alert("Thank you for checking out! Storing the data requires back-end features...")
    document.getElementById('form').reset()
}
 else document.getElementById("err").innerHTML="The password and the confirm doesn't match"
}
check=()=>{
  let a=document.getElementById('name')
  let b=document.getElementById('email')
  let c=document.getElementById('pass')
  let d=document.getElementById('confirpass')
  document.getElementById("err").innerHTML="All fields are required".repeat(a.value==''||b.value==''||c.value==''||d.value=='')
  
  if(a.value==''){a.style.borderColor="#ff0000"
  setTimeout(()=>{
    a.style.borderColor="black"
    },3000)}
  if(b.value==''){b.style.borderColor="#ff0000"
    setTimeout(()=>{
      b.style.borderColor="black"
      },3000)} 
  if(c.value==''){c.style.borderColor="#ff0000"
      setTimeout(()=>{
        c.style.borderColor="black"
        },3000)} 
  if(d.value==''){d.style.borderColor="#ff0000"
        setTimeout(()=>{
          d.style.borderColor="black"
          },3000)}

}
valid=()=>{
return yup.object().shape({
  name:yup.string().required(),
  email:yup.string().email().required(),
  password:yup.string().required(),
  cpassword:yup.string().required()
})

}
render(){
        return(<Fragment>
          <Helmet>
    <title>
      Sign In | Style Shop
    </title>
    <meta name='description' content='Sign in page.consectetur adipisicing elit. Eligendi dignissimos at, porro voluptatum dolore facere pariatur repudiandae adipisci nostrum.' />
    <meta name="keywords" content='fashion, discover, clothes, shoes, electronics, category, style shop, ecommerce, buy, search, shopping, sign up'/>
   
    <meta name='robots' content='noindex' />
  </Helmet>
          {this.props.account?<h1>You're already logged in</h1>:<Fragment> /<nav className={s.nav}>
<Scroll />
           <Link to='/'>
      <img alt='Website logo' className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
      </Link>
      <ul className={s.lists} id="lists">
      {this.state.ww < 1210 ? <Fragment>

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
        

      
      </div>
      <Catalang>catm</Catalang>

</nav>
<main className={s.main}>
    <div className={s.signup}><div className={s.signt}>Sign Up</div><Formik  initialValues={{name:"",email:"",password:"",cpassword:''}} onSubmit={this.submit} validationSchema={this.valid}>
   <Form id='form' className={s.f}> <div className={s.name}><div>Name:</div><Field id="name" className={s.sinput} name="name" type="text"/></div>
    <div className={s.email}><div>Email:</div><Field className={s.sinput} id="email" name="email" type="email"/></div>
    <div className={s.password}><div>Password:</div><Field className={s.sinput} id="pass" name='password' type="password"/></div>
    <div className={s.password}><div>Confirm Password:</div><Field className={s.sinput} name="cpassword" id="confirpass" type="password"/></div>
    <span className={s.err} id="err"></span>
    <Link to="/login" className={s.login}>Already have an account?</Link>
    <button className={s.button} onClick={this.check} type='submit'>Create account</button>
    </Form>
    </Formik >

    </div>
</main>
<Footer />
      </Fragment>}
</Fragment>
)
}}
const mapStateToProps=(state)=>{
  return{account:state.accountInfo.account}}
  
export default connect(mapStateToProps,null)(Sign)