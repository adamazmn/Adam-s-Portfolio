import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { AboutPage } from './pages/about/about';
import { ExperiencePage } from './pages/experience/experience';
import { ProjectsPage } from './pages/projects/projects';
import { SkillsPage } from './pages/skills/skills';
import { CertsPage } from './pages/certs/certs';
import { ContactPage } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'experience', component: ExperiencePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'skills', component: SkillsPage },
  { path: 'certs', component: CertsPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' },
];
