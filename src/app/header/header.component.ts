import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public Details: string[] = [
    '07038968337, 09025549043',
    'Baale Akanji Layout, Jobele, Oyo, Oyo State.',
  ];
  public User = {
    surname: 'BAMISILE',
    fullname: 'TOLULOPE ADETAYO',
    stack: 'FULLSTACK/MOBILEAPP DEVELOPER',
    email: 'Tolulopebamisile@gmail.com',
  };
}
