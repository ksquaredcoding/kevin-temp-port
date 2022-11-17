<template>
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand selectable" @click="scrollToTop()" title="Scroll to top of page">KSquaredCoding</a>
      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
        aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded selectable"
              @click="scrollToElement('portfolio')" title="Scroll to Portfolio section">Portfolio</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded selectable"
              @click="scrollToElement('aboutMe')" title="Scroll to About section">About</a></li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded selectable"
              @click="scrollToElement('contact')" title="Scroll to Contact section">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {
      scrollToTop() {
        document.defaultView.scrollTo(0, 0)
      },
      scrollToElement(element) {
        // debugger
        let x = document.getElementById(element)
        let top = x.offsetTop;
        let scroll = window.scrollY
        // if (scroll == top) {
        //   console.log(`${scroll} is equal to ${top}`);
        //   return
        // } else if (scroll == 0) {
        //   console.log(`scroll is at ${scroll} and top is ${top}`);
        window.scrollTo(0, top)
        // }
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
