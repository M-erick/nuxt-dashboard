<template>
    <div class="font-mono bg-gray-400 min-h-screen flex items-center justify-center">
      <!-- Container -->
      <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
          <!-- Row -->
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <!-- Left Column (Image) -->
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              :style="{ backgroundImage: 'url(/images/delivery-man.jpg)' }"
            ></div>
            <!-- Right Column (Form) -->
            <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form @submit.prevent="handleLogin" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                    Phone Number
                  </label>
                  <input
                    v-model="username"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <p v-if="errors.username" class="text-xs italic text-red-500">{{ errors.username }}</p>
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Password
                  </label>
                  <input
                    v-model="password"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="***********"
                  />
                  <p v-if="errors.password" class="text-xs italic text-red-500">{{ errors.password }}</p>
                </div>
                <div class="mb-4">
                  <input class="mr-2 leading-tight" type="checkbox" id="rememberMe" v-model="rememberMe" />
                  <label class="text-sm" for="rememberMe">Remember Me</label>
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Create an Account!
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const username = ref<string>("");
  const password = ref<string>("");
  const rememberMe = ref<boolean>(false);
  const errors = ref<{ username?: string; password?: string }>({});
  
  const handleLogin = () => {
    // Reset errors
    errors.value = {};
  
    // Validation rules
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(username.value)) {
      errors.value.username = "Please enter a valid phone number.";
    }
    if (password.value.length < 5 || password.value.length > 15) {
      errors.value.password = "Password must be 5-15 characters long.";
    }
  
    if (!errors.value.username && !errors.value.password) {
      // Proceed with login logic/API call
      console.log("Logging in with:", {
        username: username.value,
        password: password.value,
        rememberMe: rememberMe.value,
      });
      // Add API call logic here
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  