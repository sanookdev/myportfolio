<template>
    <div class="buttonToTop">
        <!-- <button @click="toTop" class="app-button">
            <font-awesome-icon icon="fa-solid fa-arrow-up" />
        </button> -->
        <button class="scroll-top " v-on:click="toTop">
            <i id="scroll-top" class="fas fa-chevron-up fa-lg"></i>
        </button>
    </div>
</template>
<script>
export default {
    name: "ButtonToTop",
    methods: {
        toTop: function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        },
    }
}
</script>
<style scoped>
.app-container {
    max-width: 82rem;
    margin: auto;
    padding: 3rem 1rem;
}

.scroll-top {
    cursor: pointer;
    position: fixed;
    right: 40px;
    bottom: 40px;
    left: 92%;
    width: 40px;
    background-color: rgb(255, 200, 98);
}

.app-button {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    cursor: pointer;
    position: fixed;
    right: 40px;
    bottom: 40px;
    background-color: orange;
    border: none;
}

.showButton {
    display: block;
}
</style>