import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutPage {}
