<template>
  <div class="flex items-center justify-center font-mono">
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="flex w-full xl:w-3/4 lg:w-11/12">
          <!-- Left Column (Image) -->
          <div class="relative hidden w-full h-auto bg-gray-400 bg-cover rounded-l-lg lg:block lg:w-1/2"
            :style="{ backgroundImage: 'url(/images/delivery-man.jpg)' }">
            <div class="absolute p-2 text-xl font-bold text-white top-4 left-4">
              <div>Kebu Client</div>
            </div>
            <div class="absolute p-2 text-sm font-normal text-white bottom-5 left-4">
              Elevate your delivery experience with Kebu
            </div>
            <div class="absolute p-2 text-sm font-normal text-white bottom-1 left-4">
              Kebu.io
            </div>
          </div>
          <div class="w-full p-5 bg-white rounded-lg lg:w-1/2 lg:rounded-l-none">

            <h3 class="pt-4 text-2xl font-bold text-center">Sign In</h3>
            <p v-if="errors.api" class="text-xl italic text-center text-red-500">{{ errors.api }}</p>
            <p class="text-gray-500">Enter your username and password to continue.</p>
            <form @submit.prevent="handleLogin" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                  Username
                </label>
                <input v-model="username"
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username" type="text" placeholder="username" />
                <p v-if="errors.username" class="text-xs italic text-red-500">{{ errors.username }}</p>
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                  Password
                </label>
                <div class="relative">
                  <input v-model="password" :type="isPasswordVisible ? 'text' : 'password'"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password" placeholder="***********" />
                  <button type="button" @click="togglePasswordVisibility"
                    class="absolute inset-y-0 flex items-center right-3">
                    <i :class="isPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'" class="text-gray-500"></i>
                  </button>
                </div>
                <p v-if="errors.password" class="text-xs italic text-red-500">{{ errors.password }}</p>
              </div>

              <div class="mb-4">
                <input class="mr-2 leading-tight" type="checkbox" id="rememberMe" v-model="rememberMe" />
                <label class="text-sm" for="rememberMe">Remember Me</label>
              </div>

              <button :disabled="isLoading"
                class="w-full px-4 py-2 font-bold text-white rounded-full bg-primary hover:bg-primaryHover focus:outline-none focus:shadow-outline"
                type="submit">
                <span v-if="!isLoading">Sign In</span>
                <span v-else>Loading...</span>
              </button>

              <hr class="mb-6 border-t" />
              <div class="text-left">
                <p class="text-gray-500">
                  By clicking continue you agree to
                  <NuxtLink to="/terms-of-service" class="underline hover:text-gray-500">Terms of Service</NuxtLink>
                  and
                  <NuxtLink to="/privacy-policy" class="underline hover:text-gray-500">Privacy Policy</NuxtLink>.
                </p>
              </div>

              <div class="text-center">
                <a class="inline-block text-sm align-baseline text-primary hover:text-bg-primaryHover" href="#">
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

const username = ref<string>("");
const password = ref<string>("");
const rememberMe = ref<boolean>(false);
const errors = ref<{ username?: string; password?: string; api?: string }>({});
const isPasswordVisible = ref(false);
const isLoading = ref(false);

const router = useRouter();

onMounted(() => {
  if (localStorage.getItem("rememberMe") === "true") {
    username.value = localStorage.getItem("savedUsername") || "";
    rememberMe.value = true;
  }
});

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};



const handleLogin = async () => {
  errors.value = {};

  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(username.value)) {
    errors.value.username = "Please enter a valid phone number.";
    return;
  }
  if (password.value.length < 5 || password.value.length > 15) {
    errors.value.password = "Password must be 5-15 characters long.";
    return;
  }

  if (rememberMe.value) {
    localStorage.setItem("savedUsername", username.value);
    localStorage.setItem("rememberMe", "true");
  } else {
    localStorage.removeItem("savedUsername");
    localStorage.removeItem("rememberMe");
  }

  isLoading.value = true;
  const { data, error } = await useFetch("https://gateway-test.kebu.io/api/account/v2/auth/token", {
    method: "POST",
    body: {
      username: username.value,
      password: password.value,
      deviceId: null,
      category: "CLIENT",
    },
  });

  isLoading.value = false;
  if (error.value) {
    console.log(error.value.status);

    if (error.value.status === 401) {
      errors.value.password = "Invalid username or password.";
    } else {
      // extract the error to display
      errors.value.api = "Something went wrong. Please try again.";
    }
    return;
  }

  const responseData = data.value as any;
  if (responseData?.access_token) {

    localStorage.setItem("accessToken", responseData.access_token);

    await router.push("/dashboard");
  } else {
    errors.value.api = "Login response did not contain an access token.";
    console.error("Unexpected response structure:", responseData);
  }
};
</script>




<style></style>
