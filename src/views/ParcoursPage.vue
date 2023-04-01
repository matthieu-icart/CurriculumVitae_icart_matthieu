<!-- HTML -->
<template>
  <section>
    <!-- BM FOURRURES -->
    <Experience-card
      id="case1"
      period="2008-2009"
      company="BM Fourrures"
      job="Conseiller en vente"
      jobDescription="Que ce soit au sein de la boutique, lors de foire ou encore au travers des
      différents marchés de la région savoyarde, j'ai pu apprendre à accueillir,
      conseiller et accompagner le client dans sa quête d'un produit artisanale
      de qualité."
    ></Experience-card>
    <!-- LE BEAU RIVAGE -->
    <Experience-card
      id="case2"
      period="2010-2012"
      company="Le Beau Rivage"
      job="Barman"
      jobDescription="Au sein de cette enseigne capable d'accueillir entre 300 et 500 couverts par jour, j'ai pu consolider mes compétences sociales tout en apprenant à faire face et m'adapter aux problèmes éventuelles et aux horaires difficiles et variées ( week-end, coupures, journées continues, heures supplémentaires.. )."
    ></Experience-card>
    <!-- LE DENIEU -->
    <Experience-card
      id="case3"
      period="2013"
      company="Le Denieu"
      job="Responsable de Salle"
      jobDescription="Lors de cette mission, j'ai pu obtenir plus de responsabilités. En effet, j'étais alors en charge de l'ouverture, de l'accueil et de l'encaissement client, du nettoyage et de la fermeture des locaux. De plus, je m'occupais des plannings et de l'organisation au sein de l'équipe."
    ></Experience-card>
    <!-- LE BISTROT DE LYON -->
    <Experience-card
      id="case4"
      period="2014"
      company="Le Bistrot de Lyon"
      job="Serveur / Runner"
      jobDescription="Cet emploi m'a fait découvrir l'univers de la restauration Gastronomique Française, avec ses besoins et ses exigences. J'ai donc dû particulièrement faire preuve de sérieux et être plus que conscienscieux, au service du client, garantissant une qualité certaine lors de son accueil."
    ></Experience-card>
    <!-- MAMIE MADELEINE -->
    <Experience-card
      id="case5"
      period="2015"
      company="Mamie Madeleine"
      job="Chef d'équipe"
      jobDescription="Au travers de ce poste, j'ai pu renforcer mes acquis en obtenant plus de responsabilités. Prise de poste dès l'aube pour assurer la production puis mise en place des produits et ouverture de l'enseigne afin de garantir l'accueil des clients. Gestion des stocks, des commandes et des livraisons."
    ></Experience-card>
    <!-- TESSI -->
    <Experience-card
      id="case6"
      period="2016"
      company="Tessi"
      job="Opérateur"
      jobDescription="Pour cet emploi, j'avais pour mission de receptionner et ranger des documents confidentiels physiques pour diverses entreprises bancaires, mais aussi de retrouver et faire remonter les documents en erreur en fonction d'un processus informatique particulier."
    ></Experience-card>
    <!-- AMITEL -->
    <Experience-card
      id="case7"
      period="2017-2022"
      company="Amitel"
      job="Opérateur Polyvalent"
      jobDescription="Au sein de cette entreprise opérant pour les Greffiers des Tribunaux de Commerces, j'ai pu renforcer mon sens de l'autonomie et des responsabilités en m'occupant du service de gestion des documents confidentiels : digitalisation, indexation, mise sous plis."
    ></Experience-card>
  </section>
</template>

<!-- JAVASCRIPT -->
<script>
/* IMPORT COMPONENTS */
import ExperienceCard from '../components/ExperienceCard.vue'

/* PARCOURS */
export default {
  name: 'ParcoursPage',
  components: {
    ExperienceCard,
  },
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

  article {
    /* Animation */
    animation: translateIn 0.5s forwards ease-in-out;
    opacity: 0;
  }
}

#case2 {
  animation-delay: 0.17s;
}
#case3 {
  animation-delay: 0.29s;
}
#case4 {
  animation-delay: 0.37s;
}
#case5 {
  animation-delay: 0.52s;
}
#case6 {
  animation-delay: 0.65s;
}
#case7 {
  animation-delay: 0.77s;
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
    height: 250px;

    /* Layout */
    margin: 0 auto;
    padding-top: 25px;
  }
}
</style>
