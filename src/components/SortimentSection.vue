<script setup>
import { Apple, ShoppingBasket, Instagram } from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 bg-section-gradient">
    <div class="container mx-auto px-4 text-center">
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-6">
        Čo si môžete vybrať
      </h2>
      <div class="max-w-2xl mx-auto">
        <div class="bg-background rounded-2xl p-8 shadow-card border border-border">
          <div class="flex justify-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Apple class="text-primary" :size="22" />
            </div>
            <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <ShoppingBasket class="text-accent" :size="22" />
            </div>
          </div>
          <p class="font-body text-muted-foreground text-xl leading-relaxed mb-6">
            Čerstvé ovocie a zelenina podľa sezóny, výhodné mixy a balíčky, kyslá kapusta, nakladaná zelenina a iné dobroty.
          </p>
          <div class="border-t border-border pt-6">
            <p class="font-body text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Instagram :size="16" class="text-primary" />
              Ponuka sa mení podľa toho, čo práve dozrieva na poliach. Sledujte nás na Instagrame!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>