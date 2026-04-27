<script setup>
import heroImage from '@/assets/hero-fruits.png'
</script>

<template>
  <section class="bg-hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center gap-12">
        <div class="w-full">
          <img
            :src="heroImage"
            alt="Čerstvé škaredé ovocie a zelenina na drevenom stole"
            class="w-full rounded-2xl object-cover max-h-[500px]"
          />
        </div>
        <div class="animate-fade-in-up text-center max-w-2xl">
          <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Zachraňujeme jedlo, ktoré by inak skončilo
            <span class="text-gradient-primary">
              <br>
                v koši.
              </br>
            </span>
          </h1>
          <p class="font-body text-2xl text-muted-foreground mb-8">
            Čerstvé ovocie a zelenina od lokálnych farmárov. Bez estetických chýb, no plné chuti. Doručíme až k vám cez Wolt a Bolt.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="https://wolt.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base shadow-soft"
            >
              Objednaj cez Wolt
            </a>
            <a
              href="https://food.bolt.eu"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base shadow-soft"
            >
              Objednaj cez Bolt Food
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>