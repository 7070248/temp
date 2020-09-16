<template>
    <div class="intro">


        <transition name="fade">
          <div v-show="isClicked">
            <h1 >Daily <br>Report App {{JSON.stringify(isClicked)}}</h1>
            <button  @click="goToday">Gasdfasdo!</button>
            </div>
        </transition>
        <button @click="goToday">Go!</button>


        <transition-group name="fade-list">
<!--        <transition-group name="fade-list">-->
          <span v-for="item in items" v-bind:key="item">
            {{item}}
          </span>
        </transition-group>
        <button @click="addList">add</button>

<!--        </transition-group>-->
    </div>
</template>

<script>
  // import router from "../router";
  import moment from 'moment'

  export default {
      name: "intro",
      data(){
        return{
            today : moment(new Date()).format('YYYY-MM-DD'),
            isClicked:true,
            items: [1,2,3,4],
        }
      },
    methods:{
        goToday:function () {
          this.isClicked = !this.isClicked;
          // router.push(`/day/${this.today}`)
        },
        addList: function() {
          this.items.push(9);
        }
    }

  }
</script>

<style lang="scss" scoped>
    // .fade{
    //     transition: opacity 0.4s;
    // }


    // .fade-enter-to, .fade-leave{
    //       opacity: 0.5;
    //   }
    .fade-leave-to, .fade-enter, .fade-list-leave-to, .fade-list-enter{
          opacity: 0;
      }
    .fade-leave-active,.fade-enter-active, .fade-list-leave-active, .fade-list-enter-active{
          transition: opacity 0.4s;
      }
</style>
