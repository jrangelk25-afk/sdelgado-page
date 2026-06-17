# Button Component - Quick Reference

## Import
```vue
import Button from '@/components/common/Button.vue'
```

## Quick Examples

### Primary Button (Default)
```vue
<Button>Book Now</Button>
```

### Secondary Button
```vue
<Button variant="secondary">Learn More</Button>
```

### Outline Button
```vue
<Button variant="outline">Explore</Button>
```

### Different Sizes
```vue
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### As Link
```vue
<Button href="/portfolio">View Portfolio</Button>
```

### With Click Handler
```vue
<Button @click="handleClick">Click Me</Button>
```

### Loading State
```vue
<Button :loading="isLoading">Processing...</Button>
```

### Disabled
```vue
<Button disabled>Unavailable</Button>
```

## All Props

| Prop | Values | Default |
|------|--------|---------|
| `variant` | primary, secondary, outline | primary |
| `size` | sm, md, lg | md |
| `disabled` | boolean | false |
| `loading` | boolean | false |
| `href` | string | - |

## All Events

| Event | Emits | When |
|-------|-------|------|
| `@click` | MouseEvent | User clicks button |

## Color Reference

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| primary | Gold #FFD700 | Black #000 | - |
| secondary | Dark Gray #2A2A2A | Light Gray #E8E8E8 | - |
| outline | Transparent | Gold #FFD700 | Gold #FFD700 |

## Size Reference

| Size | Padding | Font Size |
|------|---------|-----------|
| sm | px-3 py-2 | text-sm |
| md | px-4 py-2.5 | text-base |
| lg | px-6 py-3 | text-lg |

## Combinations (Most Common)

```vue
<!-- Hero CTA -->
<Button variant="primary" size="lg" href="/booking">
  Start Your Booking
</Button>

<!-- Secondary Action -->
<Button variant="secondary" size="md" @click="handleSecondary">
  Learn More
</Button>

<!-- Optional/Subtle -->
<Button variant="outline" size="md" href="#details">
  View Details
</Button>

<!-- Form Submit -->
<Button :loading="submitting" @click="submitForm">
  {{ submitting ? 'Submitting...' : 'Submit' }}
</Button>

<!-- Disabled State -->
<Button disabled>Booking Full</Button>

<!-- Small Inline -->
<Button variant="outline" size="sm">Edit</Button>
```

## Hover Effects
- **Lift up** 2px (transform: translateY(-2px))
- **Enhanced shadow** (box-shadow)
- **Brightened colors** (variant-specific)
- **Smooth transition** (300ms)

## Active/Press Effects
- **Slight press down** 1px
- **Reduced shadow**
- **Instant response** with smooth transition

## Styling Tips

### Custom Tailwind Classes
```vue
<Button class="w-full">Full Width Button</Button>
<Button class="mt-4 mb-2">With Margin</Button>
```

### With Icons (use slot)
```vue
<Button>
  📚 Learn More
</Button>
```

### Button Groups
```vue
<div class="flex gap-2">
  <Button variant="outline" @click="cancel">Cancel</Button>
  <Button variant="primary" @click="confirm">Confirm</Button>
</div>
```

## Accessibility

- ✅ Keyboard accessible (Tab, Enter, Space)
- ✅ Screen reader friendly
- ✅ Focus states visible
- ✅ Semantic HTML (`<button>` and `<a>`)

### Add aria-label for clarity
```vue
<Button aria-label="Submit contact form">Send</Button>
```

## Performance Notes

- ✅ Lightweight component (~2KB)
- ✅ GPU-accelerated animations
- ✅ No unnecessary re-renders
- ✅ Optimized for 60 FPS

## Common Issues

### "Button not responding"
→ Check `disabled` or `loading` prop is not true

### "Styling looks wrong"
→ Verify Tailwind CSS is imported in main.ts
→ Check tailwind.config.js has custom colors

### "Link not working"
→ Use full URL for external: `href="https://..."`
→ Use path for internal: `href="/portfolio"`

### "Spinner not visible"
→ Ensure slot content is empty when loading
→ Component auto-hides slot, just set `loading` prop

## Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**For detailed documentation**, see `BUTTON_COMPONENT.md`
**To see all variants**, check `Button.showcase.vue`
