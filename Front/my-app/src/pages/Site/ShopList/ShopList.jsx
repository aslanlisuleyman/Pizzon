import React, { useContext, useState } from 'react'
import "./ShopList.scss"
import { Link,useNavigate } from 'react-router-dom'
import MainContext from '../../../context/context'
const ShopList = () => {
  
  const {filter,addBasket,searchHandler,sortAz,sortZa,sortprice}=useContext(MainContext)
  const [activeButton, setActiveButton] = useState('ALL');
  const handleClick = (button) => {
    setActiveButton(button);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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
            Shop List
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
              Shop List
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


<div>
<div className='filter'>
<div>
  <button onClick={(e)=>{
                    sortprice(e.target.value)
                }}><i class="fa-solid fa-sort"></i>            PRICE</button>
</div>


<input onChange={(e)=>{
                    searchHandler(e.target.value)
                }} type="text" placeholder="Search ..." name="text" className="intp"></input>



<div className='azs'>
  <p>Showing all  results</p>
  <div className='az'>
  <button onClick={(e)=>{
                    sortAz(e.target.value)
                }} className="buttm">
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  A-Z
</button>
<button onClick={(e)=>{
                    sortZa(e.target.value)
                }} className="buttm">
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Z-A
</button>
  </div>

</div>

</div>


<div className='card2'>
{activeButton === 'ALL' && (
          filter.map((item, index) => {
            if(item.brand=="all"){
               return(
            <div className='card2__card' key={index}>
               <Link to={`/${item._id}`} onClick={scrollToTop} className='ma'>
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
            <Link to={`/${item._id}`} onClick={scrollToTop} className='ma'>
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
               <Link to={`/${item._id}`} onClick={scrollToTop} className='ma'>
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
               <Link to={`/${item._id}`} onClick={scrollToTop} className='ma'>
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
               <Link to={`/${item._id}`} onClick={scrollToTop} className='ma'>
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



</div>
<div className='aspo'>
      <button
        className={activeButton === 'ALL' ? 'active' : ''}
        onClick={() => handleClick('ALL')}
        >
        1
      </button>
      <button
        className={activeButton === 'SLIDES' ? 'active' : ''}
        onClick={() => handleClick('SLIDES')}
      >
        2
      </button>
      <button
        className={activeButton === 'PIZZA' ? 'active' : ''}
        onClick={() => handleClick('PIZZA')}
      >
        3
      </button>
      <button
        className={activeButton === 'OFFERS' ? 'active' : ''}
        onClick={() => handleClick('OFFERS')}
      >
        4
      </button>
      <button
        className={activeButton === 'PASTA' ? 'active' : ''}
        onClick={() => handleClick('PASTA')}
      >
        5
      </button>
    </div>

    </div>
  )
}

export default ShopList