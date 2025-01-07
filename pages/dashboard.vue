<template>
    <div>
        <div class="flex flex-col h-screen bg-gray-100">


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
                        <a href="#"
                            class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="mr-2 fas fa-user"></i> Profile
                        </a>
                        <a href="#"
                            class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="mr-2 fas fa-cog"></i> Settings
                        </a>
                        <a href="#"
                            class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="mr-2 fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </div>



            </div>
            <div class="pt-3 pl-5 mb-0">

                <h2 class="text-xl font-bold text-gray-700">Dashboard</h2>
                <p class="text-gray-500">Metric and Info</p>
            </div>

            <div class="flex flex-wrap flex-1">
                <div v-if="showSideNav" class="flex flex-col hidden w-full p-2 bg-white md:w-60 md:flex" id="sideNav">
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

                    <a class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]"
                        href="#">
                        <i class="mr-2 fas fa-sign-out-alt"></i>Log out
                    </a>

                    <div class="h-px mt-2 bg-gradient-to-r from-orange-300 to-orange-500"></div>

                    <p class="px-5 py-3 mb-1 text-xs text-left text-orange-500">Copyright erick@2025</p>

                </div>

                <div class="flex-1 w-full p-4 md:w-1/2">

                    <div class="flex flex-wrap mt-8 space-x-0 space-y-2 md:space-x-4 md:space-y-0">

                        <div class="flex-1 p-4 bg-white rounded-lg shadow md:w-1/2">
                            <h2 class="pb-1 text-lg font-semibold text-gray-700">Total Deliveries</h2>
                            <div class="my-1"></div>
                            <div class="flex flex-wrap gap-x-4 gap-y-4">
                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700">Complete</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>

                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700">Partials</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>
                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700">Cancelled</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>
                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700">Failed</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="flex-1 p-4 bg-white rounded-lg shadow md:w-1/2">
                            <h2 class="pb-1 text-lg font-semibold text-gray-700">Today Deliveries</h2>
                            <div class="my-1"></div>
                            <div class="flex flex-wrap gap-x-4 gap-y-4">
                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700">Complete</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>

                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700">Partials</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>
                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700">Cancelled</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>
                                <div class="w-full md:w-[calc(50%-0.5rem)] bg-gray-100 p-4 shadow rounded-lg"
                                    style="height: 150px;">
                                    <h2 class="pb-1 text-lg font-semibold text-gray-700 ">Failed</h2>
                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-lg font-bold text-gray-700">0</span>
                                        <i class="text-xl text-gray-500 fas fa-store"></i>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
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

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

const showSideNav = ref(false);
const activeButton = ref<string | null>(null);

const toggleSideNav = () => {
    showSideNav.value = !showSideNav.value;
}
const filterTable = (type: string) => {
    activeButton.value = type;

}
const isDropdownVisible = ref(false);

function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value;
}

function closeDropdown() {
    isDropdownVisible.value = false;
}

const isDarkMode = ref(false);



function toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
</script>


<style>
.active-button {
    background-color: #F9FAFB;
    color: #FFA016;
    border-color: #FFA016;
}
</style>
