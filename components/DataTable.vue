<!-- DataTable.vue -->
<template>
    <div class="p-4 bg-white rounded-lg shadow">
      <h2 class="pb-4 text-lg font-semibold text-gray-500">Records</h2>
      <div class="h-px mb-6 bg-gradient-to-r from-orange-300 to-orange-500"></div>
      <table class="w-full text-sm table-auto">
        <thead>
          <tr class="text-sm leading-normal">
            <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Number</th>
            <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Customer</th>
            <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Status</th>
            <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Total Price</th>
            <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Order Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index" class="hover:bg-grey-lighter" :data-status="item.status">
            <td class="px-4 py-2 border-b">{{ item.number }}</td>
            <td class="px-4 py-2 border-b">{{ item.customer }}</td>
            <td class="px-4 py-2 border-b">{{ item.status }}</td>
            <td class="px-4 py-2 border-b">{{ item.totalPrice }}</td>
            <td class="px-4 py-2 border-b">{{ item.orderDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps<{
    data: Array<{
      number: string;
      customer: string;
      status: string;
      totalPrice: string;
      orderDate: string;
    }>;
  }>();
  </script>

  