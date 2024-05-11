import React, { useContext, useEffect, useState } from 'react'
import "./CheckOut.scss"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import MainContext from '../../../context/context';
const CheckOut = () => {


  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")
  const [messag,setMessag] = useState("")
  const [subjec,setSubjec] = useState("")
  const [country,setCountry] = useState("")
  
  const [company,setCompany] = useState("")
  const sendMail = ()=>{
    
    axios.get("http://localhost:3000///",{

    params:{
      email,
      message,
      country,
      company,
      subjec,
      messag

    }
    }).then(()=>{
      console.log("failure")
    }).catch(()=>{
      console.log("success")
      
      
    })
    

  }





  const [orders, setOrders] = useState([]);
  
  const {handleInc,handleDec,basket,deleteBasket,homeCounter}=useContext(MainContext)
  useEffect(() => {
    axios.get("http://localhost:3000/order").then(res => {
      setOrders(res.data);
    });
  }, [])

  const handleCancelOrder = (orderId) => {
    axios.delete(`http://localhost:3000/order/${orderId}`)
      .then(res => {
        // Remove the deleted order from the local state
        setOrders(orders.filter(order => order._id !== orderId));
      })
      .catch(err => {
        console.error('Error deleting order:', err);
      });
  };
 
  
 const publishKey="pk_test_51OmafmGEW2D85ow9pZkYUis1YumtCQGHH5YGz4YQdv6VkYDVJ6GKugQ76eRuj8TIK6L4UAaJt6731hU4tTBm3Xby00LvDJMEJ1"
 // const createOrder = (items, totalPrice) => {
 //     axios.post("http://localhost:3000/orders", { items: items, totalPrice: totalPrice, status: "pending" }).then(res => {
 //         console.log(res)
 //     })
 // }

 const handleCheckOut= async()=>{


  axios.get("http://localhost:3000///",{

  params:{
    email,
    message,
    country,
    company,
    subjec,
    messag

  }
  }).then(()=>{
    console.log("failure")
  }).catch(()=>{
    console.log("success")
    
    
  })
  

  console.log("salam")
  localStorage.removeItem("counter")
  localStorage.removeItem("basket")
  
     const productsContent={
         products:basket
     }
     const stripe= await loadStripe(publishKey)

     
   const res = await axios.post(`http://localhost:3000/payment`, productsContent);
 //   console.log(res.)
 //   if (!res.ok) {
 //     console.log("Ödeme işlemi başarısız oldu.");
 //   }
 //   const session = await res.data.json();
console.log(res)
   const result = await stripe.redirectToCheckout({
     sessionId: res.data.id,
   });
console.log(result)
   if (result.error) {
     throw new Error(result.error.message);
   }
 }
  
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Checkout
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
              Checkout
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

<section class="checkout ptb-150 snipcss-mRGGx">
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-12">
          <div class="billing-detail">
            <h4 class="mb-20">
              Billing Details
            </h4>
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input onChange={(e)=>setMessage(e.target.value)} type="text" name="name" placeholder="First Name" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input onChange={(e)=>setMessag(e.target.value)} type="text" name="name" placeholder="Last Name" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input  onChange={(e)=>setCompany(e.target.value)} type="text" name="name" placeholder="Company Name" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="Email Address" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input onChange={(e)=>setSubjec(e.target.value)} type="text" name="text" placeholder="Phone No" class="form-control" required=""/>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="form-group">
                  <input onChange={(e)=>setCountry(e.target.value)} type="text" name="text" placeholder="Country" class="form-control" required=""/>
                </div>
              </div>
              
             
             
             
              <div class="col-md-12">
                <div class="form-group">
                 
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12">
          {orders.map((order,index)=>{
            return(
<>


<div class="your-order">
   
      <div key={index}>
        <h4 class="mb-20">Your Order</h4>
        {order.items.map((item, itemIndex) => (
          <div key={itemIndex} class="product-box">
            <div class="product-img">
              <a href="shop-detail.html">
                <img src={item.image} alt="Item Image" />
              </a>
            </div>
            <div class="product-detail">
              <div><a  class="pro-title">
                {item.title}
              </a></div>
              
              <div class="qty-box">
                <span class="price">${item.price}.00</span>
                

              </div>

              
            </div>


          </div>


        ))}
      </div>
    <div style={{marginLeft:'20px'}}  onClick={() => handleCancelOrder(order._id)}className='btn imtina btn-warning'>Imtina et</div>
  
</div>

          <div class="checkout-total">
            <ul>
              <li>
                <span class="subtotal">
                  Subtotal
                </span>
                <span class="subtotal-amount">
                  ${order.totalPrice}.00
                </span>
              </li>
              <li>
                <span class="subtotal">
                  Shipping Cost
                </span>
                <span class="subtotal-amount">
                  $00.00
                </span>
              </li>
              <li>
                <span class="grand-total">
                  Total
                </span>
                <span class="total-amount">
                  ${order.totalPrice}.00
                </span>
              </li>
            </ul>
          </div>
         

</>

            )
          })}
         <div class="pay-method">
            <h4 class="mb-20">
              Payment Method
            </h4>
            <ul>
             
              <li>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="payment" id="check_payments"/>
                  <label class="form-check-label" for="check_payments">
                    Direct bank transfer
                  </label>
                </div>
              </li>
              
              <li>
                <button onClick={(e) => {
                  e.preventDefault()
                handleCheckOut()
            }} class="btn-ct">
                  Payment
                </button>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </form>
  </div>
</section>

    </div>
  )
}

export default CheckOut