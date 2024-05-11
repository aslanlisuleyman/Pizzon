import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogDetail.scss"
const BlogDetail = () => {
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Blog Detail
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
              Blog Detail
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

<div className='blogdetail'>

<div className='blogimg'>
  <div>
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-2.jpg" alt="" />
  </div>
  <div><img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-3.jpg" alt="" /></div>
  <div><img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-4.jpg" alt="" /></div>
  <div><img src="https://hips.hearstapps.com/hmg-prod/images/delish-homemade-pizza-horizontal-1542312378.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*" alt="" /></div>
</div>
<div className='blogdes'><h5>
 <span>Pizzon</span> <br /> <br />
Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sagittis congue tempor a gravida donec enim ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna at luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem fusce eu cursus fusce <br /><br />


Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida porttitor nunc, quis vehicula magna. Placerat varius consectetur nibh, vel imperdiet dui varius viverra donec ociis et magnis

Aliquet Tempus Tempor Gravida
Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus. Mauris donec ociis et 
  </h5></div>
<div  className='blogimg'>
<div>
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/blog-1.jpg" alt="" />
  </div>
  <div><img src="https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg" alt="" /></div>
  <div><img src="https://www.coles.com.au/content/dam/coles/cusp/recipes-inspiration/pvx/Sep-PVX-Meat-Lovers-Pizza-976x549.jpg" alt="" /></div>
  <div><img src="https://www.youtubers.cooking/wp-content/uploads/2022/04/pizza-youtubers-cooking.jpg" alt="" /></div>
</div>



</div>

    </div>
  )
}

export default BlogDetail