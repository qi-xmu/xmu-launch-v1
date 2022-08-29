import { createApp } from 'vue'
import './style.css'
import './flex.css'
import App from './App.vue'
import default_data from "./utils/default";
const start_time = new Date(2022, 7, 29); // 2022-08-29
console.log("%c%s", "color:#ffca28", `系统版本：${default_data.version}`)
console.log("%c%s", "color:#ffca28", default_data.line_xmu)
console.log("%c%s", "color:#ffca28", `厦大起始页已经上线：${parseInt((new Date() - start_time) / (1 * 24 * 60 * 60 * 1000))}天`)

createApp(App).mount('#app')
