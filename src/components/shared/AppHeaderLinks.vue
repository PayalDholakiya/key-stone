<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navLinks: [
        { name: 'Home', to: '/', aria: 'Home' },
        { name: 'About Us', to: '/about', aria: 'About Us' },
        {
          name: 'Services',
          aria: 'Services',
          children: [
            { name: 'Financing', to: '/services/financing' },
            { name: 'Leasing', to: '/services/leasing' },
            { name: 'Refinancing', to: '/services/refinancing' },
            { name: 'Mortgages', to: '/services/mortgages' },
          ],
        },
        {
          name: 'Industries',
          aria: 'Industries',
          children: [
            { name: 'Restaurant', to: '/industries/restaurant' },
            { name: 'Aesthetic Machines', to: '/industries/aesthetic-machines' },
          ],
        },
        { name: 'Contact Us', to: '/contact', aria: 'Contact Us' },
      ],
    };
  },
  methods: {
    isChildActive(children) {
      return children.some((child) => this.$route.path.startsWith(child.to));
    },
  },
};
</script>

<template>
  <div
    :class="[
      isOpen ? 'block' : 'hidden',
      'sm:flex sm:items-center sm:justify-center w-full sm:w-auto sm:ml-6',
      'flex flex-col gap-4 sm:flex-row sm:gap-0 mt-5 sm:mt-0',
      'bg-white/80 dark:bg-gray-800/70  sm:bg-transparent dark:sm:bg-transparent',
      'rounded-lg sm:rounded-none shadow-lg sm:shadow-none px-5 py-4 sm:p-0',
      'transition-all duration-300 ease-in-out',
    ]"
  >
    <div
      v-for="(link, index) in navLinks"
      :key="index"
      class="relative group"
      :class="['sm:mx-4']"
    >
      <!-- Parent with children -->
      <div v-if="link.children">
        <span
          :class="[
            'cursor-pointer text-lg font-medium transition duration-200',
            isChildActive(link.children)
              ? 'text-indigo-600 dark:text-indigo-300 font-bold underline underline-offset-4'
              : 'text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300'
          ]"
        >
          {{ link.name }}
        </span>

        <!-- Dropdown menu -->
        <div
          class="absolute left-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50"
        >
          <router-link
            v-for="(child, childIndex) in link.children"
            :key="childIndex"
            :to="child.to"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
            active-class="font-semibold text-indigo-600 dark:text-indigo-300 underline underline-offset-4"
          >
            {{ child.name }}
          </router-link>
        </div>
      </div>

      <!-- Normal link -->
      <router-link
        v-else
        :to="link.to"
        :aria-label="link.aria"
        class="block text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 transition duration-200"
        active-class="text-indigo-600 dark:text-indigo-300 font-bold underline underline-offset-4"
        exact
      >
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>

