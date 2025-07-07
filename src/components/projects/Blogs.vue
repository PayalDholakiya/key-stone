<template>
  <section class="py-12 mt-6">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-8" data-aos="fade-down" data-aos-delay="1000">Latest Blog Posts</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="post in blogPosts"
          :key="post.id"
          class="bg-white rounded-lg shadow hover:shadow-lg transition"
          data-aos="zoom-in" data-aos-duration="300"
        >
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover rounded-t-lg" />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ post.description }}</p>
            <p class="text-gray-400 text-xs">{{ formatDate(post.date) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// ✅ Import images
import image1 from '@/assets/images/image5.jpg'
import image2 from '@/assets/images/image6.jpg'
import image3 from '@/assets/images/image7.jpg'

export default {
  name: 'BlogSection',
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "Understanding Personal Finance in 2025",
          description: "A beginner’s guide to budgeting, saving, and smart spending.",
          image: image1,
          date: "2025-07-01"
        },
        {
          id: 2,
          title: "How to Build an Investment Portfolio",
          description: "Steps to create a strong portfolio with diversified assets.",
          image: image2,
          date: "2025-07-03"
        },
        {
          id: 3,
          title: "The Future of Digital Banking",
          description: "Explore how technology is reshaping the finance industry.",
          image: image3,
          date: "2025-07-05"
        }
      ]
    }
  },
  methods: {
    formatDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateStr).toLocaleDateString(undefined, options)
    }
  }
}
</script>

<style scoped>
/* Optional custom styles */
</style>
