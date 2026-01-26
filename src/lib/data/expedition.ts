export const NAV_ITEMS = [
    { id: 'career', label: 'CAREER', path: '#career' },
    { id: 'skills', label: 'SKILLS', path: '#skills' },
    { id: 'home', label: 'HOME', path: '/' },
];

export const ANIMATION_TIMINGS = {
    TYPE_SPEED: 0.3,
    BOOT_DURATION: 0.5,
    SCANLINE_INTERVAL: 8,
};

export interface CareerLink {
    label: string;
    url: string;
}

export interface CareerMilestone {
    id: string;
    company: string;
    role: string;
    period: string;
    log: string[];
    skills: string[];
    links?: CareerLink[];
}

export const CAREER_DATA: CareerMilestone[] = [
    {
        id: 'z-score',
        company: 'Z-SCORE SPORTS BETTING',
        role: 'FOUNDER & CEO',
        period: '2022 - 2025',
        log: [
            "Built profitable sports betting company from scratch; achieving 18.24% average monthly growth.",
            "Developed proprietary ML models in R (tidymodels, tidyverse) and Python (pandas, scikit-learn, pycaret).",
            "Created Betting MGMT app (Next.js/Supabase) with automated risk management (4.8x monthly turnover).",
            "Deployed Stakely Telegram bot for automated NBA betting tips."
        ],
        skills: ["Machine Learning", "Entrepreneurship", "Full-Stack Development"],
        links: [
            { label: 'BETTING_MGMT', url: 'https://bettingmgmt.vercel.app/' },
            { label: 'STAKELY_BOT', url: 'https://stakely-bets.vercel.app/' }
        ]
    },
    {
        id: 'i-systems',
        company: 'I.SYSTEMS',
        role: 'CHIEF FINANCIAL OFFICER',
        period: '2020 - 2022',
        log: [
            "Led financial planning and strategy for AI-powered industrial automation leader.",
            "Restructured pricing models with higher entry barriers and renewal incentives.",
            "Developed investment thesis and pitch materials; managed institutional investors and auditors."
        ],
        skills: ["Financial Strategy", "Leadership", "Investor Relations"]
    },
    {
        id: 'queluz',
        company: 'QUELUZ',
        role: 'EQUITY RESEARCH ANALYST',
        period: '2020 - 2021',
        log: [
            "Advised increased bank exposure at low multiples during market volatility.",
            "Identified undervalued Vale and Petrobras opportunities; recommended e-commerce divestment."
        ],
        skills: ["Investment Analysis", "Market Research", "Portfolio Strategy"]
    },
    {
        id: 'oticas-carol',
        company: 'ÓTICAS CAROL',
        role: 'RETAIL FRANCHISE BUSINESS OWNER',
        period: '2017 - 2019',
        log: [
            "Scaled retail operation from 3 to 7 stores; achieved 108% same-store sales increase.",
            "Optimized inventory turnover (from 270 to 140 days) and increased average ticket by 30%."
        ],
        skills: ["Business Scaling", "Operations Management", "Entrepreneurship"]
    },
    {
        id: 'banco-fator-ma',
        company: 'BANCO FATOR',
        role: 'M&A ASSOCIATE',
        period: '2015 - 2016',
        log: [
            "Advised leading non-ferrous metals company in strategic merger attempts.",
            "Developed privatization frameworks and generated M&A leads across healthcare and infra."
        ],
        skills: ["M&A", "Deal Analysis", "Strategic Planning"]
    },
    {
        id: 'banco-fator-buy',
        company: 'BANCO FATOR',
        role: 'SENIOR BUY-SIDE ANALYST',
        period: '2014 - 2015',
        log: [
            "Provided analysis for value mutual fund with BRL 500M+ AUM.",
            "Successfully predicted judicial recovery of power generator, avoiding ~80% stock decline."
        ],
        skills: ["Buy-Side Analysis", "Risk Assessment", "Corporate Access"]
    },
    {
        id: 'banco-fator-sell',
        company: 'BANCO FATOR',
        role: 'SENIOR SELL-SIDE ANALYST',
        period: '2012 - 2014',
        log: [
            "Led team of 10 analysts; voted Fator's most active analyst in Institutional Investor poll.",
            "Created proprietary 'stores addition model' and initiated coverage on 20+ companies."
        ],
        skills: ["Sell-Side Analysis", "Team Leadership", "Financial Modeling"]
    },
    {
        id: 'brasil-plural',
        company: 'BRASIL PLURAL',
        role: 'JUNIOR SELL-SIDE ANALYST',
        period: '2012',
        log: [
            "Co-responsible for financial modeling and valuation of financial institutions.",
            "Applied DDM, Residual Income, and Gordon Growth methodologies for sector reports."
        ],
        skills: ["Valuation Techniques", "Data Analysis", "Report Writing"]
    },
    {
        id: 'citibank',
        company: 'CITIBANK',
        role: 'M&A INTERN',
        period: '2011',
        log: [
            "Supported M&A team in deal analysis, due diligence, and market research.",
            "Assisted in preparing high-stakes investment presentations and pitch materials."
        ],
        skills: ["Due Diligence", "Market Research", "Presentation Preparation"]
    }
];
