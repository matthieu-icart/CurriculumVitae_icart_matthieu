<!-- HTML -->
<template>
  <section>
    <!-- EMAIL -->
    <article>
      <i class="fa-solid fa-envelope"></i>
      <p>matthieuicartpro@gmail.com</p>
    </article>
    <!-- LINKEDIN -->
    <article>
      <i class="fa-brands fa-linkedin"></i>
      <p>Mon Linkedin n'est pas encore disponible</p>
    </article>
    <!-- GITHUB -->
    <article>
      <i class="fa-brands fa-github"></i>
      <a href="https://github.com/matthieu-icart" target="_blank"
        >Mon Profil GitHub</a
      >
    </article>
    <!-- CHESS -->
    <article>
      <i class="fa-solid fa-chess"></i>
      <p>
        Et vous pouvez me défier sur
        <a href="http://chess.com/" target="_blank">Chess.com</a> :
        Matthieu_Icart 🤓
      </p>
    </article>
  </section>
</template>

<!-- JAVASCRIPT -->
<script>
/* CONTACT */
export default {
  name: 'ContactPage',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
section {
  /* Display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;

  /* Animation */
  animation: shadeIn 0.5s forwards ease-in-out, getIn 1s forwards ease-out;
  opacity: 0;
}

article {
  /* Size */
  width: 80%;

  /* Display */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Layout */
  margin: 0 auto;
}

a {
  /* Size */
  width: 90%;

  /* Font */
  font-size: 30px;
}

p {
  /* Size */
  width: 90%;

  /* Font */
  font-size: 30px;
}

i {
  /* Font */
  font-size: 70px;
}

@media screen and (max-width: 1000px) {
  section {
    /* Size */
    height: 100%;
  }
  article {
    /* Size */
    width: 100%;
    box-sizing: border-box;

    /* Display */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 10px;

    /* Layout */
    padding: 10px;

    /* Decoration */
    border: 1px solid #2c3e50;
  }
  p {
    /* Size */
    width: 90%;

    /* Font */
    font-size: 15px;
  }
  i {
    /* Font */
    font-size: 30px;
  }
}
</style>
