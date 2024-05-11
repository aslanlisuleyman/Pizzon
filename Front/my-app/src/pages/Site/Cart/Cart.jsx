import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Cart.scss"
import MainContext from '../../../context/context'
import axios from 'axios';

const Cart = () => {
  const {handleInc,handleDec,basket,deleteBasket}=useContext(MainContext)
  let totalPrice=0

  
 const createOrder=()=>{
  const orderData = {
    customerName: "John Doe", // You can replace with dynamic data
    items: basket.map(item => item._id), // Assuming items array contains IDs
    totalPrice: totalPrice,
    status: 'Pending' // Or any default status
};
  
  
  axios.post("http://localhost:3000/order",orderData).then(res=>{
    console.log(res)
  })
 }

  return (
    <div>
       <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Cart
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
              Cart
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

<section class="cart ptb-150 snipcss-4QKgd">
  <div class="container">
    <div class="row">
      <div class="col-xl-8 col-lg-12 col-md-12">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="product-name">
                  Product
                </th>
                <th class="price">
                  Price
                </th>
                <th class="qty">
                  Quantity
                </th>
                <th class="total-price">
                  Total
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map((item,index)=>{
                  totalPrice += item.totalPrice
                  return(
                   <tr key={index}>
                <td class="product-name">
                  <div class="product-box">
                    <div class="product-img">
                      <a >
                        <img src={item.image} alt="Item Image"/>
                      </a>
                    </div>
                    <div class="product-detail">
                      <a  class="pro-title">
                        {item.title}
                      </a>
                    </div>
                  </div>
                </td>
                <td class="price">
                  ${item.price}.00
                </td>
                <td class="qty">
                  <div class="number">
                    <span class="minus">
                      <i onClick={()=>{
        handleDec(item)
      }}  class="fa fa-angle-left" aria-hidden="true">
                      </i>
                    </span>
                    <span className='coun'>{item.count}</span>
                    <span class="plus">
                      <i onClick={()=>{
        handleInc(item)
      }} class="fa fa-angle-right" aria-hidden="true">
                      </i>
                    </span>
                  </div>
                </td>
                <td class="price">
                  ${item.totalPrice}.00
                </td>
                <td class="remove">
                  <a class="item-remove" onClick={()=>{
deleteBasket(item._id)
      }}>
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/delete.png" alt="delete"/>
                  </a>
                </td>
              </tr>
                  )
                }
              )}
              
              
             
            </tbody>
          </table>
        </div>
        
      </div>
      <div class="col-xl-4 col-lg-12 col-md-12">
        <div class="cart-totals">
          <h4 class="cart-title">
            Cart Total
          </h4>
          <table class="table">
            <tbody>
              <tr>
                <td>
                  Item(s) Subtotal
                </td>
                <td class="right-price">
                  ${totalPrice}.00
                </td>
              </tr>
              <tr>
                <td>
                  Shipping Cost
                </td>
                <td class="right-price">
                  $00.00
                </td>
              </tr>
              <tr>
                <td class="totals">
                  Order Total
                </td>
                <td class="right-price totals">
                  ${totalPrice}.00
                </td>
              </tr>
            </tbody>
          </table>
          <div class="checkout-btn text-center">
            <Link to='/CheckOut' onClick={createOrder}  class="btn-ct btn-small"  >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Cart