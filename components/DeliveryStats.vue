<template>
  <div class="flex-1 p-4 bg-white rounded-lg shadow md:w-1/2">
    <h2 class="pb-1 text-lg font-semibold text-gray-700">{{ title }}</h2>
    <div class="my-1"></div>
    <div class="flex flex-wrap gap-x-4 gap-y-4">
      <div v-for="(stat, index) in stats" :key="index"
        class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg" style="height: 150px;">
        <h2 class="pb-1 text-lg font-semibold text-gray-700">{{ stat.name }}</h2>
        <div class="flex items-center justify-between mt-4">
          <span class="text-lg font-bold text-gray-700">{{ stat.value }}</span>
          <i class="text-xl text-gray-500 fas fa-store"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  stats: { name: string; value: string | number }[];
}>();
</script>

<style scoped></style>