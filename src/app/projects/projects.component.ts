import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      "title": "Improved ID3 Algorithm",
      "description": "An ID3 algorithm for better decision tree classification",
      "url": "https://github.com/gangadharKorrapati/MINPRO/tree/master"
    },
    {
      "title": "Improved ID3 Algorithm",
      "description": "An ID3 algorithm for better decision tree classification",
      // "url": "https://github.com/gangadharKorrapati/MINPRO/tree/master"
    }
  ]
}
