<script setup>
import { Frown, Globe } from 'lucide-vue-next'
</script>

<template>
  <section id="preco-my" class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
        Nie každé jablko musí byť dokonalé.
      </h2>
      <p class="text-center text-2xl text-muted-foreground mb-14 max-w-2xl mx-auto font-body">
        Jedlo, ktoré vyzerá inak, chutí rovnako. A my ho zachraňujeme.
      </p>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <!-- Problém -->
        <div class="bg-card rounded-2xl p-8 shadow-card border border-border">
          <div class="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
            <Frown class="text-destructive" :size="28" />
          </div>
          <h3 class="font-heading text-2xl font-bold text-foreground mb-3">Problém</h3>
          <p class="font-body text-muted-foreground text-xl leading-relaxed">
            Obchodné reťazce vyradia až 30 % úrody len preto, že je mrkva krivá alebo jablko má škvrnu. Toto jedlo je pritom stopercentne zdravé a chutné.
          </p>
        </div>

        <!-- Riešenie -->
        <div class="bg-card rounded-2xl p-8 shadow-card border border-primary-light/40">
          <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <Globe class="text-primary" :size="28" />
          </div>
          <h3 class="font-heading text-2xl font-bold text-foreground mb-3">Riešenie</h3>
          <p class="font-body text-muted-foreground text-xl leading-relaxed">
            My toto jedlo vykupujeme od farmárov, balíme a posielame ďalej. Šetríme planétu, podporujeme lokálnych pestovateľov a vám prinášame kvalitné potraviny za super ceny.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>