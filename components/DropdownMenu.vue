<template>
    <div
      v-if="isVisible"
      class="absolute right-0 z-10 w-40 mt-2 bg-white border rounded shadow-lg dark:bg-gray-800 dark:text-gray-200"
    >
      <NuxtLink
        to="/profile"
        class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <i class="mr-2 fas fa-user"></i> Profile
      </NuxtLink>
      <NuxtLink
        to="/settings"
        class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <i class="mr-2 fas fa-cog"></i> Settings
      </NuxtLink>
      <NuxtLink
        to="/logout"
        class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <i class="mr-2 fas fa-sign-out-alt"></i> Logout
      </NuxtLink>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    isVisible: {
      type: Boolean,
      required: true,
    },
  });
  </script>
  

  