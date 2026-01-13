import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { SocialButtonProps } from "@/types"

export function SocialButton({ platform, url, icon, className }: SocialButtonProps) {
  const platformColors: Record<string, string> = {
    email: 'text-foreground hover:text-accent',
    linkedin: 'text-foreground hover:text-accent',
    github: 'text-foreground hover:text-accent',
    whatsapp: 'text-green-500 hover:text-green-400',
    telegram: 'text-blue-500 hover:text-blue-400',
  }

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className={cn(platformColors[platform], className)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
        {icon}
      </a>
    </Button>
  )
}