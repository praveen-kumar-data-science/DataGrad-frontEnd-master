import { Component } from '@angular/core';

@Component({
  selector: 'app-merged-carousel',
  standalone:true,
  imports: [],
  templateUrl: './merged-carousel.component.html',
  styleUrl: './merged-carousel.component.css'
})
export class MergedCarouselComponent {
  slides = [
    {
      img: 'assets/images/carousel/real/training-team.jpg',
      alt: 'People learning together with laptops',
      title: 'Hands-on Training'
    },
    {
      img: 'assets/images/carousel/real/mentoring-session.jpg',
      alt: 'Professionals collaborating in a mentoring session',
      title: 'Mentored Guidance'
    },
    {
      img: 'assets/images/carousel/real/job-readiness-office.jpg',
      alt: 'Professional working with a laptop in a focused office setting',
      title: 'Job Readiness'
    },
    {
      img: 'assets/images/carousel/real/us-career-desk.jpg',
      alt: 'Professional desk scene with a United States context',
      title: 'US Career Path'
    }
  ];
}
