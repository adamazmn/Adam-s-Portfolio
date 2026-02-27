import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperiencePage {
  experiences = [
    {
      company: 'HeiTech Padu Berhad',
      role: 'Software Developer Trainee',
      period: 'Mar 2025 – Present',
      location: 'Cyberjaya, Selangor',
      highlights: [
        'Developed RESTful APIs for Identity Management (IDM) services using Spring Boot, applying microservices architecture to increase service efficiency and scalability by 80%.',
        'Built and optimized the frontend for IDM using Angular, improving UI responsiveness and usability by 80%.',
        'Integrated frontend and backend components, enhancing full-stack functionality by 75% and improving overall system performance.',
        'Conducted requirements documentation, gap analysis, and created System Design Specifications, boosting IDM module efficiency and reducing development gaps by 70%.',
        'Collaborated with cross-functional teams using Waterfall methodology to deliver features on time and reduce errors by 70%.',
      ],
      tags: ['Angular 19', 'Spring Boot', 'Oracle', 'Postman', 'Git', 'Figma', 'MinIO'],
    },
  ];

  extracurriculars = [
    {
      name: 'Test Design Competition 2025',
      detail: 'Participated in TDC organized by MSTB & Sunway University, applying test design techniques to a Lane Management System.',
      date: 'Jul 2025',
    },
    {
      name: 'SULAM Smart Business',
      detail: 'Supported community program helping local entrepreneurs adopt digital tools. Served as Secretary.',
      date: 'Dec 2024',
    },
    {
      name: 'UiTM Interfaculty Sports 2024',
      detail: 'Achieved Second Place in table tennis. Served as team manager and player.',
      date: 'Jun 2024',
    },
  ];
}
