<template>
  <div class="flex flex-row justify-center m-0 lg:mt-20 lg:mr-[10%]">
    <div class="flex flex-row">
      <div class="flex-col -mb-3.5 hidden lg:flex">
        <nuxt-img
          preload
          format="webp"
          height="353"
          width="288"
          src="assets/images/phone-qinvi.webp"
          alt="Qinvi Example Phone Wedding Invitation"
        />
      </div>
      <div
        class="flex flex-col items-center mt-20 lg:mt-0 lg:items-start mx-4 lg:ml-16"
      >
        <p class="header-1 text-primary text-center lg:text-left">
          Make Your Wedding <br />
          Invitations Timeless with <br />
          a Modern Twist
        </p>
        <p
          class="body-1 text-black-20 mx-6 lg:mx-0 mt-6 lg:mt-0 mb-3 text-center lg:text-left"
        >
          Mudahkan Persiapan Acaramu dengan Fitur <br class="hidden lg:block" />
          Sebar Undangan yang Mudah Dipakai
        </p>
        <div class="flex flex-row my-20 lg:my-0" @click="handleContact">
          <button
            class="bg-brown-20 hover:bg-brown-40 active:bg-brown-50 focus:outline-none focus:ring focus:ring-brown-00 transition-all rounded-full text-white py-3 px-6"
          >
            <span>Contact Now</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleContact = (): void => {
  window.open(
    "https://api.whatsapp.com/send/?phone=6281392608448&text&type=phone_number&app_absent=0"
  );
};
</script>
