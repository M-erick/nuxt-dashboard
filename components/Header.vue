<template>
    <div class="relative flex items-center space-x-5">
        <button @click="toggleTheme" class="flex items-center justify-center dark:text-gray-200">
            <i v-if="isDarkMode" class="text-2xl text-gray-700 fa fa-toggle-on"></i>
            <i v-else class="text-2xl text-gray-700 fa fa-toggle-off"></i>
        </button>

        <button @click="toggleDropdown"
            class="flex items-center justify-center w-10 h-10 font-bold text-white bg-gray-500 rounded-full">
            KA
        </button>

        <div v-if="isDropdownVisible"
            class="absolute right-0 z-10 w-40 mt-2 bg-white border rounded shadow-lg dark:bg-gray-800 dark:text-gray-200">
            <NuxtLink to="/profile"
                class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="mr-2 fas fa-user"></i> Profile
            </NuxtLink>
            <NuxtLink to="/settings"
                class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="mr-2 fas fa-cog"></i> Settings
            </NuxtLink>
            <NuxtLink to="/logout" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                <i class="mr-2 fas fa-sign-out-alt"></i> Logout
            </NuxtLink>
        </div>

    </div>
</template>

<script lang="ts" setup>
const isDropdownVisible = ref(false);
const isDarkMode = ref(false);

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