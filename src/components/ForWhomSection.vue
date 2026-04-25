<script setup>
import { BadgeEuro, Leaf, Heart, Home } from 'lucide-vue-next'

const items = [
  { icon: BadgeEuro, text: '... chcú ušetriť a nekupujú značku, ale kvalitu.' },
  { icon: Leaf, text: '... nie je im ľahostajné plytvanie potravinami.' },
  { icon: Heart, text: '... radi podporia slovenských farmárov.' },
  { icon: Home, text: '... milujú pohodlie nákupu z domu.' },
]
</script>

<template>
  <section class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
        Jedlo naviac je pre všetkých, ktorí...
      </h2>
      <div class="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex items-start gap-4 bg-card rounded-xl p-6 shadow-card border border-border"
        >
          <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <component :is="item.icon" class="text-accent" :size="20" />
          </div>
          <p class="font-body text-foreground text-lg font-medium">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>