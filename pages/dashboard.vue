<template>
    <div class="flex flex-col h-screen bg-gray-100">
        <div class="pt-3 pl-5 mb-0">
            <h2 class="text-xl font-bold text-gray-700">Dashboard</h2>
            <p class="text-gray-500">Metric and Info</p>
        </div>

        <div class="flex flex-wrap flex-1 p-4 space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <DeliveryStats title="Total Deliveries" :stats="totalStats" />
            <DeliveryStats title="Today Deliveries" :stats="todayStats" />
        </div>

        <!-- Filters -->
        <div class="flex items-center justify-center bg-gray-100">
            <div class="flex justify-center w-1/2 m-6 bg-white rounded-md shadow">
                <button
                    :class="{ 'active-button': activeButton === 'all' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="filterTable('all')"
                >
                    All
                </button>
                <button
                    :class="{ 'active-button': activeButton === 'partials' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="filterTable('partials')"
                >
                    Partials
                </button>
                <button
                    :class="{ 'active-button': activeButton === 'complete' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="filterTable('complete')"
                >
                    Complete
                </button>
                <button
                    :class="{ 'active-button': activeButton === 'cancelled' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="filterTable('cancelled')"
                >
                    Cancelled
                </button>
            </div>
        </div>

      
        <DataTable :data="filteredTableData" />
    </div>
</template>

<script lang="ts" setup>
const totalStats = ref<{ name: string; value: number }[]>([]);
const todayStats = ref<{ name: string; value: number }[]>([]);
const tableData = ref<any[]>([]);
const activeButton = ref<string | null>('all');

const fetchData = async () => {
  try {
    const { data: todayStatsData, error: todayStatsError } = await useFetch('/api/todayStats');
    const { data: tableDataResponse, error: tableError } = await useFetch('/api/tableData');

    if (todayStatsError.value) {
      console.error('Error fetching today stats data:', todayStatsError.value);
    } else if (todayStatsData.value) {
      const { todayStats: fetchedTodayStats } = todayStatsData.value;
      todayStats.value = fetchedTodayStats || [];
      totalStats.value = fetchedTodayStats || [];
    }

    if (tableError.value) {
      console.error('Error fetching table data:', tableError.value);
    } else if (tableDataResponse.value) {
      tableData.value = tableDataResponse.value || [];
    }
  } catch (error) {
    console.error('Error during data fetch:', error);
  }
};

onMounted(() => {
  fetchData();
});

const filterTable = (filter: string) => {
  activeButton.value = filter;
};

const filteredTableData = computed(() => {
  if (activeButton.value === 'all') {
    return tableData.value;
  }
  return tableData.value.filter((item) => item.status.toLowerCase() === activeButton.value);
});
</script>

<style scoped>
.active-button {
    color: #FFA016;
    border-bottom: 2px solid #FFA016;
}
</style>