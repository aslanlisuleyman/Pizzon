import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogRight.scss"
const BlogRight = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Blog Right
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
              <Link onClick={scrollToTop} to="/">
                Home
              </Link>
            </li>
            <li>
              Blog Right
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

<section class="blog-list ptb-150 overflow-h snipcss-wp6TQ">
  <div class="container">
    <div class="row">
      <div class=" col-xl-8 col-lg-8 col-md-12">
        <div class="blog-list-part wow fadeInLeft animated style-9vyBJ" id="style-9vyBJ">
          <div class="blog-singel-list">
            <div class="br blog-img">
              <Link onClick={scrollToTop} to="/BlogDetail">
                <img className='br' src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-list-1.jpg" alt="blog-list-1"/>
              </Link>
            </div>
            <div class="blog-list-content">
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h3 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h3>
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
          <div class="blog-singel-list">
            <div class=" br blog-img">
              <Link onClick={scrollToTop} to="/BlogDetail">
                <img className='br' src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-list-2.jpg" alt="blog-list-2"/>
              </Link>
            </div>
            <div class="blog-list-content">
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h3 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h3>
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
          <div class="blog-singel-list">
            <div class="br blog-img">
              <Link onClick={scrollToTop} to="/BlogDetail">
                <img className='br' src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-list-3.jpg" alt="blog-list-3"/>
              </Link>
            </div>
            <div class="blog-list-content">
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h3 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h3>
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
          <div class="custom-pagination text-center">
            <ul>
              <li>
                <a  class="active">
                  1
                </a>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/BlogLeft">
                  2
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12">
        <div class="blog-sidebar wow fadeInRight animated style-6aJKJ" id="style-6aJKJ">
          
          <div class="blog-cate mb-50">
            <h2 class="blog-cat-title">
              Categories
            </h2>
            <ul>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                    Hamburger
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                     Pizza
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                   Offer
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/ShopList">
                  <span class="cat-name">
                    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
                    Pasta
                  </span>
                  <span class="count">
                    (06)
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div class="recent-news mb-50">
            <h2 class="blog-cat-title">
              Recent News
            </h2>
            <div class="news-box">
              <div class="news-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/recent-1.jpg" alt="recent-1"/>
                </Link>
              </div>
              <div class="news-detail">
                <span class="date">
                  07 Mar 2022
                </span>
                <Link onClick={scrollToTop} to="/BlogDetail" class="news-title">
                  How to keep fear from your art business
                </Link>
              </div>
            </div>
            <div class="news-box">
              <div class="news-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/recent-2.jpg" alt="recent-2"/>
                </Link>
              </div>
              <div class="news-detail">
                <span class="date">
                  07 Mar 2022
                </span>
                <Link onClick={scrollToTop} to="/BlogDetail" class="news-title">
                  How to keep fear from your art business
                </Link>
              </div>
            </div>
            <div class="news-box">
              <div class="news-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/recent-3.jpg" alt="recent-3"/>
                </Link>
              </div>
              <div class="news-detail">
                <span class="date">
                  07 Mar 2022
                </span>
                <Link onClick={scrollToTop} to="/BlogDetail" class="news-title">
                  How to keep fear from your art business
                </Link>
              </div>
            </div>
          </div>
          <div class="blog-tags mb-50">
            <h2 class="blog-cat-title">
              Tags Cloud
            </h2>
            <ul>
              
              <li>
                <a href="javascript:void(0)">
                  Seafoods
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Burger
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Pizza
                </a>
              </li>
              
              
              
            </ul>
          </div>
          <div class="blog-social">
            <h2 class="blog-cat-title">
              Follow Us
            </h2>
            <ul class="footer-social">
              <li>
                <a href="" class="facebook">
                  <i class="fa fa-facebook" aria-hidden="true">
                  </i>
                </a>
              </li>
              <li>
                <a href="" class="pinterest">
                  <i class="fa fa-pinterest-p" aria-hidden="true">
                  </i>
                </a>
              </li>
              <li>
                <a href="" class="twitter">
                  <i class="fa fa-twitter" aria-hidden="true">
                  </i>
                </a>
              </li>
              <li>
                <a href="" class="instagram">
                  <i class="fa fa-instagram" aria-hidden="true">
                  </i>
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

export default BlogRight