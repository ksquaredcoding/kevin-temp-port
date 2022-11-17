<template>
  <section class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Avatar Image-->
      <img class="masthead-avatar mb-5 rounded-circle" src="/src/assets/img/oldprofilepic.jpg" alt="Kevin Kelley" />
      <!-- Masthead Heading-->
      <h1 class="masthead-heading text-uppercase mb-0">Kevin Kelley</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0">Full Stack Web Developer</p>
    </div>
  </section>
  <!-- Portfolio Section-->
  <section class="page-section portfolio" id="portfolio">
    <div class="container">
      <!-- Portfolio Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Portfolio Grid Items-->
      <div class="row justify-content-center">
        <!-- Portfolio Item 1-->
        <div class="col-md-6 col-lg-4 mb-5" title="View Keeper Project Info">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#keeprModal">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><span class="fa-3x">Keepr</span></div>
            </div>
            <img class="img-fluid" src="/src/assets/img/keepr-portfolio-img.png" alt="Keeper project preview" />
          </div>
        </div>
        <!-- Portfolio Item 2-->
        <div class="col-md-6 col-lg-4 mb-5" title="View I'm Game Project Info">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#imgameModal">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><span class="fa-3x">I'm
                  Game</span></div>
            </div>
            <img class="img-fluid" src="/src/assets/img\imgame-portfolio-img.png" alt="I'm Game project preview" />
          </div>
        </div>
        <!-- Portfolio Item 3-->
        <div class="col-md-6 col-lg-4 mb-5" title="View The Tower Project Info">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#thetowerModal">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><span class="fa-3x">The
                  Tower</span></div>
            </div>
            <img class="img-fluid" src="/src/assets/img\thetower-portfolio-img.png" alt="The Tower project preview" />
          </div>
        </div>
        <!-- Portfolio Item 4-->
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" title="View The Network Project Info">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#thenetworkModal">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><span class="fa-3x">The
                  Network</span></div>
            </div>
            <img class="img-fluid" src="/src/assets/img/thenetwork-portfolio-img.png"
              alt="The Network project preview" />
          </div>
        </div>
        <!-- Portfolio Item 5-->
        <div class="col-md-6 col-lg-4 mb-5 mb-md-0" title="View AllSpice Project Info">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#allspiceModal">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><span class="fa-3x">AllSpice</span>
              </div>
            </div>
            <img class="img-fluid" src="../assets/img/allspice-portfolio-img.png" alt="AllSpice project preview" />
          </div>
        </div>
        <!-- Portfolio Item 6-->
        <div class="col-md-6 col-lg-4" title="View Hackathon Project Info">
          <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#hackathonModal">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><span class="fa-3x">Hackathon</span>
              </div>
            </div>
            <img class="img-fluid" src="../assets/img/hackthon-portfolio-img.png" alt="Hackathon project preview" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Section-->
  <section class="page-section bg-primary text-white mb-0" id="aboutMe">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- About Section Content-->
      <div class="row">
        <div class="col-lg-4 ms-auto">
          <p class="lead text-shad">I recently completed 13 weeks with Boise Codeworks learning full stack web
            development. During this time I learned how to create Single Page Applications using Vue for the
            front end and C#/MySQL or NodeJS/MongoDB for the back end.</p>
        </div>
        <div class="col-lg-4 me-auto">
          <p class="lead text-shad">I am looking to continue growing my knowledge and skills as a developer. Whether
            learning new frameworks, programming languages, or core concepts. and I am hoping to find a job
            environment that allows me to thrive and grow moving forward!</p>
        </div>
      </div>
      <!-- About Section Button-->
      <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light text-shad" target="_blank" href="https://github.com/ksquaredcoding">
          <i class="bi bi-github"></i>
          My GitHub
        </a>
      </div>
    </div>
  </section>
  <!-- Contact Section-->
  <section class="page-section" id="contact">
    <div class="container">
      <!-- Contact Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Contact Section Form-->
      <div class="row justify-content-center">
        <div class="col-6 d-flex justify-content-center">
          <a class="btn btn-primary text-shad" href="mailto:ksquaredcoding@gmail.com" target="_blank">
            <i class="bi bi-envelope-fill"></i> Email Me
          </a>
        </div>
        <!-- <div class="col-lg-8 col-xl-7 form-border rounded p-2 bg-secondary">
          <form @submit.prevent="handleSubmit"> -->
        <!-- Name input-->
        <!-- <div class="form-floating mb-3">
              <input class="form-control rounded px-2" id="name" type="text" v-model="editable.name"
                placeholder="Enter your name..." />
              <label class="ms-2" for="name">Full name</label>
            </div> -->
        <!-- Email address input-->
        <!-- <div class="form-floating mb-3">
              <input class="form-control rounded px-2" id="email" type="email" v-model="editable.email"
                placeholder="name@example.com" />
              <label class="ms-2" for="email">Email address</label>
            </div> -->
        <!-- Message input-->
        <!-- <div class="form-floating mb-3">
              <textarea class="form-control rounded px-2" id="message" type="text" v-model="editable.message"
                placeholder="Enter your message here..." minlength="10" style="height: 10rem"></textarea>
              <label class="ms-2" for="message">Message</label>
            </div> -->
        <!-- Submit Button-->
        <!-- <button class="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
          </form>
        </div> -->
      </div>
    </div>
  </section>
</template>


<script>
import { ref } from "vue";
import Pop from "../utils/Pop.js";
import { contactsService } from "../services/ContactsService.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await contactsService.contactMe(editable.value)
          editable.value = {}
          Pop.success("Message received! We will reach out to you soon!")
        } catch (error) {
          console.error('[CONTACT FORM SUBMIT]', error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.form-border {
  border: 0.125rem solid #949597;
}
</style>