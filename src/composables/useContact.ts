import { ref, Ref } from 'vue'

/**
 * Composable para manejo de formularios de contacto
 */
export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export type SubmitStatus = 'success' | 'error' | null

export interface UseContactReturn {
  formData: Ref<ContactFormData>
  isSubmitting: Ref<boolean>
  submitStatus: Ref<SubmitStatus>
  errorMessage: Ref<string>
  validateForm: () => string[]
  isValidEmail: (email: string) => boolean
  submitForm: () => Promise<boolean>
  sendViaWhatsApp: () => void
  sendViaEmail: () => void
  resetForm: () => void
}

export function useContact(): UseContactReturn {
  const formData = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const isSubmitting = ref(false)
  const submitStatus = ref<SubmitStatus>(null)
  const errorMessage = ref('')

  // Validación básica
  const validateForm = (): string[] => {
    const errors: string[] = []

    if (!formData.value.name.trim()) {
      errors.push('El nombre es requerido')
    }

    if (!formData.value.email.trim()) {
      errors.push('El email es requerido')
    } else if (!isValidEmail(formData.value.email)) {
      errors.push('El email no es válido')
    }

    if (!formData.value.message.trim()) {
      errors.push('El mensaje es requerido')
    }

    return errors
  }

  const isValidEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Enviar formulario
  const submitForm = async (): Promise<boolean> => {
    const errors = validateForm()

    if (errors.length > 0) {
      errorMessage.value = errors.join(', ')
      submitStatus.value = 'error'
      return false
    }

    isSubmitting.value = true
    submitStatus.value = null

    try {
      // Simular envío (reemplazar con API real)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // TODO: Reemplazar con llamada a API real
      console.log('Formulario enviado:', formData.value)

      submitStatus.value = 'success'
      resetForm()
      return true
    } catch (error) {
      errorMessage.value = 'Error al enviar el mensaje. Intenta de nuevo.'
      submitStatus.value = 'error'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  // Enviar por WhatsApp
  const sendViaWhatsApp = () => {
    const message = `Hola, soy ${formData.value.name}. ${formData.value.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/573243257550?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  // Enviar por Email
  const sendViaEmail = () => {
    const mailtoUrl = `mailto:contact@sdelgado.com?subject=Consulta de ${formData.value.name}&body=${encodeURIComponent(formData.value.message)}`
    window.location.href = mailtoUrl
  }

  // Limpiar formulario
  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
    errorMessage.value = ''
  }

  return {
    formData,
    isSubmitting,
    submitStatus,
    errorMessage,
    validateForm,
    isValidEmail,
    submitForm,
    sendViaWhatsApp,
    sendViaEmail,
    resetForm,
  }
}

export default useContact
