import React from 'react'
import "./HomeStatic4.scss"
import { Link } from 'react-router-dom'
const HomeStatic4 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className='last'>
        <div class="container snipcss-74PaY">
  <div class="ya section-heading wow fadeInUp animated snipcss0-0-0-1 tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center style-tb59G" id="style-tb59G">
    <h5 class="sub-title snipcss0-1-1-2">
      From Our Blog
    </h5>
    <h2 class="snipcss0-1-1-3">
      Our Latest News
    </h2>
  </div>
  <div className='poor' >
    <div class=" row__one onw snipcss0-0-0-1">
      <div class="blog-singel-list wow fadeInLeft animated snipcss0-1-1-2 style-9Jhqz" id="style-9Jhqz">
        <div class="blog-img gg snipcss0-2-2-3">
          <Link onClick={scrollToTop} to="/BlogDetail" class="snipcss0-3-3-4">
            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-1.jpg" alt="Blog Image" class="snipcss0-4-4-5"/>
          </Link>
        </div>
        <div class="blog-list-content snipcss0-2-2-6">
          <div class="blog-date snipcss0-3-6-7">
            <span class="snipcss0-4-7-8">
              07 Mar 2022 
            </span>
          </div>
          <h5 class="blog-title mns snipcss0-3-6-9">
            <Link onClick={scrollToTop} to="/BlogDetail" class="snipcss0-4-9-10">
              How to keep fear from ruining your art business with confident
            </Link>
          </h5>
          <div class="blog-author auo snipcss0-3-6-11">
            <div class="author snipcss0-4-11-12">
              <div class="author-detail snipcss0-5-12-13">
                <div class="author-img snipcss0-6-13-14">
                  <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-author.png" alt="David Milar" class="snipcss0-7-14-15"/>
                </div>
                <div class="author-name snipcss0-6-13-16">
                  <h6 class="snipcss0-7-16-17">
                    David Milar
                  </h6>
                  <span class="author-location snipcss0-7-16-18">
                    London, United Kindom
                  </span>
                </div>
              </div>
            </div>
            <div class="read-link snipcss0-4-11-19">
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more snipcss0-5-19-20">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow" class="snipcss0-6-20-21"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='poor__one'>
      <div class="blog-list-box wow fadeInRight animated style-qXFpL" id="style-qXFpL">
        <div class="blog-list-row">
          <div class=" blog-list-roww abv align-items-center">
            <div className='blog_img'>
              <div class="blog-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-2.jpg" alt="Blog Image"/>
                </Link>
              </div>
            </div>
            <div className='bmn' >
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h6 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h6>
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
        </div>
        <div class="blog-list-row">
          <div class=" blog-list-roww abv align-items-center">
            <div >
              <div class="blog-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-3.jpg" alt="Blog Image"/>
                </Link>
              </div>
            </div>
            <div >
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h6 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h6>
              <Link onClick={scrollToTop} to="/BlogDetail" class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
        </div>
        <div class="blog-list-row">
          <div class=" blog-list-roww abv align-items-center">
            <div >
              <div class="blog-img">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-4.jpg" alt="Blog Image"/>
                </Link>
              </div>
            </div>
            <div >
              <div class="blog-date">
                <span>
                  07 Mar 2022 
                </span>
              </div>
              <h6 class="blog-title">
                <Link onClick={scrollToTop} to="/BlogDetail">
                  How to keep fear from ruining your art business with confident
                </Link>
              </h6>
              <Link onClick={scrollToTop} to="/BlogDetail"  class="read-more">
                Read More 
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/right-arrow-red.png" alt="Right Arrow"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
    </div>
  )
}

export default HomeStatic4