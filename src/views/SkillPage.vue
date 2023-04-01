<!-- HTML -->
<template>
  <section>
    <!-- WEB -->
    <article>
      <h3>WEB INTEGRATION</h3>
      <p>RESPONSIVE DESIGN</p>
      <p>NORMES W3C</p>
      <p>HTML</p>
      <p>CSS</p>
    </article>
    <!-- CREATIVE -->
    <article>
      <h3>CREATIVE DESIGN</h3>
      <p>MÉTHODOLOGIE B.E.M.</p>
      <p>DEVTOOLS</p>
      <p>FIGMA</p>
      <p>SASS</p>
    </article>
    <!-- FULL STACK -->
    <article>
      <h3>FULL STACK</h3>
      <p>JAVASCRIPT</p>
      <p>PYTHON</p>
      <p>REACT</p>
      <p>VUE</p>
      <p>PHP</p>
    </article>
    <!-- DATA -->
    <article>
      <h3>DATA MANAGEMENT</h3>
      <p>NoSQL - MONGOOSE & MongoDB</p>
      <p>SQL - MySQL</p>
      <p>CRUD</p>
    </article>
    <!-- API -->
    <article>
      <h3>RESTFULL API</h3>
      <p>EXPRESS</p>
      <p>NODE.JS</p>
      <p>MULTER</p>
      <p>FS</p>
    </article>
    <!-- SECURITY -->
    <article>
      <h3>CYBER-SECURITY</h3>
      <p>AUTHENTIFACTION TOKEN</p>
      <p>NORMES OWASP</p>
      <p>BCRYPT</p>
      <p>HELMET</p>
      <p>DDOS</p>
    </article>
    <!-- SEO -->
    <article>
      <h3>SEO & ACCESSIBILITY</h3>
      <p>GOOGLE KEYWORD PLANNER</p>
      <p>GOOGLE SEARCH CONSOLE</p>
      <p>GOOGLE ANALYTICS</p>
      <p>NORMES WCAG</p>
      <p>ARIA</p>
    </article>
    <!-- A.I -->
    <article>
      <h3>PROMPT ENGINEERING</h3>
      <p>MIDJOURNEY</p>
      <p>CHATGPT</p>
      <p>DALL-E</p>
    </article>
  </section>
</template>

<!-- JAVASCRIPT -->
<script>
/* SKILL */
export default {
  name: 'SkillPage',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
section {
  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

article {
  /* Size */
  width: 20%;
  height: 200px;

  /* Display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Decoration */
  border: 1px solid #2c3e50;

  /* Animation */
  animation: translateIn 0.2s forwards ease-in-out;
  transform: translateX(-1000px);
  opacity: 0;

  &:hover {
    /* Decoration */
    background: linear-gradient(transparent, #e5e8eb);
  }
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
  }

  article {
    /* Size */
    width: 100%;
    height: 200px;

    /* Display */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
