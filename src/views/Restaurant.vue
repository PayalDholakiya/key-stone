<template>
	<div class="container mx-auto mt-10 sm:mt-20 space-y-16">
		<!-- Project header -->
		<div data-aos="fade-down" data-aos-delay="100">
			<ProjectHeader :singleProjectHeader="singleProjectHeader" />
		</div>

		<!-- Project gallery -->
		<div data-aos="zoom-in-up" data-aos-delay="200">
			<ProjectGallery :projectImages="projectImages" />
		</div>

		<!-- Project information -->
		<div data-aos="fade-up" data-aos-delay="300">
			<ProjectInfo :projectInfo="projectInfo" />
		</div>

		<!-- Related projects -->
		<div data-aos="fade-up" data-aos-delay="400">
			<ProjectRelatedProjects :relatedProject="relatedProject" />
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Assuming you already have these components created
import ProjectHeader from '../components/projects/ProjectHeader.vue'
import ProjectGallery from '../components/projects/ProjectGallery.vue'
import ProjectInfo from '../components/projects/ProjectInfo.vue'
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue'

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => ({
		singleProjectHeader: {
			singleProjectTitle: 'Restaurant',
			singleProjectDate: 'Jul 26, 2021',
		},
		projectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{ id: 1, title: 'Name', details: 'Company Ltd' },
				{ id: 2, title: 'Services', details: 'UI Design & Frontend Development' },
				{ id: 3, title: 'Website', details: 'https://company.com' },
				{ id: 4, title: 'Phone', details: '555 8888 888' },
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse...',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD'],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{ id: 1, details: 'Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing   elit...' },
				{ id: 2, details: 'Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing   elit...' },
				{ id: 3, details: 'Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing   elit...' },
				{ id: 4, details: 'Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing   elit...' },
			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{ id: 1, name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/realstoman' },
				{ id: 2, name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/realstoman' },
				{ id: 3, name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/' },
				{ id: 5, name: 'Youtube', icon: 'youtube', url: 'https://www.youtube.com/c/StomanStudio' },
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: [
				{ id: 1, title: 'Mobile UI', img: require('@/assets/images/mobile-project-1.jpg') },
				{ id: 2, title: 'Web Application', img: require('@/assets/images/web-project-1.jpg') },
				{ id: 3, title: 'UI Design', img: require('@/assets/images/ui-project-2.jpg') },
				{ id: 4, title: 'Kabul Mobile App UI', img: require('@/assets/images/mobile-project-2.jpg') },
			],
		},
	}),
	mounted() {
		feather.replace()
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
}
</script>

<style scoped>
/* Optional: Add any scoped overrides or transitions here */
</style>
