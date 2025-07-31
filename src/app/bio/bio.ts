import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { CommonModule } from '@angular/common';
import { DeveloperService } from '../developer-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bio',
  imports: [CommonModule, RouterModule],
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class Bio implements OnInit {

  constructor(private developerService: DeveloperService) {
    this.developerService.getAllDevelopers().subscribe(
      response => this.devs = response
    );
  }
  
  ngOnInit(): void {
    //this.loadDeveloper();
  }

  //dev!: Developer;
  devs: Developer[] = [];

  loadDeveloper() {
    //this.devs = [new Developer('Apoorv', 'Chauhan', 'Python', 2022), new Developer('Blah', 'Vlah', 'C', 1970)];
  }

}
