import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import MainContext from '../../../context/context'
import "./OurMenu.scss"
const OurMenu = () => {
  const {filter,addBasket}=useContext(MainContext)
  const [activeButton, setActiveButton] = useState('ALL');
  const handleClick = (button) => {
    setActiveButton(button);
  };
  const {all}=useContext(MainContext)
  const [activeButtonn, setActiveButtonn] = useState('FIRST');
  const handleClickk = (button) => {
    setActiveButtonn(button);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const navigate = useNavigate()
  const handleAddBasket = (item) => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        // If userName is not present, navigate to the login page
       navigate("/Login")
       window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
        ; // Adjust the path to your login page
        return; // Stop further execution
    }
    addBasket(item)
};
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Our Menu
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
              Our Menu
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
{/* 
<div className='aspop'>
  <button onClick={() => handleClick('ALL')}>ALL</button>
  <button  onClick={() => handleClick('SLIDES')}>SLIDES</button>
  <button onClick={() => handleClick('PIZZA')}>PIZZAS</button>
  <button onClick={() => handleClick('OFFERS')}>OFFERS</button>
  <button onClick={() => handleClick('PASTA')}>PASTA</button>
</div> */}
{/* <div className='aspop'>
  <button className='poas' style={{backgroundColor: activeButton === 'ALL' ? 'orange' : 'inherit',color: activeButton === 'ALL' ? 'white' : 'inherit'}} onClick={() => handleClick('ALL')}>ALL</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'SLIDES' ? 'orange' : 'inherit',color: activeButton === 'SLIDES' ? 'white' : 'inherit' }} onClick={() => handleClick('SLIDES')}>SLIDES</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'PIZZA' ? 'orange' : 'inherit' ,color: activeButton === 'PIZZA' ? 'white' : 'inherit'}} onClick={() => handleClick('PIZZA')}>PIZZAS</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'OFFERS' ? 'orange' : 'inherit',color: activeButton === 'OFFERS' ? 'white' : 'inherit'}} onClick={() => handleClick('OFFERS')}>OFFERS</button>
  <button className='poas'  style={{backgroundColor: activeButton === 'PASTA' ? 'orange' : 'inherit',color: activeButton === 'PASTA' ? 'white' : 'inherit',}} onClick={() => handleClick('PASTA')}>PASTA</button>
</div> */}
<div className='aspop'>
      <button
        className={activeButton === 'ALL' ? 'active' : ''}
        onClick={() => handleClick('ALL')}
      >
        ALL
      </button>
      <button
        className={activeButton === 'SLIDES' ? 'active' : ''}
        onClick={() => handleClick('SLIDES')}
      >
        SLIDES
      </button>
      <button
        className={activeButton === 'PIZZA' ? 'active' : ''}
        onClick={() => handleClick('PIZZA')}
      >
        PIZZAS
      </button>
      <button
        className={activeButton === 'OFFERS' ? 'active' : ''}
        onClick={() => handleClick('OFFERS')}
      >
        OFFERS
      </button>
      <button
        className={activeButton === 'PASTA' ? 'active' : ''}
        onClick={() => handleClick('PASTA')}
      >
        PASTA
      </button>
    </div>

<div className='card2'>
   
  {activeButton === 'ALL' && (
          filter.map((item, index) => {
            if(item.brand=="all"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                handleAddBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Add to Cart
  </a>
</div>
            </div>
          )}
            }
           )
        )}
        {activeButton === 'PIZZA' && (
          filter.map((item, index) =>{
            if(item.brand=="pizza"){
     return(
            <div className='card2__card' key={index}>
            <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
             <img className='il' src={item.image} alt="" />
           </Link>
           <div className='card2__tp'>
             <p className='p1'>{item.title}</p>
             <p className='p2'>${item.price}.00</p>
           </div>
           <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
           <div className='card2__desc'>{item.desc}</div>
           <div class="btt menu-item-order snipcss-DQMsl">
<a onClick={()=>{
                handleAddBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
 <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
 Order Now
</a>
</div>
         </div>
          )}
            }
          )
      
        )}
         {activeButton === 'SLIDES' && (
          filter.map((item, index) => {
            if(item.brand=="slides"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                handleAddBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}
         {activeButton === 'OFFERS' && (
          filter.map((item, index) => {
            if(item.brand=="offers"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                handleAddBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}
         {activeButton === 'PASTA' && (
          filter.map((item, index) => {
            if(item.brand=="pasta"){
               return(
            <div className='card2__card' key={index}>
               <Link onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={()=>{
                handleAddBasket(item)
            }} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}


</div>


    
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
        onClick={() => handleClickk('TWO')} >
        
        <i style={{color:'white'}} class="fa-solid fa-chevron-right"></i>
        </button>
        <button type="button" role="presentation" class="owl-next snipcss0-4-331-334" className={activeButtonn === 'FIRST' ? 'active' : ''}
        onClick={() => handleClickk('FIRST')}>
        
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

export default OurMenu