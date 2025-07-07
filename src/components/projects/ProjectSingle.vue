<template>
  <router-link
    to="/projects/single-project"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
    :data-aos="'fade-up'"
    data-aos-duration="700"
    data-aos-delay="300"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
        :data-aos="'zoom-in'"
        data-aos-duration="800"
        data-aos-delay="700"
      />
    </div>
    
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
        :data-aos="'fade-up'"
        data-aos-duration="700"
        data-aos-delay="600"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
        :data-aos="'fade-up'"
        data-aos-duration="700"
        data-aos-delay="700"
      >
        {{ project.category }}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['project'],
};
</script>

<style scoped>
/* No need for SCSS or Sass, Tailwind utilities will handle the styling */
</style>
