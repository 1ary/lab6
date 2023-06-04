import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  companies: Company[] = [
    {
      name: 'ABC Company',
      location: 'City XYZ',
      salaryRange: '$1000 - $1500',
      shortProfile: 'ABC Company is a leading IT company specializing in web and mobile application development. We have a diverse team of talented professionals dedicated to delivering high-quality solutions to our clients.'
    },
    {
      name: 'XYZ Company',
      location: 'City ABC',
      salaryRange: '$800 - $1200',
      shortProfile: 'XYZ Company is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    {
      name: 'XYZ Company',
      location: 'City ABC',
      salaryRange: '$800 - $1200',
      shortProfile: 'XYZ Company is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    {
      name: 'XYZ Company',
      location: 'City ABC',
      salaryRange: '$800 - $1200',
      shortProfile: 'XYZ Company is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    {
      name: 'XYZ Company',
      location: 'City ABC',
      salaryRange: '$800 - $1200',
      shortProfile: 'XYZ Company is a software development company focused on creating innovative solutions for various industries. Our team is passionate about leveraging technology to drive business growth.'
    },
    // Add more company objects as needed
  ];

  constructor() { }
}

interface Company {
  name: string;
  location: string;
  salaryRange: string;
  shortProfile: string;
}
