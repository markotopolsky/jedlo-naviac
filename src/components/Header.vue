<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const navItems = [
  { label: 'O nás', href: '#preco-my' },
  { label: 'Ako to funguje', href: '#ako-to-funguje' },
  { label: 'Pre farmárov', href: '#pre-farmarov' },
  { label: 'Kontakt', href: '#kontakt' },
]

const mobileOpen = ref(false)
</script>

<template>
  <header class="fixed h-[90px] flex flex-col justify-center top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div class="container mx-auto flex items-center justify-between px-4">
      <a href="#" class="font-heading text-3xl font-extrabold text-primary">
        Jedlo naviac
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="font-body text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-foreground"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <X v-if="mobileOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </div>

    <!-- Mobile menu -->
    <nav v-if="mobileOpen" class="md:hidden bg-background border-t border-border px-4 pb-4">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        @click="mobileOpen = false"
        class="block py-3 font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>