(function(n){"use strict";const{getChannelId:t}=n.findByProps("getChannelId","getVoiceChannelId"),o=n.findAll(e=>e.enqueue)[0],r=async e=>{e.code=="F5"&&(e.preventDefault(),o.enqueue({type:0,message:{channelId:t(),content:"https://tenor.com/view/jetstream-sam-true-metal-gear-rising-gif-24875505"}},d=>{})),e.code=="F6"&&(e.preventDefault(),o.enqueue({type:0,message:{channelId:t(),content:"https://tenor.com/view/yabujin-baroque-yabujin-hexd-gif-24415108"}},d=>{}))};var u=e=>({onLoad(){document.addEventListener("keydown",r)},onUnload(){document.removeEventListener("keydown",r)}});return u})(cumcord.modules.webpack);
