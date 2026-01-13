import * as React from "react"
import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/blocks/contact/ContactForm"
import { ContactInfo } from "@/components/blocks/contact/ContactInfo"
import { cn } from "@/lib/utils"
import type { ContactSectionProps } from "@/types"
import { CONTACT_SECTION_TEXTS, CONTACT_INFO_DATA } from "@/types"
import { useSettingsStore } from "@/stores/settings"

export function ContactSection({ className, motionProps }: ContactSectionProps) {
  const { language } = useSettingsStore()
  const texts = CONTACT_SECTION_TEXTS[language]

  const handleSubmit = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
  }

  const defaultMotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const initial = motionProps?.initial ?? defaultMotionProps.initial
  const animate = motionProps?.animate ?? defaultMotionProps.animate
  const transition = motionProps?.transition ?? defaultMotionProps.transition

  return (
    <section id="contact" className={cn("py-20 md:py-32", className)}>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition as any}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            {texts.title}
          </h2>
          <p className="text-lg md:text-xl font-medium text-muted-foreground">
            {texts.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Card className="p-6 md:p-8">
            <ContactForm onSubmit={handleSubmit} />
          </Card>

          <div className="space-y-4">
            <ContactInfo contacts={CONTACT_INFO_DATA} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}