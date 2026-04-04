import { Component } from '@angular/core';
import { MergedCarouselComponent } from '../carousel/merged-carousel/merged-carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    MergedCarouselComponent,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
})
export class HeroBannerComponent {
  isSmallScreen = false;
  contactForm: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  curriculumItems = [
    {
      title: 'SQL training & Interview prep (1 month)',
      detail: 'Live SQL practice, query optimization, interview drills, and real dataset case studies to help you answer employer questions with confidence.'
    },
    {
      title: 'Python training (1 month)',
      detail: 'Python fundamentals, data manipulation, scripting, and hands-on exercises focused on the skills recruiters expect.'
    },
    {
      title: 'Big data - Spark training in Databricks (1 month)',
      detail: 'Databricks labs, Spark architecture, ETL pipelines, and cluster performance tuning for production-ready big data workflows.'
    },
    {
      title: 'Pyspark Code training (1 week project)',
      detail: 'Build Pyspark pipelines, UDFs, DataFrame optimization, and clean coding best practices for data engineering roles through a focused one-week project.'
    },
    {
      title: 'AI training',
      detail: 'Integrate AI models with big data, deploy projects end-to-end, and create employer-ready case studies.'
    },
    {
      title: 'Internship/Project',
      detail: 'Build real world big data projects + AI to showcase practical experience and make your profile stand out.'
    }
  ];

  jobPrepItems = [
    {
      title: 'Resume/CV Preparation (one-on-one)',
      detail: 'Personalized resume review and rewriting to highlight your data engineering and AI experience for US recruiters.'
    },
    {
      title: 'Personal Portfolio Website',
      detail: 'Design and build a portfolio website that showcases your projects, skills, and technical story in a compelling way.'
    },
    {
      title: 'Linkedin Masterclass to make recruiters reach out to you',
      detail: 'Optimize your LinkedIn profile, network strategy, and outreach so recruiters contact you first.'
    },
    {
      title: 'Visa prep + University selection (if you are planning to study in the US)',
      detail: 'Career-focused guidance on US university options, degree pathways, and visa readiness for job-focused students.'
    },
    {
      title: 'Networking skills and Job board hacks',
      detail: 'Proven networking tactics, job board strategies, and employer targeting to speed up your job search.'
    }
  ];

  expandedIndex: number | null = null;

  toggleCurriculum(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // Handle form submission here
      alert('Thank you for your message!');
      this.contactForm.reset();
    }
  }
}
