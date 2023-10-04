<template>
  <div>
    <p class="align-center-copy">
      Copyright &copy;{{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.top {
  visibility: hidden;
  text-decoration: underline;
}

.top:hover {
  opacity: 0.7;
  transition: opacity 0.2s ease;
  cursor: pointer;
}

div {
  color: white;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.italic {
  font-style: italic;
  width: 70%;
}

p {
  line-height: 1.3;
}

.align-center {
  padding: 0 1.3em;
  font-size: 1rem;
  text-align: center;
}

.align-center-copy {
  padding: 0em 1em;
  font-size: 0.8rem;
  text-align: center;
}

.fa-heart {
  margin: 0 5px;
  color: orange;
}

.fa-heart:hover {
  transform: scale(1.1);
  transition: 0.5s;
  margin: 0 1.2em;
  color: red;
}

@media screen and (max-width: 800px) {
  .top {
    visibility: visible;
    color: orange;
  }
}
</style>
