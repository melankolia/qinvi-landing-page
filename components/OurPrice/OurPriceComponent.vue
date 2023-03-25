<template>
  <div class="flex flex-col my-20">
    <div class="flex flex-col mb-14 items-center text-center">
      <p class="header-2 text-secondary">
        Price for
        <span class="text-primary"> Website Invitation </span>
      </p>
    </div>
    <div
      class="flex flex-col items-center lg:flex-row justify-center space-y-12 lg:space-y-0 space-x-0 lg:space-x-7"
    >
      <OurPriceCard
        v-for="(e, i) in OurPriceList"
        :key="i"
        class="hidden lg:flex"
        v-bind="e"
      />
      <OurPriceCard
        v-for="(e, i) in OurPriceListMobile"
        :key="i"
        v-bind="e"
        class="flex lg:hidden"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { OurPriceCardProps } from "@/components/OurPrice/interfaces/CardOurPrice";

const OurPriceList: Ref<OurPriceCardProps[]> = ref([
  {
    isBestSeller: false,
    package: "LITE",
    price: 100,
    perPackage: "Per Year",
    buttonText: "Order Now",
    features: [
      {
        icon: true,
        description: "Bayar 1 dapat 2 Acara",
      },
      {
        icon: true,
        description: "Nama Tamu Unlimited",
      },
      {
        icon: true,
        description: "Free Request Font",
      },
      {
        icon: true,
        description: "Kotak Ucapan",
      },
      {
        icon: true,
        description: "Amplop Online",
      },
      {
        icon: true,
        description: "Love Story",
      },
      {
        icon: true,
        description: "RSVP",
      },
      {
        icon: true,
        description: "Whatsapp",
      },
      {
        icon: false,
        description: "Gallery Foto Bebas",
      },
      {
        icon: false,
        description: "Free Request Music",
      },
      {
        icon: false,
        description: "Countdown Acara",
      },
      {
        icon: false,
        description: "Add Video",
      },
      {
        icon: false,
        description: "Save The Date",
      },
      {
        icon: false,
        description: "Background By Photo",
      },
      {
        icon: false,
        description: "Design By Request",
      },
      {
        icon: false,
        description: "Custom Domain <br /> (namapengantin.com)",
      },
    ],
  },
  {
    isBestSeller: true,
    package: "Premium",
    price: 150,
    perPackage: "Unlimited",
    buttonText: "Order Now",
    features: [
      {
        icon: true,
        description: "Bayar 1 dapat 2 Acara",
      },
      {
        icon: true,
        description: "Nama Tamu Unlimited",
      },
      {
        icon: true,
        description: "Free Request Font",
      },
      {
        icon: true,
        description: "Kotak Ucapan",
      },
      {
        icon: true,
        description: "Amplop Online",
      },
      {
        icon: true,
        description: "Love Story",
      },
      {
        icon: true,
        description: "RSVP",
      },
      {
        icon: true,
        description: "Whatsapp",
      },
      {
        icon: true,
        description: "Gallery Foto Bebas",
      },
      {
        icon: true,
        description: "Free Request Music",
      },
      {
        icon: true,
        description: "Countdown Acara",
      },
      {
        icon: true,
        description: "Add Video",
      },
      {
        icon: true,
        description: "Save The Date",
      },
      {
        icon: true,
        description: "Background By Photo",
      },
      {
        icon: false,
        description: "Design By Request",
      },
      {
        icon: false,
        description: "Custom Domain <br /> (namapengantin.com)",
      },
    ],
  },
  {
    isBestSeller: false,
    package: "Custom",
    price: 300,
    perPackage: "Unlimited",
    buttonText: "Chat Admin",
    features: [
      {
        icon: true,
        description: "Bayar 1 dapat 2 Acara",
      },
      {
        icon: true,
        description: "Nama Tamu Unlimited",
      },
      {
        icon: true,
        description: "Free Request Font",
      },
      {
        icon: true,
        description: "Kotak Ucapan",
      },
      {
        icon: true,
        description: "Amplop Online",
      },
      {
        icon: true,
        description: "Love Story",
      },
      {
        icon: true,
        description: "RSVP",
      },
      {
        icon: true,
        description: "Whatsapp",
      },
      {
        icon: true,
        description: "Gallery Foto Bebas",
      },
      {
        icon: true,
        description: "Free Request Music",
      },
      {
        icon: true,
        description: "Countdown Acara",
      },
      {
        icon: true,
        description: "Add Video",
      },
      {
        icon: true,
        description: "Save The Date",
      },
      {
        icon: true,
        description: "Background By Photo",
      },
      {
        icon: true,
        description: "Design By Request",
      },
      {
        icon: true,
        description: "Custom Domain <br /> (namapengantin.com)",
      },
    ],
  },
]);

const OurPriceListMobile: Ref<OurPriceCardProps[]> = ref([
  {
    isBestSeller: false,
    package: "LITE",
    price: 100,
    perPackage: "Per Year",
    buttonText: "Order Now",
    features: [
      {
        icon: true,
        description: "Bayar 1 dapat 2 Acara",
      },
      {
        icon: true,
        description: "Nama Tamu Unlimited",
      },
      {
        icon: true,
        description: "Free Request Font",
      },
      {
        icon: true,
        description: "Kotak Ucapan",
      },
      {
        icon: true,
        description: "Love Story",
      },
      {
        icon: true,
        description: "Whatsapp",
      },
      {
        icon: true,
        description: "RSVP",
      },
    ],
  },
  {
    isBestSeller: true,
    package: "Premium",
    price: 150,
    perPackage: "Unlimited",
    buttonText: "Order Now",
    features: [
      {
        icon: true,
        description: "All Feature In Lite",
      },
      {
        icon: true,
        description: "Gallery Foto Bebas",
      },
      {
        icon: true,
        description: "Free Request Music",
      },
      {
        icon: true,
        description: "Countdown Acara",
      },
      {
        icon: true,
        description: "Add Video",
      },
      {
        icon: true,
        description: "Save The Date",
      },
      {
        icon: true,
        description: "Background by Photo",
      },
    ],
  },
  {
    isBestSeller: false,
    package: "Custom",
    price: 300,
    perPackage: "Unlimited",
    buttonText: "Chat Admin",
    features: [
      {
        icon: true,
        description: "All Feature in Premium",
      },
      {
        icon: true,
        description: "Design by Request",
      },
      {
        icon: true,
        description: "Custom Domain",
      },
      {
        icon: true,
        description: "QR Code (Coming Soon)",
      },
      {
        icon: true,
        description: "Amplop Online",
      },
      {
        icon: true,
        description: "Love Story",
      },
    ],
  },
]);
</script>

<style scoped>
.box-shadow {
  box-shadow: inset 0px 7.49999px 44.9999px rgba(38, 45, 118, 0.08);
}
</style>
