<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="footer text-center">
    <FooterContent />
  </footer>
  <!-- #region Portfolio Modals -->
  <!-- The Tower Modal -->
  <div class="portfolio-modal modal fade" id="thetowerModal" tabindex="-1" aria-labelledby="thetowerModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6 mb-2">
              <img class="img-fluid rounded" src=".\assets\img\thetower-portfolio-img.PNG" alt="The Tower">
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div class="text-center">
                <h2>The Tower</h2>
              </div>
              <div class="px-2 mx-2">
                <p>The Tower was our first solo full stack application we made. Tower lets you create,
                  view, and attend events. It has visual indicators for if an event is cancelled or
                  full and so on. We used Vue and NodeJS for this project.
                </p>
              </div>
              <div class="text-center">
                <a class="btn btn-secondary" target="_blank" href="https://github.com/ksquaredcoding/The-Tower"
                  role="button">
                  <i class="bi bi-github"></i> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- I'm Game Modal -->
  <div class="portfolio-modal modal fade" id="imgameModal" tabindex="-1" aria-labelledby="imgameModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6 mb-2">
              <img class="img-fluid rounded" src="./assets/img\imgame-portfolio-img.PNG" alt="I'm Game">
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div class="text-center">
                <h2>I'm Game</h2>
              </div>
              <div class="px-2 mx-2">
                <p>I'm Game was my group's capstone project at Boise Codeworks. I worked within a group
                  of 5 utilizing scrum/agile methodology. The app lets you search and find various
                  different board games and then save them as owned, favorited, or added to a wish
                  list. You are also able to create groups with friends that contain live chat and let
                  you schedule group game nights.
                </p>
              </div>
              <div class="text-center">
                <a class="btn btn-secondary" target="_blank" href="https://github.com/ksquaredcoding/im-game"
                  role="button">
                  <i class="bi bi-github"></i> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- The Network Modal -->
  <div class="portfolio-modal modal fade" id="thenetworkModal" tabindex="-1" aria-labelledby="thenetworkModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6 mb-2">
              <img class="img-fluid rounded" src="./assets/img\thenetwork-portfolio-img.PNG" alt="The Network">
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div class="text-center">
                <h2>The Network</h2>
              </div>
              <div class="px-2 mx-2">
                <p>The Network was a project to help us learn styling in vue as well as how to connect
                  to and use different APIs. We had to pull in posts, like, profiles, and so on from
                  Boise Codeworks own sandbox server. You are able to create, like, and delete posts.
                  Search for posts based on content or search for a user's name to then be able to
                  navigate to their profile.
                </p>
              </div>
              <div class="text-center">
                <a class="btn btn-secondary" target="_blank" href="https://github.com/ksquaredcoding/the-network"
                  role="button">
                  <i class="bi bi-github"></i> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Keepr Modal -->
  <div class="portfolio-modal modal fade" id="keeprModal" tabindex="-1" aria-labelledby="keeprModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6 mb-2">
              <img class="img-fluid rounded keepr-img" src="./assets/img\keepr-portfolio-img.PNG" alt="keepr">
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div class="text-center">
                <h2>Keepr</h2>
              </div>
              <div class="px-2 mx-2">
                <p>Keepr was the final project during my time at Boise Codeworks.
                  Keepr was created to be essentially a pinterest clone. We created
                  keeps instead of pins and vaults instead of boards. You could create keeps,
                  vaults, and save keeps others have made to your vaults. Users also had a public
                  profile where you could see public vaults and keeps that they have made. This
                  project was created with Vue for the front end, and C#/MySQL for the back end.
                </p>
              </div>
              <div class="text-center">
                <a class="btn btn-secondary" target="_blank" href="https://github.com/ksquaredcoding/keepr"
                  role="button">
                  <i class="bi bi-github"></i> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- AllSpice Modal -->
  <div class="portfolio-modal modal fade" id="allspiceModal" tabindex="-1" aria-labelledby="allspiceModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6 mb-2">
              <img class="img-fluid rounded" src="./assets/img\allspice-portfolio-img.PNG" alt="AllSpice">
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div class="text-center">
                <h2>AllSpice</h2>
              </div>
              <div class="px-2 mx-2">
                <p>AllSpice was the predecessor to our final for our course at Boise Codeworks. Our
                  first actual project using C# and MySQL for back end coding. You can create and
                  share recipes that you can add ingredients and steps to in the modal. You can also
                  favorite recipes others have created. This project became a good reference for me
                  throughout the creation of Keepr.
                </p>
              </div>
              <div class="text-center">
                <a class="btn btn-secondary" target="_blank" href="https://github.com/ksquaredcoding/AllSpiceSharp"
                  role="button">
                  <i class="bi bi-github"></i> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hackathon Modal -->
  <div class="portfolio-modal modal fade" id="hackathonModal" tabindex="-1" aria-labelledby="hackathonModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6 mb-2">
              <img class="img-fluid rounded" src="./assets/img\hackthon-portfolio-img.PNG" alt="Hackathon">
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div class="text-center">
                <h2>Hackathon</h2>
              </div>
              <div class="px-2 mx-2">
                <p>The Meme-ing of Life was my first group project we made in one day during a hackthon.
                  This was our fisr taste of really working within a group and creating our first full
                  stack application. We created this using vanilla js using MVC pattern and NodeJS on
                  the back end. You can create, react to, and comment on memes from different users.
                </p>
              </div>
              <div class="text-center">
                <a class="btn btn-secondary" target="_blank" href="https://github.com/ksquaredcoding/hackathon-1"
                  role="button">
                  <i class="bi bi-github"></i> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- #endregion -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import FooterContent from "./components/FooterContent.vue"
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, FooterContent }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}
</style>
