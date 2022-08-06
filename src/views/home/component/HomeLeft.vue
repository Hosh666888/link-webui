<template>
  <div id="home_left_container">
      <div class="row1">
        <h3 class="title">Recent Publish</h3>
        <router-link to="/article/new" class="btn_new_article">New</router-link>
      </div>

      <input class="search_my_article"  v-model="search" placeholder="Find my article..."/>

      <div class="my_articles">
          <div class="article" v-for="(item,i) in myArticles" :key="i">
            <router-link :to="'/article/detail/'+item.id">{{item.title}}</router-link>

            <div class="article_hover_desc">
                <div class="row1">
                  <h3>{{item.title}}</h3>
                  <div v-if="item.isPublic" class="isPublic" style="filter: brightness(220%)">Public</div>
                  <div v-else class="isPublic" >Private</div>
                </div>
                <div class="labels">
                  <div class="label" v-for="(label,k) in item.labels" :key="k">{{label}}</div>
                </div>
                <div class="row3">
                  <div>🔥 {{item.heat}}</div>
                  <div>{{getDate(item.createTime)}}发布</div>
                </div>

            </div>
          </div>
      </div>

  </div>
</template>

<script>
import TimeUtil from "@/utils/TimeUtil";
export default {
  name: "HomeLeft",
  created() {
  },
  data() {
    return {
      search:'',
      myArticles:[
        {
          id:1515125151,
          title:"Java进阶",
          isPublic:true,
          labels:[
              "Java",
              "后端",
              "大数据"
          ],
          heat:99,
          createTime:new Date().setFullYear(2020)
        },{
          id:1515125151,
          title:"Vue实战",
          isPublic:false,
          labels:[
            "Javascript",
            "前端",
            "UI"
          ],
          heat:199,
          createTime:new Date().setHours(4)
        },
      ],
      mySearchRecord:[
          'adadada',
          'adasdaa'
      ]
    }
  },
  methods: {
    getDate(createTime){
      return TimeUtil.getMyTimeStyle(createTime);
    }
  }
}
</script>

<style scoped>
#home_left_container{
  background-color: #0d1117;
  min-height: calc(100vh - 60px);
  min-width: 300px;
  padding-left: 32px;
  padding-right: 32px;
}

.row1{
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #c9d1d9;
}

.row1 .btn_new_article{
  background: #2ea043;
  color: #c9d1d9;
  height: 25px;
  line-height: 25px;
  width: 60px;
  text-align: center;
  border-radius: 6px;
  transition: all .6s ease-in;
}
.row1 .btn_new_article:hover{
  filter: brightness(130%);
}

.search_my_article{
  margin-top: 8px;
  width: 100%;
  padding: 5px 12px;
  line-height: 20px;
  vertical-align: middle;
  background-color: #090c10;
  border: 1px solid #342f2f;
  border-radius: 6px;
}


.search_records{
  display: none;
  padding: 10px 20px;
}

.search_records .search_record{
  color: white;
}

.my_articles{
  margin-top: 16px;
  color: #fff;
  align-items: center;
  font-size: 14px;
  text-align: left;
}

.article{
  position: relative;
  padding-left: 6px;
  margin-bottom: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.article:hover .article_hover_desc{
  display: block;
}

.article_hover_desc{
  display: none;
  position: absolute;
  left: 10%;
  bottom: 110%;
  transition: all .5s ease-in;
  width: 300px;
  min-height: 80px;
  border-radius: 4px;
  border: 1px solid #242020;
  background-color: #0d1117;
  padding: 10px 15px;
  box-shadow: 0 10px 20px rgba(255,255,255,.1),
              15px 20px 25px rgba(255,255,255,.05);
}

.article_hover_desc:after{
  content: '';
  position: absolute;
  left: 20px;
  top: 90%;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  background-color: #0d1117;
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all .5s ease-in;
}

.article .row1{
  margin-top: 0;
  margin-bottom: 14px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
.article .row1 .isPublic{
  margin-left: 5px;
  border: 1px solid grey;
  color: grey;
  border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  user-select: none;
}

.article .labels{
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.article .labels .label{
  position: relative;
  background-color: #057f05;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 3px;
  min-width: 40px;
  text-align: center;
}
.article .row3{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

</style>