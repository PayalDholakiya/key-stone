<template>
  <!-- Carousel Wrapper -->
  <div class="relative w-full h-full max-w-screen-2xl overflow-hidden">
    <!-- Image Container -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full flex-shrink-0"
      >
        <img :src="image" alt="Carousel Image" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="prevImage"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full opacity-70 hover:opacity-100"
      aria-label="Previous Image"
    >
      &lt;
    </button>

    <button
      @click="nextImage"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full opacity-70 hover:opacity-100"
      aria-label="Next Image"
    >
      &gt;
    </button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
  require('@/assets/images/image1.jpg'),
  require('@/assets/images/image2.jpg'),
  require('@/assets/images/image3.jpg'),
  require('@/assets/images/image4.jpg'),
],
      currentIndex: 0, // Current image index
    };
  },
  methods: {
    // Go to the next image
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    // Go to the previous image
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
  mounted() {
    // Auto switch images every 3 seconds
    this.interval = setInterval(this.nextImage, 3000);
  },
  beforeUnmount() {
    // Clear the interval when component is destroyed
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
/* Carousel wrapper: make sure it takes up the full screen */
.carousel-wrapper {
  position: relative;
  width: 100vw;   /* Full screen width */
  height: 100vh;  /* Full screen height */
  margin: 0;      /* No margin */
  padding: 0;     /* No padding */
  overflow: hidden; /* Hide overflowing images */
}

/* Flex container for images */
.carousel-container {
  display: flex;
  transition: transform 0.5s ease;
}

/* Ensure images cover the entire screen */
.carousel-image {
  width: 100%;
  height: 100%;  /* Make sure images fill the full height */
  object-fit: cover; /* Preserve aspect ratio, fill the container */
}

/* Navigation buttons */
.carousel-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>

