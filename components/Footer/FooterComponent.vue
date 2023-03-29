<template>
  <div id="subscribe" class="flex flex-col items-center bg-brown-10 pb-7">
    <p class="logo-text my-10">QINVI</p>
    <div class="hidden lg:flex flex-col items-center">
      <p class="text-secondary body-5">Subscribe to get our Newsletter</p>
      <div class="flex flex-row space-x-3 my-10">
        <input
          id="emailId"
          type="text"
          name="email"
          class="rounded-full pl-5"
          placeholder="Your Email"
        />
        <button
          class="bg-brown-20 hover:bg-brown-40 active:bg-brown-50 focus:outline-none focus:ring focus:ring-brown-00 transition-all rounded-full text-white px-4 py-1"
        >
          <span class="caption-2">Subscribe</span>
        </button>
      </div>
    </div>
    <div class="flex lg:hidden text-secondary flex-col px-8 space-y-4">
      <div class="flex flex-row">
        <nuxt-img
          preload
          src="assets/images/icons/icon-location.png"
          alt="Icon Location Qinvi"
          class="h-[28px] mr-2"
          height="28"
          width="28"
        />
        <p class="caption-4">
          Jl. Karonsih Utara VIII No.360, Ngaliyan, Kec. Ngaliyan, Kota
          Semarang, Jawa Tengah 50181
        </p>
      </div>
      <div class="flex flex-row">
        <nuxt-img
          preload
          src="assets/images/icons/icon-contact.png"
          alt="Icon Location Qinvi"
          class="h-[28px] mr-2"
          height="28"
          width="28"
        />
        <p class="caption-4">62 813-9260-8448</p>
      </div>
      <div class="flex flex-row">
        <nuxt-img
          preload
          src="assets/images/icons/icon-email.png"
          alt="Icon Location Qinvi"
          class="h-[20px] ml-0.5 mr-2.5"
          height="20"
          width="24"
        />
        <p class="caption-4">adm.qinvi@gmail.com</p>
      </div>
      <div class="flex flex-row justify-center space-x-6 pt-8">
        <nuxt-img
          preload
          src="assets/images/icons/icon-twitter.png"
          alt="Twitter Qinvi"
          class="h-[40px] hover:cursor-pointer"
          height="40"
          width="40"
        />
        <nuxt-img
          preload
          src="assets/images/icons/icon-facebook.png"
          alt="Facebook Qinvi"
          class="h-[40px] hover:cursor-pointer"
          height="40"
          width="40"
        />
        <nuxt-img
          preload
          src="assets/images/icons/icon-linkedin.png"
          alt="Linkedin Qinvi"
          class="h-[40px] hover:cursor-pointer"
          height="40"
          width="40"
        />
      </div>
    </div>
    <p class="text-secondary body-6">© 2023 Powered By <b>Qinvi Team</b></p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
