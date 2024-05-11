import React from 'react'
import "./ErrorPage.scss"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='err'>
      <section class="error-part ptb-100 snipcss-xvFAX ">
  <div class="container">
    <div class="error-box">
      <div class="error-img position-r wow fadeInUp animated style-Axo4H" id="style-Axo4H">
        <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/error-img.png" alt="error-img"/>
        <div class="error-top">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/error-top.png" alt="error-top"/>
        </div>
      </div>
      <div class="error-content text-center wow fadeInUp animated style-7eyQN" id="style-7eyQN">
        <h1 class="error-title">
          Page Not Found
        </h1>
        <p>
          We're sorry, The page you are looking for on longer exists.
        </p>
        <Link to="/" class="btn-ct">
          Back To Homepage
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ErrorPage