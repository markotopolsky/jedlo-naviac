<script setup>
import personImg from '@/assets/person.png'


const team = [
  {
    name: 'Martin Miklec',
    role: 'Technológ a vizionár',
    description: 'Študent programovania, ktorý prepája IT so záchranou jedla.',
    image: personImg,
  },
  {
    name: 'Juraj Slaný',
    role: 'Marketingový stratég',
    description: 'Ekonomickú univerzitu vymenil za startup s poslaním.',
    image: personImg,
  },
]
</script>

<template>
  <section class="py-20 bg-section-gradient">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
        Ľudia, ktorí to robia
      </h2>
      <div class="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div
          v-for="member in team"
          :key="member.name"
          class="text-center bg-background rounded-2xl p-8 shadow-card border border-border"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-primary-light"
          />
          <h3 class="font-heading text-xl font-bold text-foreground">{{ member.name }}</h3>
          <p class="font-body text-lg text-primary font-semibold mb-2">{{ member.role }}</p>
          <p class="font-body text-lg text-muted-foreground">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>