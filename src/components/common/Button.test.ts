import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button Component', () => {
  describe('Validates: Requirements RF5 - Button Component functionality', () => {
    // ==================== UNIT TESTS ====================

    describe('HTML Element Rendering', () => {
      it('renders as button element by default', () => {
        const wrapper = mount(Button)
        expect(wrapper.element.tagName).toBe('BUTTON')
      })

      it('renders as anchor element when href prop is provided', () => {
        const wrapper = mount(Button, {
          props: { href: '/portfolio' },
        })
        expect(wrapper.element.tagName).toBe('A')
        expect(wrapper.attributes('href')).toBe('/portfolio')
      })

      it('renders slot content correctly', () => {
        const wrapper = mount(Button, {
          slots: { default: 'Click Me' },
        })
        expect(wrapper.text()).toBe('Click Me')
      })

      it('disables button when disabled prop is true', () => {
        const wrapper = mount(Button, {
          props: { disabled: true },
        })
        expect(wrapper.attributes('disabled')).toBeDefined()
      })

      it('disables button when loading prop is true', () => {
        const wrapper = mount(Button, {
          props: { loading: true },
        })
        expect(wrapper.attributes('disabled')).toBeDefined()
      })

      it('sets type="button" when rendered as button element', () => {
        const wrapper = mount(Button)
        expect(wrapper.attributes('type')).toBe('button')
      })

      it('does not set type attribute when rendered as link', () => {
        const wrapper = mount(Button, {
          props: { href: '/test' },
        })
        expect(wrapper.attributes('type')).toBeUndefined()
      })
    })

    describe('Props - href', () => {
      it('accepts href prop for navigation', () => {
        const wrapper = mount(Button, {
          props: { href: '/about' },
        })
        expect(wrapper.element.tagName).toBe('A')
        expect(wrapper.attributes('href')).toBe('/about')
      })

      it('handles different href values', () => {
        const hrefs = ['/portfolio', '#contact', 'https://example.com', '/booking']
        hrefs.forEach((href) => {
          const wrapper = mount(Button, {
            props: { href },
          })
          expect(wrapper.attributes('href')).toBe(href)
        })
      })

      it('renders as button when href is not provided', () => {
        const wrapper = mount(Button, {
          props: { href: undefined },
        })
        expect(wrapper.element.tagName).toBe('BUTTON')
      })

      it('supports both internal and external links', () => {
        const internalWrapper = mount(Button, {
          props: { href: '/internal' },
        })
        const externalWrapper = mount(Button, {
          props: { href: 'https://external.com' },
        })
        expect(internalWrapper.attributes('href')).toBe('/internal')
        expect(externalWrapper.attributes('href')).toBe('https://external.com')
      })
    })

    describe('Props - @click Event', () => {
      it('emits click event when clicked as button', async () => {
        const wrapper = mount(Button, {
          slots: { default: 'Click Me' },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toHaveLength(1)
      })

      it('emits click event with MouseEvent payload', async () => {
        const wrapper = mount(Button)
        await wrapper.trigger('click')
        const emitted = wrapper.emitted('click')
        expect(emitted).toHaveLength(1)
        const event = emitted![0][0]
        expect(event instanceof MouseEvent).toBe(true)
      })

      it('does not emit click when disabled', async () => {
        const wrapper = mount(Button, {
          props: { disabled: true },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toBeUndefined()
      })

      it('does not emit click when loading', async () => {
        const wrapper = mount(Button, {
          props: { loading: true },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toBeUndefined()
      })

      it('emits click multiple times on repeated clicks', async () => {
        const wrapper = mount(Button)
        await wrapper.trigger('click')
        await wrapper.trigger('click')
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toHaveLength(3)
      })

      it('emits click for link buttons (href)', async () => {
        const wrapper = mount(Button, {
          props: { href: '/portfolio' },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toHaveLength(1)
      })
    })

    describe('Props - loading', () => {
      it('shows loading spinner when loading is true', () => {
        const wrapper = mount(Button, {
          props: { loading: true },
          slots: { default: 'Click Me' },
        })
        // Slot should be hidden/replaced by spinner
        expect(wrapper.text()).not.toContain('Click Me')
        expect(wrapper.find('svg').exists()).toBe(true)
      })

      it('hides loading spinner when loading is false', () => {
        const wrapper = mount(Button, {
          props: { loading: false },
          slots: { default: 'Click Me' },
        })
        expect(wrapper.text()).toContain('Click Me')
      })

      it('disables button when loading is true', () => {
        const wrapper = mount(Button, {
          props: { loading: true },
        })
        expect(wrapper.attributes('disabled')).toBeDefined()
      })

      it('spinner has correct classes for animation', () => {
        const wrapper = mount(Button, {
          props: { loading: true },
        })
        const svg = wrapper.find('svg')
        expect(svg.classes()).toContain('animate-spin')
      })

      it('shows spinner with correct color for primary variant', () => {
        const wrapper = mount(Button, {
          props: { loading: true, variant: 'primary' },
        })
        const circle = wrapper.find('circle')
        expect(circle.attributes('stroke')).toBe('#000000')
      })

      it('shows spinner with correct color for secondary variant', () => {
        const wrapper = mount(Button, {
          props: { loading: true, variant: 'secondary' },
        })
        const circle = wrapper.find('circle')
        expect(circle.attributes('stroke')).toBe('#E8E8E8')
      })

      it('shows spinner with correct color for outline variant', () => {
        const wrapper = mount(Button, {
          props: { loading: true, variant: 'outline' },
        })
        const circle = wrapper.find('circle')
        expect(circle.attributes('stroke')).toBe('#FFD700')
      })

      it('can transition from loading to not loading', async () => {
        const wrapper = mount(Button, {
          props: { loading: true },
          slots: { default: 'Click Me' },
        })
        expect(wrapper.find('svg').exists()).toBe(true)

        await wrapper.setProps({ loading: false })
        expect(wrapper.find('svg').exists()).toBe(false)
        expect(wrapper.text()).toContain('Click Me')
      })
    })

    describe('Props - Variants', () => {
      it('applies primary variant classes correctly', () => {
        const wrapper = mount(Button, {
          props: { variant: 'primary' },
        })
        expect(wrapper.element.className).toContain('bg-accent')
        expect(wrapper.element.className).toContain('text-primary')
      })

      it('applies secondary variant classes correctly', () => {
        const wrapper = mount(Button, {
          props: { variant: 'secondary' },
        })
        expect(wrapper.element.className).toContain('bg-border')
        expect(wrapper.element.className).toContain('text-text')
      })

      it('applies outline variant classes correctly', () => {
        const wrapper = mount(Button, {
          props: { variant: 'outline' },
        })
        expect(wrapper.element.className).toContain('border-accent')
        expect(wrapper.element.className).toContain('border-2')
      })

      it('defaults to primary variant', () => {
        const wrapper = mount(Button)
        expect(wrapper.element.className).toContain('bg-accent')
      })
    })

    describe('Props - Sizes', () => {
      it('applies small size classes correctly', () => {
        const wrapper = mount(Button, {
          props: { size: 'sm' },
        })
        expect(wrapper.element.className).toContain('px-3')
        expect(wrapper.element.className).toContain('py-2')
        expect(wrapper.element.className).toContain('text-sm')
      })

      it('applies medium size classes correctly', () => {
        const wrapper = mount(Button, {
          props: { size: 'md' },
        })
        expect(wrapper.element.className).toContain('px-4')
        expect(wrapper.element.className).toContain('py-2.5')
        expect(wrapper.element.className).toContain('text-base')
      })

      it('applies large size classes correctly', () => {
        const wrapper = mount(Button, {
          props: { size: 'lg' },
        })
        expect(wrapper.element.className).toContain('px-6')
        expect(wrapper.element.className).toContain('py-3')
        expect(wrapper.element.className).toContain('text-lg')
      })

      it('defaults to medium size', () => {
        const wrapper = mount(Button)
        expect(wrapper.element.className).toContain('px-4')
      })
    })

    describe('Props - disabled', () => {
      it('disables interaction when true', () => {
        const wrapper = mount(Button, {
          props: { disabled: true },
        })
        expect(wrapper.attributes('disabled')).toBeDefined()
      })

      it('applies disabled styling', () => {
        const wrapper = mount(Button, {
          props: { disabled: true },
        })
        expect(wrapper.element.className).toContain('opacity-50')
        expect(wrapper.element.className).toContain('cursor-not-allowed')
      })

      it('does not apply disabled styling when false', () => {
        const wrapper = mount(Button, {
          props: { disabled: false },
        })
        expect(wrapper.element.className).not.toContain('opacity-50')
        expect(wrapper.element.className).not.toContain('cursor-not-allowed')
      })
    })

    describe('Interactive Behavior', () => {
      it('handles multiple props combinations', () => {
        const wrapper = mount(Button, {
          props: {
            variant: 'outline',
            size: 'lg',
            href: '/booking',
          },
          slots: { default: 'Book Now' },
        })

        expect(wrapper.element.tagName).toBe('A')
        expect(wrapper.attributes('href')).toBe('/booking')
        expect(wrapper.element.className).toContain('border-accent')
        expect(wrapper.element.className).toContain('px-6')
        expect(wrapper.text()).toBe('Book Now')
      })

      it('supports v-bind for additional attributes', () => {
        const wrapper = mount(Button, {
          props: {
            variant: 'primary',
          },
          attrs: {
            'aria-label': 'Submit booking',
            'data-testid': 'booking-btn',
          },
          slots: { default: 'Book' },
        })

        expect(wrapper.attributes('aria-label')).toBe('Submit booking')
        expect(wrapper.attributes('data-testid')).toBe('booking-btn')
      })
    })

    // ==================== PROPERTY-BASED TESTS ====================

    describe('Property: Consistent Rendering Behavior', () => {
      const variants = ['primary', 'secondary', 'outline']
      const sizes = ['sm', 'md', 'lg']

      it('always renders a valid HTML element regardless of prop combination', () => {
        variants.forEach((variant) => {
          sizes.forEach((size) => {
            const wrapper = mount(Button, {
              props: { variant, size },
            })
            expect(wrapper.element.tagName).toMatch(/^(BUTTON|A)$/)
            expect(wrapper.html().length).toBeGreaterThan(0)
          })
        })
      })

      it('maintains structural integrity when toggling loading state', async () => {
        const wrapper = mount(Button, {
          props: { loading: false },
          slots: { default: 'Test' },
        })

        const initialStructure = wrapper.element.tagName
        await wrapper.setProps({ loading: true })
        expect(wrapper.element.tagName).toBe(initialStructure)

        await wrapper.setProps({ loading: false })
        expect(wrapper.element.tagName).toBe(initialStructure)
      })

      it('preserves element identity when changing between disabled/enabled', async () => {
        const wrapper = mount(Button)
        const initialElement = wrapper.element

        await wrapper.setProps({ disabled: true })
        expect(wrapper.element).toBe(initialElement)

        await wrapper.setProps({ disabled: false })
        expect(wrapper.element).toBe(initialElement)
      })
    })

    describe('Property: Click Event Reliability', () => {
      it('click event is only emitted when button is interactive', async () => {
        const testCases = [
          { disabled: true, loading: false, shouldEmit: false },
          { disabled: false, loading: true, shouldEmit: false },
          { disabled: true, loading: true, shouldEmit: false },
          { disabled: false, loading: false, shouldEmit: true },
        ]

        for (const testCase of testCases) {
          const wrapper = mount(Button, {
            props: testCase,
          })
          await wrapper.trigger('click')

          if (testCase.shouldEmit) {
            expect(wrapper.emitted('click')).toHaveLength(1)
          } else {
            expect(wrapper.emitted('click')).toBeUndefined()
          }
        }
      })

      it('click event is emitted consistently across all variants', async () => {
        const variants = ['primary', 'secondary', 'outline']

        for (const variant of variants) {
          const wrapper = mount(Button, {
            props: { variant },
          })
          await wrapper.trigger('click')
          expect(wrapper.emitted('click')).toHaveLength(1)
        }
      })
    })

    describe('Property: href Rendering Consistency', () => {
      it('button/link toggle is deterministic based on href prop', () => {
        const withoutHref = mount(Button, { props: { href: undefined } })
        const withHref = mount(Button, { props: { href: '/test' } })

        expect(withoutHref.element.tagName).toBe('BUTTON')
        expect(withHref.element.tagName).toBe('A')
      })

      it('href value is always accurately reflected in DOM', () => {
        const testUrls = ['/', '/portfolio', '/about', '/contact', 'https://external.com', '#anchor']

        testUrls.forEach((url) => {
          const wrapper = mount(Button, {
            props: { href: url },
          })
          expect(wrapper.attributes('href')).toBe(url)
        })
      })
    })

    describe('Property: Loading State Consistency', () => {
      it('loading state always hides slot content and shows spinner', async () => {
        const wrapper = mount(Button, {
          props: { loading: true },
          slots: { default: 'Click Me' },
        })

        expect(wrapper.find('svg').exists()).toBe(true)
        expect(wrapper.text()).not.toContain('Click Me')
      })

      it('disabling via loading always prevents click emission', async () => {
        const wrapper = mount(Button, {
          props: { loading: true },
        })

        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toBeUndefined()
      })

      it('spinner is present only when loading is true', () => {
        const notLoading = mount(Button, {
          props: { loading: false },
        })
        const loading = mount(Button, {
          props: { loading: true },
        })

        expect(notLoading.find('svg').exists()).toBe(false)
        expect(loading.find('svg').exists()).toBe(true)
      })
    })

    describe('Property: Variant-Specific Behavior', () => {
      it('each variant has distinct styling applied', () => {
        const variants = {
          primary: ['bg-accent', 'text-primary'],
          secondary: ['bg-border', 'text-text'],
          outline: ['border-2', 'border-accent'],
        }

        Object.entries(variants).forEach(([variant, expectedClasses]) => {
          const wrapper = mount(Button, {
            props: { variant },
          })

          expectedClasses.forEach((cls) => {
            expect(wrapper.element.className).toContain(cls)
          })
        })
      })

      it('variant changes are properly reflected in the DOM', async () => {
        const wrapper = mount(Button, {
          props: { variant: 'primary' },
        })

        expect(wrapper.element.className).toContain('bg-accent')

        await wrapper.setProps({ variant: 'secondary' })
        expect(wrapper.element.className).toContain('bg-border')

        await wrapper.setProps({ variant: 'outline' })
        expect(wrapper.element.className).toContain('border-accent')
      })
    })
  })
})
