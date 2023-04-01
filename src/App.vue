<!-- HTML -->
<template>
  <!-- HEADER -->
  <HeaderPage></HeaderPage>
  <!-- SECTIONS -->
  <router-view />
  <!-- FOOTER -->
  <FooterPage></FooterPage>
</template>

<!-- JAVASCRIPT -->
<script>
/* IMPORT COMPONENTS */
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'

/* APP */
export default {
  name: 'App',
  components: { HeaderPage, FooterPage },
}
</script>

<!-- SCSS -->
<style lang="scss">
#app {
  /* Font */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

section {
  /* Size */
  width: 95%;
  height: 50vh;
  box-sizing: border-box;

  /* Layout */
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;

  /* Animation */
  animation: getIn 1s forwards ease-out;
}

nav {
  /* Layout */
  margin: 0;
  padding: 0;
}

a {
  /* Font */
  color: inherit;
}

p {
  /* Layout */
  margin: 0;
  padding: 0;
}

@keyframes fallIn {
  0% {
    transform: translateY(-200px);
    filter: blur(1px);
  }
  100% {
    transform: translateY(-0px);
    filter: blur(0px);
  }
}

@keyframes getIn {
  0% {
    transform: translateY(500px);
    filter: blur(2px);
  }

  100% {
    transform: translateY(0px);
    filter: blur(0px);
  }
}

@keyframes translateIn {
  0% {
    transform: translateY(600px);
    filter: blur(20px);
    opacity: 0;
  }

  60% {
    filter: blur(10px);
  }

  100% {
    transform: translateY(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0);
    filter: blur(20px);
    opacity: 0;
  }

  60% {
    filter: blur(10px);
  }

  100% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes shadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes logoChange {
  0% {
    color: #2c3e50;
    opacity: 0;
    transform: scale(1);
    filter: blur(0.5px);
  }
  50% {
    color: gold;
    transform: scale(1.4);
    opacity: 1;
    filter: blur(0.25px);
  }
  100% {
    color: #2c3e50;
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
}

@keyframes titleChange {
  0% {
    color: #2c3e50;
    opacity: 0;
    filter: blur(0.5px);
    letter-spacing: 50px;
  }
  50% {
    color: gold;
    opacity: 1;
    filter: blur(0.25px);
  }
  100% {
    color: #2c3e50;
    opacity: 1;
    filter: blur(0px);
    letter-spacing: 0px;
  }
}
</style>
