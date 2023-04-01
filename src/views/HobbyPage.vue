<!-- HTML -->
<template>
  <section>
    <!-- SPORT -->
    <article id="case4">
      <i class="fa-solid fa-person-running"></i>
      <div>
        <h3>SPORT</h3>
        <p>10 ANNÉES DE FOOTBALL EN CLUB</p>
        <br />
        <p>PRATIQUE RÉGULIÈRE</p>
      </div>
    </article>
    <!-- JEU VIDÉO -->
    <article id="case2">
      <i class="fa-solid fa-headset"></i>
      <div>
        <h3>JEU VIDÉO</h3>
        <p>CHAMPION SUR FORTNITE</p>
        <br />
        <p>DIAMANT SUR APEX LEGENDS</p>
        <br />
        <p>PLATINE SUR ROCKET LEAGUE</p>
        <br />
        <p>BRONZE SUR LEAGUE OF LEGENDS 😅</p>
      </div>
    </article>
    <!-- MUSIQUE -->
    <article id="case1">
      <i class="fa-solid fa-music"></i>
      <div>
        <h3>MUSIQUE</h3>
        <p>+ DE 300K VUES SUR YOUTUBE</p>
        <br />
        <p>REASON, LOGIC PRO, CUBASE, ABLETON, FLSTUDIO</p>
        <br />
        <p>CONCERTS & FESTIVALS</p>
      </div>
    </article>
    <!-- VIDÉO -->
    <article id="case3">
      <i class="fa-solid fa-camera"></i>
      <div>
        <h3>VIDÉO</h3>
        <p>+ DE 150K VUES SUR YOUTUBE</p>
        <br />
        <p>FINAL CUT PRO & AFTER EFFECT</p>
        <br />
        <p>REALISATION</p>
        <br />
        <p>MONTAGE</p>
      </div>
    </article>
    <!-- ÉCHECS -->
    <article id="case4">
      <i class="fa-solid fa-chess"></i>
      <div>
        <h3>ÉCHECS</h3>
        <p>PRATIQUE RÉGULIÈRE</p>
        <br />
        <p>1000 - 1100</p>
      </div>
    </article>
  </section>
</template>

<!-- JAVASCRIPT -->
<script>
/* HOBBYS */
export default {
  name: 'HobbyPage',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
section {
  /* Display */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: none;
}
article {
  /* Size */
  width: 19%;
  height: 100%;
  box-sizing: border-box;

  /* Display */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* Layout */
  margin: 0 auto;
  padding: 20px;

  /* Decoration */
  border: 1px solid #2c3e50;

  /* Animation */
  animation: popIn 0.2s forwards ease-in-out;
  transform: translateX(-1000px);
  opacity: 0;

  &:hover {
    /* Decoration */
    background: linear-gradient(transparent, #e5e8eb);
  }

  div {
    /* Size */
    height: 70%;
  }
}

i {
  /* Size */
  height: 20%;

  /* Font */
  font-size: 30px;
}

p {
  /* Font */
  font-size: 15px;
}

#case2 {
  animation-delay: 0.21s;
}
#case3 {
  animation-delay: 0.34s;
}
#case4 {
  animation-delay: 0.47s;
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
    height: 350px;

    /* Layout */
    margin: 0 auto;
  }
}
</style>
