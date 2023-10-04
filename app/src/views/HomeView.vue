<template>
  <div class="home">
    <Navbar></Navbar>
    <HorizontalDivider></HorizontalDivider>
    <Hero></Hero>
    <HorizontalDivider></HorizontalDivider>
    <Experience></Experience>
    <HorizontalDivider></HorizontalDivider>
    <ButtonScrollToTop />
    <Code />
    <HorizontalDivider></HorizontalDivider>
    <!-- <a name="projects"></a> -->
    <h2 class="art">Design</h2>
    <div class="art-container">
      <Art v-for="project in projects" :project="project" :key="project"></Art>
    </div>
    <Skills></Skills>
    <HorizontalDivider></HorizontalDivider>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Art from "@/components/Art.vue";
import Skills from '@/components/Skills.vue';
import HorizontalDivider from '@/components/HorizontalDivider.vue';
import Hero from '@/components/Hero.vue';
import Experience from "@/components/Experience";
import VueScrollProgress from "vue-scroll-progress";
import ButtonScrollToTop from '@/components/ButtonScrollToTop.vue';
import Code from "@/components/Code.vue";
import Footer from "@/components/Footer.vue";



export default {
  name: 'HomeView',
  components: {
    Navbar,
    Art,
    Skills,
    HorizontalDivider,
    Hero,
    Experience,
    VueScrollProgress,
    ButtonScrollToTop,
    Code,
    Footer
  },
  data() {
    return {
      projects: null,
    };
  },
  mounted() {
    let data = [];

    data.push(
      {
        src: '/uploads/projects/show_video.png',
        link: 'https://drive.google.com/drive/folders/17EqEGQkF9Jya-JG7jxIjiJDalraO0HFl?usp=sharing',
        name: 'video_course (using Codeigniter3 with Bootstrap)'
      },
      {
        src: '/uploads/projects/maincalendar.png',
        link: 'https://drive.google.com/drive/folders/1oKEUYsykcsQGP8FBD3grKyz6I4c0LjDK?usp=sharing',
        name: 'Booking (using Php pdo with Bootstrap)'
      },
    );

    this.projects = data;
  },
}
</script>
