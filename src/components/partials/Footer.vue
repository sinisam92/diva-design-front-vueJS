<template>
  <div>
    <div class="container">
      <!-- <div class="fallow">
					<h1 >FOLLOW US</h1>
      </div>-->
      <!-- <div class="footer-flex">
        <div class="social">
          <a href="https://www.facebook.com/divanakitns/" target="_blank" rel="noopener noreferrer">
            <h1>
              <i class="fab fa-facebook-square"></i>
            </h1>
          </a>
        </div>
        <div class="social">
          <a
            href="https://www.instagram.com/diva.design_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>
              <i class="fab fa-instagram"></i>
            </h1>
          </a>
        </div>
        <div class="social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <h1>
              <i class="fab fa-twitter-square"></i>
            </h1>
          </a>
        </div>
        <div class="social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <h1>
              <i class="fab fa-etsy"></i>
            </h1>
          </a>
        </div>
      </div>-->
    </div>
    <div class="bottom-footer">
      <div class="bottom-footer-flex container">
        <div class="link">
          <div class="social-links">
            <div>
              <h4>Follow us on social media</h4>
              <!-- <p>Subscibe and be first to know</p>
            <div class="btn-group">
              <input type="text" />
              <button class="btn btn-outline-dark">Subscribe</button>
              </div>-->
            </div>
            <nav>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/divanakitns/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/diva.design_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-etsy"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="link">
          <div class="about">
            <h3>Some good QUOTES</h3>
            <p>
              Now that there is the Tec-9, a crappy spray gun from South Miami.
              This gun is advertised as the most popular gun in American crime.
              Do you believe that shit? It actually says that in the little book that comes with it:
              the most popular gun in American crime. Like they're actually proud of that shit.
            </p>
          </div>
        </div>
        <div class="link">
          <h3>Navigation</h3>
          <router-link class="nav-items" to="/home">
            <li>Home &#10093;</li>
          </router-link>
          <router-link class="nav-items" to="/shop">
            <li>Shop &#10093;</li>
          </router-link>
          <router-link class="nav-items" to="/about">
            <li>About Us &#10093;</li>
          </router-link>
        </div>
      </div>
      <hr class="container" />
      <h4>
        <strong>Diva Design by Ivana</strong> Novi Sad, Serbia
        <a
          href="https://goo.gl/maps/PZ7VqMbdmH12"
          target="_blank"
          rel="noopener noreferrer"
        >Location</a> |
        <a href="tel:+381060231231">Call</a> +381 60 0231 231
      </h4>
      <hr class="container" />
      <div class="maker-mark">
        <p>
          <strong>All Rights Reserved</strong> &#10070;
          <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &#10070; &copy; 2019 S.M.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "./../../scss/footer";
</style>
