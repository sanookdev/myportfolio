<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
  <ProgressIndicator />
</template>
<script>
import ProgressIndicator from "@/components/ProgressIndicator.vue";
export default {
  components: {
    ProgressIndicator,
  },

};
</script>


<style>
* {
  box-sizing: border-box;
}

html {
  padding: 0;
  margin: 0;
}

body {
  background-color: #1a202c;
  font-family: "canada-type-gibson";
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2c3649;
  border-radius: 0.5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(83, 83, 83);
  border-radius: 0.5rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(172, 172, 172);
}

.scroll-top {
  position: fixed;
  bottom: 15%;
  left: 85%;
  background-color: #1DB954;
  border: none;
  margin-left: 2rem;
  padding: 10px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s;
  z-index: 2;
}

.scroll-top:hover {
  transform: scale(1.2);
  transition: 0.5s;
  color: white;
}

.home {
  max-width: 870px;
  margin: 2rem auto;
}

.art-container {
  display: flex;
  overflow-x: scroll;
  /* -ms-overflow-style: none;  */
  /* scrollbar-width: none; */
  padding: 10px 0;
  height: min-content;
}

.art {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid orangered;
  line-height: 0.4;
  width: 40px;
  transition: all ease 0.3s;
}

.art:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid orange;
  line-height: 0.4;
  width: 100%;
  transition: 0.5s;
}


@media screen and (max-width: 1500px) {
  .home {
    margin: 2rem 20rem;
  }
}

@media screen and (max-width: 1380px) {
  .home {
    margin: 2rem 15rem;
  }
}

@media screen and (max-width: 936px) {
  .home {
    margin: 2rem;
  }

  .scroll-top {
    visibility: hidden;
  }
}

@media screen and (max-width: 320px) {
  .home {
    margin: 2rem 1rem;
  }
}

.grid-container {
  display: grid;
  /* gap: 40px; */
  grid-template-columns: auto auto;
  justify-content: center;
  padding: 0 0 0 0;
}

.grid-item {
  border: 1px solid rgba(93, 93, 93, 0.8);
  border-radius: 10px;
  padding: 20px;
  text-align: center !important;
  justify-content: center !important;
  ;
}
</style>