<template>
  <div class="box">
    <div class="nav">
      <div class="warpper w82">
        <div class="fl">
          <ul @mouseover="mouse">
            <li index="0"><router-link to="/" style="color: #fff">首页</router-link></li>
            <li index="1">沙发</li>
            <li index="2">椅凳</li>
            <li index="3">柜架</li>
            <li index="4">床·床具</li>
            <li index="5">桌具</li>
            <li index="6">灯具</li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li>实体店</li>
            <li><router-link to="about" style="color: #fff">解创作新家</router-link></li>
            <li>商业合作</li>
          </ul>
        </div>
      </div>
      <div class="hover_show"  @mouseleave="divLeave">
        <div class="hover_line">
          <ul class="h_li">
            <li v-for="(item, index) in shouye" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <ul class="h_li">
            <li v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <ul class="h_li">
            <li v-for="(item, index) in dengzi" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <ul class="h_li">
            <li  v-for="(item, index) in kuangjia" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <ul class="h_li">
            <li v-for="(item, index) in bed" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <ul class="h_li">
            <li v-for="(item, index) in zhuoji" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <ul class="h_li">
            <li v-for="(item, index) in dengjv" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shouye: [
      ],
      safa: [
        {
          name: '三人沙发',
          img: 'images/imgs/safa_1.png'
        },
        {
          name: '双人沙发',
          img: 'images/imgs/safa_2.png'
        },
        {
          name: '单人沙发',
          img: 'images/imgs/safa_3.png'
        },
        {
          name: '大三人沙发',
          img: 'images/imgs/safa_4.png'
        },
        {
          name: '沙发墩',
          img: 'images/imgs/safa_5.png'
        }
      ],
      dengzi: [
        {
          name: '座椅',
          img: 'images/imgs/zuoyi_1.png'
        },
        {
          name: '坐墩',
          img: 'images/imgs/zuoyi_2.png'
        },
        {
          name: '休闲椅',
          img: 'images/imgs/zuoyi_3.png'
        },
        {
          name: '凳子',
          img: 'images/imgs/zuoyi_4.png'
        }
      ],
      kuangjia: [
        {
          name: '置物柜',
          img: 'images/imgs/zw_1.png'
        },
        {
          name: '书柜·书架',
          img: 'images/imgs/zw_2.png'
        },
        {
          name: '电视柜',
          img: 'images/imgs/zw_3.png'
        },
        {
          name: '置物架',
          img: 'images/imgs/zw_4.png'
        },
        {
          name: '衣柜',
          img: 'images/imgs/zw_5.png'
        },
        {
          name: '床头柜',
          img: 'images/imgs/zw_6.png'
        },
        {
          name: '衣帽架',
          img: 'images/imgs/zw_7.png'
        },
        {
          name: '单元格',
          img: 'images/imgs/zw_8.png'
        }
      ],
      bed: [
        {
          name: '床',
          img: 'images/imgs/bed_1.png'
        },
        {
          name: '床垫',
          img: 'images/imgs/bed_2.png'
        },
        {
          name: '被芯',
          img: 'images/imgs/bed_3.png'
        },
        {
          name: '枕芯',
          img: 'images/imgs/bed_4.png'
        },
        {
          name: '床头柜',
          img: 'images/imgs/zw_6.png'
        },
        {
          name: '床下储物盒',
          img: 'images/imgs/bed_5.png'
        }
      ],
      zhuoji: [
        {
          name: '书桌·餐桌',
          img: 'images/imgs/zz_1.png'
        },
        {
          name: '茶几',
          img: 'images/imgs/zz_2.png'
        },
        {
          name: '边几',
          img: 'images/imgs/zz_3.png'
        },
        {
          name: '梳妆台',
          img: 'images/imgs/zz_4.png'
        }
      ],
      dengjv: [
        {
          name: '台灯',
          img: 'images/imgs/td_1.png'
        },
        {
          name: '地灯',
          img: 'images/imgs/td_2.png'
        },
        {
          name: '吊灯',
          img: 'images/imgs/td_3.png'
        },
        {
          name: '夜灯',
          img: 'images/imgs/td_4.png'
        }
      ]
    }
  },
  methods: {
    mouse: function (e) {
      var eq = e.target.getAttribute('index')
      if (eq === 0 || !eq) {
        return
      }
      document.getElementsByClassName('hover_show')[0].style.display = 'block'
      for (var i = 0; i < 7; i++) {
        document.getElementsByClassName('h_li')[i].style.display = 'none'
      }
      document.getElementsByClassName('h_li')[eq].style.display = 'block'
    },
    divLeave: function () {
      document.getElementsByClassName('hover_show')[0].style.display = 'none'
    }
  }
}
</script>

<style lang="less" scoped>
.hover_line {
  display: block;
  ul {
    li {
      margin: 0 1%;
       display: inline-block;
      img {
        width: 101px;
        height: 101px;
      }
    }
  }
}

.hover_show {
  width: 100%;
  height: 130px;
  padding-top: 50px;
  background: rgba(0, 0, 0, 0.6);
  display: none;
}
.nav {
  width: 100%;
  position: fixed;
  z-index: 100;
  height: 50px;
  background: #272727;
  color: #fff;
}
.fl {
  ul {
    width: 100%;
    height: 50px;

    li {
      float: left;
      height: 50px;
      line-height: 50px;
      padding: 0 40px 0 0;
      cursor: pointer;
    }
  }
}
.fr {
  ul {
    li {
      float: left;
      color: #fff;
      margin-left: 30px;
      line-height: 50px;
    }
  }
}
</style>
