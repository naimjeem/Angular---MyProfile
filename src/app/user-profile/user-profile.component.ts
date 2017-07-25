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
  skills: any[];


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

  onclick() {
    console.log('');
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    console.log('new skill ' + skill + ' is added');
    return false;
  }

  deleteSkill(skill) {
    for (let i = 0; i < this.skills.length; i++) {
      if (this.skills[i] === skill) {
        this.skills.splice(i, 1);
        console.log('skill ' + skill + ' is deleted');
      }
    }
  }

}
