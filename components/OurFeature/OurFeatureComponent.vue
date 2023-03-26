<template>
  <div class="flex flex-col my-12">
    <div class="flex flex-col mb-20 items-center text-center">
      <p class="header-2 text-primary mb-4">
        Our
        <span class="text-secondary"> Feature's </span>
      </p>
      <p
        class="body-2 text-grey-10 max-w-[825px] text-center"
        style="letter-spacing: 0.02em"
      >
        This very extraordinary feature, can make invitation activities more
        efficient
      </p>
    </div>
    <div
      class="flex flex-col lg:items-start lg:flex-row lg:justify-around xl:justify-between xl:mx-[15%] 2xl:mx-[20%]"
    >
      <div class="flex flex-col mb-2.5 lg:mb-0">
        <nuxt-img
          preload
          src="assets/images/mobile-iphone-feature.webp"
          alt="Our Features Qinvi Invitation"
          class="block lg:hidden"
          format="webp"
        />
        <nuxt-img
          preload
          format="webp"
          src="assets/images/iphone-features.webp"
          alt="Our Features Qinvi Invitation"
          width="360"
          class="self-center lg:self-start lg:block hidden"
        />
      </div>
      <div
        class="flex flex-col text-center lg:text-start items-center lg:items-start"
      >
        <p class="header-5 text-secondary mb-4 lg:mb-10">
          Send Invitation By <br />
          <span class="text-primary"> Whatsapp </span>
        </p>
        <div class="flex flex-row">
          <div
            class="hidden lg:flex flex-col rounded-full box-shadow shadow-sm p-2.5 mr-2 w-[40px] h-[40px]"
          >
            <nuxt-img
              preload
              src="assets/images/icon-group.png"
              alt="Qinvi Invitation"
            />
          </div>
          <p class="body-7 text-grey-10 mb-4 lg:mb-12 px-14 lg:px-0">
            Pengantin tidak perlu membuat link <br class="hidden lg:flex" />
            dan mensalin satu per satu manual di <br class="hidden lg:flex" />
            whatsapp
          </p>
        </div>
        <div class="flex flex-row">
          <div
            class="hidden lg:flex flex-col rounded-full box-shadow shadow-sm p-2.5 mr-2 w-[40px] h-[40px]"
          >
            <nuxt-img
              preload
              src="assets/images/icon-copy.png"
              alt="Qinvi Invitation"
            />
          </div>
          <p class="body-7 text-grey-10 px-10 lg:px-0">
            Kirim Whatsapp via Smart Dashboard <br class="hidden lg:flex" />
            jadi lebih mudah.
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col-reverse lg:flex-row items-center lg:justify-around xl:justify-between ml-0 lg:ml-[5%] mt-16 lg:mt-32 xl:ml-[15%] xl:mr-[10%] 2xl:ml-[20%] 2xl:mx-[15%]"
    >
      <div class="flex flex-col items-center lg:items-start lg:px-0">
        <p class="header-5 text-primary mb-4 lg:mb-10">
          Kelola
          <span class="text-secondary">
            Buku <br class="hidden lg:flex" />
            Tamu
          </span>
        </p>
        <p
          class="body-7 text-grey-10 mb-12 text-center lg:text-start px-12 lg:px-0"
        >
          Pengantin tidak perlu membuat link <br class="hidden lg:flex" />
          dan mensalin satu per satu manual di <br class="hidden lg:flex" />
          whatsapp
        </p>
      </div>
      <nuxt-img
        preload
        format="webp"
        src="assets/images/ipad-buku-tamu.webp"
        alt="Feature Buku Tamu Qinvi Invitation"
        class="hidden lg:block"
      />
      <nuxt-img
        preload
        format="webp"
        width="624"
        src="assets/images/mobile-buku-tamu.webp"
        alt="Feature Buku Tamu Qinvi Invitation"
        class="block lg:hidden mb-2.5"
      />
    </div>
    <div
      class="flex flex-col lg:flex-row justify-around xl:justify-between 2xl:mx-[15%] ml-0 lg:ml-[5%] xl:ml-[15%] 2xl:ml-[20%] xl:mr-[10%] mt-0 lg:mt-32"
    >
      <nuxt-img
        preload
        format="webp"
        width="480"
        src="assets/images/iphone-invitation.webp"
        alt="Feature Buku Tamu Qinvi Invitation"
        class="hidden lg:block"
      />
      <nuxt-img
        preload
        format="webp"
        width="480"
        src="assets/images/mobile-invitation.webp"
        alt="Feature Buku Tamu Qinvi Invitation"
        class="block lg:hidden"
      />
      <div
        class="flex flex-col items-center lg:items-start justify-center mt-2.5 lg:mt-24"
      >
        <p class="header-5 text-secondary mb-10">
          Undangan <br class="hidden lg:block" />
          <span class="text-primary"> Personal </span>
        </p>
        <p
          class="body-7 text-grey-10 mb-0 lg:mb-12 text-center lg:text-start px-10 lg:px-0"
        >
          Anda dapat menyapa tamu undangan pernikahan
          <br class="hidden lg:block" />
          Anda dengan undangan yang lebih personal dan
          <br class="hidden lg:block" />
          intim menggunakan fitur Personalized Invitation
        </p>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-center rounded-none lg:rounded-2xl bg-brown-10 mx-auto px-8 pb-6 pt-4 mt-10 lg:mt-24"
    >
      <div class="flex flex-col mx-0 lg:mr-28">
        <p class="header-6 text-brown-30 mb-2">
          Take your wedding festivities to the <br class="hidden lg:block" />
          next level!
        </p>
        <div class="flex flex-row my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-note.png"
            alt="Icon Invitation Qinvi"
            width="22"
            class="h-[24px] mr-2"
          />
          <p class="body-7 text-brown-30">Undangan Website Paket Lamar</p>
        </div>
        <div class="flex flex-row items-center my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-wa.png"
            alt="Icon Invitation Qinvi"
            class="h-[18px] mr-2"
          />
          <p class="body-7 text-brown-30">Whatsapp</p>
        </div>
        <div class="flex flex-row items-center my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-dashboard.png"
            alt="Icon Invitation Qinvi"
            class="h-[18px] mr-2"
          />
          <p class="body-7 text-brown-30">
            Smart Dashboard
            <span class="hidden lg:block">(untuk pengantin)</span>
          </p>
        </div>
        <div class="flex flex-row items-center my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-meeting.png"
            alt="Icon Invitation Qinvi"
            class="h-[18px] mr-2"
          />
          <p class="body-7 text-brown-30">
            Meeting Bersama
            <span class="hidden lg:block">(Online & Offline)</span>
          </p>
        </div>
        <div class="flex flex-row items-center my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-file.png"
            alt="Icon Invitation Qinvi"
            class="h-[18px] mr-2"
          />
          <p class="body-7 text-brown-30">E-Invitation</p>
        </div>
        <div class="flex flex-row items-center my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-gears.png"
            alt="Icon Invitation Qinvi"
            class="h-[18px] mr-2"
          />
          <p class="body-7 text-brown-30">1 Custom Template Blast</p>
        </div>
        <div class="flex flex-row items-center my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-file.png"
            alt="Icon Invitation Qinvi"
            class="h-[18px] mr-2"
          />
          <p class="body-7 text-brown-30">Virtual & Group Assistan</p>
        </div>
        <div class="flex flex-row items-center my-0.5">
          <nuxt-img
            preload
            src="assets/images/icons/icon-qr.png"
            alt="Icon Invitation Qinvi"
            class="h-[18px] mr-2"
          />
          <p class="body-7 text-brown-30">QR Code (Coming Soon)</p>
        </div>
      </div>
      <nuxt-img
        preload
        format="webp"
        src="assets/images/icon-couple.webp"
        width="335"
        alt="Qinvi Icon Couple"
        class="h-[300px] hidden lg:block"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.box-shadow {
  background: #fbfbfb;
  box-shadow: 0px 11.25px 32.9999px rgba(13, 15, 28, 0.12);
}
</style>
