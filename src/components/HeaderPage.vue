<!-- HTML -->
<template>
  <header>
    <!-- TITLE -->
    <h1>
      <p id="case7">I</p>
      <p id="case6">C</p>
      <p id="case5">A</p>
      <p id="case4">R</p>
      <p id="case3">T</p>
      <p>&nbsp;</p>
      <p id="case2">M</p>
      <p id="case1">A</p>
      <p id="case2">T</p>
      <p id="case3">T</p>
      <p id="case4">H</p>
      <p id="case5">I</p>
      <p id="case6">E</p>
      <p id="case7">U</p>
    </h1>
    <h2>Développeur Web</h2>
    <!-- NAVBAR -->
    <NavigationBar></NavigationBar>
  </header>
</template>

<!-- JAVASCRIPT -->
<script>
/* IMPORT COMPONENTS */
import NavigationBar from './NavigationBar.vue'
/* HEADER */
export default {
  name: 'HeaderPage',
  components: { NavigationBar },
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
h1 {
  /* Size */
  width: 80%;

  /* Display */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Layout */
  margin: 0 auto;
  padding: 0;

  /* Font */
  font-size: calc(7000vw / 1018);
  font-family: 'AbrilFatFace';

  p {
    /* Animation */
    animation: titleChange 1s forwards ease-in-out;
    animation-delay: 1s;
    opacity: 0;
  }
}

h2 {
  /* Size */
  width: 80%;

  /* Display */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Layout */
  margin: 0 auto;
  margin-top: -2%;
  padding: 0;

  /* Font */
  font-size: calc(5000vw / 1018);
  -webkit-text-stroke: 1px black;
  color: white;

  /* Animation */
  animation: fallIn 1s forwards ease-out;
}

#case2 {
  animation-delay: 1.21s;
}
#case3 {
  animation-delay: 1.34s;
}
#case4 {
  animation-delay: 1.47s;
}
#case5 {
  animation-delay: 1.52s;
}
#case6 {
  animation-delay: 1.65s;
}
#case7 {
  animation-delay: 1.73s;
}

@media screen and (max-width: 1000px) {
  h2 {
    /* Font */
    font-size: calc(7000vw / 1018);
    -webkit-text-stroke: none;
    color: inherit;
  }
}
</style>
