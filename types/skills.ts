export interface Skill {
  name: string;
  score: number;
  technologies: string[];
  description: string;
}

export interface SkillCluster {
  title: string;
  skills: Skill[];
}

export interface SkillTooltipData {
  skill: Skill;
}
