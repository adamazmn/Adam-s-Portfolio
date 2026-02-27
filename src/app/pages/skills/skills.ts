import { Component, OnInit, OnDestroy, signal, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsPage implements OnInit, OnDestroy {
  activeSkillCategory = signal('development');
  animatedSkillLevels: Map<string, number> = new Map();
  private skillAnimationFrames: Map<string, number> = new Map();
  commitBoxes = Array.from({length: 30}, (_, i) => i);

  constructor(private cdr: ChangeDetectorRef) {}

  skillCategories = [
    {
      id: 'development',
      label: 'Development',
      icon: 'code',
      skills: [
        { name: 'Java / Spring Boot', level: 90, color: '#f89820' },
        { name: 'Angular / TypeScript', level: 88, color: '#dd0031' },
        { name: 'HTML / CSS / JS', level: 90, color: '#e44d26' },
        { name: 'PostgreSQL / Oracle', level: 80, color: '#336791' },
        { name: 'RESTful APIs', level: 88, color: '#10b981' },
        { name: 'Git / Version Control', level: 85, color: '#f05032' },
        { name: 'Docker / CI-CD', level: 65, color: '#2496ed' },
        { name: 'Apache Kafka', level: 60, color: '#231f20' },
      ],
    },
    {
      id: 'analysis',
      label: 'Analysis & Design',
      icon: 'pen-tool',
      skills: [
        { name: 'Requirements Gathering', level: 85, color: 'var(--accent-1)' },
        { name: 'System Design (SRS/SDS)', level: 85, color: 'var(--accent-2)' },
        { name: 'UML / BPMN Diagrams', level: 80, color: '#06b6d4' },
        { name: 'Gap Analysis', level: 80, color: '#3b82f6' },
        { name: 'Figma / UI-UX Design', level: 75, color: '#f24e1e' },
        { name: 'Agile & Waterfall', level: 80, color: '#10b981' },
      ],
    },
    {
      id: 'testing',
      label: 'Testing & QA',
      icon: 'test-tube',
      skills: [
        { name: 'Manual Testing', level: 80, color: '#f59e0b' },
        { name: 'Test Case Design', level: 82, color: '#ef4444' },
        { name: 'Integration Testing', level: 78, color: '#8b5cf6' },
        { name: 'Defect Reporting', level: 80, color: '#ec4899' },
        { name: 'Postman API Testing', level: 85, color: '#ff6c37' },
      ],
    },
  ];

  get activeSkills() {
    return this.skillCategories.find(c => c.id === this.activeSkillCategory())?.skills ?? [];
  }

  getAnimatedLevel(skillName: string): number {
    return this.animatedSkillLevels.get(skillName) ?? 0;
  }

  getBoxColor(skillName: string, color: string, index: number): string {
    const level = this.getAnimatedLevel(skillName);
    const boxThreshold = (index / 30) * 100;
    
    if (level > boxThreshold) {
      // Predictable randomness for github commit graph shading
      const rand = ((index * 17) + skillName.length) % 4;
      let intensity = 100;
      if (rand === 0) intensity = 30;
      else if (rand === 1) intensity = 60;
      else if (rand === 2) intensity = 85;
      else intensity = 100;
      
      return `color-mix(in srgb, ${color} ${intensity}%, transparent)`;
    }
    return 'rgba(255, 255, 255, 0.05)';
  }

  ngOnInit() {
    // Animate skills on page load
    setTimeout(() => this.animateSkills(), 100);
  }

  ngOnDestroy() {
    this.skillAnimationFrames.forEach((frameId) => cancelAnimationFrame(frameId));
    this.skillAnimationFrames.clear();
  }

  setSkillCategory(id: string) {
    this.activeSkillCategory.set(id);
    setTimeout(() => this.animateSkills(), 50);
  }

  private animateSkills() {
    this.skillAnimationFrames.forEach((frameId) => cancelAnimationFrame(frameId));
    this.skillAnimationFrames.clear();

    const skills = this.activeSkills;
    skills.forEach((skill) => {
      this.animatedSkillLevels.set(skill.name, 0);
    });

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      let anyRunning = false;
      skills.forEach((skill) => {
        const current = Math.round(eased * skill.level);
        this.animatedSkillLevels.set(skill.name, current);
        if (current < skill.level) anyRunning = true;
      });

      if (anyRunning) {
        this.cdr.detectChanges();
        const frameId = requestAnimationFrame(tick);
        this.skillAnimationFrames.set('main', frameId);
      } else {
        this.cdr.detectChanges();
      }
    };

    const frameId = requestAnimationFrame(tick);
    this.skillAnimationFrames.set('main', frameId);
  }
}
