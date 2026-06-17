import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from './Card.vue'

describe('Card.vue', () => {
  /**
   * Unit Test 1: Renders without errors with no props
   * Validates: Basic rendering with default props
   */
  it('should render a card without errors', () => {
    const wrapper = mount(Card)
    expect(wrapper.find('.card').exists()).toBe(true)
  })

  /**
   * Unit Test 2: Renders title prop correctly
   * Validates: Title prop is displayed when provided
   */
  it('should render title when provided', () => {
    const title = 'Test Card Title'
    const wrapper = mount(Card, {
      props: { title }
    })
    expect(wrapper.find('.card-title').text()).toBe(title)
    expect(wrapper.find('.card-title').exists()).toBe(true)
  })

  /**
   * Unit Test 3: Does not render title when not provided
   * Validates: Title is conditionally rendered
   */
  it('should not render title when not provided', () => {
    const wrapper = mount(Card, {
      props: { description: 'Test description' }
    })
    expect(wrapper.find('.card-title').exists()).toBe(false)
  })

  /**
   * Unit Test 4: Renders description prop correctly
   * Validates: Description prop is displayed when provided
   */
  it('should render description when provided', () => {
    const description = 'Test card description'
    const wrapper = mount(Card, {
      props: { description }
    })
    expect(wrapper.find('.card-description').text()).toBe(description)
    expect(wrapper.find('.card-description').exists()).toBe(true)
  })

  /**
   * Unit Test 5: Does not render description when not provided
   * Validates: Description is conditionally rendered
   */
  it('should not render description when not provided', () => {
    const wrapper = mount(Card, {
      props: { title: 'Title only' }
    })
    expect(wrapper.find('.card-description').exists()).toBe(false)
  })

  /**
   * Unit Test 6: Renders image when provided
   * Validates: Image element is rendered with correct alt text
   */
  it('should render image when provided', () => {
    const title = 'Test Image'
    const image = '/test-image.jpg'
    const wrapper = mount(Card, {
      props: { title, image }
    })
    const img = wrapper.find('.card-image img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe(title)
    expect(img.attributes('loading')).toBe('lazy')
  })

  /**
   * Unit Test 7: Does not render image section when no image
   * Validates: Image section is conditionally rendered
   */
  it('should not render image section when no image provided', () => {
    const wrapper = mount(Card, {
      props: { title: 'Title only' }
    })
    expect(wrapper.find('.card-image').exists()).toBe(false)
  })

  /**
   * Unit Test 8: Applies hoverable class by default
   * Validates: Hoverable prop defaults to true
   */
  it('should apply hoverable class by default', () => {
    const wrapper = mount(Card)
    expect(wrapper.find('.card').classes()).toContain('hoverable')
  })

  /**
   * Unit Test 9: Does not apply hoverable class when disabled
   * Validates: Hoverable prop can be disabled
   */
  it('should not apply hoverable class when hoverable is false', () => {
    const wrapper = mount(Card, {
      props: { hoverable: false }
    })
    expect(wrapper.find('.card').classes()).not.toContain('hoverable')
  })

  /**
   * Unit Test 10: Card has proper structure and flexibility
   * Validates: Card uses flexbox layout for content flexibility
   */
  it('should have correct card structure', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Test Title',
        description: 'Test Description',
        image: '/test.jpg'
      }
    })
    expect(wrapper.find('.card').exists()).toBe(true)
    expect(wrapper.find('.card-image').exists()).toBe(true)
    expect(wrapper.find('.card-content').exists()).toBe(true)
    expect(wrapper.find('.card-title').exists()).toBe(true)
    expect(wrapper.find('.card-description').exists()).toBe(true)
  })

  /**
   * Unit Test 11: Slot rendering for additional content
   * Validates: Default slot can be used for custom content
   */
  it('should render default slot content', () => {
    const wrapper = mount(Card, {
      props: { title: 'Test Title' },
      slots: {
        default: '<div class="custom-content">Custom Content</div>'
      }
    })
    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.find('.custom-content').text()).toBe('Custom Content')
  })

  /**
   * Unit Test 12: Footer slot rendering
   * Validates: Footer slot is conditionally rendered
   */
  it('should render footer slot when provided', () => {
    const wrapper = mount(Card, {
      props: { title: 'Test Title' },
      slots: {
        footer: '<div class="card-footer-content">Footer Content</div>'
      }
    })
    expect(wrapper.find('.card-footer').exists()).toBe(true)
    expect(wrapper.find('.card-footer-content').text()).toBe('Footer Content')
  })

  /**
   * Unit Test 13: Image uses correct alt text from title
   * Validates: Accessibility - image alt text matches title
   */
  it('should use title as image alt text for accessibility', () => {
    const title = 'Beautiful Tattoo Design'
    const wrapper = mount(Card, {
      props: {
        title,
        image: '/tattoo.jpg'
      }
    })
    expect(wrapper.find('img').attributes('alt')).toBe(title)
  })

  /**
   * Unit Test 14: Card renders with all props simultaneously
   * Validates: Component handles complete prop set correctly
   */
  it('should render correctly with all props provided', () => {
    const props = {
      title: 'Premium Design',
      description: 'A beautiful and elegant card component',
      image: '/design.jpg',
      hoverable: true
    }
    const wrapper = mount(Card, { props })
    
    expect(wrapper.find('.card').classes()).toContain('hoverable')
    expect(wrapper.find('.card-title').text()).toBe(props.title)
    expect(wrapper.find('.card-description').text()).toBe(props.description)
    expect(wrapper.find('img').attributes('src')).toBe(props.image)
  })

  /**
   * Unit Test 15: Empty card with no content
   * Validates: Component handles empty state gracefully
   */
  it('should handle empty card state gracefully', () => {
    const wrapper = mount(Card)
    expect(wrapper.find('.card').exists()).toBe(true)
    expect(wrapper.find('.card-content').exists()).toBe(true)
    // Should not have title or description elements
    expect(wrapper.find('.card-title').exists()).toBe(false)
    expect(wrapper.find('.card-description').exists()).toBe(false)
  })
})
