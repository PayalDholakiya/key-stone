<script>
import ThemeSwitcher from '../ThemeSwitcher';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';

export default {
	components: {
		ThemeSwitcher,
		AppHeaderLinks,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
	},
	updated() {
		feather.replace();
	},
};
</script>
<template>
	<!-- Full-width nav wrapper with shadow -->
	<div class="w-full shadow-lg dark:shadow-md bg-white/90 dark:bg-gray-900/70 backdrop-blur-md sticky top-0 z-50">
		<nav id="nav">
			<!-- Inner container for layout control -->
			<div
				class="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 sm:flex sm:justify-between sm:items-center"
			>
				<!-- Logo & controls -->
				<div class="flex items-center justify-between">
					<router-link to="/">
						<img
							v-if="theme === 'light'"
							src="@/assets/images/logo-dark.svg"
							class="w-36"
							alt="Dark Logo"
						/>
						<img
							v-else
							src="@/assets/images/logo-light.svg"
							class="w-36"
							alt="Light Logo"
						/>
					</router-link>

					<!-- Mobile Theme Switcher -->
					<ThemeSwitcher
						:theme="theme"
						@themeChanged="updateTheme"
						class="ml-2 sm:hidden bg-white/80 dark:bg-gray-800/60 px-2 py-1 rounded hover:shadow transition"
					/>

					<!-- Hamburger -->
					<button
						@click="isOpen = !isOpen"
						type="button"
						class="sm:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
						aria-label="Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-7 w-7 fill-current"
						>
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"
							/>
							<path
								v-else
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						</svg>
					</button>
				</div>

				<!-- Navigation Links -->
				<AppHeaderLinks :isOpen="isOpen" />
				<ThemeSwitcher
						:theme="theme"
						@themeChanged="updateTheme"
						class="ml-2 hidden sm:block bg-white/80 dark:bg-gray-800/60 px-2 py-1 rounded hover:shadow transition"
					/>
			</div>
		</nav>
	</div>
</template>



<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>
