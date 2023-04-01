<!-- HTML -->
<template>
  <section>
    <!-- FULL BEAUTY -->
    <article id="case7">
      <div>
        <h3>FULL BEAUTY</h3>
        <p>CRÉATION D'UNE APPLICATION REACT POUR UN SALON DE BEAUTÉ LYONNAIS</p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/FullBeauty_icart_matthieu"
          target="_blank"
          >FULL BEAUTY</a
        >
      </span>
    </article>
    <!-- ED'SERVICES -->
    <article id="case5">
      <div>
        <h3>ED'SERVICES</h3>
        <p>
          CRÉATION D'UNE APPLICATION REACT POUR UNE ENTREPRISE DE PLOMBERIE
          LYONNAISE
        </p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/EdServices_matthieu_icart"
          target="_blank"
          >ED'SERVICES</a
        >
      </span>
    </article>
    <!-- METROPOLIS -->
    <article id="case3">
      <div>
        <h3>METROPOLIS</h3>
        <p>HOMEPAGE CREATIVE DESIGN POUR UNE MARQUE DE VÊTEMENT</p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/Metropolis_icart_matthieu"
          target="_blank"
          >METROPOLIS</a
        >
      </span>
    </article>
    <!-- FACTION -->
    <article id="case1">
      <div>
        <h3>FACTION</h3>
        <p>CRÉATION D'UN TEST DE PERSONNALITÉ</p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/Faction_icart_matthieu"
          target="_blank"
          >FACTION</a
        >
      </span>
    </article>
    <!-- OHMYFOOD -->
    <article id="case2">
      <div>
        <h3>OHMYFOOD</h3>
        <p>MISE EN PLACE FRONT END & CREATIVE DESIGN</p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/Ohmyfood_icart_matthieu"
          target="_blank"
          >OHMYFOOD</a
        >
      </span>
    </article>
    <!-- KANAP -->
    <article id="case4">
      <div>
        <h3>KANAP</h3>
        <p>INTÉGRATION DES DONNÉES PROVENANT D'UNE API</p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/Kanap_icart_matthieu"
          target="_blank"
          >KANAP</a
        >
      </span>
    </article>
    <!-- HOTTAKES -->
    <article id="case6">
      <div>
        <h3>HOTTAKES</h3>
        <p>MISE EN PLACE D'UNE API SÉCURISÉE</p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/Hottakes_icart_matthieu"
          target="_blank"
          >HOTTAKES</a
        >
      </span>
    </article>
    <!-- KASA -->
    <article id="case7">
      <div>
        <h3>KASA</h3>
        <p>MISE EN PLACE D'UNE APPLICATION REACT</p>
      </div>
      <span>
        <a
          href="https://github.com/matthieu-icart/Kasa_icart_matthieu"
          target="_blank"
          >KASA</a
        >
      </span>
    </article>
  </section>
</template>

<!-- JAVASCRIPT -->
<script>
/* PROJET */
export default {
  name: 'ProjetPage',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
section {
  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

article {
  /* Size */
  width: 12%;
  height: 100%;
  box-sizing: border-box;

  /* Display */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Layout */
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;

  /* Decoration */
  border: 1px solid #2c3e50;

  /* Animation */
  animation: translateIn 0.5s forwards ease-in-out;
  transform: translateX(-1000px);
  opacity: 0;

  &:hover {
    /* Decoration */
    background: linear-gradient(#2c3e50, #e5e8eb);
  }

  div {
    /* Size */
    width: 100%;
    height: 100%;

    /* Display */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &:hover div {
    /* Display */
    display: none;
  }

  span {
    /* Display */
    display: none;
  }

  &:hover span {
    /* Size */
    width: 100%;
    height: 100%;

    /* Display */
    display: flex;
    flex-direction: center;
    justify-content: center;

    /* Font */
    color: white;

    a {
      /* Size */
      width: 100%;
      height: 100%;

      /* Display */
      display: flex;
      justify-content: center;
      align-items: center;

      /* Font */
      text-decoration: none;
      font-weight: bolder;
    }
  }
}

#case2 {
  animation-delay: 0.07s;
}
#case3 {
  animation-delay: 0.14s;
}
#case4 {
  animation-delay: 0.27s;
}
#case5 {
  animation-delay: 0.32s;
}
#case6 {
  animation-delay: 0.45s;
}
#case7 {
  animation-delay: 0.53s;
}

@media screen and (max-width: 1000px) {
  section {
    /* Size */
    height: 100%;

    /* Display */
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    row-gap: 10px;
  }

  article {
    /* Size */
    width: 100%;
    height: 200px;

    /* Layout */
    margin: 0 auto;
  }
}
</style>
