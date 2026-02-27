import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-certs',
  standalone: true,
  templateUrl: './certs.html',
  styleUrl: './certs.css',
})
export class CertsPage {
  certModalImage = signal<string | null>(null);
  certModalName = signal('');

  certifications = [
    {
      name: 'Certified Tester Foundation Level',
      issuer: 'Malaysian Software Testing Board',
      date: 'Oct 2025',
      color: '#10b981',
      image: 'cert-ctfl.jpg',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Aug 2025',
      color: '#f59e0b',
      image: 'cert-aws.png',
    },
    {
      name: 'Google UX Design',
      issuer: 'Coursera',
      date: 'Dec 2024',
      color: '#3b82f6',
      image: 'cert-google-ux.png',
    },
    {
      name: 'Certified Professional Requirements Engineering',
      issuer: 'Malaysian Software Testing Board',
      date: 'Oct 2024',
      color: 'var(--accent-2)',
      image: 'cert-cpre.png',
    },
  ];

  openCertModal(cert: { name: string; image: string }) {
    this.certModalImage.set(cert.image);
    this.certModalName.set(cert.name);
    document.body.style.overflow = 'hidden';
  }

  closeCertModal() {
    this.certModalImage.set(null);
    this.certModalName.set('');
    document.body.style.overflow = '';
  }
}
