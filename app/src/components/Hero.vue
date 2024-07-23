<template>
  <div class="hero">
    <div class="image-holder">
      <img src="../assets/profile.jpg" alt="Image of Vishesh Bansal" />
    </div>
    <div class="text">
      <div class="top-text">
        <h3 style="color: #1a202c">
          <vue-typer
            ref="typer1"
            :text="welcome"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="smooth"
            :backspace="false"
            @completed="showTag2 = true"
          ></vue-typer>
        </h3>
      </div>
      <div class="bottom-text">
        <p class="b-margin">
          You can call me Nook or Sanooker and now I work as a Software
          Developer at
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="orangered"
            href="https://med.tu.ac.th/techno"
            >Education Technology,</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="orangered"
            href="https://med.tu.ac.th"
            >Faculty of Medicine,</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="orangered"
            href="https://tu.ac.th"
            >Thammasat University</a
          >
          at the moment. I worked closely with personnel of Faculty to
          understand their needs, get requirements, meeting and developed a
          web-based application by choose the language and tools that are
          appropriate for the scope of system development.
        </p>
        <p class="b-margin">
          I have prior experience
          <span class="orangered-text">UI/UX</span> designing using Adobe XD.
          Other tools which I use are Adobe Photoshop and Illustrator.
        </p>
        <p>
          My favourite hobbies is
          <span class="color">Playing Basketball and I have cats.</span>
        </p>
      </div>
      <div class="contact">
        <a
          href="https://drive.google.com/file/d/1bjlJnorHLQvUhnq_56koJqFUWt3HygEM/view?usp=sharing"
          target="__blank"
        >
          <div class="contact-me">Resume (PDF)</div>
        </a>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import VueTyper from "vue3-typer";

export default {
  name: "Hero",
  components: {
    VueTyper,
  },
  data() {
    return {
      welcome: ["👋 Hello, My name is Warat Supaporn!"],
    };
  },
};
</script>

<style scoped>
.color {
  /* border-bottom: 4px solid #1da7ea; */
  color: orange;
}

ul {
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

li {
  margin-left: 2rem;
  padding: 10px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #1b405e;
  transition: all ease 0.2s;
}

li:hover {
  background-color: orange;
  transform: translateY(-5px);
  transition: all ease 0.2s;
}

::v-deep .typed {
  color: orange !important;
}

::v-deep .custom.caret {
  background-color: orangered !important;
}

.fa-twitter {
  color: #fff;
}

.fa-instagram {
  color: #fff;
}

.fa-facebook {
  color: #fff;
}

.orangered {
  color: orange;
  text-decoration: none;
  font-weight: bolder;
  margin: 5px;
  transition: siz;
}

.orangered-text {
  color: orange;
}

.orangered:hover {
  color: orange;
  text-decoration: none;
  font-weight: bolder;
  margin: 5px;
  transition: siz;
}

.center {
  text-align: center;
}

img {
  height: 400px;
  border-radius: 8px;
}

.b-margin {
  margin-bottom: 1rem;
}

.image-holder {
  height: 125px;
}

.hero {
  display: flex;
  margin-bottom: 4rem;
}

.text {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  margin-left: 2rem;
  margin-bottom: 4rem;
}

a {
  text-decoration: none;
}

.contact {
  margin-top: 2rem;
}

.contact-me {
  font-size: 1.1rem;
  font-weight: 500;
  background-color: orange;
  color: #1a202c;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  vertical-align: center;
  transition: all ease 0.3s;
}

.contact-me:hover {
  transform: translateY(-5px);
  transition: all ease 0.2s;
}

h2,
p {
  margin: 0;
}

h2 {
  font-weight: 500;
  font-size: 1.8rem;
}

h3 {
  font-weight: 480;
  font-size: 1.4rem;
}

p {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3;
  /* text-align: justify; */
}

.fa-linkedin {
  color: white;
}

@media screen and (max-width: 960px) {
  .hero {
    flex-direction: column;
    margin-bottom: 3rem !important;
  }
}

@media screen and (max-width: 1258px) {
  .hero {
    flex-direction: column;
    margin-bottom: 10rem;
  }

  img {
    height: 150px;
    width: auto;
    clip-path: circle(60px at center);
    position: relative;
    top: -20px;
    margin: 0;
  }

  .text {
    margin-left: 0;
    height: auto;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  li {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .contact {
    margin-top: 16px;
  }
}
</style>
