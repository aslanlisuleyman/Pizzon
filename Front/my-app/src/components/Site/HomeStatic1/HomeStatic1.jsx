import React from 'react'
import "./HomeStatic1.scss"
import { Link } from 'react-router-dom'
const HomeStatic1 = () => {
  const scrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className='hs1'>
    
    <section class="home-banner hsf tar1 left-padding overflow-h snipcss0-0-0-1 snipcss-AZGQk style-CplUd" id="style-CplUd">
    <div class="black-jamun wow fadeInLeft animation-delay-5 animated snipcss0-1-1-2 style-FzRdT" id="style-FzRdT">
      <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/black-jamun.png" alt="Vacter Image" class="snipcss0-2-2-3"/>
    </div>
    <div class="home-onion wow fadeInUp animation-delay-5 animated snipcss0-1-1-4 style-rwwKv" id="style-rwwKv">
      <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png" alt="Vacter Image" class="snipcss0-2-4-5"/>
    </div>
    <div class="row align-items-center snipcss0-1-1-6">
      <div class="col-xl-5 col-lg-6 col-md-6 home-left-content wow fadeInLeft animated snipcss0-2-6-7 style-gtHZH" id="style-gtHZH">
        <div class="home-banner-content hand snipcss0-3-7-8">
          <h1 class="home-banner-title snipcss0-4-8-9">
       Handmade, With an Extra Pinch of  <span class="snipcss0-5-9-10">    Love </span>
          </h1>
          <div class="home-banner-desc snipcss0-4-8-11">
            <p class="snipcss0-5-11-12">
              Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
            </p>
          </div>
          <Link onClick={scrollToTop} to="/Ourmenu" class="btn-ct btn-large snipcss0-4-8-13">
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-5-13-14"/>
            Our Menu
          </Link>
        </div>
      </div>
      <div class="col-xl-7 col-lg-6 col-md-6 home-right-img snipcss0-2-6-15">
        <div class="home-banner-img snipcss0-3-15-16">
          <div class="home-img wow hj fadeInRight animation-delay-5 animated snipcss0-4-16-17 style-rwWFD" id="style-rwWFD">
            <div class="home-img-1 snipcss0-5-17-18">
              <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img.png" alt="banner-img" class="snipcss0-6-18-19"/>
            </div>
            <div class="home-leaf snipcss0-5-17-20">
              <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/home-leaf.png" alt="home-leaf" class="snipcss0-6-20-21"/>
            </div>
          </div>
          <div class="home-img-bottom wow fadeInUp animation-delay-5 animated snipcss0-4-16-22 style-Oy1lR" id="style-Oy1lR">
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-img-bottom.png" alt="banner-img-bottom" class="snipcss0-5-22-23"/>
          </div>
          <div class="slider-round-box wow fadeInRight animated snipcss0-4-16-24 style-NrAo8" id="style-NrAo8">
            <div class="slider-round snipcss0-5-24-25 style-5KYdZ" id="style-5KYdZ">
              <span class="slider-round-line snipcss0-6-25-26">
              </span>
              <div class="buy-one-get snipcss0-6-25-27">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/buy-one-get.png" alt="Vacter Image" class="snipcss0-7-27-28"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>

  <div class="daily-fresh-inner hst snipcss-oEnTZ">
  <div class="fresh-img wow fadeInLeft animated style-NJrOP" id="style-NJrOP">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh.png" alt="Daily Fresh"/>
  </div>
  <div class="fresh-content wow fadeInUp animated style-HcQRK" id="style-HcQRK">
    <h3 class="title">
      Daily fresh and always tasty
    </h3>
    <div class="fresh-des">
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority haved
      </p>
    </div>
    <img className='orlic' src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/daily-fresh-vacter.png" alt="" />
  </div>
</div>


  
    </div>
    
  

  )
}

export default HomeStatic1