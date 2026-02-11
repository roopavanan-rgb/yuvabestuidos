// AccordionList.js
import AccordionItem from './AccordionItem ';

const jobs = [
  {
    category: 'Design & Marketing',
    title: 'Lead Sustainability Educator',
    focus: 'Delivering corporate sustainability courses for young professionals.',
    experience: 'Minimum Experience 2+ years',
    details: {
      description: 'The Lead Sustainability Educator will deliver ...',
      responsibilities: [
        'Manage in-person and online sessions...',
        'Create and update course materials...',
        // add more responsibilities
      ],
      requirements: [
        'Minimum 2 years in sustainability education...',
        'Strong understanding of climate science...',
        // add more requirements
      ],
      benefits: ['Competitive salary', 'eBike and free lunch', 'Access to a mentor network'],
    },
  },
  // add more job items
];

export default function AccordionList() {
  return (
    <div className="max-w-3xl mx-auto">
      {jobs.map((job, index) => (
        <AccordionItem key={index} {...job} />
      ))}
    </div>
  );
}
