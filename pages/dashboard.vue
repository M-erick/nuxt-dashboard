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
                <button :class="{ 'active-button': activeButton === 'all' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="activeButton = 'all'; filterTable('all')">
                    All
                </button>
                <button :class="{ 'active-button': activeButton === 'partials' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="activeButton = 'partials'; filterTable('partials')">
                    Partials
                </button>
                <button :class="{ 'active-button': activeButton === 'complete' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="activeButton = 'complete'; filterTable('complete')">
                    Complete
                </button>
                <button :class="{ 'active-button': activeButton === 'cancelled' }"
                    class="px-6 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent"
                    @click="activeButton = 'cancelled'; filterTable('cancelled')">
                    Cancelled
                </button>
            </div>
        </div>

        <!-- Records Table -->
        <DataTable :data="tableData" />
    </div>
</template>

<script lang="ts" setup>

const activeButton = ref<string | null>(null);


const filterTable = (type: string) => {
    activeButton.value = type;

}

//dummy data:Fetch this data from endpoint

const tableData = ref([
    { number: 'ORDE5789', customer: 'Muriithi', status: 'Cancelled', totalPrice: 'KES 1500', orderDate: '4th December 2024' },
    { number: 'ORDE5790', customer: 'John Doe', status: 'Complete', totalPrice: 'KES 2500', orderDate: '5th December 2024' },
    { number: 'ORDE5791', customer: 'Jane Doe', status: 'In Progress', totalPrice: 'KES 3500', orderDate: '6th December 2024' },
]);
const totalStats = ref([
    { name: 'Complete', value: 3 },
    { name: 'Partials', value: 0 },
    { name: 'Cancelled', value: 0 },
    { name: 'Failed', value: 0 }
]);

const todayStats = ref([
    { name: 'Complete', value: 0 },
    { name: 'Partials', value: 0 },
    { name: 'Cancelled', value: 0 },
    { name: 'Failed', value: 0 }
]);

</script>

<style scoped>
.active-button {
    color: #FFA016;
    border-bottom: 2px solid #FFA016;
}
</style>