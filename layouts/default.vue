<template>
  <div class="flex">
    <!-- SideNav Section -->
    <SideNav v-if="showSideNav && !isLoginPage" />

    <!-- Main Content Section -->
    <div class="flex-1 bg-gray-100">
      <!-- Header Section -->
      <div v-if="!isLoginPage" class="flex items-center justify-between w-full p-2 text-white bg-white shadow">
        <div class="flex items-center">
          <div class="flex items-center">
            <button @click="toggleSideNav">
              <i class="text-lg text-gray-500 fas fa-bars"></i>
            </button>
          </div>
        </div>

        <div class="relative flex items-center space-x-5">
          <!-- User Circle Button -->
          <button @click="toggleTheme" class="flex items-center justify-center dark:text-gray-200">
            <i v-if="isDarkMode" class="text-2xl text-gray-700 fa fa-toggle-on"></i>
            <i v-else class="text-2xl text-gray-700 fa fa-toggle-off"></i>
          </button>

          <button
            v-if="!isLoginPage"
            @click="toggleDropdown"
            class="flex items-center justify-center w-10 h-10 font-bold text-white bg-gray-500 rounded-full"
          >
            KA
          </button>

          <DropdownMenu :isVisible="isDropdownVisible" />
        </div>
      </div>

      <slot
        :showSideNav="showSideNav"
        :isDarkMode="isDarkMode"
        :toggleTheme="toggleTheme"
        :toggleDropdown="toggleDropdown"
        :isDropdownVisible="isDropdownVisible"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const showSideNav = ref(false);
const isDropdownVisible = ref(false);

const isDarkMode = useState("isDarkMode", () => false);
const toggleSideNav = () => {
  showSideNav.value = !showSideNav.value;
};

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};

useHead(() => ({
  htmlAttrs: {
    class: isDarkMode.value ? "dark" : "",
  },
}));

const route = useRoute();
const isLoginPage = computed(() => route.name === "login"); 
</script>

<style scoped></style>
