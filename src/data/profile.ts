export const profile = {
  name: 'Uday Kiran',
  title: 'Senior SDET · Automation Test Engineer',
  location: 'Mesa, AZ · Open to hybrid/remote',
  phone: '+1 (716) 907-4253',
  email: 'ukodaru@gmail.com',
  linkedin: 'https://www.linkedin.com/in/uday-kiran-kodaru/',
  photo: '/Uday-Portfolio/profile-uday.jpg',
  summary:
    'Senior SDET with 7+ years designing, scaling, and executing automated testing across UI, API, backend, and cloud. Expert in Playwright + TypeScript and Java + Selenium, with data-driven validation, CI/CD, and performance/load testing expertise.',
  heroTags: ['Playwright + TypeScript', 'Java + Selenium', 'Karate DSL', 'JMeter & LoadRunner', 'AWS · Azure · Jenkins'],
  metrics: [
    { label: 'Legacy → Modern', value: '1,200+', detail: 'Selenium tests migrated to Playwright' },
    { label: 'Nightly coverage', value: '1,500', detail: 'tests in CI across web, API, mobile' },
    { label: 'Data accuracy', value: '10k+', detail: 'records validated per release' },
    { label: 'Performance', value: '5,000+', detail: 'concurrent users load-tested' }
  ],
  skills: [
    {
      title: 'Web & Mobile Automation',
      bullets: ['Selenium / Playwright / Cypress / Appium', 'Resilient locators, auto-waits, parallel runs', 'ADA, cross-browser, cross-device']
    },
    {
      title: 'API & Contract',
      bullets: ['Karate DSL, REST Assured, Postman', 'Schema & contract validation, synthetic data', 'Microservices observability with Grafana/Splunk']
    },
    {
      title: 'Data & DB Validation',
      bullets: ['MySQL, SQL Server, PostgreSQL, MongoDB', 'SQL/NoSQL validation across UI/API/backend', 'Excel/CSV-driven suites at scale']
    },
    {
      title: 'Performance & Reliability',
      bullets: ['JMeter, LoadRunner patterns', 'Edge cases, resiliency, chaos-ready scripts', 'Observability hooks & threshold gates']
    },
    {
      title: 'CI/CD & Cloud',
      bullets: ['Jenkins, GitHub Actions, Azure DevOps', 'Dockerized runners, AWS EC2/Lambda, Kubernetes', 'Versioned pipelines, nightly regression']
    },
    {
      title: 'Leadership & Practice',
      bullets: ['Risk-based pruning, AI-assisted prioritization', 'Agile/Scrum, mentoring, test strategy', 'Release risk assessment & comms']
    }
  ],
  stackChips: [
    'Java · TypeScript · Python',
    'Selenium · Playwright · Cypress',
    'REST Assured · Karate',
    'JMeter · LoadRunner',
    'AWS · Azure · Docker · Kubernetes'
  ],
  experience: [
    {
      company: 'Sparklight',
      role: 'Senior QA Engineer',
      period: 'May 2024 – Present · Mesa, AZ',
      bullets: [
        'Migrated 1,200+ Selenium tests to Playwright TS; cut runtime by ~70% via parallel and auto-waits.',
        'Risk-pruned 30–40% low-value tests; reduced flakiness 45% with resilient locators.',
        'Validated 10k+ customer records and 200+ PDFs quarterly; safeguarded brand/data parity.',
        'Load-tested 5,000+ users; stood up cloud CI/CD (AWS, Azure DevOps, Jenkins, Docker).'
      ],
      tags: ['Playwright', 'TypeScript', 'AWS', 'Azure', 'JMeter']
    },
    {
      company: 'University at Buffalo',
      role: 'Sr SDET Engineer',
      period: 'Sep 2023 – Mar 2024 · Buffalo, NY',
      bullets: [
        'Built Playwright + TS framework for Gym Management; 90% coverage of core journeys.',
        'Role-based auth, edge cases, and SQL validation across 10k+ member records.',
        'Reusable data-driven suites; production-quality automation artifacts.'
      ],
      tags: ['Playwright', 'TypeScript', 'SQL', 'Agile']
    },
    {
      company: 'DXC Technology',
      role: 'Senior QA Engineer',
      period: 'May 2019 – Aug 2023 · Hyderabad, IN',
      bullets: [
        'Scaled Selenium frameworks to 75% coverage; 1,000+ UI/API cases automated.',
        'Parallel TestNG suites, Jenkins CI, Appium mobile coverage.',
        'Karate DSL API automation with full microservice contract validation.',
        'LoadRunner/JMeter for 5k+ concurrent users; reduced post-release defects by 35%.'
      ],
      tags: ['Selenium', 'Java', 'Karate', 'Jenkins', 'Appium']
    }
  ],
  caseStudy: {
    title: 'ASML Buy Back Optimizer — accuracy as a feature.',
    tech: 'Playwright · TypeScript · React · SQL',
    sections: [
      {
        title: 'Challenge',
        body:
          'Validate complex resale price optimization with editable grids, computed fields, and financial formulas—zero tolerance for drift.'
      },
      {
        title: 'Approach',
        list: [
          'Playwright + REST hybrid tests for UI and services.',
          'Excel/CSV-driven scenarios mirroring production data.',
          'Asserted pipeline units, margins, aggregation logic.'
        ]
      },
      {
        title: 'Outcome',
        body:
          '100% accuracy on financial calculations across UI, exports, and backend; reusable utilities and traceability docs for regression safety.'
      }
    ]
  },
  certifications: [
    { label: 'AWS Certified DevOps Engineer – Professional' },
    { label: 'ISTQB Certified Tester' },
    { label: 'Certified Software Test Automation Specialist' }
  ],
  awards: [
    { label: 'DXC Champ Award (Q2–Q4)', href: '/awards/cham-award.pdf' },
    { label: 'DXC Collaboration Award', href: '/awards/collobration-award.pdf' },
    { label: 'DXC Best Performer (5×)' }
  ]
};
