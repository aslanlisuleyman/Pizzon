import React, { useState } from 'react'
import "./HomeStatic3.scss"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const HomeStatic3 = () => {
  
  const [email,setEmail] = useState()
  const [subject,setSubject] = useState()
  const [message,setMessage] = useState()
  const [messag,setMessag] = useState()
  const [subjec,setSubjec] = useState()
  const [date,setDate] = useState()
  
  const [guest,setGuest] = useState()
  const sendMail = ()=>{
    axios.get("http://localhost:3000//",{

    params:{
      email,
      message,
      guest,
      date,
      subjec,
      messag

    }
    }).then(()=>{
      console.log("failure")
      
    }).catch(()=>{
      console.log("success")
      window.location.reload();
      toast.success("Message send successfully", {
        position: "center", // Adjusted position to lowercase "center"
        zIndex: 121212999999999 
      });

    })

  }
  return (
    <div className='pza'>
        <section class="reservation-part left-padding mb-150 position-r overflow-h snipcss-VHeQ9 style-BHslN" id="style-BHslN">
  <div class="row align-items-center">
    <div class="col-xl-5 col-lg-6 col-md-12">
      <div class="section-heading section-heading-left wow fadeInLeft animated style-x3AtK" id="style-x3AtK">
        <h5 class="sub-title">
          Reservation
        </h5>
        <h2>
          Book A Table Now!
        </h2>
      </div>


      <div className='inim'>
<div>
<div className='rez'>
         <div>
            <input type="text" placeholder='Name*' onChange={(e)=>setMessag(e.target.value)}/> <br />
            <input type="text" placeholder='Phone*' onChange={(e)=>setSubjec(e.target.value)}/> <br />
            <input type="text" placeholder='Date*' onChange={(e)=>setDate(e.target.value)}/>
         </div>
         <div>
         <input type="text" placeholder='Email*' onChange={(e)=>setEmail(e.target.value)}/> <br />
            <input type="text" placeholder='Message*' onChange={(e)=>setMessage(e.target.value)}/><br />
            <input type="text" placeholder='Guest*' onChange={(e)=>setGuest(e.target.value)}/> 
         </div>
      </div>
        
        <div className='bnb'>

            <button onClick={sendMail}>BOOK NOW</button>
        </div>

      </div>
 <div class=" tc text-center">
      <div class="reservation-pizza position-r wow fadeInRight animated style-EkpjM" id="style-EkpjM">
        <div class="book-leaf book-leaf-1">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/leaf-1.png" alt="Leaf"/>
        </div>
        <div class="book-leaf book-leaf-2">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/leaf-2.png" alt="Leaf"/>
        </div>
        <div class="book-leaf book-leaf-3">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/leaf-3.png" alt="Leaf"/>
        </div>
        <img className='pz' src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/reservation-pizza.png" class="position-r" alt="Pizza"/>
      </div>
    </div>

        
      </div>

      
      


      
    </div>


    
   
  </div>
  <div class="book-jamun wow fadeInRight animation-delay-5 animated style-Upv79" id="style-Upv79">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/book-jamun.png" alt="Jamun"/>
  </div>
  <div class="book-leaf-big wow fadeInRight animation-delay-5 animated style-Q5yAj" id="style-Q5yAj">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/book-leaf.png" alt="Leaf"/>
  </div>
</section>

    </div>
  )
}

export default HomeStatic3