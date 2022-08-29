// 图标
import bing_logo from "../assets/search/bing.svg";
// 网址
const bing_url = "https://bing.com/search?q=";
const baidu_url = "https://www.baidu.com/s?ie=utf-8&word=";
const google_url = "https://www.google.com/search?q=";
const _360_url = "https://www.so.com/s?q=";
const sogou_url = "http://sogou.com/web?query=";


// 搜索引擎列表
const search_engine =  [
    {
        "name": "必应",
        "icon": bing_logo,
        "url": bing_url, 
    },{
        "name": "百度",
        "icon": bing_logo,
        "url" : baidu_url,
    }
]


const line_xmu = "\
欢迎使用厦大起始页，开启你的厦大之旅。\n\
__    __  ___  ___   _   _     \n\
\\ \\  / / |   \\/   | | | | | \n\
 \\ \\/ /  | |\\  /| | | | | | \n\
  |  |   | | \\/ | | | | | |   \n\
 / /\\ \\  | |    | | | |_| |  \n\
/_/  \\_\\ |_|    |_| |_____|  \
"

const version = "0.0.1-beta"

export default  {
    search_engine,
    line_xmu,
    version
}
    