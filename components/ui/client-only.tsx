'use client';

import { ClientOnlyProps } from '@/types';

export function ClientOnly({ children }: ClientOnlyProps) {
  return <>{children}</>;
}