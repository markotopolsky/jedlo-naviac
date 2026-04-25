<script setup>
import { MapPin } from 'lucide-vue-next'
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
              class="bg-accent text-accent-foreground text-xl font-heading font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Wolt
            </a>
            <a
              href="https://food.bolt.eu"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-primary text-primary-foreground text-xl font-heading font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Bolt Food
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.5!2d17.1!3d48.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA3JzEyLjAiTiAxN8KwMDYnMDAuMCJF!5e0!3m2!1ssk!2ssk!4v1600000000000!5m2!1ssk!2ssk"
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