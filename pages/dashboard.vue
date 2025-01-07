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
        <div class="p-4 bg-white rounded-lg shadow">
            <h2 class="pb-4 text-lg font-semibold text-gray-500">Records</h2>
            <div class="h-px mb-6 bg-gradient-to-r from-orange-300 to-orange-500"></div>
            <table class="w-full text-sm table-auto">
                <thead>
                    <tr class="text-sm leading-normal">
                        <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Number
                        </th>
                        <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">
                            Customer
                        </th>
                        <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Status
                        </th>
                        <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Total
                            Price
                        </th>
                        <th class="px-4 py-2 font-bold text-left uppercase border-b text-grey-light">Order
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    <tr class="hover:bg-grey-lighter" data-status="complete">

                        <td class="px-4 py-2 border-b">ORDE5789</td>
                        <td class="px-4 py-2 border-b">muriithi</td>
                        <td class="px-4 py-2 border-b">Cancelled</td>
                        <td class="px-4 py-2 border-b">kes 1500</td>
                        <td class="px-4 py-2 border-b">4th december 2024</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter" data-status="complete">

                        <td class="px-4 py-2 border-b">ORDE5789</td>
                        <td class="px-4 py-2 border-b">muriithi</td>
                        <td class="px-4 py-2 border-b">Cancelled</td>
                        <td class="px-4 py-2 border-b">kes 1500</td>
                        <td class="px-4 py-2 border-b">4th december 2024</td>
                    </tr>

                    <tr class="hover:bg-grey-lighter" data-status="complete">

                        <td class="px-4 py-2 border-b">ORDE5789</td>
                        <td class="px-4 py-2 border-b">muriithi</td>
                        <td class="px-4 py-2 border-b">Cancelled</td>
                        <td class="px-4 py-2 border-b">kes 1500</td>
                        <td class="px-4 py-2 border-b">4th december 2024</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter" data-status="complete">

                        <td class="px-4 py-2 border-b">ORDE5789</td>
                        <td class="px-4 py-2 border-b">muriithi</td>
                        <td class="px-4 py-2 border-b">Cancelled</td>
                        <td class="px-4 py-2 border-b">kes 1500</td>
                        <td class="px-4 py-2 border-b">4th december 2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>

const activeButton = ref<string | null>(null);


const filterTable = (type: string) => {
    activeButton.value = type;

}

//dummy data:Fetch this data from endpoint

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