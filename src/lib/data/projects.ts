export interface Project {
    id: string;
    title: string;
    description: string;
    userBenefits: string[];
    liveUrl: string;
    status: 'LIVE' | 'BETA';
}

export const PROJECTS_DATA: Record<string, Project> = {
    'betting-mgmt': {
        id: 'betting-mgmt',
        title: 'Betting MGMT',
        description: 'Complete System for Betting Management',
        userBenefits: [
            'Eliminates the need for multiple spreadsheets',
            'Detailed and consolidated results in real-time',
            'Protected access for bettors, investors and operators',
            'Integrated supplier management'
        ],
        liveUrl: 'https://bettingmgmt.vercel.app/',
        status: 'LIVE'
    },
    'stakely': {
        id: 'stakely',
        title: 'Stakely',
        description: 'Intelligent System for Tipsters',
        userBenefits: [
            'Professional, client-segmented communication channels',
            'Native Telegram integration for a frictionless workflow',
            'Accurate tracking of what each client actually bet — no guesswork',
            'Automatic result consolidation and performance history',
            'Insightful dashboards that strengthen trust and retention'
        ],
        liveUrl: 'https://stakely-bets.vercel.app/',
        status: 'LIVE'
    },
    'school-bets': {
        id: 'school-bets',
        title: 'School of Bets',
        description: 'Educational Platform for Bettor Development (Beta)',
        userBenefits: [
            'Progressive content focused on real-world application',
            'Simplified explanations of essential quantitative concepts',
            'Practical simulations that connect theory to decision-making',
            'Exercises with real-time feedback to reinforce learning',
            'Platform continuously improved throughout the beta phase'
        ],
        liveUrl: 'https://school-bice-eight.vercel.app/',
        status: 'BETA'
    }
};
