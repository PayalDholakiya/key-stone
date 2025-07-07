import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import('../views/About.vue'),
		meta: {
			title: 'About',
		},
	},
	{
		path: '/services',
		name: 'Services',
		component: () =>
			import('../views/Financing.vue'),
		meta: {
			title: 'Services',
		},
	},
	{
		path: '/services/financing',
		name: 'Financing',
		component: () =>
			import('../views/Financing.vue'),
		meta: {
			title: 'Service - Financing',
		},
	},
	{
		path: '/services/leasing',
		name: 'Leasing',
		component: () =>
			import('../views/Financing.vue'),
		meta: {
			title: 'Service - Leasing',
		},
	},
	{
		path: '/services/refinancing',
		name: 'Refinancing',
		component: () =>
			import('../views/Financing.vue'),
		meta: {
			title: 'Service - Refinancing',
		},
	},
	{
		path: '/services/mortgages',
		name: 'Mortgages',
		component: () =>
			import('../views/Financing.vue'),
		meta: {
			title: 'Service - Mortgages',
		},
	},
	{
		path: '/industries',
		name: 'Industries',
		component: () =>
			import('../views/Industries.vue'),
		meta: {
			title: 'Industries',
		},
	},
	{
		path: '/industries/restaurant',
		name: 'Restaurant',
		component: () =>
			import('../views/Restaurant.vue'),
		meta: {
			title: 'Industry - Restaurant',
		},
	},
	{
		path: '/industries/aesthetic-machines',
		name: 'Aesthetic Machines',
		component: () =>
			import('../views/Restaurant.vue'),
		meta: {
			title: 'Industry - Aesthetic Machines',
		},
	},
	{
		path: '/contact',
		name: 'Contact Us',
		component: () =>
			import('../views/Contact.vue'),
		meta: {
			title: 'Contact Us',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai Stoman
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
