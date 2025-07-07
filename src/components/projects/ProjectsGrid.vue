<template>
  <!-- Projects grid -->
  <section>
    <!-- Projects grid title -->
    <div class="text-center" data-aos="fade-down" data-aos-delay="100">
      <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div data-aos="fade-down" data-aos-delay="300">
      <h3 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4">
        Whether it’s new or used equipment, we offer quick turnaround and very low rates. Contact us to learn more about the services we offer for each of these industries.
      </h3>
    </div>

    <!-- Filter and search projects section -->
    <div data-aos="fade-up" data-aos-delay="400">
      <div class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2">
        <div class="flex justify-between gap-2">
          <span class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
            <i data-feather="search" class="text-ternary-dark dark:text-ternary-light"></i>
          </span>
          <input
            v-model="searchProject"
            class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required
            placeholder="Search Industry"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @filter="selectedCategory = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="(project) in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import feather from "feather-icons";
import ProjectsFilter from "./ProjectsFilter.vue";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  components: { ProjectSingle, ProjectsFilter },
  data() {
    return {
      projects,
      projectsHeading: "Industries",
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
    AOS.init({
			duration: 800,
			once: true,
			easing: 'ease-in-out',
		})
  },
  updated() {
		feather.replace()
		AOS.refresh()
	},
};
</script>

<style scoped>
/* Optional: Add any custom styles */
</style>
