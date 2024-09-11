import React, {Component, useLayoutEffect, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Categories from '../components/Category';
import s from './Home.module.css'
import '../index.css'
import Search from '../components/Search'
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { setInfo } from '../redux/accountInfo';
import { connect } from 'react-redux';
import store from '../redux/store';
import { persistStore } from 'redux-persist'
import Scroll from '../components/scroll';
import Catalang from '../components/Catalang';
import { Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';  
import i18n from '../i18nConfig';

;

const persistor = persistStore(store);
class Home extends Component {
  constructor() {
    super();
    this.state = {
      randvids: (window.innerWidth>450?['hor-e1.mp4', 'hor-e2.mp4', 'hor-c1.mp4', 'hor-c2.mp4', 'hor-c3.mp4', 'hor-s1.mp4', 'hor-s2.mp4']:['ver-c1.mp4','ver-c2.mp4','ver-s1.mp4','ver-s2.mp4','ver-e1.mp4','ver-e2.mp4']).sort(() => 0.5 - Math.random()).slice(0, 3)
      , ww: null
      , lang:"en"
    }
    this.logout = this.logout.bind(this);
  }
  logout = () => {
    persistor.purge()
    window.location.reload()
  }
  ss = null;
  scroll = () => {
    window.scrollTo({
      top:
        window.innerHeight + 40
      , left: 0, behavior: 'smooth'
    }
    );
  }

  componentDidMount() {
    const { t, i18n } = this.props;
    localStorage.setItem('done','false')
  
    var stl = document.createElement("style");
    var stlarr = ['', '']
    if (localStorage.getItem('re')) {
      localStorage.removeItem('re');
      setTimeout(() => {
    
        window.location.reload(true);
      }, 100);
    }

    setTimeout(() => {
      var aa = document.getElementsByClassName(s.part)
      
      const refresh = () => {
        this.setState({ ww: window.innerWidth })
       if(this.state.lang=='en') document.querySelector('#categoriesm').style.setProperty('left', "" + window.innerWidth / 2 - 155 + 'px')
       else document.querySelector('#categoriesm').style.setProperty('right', "" + window.innerWidth / 2 - 235 + 'px')
        document.querySelector('#main').style.setProperty('height', "" + (window.innerHeight + 60) + 'px')
      if(this.state.ww>1210&&this.state.lang=='en') document.querySelector('#lists').style.setProperty('left', "" + window.innerWidth / 2 - 150 + 'px')
      if(this.state.ww>1210&&this.state.lang=='ar') document.querySelector('#lists').style.setProperty('right', "" + window.innerWidth / 2 - 235 + 'px')

      document.querySelector('#search-rel').style.setProperty('display', 'none')
        document.querySelector('#langs').style.setProperty('display', 'none')
    document.querySelector('#categoriesm').style.setProperty('display', 'none')

        var question = true
        if(this.state.ww>1210){
          clearInterval(this.ss)
          shouldPlay=false
setTimeout(()=>{
  shouldPlay=true

  this.ss = setInterval(() => {
    ;if(shouldPlay)
    setTimeout(() => { if(shouldPlay){
      document.querySelector('#contact').style.setProperty('animation', 'transparent 1s linear 0s 1 normal both')
      if(shouldPlay)     setTimeout(() => { if(shouldPlay)
              document.querySelector('#contact').style.padding = "0"
              if(shouldPlay)   document.querySelector('#contact').innerHTML = t("Have a") + t(" question").repeat(question) + t('n inquire').repeat(!question) + t('?')
              if(shouldPlay)   question = !question
            }, 560)
            if(shouldPlay)  setTimeout(() => {if(shouldPlay)
              document.getElementById('contact').style.animation = ''
              if(shouldPlay)  document.getElementById('contact').style.animation = 'transparentc 1s linear 0s 1 normal both'
              if(shouldPlay)  setTimeout(() => { if(shouldPlay)
                document.querySelector('#contact').style.padding = "0"
                if(shouldPlay)   document.querySelector('#contact').innerHTML = t("Contact Us<span id=\"mark\">!</span>")
                if(shouldPlay)    document.querySelector('#mark').style.setProperty('animation', 'transparenth 0.5s linear 2s 1 normal both')
                  }, 560)
            }
              , 3176)
            }  }
            , 2000)
        }, 15000)
    },1700)
      
      }
        else{ 
          shouldPlay=false;
          clearInterval(this.ss);
         document.querySelector('#contact').style.setProperty('animation', '')
         document.querySelector('#contact').style.padding = ""
         document.querySelector('#contact').style.width = "0px"
        if(this.state.lang=='en') {document.querySelector('#lists').style.setProperty('left', "" + window.innerWidth / 2 - 50 + 'px')
         document.querySelector('#categoriesm').style.setProperty('left', "" + window.innerWidth / 2 -85 + 'px')
           }   if(this.state.lang=='ar') {
            document.querySelector('#lists').style.setProperty('right', "" + window.innerWidth / 2 - 25 + 'px')
         document.querySelector('#categoriesm').style.setProperty('right', "" + window.innerWidth / 2 -40 + 'px')
          
          }

        }

        if(this.state.ww<875){
          document.getElementById('search').style.display='none'

        if(this.state.lang=='en'){document.querySelector('#lists').style.setProperty('left', '70px')
        document.querySelector('#categoriesm').style.setProperty('left','105px')}
        else{document.querySelector('#lists').style.setProperty('right', '70px')
        document.querySelector('#categoriesm').style.setProperty('right', '105px')

      }
        document.querySelector('#search').style.setProperty('left', '70px')
        if(this.state.ww<=450) document.querySelector('#search').style.setProperty('left', '10px')

      } 
        else {document.getElementById('search').style.display='' 
    
      }
      
      }

      refresh();
      window.onresize = ()=>{
        refresh();
        window.onscroll();
        
      }
        ;
      var dur = [document.getElementById('video1').duration, document.getElementById('video2').duration, document.getElementById('video3').duration]

      setTimeout(() => {

        dur = [document.getElementById('video1').duration, document.getElementById('video2').duration, document.getElementById('video3').duration]
      }, 2000);
    
      let video1 = document.getElementById('video1');
      let video2 = document.getElementById('video2');
      let video3 = document.getElementById('video3');
      
     
video1.oncanplaythrough = function() {
  stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchfrompic}';
  stl.innerHTML = stlarr[0] + stlarr[1];
  document.head.appendChild(stl);
  video1.play();
};

video1.onended = function() {
  if (video2.readyState >= 3) { 
      stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchvid;} #videoblock2{animation-name:switchfrompic}';
      stl.innerHTML = stlarr[0] + stlarr[1];
      document.head.appendChild(stl);
      video2.play();
  } else {
      video2.oncanplaythrough = function() {
          stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchvid;} #videoblock2{animation-name:switchfrompic}';
          stl.innerHTML = stlarr[0] + stlarr[1];
          document.head.appendChild(stl);
          video2.play();
      };
  }
};

video2.onended = function() {
  if (video3.readyState >= 3) {
      stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchvid} #videoblock2{animation-name:switchvid;} #videoblock3{animation-name:switchfrompic}';
      stl.innerHTML = stlarr[0] + stlarr[1];
      document.head.appendChild(stl);
      video3.play();
  } else {
      video3.oncanplaythrough = function() {
          stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchvid} #videoblock2{animation-name:switchvid;} #videoblock3{animation-name:switchfrompic}';
          stl.innerHTML = stlarr[0] + stlarr[1];
          document.head.appendChild(stl);
          video3.play();
      };
  }
};

video3.onended = function() {
  stlarr[1] = '#main::before{animation-name:switchfromvid; animation-direction: normal;} #videoblock1{animation-name:switchvid} #videoblock2{animation-name:switchvid} #videoblock3{animation-name:switchvid}';
  stl.innerHTML = stlarr[0] + stlarr[1];
  document.head.appendChild(stl);
  document.getElementById('main').style.cursor = 'url(./rotate-left-solid.svg),auto';
};
      document.getElementById('main').addEventListener('click', (e) => {
        if (document.getElementById('main').style.cursor && document.getElementById('main').style.cursor != '') {
          document.getElementById('main').style.cursor = ''
          let temp = (window.innerWidth>450?['hor-e1.mp4', 'hor-e2.mp4', 'hor-c1.mp4', 'hor-c2.mp4', 'hor-c3.mp4', 'hor-s1.mp4', 'hor-s2.mp4']:['ver-c1.mp4','ver-c2.mp4','ver-s1.mp4','ver-s2.mp4','ver-e1.mp4','ver-e2.mp4']).sort(() => 0.5 - Math.random()).slice(0, 3)
          this.setState({ randvids: temp })

          setTimeout(() => {

            dur = [document.getElementById('video1').duration, document.getElementById('video2').duration, document.getElementById('video3').duration]
          }, 300);
          setTimeout(() => {
            stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchfrompic}'
            stl.innerHTML = stlarr[0] + stlarr[1]
            document.head.appendChild(stl)
            document.getElementById('video1').play()
            setTimeout(() => {
              stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchvid;} #videoblock2{animation-name:switchfrompic}'
              stl.innerHTML = stlarr[0] + stlarr[1]
              document.head.appendChild(stl)
              document.getElementById('video2').play()
              setTimeout(() => {
                stlarr[1] = '#main::before{animation-name:switchtovid} #videoblock1{animation-name:switchvid} #videoblock2{animation-name:switchvid;} #videoblock3{animation-name:switchfrompic}'
                stl.innerHTML = stlarr[0] + stlarr[1]
                document.head.appendChild(stl)
                document.getElementById('video3').play()
                setTimeout(() => {
                  stlarr[1] = '#main::before{animation-name:switchfromvid; animation-direction: normal;} #videoblock1{animation-name:switchvid} #videoblock2{animation-name:switchvid} #videoblock3{animation-name:switchvid}'
                  stl.innerHTML = stlarr[0] + stlarr[1]
                  document.head.appendChild(stl)
                  document.getElementById('main').style.cursor = 'url(./style-shop/rotate-left-solid.svg),auto'
                }, dur[2] * 1000);
              }, dur[1] * 1000);
            }, dur[0] * 1000);
          }, 400)
        }
      })

      var lang = document.getElementById("lang"), langs = document.getElementById("langs"), categoriesm = document.getElementById('categoriesm'), categoriest = document.getElementById('categoriest')
      categoriesm.style.backgroundColor = '#81330000'

      var langa = false
      lang.addEventListener('click', () => {

        langs.style.animation = 'dis'.repeat(langa) + 'appearing 0.3s linear  0s 1 normal both'
        if (langa) { setTimeout(() => document.querySelector('#langs').style.setProperty('display', 'none'), 301) }
        else {
          document.querySelector('#langs').style.setProperty('display', 'block')
          setTimeout(() => {
            document.querySelector('#langs').style.setProperty('display', 'block')

          }, 400)
        }
        if (window.scrollY > window.innerHeight - 30)
          langs.style.backgroundColor = '#813300ff'
        if (categoriesa) {
          categoriesm.style.animation = 'dis'.repeat(categoriesa) + 'appearing 0.3s linear  0s 1 normal both'
          if (categoriesa) { setTimeout(() => document.querySelector('#categoriesm').style.setProperty('display', 'none'), 301) }
          else {
            document.querySelector('#categoriesm').style.setProperty('display', 'block')
            setTimeout(() => {
              document.querySelector('#categoriesm').style.setProperty('display', 'block')

            }, 400)
          }
          if (window.scrollY > window.innerHeight - 30)
            categoriesm.style.backgroundColor = '#813300ff'
          categoriesa = !categoriesa

        }
        langa = !langa
      })
      var categoriesa = false
      categoriest.addEventListener('click', () => {

        categoriesm.style.animation = 'dis'.repeat(categoriesa) + 'appearing 0.3s linear  0s 1 normal both'
        if (categoriesa) { setTimeout(() => document.querySelector('#categoriesm').style.setProperty('display', 'none'), 301) }
        else {
          document.querySelector('#categoriesm').style.setProperty('display', 'block')
          setTimeout(() => {
            document.querySelector('#categoriesm').style.setProperty('display', 'block')

          }, 400)
        }
        if (window.scrollY > window.innerHeight - 30)
          categoriesm.style.backgroundColor = '#813300ff'
        else categoriesm.style.backgroundColor = '#81330000'
        if (langa) {
          langs.style.animation = 'dis'.repeat(langa) + 'appearing 0.3s linear  0s 1 normal both'
          if (langa) { setTimeout(() => document.querySelector('#langs').style.setProperty('display', 'none'), 301) }
          else {
            document.querySelector('#langs').style.setProperty('display', 'block')
            setTimeout(() => {
              document.querySelector('#langs').style.setProperty('display', 'block')

            }, 400)
          }
          if (window.scrollY > window.innerHeight - 30)
            langs.style.backgroundColor = '#813300ff'
          langa = !langa
        }
        categoriesa = !categoriesa
      })
      window.addEventListener('resize',()=>{
        categoriesa=false
        categoriesm.style.animation = ''
      })

      var navc = false
      window.onscroll = () => {

  if(this.state.lang!="ar"){
  let bb = window.scrollY
  if (bb < 115) {
    document.getElementById('rside').style.marginRight = "20px"
    if (this.props.account == null&&window.innerWidth>600) document.getElementById('langs').style.right = "229px"
    else document.getElementById('lang').style.right = this.state.ww<600?"80px":"240px"

        }
        else {
          document.getElementById('rside').style.marginRight = "0";
          if (this.props.account == null&&window.innerWidth>600) document.getElementById('langs').style.right = "209px"
          else document.getElementById('lang').style.right = this.state.ww<600?"100px":"260px"
        }
  }
else{
  document.getElementById('rside').style.marginRight = ""
 document.getElementById('langs').style.right = ""
 document.getElementById('lang').style.right =''

  let bb = window.scrollY
  if (bb < 115) {
    document.getElementById('rside').style.marginLeft = "20px"
    if (window.innerWidth>600) document.getElementById('langs').style.left = "229px"
    if(this.props.account != null)  document.getElementById('lang').style.left = this.state.ww<600?"80px":"240px"

        }
        else {
          document.getElementById('rside').style.marginLeft = "0";
          if (window.innerWidth>600) document.getElementById('langs').style.left = "209px"
          if(this.props.account != null) document.getElementById('lang').style.left = this.state.ww<600?"100px":"260px"
        }
}


        stlarr[0] = "#main::before {content: '';background-position: 0 -" + window.scrollY / 2.45 + "px;}#main::after,#scroll::after{content: '';opacity:" + (window.scrollY < window.innerHeight + 50 ? (window.scrollY * 0.5) / (window.innerHeight + 50) : 0.5) + ";}";
        stl.innerHTML = stlarr[0] + stlarr[1]
        document.head.appendChild(stl);

        if (window.scrollY > window.innerHeight - 30 && !navc) {
          navc = !navc; document.querySelector('#nav').style.setProperty('animation', 'colort 0.01s linear 0s 1 normal both')
          document.querySelector('#langs').style.setProperty('animation', 'colort 0.1s linear 0s 1 normal both')
          document.querySelector('#categoriesm').style.setProperty('animation', 'colort 0.1s linear 0s 1 normal both')
        }
        else if (window.scrollY < window.innerHeight - 30 && navc) {
          navc = !navc; document.querySelector('#nav').style.setProperty('animation', 'colorf 0.01s linear 0s 1 normal both')
          document.querySelector('#langs').style.setProperty('animation', 'colorf 0.1s linear 0s 1 normal both')
          document.querySelector('#categoriesm').style.setProperty('animation', 'colorf 0.1s linear 0s 1 normal both')
          setTimeout(() => { langs.style.backgroundColor = ''; categoriesm.style.backgroundColor = '' }, 300)

        }

        document.getElementById('scroll').style.top = (window.innerHeight - 50) / (document.documentElement.scrollHeight - window.innerHeight) * window.scrollY + 'px';
        if(window.scrollY>200&&aa[0].style.animationPlayState == ''){
          aa[0].style.animationPlayState = 'running'
          aa[1].style.animationPlayState = 'running'
          aa[2].style.animationPlayState = 'running'
        }if(window.scrollY>window.innerHeight-100&&aa[3].style.animationPlayState == ''){
          aa[3].style.animationPlayState = 'running'
          aa[4].style.animationPlayState = 'running'
          aa[5].style.animationPlayState = 'running'
        }if(window.scrollY>window.innerHeight+100&&aa[6].style.animationPlayState == ''){
          aa[6].style.animationPlayState = 'running'
          aa[7].style.animationPlayState = 'running'
          aa[8].style.animationPlayState = 'running'
        }
      

}

      document.getElementById('scroll').style.top = (window.innerHeight - 50) / (document.documentElement.scrollHeight - window.innerHeight) * window.scrollY + 'px'


      
    }, 100);

    if (localStorage.getItem('wel')) {
      localStorage.removeItem('wel')
      setTimeout(() => {
        document.getElementById('note').style.display = 'block'
        document.getElementById('note').style.animationName = 'appear'
        document.getElementById('note').style.animationDirection = 'normal'

      }, 1000)
      setTimeout(() => {
        document.getElementById('note').style.animationName = 'disappear'
        


      }, 5000)
    }
    

    var shouldPlay;
    localStorage.setItem('ar','*')
  }

  componentWillUnmount() {
    clearInterval(this.ss)

  }
  handleLanguageChange = (language) => {
    const { i18n } = this.props;
    i18n.changeLanguage(language);
    this.setState({lang:language})
    document.querySelector('#lang').click()
    if(language=='ar'){
      document.querySelectorAll("[rtl='false']").forEach((a)=>{
a.setAttribute('rtl','true')
    });
    document.getElementById('mg').style.position='absolute'
    document.getElementById('mg').style.top='3px'
    document.getElementById('searchbox').placeholder="بحث في كل المنتجات"
   document.querySelector('#categoriesm').style.setProperty('right', "" + window.innerWidth / 2 -240 + 'px')
  document.getElementById('footertext').innerHTML='جميع حقوق النشر محفوظة'
  document.getElementById('lists').style.marginTop='0'
  document.getElementById('lang').style.right=''
  document.querySelector('#lists').style.setProperty('right', "" + window.innerWidth / 2 - 235 + 'px')
let aaa=document.getElementsByClassName(s.article)
if(window.innerWidth<1210){
  document.querySelector('#lists').style.setProperty('right', "" + window.innerWidth / 2 - 25 + 'px')
  document.querySelector('#categoriesm').style.setProperty('right', "" + window.innerWidth / 2 -40 + 'px')
   
}
if(window.innerWidth<875){
  document.querySelector('#lists').style.setProperty('right', '70px')
  document.querySelector('#categoriesm').style.setProperty('right', '105px')


}
for(let a of aaa)
  a.innerHTML='لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب حروف عينة." (Letraset) التي تحوي مقاطع لوريم إيبسوم، ومؤخرًا مع برامج النشر الإلكتروني مثل ألدوس بايج ماكر (Aldus PageMaker) والتي تحوي أيضًا نسخًا من نص لوريم إيبسوم.'.split(' ').sort(() => 0.5 - Math.random()).reduce((a,b)=>a+' '+b)


}
 else{ document.querySelectorAll("[rtl='true']").forEach((a)=>{
  a.setAttribute('rtl','false')
      });
      document.getElementById('mg').style.position=''
      document.getElementById('mg').style.top=''
  document.getElementById('lang').style.left=''

      document.getElementById('searchbox').placeholder="Search All Products"
     document.querySelector('#categoriesm').style.setProperty('left', "" + window.innerWidth / 2 - 155 + 'px')
  document.getElementById('lists').style.marginTop=''
     document.getElementById('footertext').innerHTML='All rights reserved'
     document.getElementById('lists').style.marginTop=''
     document.querySelector('#lists').style.setProperty('left', "" + window.innerWidth / 2 - 150 + 'px')
   
     if(window.innerWidth<1210){
      document.querySelector('#lists').style.setProperty('left', "" + window.innerWidth / 2 - 50 + 'px')
      document.querySelector('#categoriesm').style.setProperty('left', "" + window.innerWidth / 2 -85 + 'px')
       
   }
   if(window.innerWidth<875){
    document.querySelector('#lists').style.setProperty('left', '70px')
    document.querySelector('#categoriesm').style.setProperty('left','105px')
   }



  let aaa=document.getElementsByClassName(s.article)
  aaa[0].innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae consequuntur eum soluta doloribus? Dignissimos magni inventore facilis pariatur unde. Repellendus sed excepturi eum provident delectus vel odio, odit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at possimus ipsa minima omnis totam rem similique nihil nam nostrum? Asperiores praesentium repellat excepturi id cumque modi dolores ut architecto'
aaa[1].innerHTML='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui consequuntur enim, nobis dolores maxime voluptatum natus tempore asperiores fuga. Totam adipisci cum repellat blanditiis fuga! Quidem accusantium aut unde! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam a, cum quo inventore maxime. Fuga error debitis beatae laboriosam sapiente impedit! Esse impedit itaque iste placeat molestiae molestias quibusdam'    
aaa[2].innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio nesciunt molestiae magni animi corrupti, quasi vitae in est fugit autem numquam amet iure, veniam, magnam blanditiis? Culpa, ipsam expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident dolorem quo aliquam harum quasi corporis, sit iste nisi odit consequatur quod reiciendis quisquam quam ipsa minima unde inventore itaue!'
}

}
  render() {
    const { t, i18n } = this.props;
    const isRTL = i18n.language === 'ar';

    return (
      <Fragment>
        <Helmet>
          <title>
            {t('Home')} | Style Shop
          </title>
          <meta name="google-site-verification" content="c_o8YYYgGv2-yxxHoM0DBYSVNqLCzyU2rJVUw92jkfA" />
          <meta name='description' content='We have a lot of products to view, discover the fashion now!consectetur adipisicing elit. Eligendi dignissimos at, porro voluptatum dolore facere pariatur repudiandae adipisci nostrum.' />
          <meta name="keywords" content='fashion, discover, clothes, shoes, electronics, category, style shop, ecommerce, buy, search, shopping'/>
          <link rel='canonical' href={window.location.href} />
        </Helmet>
        <div rtl='false'>  <Scroll /></div>
          <nav id='nav' rtl='false'>
          <img alt='Website logo'  className={s.logo} id='logo' src="./7d33433b660792aa4762d6289055ef39.png" />
   <Search mode="All Products" />
          <ul className={s.lists} id="lists">{this.state.ww < 1210 ? <Fragment>

{this.state.ww<875&&  <li><i className="fa-thin fa-magnifying-glass" onClick={()=>{document.getElementById('search').style.display=''; document.getElementById('searchbox').focus()}}></i></li>}
            <li className={s.categoriest} ><i id="categoriest" class="fa-thin fa-cards-blank"></i></li>
            <li><Link to="/purchases"  className={s.purchases}><i class="fa-thin fa-cart-shopping"></i></Link></li>
            <li><Link to="/about" ><i class="fa-thin fa-info"></i></Link></li>
            <li>  <Link to="/contact" className={s.contact} id="contact" ><i class="fa-thin fa-phone"></i></Link></li>
          </Fragment>
            :
            <Fragment>
              <li className={s.categoriest} id="categoriest">{t('Categories')}</li>
              <li><Link to="/purchases" className={s.purchases}>{t('Purchases')}</Link></li>
              <li><Link to="/about" >{t('About')}</Link></li>
              <li><Link to="/contact" className={s.contact} id="contact">{t('Contact Us')}</Link></li>
            </Fragment>
          }

          </ul>

          <div className={s.rside} id="rside">

            <i id="lang" className={`${s.lang} fa-thin fa-globe`}></i>

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
                <Fragment><Link to="/login" className={s.log} id="log">{t('Log in')}</Link>
                  <div className={s.averline} id="aver-line"></div>
                  <Link to="/signup" className={s.sign} id="sign">{t('Sign up')}</Link></Fragment>}

            </div>
          </div>
          <div className={s.langs} id="langs" ><div onClick={()=>{this.handleLanguageChange('en')}} className={s.eng} id="eng">{t('English')}</div><div className={s.lhorline} id="lhor-line"></div><div className={s.ar} id="ar" onClick={()=>{this.handleLanguageChange('ar')}}>{t('Arabic')}</div></div>
          <Catalang>catm</Catalang>

          <div className={s.note} id='note'>{t('Wel')}</div>
        </nav>
        <main rtl='false'>

          <div className={s.main} id="main">
            <h4 className={s.video} id='videoblock1'><video id='video1' playsInline="playsinline" src={`${'./videos/'}${this.state.randvids[0]}`} muted /></h4>
            <h4 className={s.video} id='videoblock2'><video id='video2' playsInline="playsinline" src={`${'./videos/'}${this.state.randvids[1]}`} muted /></h4>
            <h4 className={s.video} id='videoblock3'><video id='video3' playsInline="playsinline" src={`${'./videos/'}${this.state.randvids[2]}`} muted /></h4>
            <div>{t('Discover the')} <span>{t('fashion')}</span></div>
            <i id="arrow" className="fa-thin fa-chevron-down"></i>
            <h4 onClick={this.scroll} className={s.dscroll}></h4>
          </div>

          <div className={s.categoriestitle} id="categories-title">
            <div className={s.fchorline} id="fchor-line"></div>
            <span>{t('Our Categories')}</span>
            <div className={s.schorline} id="schor-line"></div>
          </div>

          <div className={s.categories} id="categories">
            <div className={s.row}>

              <div className={`${s.clothes}`}>
                <div className={`${s.clothes} ${s.title}`} id="fcategory">1. <Categories id='1' /></div>
                <div className={`${s.clothes} ${s.article}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae consequuntur eum soluta doloribus? Dignissimos magni inventore facilis pariatur unde. Repellendus sed excepturi eum provident delectus vel odio, odit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at possimus ipsa minima omnis totam rem similique nihil nam nostrum? Asperiores praesentium repellat excepturi id cumque modi dolores ut architecto</div>
                <Link to="/clothes" className={`${s.clothes} ${s.goto}`}>{t('Go to clothes section')} <i className="fa-thin fa-arrow-right-long"></i></Link>
              </div>
              <div className={`${s.cphotos} ${s.part}`} id='cphotos'>

                <img alt='First clothes photo' className={`${s.cimg}`} id='cimg' onError={(e) => { e.target.src = 'https://placehold.co/400x400/' + 'ABCD'[Math.floor(Math.random() * 4)] + 'ABCDEF'[Math.floor(Math.random() * 6)] + Math.floor(Math.random() * 7) + Math.floor(Math.random() * 8) + '22/ghostwhite/png?text=Style+Shop%0A+%0ANo+image&font=raleway' }} />
                <Categories tagId='c' img='1' />
                <img alt='Second clothes photo' className={`${s.scimg} ${s.part}`} id='scimg' onError={(e) => { e.target.src = 'https://placehold.co/400x400/' + 'ABCD'[Math.floor(Math.random() * 4)] + 'ABCDEF'[Math.floor(Math.random() * 6)] + Math.floor(Math.random() * 7) + Math.floor(Math.random() * 8) + '22/ghostwhite/png?text=Style+Shop%0A+%0ANo+image&font=raleway' }} />
                <Products id='1' tagId='scimg' />
                <img alt='Third clothes photo' className={`${s.tcimg} ${s.part}`} id='tcimg' onError={(e) => { e.target.src = 'https://placehold.co/400x400/' + 'ABCD'[Math.floor(Math.random() * 4)] + 'ABCDEF'[Math.floor(Math.random() * 6)] + Math.floor(Math.random() * 7) + Math.floor(Math.random() * 8) + '22/ghostwhite/png?text=Style+Shop%0A+%0ANo+image&font=raleway' }} />
                <Products id='1' tagId='tcimg' />
              </div>
            </div>
            <div className={s.row}>
              <div className={`${s.shoes}`}>
                <div className={`${s.shoes} ${s.title}`} id="scategory">2. <Categories id='4' /></div>
                <div className={`${s.shoes} ${s.article}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui consequuntur enim, nobis dolores maxime voluptatum natus tempore asperiores fuga. Totam adipisci cum repellat blanditiis fuga! Quidem accusantium aut unde! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam a, cum quo inventore maxime. Fuga error debitis beatae laboriosam sapiente impedit! Esse impedit itaque iste placeat molestiae molestias quibusdam</div>
                <Link to='/shoes' className={`${s.shoes} ${s.goto}`}>{t('Go to Shoes section')} <i className="fa-thin fa-arrow-right-long"></i></Link>
              </div>

              <div className={`${s.sphotos} ${s.part}`}>
                <img alt='First shoes photo' className={`${s.simg}`} id='simg' />
                <Categories tagId='s' img='4' />
                <img alt='Second shoes photo' className={`${s.ssimg} ${s.part}`} id='ssimg' />
                <Products id='4' tagId='tsimg' />
                <img alt='Third shoes photo' className={`${s.tsimg} ${s.part}`} id='tsimg' />
                <Products id='4' tagId='ssimg' />
              </div>
            </div>
            <div className={s.row}>

              <div className={`${s.electronics}`} >
                <div className={`${s.electronics} ${s.title}`} id="tcategory">3. <Categories id='2' /></div>
                <div className={`${s.electronics} ${s.article}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio nesciunt molestiae magni animi corrupti, quasi vitae in est fugit autem numquam amet iure, veniam, magnam blanditiis? Culpa, ipsam expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident dolorem quo aliquam harum quasi corporis, sit iste nisi odit consequatur quod reiciendis quisquam quam ipsa minima unde inventore itaue!</div>
                <Link to='/electronics' className={`${s.electronics} ${s.goto}`}>{t('Go to electronics section')} <i className="fa-thin fa-arrow-right-long"></i></Link>
              </div>
              <div className={`${s.cphotos} ${s.part}`}>
                <img alt='First electronics photo' className={`${s.cimg}`} id='eimg' />
                <Categories tagId='e' img='2' />
                <img alt='Second electronics photo' className={`${s.scimg} ${s.part}`} id='seimg' />
                <Products id='2' tagId='seimg' />
                <img alt='Third electronics photo' className={`${s.tcimg} ${s.part}`} id='teimg' />
                <Products id='2' tagId='teimg' />
              </div>
            </div></div>
          <Products no='true' id='1' />
        </main>
       <span rtl='false'>
         <Footer />
        </span>

        </Fragment>
        )
      }
    }
const mapStateToProps = (state) => {
  return {
    account: state.accountInfo.account
  }
}
const mapDispatchToProps = {
  setInfo,
}
export default compose(withTranslation(),connect(mapStateToProps, mapDispatchToProps))(Home);