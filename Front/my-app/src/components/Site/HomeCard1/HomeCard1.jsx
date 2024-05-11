import React, { useContext } from 'react'
import "./HomeCard1.scss"
import MainContext from '../../../context/context'
import { Link , useNavigate} from 'react-router-dom'

const HomeCard1 = () => {
    const {filter,addBasket,setBasket}=useContext(MainContext)
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
    <div className='homecard1'>
      <div class="section-heading wow yaz fadeInLeft animated snipcss-oPLvb style-bOlRR" id="style-bOlRR">
  <h5 class="sub-title">
    Popular Dishes
  </h5>
  <h2>
    Browse Our Menu
  </h2>
</div>



<div className='card1'>
    {filter.map((item,index)=>{
      if(item.brand=="pizza"){
        return(
            <div className='card1__card' key={index}>
              <Link  onClick={scrollToTop} to={`/${item._id}`} className='ma'>
                <img className='il' src={item.image} alt="" />
              </Link>
              <div className='card1__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card1__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card1__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a onClick={() => handleAddBasket(item)} class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Add to Cart
  </a>
</div>


            </div>
        )
    }
      }
        )}

</div>


    </div>
  )
}

export default HomeCard1