'use client';

import { useSettingsStore } from '@/stores/settings';
import { ABOUT_FEATURES_DATA, ABOUT_SECTION_TEXTS } from '@/types';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { AboutCardDecorator } from '@/components/shared/AboutCardDecorator';

export function AboutSection({ className }: { className?: string }) {
  const language = useSettingsStore((state) => state.language);
  const sectionText = ABOUT_SECTION_TEXTS[language];

  return (
    <section className={`py-16 md:py-32 ${className || ''}`}>
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-foreground">
            {sectionText.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            {sectionText.subtitle}
          </p>
        </div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 md:mt-16">
          {ABOUT_FEATURES_DATA.map((card) => (
            <Card
              key={card.id}
              className="group border-0 shadow-none bg-card"
            >
              <CardHeader className="pb-3">
                <AboutCardDecorator icon={card.icon} />

                <h3 className="mt-6 font-medium text-foreground">
                  {card.title[language]}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-foreground/80">
                  {card.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
