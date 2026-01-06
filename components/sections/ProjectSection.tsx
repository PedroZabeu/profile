import { BettingMGMT } from '@/components/blocks/projects/BettingMGMT';
import { SchoolOfBets } from '@/components/blocks/projects/SchoolOfBets';
import { Stakely } from '@/components/blocks/projects/Stakely';
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
          {/* Betting Management - Live Project */}
          <div id="betting-mgmt">
            <BettingMGMT />
          </div>
          
          {/* School of Bets - Educational Platform */}
          <div id="school-of-bets">
            <SchoolOfBets />
          </div>
          
          {/* Stakely - Investment Analysis Tool */}
          <div id="stakely">
            <Stakely />
          </div>
        </div>
      </div>
    </section>
  );
}