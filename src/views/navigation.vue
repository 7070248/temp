<template>
    <nav class="nav-bar">
        <ul class="nav-bar-list">
            <li>
                <router-link to="/">
                    <i class="xi-home"></i>
                    <span>홈</span>
                </router-link>
            </li>
            <li>
                <router-link :to="`/day/${today}`">
                    <i class="xi-clock"></i>
                    <span>오늘</span>
                </router-link>
            </li>
            <li>
                <router-link to="/calendar">
                    <i class="xi-calendar"></i>
                    <span>달력</span>
                </router-link>
            </li>
            <li>
                <router-link to="/setting">
                    <i class="xi-cog"></i>
                    <span>설정</span>
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <i class="xi-smiley-face"></i>
                    <span>소개</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  import moment from "moment"

  export default {
    name: "navigation",
    data(){
      return{
        today : moment(new Date()).format('YYYY-MM-DD'),
      }
    },
  }
</script>

<style scoped>

</style>
