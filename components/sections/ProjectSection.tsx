import { BettingMGMT } from '@/components/blocks/projects/BettingMGMT';
import { ProjectSectionProps } from '@/types';

export function ProjectSection({ 
  className = '',
  // motionProps - TODO: Implement motion props
}: ProjectSectionProps) {
  return (
    <section 
      id="projects"
      className={`py-24 lg:py-32 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {/* Currently only showing BettingMGMT */}
          <BettingMGMT />
          
          {/* Future projects will be added here:
          <SchoolOfBets />
          <Stakely />
          */}
        </div>
      </div>
    </section>
  );
}