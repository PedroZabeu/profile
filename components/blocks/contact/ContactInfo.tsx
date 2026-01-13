import * as React from "react"
import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { SocialButton } from "@/components/ui/social-button"
import { MailIcon } from "@/components/MailIcon"
import { MessageCircleIcon } from "@/components/MessageCircleIcon"
import { SendIcon } from "@/components/SendIcon"
import { GithubIcon } from "@/components/GithubIcon"
import { LinkedInIcon } from "@/components/LinkedinIcon"
import { cn } from "@/lib/utils"
import type { ContactInfoProps, ContactInfo } from "@/types"
import { ContactPlatform } from "@/types"

export function ContactInfo({ contacts, className }: ContactInfoProps) {
  const iconMap: Record<string, React.ReactNode> = {
    email: <MailIcon size={24} isAnimated={false} />,
    whatsapp: <MessageCircleIcon size={24} isAnimated={false} />,
    telegram: <SendIcon size={24} isAnimated={false} />,
    linkedin: <LinkedInIcon size={24} isAnimated={false} />,
    github: <GithubIcon size={24} isAnimated={false} />,
  }

  const contactsData = contacts.map((contact) => ({
    ...contact,
    icon: iconMap[contact.platform],
  }))

  const socialLinks = [
    {
      platform: ContactPlatform.LINKEDIN,
      url: 'https://linkedin.com/in/pedro-ivo-barreto-zabeu-95a066111',
      icon: <LinkedInIcon size={24} isAnimated />,
    },
    {
      platform: ContactPlatform.GITHUB,
      url: 'https://github.com/PedroZabeu',
      icon: <GithubIcon size={24} isAnimated />,
    },
    {
      platform: ContactPlatform.WHATSAPP,
      url: 'https://wa.me/5511971229926',
      icon: <MessageCircleIcon size={24} isAnimated />,
    },
    {
      platform: ContactPlatform.TELEGRAM,
      url: 'https://t.me/pzabeu',
      icon: <SendIcon size={24} isAnimated />,
    },
  ]

  return (
    <div className={cn("space-y-6", className)}>
      <Card className="p-6 space-y-4">
        {contactsData.map((contact, index) => (
          <motion.a
            key={contact.platform}
            href={contact.url}
            target={contact.platform !== 'email' ? '_blank' : undefined}
            rel={contact.platform !== 'email' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/5 transition-colors group"
          >
            <div className="text-muted-foreground group-hover:text-accent transition-colors">
              {contact.icon}
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {contact.label}
              </div>
              <div className="text-sm font-medium group-hover:text-accent transition-colors">
                {contact.value}
              </div>
            </div>
          </motion.a>
        ))}
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-2"
      >
        {socialLinks.map((link) => (
          <SocialButton
            key={link.platform}
            platform={link.platform}
            url={link.url}
            icon={link.icon}
            className="w-12 h-12 md:w-14 md:h-14"
          />
        ))}
      </motion.div>
    </div>
  )
}