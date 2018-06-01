<template>
  <div>
    <myHeader></myHeader>
    <ul class="mainCon">
      <li v-for="(item,index) in articleList" :key="index">
        <div class="txt">
          <router-link :to="{path: '/detail/' + index}" ><p class="title" v-html="item.title"></p></router-link>
          <p class="content" v-html="item.content"></p>
          <p class="author" v-html="item.author"></p>
        </div>
        <div class="img">
          <img :src="item.image" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import myHeader from "./header/Header";
export default {
  name: "index",
  data() {
    return {
      msg: "hello world"
    };
  },
  components: {
    myHeader
  },
  mounted() {
    this.getarticleList();
  },
  methods: {
    ...mapActions(["getarticleList"])
  },
  computed: {
    ...mapGetters({
      articleList: "articleList"
    })
  }
};
</script>

<style lang="scss" scoped>
.mainCon {
  width: 30%;
  margin: 30px auto 0;

  li {
    box-sizing: border-box;
    height: 190px;
    border-bottom: 1px solid gainsboro;
    padding: 30px 0;
    overflow: hidden;
    min-width: 625px;
    div {
      float: left;
    }
    .txt {
      width: 80%;
      height: 130px;
      text-align: left;
      .title {
        height: 30px;
        font-family: -apple-system, SF UI Display, Arial, PingFang SC,
          Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
        color: #333;
        font-size: 18px;
        font-weight: 700;
      }
      .content {
        margin: 5px 0;
        height: 70px;
        font-size: 14px;
        line-height: 24px;
        color: #999;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .author {
        height: 20px;
        font-size: 12px;
        color: #999;
      }
    }
    .img {
      width: 20%;
      height: 130px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  li:nth-child(1) {
    border-top: 1px solid gainsboro;
  }
}
</style>
