<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in articleList" :key="index" class="article_li">
        <h1 class="title">{{item.title}}</h1>
        <p class="author">{{item.author}}</p>
        <p class="con" v-html="item.content"></p>
        <p class="date">{{item.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  async mounted() {
    this.getarticleList();

  },
  methods: {
    ...mapActions(["getarticleList"])
  },
  computed: {
    ...mapGetters({
      articleList: "articleList",
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  .article_li{
    margin: 20px 0;
  }
  .title{
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }
  .author{
    color: #333;
    font-size: 18px;
  }
  .con{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    padding: 0 50px;
    display: inline-block;
    text-align: left;
  }
  .date{
    text-align: right;
    margin-right: 50px;
  }
}

</style>
