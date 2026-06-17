<template>
  <div class="p-8 bg-dark min-h-screen space-y-12">
    <div>
      <h1 class="text-4xl font-serif text-accent mb-2">Button Component Showcase</h1>
      <p class="text-text">All variants, sizes, and states of the reusable Button component</p>
    </div>

    <!-- Primary Variant -->
    <section class="space-y-4">
      <h2 class="text-2xl font-serif text-secondary">Primary Variant</h2>
      <p class="text-text text-sm">Gold background with black text - primary action</p>
      <div class="flex flex-wrap gap-4 items-center">
        <Button variant="primary" size="sm">Small Primary</Button>
        <Button variant="primary" size="md">Medium Primary</Button>
        <Button variant="primary" size="lg">Large Primary</Button>
        <Button variant="primary" size="md" disabled>Disabled Primary</Button>
        <Button variant="primary" size="md" loading>Loading...</Button>
      </div>
    </section>

    <!-- Secondary Variant -->
    <section class="space-y-4">
      <h2 class="text-2xl font-serif text-secondary">Secondary Variant</h2>
      <p class="text-text text-sm">Dark background with light text - alternative action</p>
      <div class="flex flex-wrap gap-4 items-center">
        <Button variant="secondary" size="sm">Small Secondary</Button>
        <Button variant="secondary" size="md">Medium Secondary</Button>
        <Button variant="secondary" size="lg">Large Secondary</Button>
        <Button variant="secondary" size="md" disabled>Disabled Secondary</Button>
        <Button variant="secondary" size="md" loading>Loading...</Button>
      </div>
    </section>

    <!-- Outline Variant -->
    <section class="space-y-4">
      <h2 class="text-2xl font-serif text-secondary">Outline Variant</h2>
      <p class="text-text text-sm">Bordered style with gold accent - subtle action</p>
      <div class="flex flex-wrap gap-4 items-center">
        <Button variant="outline" size="sm">Small Outline</Button>
        <Button variant="outline" size="md">Medium Outline</Button>
        <Button variant="outline" size="lg">Large Outline</Button>
        <Button variant="outline" size="md" disabled>Disabled Outline</Button>
        <Button variant="outline" size="md" loading>Loading...</Button>
      </div>
    </section>

    <!-- Link as Button -->
    <section class="space-y-4">
      <h2 class="text-2xl font-serif text-secondary">As Link (href)</h2>
      <p class="text-text text-sm">Buttons can render as links when href is provided</p>
      <div class="flex flex-wrap gap-4 items-center">
        <Button variant="primary" href="#portfolio">Link as Button</Button>
        <Button variant="secondary" href="#about">Secondary Link</Button>
        <Button variant="outline" href="#contact">Outline Link</Button>
      </div>
    </section>

    <!-- Size Comparison -->
    <section class="space-y-4">
      <h2 class="text-2xl font-serif text-secondary">Size Comparison</h2>
      <p class="text-text text-sm">Three responsive sizes: sm, md, lg</p>
      <div class="flex flex-wrap gap-4 items-end">
        <div class="flex flex-col gap-2 items-start">
          <span class="text-sm text-text">Small (sm)</span>
          <Button variant="primary" size="sm">Book Now</Button>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-sm text-text">Medium (md)</span>
          <Button variant="primary" size="md">Book Now</Button>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-sm text-text">Large (lg)</span>
          <Button variant="primary" size="lg">Book Now</Button>
        </div>
      </div>
    </section>

    <!-- States -->
    <section class="space-y-4">
      <h2 class="text-2xl font-serif text-secondary">Interactive States</h2>
      <p class="text-text text-sm">Hover, active, and disabled states (try interacting)</p>
      <div class="flex flex-wrap gap-4 items-center">
        <div class="flex flex-col gap-2 items-start">
          <span class="text-xs text-text uppercase">Normal</span>
          <Button variant="primary">Normal State</Button>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-xs text-text uppercase">Hover (try me!)</span>
          <Button variant="primary">Hover State</Button>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-xs text-text uppercase">Active (press)</span>
          <Button variant="primary">Active State</Button>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-xs text-text uppercase">Disabled</span>
          <Button variant="primary" disabled>Disabled State</Button>
        </div>
      </div>
    </section>

    <!-- Loading States -->
    <section class="space-y-4">
      <h2 class="text-2xl font-serif text-secondary">Loading States</h2>
      <p class="text-text text-sm">Shows spinner and disables interaction</p>
      <div class="flex flex-wrap gap-4 items-center">
        <div class="flex flex-col gap-2 items-start">
          <span class="text-xs text-text uppercase">Primary Loading</span>
          <Button variant="primary" size="md" loading>Processing...</Button>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-xs text-text uppercase">Secondary Loading</span>
          <Button variant="secondary" size="md" loading>Processing...</Button>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <span class="text-xs text-text uppercase">Outline Loading</span>
          <Button variant="outline" size="md" loading>Processing...</Button>
        </div>
      </div>
    </section>

    <!-- Usage Example -->
    <section class="space-y-4 bg-border p-6 rounded">
      <h2 class="text-2xl font-serif text-secondary">Usage Example</h2>
      <pre class="text-text text-sm overflow-x-auto"><code>&lt;Button 
  variant="primary" 
  size="md" 
  href="/booking"
  @click="handleClick"
&gt;
  Book Appointment
&lt;/Button&gt;

&lt;!-- Props --&gt;
variant: 'primary' | 'secondary' | 'outline'
size: 'sm' | 'md' | 'lg'
disabled: boolean
loading: boolean
href: string (optional - renders as link)

&lt;!-- Events --&gt;
@click: emitted when button is clicked</code></pre>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
</script>

<style scoped>
pre {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #ffd700;
}
</style>
