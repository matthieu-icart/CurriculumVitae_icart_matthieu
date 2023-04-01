<!-- HTML -->
<template>
  <article>
    <div>
      <p>{{ period }}</p>
      <h3>{{ job }}</h3>
      <h4>{{ company }}</h4>
    </div>
    <span>
      <p id="description">{{ jobDescription }}</p>
    </span>
  </article>
</template>

<!-- JAVASCRIPT -->
<script>
/* EXPERIENCE CARD */
export default {
  name: 'ExperienceCard',
  props: {
    period: String,
    company: String,
    job: String,
    jobDescription: String,
  },
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
article {
  /* Size */
  width: 12%;
  height: 100%;
  box-sizing: border-box;

  /* Layout */
  margin: 50px auto;
  padding: 10px;

  /* Decoration */
  border: 1px solid #2c3e50;

  &:hover {
    /* Decoration */
    background-color: #2c3e50;
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
    flex-direction: column;
    flex-direction: space-between;
    justify-content: center;

    /* Font */
    color: white;
  }
}

#description {
  /* Font */
  font-size: 10px;
}
</style>
