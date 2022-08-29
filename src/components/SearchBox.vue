<script setup>
import { ref } from "vue";
import search_button from "../assets/search/search_button.svg";

import default_data from "../utils/default";

const select = 0;
const search_logo = default_data.search_engine[select].icon;
const search_url = default_data.search_engine[select].url;

var search_text = ref()

function search(event) {
    console.log(search_text.value)
    if (search_text.value) {
        const text = search_url + search_text.value;
        // window.location.href= text;  // 直接打开网站
        window.open(text);  // 打开新标签页
    }
};
function search_selector(event) {
    alert("目前只支持bing")
}
</script>


<template>
    <div class="searchbox-container">
        <img id="icon" :src="search_logo" @click="search_selector" />
        <input class="searchbox" v-model="search_text" placeholder="搜索" @keydown.enter="search">
        <img id="icon" :src="search_button" @click="search" />
    </div>
</template>

<style scoped>
#icon {
    width: 20px;
    height: 20px;
    padding: 5px;
    margin: 5px;
    border-radius: 100%;
}

#icon:hover {
    background-color: #242424a5;
}

.searchbox-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    min-width: 200px;
    width: 80vw;
    max-width: 500px;
    height: 40px;
    border-radius: 20px;
    background-color: #141414aa;
    /* 布局位置 */
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
}

.searchbox {
    width: 100%;
    height: 30px;
    padding-block: 5px;
    border: none;
    background: transparent;
    font-size: 16px;
}

.searchbox:hover,
.searchbox:focus-visible,
.searchbox:disabled,
.searchbox:active {
    outline: none;
}




@media (prefers-color-scheme: light) {
    .searchbox-container {
        background-color: #f2f2f2;
    }

    #icon:hover {
        background-color: #ffffffa5;
    }
}
</style>
