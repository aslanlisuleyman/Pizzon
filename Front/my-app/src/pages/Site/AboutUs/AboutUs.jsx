import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./AboutUs.scss"
import $ from 'jquery'; // Owl Carousel'ın jQuery'ye bağımlı olduğu unutulmamalıdır
import MainContext from '../../../context/context';
const AboutUs = () => {
  const {all}=useContext(MainContext)
  const [activeButtonn, setActiveButton] = useState('FIRST');
  const handleClick = (button) => {
    setActiveButton(button);
  };
  
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            About Us
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="bread-crumb wow fadeInRight animated style-5pgFQ" id="style-5pgFQ">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              About Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="black-jamun wow fadeInLeft animation-delay-5 animated style-pz118" id="style-pz118">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/black-jamun.png" alt="black-jamun"/>
  </div>
  <div class="onion-img wow fadeInUp animation-delay-6 animated style-AoHRr" id="style-AoHRr">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png" alt="onion"/>
  </div>
  <div class="tamato-img wow fadeInUp animation-delay-7 animated style-FA7WM" id="style-FA7WM">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/tamato.png" alt="tamato"/>
  </div>
  <div class="leaf-img wow fadeInRight animation-delay-8 animated style-KvoZJ" id="style-KvoZJ">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-leaf.png" alt="banner-leaf"/>
  </div>
</section>

<section class="about-us ptb-150 overflow-h snipcss-xqemk">
  <div class="container">
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12 d-flex">
        <div class="section-heading p-0 max-width-660 wow fadeInLeft animated style-gzPSN" id="style-gzPSN">
          <h5 class="sub-title">
            Our Story
          </h5>
          <h2 class="mb-20">
            The Story About Pizzon
          </h2>
          <p>
            Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor incididunt labore et magna aliqua.
          </p>
        </div>
        <div class="abt-content wow fadeInUp animation-delay-6 animated style-HODEX" id="style-HODEX">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="abt-content-inner pt-50">
                <h4 class="mb-15">
                  Our Family Name
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et exercitation.
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="abt-content-inner pt-50">
                <h4 class="mb-15">
                  Our Journey
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et exercitation.
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="abt-content-inner pt-50">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/abt-img-1.jpg" alt="abt-img-1" class="radius-40"/>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="abt-content-inner pt-50">
                <h4 class="mb-15">
                  Food and Fun
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eius exercitation.
                </p>
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/abt-logo.png" alt="abt-logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12 d-flex">
        <div class="abt-img-2 full-img wow fadeInRight animated style-NljUq" id="style-NljUq">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/abt-img-2.jpg" alt="abt-img-2" class="radius-40"/>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="our-strength position-r pt-150 pb-120 mb-150 bg-yellow overflow-h snipcss-7cQqE">
  <div class="strength-vacter wow fadeInRight animation-delay-5 animated style-Ie44w" id="style-Ie44w">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/strength-vacter.png" alt="Vacter Image"/>
  </div>
  <div class="container">
    <div class="section-heading wow fadeInUp animated style-xMNmJ" id="style-xMNmJ">
      <h5 class="sub-title">
        Our Strength
      </h5>
      <h2>
        Why We Are The Best?
      </h2>
    </div>
    <div class="row">
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-2KGnP" id="style-2KGnP">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/all-kinds-of-foods.png" alt="All kinds of Foods"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            All kinds of Foods
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-waSUe" id="style-waSUe">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/fresh-foods.png" alt="Fresh Foods"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            Fresh Foods
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-SOrOY" id="style-SOrOY">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/best-taste.png" alt="Best Taste"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            Best Taste
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-ori5n" id="style-ori5n">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/on-time-delivery.png" alt="On Time Delivery"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            On Time Delivery
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="feeddback-part position-r mb-150 overflow-h snipcss0-0-0-1 snipcss-aaBv9">
  <div class="feeddback-vacter wow fadeInLeft animation-delay-5 animated snipcss0-1-1-2 style-5AFpT" id="style-5AFpT">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/leaf.png" alt="Vacter Image" class="snipcss0-2-2-3"/>
  </div>
  <div class="container snipcss0-1-1-4">
    <div class="section-heading wow fadeInUp animated snipcss0-2-4-5 snipcss0-0-0-1 style-334PJ" id="style-334PJ">
      <h5 class="sub-title snipcss0-3-5-6 snipcss0-1-1-2">
        Customer Feedback
      </h5>
      <h2 class="snipcss0-3-5-7 snipcss0-1-1-3">
        Client Testimonials
      </h2>
    </div>
    <div>

     
<div className='card5'>
{activeButtonn === 'FIRST' && (
          all.map((item, index) => {
            if(item.brand=="first"){
               return(
            <div className='card5__card' key={index}>
               <div className='ma'>
                <img className='il' src={item.image} alt="" />
              </div>
              <div className='card5__tp'>
                <p className='p1'>{item.title}</p>
               
              </div>
              <div className='card5__desc'>{item.desc}</div>
              <div className='card5__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              
              <div class="btt menu-item-order snipcss-DQMsl">
  
</div>
            </div>
          )}
            }
           )
        )}
        {activeButtonn === 'TWO' && (
          all.map((item, index) =>{
            if(item.brand=="two"){
     return(
            <div className='card5__card' key={index}>
            <div className='ma'>
             <img className='il' src={item.image} alt="" />
           </div>
           <div className='card5__tp'>
             <p className='p1'>{item.title}</p>
             
           </div><div className='card5__desc'>{item.desc}</div>
           <div className='card5__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
           
           <div class="btt menu-item-order snipcss-DQMsl">

</div>
         </div>
          )}
            }
          )
      
        )}

</div>


    </div>
    <div class="testimonials-slider scr owl-carousel wow fadeInUp owl-loaded owl-drag animated snipcss0-2-4-8 style-zc9cR" id="style-zc9cR">
     
      <div class="owl-nav snipcss0-3-8-331">
        <button type="button" role="presentation" class="owl-prev snipcss0-4-331-332"className={activeButtonn === 'TWO' ? 'active' : ''}
        onClick={() => handleClick('TWO')} >
        
        <i style={{color:'white'}} class="fa-solid fa-chevron-right"></i>
        </button>
        <button type="button" role="presentation" class="owl-next snipcss0-4-331-334" className={activeButtonn === 'FIRST' ? 'active' : ''}
        onClick={() => handleClick('FIRST')}>
        
        <i style={{color:'white'}} class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <div class="owl-dots disabled snipcss0-3-8-336">
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default AboutUs