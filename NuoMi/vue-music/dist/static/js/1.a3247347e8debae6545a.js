webpackJsonp([1],{"R+8w":function(t,n){},"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=s()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},n.a=function(t){var n=s()({},r.b,{loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:80,songstatus:1});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,r.c)};var i=e("aA9S"),s=e.n(i),a=e("Gak4"),r=e("T452")},lEJ1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("4YfN"),s=e.n(i),a=e("Sgn/"),r=e("T452"),c=e("9rMa"),o=e("PvFA"),g={components:{MusicList:e("kvay").a},computed:s()({bgImage:function(){return this.singer.avatar_m},title:function(){return this.singer.name}},Object(c.c)(["singer"])),data:function(){return{songs:[]}},created:function(){this._getSingerDetail()},methods:{_getSingerDetail:function(){var t=this;this.singer.id?Object(a.a)(this.singer.id).then(function(n){n.code===r.a&&(t.songs=t._normalizeSongs(n.data.list))},function(t){console.log(t)}):this.$router.push({path:"/singer"})},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.musicData;n.push(Object(o.a)(e))}),n}}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{"bg-image":this.bgImage,title:this.title,songs:this.songs}})],1)},staticRenderFns:[]},l=e("8AGX")(g,u,!1,function(t){e("R+8w")},"data-v-641cf33c",null);n.default=l.exports}});