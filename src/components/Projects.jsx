import { ProjectCard } from './ProjectCard'

export function Projects() {
  const projects = [
    {
      title: 'DTMA Platform',
      description: 'Enterprise Power Platform and Dataverse implementation with Angular frontend, custom C# plugins, and Power Automate flows. Built to support complex business logic, security roles, and customer-facing workflows.',
      tech: ['Angular', 'TypeScript', 'Dataverse', 'C#', 'Power Automate', 'Azure'],
      liveUrl: 'https://dtma.vercel.app/',
      caseStudy: {
        summary: 'An enterprise Power Platform implementation connecting Angular, Dataverse, custom C# plugins, and Power Automate flows for secure customer-facing workflows and internal operations.',
        metrics: [
          { value: '60%', label: 'Azure cost reduction' },
          { value: '100%', label: 'Platform availability' },
          { value: '0', label: 'Data loss after critical incident' }
        ],
        sections: [
          {
            title: 'Challenge',
            items: [
              'Support complex business workflows across a live enterprise platform without compromising availability.',
              'Stabilize production incidents quickly while keeping QA, stakeholders, and delivery teams aligned.'
            ]
          },
          {
            title: 'Role',
            items: [
              'Built and refined TypeScript frontend logic for Power Platform experiences.',
              'Developed custom C# plugin logic and supported Dataverse-backed workflows.',
              'Owned escalation coordination, investigation, root-cause analysis, and recovery communication.'
            ]
          },
          {
            title: 'Solution',
            items: [
              'Unified UI logic patterns to reduce maintenance overhead and make behavior easier to extend.',
              'Integrated Dataverse, Power Automate, and plugin changes for automated operational workflows.',
              'Refined Azure resources and CI/CD routines to reduce monthly infrastructure spend.'
            ]
          },
          {
            title: 'Impact',
            items: [
              'Reduced Azure costs from $3,900 to $1,500 per month.',
              'Maintained 100% platform availability through production support cycles.',
              'Protected data integrity during a critical encoding incident.'
            ]
          }
        ]
      }
    },
    {
      title: 'DQ Corporate Web',
      description: 'Corporate web application built with modern frontend stack, deployed via Vercel with CI/CD pipeline integration.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Vercel', 'CI/CD'],
      liveUrl: 'https://dq-prod-corp-web.vercel.app/'
    },
    {
      title: 'DFSA Services Portal',
      subtitle: 'Enterprise Government Services Platform',
      description: 'Contributed to the development of a secure web portal used for managing digital services and user interactions. The platform includes authentication workflows, user-friendly interfaces, and backend integrations to support enterprise-level operations.',
      contributions: [
        'Supported implementation of authentication flows with Azure AD B2C.',
        'Worked on UI enhancements and validation logic.',
        'Assisted in integrating frontend components with backend services.'
      ],
      tech: ['Power Pages', 'Azure AD B2C', 'JavaScript'],
      projectType: 'Enterprise Project (Team Contribution)',
      liveUrl: 'https://dqdfsadev3.powerappsportals.com/',
      ctaLabel: 'View Project'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-semibold mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
