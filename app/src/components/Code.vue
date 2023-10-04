<template>
  <div>
    <h2>Code</h2>
    <div class="cards">
      <Card v-for="card in cards" :key="card.title" :title="card.title" :description="card.description"
        :emoji="card.emoji" :link="card.link"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Code",
  components: { Card },
  data() {
    return {
      cards: [
        {
          title: "Crud system api.",
          emoji: "📢",
          description: "I used express for created crud system and authentication by using Jwt Token.",
          link: "https://github.com/sanookdev/express-mysql-jwt/tree/master",
        },
        {
          title: "Laravel fundamentals.",
          emoji: "⏰",
          description: "I successful for learning laravel fundamentals such as migrate database, crud system and manage history migration.",
          link: "https://github.com/sanookdev/laravel_fundamentals",
        },
        {
          title: "Portfolio Website",
          emoji: "🙋‍♂️",
          description: "My Portfolio website made in Vue.js",
          // link: "https://visheshbansal.dev/gh/Portfolio-Website",
        },

      ],
    };
  },
};
</script>

<style scoped>
.cards {
  grid-gap: 1rem;
  margin: 0 auto;
  display: grid;
  height: 320px;
  overflow: hidden;
}

@media screen and (max-width: 580px) {
  .cards {
    height: 315px;
  }
}

.expandedCards {
  height: 100%;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

.rotate {
  transform: rotate(180deg);
}

.no-rotate {
  transform: rotate(0deg);
}

@media screen and (min-width: 370px) {
  .cards {
    height: 302px;
  }
}

@media screen and (min-width: 900px) and (max-width: 1040px) {
  .cards {
    height: 370px;
  }
}

h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid orangered;
  line-height: 0.4;
  width: 60px;
  transition: all ease 0.3s;
  margin-bottom: 2rem;
}

h2:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid orange;
  line-height: 0.4;
  width: 100px;
  transition: 0.5s;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

svg {
  color: white;
}

.row button {
  border: none;
  padding: 10px;
  border-radius: 8px;
  background-color: #1b405e;
}

.row button:hover {
  background-color: #15334b;
  transition: background-color ease 0.2s;
  cursor: pointer;
}

.row button:focus {
  outline: none;
}

@media screen and (min-width: 200px) and (max-width: 355px) {
  .cards {
    height: 320px;
  }
}
</style>
