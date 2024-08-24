import { LangLevel } from '@typings/lang_level'

import { ResumeDefinition } from '@typings/definition'

const resume_definition: ResumeDefinition = {
  _education: 'Education',
  education: [
    {
      institution: 'University of California, Berkeley',
      period: '2017 - 2021',
      degree:
        'Bachelor of Science in Electrical Engineering and Computer Sciences',
      comment: 'GPA: 3.96/4.00',
    },
    {
      institution: 'University of California, Berkeley',
      period: '2021 - 2023',
      degree:
        'Master of Science in Electrical Engineering and Computer Sciences',
      comment: 'GPA: 3.96/4.00',
    },
  ],
  _work: 'Internship',
  work: [
    {
      company: 'Google',
      department: 'Google Cloud',
      role: 'Software Engineering Intern',
      period: '06/2020 - 08/2020',
      description: [
        'Developed a new feature for the Google Cloud Platform.',
        'Optimized the performance of the Google Cloud Platform.',
      ],
    },
    {
      company: 'Facebook',
      department: 'Facebook Reality Labs',
      role: 'Software Engineering Intern',
      period: '06/2021 - 08/2021',
      description: [
        'Developed a new feature for the Facebook Reality Labs.',
        'Optimized the performance of the Facebook Reality Labs.',
      ],
    },
  ],
  _tech_stack: 'Technology Stack',
  tech_stack: [
    {
      title: 'Languages',
      description: 'Typescript, Python, Java',
      comment: 'Proficient',
    },
    {
      title: 'Frontend',
      description: 'React, Angular, Vue',
      comment: 'Proficient',
    },
    {
      title: 'Backend',
      description: 'Node.js, Django, Flask',
      comment: 'Proficient',
    },
    {
      title: 'Database',
      description: 'MySQL, PostgreSQL, MongoDB',
      comment: 'Proficient',
    },
    {
      title: 'Cloud',
      description: 'AWS, GCP, Azure',
      comment: 'Proficient',
    },
    {
      title: 'DevOps',
      description: 'Docker, Kubernetes, Jenkins',
      comment: 'Proficient',
    },
  ],
  _language: 'Language',
  language: [
    {
      lang: 'English',
      level: LangLevel.ADVANCED,
      comment: 'TOEFL: 110, GRE: 330',
    },
    {
      lang: 'Chinese',
      level: LangLevel.NATIVE,
      comment: 'HSK: 6',
    },
  ],
}

export default resume_definition
