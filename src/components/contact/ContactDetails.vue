<script>
export default {
	props: ['contacts'],
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="text-left max-w-xl px-6">
			<h2 class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
				Contact details
			</h2>

			<ul class="font-general-regular mb-8">
				<li class="flex items-start mb-4" v-for="contact in contacts" :key="contact.id">
					<i
						:data-feather="contact.icon"
						class="w-5 mt-1 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<a
						href="#"
						class="text-lg text-ternary-dark dark:text-ternary-light"
						:class="
							contact.icon === 'mail' || contact.icon === 'phone'
								? 'hover:underline cursor-pointer'
								: ''
						"
						aria-label="Website and Phone"
					>
						{{ contact.name }}
					</a>
				</li>
			</ul>

			<!-- Google Map Embed - Toronto City Hall -->
			<div class="w-full h-64 rounded-lg overflow-hidden shadow-lg">
				<iframe
					class="w-full h-full border-0"
					loading="lazy"
					allowfullscreen
					referrerpolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.608593791114!2d-79.38527508450187!3d43.6534819791217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d5e438489f%3A0xe5a0b60fc19d45dc!2sToronto%20City%20Hall!5e0!3m2!1sen!2sca!4v1720300000000"
				></iframe>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
