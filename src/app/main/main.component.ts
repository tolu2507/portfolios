import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public CvDetails: string[] = [
    'MY C.V',
    'Bio',
    'About',
    'Experience/Education',
    'Skills',
    'Contacts',
  ];

  public skills: string[] = [
    'Javascript',
    'React',
    'HTML5',
    'CSS',
    'JQuery',
    'Typescript',
    'Mongodb',
    'Express',
    'NodeJs',
    'Python',
    'Project management',
    'Mechanical engineering',
    'Git',
    'GitHub',
  ];

  public BioDetails: Dir[] = [
    {
      href: 'https://www.linkedin.com/in/tolulope-bamisile-3158bb231/',
      text: 'Linkedin',
    },
    { href: 'https://web.facebook.com/tolulope.bamisile.3', text: 'Facebook' },
    {
      href: 'https://twitter.com/tolusneh17?t=VT3EkyyynUhfBNVx3Mqjiw&s=09',
      text: 'Twitter',
    },
    { href: 'https://github.com/tolu2507/', text: 'Github' },
    {
      href: 'https://www.instagram.com/p/CWykN0sIpKSwwLCRE3mZm5T6iyTHeq3hgqX2H80/?igshid=N2ZiY2E3YmU=',
      text: 'Instagram',
    },
  ];

  public Educations: Edu[] = [
    {
      text: ": Lord's Kiddies College, Oyo",
      date: '(2004 - 2009)',
      topic: 'Primary School',
    },
    {
      text: ': Olivet Baptist Academy, Oyo',
      date: '(2009 - 2015)',
      topic: 'Secondary School',
    },
    {
      text: ': Federal University of Technology Akure',
      date: '(2015 - 2021)',
      topic: 'Tertiary Institution',
    },
  ];

  public Experience: Exp[] = [
    { header: 'Project Manager ', details: ' Bincom Dev Center' },
  ];
}

export interface Dir {
  href: string;
  text: string;
}
export interface Exp {
  header: string;
  details: string;
}
export interface Edu {
  text: string;
  date: string;
  topic: string;
}
