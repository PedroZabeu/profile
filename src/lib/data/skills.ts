export interface Skill {
    id: string;
    name: string;
    level: number; // 0 to 10
    technicalLog: string;
    technologies: string[];
}

export interface SkillCategory {
    id: string;
    title: string;
    skills: Skill[];
}

export const SKILLS_DATA: SkillCategory[] = [
    {
        id: '01',
        title: 'FINANCIAL_SKILLS',
        skills: [
            {
                id: 'equity-valuation',
                name: 'Equity Valuation',
                level: 9.5,
                technicalLog: 'Advanced valuation methodologies including Three-Statement Integrated Modeling and intrinsic value analysis.',
                technologies: ['DCF (FCFF/FCFE)', 'Residual Income', 'DDM', 'Peer Multiples']
            },
            {
                id: 'financial-modeling',
                name: 'Financial Statements Modeling',
                level: 9.5,
                technicalLog: 'High-complexity modeling for diverse industries with focus on cash flow forecasting and capital structure.',
                technologies: ['Banks', 'Insurance', 'SaaS', 'Retail', 'Genco (Energy)', 'Ports/Infrastructure']
            },
            {
                id: 'debt-derivatives',
                name: 'Debt & Derivatives Instruments',
                level: 8.0,
                technicalLog: 'Analysis of fixed income instruments and hedging strategies using derivative structures.',
                technologies: ['debt structures', 'yield curve analysis', 'risk mitigation']
            },
            {
                id: 'risk-assessment',
                name: 'Risk Assessment',
                level: 8.5,
                technicalLog: 'Quantitative risk management and portfolio optimization.',
                technologies: ['VaR (Value at Risk) Modeling', 'Stress Testing scenarios', 'Monte Carlo Simulations']
            }
        ]
    },
    {
        id: '02',
        title: 'DATA_SCIENCE_LOGS',
        skills: [
            {
                id: 'econometrics',
                name: 'Econometrics',
                level: 9.0,
                technicalLog: 'Statistical modeling for causal inference and financial forecasting.',
                technologies: ['OLS', 'Assumptions Testing', 'Causal Inference', 'Time Series Analysis']
            },
            {
                id: 'machine-learning',
                name: 'Machine Learning',
                level: 8.0,
                technicalLog: 'Development and deployment of supervised learning models for predictive analytics.',
                technologies: ['Cross Validation', 'Random Forest', 'xGBoost', 'Model Tuning']
            },
            {
                id: 'simulations',
                name: 'Simulations',
                level: 8.0,
                technicalLog: 'Probabilistic modeling for decision-making under uncertainty.',
                technologies: ['Monte Carlo Simulations', 'MCMV (Modern Portfolio Theory)']
            }
        ]
    },
    {
        id: '03',
        title: 'FULL_STACK_ARCHITECTURE',
        skills: [
            {
                id: 'frontend',
                name: 'Frontend Development',
                level: 9.0,
                technicalLog: 'Building high-performance, responsive user interfaces with modern frameworks.',
                technologies: ['React', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
            },
            {
                id: 'backend',
                name: 'Backend Development',
                level: 8.5,
                technicalLog: 'Designing scalable server-side systems and efficient data architectures.',
                technologies: ['Node.js', 'Database Schema Design', 'Supabase']
            },
            {
                id: 'product-vision',
                name: 'Product Vision',
                level: 9.0,
                technicalLog: 'Bridging the gap between technical execution and business requirements.',
                technologies: ['User Research', 'Feature Prioritization', 'MVP Development']
            },
            {
                id: 'full-cycle',
                name: 'Full-cycle Development',
                level: 9.0,
                technicalLog: 'End-to-end responsibility from conceptualization to production-ready deployment.',
                technologies: ['Iterative improvement', 'CI/CD integration', 'performance monitoring']
            }
        ]
    },
    {
        id: '04',
        title: 'OPERATIONAL_EXPERTISE',
        skills: [
            {
                id: 'leadership',
                name: 'Leadership',
                level: 9.0,
                technicalLog: 'Executive experience managing high-performance teams and corporate strategy.',
                technologies: ['CFO', 'Leading Analyst (Equity Research)', 'Entrepreneuer']
            },
            {
                id: 'commercial',
                name: 'Commercial Skills',
                level: 8.5,
                technicalLog: 'Business development and strategic communication for financial products and retail.',
                technologies: ['Sell Side Analysis', 'Investor Education', 'M&A Negotiations', 'Retail scaling']
            },
            {
                id: 'communication',
                name: 'Communication',
                level: 9.5,
                technicalLog: 'High-stakes communication and reporting for institutional audiences.',
                technologies: ['Fluent in English & Portuguese', 'Advanced Spanish']
            },
            {
                id: 'ai-agents',
                name: 'AI Agents',
                level: 9.0,
                technicalLog: 'Integration of AI agents into development workflows to accelerate delivery and quality.',
                technologies: ['Claude Code', 'Cursor', 'Antigravity', 'Opencode']
            }
        ]
    }
];
