import { SkillCluster } from '@/types/skills';

export const skillsData: SkillCluster[] = [
  {
    title: 'Financial Skills',
    skills: [
      {
        name: 'Equity Valuation',
        score: 9.5,
        technologies: ['DCF (Discounted Cash Flow)', 'Residual Income Model', 'DDM (Dividend Discount Model)', 'Multiples Valuation (P/E, EV/EBITDA, P/B)'],
        description: 'Valuation of financial institutions, insurance companies, SaaS, retail, generation companies, and ports'
      },
      {
        name: 'Financial Statements Modeling',
        score: 9.5,
        technologies: ['Banks', 'Insurance Companies', 'SaaS', 'Retail', 'Generation Companies', 'Ports'],
        description: 'Advanced financial modeling across multiple industries with complex business models'
      },
      {
        name: 'Debt & Derivatives Instruments',
        score: 8,
        technologies: ['CFA Level II'],
        description: 'Understanding of complex debt instruments and derivatives for risk management and valuation'
      },
      {
        name: 'Risk Assessment',
        score: 8.5,
        technologies: ['VaR Modeling'],
        description: 'Value at Risk modeling and advanced risk assessment methodologies for portfolio management'
      }
    ]
  },
  {
    title: 'Data Science',
    skills: [
      {
        name: 'Econometrics',
        score: 9,
        technologies: ['OLS (Ordinary Least Squares)', 'Assumptions Testing', 'Causal Inference', 'Time Series Analysis'],
        description: 'Advanced statistical analysis for economic and financial data modeling'
      },
      {
        name: 'Machine Learning',
        score: 8,
        technologies: ['Supervised Learning', 'Cross Validation', 'Model Selection', 'Random Forest', 'xGBoost', 'Regularization Models'],
        description: 'Predictive modeling for sports betting and financial analytics'
      },
      {
        name: 'Simulations',
        score: 8,
        technologies: ['Monte Carlo Simulations', 'MCMV (Markov Chain Monte Carlo)'],
        description: 'Advanced simulation techniques for risk modeling and scenario analysis'
      }
    ]
  },
  {
    title: 'Full Stack Development',
    skills: [
      {
        name: 'Frontend Development',
        score: 7.5,
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        description: 'Building responsive, performant, and accessible web applications with modern frameworks'
      },
      {
        name: 'Backend Development',
        score: 7,
        technologies: ['Node.js', 'API Design', 'Database Architecture'],
        description: 'Designing scalable APIs and database architectures for complex applications'
      },
      {
        name: 'Product Vision',
        score: 9.5,
        technologies: ['User Research', 'Feature Planning', 'MVP Development'],
        description: 'End-to-end product development from concept validation to market delivery'
      },
      {
        name: 'Full-cycle Development',
        score: 8,
        technologies: ['From concept to deployment', 'Iterative improvement'],
        description: 'Complete product lifecycle management with continuous improvement and deployment'
      }
    ]
  },
  {
    title: 'Other Skills',
    skills: [
      {
        name: 'Leadership',
        score: 9,
        technologies: ['CFO', 'Leading Analyst (Equity Research)', 'Entrepreneur'],
        description: 'Experience leading teams and organizations across finance and technology sectors'
      },
      {
        name: 'Commercial Skills',
        score: 8.5,
        technologies: ['Sell Side Analyst', 'Investor Education', 'Sell Side M&A', 'Retail'],
        description: 'Strong commercial acumen with experience in M&A, investor relations, and business development'
      },
      {
        name: 'Communication',
        score: 9.5,
        technologies: ['Initiation of Coverage Reports', 'Presentation Decks', 'Fluent English & Portuguese', 'Advanced Spanish'],
        description: 'Excellent communication skills for stakeholder engagement and technical documentation'
      },
      {
        name: 'AI Agents',
        score: 8.5,
        technologies: ['Claude Code', 'Cursor', 'Antigravity', 'Opencode'],
        description: 'Leveraging AI-powered development tools for enhanced productivity and code quality'
      }
    ]
  }
];
