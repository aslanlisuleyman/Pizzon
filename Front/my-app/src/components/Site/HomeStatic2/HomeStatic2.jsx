import React, { useContext, useState } from 'react'
import "./HomeStatic2.scss"
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'
const HomeStatic2 = () => {
  const {all}=useContext(MainContext)
  const [activeButtonn, setActiveButton] = useState('FIRST');
  const handleClick = (button) => {
    setActiveButton(button);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className='hs2'>

<section class="our-story brr right-padding position-r mb-150 overflow-h snipcss-YXkPv style-gN9cP" id="style-gN9cP">
  <div class="black-jamun ff wow fadeInLeft animation-delay-5 animated style-48ObW" id="style-48ObW">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/black-jamun.png" alt="Vacter Image"/>
  </div>
  <div class="ff story-onion wow fadeInUp animated style-by3AJ" id="style-by3AJ">
    <img className='or' src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png" alt="Vacter Image"/>
  </div>
  <div class="our-story-inner">
    <div class=" align-items-center wor">
      <div class=" wo wow fadeInLeft order-md_2 animated style-GpvIA " id="style-GpvIA">
        <div class="story-img bmw text-center">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/our-story.png" alt="Our Story"/>
        </div>
      </div>
      <div class=" wow wr fadeInRight order-md_1 animated style-IGI1Y" id="style-IGI1Y">
        <div class="section-heading section-heading-right">
          <h5 class="sub-title">
            Our Story
          </h5>
          <h2>
            The Pizzon Has Excellent Of <br /> Quality Foods
          </h2>
        </div>
        <div class="story-content md-mb-40">
          <div class="our-story-desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <Link onClick={scrollToTop} to="/AboutUs" class="btn-ct right-arrow">
            Read More 
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right.png" alt="right icon"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="feeddback-part position-r mb-150 overflow-h lkl snipcss0-0-0-1 snipcss-aaBv9">
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

export default HomeStatic2