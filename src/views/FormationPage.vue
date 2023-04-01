<!-- HTML -->
<template>
  <section>
    <!-- CERTIFICAT RNCP -->
    <article>
      <i class="fa-solid fa-file-invoice"></i>
      <p>
        CERTIFICAT DE DÉVELOPPEUR INTÉGRATEUR WEB ENREGISTRÉ AU RÉPERTOIRE
        NATIONAL DES CERTIFICATIONS PROFESSIONNELLES
      </p>
    </article>
    <br />
    <!-- BACCALAUREAT -->
    <article>
      <i class="fa-solid fa-file-invoice"></i>
      <p>BACCALAURÉAT ÉCONOMIQUE & SOCIAL</p>
    </article>
  </section>
</template>

<!-- JAVASCRIPT -->
<script>
/* FORMATION */
export default {
  name: 'FormationPage',
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
}

article {
  /* Size */
  width: 80%;
  box-sizing: border-box;

  /* Display */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Layout */
  margin: 0 auto;

  /* Animation */
  animation: shadeIn 0.5s forwards ease-in-out;
  opacity: 0;
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
  article {
    /* Size */
    width: 100%;

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
