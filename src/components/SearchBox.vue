<script setup>

import bing_logo from "../assets/search/bing.svg"

</script>

<script>
export default {
    data() {
        return {
            search_text: ""
        }
    },
    methods: {
        search(event) {
            const text = "https://cn.bing.com/search?q=" + this.search_text
            this.search_text = ""
            console.log(text)
            window.open(text);
        },
        search_selector(event) {
            alert("目前只支持bing")
        }
    }
}
</script>

<template>
    <div class="searchbox-container">
        <img id="icon" :src="bing_logo" @click="search_selector" />
        <input class="searchbox" v-model="search_text" placeholder="搜索" @keydown.enter="search">
    </div>
</template>

<style scoped>
#icon {
    width: 25px;
    height: 25px;
    padding: 5px;
    margin: 5px;
    border-radius: 100%;
}

#icon:hover {
    background-color: #000000a5;
}

.searchbox-container {
    flex-direction: row;
    display: flex;
    align-items: center;
    width: 70vw;
    max-width: 400px;
    height: 50px;
    border-radius: 25px;
    appearance: none;
    background-color: #f2f2f2;
}

.searchbox {
    width: 100%;
    padding-block: 10px;
    height: 30px;
    border: none;
    background: transparent;
    font-size: 18px;
}

.searchbox:hover,
.searchbox:focus-visible,
.searchbox:disabled,
.searchbox:active {
    outline: none;
}




@media (prefers-color-scheme: light) {
    .searchbox {}

    #icon:hover {
        background-color: #ffffffa5;
    }
}
</style>
