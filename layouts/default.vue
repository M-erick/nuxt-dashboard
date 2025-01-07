<template>
    <div class="flex">
        <!-- SideNav Section -->
        <div v-if="showSideNav" class="flex flex-col bg-white shadow-md w-60">
            <nav>
                <a class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]"
                    href="#">
                    <i class="mr-2 fas fa-home"></i>Dashboard
                </a>
                <a class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]"
                    href="#">
                    <i class="mr-2 fas fa-file-alt"></i>Orders
                </a>
                <a class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]"
                    href="#">
                    <i class="mr-2 fas fa-users"></i>Customers
                </a>
                <a class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]"
                    href="#">
                    <i class="mr-2 fas fa-exchange-alt"></i>Transactions
                </a>
            </nav>

            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]" href="#">
                <i class="mr-2 fas fa-sign-out-alt"></i>Log out
            </a>
        </div>

        <!-- Main Content Section -->
        <div class="flex-1 bg-gray-100">
            <!-- Header Section -->
            <div class="flex items-center justify-between w-full p-2 text-white bg-white shadow">
        <div class="flex items-center">

          <div class="flex items-center ">
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


          <button @click="toggleDropdown"
            class="flex items-center justify-center w-10 h-10 font-bold text-white bg-gray-500 rounded-full">
            KA
          </button>

          <!-- Light/Dark Mode Toggle -->


          <!-- Dropdown -->
          <div v-if="isDropdownVisible"
            class="absolute right-0 z-10 w-40 mt-2 bg-white border rounded shadow-lg dark:bg-gray-800 dark:text-gray-200">
            <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="mr-2 fas fa-user"></i> Profile
            </a>
            <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="mr-2 fas fa-cog"></i> Settings
            </a>
            <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="mr-2 fas fa-sign-out-alt"></i> Logout
            </a>
          </div>
        </div>



      </div>
      <!-- <div class="pt-3 pl-5 mb-0"> -->


            <!-- Main Slot Content -->
            <slot :showSideNav="showSideNav" :isDarkMode="isDarkMode" :toggleTheme="toggleTheme"
                :toggleDropdown="toggleDropdown" :isDropdownVisible="isDropdownVisible" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const showSideNav = ref(false);
const activeButton = ref<string | null>(null);
const isDropdownVisible = ref(false);
const isDarkMode = ref(false);

const toggleSideNav = () => {
    showSideNav.value = !showSideNav.value;
};

const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value;
};

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>