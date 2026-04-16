import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-left-carousel',
  standalone: true,
  imports: [
    SlickCarouselModule,
  ],
  templateUrl: './left-carousel.component.html',
  styleUrl: './left-carousel.component.css'
})
export class LeftCarouselComponent {

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
      img: 'assets/images/carousel/real/us-learning.jpg',
      alt: 'Learner using a laptop in a United States context',
      title: 'US-Focused Preparation'
    },
    {
      img: 'assets/images/carousel/real/job-readiness.jpg',
      alt: 'Professional celebrating career progress on a laptop',
      title: 'Career Outcomes'
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    fade: true,
    cssEase: 'ease-in-out',
  };
  };

