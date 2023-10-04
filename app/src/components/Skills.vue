<template>
  <div class="skill">
    <h2>Skills</h2>
    <div class="items">
      <div class="grid-container">
        <div class="grid-item">
          <h4>Tech Stack</h4>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                HTML
              </div>
              <span><i class="fab fa-html5 fa-lg"></i></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                CSS
              </div>
              <span><i class="fab fa-css3 fa-lg"></i></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                Bootstrap
              </div>
              <span><i class="fab fa-bootstrap fa-lg" style="color:white"></i></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                JavaScript
              </div>
              <span><i class="fab fa-js-square fa-lg"></i></span>
            </div>
          </div>

          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                Vue.js
              </div>
              <span><i class="fab fa-vuejs fa-lg"></i></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                React.js
              </div>
              <span><i class="fab fa-react fa-lg"></i></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo">
              <div class="tooltip">
                restAPI
              </div>
              <span><img class="fa-fastapi" src="../assets/img/logos/FastAPI.svg" height="20" /></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                PHP
              </div>
              <span><i class="fab fa-php fa-lg" style="color:white"></i></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                Node.js
              </div>
              <span><i class="fab fa-node-js fa-lg"></i></span>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <h4>UX / UI</h4>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                Adobe XD
              </div>
              <span><img class="fa-fastapi" src="../assets/img/logos/Adobe_XD_CC_icon.svg.png" height="20" /></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                Adobe Photoshop
              </div>
              <span><img class="fa-fastapi" src="../assets/img/logos/Adobe_Photoshop_CC_icon.svg.png"
                  height="20" /></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="icon logo" @click="showTooltip = !showTooltip">
              <div class="tooltip">
                Adobe Illustrator
              </div>
              <span><img class="fa-fastapi" src="../assets/img/logos/Adobe_Illustrator_CC_icon.svg.png"
                  height="20" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid orangered;
  line-height: 0.4;
  width: 80px;
  transition: all ease 0.3s;
}

h2:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid orange;
  line-height: 0.4;
  width: 130px;
  transition: 0.5s;
}

h4 {
  font-weight: 350;
  color: white;
  font-size: 1.5rem;
  border-bottom: 3px solid orangered;
  line-height: 0.6;
  width: 120px;
  transition: all ease 0.3s;
}

h4:hover {
  font-size: 1.5rem;
  font-weight: 350;
  color: white;
  border-bottom: 3px solid orange;
  line-height: 0.6;
  width: 200px;
  transition: 0.5s;
}

.grid-item {
  text-align: left;
}

span {
  padding: 20px;
}

.wrapper {
  display: inline-flex;
  vertical-align: center;
}

.wrapper .icon {
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  margin-bottom: 1em;
  background-color: #1D2430;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon span i {
  line-height: 60px;
  font-size: 25px;
}

.wrapper .icon .tooltip {
  position: absolute;
  top: 0;
  z-index: 1;
  background: #fff;
  color: #fff;
  padding: 10px 18px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 25px;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -70px;
  opacity: 1;
  pointer-events: auto;
}

.fa-python {
  color: #fff;
}

.fa-react {
  color: #fff;
}

.fa-sass {
  color: #fff;
}

.fa-vuejs {
  color: #fff;
}

.fa-node-js {
  color: #fff;
}

.fa-html5 {
  color: #fff;
}

.fa-css3 {
  color: #fff;
}

.fa-js-square {
  color: #fff;
}

.icon .tooltip:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%) rotate(45deg);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover span {
  color: #fff;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(255, 255, 255, 0.5);
}

.wrapper .logo:hover span,
.wrapper .logo:hover .tooltip,
.wrapper .logo:hover .tooltip:before {
  background: #18D26E;
}

.items {
  align-content: center !important;
  justify-content: center !important;
}

.grid-item {
  margin: 10px 10px 0px 0px;
  grid-column: auto;
}

@media screen and (max-width: 530px) {
  .items {
    width: 100%;
    justify-content: center;
    align-content: center;
  }
}

@media (max-width: 768px) {
  .grid-item {
    grid-column: span 2;
    /* Make the grid item span 2 columns on mobile */
    /* You can adjust the number of columns as needed */
  }
}
</style>