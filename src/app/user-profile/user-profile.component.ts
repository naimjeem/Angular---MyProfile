import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  name: string;
  age: number;
  profession: string;
  email: string;
  website: string;
  skills: string[];


  constructor() {
    console.log('constructor is running...');
   }

  ngOnInit() {
    console.log('ngOnInit is running...');

    this.name = 'Naim Jeem';
    this.age = 24;
    this.profession = 'Software Developer';
    this.email = 'naim36208@gmail.com';
    this.website = 'naimjeem.jefcorp.com';
    this.skills = ['Angular', 'React', 'Node.js', 'Git', 'Meteor', 'React Native'];
  }

}
