import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({

  selector: 'app-right-carousel',
  standalone: true,
  imports: [
    SlickCarouselModule,
  ],
  templateUrl: './right-carousel.component.html',
  styleUrl: './right-carousel.component.css'
})
export class RightCarouselComponent {

  slides = [
    {
      img: 'assets/images/carousel/real/job-readiness.jpg',
      alt: 'Professional celebrating a job success on laptop',
      title: 'Job Readiness'
    },
    {
      img: 'assets/images/carousel/real/mentoring-session.jpg',
      alt: 'Professionals discussing work around a table',
      title: 'Interview Confidence'
    },
    {
      img: 'assets/images/carousel/real/training-team.jpg',
      alt: 'People reviewing work together',
      title: 'Resume and LinkedIn Support'
    },
    {
      img: 'assets/images/carousel/real/us-learning.jpg',
      alt: 'Learner using a laptop in a United States context',
      title: 'Your US Career Path'
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    fade: true,
    cssEase: 'ease-in-out',
  };

}
