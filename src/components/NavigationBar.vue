<!-- HTML -->
<template>
  <nav>
    <router-link to="/formation">FORMATION</router-link>
    <router-link to="/parcours">PARCOURS</router-link>
    <router-link to="/">SKILLS</router-link>
    <router-link to="/projet">PROJETS</router-link>
    <router-link to="/hobby">HOBBYS</router-link>
    <router-link to="/contact">CONTACT</router-link>
  </nav>
</template>

<!-- JAVASCRIPT -->
<script>
/* NAVIGATION BAR */
export default {
  name: 'NavigationBar',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
nav {
  /* Size */
  width: 95%;
  height: 100%;
  box-sizing: border-box;

  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  /* Layout */
  margin: 0 auto;
  margin-top: 20px;

  /* Animation */
  animation: fallIn 1s forwards ease-out;

  a {
    /* Size */
    width: 10%;
    height: 100%;
    box-sizing: border-box;

    /* Display */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Layout */
    margin: 0 auto;
    padding: 5px;

    /* Decoration */
    border: 1px solid #2c3e50;
    border-radius: 5px;
    text-decoration: none;
    color: #2c3e50;

    &:hover {
      /* Decoration */
      background: linear-gradient(#e5e8eb, transparent);
    }
  }
}

@media screen and (max-width: 1000px) {
  nav {
    /* Display */
    flex-direction: column;
    justify-content: space-around;
    row-gap: 10px;

    a {
      /* Size */
      width: 100%;
      height: 100%;
    }
  }
}
</style>
