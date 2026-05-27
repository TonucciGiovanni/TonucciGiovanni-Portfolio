import { useState } from 'react'
import { AccordionItem } from './AccordionItem'

export function Experience() {
  const [openId, setOpenId] = useState(0)

  const experiences = [
    {
      id: 0,
      title: 'Technical Resolutions Lead / Power Platform Developer',
      company: 'Digital Qatalyst',
      period: 'May 2025 – Present',
      location: 'Nairobi, Kenya · Hybrid',
      bullets: [
        'Own end-to-end technical resolution for complex platform incidents across DTMP and DTMA, primary escalation point for high-priority issues',
        'Manage escalation pipelines and incident response workflows, ensuring triage, root-cause analysis, and service recovery within SLAs',
        'Partner with QA teams to coordinate investigation, reproduction, and resolution of production bugs',
        'Communicate incident status and resolution timelines to stakeholders',
        'Engineer frontend experiences using TypeScript and custom C# plugins on Power Platform',
        'Drive Azure cost optimization and refine GitLab CI/CD pipelines'
      ],
      achievements: [
        '60% Azure cost reduction ($3,900→$1,500/month)',
        '100% platform availability maintained',
        '0 data loss after critical encoding incident',
        'Unified UI logic framework reducing maintenance overhead'
      ]
    },
    {
      id: 1,
      title: 'Software Developer',
      company: 'Softclans Technologies Limited',
      period: 'Nov 2024 – Apr 2025',
      location: 'Nairobi, Kenya',
      bullets: [
        'Built high-availability Angular frontend modules for an airline operations system with real-time data sync and crew management workflows',
        'Developed UIs for aircraft maintenance and operational workflow modules',
        'Integrated frontend components with REST APIs for real-time data flow',
        'Supported deployments via Azure and GitLab CI/CD pipelines'
      ]
    },
    {
      id: 2,
      title: 'Junior IT Support Officer / Web Developer Intern',
      company: 'Africa Fleet Management Solutions',
      period: 'Aug 2023 – Oct 2024',
      location: 'Nairobi, Kenya',
      bullets: [
        'Developed and maintained company website frontend with responsive design',
        'Provided IT support for fleet tracking infrastructure and internal systems',
        'Diagnosed and resolved hardware, network, and web system issues'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-semibold mb-12">Experience</h2>

        <div className="border border-accent/20 rounded-lg overflow-hidden">
          {experiences.map((exp) => (
            <AccordionItem
              key={exp.id}
              title={exp.title}
              subtitle={`${exp.company} · ${exp.period}`}
              isOpen={openId === exp.id}
              onClick={() => setOpenId(openId === exp.id ? -1 : exp.id)}
            >
              <div className="space-y-4">
                <p className="text-sm text-text-secondary">{exp.location}</p>

                <div>
                  <p className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-3">Key Responsibilities</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-text-secondary text-sm flex items-start">
                        <span className="text-accent mr-3 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.achievements && (
                  <div>
                    <p className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-3">Key Achievements</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-text-secondary text-sm flex items-start">
                          <span className="text-accent mr-3 shrink-0">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  )
}
