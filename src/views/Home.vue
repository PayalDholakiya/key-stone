<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue';
import Blogs from '@/components/projects/Blogs.vue'

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Blogs
	},
};
</script>

<template>
		<AppBanner class="mb-5 sm:mb-8" />

	<div class="container mx-auto">
		<!-- Banner -->
		<ProjectsGrid />
		<Blogs/>
	</div>
</template>

<style scoped></style>
