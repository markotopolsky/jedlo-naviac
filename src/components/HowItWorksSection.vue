<script setup>
import { Tractor, Package, Bike } from 'lucide-vue-next'

const steps = [
  {
    icon: Tractor,
    title: 'Krok 1',
    description: 'Lokálni farmári nám dodajú ovocie a zeleninu, ktorá by inak skončila ako odpad.',
  },
  {
    icon: Package,
    title: 'Krok 2',
    description: 'V našom sklade na tovar preberieme, skontrolujeme, roztriedime a zabalíme do praktických balíčkov.',
  },
  {
    icon: Bike,
    title: 'Krok 3',
    description: 'Objednáte si nás cez Wolt alebo Bolt Food a kuriér vám balíček dovezie až domov.',
  },
]
</script>

<template>
  <section id="ako-to-funguje" class="py-20 bg-section-gradient">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-14">
        Tri kroky k záchrane jedla
      </h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="text-center bg-background rounded-2xl p-8 shadow-card border border-border hover:border-primary-light transition-colors"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <component :is="step.icon" class="text-primary" :size="30" />
          </div>
          <h3 class="font-heading text-xl font-bold text-foreground mb-3">{{ step.title }}</h3>
          <p class="font-body text-muted-foreground text-lg leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>