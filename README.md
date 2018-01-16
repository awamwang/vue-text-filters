# getting started

> vue-text-filters 以Vue（1.0/2.0）插件的形式提供一系列处理html文本的filter

安装
```
npm install --save vue-text-filters
```
使用
```
import VueTextFilters from 'vue-text-filters'
Vue.use(VueTextFilters)
// 解析段落
{{{ text | emojiSoftbankToUnified | safeAllEntityEncode | sbEmotions | transLinebreak }}}
```

如果需要使用emojiUnifiedToHtml，需要单独引入css样式
```
import 'emoji/lib/emoji.css'
```

# features

目前支持 'emoji', 'sbEmotions', 'htmlEntity', 'linebreak'  
emoji https://www.npmjs.com/package/emoji  
sbEmotions 是指square-bracket，类似[微笑] https://www.npmjs.com/package/wechat-square-bracket-emotions  
htmlEntity 是指htmlEntity编解码  
linebreak 是指将文本换行转换为html支持的<br />  

# params

## options

+ `needs` 一个Array，包含需要的filter（见features）名称
