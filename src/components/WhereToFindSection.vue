<script setup>
import { MapPin } from 'lucide-vue-next'
import woltIcon from '@/assets/wolt_icon.png'
import boltIcon from '@/assets/bolt_icon.png'
</script>

<template>
  <section class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-6">
        Sme len klik od vás
      </h2>
      <p class="text-center text-muted-foreground text-xl mb-10 max-w-2xl mx-auto font-body">
        Momentálne pôsobíme v Bratislave a okolí. Na doručenie využívame platformy Wolt a Bolt Food. Stačí si otvoriť aplikáciu, vyhľadať „Jedlo naviac" a objednať.
      </p>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <!-- Tlačidlá -->
        <div class="flex flex-col items-center justify-center gap-6 bg-card rounded-2xl p-8 shadow-card border border-border">
          <p class="font-heading font-bold text-foreground text-2xl mb-2">Objednajte cez</p>
          <div class="flex gap-6">
            <a
              href="https://wolt.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:opacity-90 transition-opacity"
            >
              <img :src="woltIcon" alt="Wolt" class="w-[100px] h-[100px] object-contain" />
            </a>
            <a
              href="https://food.bolt.eu"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:opacity-90 transition-opacity"
            >
              <img :src="boltIcon" alt="Bolt Food" class="w-[100px] h-[100px] object-contain" />
            </a>
          </div>
        </div>

        <!-- Mapa -->
        <div class="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
          <div class="p-4 flex items-center gap-2 border-b border-border">
            <MapPin class="text-primary" :size="18" />
            <span class="font-body text-sm text-muted-foreground">Hálova 16, 851 01 Petržalka</span>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Stredn%C3%A1%20priemyseln%C3%A1%20%C5%A1kola%20elektrotechnick%C3%A1%2C%20H%C3%A1lova%2016&t=m&z=17&output=embed&iwloc=near"
            width="100%"
            height="250"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Poloha skladu Jedlo naviac"
          ></iframe>
        </div>

      </div>
    </div>
  </section>
</template>