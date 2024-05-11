import React, { useState } from 'react'
import "./Contact.scss"
import { Link } from 'react-router-dom'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  

  const [email,setEmail] = useState()
  const [subject,setSubject] = useState()
  const [message,setMessage] = useState()
  const [messag,setMessag] = useState()
  const [subjec,setSubjec] = useState()
  const sendMail = ()=>{
    axios.get("http://localhost:3000/",{

    params:{
      email,
      message,
      subject,
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
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-xirZs cont">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-5gJJv" id="style-5gJJv">
          <h1 class="sub-banner-title">
            Contact Us
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="bread-crumb wow fadeInRight animated style-gN2Oe" id="style-gN2Oe">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="black-jamun wow fadeInLeft animation-delay-5 animated style-2wx5X" id="style-2wx5X">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/black-jamun.png" alt="black-jamun"/>
  </div>
  <div class="onion-img wow fadeInUp animation-delay-6 animated style-ck1s7" id="style-ck1s7">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png" alt="onion"/>
  </div>
  <div class="tamato-img wow fadeInUp animation-delay-7 animated style-pyMEA" id="style-pyMEA">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/tamato.png" alt="tamato"/>
  </div>
  <div class="leaf-img wow fadeInRight animation-delay-8 animated style-OJr16" id="style-OJr16">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-leaf.png" alt="banner-leaf"/>
  </div>
</section>





<div className='mi'>
  <div>
<div class="section-heading section-heading-left wow fadeInLeft animated snipcss-oHnZ5 style-GVefp" id="style-GVefp">
  <h5 class="sub-title">
    Consultation
  </h5>
  <h2>
    Send Us Message
  </h2>
</div>



<div>

  

     <div className='con'>


    <div className='int'>
      <input type="text" placeholder='Website' onChange={(e)=>setSubject(e.target.value)}/>
      <input type="text" placeholder='Phone*' onChange={(e)=>setSubjec(e.target.value)}/>
    </div>
    <div className='int'>
    <input type="email" placeholder='Email*' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='Name*' onChange={(e)=>setMessag(e.target.value)}/>
    </div>
  </div>




  <div>
    <div>
      <textarea placeholder='Write Message' onChange={(e)=>setMessage(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
    </div>
   

   <button onClick={sendMail}>SEND MESSAGE</button>
  </div>

 



</div>



  </div>


  <div>
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cons-img.jpg" alt="" />
  </div>


</div>

<div className='iframe' >
      <iframe
        title="Baku Location"
        style={{ width: '100%', height: '500px' }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.352571622814!2d49.8714482153162!3d40.40926367936324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307045d9a3a89b%3A0x7efc16b8105fb81!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1605814183695!5m2!1sen!2sus"
        
      ></iframe>
    </div>


<section class="contact-info pt-150 pb-100 overflow-h snipcss-j3GM2">
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="contact-info-box wow fadeInUp animated style-AxidO" id="style-AxidO">
          <div class="contact-img">
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/location.png" alt="location"/>
          </div>
          <div class="contact-content">
            <h4 class="mb-15">
              Location
            </h4>
            <ul>
              <li>
                155 Main Street, 2nd Floor New York City
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="contact-info-box wow fadeInUp animated style-d1BFG" id="style-d1BFG">
          <div class="contact-img">
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/mail.png" alt="mail"/>
          </div>
          <div class="contact-content">
            <h4 class="mb-15">
              Email Address
            </h4>
            <ul>
              <li>
                <a href="mailto:Support@gmail.com">
                  Support@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:Contact@gmail.com">
                  Contact@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="contact-info-box wow fadeInUp animated style-KegCJ" id="style-KegCJ">
          <div class="contact-img">
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/call.png" alt="call"/>
          </div>
          <div class="contact-content">
            <h4 class="mb-15">
              Contact Us
            </h4>
            <ul>
              <li>
                <a href="tel:+49123456789">
                  + 49 123 456 789
                </a>
              </li>
              <li>
                <a href="tel:+49123456789">
                  + 49 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







    </div>
  )
}

export default Contact