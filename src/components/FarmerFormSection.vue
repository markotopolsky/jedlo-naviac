<script setup>
import { ref, reactive } from 'vue'
import { z } from 'zod'

const farmerSchema = z.object({
  name: z.string().trim().min(1, 'Meno je povinné').max(100),
  email: z.string().trim().email('Zadajte platný email').max(255),
  phone: z.string().trim().min(1, 'Telefónne číslo je povinné').max(20),
  message: z.string().trim().min(1, 'Správa je povinná').max(2000),
})

const form = reactive({ name: '', email: '', phone: '', message: '' })
const errors = ref({})
const submitted = ref(false)
const submitError = ref('')
const isSubmitting = ref(false)

const handleSubmit = async () => {
  const result = farmerSchema.safeParse(form)
  if (!result.success) {
    const fieldErrors = {}
    result.error.errors.forEach((err) => {
      if (err.path[0]) fieldErrors[err.path[0]] = err.message
    })
    errors.value = fieldErrors
    return
  }

  errors.value = {}
  submitError.value = ''
  isSubmitting.value = true

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || 'Nepodarilo sa odoslat spravu.')
    }

    submitted.value = true
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
  } catch (_err) {
    submitError.value = 'Spravu sa nepodarilo odoslat. Skuste to prosim znova.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="pre-farmarov" class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
        Pre farmárov
      </h2>
      <p class="text-center text-muted-foreground text-xl mb-10 max-w-xl mx-auto font-body">
        Ste farmár a máte prebytočnú úrodu? Ozvite sa nám a dohodneme spoluprácu.
      </p>
      <div class="max-w-lg mx-auto bg-card rounded-2xl p-8 shadow-card border border-border">

        <!-- Po odoslaní -->
        <div v-if="submitted" class="text-center py-8">
          <p class="font-heading text-xl font-bold text-primary mb-2">Ďakujeme za správu!</p>
          <p class="font-body text-muted-foreground">Ozveme sa vám čo najskôr.</p>
        </div>

        <!-- Formulár -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label class="font-body text-lg font-medium text-foreground block mb-1.5">Meno</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Vaše meno"
            />
            <p v-if="errors.name" class="text-destructive text-sm mt-1">{{ errors.name }}</p>
          </div>
          <div>
            <label class="font-body text-lg font-medium text-foreground block mb-1.5">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="vas@email.sk"
            />
            <p v-if="errors.email" class="text-destructive text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div>
            <label class="font-body text-lg font-medium text-foreground block mb-1.5">Telefónne číslo</label>
            <input
              v-model="form.phone"
              type="tel"
              class="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="+421 900 000 000"
            />
            <p v-if="errors.phone" class="text-destructive text-sm mt-1">{{ errors.phone }}</p>
          </div>
          <div>
            <label class="font-body text-lg font-medium text-foreground block mb-1.5">Správa</label>
            <textarea
              v-model="form.message"
              rows="4"
              class="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Popíšte vašu ponuku..."
            />
            <p v-if="errors.message" class="text-destructive text-lg mt-1">{{ errors.message }}</p>
          </div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-primary text-primary-foreground font-heading font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {{ isSubmitting ? 'Odosielam...' : 'Odoslať správu' }}
          </button>
          <p v-if="submitError" class="text-destructive text-sm text-center">{{ submitError }}</p>
        </form>

      </div>
    </div>
  </section>
</template>