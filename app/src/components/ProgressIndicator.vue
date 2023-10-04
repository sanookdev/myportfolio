<template>
    <div class="progress-indicator-wrapper">
        <div class="progress-indicator" :style="{ width: progress }"></div>
    </div>
</template>

<style scoped>
.progress-indicator-wrapper {
    position: fixed;
    background-color: #eee;
    width: 100%;
    top: 1px;


    .progress-indicator {
        height: 5px;
        background: orangered;
    }
}
</style>
  
<script>
export default {
    name: "ProgressIndicator",
    data() {
        return {
            progress: "0%"
        };
    },
    watch: {
        $route(/* to, from */) {
            this.updateProgressIndicator();
        }
    },
    methods: {
        updateProgressIndicator() {
            const { documentElement, body } = document;
            let windowScroll = body.scrollTop || documentElement.scrollTop;
            let height = documentElement.scrollHeight - documentElement.clientHeight;
            this.progress = (windowScroll / height) * 100 + "%";
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateProgressIndicator);
    }
};
</script>