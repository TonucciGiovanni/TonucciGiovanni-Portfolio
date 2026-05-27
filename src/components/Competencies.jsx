import { CompetencyBadge } from './CompetencyBadge'

export function Competencies() {
  const competencies = [
    {
      title: 'Leadership & Operations',
      items: [
        'Team Leadership',
        'Escalation Management',
        'Incident Response',
        'SLA Adherence',
        'Root-Cause Analysis',
        'Service Recovery',
        'Stakeholder Communication'
      ]
    },
    {
      title: 'Platform Engineering',
      items: [
        'Dynamics 365',
        'Dataverse',
        'Power Pages',
        'Power Automate',
        'Power Platform'
      ]
    },
    {
      title: 'Frontend Development',
      items: [
        'Angular',
        'TypeScript',
        'JavaScript ES6+',
        'React',
        'HTML5',
        'CSS3'
      ]
    },
    {
      title: 'Backend & Logic',
      items: [
        'C# (.NET)',
        'ASP.NET',
        'Plugin Development',
        'REST API Integration'
      ]
    },
    {
      title: 'Cloud & DevOps',
      items: [
        'Microsoft Azure',
        'Azure Cost Optimization',
        'GitLab CI/CD',
        'Environment Monitoring'
      ]
    },
    {
      title: 'Security',
      items: [
        'XSS Protection',
        'Input Validation',
        'RBAC'
      ]
    }
  ]

  return (
    <section id="competencies" className="py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-semibold mb-12">Core Competencies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => (
            <CompetencyBadge key={idx} title={comp.title} items={comp.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
