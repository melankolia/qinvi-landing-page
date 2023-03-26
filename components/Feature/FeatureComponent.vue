<template>
  <div class="flex flex-col items-center text-center mt-20 lg:my-14">
    <div class="flex flex-col lg:mb-20">
      <p class="header-2 text-primary mb-4">
        All-In-One
        <span class="text-secondary"> Cloud Software. </span>
      </p>
      <p class="body-2 text-grey-10 px-2 lg:px-0">
        Buat Persiapan Pernikahanmu Jadi Lebih Mudah dengan Software
        <br class="hidden lg:block" />
        Online Hebat yang Menggabungkan Semua Fitur yang Kamu
        <br class="hidden lg:block" />
        Butuhkan
      </p>
      <nuxt-img
        src="assets/images/laptop-qinvi.webp"
        alt="Image Gambar Laptop Qinvi"
        class="block lg:hidden my-12"
      />
    </div>
    <div
      class="flex flex-col lg:flex-row justify-around space-y-10 lg:space-y-0 space-x-0 lg:space-x-10"
    >
      <FeatureCard
        v-for="(e, i) in features"
        :key="i"
        :icon="e.icon"
        :title="e.title"
        :description="e.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FeatureCardProps } from "@/components/Feature/interfaces/Card";

const features: Ref<FeatureCardProps[]> = ref([
  {
    icon: "assets/images/paper-plane.webp",
    title: "Kirim Undangan",
    description:
      "Persiapkan Acaramu dengan Mudah: Sebarkan Undanganmu ke Teman dan Keluarga dengan Cepat dan Mudah Hanya dengan Beberapa Klik",
  },
  {
    icon: "assets/images/infinity.webp",
    title: "Unlimited Access",
    description:
      "Akses Tanpa Batas dengan Hanya Satu Pembayaran: Nikmati Kemudahan Bayar Sekali Akses Selamanya dengan Produk Kami yang Terbaik",
  },
  {
    icon: "assets/images/people.webp",
    title: "Fast Response Admin",
    description:
      "Nikmati Layanan Fast Response yang Cepat dan Profesional untuk Menyelesaikan Masalah Anda",
  },
]);
</script>
<style scoped></style>
