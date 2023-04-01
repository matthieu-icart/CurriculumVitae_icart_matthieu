<!-- HTML -->
<template>
  <aside>
    <article id="case7">
      <i class="fa-brands fa-html5"></i>
      <p>HTML</p>
    </article>
    <article id="case6">
      <i class="fa-brands fa-css3-alt"></i>
      <p>CSS</p>
    </article>
    <article id="case5">
      <i class="fa-brands fa-sass"></i>
      <p>SASS</p>
    </article>
    <article id="case4">
      <i class="fa-brands fa-figma"></i>
      <p>FIGMA</p>
    </article>
    <article id="case3">
      <i class="fa-brands fa-php"></i>
      <p>PHP</p>
    </article>
    <article id="case2">
      <i class="fa-brands fa-js"></i>
      <p>JAVASCRIPT</p>
    </article>
    <article id="case1">
      <i class="fa-brands fa-react"></i>
      <p>REACT</p>
    </article>
    <article id="case1">
      <i class="fa-brands fa-vuejs"></i>
      <p>VUE</p>
    </article>
    <article id="case2">
      <i class="fa-brands fa-git-alt"></i>
      <p>GIT</p>
    </article>
    <article id="case3">
      <i class="fa-brands fa-github"></i>
      <p>GITHUB</p>
    </article>
    <article id="case4">
      <i class="fa-brands fa-npm"></i>
      <p>NPM</p>
    </article>
    <article id="case5">
      <i class="fa-brands fa-yarn"></i>
      <p>YARN</p>
    </article>
    <article id="case6">
      <i class="fa-brands fa-node"></i>
      <p>NODE</p>
    </article>
    <article id="case7">
      <i class="fa-brands fa-python"></i>
      <p>PYTHON</p>
    </article>
  </aside>
</template>

<!-- JAVASCRIPT -->
<script>
/* LOGOS */
export default {
  name: 'LogoBar',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
aside {
  /* Size */
  width: 90%;

  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  /* Layout */
  margin: 0 auto;
}

article {
  /* Size */
  width: 70px;
  height: 70px;

  /* Display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Animation */
  animation: logoChange 1s forwards ease-in-out;
  animation-delay: 1s;
  opacity: 0;

  p {
    /* Layout */
    margin-top: 5px;

    /* Font */
    font-size: 10px;
  }
}

i {
  /* Font */
  font-size: 40px;

  &:hover {
    /* Decoration */
    color: gold;
  }
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
</style>
