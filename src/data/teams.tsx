const teams = [
  {
    name: 'Competition Team',
    description:
      'The Solar Decathlon Competition Team is the heart of our organization, bringing together members from all disciplines to collaborate on our flagship project for the Solar Decathlon competition. This team is responsible for leading the design of a solar-powered, energy-efficient home that showcases the latest innovations in sustainable architecture and renewable energy technologies.',
    commitment: '8-10 hours per week',
    responsibilities: [
      {
        name: 'Building Design',
        description:
          'Utilize design software such as Rhino and Revit to create a model of a building in one of the 4 divisions: residential housing, attached housing, multifamily housing, or education building.',
      },
      {
        name: 'Analysis and Optimization',
        description:
          'Perform analysis of build design through energy modeling software like OpenStudio and HoneyBee, embodied carbon modeling through One Click LCA, Tally and EC3, and financial modeling with RSMeans.',
      },
      {
        name: 'Technical Expertise',
        description:
          'Develop a strong technical understanding of architecture design, mechanical, electrical and plumbing design, and building science.',
      },
      {
        name: 'Industry Collaboration',
        description:
          'Interact with industry partners such as architecture firms, engineers, consultants, and more to determine innovative design solutions.',
      },
      {
        name: 'Presentation',
        description:
          "Present and market our design to the Department of Energy's National Renewable Energy Laboratory filled with experts in sustainable energy and design.",
      },
      {
        name: 'Skill Development',
        description:
          'Practice teamwork, technical communication, problem solving, and presentation skills.',
      },
    ],
  },
  {
    name: 'Research and Development',
    description:
      'The Research and Development (R&D) Team is dedicated to pushing the boundaries of innovation in solar energy technologies, with a focus on the SuperSurya project. This project involves the development of a residential-scale concentrated photovoltaic (CPV) system, aimed at harnessing sunlight more efficiently to generate electricity.',
    commitment: '8-10 hours per week',
    responsibilities: [
      {
        name: 'Project Development',
        description:
          'Lead the conceptualization, design, and implementation of the SuperSurya project, working collaboratively with team members to develop a cutting-edge CPV system that maximizes energy output and efficiency.',
      },
      {
        name: 'Hands-On Work',
        description:
          'Engage in hands-on work on the SuperSurya project, including prototyping, testing, and iteration of system components and configurations. This may involve building physical prototypes, conducting experiments, and analyzing data to optimize system performance.',
      },
      {
        name: 'Technical Research',
        description:
          'Conduct technical research to identify advancements and improvements in CPV technology, solar cell efficiency, optical design, tracking systems, and other relevant areas. Stay abreast of the latest literature, patents, and industry developments to inform the design and development of the SuperSurya system.',
      },
      {
        name: 'Innovation Challenges',
        description:
          'Participate in innovation challenges and competitions such as the Environmental Innovation Challenge at the University of Washington, where the team can showcase the SuperSurya project, receive feedback from experts, and compete for funding and recognition.',
      },
      {
        name: 'Documentation and Reporting',
        description:
          'Maintain comprehensive documentation of the SuperSurya project, including design specifications, testing protocols, research findings, and project milestones. Prepare progress reports, presentations, and publications to communicate project updates and outcomes to stakeholders.',
      },
    ],
  },
  {
    name: 'Marketing',
    description:
      'The Marketing Team is dedicated to promoting our mission of sustainable design and renewable energy innovation both on and off campus. With a focus on engaging students, industry partners, and the wider community, the Marketing Team plays a crucial role in raising awareness, recruiting talent, and securing support for our projects and initiatives.',
    commitment: '6-8 hours per week',
    responsibilities: [
      {
        name: 'Event Coordination',
        description:
          "Plan and organize events both on and off campus to showcase the club's projects, achievements, and opportunities for involvement. This includes workshops, seminars, information sessions, and community outreach events aimed at educating and inspiring participants about sustainable design and renewable energy.",
      },
      {
        name: 'Campus Engagement',
        description:
          'Develop marketing campaigns and initiatives to engage students, faculty, and staff on campus, leveraging social media, email newsletters, posters, and other channels to promote club activities, recruit new members, and foster a sense of community around sustainable living and innovation.',
      },
      {
        name: 'Industry Partnerships',
        description:
          'Cultivate relationships with industry partners, sponsors, and stakeholders to secure support, funding, and technical expertise for club projects. This involves identifying potential collaborators, pitching partnership opportunities, and maintaining ongoing communication to ensure mutually beneficial relationships.',
      },
      {
        name: 'Communication and Outreach',
        description:
          'Serve as the primary point of contact for external inquiries and communications related to marketing and outreach efforts. This involves responding to inquiries, coordinating media requests, and representing the club at networking events and conferences.',
      },
    ],
  },
  {
    name: 'Education',
    description:
      'The Education Team is dedicated to empowering members with the knowledge, skills, and resources they need to excel in the fields of sustainable design and renewable energy. This team serves as the primary conduit for translating technical information and software into educational formats that best serve the learning needs of our members.',
    commitment: '6-8 hours per week',
    responsibilities: [
      {
        name: 'Curriculum Development',
        description:
          'Develop and curate educational materials, resources, and curriculum modules to support the ongoing learning and professional development of club members. This includes converting technical information and software into accessible formats such as workshops, tutorials, guides, and online courses.',
      },
      {
        name: 'Skill-Building Workshops',
        description:
          'Organize and facilitate skill-building workshops and training sessions to equip members with practical skills and techniques relevant to their roles within the club. This may include training in software tools, construction techniques, energy modeling, and project management.',
      },
      {
        name: 'Continuous Learning Culture',
        description:
          'Promote a culture of continuous learning and professional growth within the club, encouraging members to stay updated on the latest developments in sustainable design and renewable energy through self-directed learning, research, and participation in relevant events and conferences.',
      },
      {
        name: 'Evaluation and Feedback',
        description:
          "Solicit feedback from members on the effectiveness of educational initiatives and resources, using data and input to continuously improve and refine the club's educational offerings. Monitor member engagement and participation in educational activities to ensure maximum impact.",
      },
    ],
  },
  {
    name: 'Business',
    description:
      "The Business Team serves as the financial backbone of our organization, responsible for fundraising, funds management, and procurement to support the club's activities and initiatives. With a focus on cultivating partnerships, securing resources, and ensuring fiscal responsibility, the Business Team plays a vital role in enabling the club to thrive and succeed in its mission of advancing sustainable design and renewable energy innovation.",
    commitment: '6-8 hours per week',
    responsibilities: [
      {
        name: 'Fundraising and Sponsorship',
        description:
          'Develop and implement strategies to secure funding and sponsorship support from corporate partners, industry stakeholders, alumni, and other sources. This includes identifying potential sponsors, preparing sponsorship packages, and cultivating relationships to meet fundraising goals.',
      },
      {
        name: 'Funds Management',
        description:
          "Oversee the club's financial resources, including budgeting, accounting, and financial reporting. Manage incoming funds, track expenditures, and ensure adherence to budgetary guidelines and financial policies.",
      },
      {
        name: 'Procurement and Purchasing',
        description:
          'Facilitate purchasing requests for technical resources, equipment, materials, and other supplies needed for club projects and activities. Coordinate procurement processes, obtain competitive bids, and manage vendor relationships to ensure timely delivery and cost-effective purchasing decisions.',
      },
      {
        name: 'Sponsor Benefits',
        description:
          'Liaise with sponsors to ensure they receive the benefits and recognition outlined in their sponsorship agreements. Coordinate sponsor communications, fulfillment of sponsorship commitments, and reporting on sponsorship impact and ROI.',
      },
      {
        name: 'Grant Applications',
        description:
          'Identify grant opportunities and assist in the preparation and submission of grant applications to secure additional funding for club projects and initiatives. Work closely with club leadership and project teams to develop compelling grant proposals that align with funding priorities and objectives.',
      },
    ],
  },
];

const relatedGroups = [
  {
    name: 'UW ASHRAE',
    description:
      'UW ASHRAE is a dynamic and interdisciplinary group of students passionate about advancing the field of HVAC&R (Heating, Ventilation, Air Conditioning, and Refrigeration) engineering and sustainable building design. With a focus on participating in ASHRAE competitions and tackling engineering-focused Solar Decathlon projects, the team strives to apply innovative solutions to real-world challenges in energy efficiency, indoor air quality, and environmental sustainability.',
    commitment: '8-10 hours per week',
    responsibilities: [
      {
        name: 'Project Development',
        description:
          'Lead the development and execution of engineering-focused Solar Decathlon projects, from initial concept design to final implementation. Collaborate with team members to identify project goals, define scope, and develop innovative solutions that integrate HVAC&R systems, energy-efficient technologies, and sustainable building practices.',
      },
      {
        name: 'Technical Analysis',
        description:
          'Conduct detailed technical analysis and simulations to evaluate the performance of building systems and components. Utilize energy modeling software, computational fluid dynamics (CFD) simulations, and other analytical tools to optimize HVAC&R designs, predict energy usage, and assess indoor environmental quality parameters.',
      },
      {
        name: 'Competition Participation',
        description:
          "Represent the UW ASHRAE Team in ASHRAE competitions and Solar Decathlon events, showcasing the team's engineering prowess, creativity, and commitment to sustainability. Prepare competition submissions, presentations, and technical reports that effectively communicate the team's innovative solutions and design strategies.",
      },
      {
        name: 'Education and Outreach',
        description:
          'Share knowledge and insights gained from project experiences with the broader community through educational workshops, outreach events, and industry presentations. Inspire future generations of engineers and designers to pursue careers in HVAC&R engineering and sustainable building design.',
      },
    ],
    additionalInfo: (
      <p>
        To learn more, visit{' '}
        <a
          target='_blank'
          href='https://uwsashrae.org/'
          className='underline underline-offset-4 decoration-[0.5px] hover:text-primary transition duration-300'
        >
          UW ASHRAE
        </a>
        .
      </p>
    ),
  },
];

export { teams, relatedGroups };
