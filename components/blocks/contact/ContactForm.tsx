"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ContactFormProps, ContactFormData, FormStatus } from "@/types"
import { CONTACT_SECTION_TEXTS } from "@/types"
import { useSettingsStore } from "@/stores/settings"

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const { language } = useSettingsStore()
  const texts = CONTACT_SECTION_TEXTS[language]

  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = React.useState<FormStatus>('idle')
  const [error, setError] = React.useState<string>()

  const isDisabled = status === 'loading' || status === 'success'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields')
      return
    }

    setStatus('loading')
    setError(undefined)

    try {
      const formDataObj = new FormData()
      formDataObj.append('name', formData.name)
      formDataObj.append('email', formData.email)
      formDataObj.append('message', formData.message)

      const response = await fetch('https://formsubmit.co/pedroibzabeu@gmail.com', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        if (onSubmit) {
          await onSubmit(formData)
        }
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setStatus('error')
      setError(texts.errorMessage)
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("text-center py-8", className)}
      >
        <div className="text-4xl mb-4">✓</div>
        <p className="text-lg font-medium text-accent">{texts.successMessage}</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div>
        <label htmlFor="name" className="text-sm font-semibold mb-2 block">
          {texts.nameLabel}
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isDisabled}
          placeholder={texts.nameLabel}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold mb-2 block">
          {texts.emailLabel}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={isDisabled}
          placeholder={texts.emailLabel}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold mb-2 block">
          {texts.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={isDisabled}
          placeholder={texts.messageLabel}
          rows={5}
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-input",
            "bg-transparent px-3 py-2 text-sm shadow-sm",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none"
          )}
        />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-destructive"
        >
          {error}
        </motion.p>
      )}

      <Button
        type="submit"
        disabled={isDisabled}
        className="w-full"
        variant="default"
      >
        {status === 'loading' ? (
          <span className="inline-block animate-spin mr-2">⏳</span>
        ) : null}
        {texts.submitLabel}
      </Button>
    </form>
  )
}