<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <div class="contact-hero">
      <div class="container">
        <h1 class="contact-title">BOOKING</h1>
      </div>
    </div>

    <!-- Map & Hours Section -->
    <section class="map-hours-section">
      <div class="container">
        <div class="section-title">COME BY THE STUDIO AND SAY HELLO!</div>
        
        <div class="map-hours-grid">
          <!-- Map Left -->
          <div class="map-container">
            <div class="map-wrapper">
              <iframe
                :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2547890123456!2d${tattooer.mapLocation.longitude}!3d${tattooer.mapLocation.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f916c8c9e0f%3A0xfeaf201827b24e6a!2sHoly%20Fellas%20Studio!5e0!3m2!1ses!2sco!4v1623456789012`"
                width="100%"
                height="350"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- Hours Right -->
          <div class="hours-container">
            <h3 class="hours-heading">HOURS OF OPERATION</h3>
            <div class="hours-list">
              <div class="hour-row">
                <span class="day">Monday</span>
                <span class="time">12pm - 8pm</span>
              </div>
              <div class="hour-row">
                <span class="day">Tuesday</span>
                <span class="time">12pm - 8pm</span>
              </div>
              <div class="hour-row">
                <span class="day">Wednesday</span>
                <span class="time">12pm - 8pm</span>
              </div>
              <div class="hour-row">
                <span class="day">Thursday</span>
                <span class="time">12pm - 8pm</span>
              </div>
              <div class="hour-row">
                <span class="day">Friday</span>
                <span class="time">12pm - 8pm</span>
              </div>
              <div class="hour-row">
                <span class="day">Saturday</span>
                <span class="time">11am - 7pm</span>
              </div>
              <div class="hour-row">
                <span class="day">Sunday</span>
                <span class="time">Closed</span>
              </div>
            </div>

            <div class="location-info">
              <a 
                :href="tattooer.mapLocation.googleMapsUrl"
                target="_blank"
                rel="noopener"
                class="location-link"
              >
                {{ tattooer.mapLocation.address }}
              </a>
            </div>
          </div>
        </div>

        <!-- Note -->
        <div class="appointment-note">
          To schedule an appointment at general inquiries please<br>
          <strong>PHONE CALL</strong> and tell them when you want to visit
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-section">
      <div class="container">
        <h2 class="contact-heading">CONTACT US</h2>
        
        <div class="phone-line">
          <span class="phone-label">CALL US ANYTIME</span>
          <a :href="`tel:${tattooer.phone}`" class="phone-number">
            {{ tattooer.phone }}
          </a>
        </div>

        <div class="form-image-grid">
          <!-- Image Left -->
          <div class="studio-image">
            <img src="/img/hero/get-in-touch.webp" alt="Studio" />
          </div>

          <!-- Form Right -->
          <div class="form-wrapper">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    class="form-input"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    class="form-input"
                    placeholder="Phone (optional)"
                  />
                </div>
              </div>

              <div class="form-group">
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  placeholder="Email (optional)"
                />
              </div>

              <div class="form-group">
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-textarea"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <!-- Messages -->
              <div v-if="errorMessage" class="message message-error">
                {{ errorMessage }}
              </div>
              <div v-if="submitStatus === 'success'" class="message message-success">
                Message sent successfully!
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="btn-submit"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'SENDING...' : 'SUBMIT' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContact } from '@/composables/useContact'
import { tattooer } from '@/data/tattooer'

const {
  formData,
  isSubmitting,
  submitStatus,
  errorMessage,
  submitForm,
} = useContact()

const handleSubmit = async () => {
  await submitForm()
}
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.8) 100%);
  padding: 6rem 0;
  border-bottom: 1px solid #2a2a2a;
  margin-top: 70px;
  text-align: center;
}

.contact-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  letter-spacing: -2px;
  text-transform: uppercase;
}

/* Map & Hours Section */
.map-hours-section {
  padding: 5rem 0;
  background-color: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0 0 3rem 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.map-hours-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: stretch;
  margin-bottom: 2rem;
}

.map-container {
  width: 100%;
}

.map-wrapper {
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #2a2a2a;
}

.map-wrapper iframe {
  display: block;
  width: 100%;
}

/* Hours Container */
.hours-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hours-heading {
  font-size: 1.3rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid #2a2a2a;
}

.hour-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #2a2a2a;
}

.hour-row:last-child {
  border-bottom: none;
}

.day {
  color: #ffffff;
  font-weight: 600;
}

.time {
  color: #ffd700;
  font-weight: 600;
}

.location-info {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 4px;
  text-align: center;
}

.location-link {
  color: #ffd700;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.location-link:hover {
  color: #ffed4e;
}

/* Appointment Note */
.appointment-note {
  text-align: center;
  font-size: 0.85rem;
  color: #a0a0a0;
  line-height: 1.8;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(255, 215, 0, 0.02);
  border-left: 3px solid #ffd700;
  border-radius: 4px;
}

.appointment-note strong {
  color: #ffd700;
}

/* Contact Form Section */
.contact-section {
  padding: 5rem 0;
  background-color: #0f0f0f;
}

.contact-heading {
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0 0 3rem 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.phone-line {
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  border-top: 1px solid #2a2a2a;
  border-bottom: 1px solid #2a2a2a;
}

.phone-label {
  display: block;
  font-size: 0.75rem;
  color: #a0a0a0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.phone-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffd700;
  text-decoration: none;
  transition: color 0.3s ease;
  letter-spacing: -1px;
}

.phone-number:hover {
  color: #ffed4e;
}

/* Form Image Grid */
.form-image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.studio-image {
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #2a2a2a;
  aspect-ratio: 3/4;
}

.studio-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

/* Form Wrapper */
.form-wrapper {
  display: flex;
  flex-direction: column;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  color: #e8e8e8;
  padding: 0.85rem;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #666666;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #ffd700;
  background-color: rgba(255, 215, 0, 0.05);
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
}

.message {
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
}

.message-success {
  background-color: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border: 1px solid #4caf50;
}

.message-error {
  background-color: rgba(244, 67, 54, 0.1);
  color: #f44336;
  border: 1px solid #f44336;
}

/* Submit Button */
.btn-submit {
  padding: 0.85rem 2rem;
  background-color: #ffd700;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-start;
}

.btn-submit:hover:not(:disabled) {
  background-color: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-hero {
    padding: 3rem 0;
  }

  .contact-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .map-hours-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-image-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .map-wrapper iframe {
    height: 300px !important;
  }

  .phone-number {
    font-size: 1.8rem;
  }

  .contact-section {
    padding: 3rem 0;
  }

  .map-hours-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .contact-heading {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.75rem;
    font-size: 0.85rem;
  }

  .map-wrapper iframe {
    height: 250px !important;
  }

  .phone-number {
    font-size: 1.3rem;
  }

  .contact-heading {
    font-size: 1.2rem;
  }

  .studio-image {
    aspect-ratio: 16/9;
  }
}
</style>
