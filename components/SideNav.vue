<template>
    <div class="flex flex-col bg-white shadow-md w-60">
        <nav>
            <NuxtLink to="/dashboard"
                class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]">
                <i class="mr-2 fas fa-home"></i> Dashboard
            </NuxtLink>
            <NuxtLink to="/orders"
                class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]">
                <i class="mr-2 fas fa-file-alt"></i> Orders
            </NuxtLink>
            <NuxtLink to="/customers"
                class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]">
                <i class="mr-2 fas fa-users"></i> Customers
            </NuxtLink>
            <NuxtLink to="/transactions"
                class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]">
                <i class="mr-2 fas fa-exchange-alt"></i> Transactions
            </NuxtLink>
        </nav>
        <NuxtLink to="/logout"
            class="block text-gray-500 py-2.5 px-4 my-4 rounded hover:text-[#FFA016] active:bg-[#F9FAFB]">
            <i class="mr-2 fas fa-sign-out-alt"></i> Log out
        </NuxtLink>

    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>