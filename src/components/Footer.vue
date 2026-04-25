<script setup>
import { Instagram, Youtube } from 'lucide-vue-next'
</script>

<template>
  <footer id="kontakt" class="bg-foreground py-12">
    <div class="container mx-auto px-4">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        <div>
          <p class="font-heading text-xl font-extrabold text-primary-foreground mb-4"> Jedlo naviac</p>
          <p class="font-body text-sm text-primary-foreground/60">
            Najdostupnejšie ovocie a zelenina v meste.
          </p>
        </div>
        <div>
          <p class="font-heading font-bold text-primary-foreground mb-3">Kontakt</p>
          <p class="font-body text-sm text-primary-foreground/60 mb-1">info@jedlonaviac.sk</p>
          <p class="font-body text-sm text-primary-foreground/60 mb-1">Hálova 16, 851 01 Petržalka</p>
          <p class="font-body text-sm text-primary-foreground/60">IČO: 95262481</p>
        </div>
        <div>
          <p class="font-heading font-bold text-primary-foreground mb-3">Sledujte nás</p>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/" aria-label="Instagram" class="text-primary-foreground/60 hover:text-primary transition-colors">
              <Instagram :size="22" />
            </a>
            <a href="https://www.tiktok.com/" aria-label="TikTok" class="text-primary-foreground/60 hover:text-primary transition-colors font-bold text-lg">
              TT
            </a>
            <a href="https://www.youtube.com/" aria-label="YouTube" class="text-primary-foreground/60 hover:text-primary transition-colors">
              <Youtube :size="22" />
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary-foreground/10 pt-6 text-center">
        <p class="font-body text-xs text-primary-foreground/40">
          © 2026 Jedlo naviac, s. r. o. – Najdostupnejšie ovocie a zelenina v meste.
        </p>
      </div>
    </div>
  </footer>
</template>