import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage implements OnInit, OnDestroy {
  typedText = signal('');
  showCursor = signal(true);
  currentYear = new Date().getFullYear();

  private cursorInterval: any;
  private typeTimeout: any;
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  roles = [
    'Software Developer',
    'Software Engineer',
    'Java Developer',
    'Full-Stack Engineer'
  ];

  ngOnInit() {
    this.startTypewriter();
    this.cursorInterval = setInterval(() => this.showCursor.update(v => !v), 530);
  }

  ngOnDestroy() {
    clearInterval(this.cursorInterval);
    clearTimeout(this.typeTimeout);
  }

  private startTypewriter() {
    const currentRole = this.roles[this.roleIndex];
    if (!this.isDeleting) {
      this.charIndex++;
      this.typedText.set(currentRole.substring(0, this.charIndex));
      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
        this.typeTimeout = setTimeout(() => this.startTypewriter(), 2000);
        return;
      }
      this.typeTimeout = setTimeout(() => this.startTypewriter(), 80);
    } else {
      this.charIndex--;
      this.typedText.set(currentRole.substring(0, this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.typeTimeout = setTimeout(() => this.startTypewriter(), 400);
        return;
      }
      this.typeTimeout = setTimeout(() => this.startTypewriter(), 40);
    }
  }
}
