import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsPage {
  projects = [
    {
      name: 'MYDAILY Task Management System',
      description: 'Full-stack task management system with JWT authentication, email notifications via Resend, and cloud storage via Supabase. Deployed on Vercel (frontend) and Render (backend) with custom domain.',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT', 'Supabase', 'Vercel', 'Render'],
      icon: 'task',
      color: '#10b981',
      link: '#',
    },
    {
      name: 'NIISe - Identity Management Module',
      description: 'Contributed to the IDM Module (Release 1) for the Immigration Department of Malaysia. Implemented biometric verification (fingerprint & facial recognition), officer registration workflows, and access control.',
      tags: ['Angular 19', 'Spring Boot', 'Oracle', 'MinIO', 'Draw.io', 'Figma'],
      icon: 'shield',
      color: '#3b82f6',
      link: '#',
    },
    {
      name: 'Adamz Portfolio',
      description: 'This stunning portfolio website you are viewing right now! Built with Angular and modern web design principles to showcase my work and skills.',
      tags: ['Angular 21', 'TypeScript', 'CSS3', 'Responsive Design'],
      icon: 'briefcase',
      color: 'var(--accent-2)',
      link: '#',
    },
  ];
}
