import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, ColorTheme, SizeVariant } from '@/types';


interface SettingsState {
  language: Language;
  color: ColorTheme;
  size: SizeVariant;
  loop: 'on' | 'off';
  setLanguage: (language: Language) => void;
  setColor: (color: ColorTheme) => void;
  setSize: (size: SizeVariant) => void;
  setLoop: (loop: 'on' | 'off') => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      // Idioma padrão em inglês
      language: 'en',
      color: 'teal',
      size: 'default',
      loop: 'on',
      setLanguage: (language) => set({ language }),
      setColor: (color) => set({ color }),
      setSize: (size) => set({ size }),
      setLoop: (loop) => set({ loop }),
    }),
    {
      name: 'cv-settings-storage',
    }
  )
);