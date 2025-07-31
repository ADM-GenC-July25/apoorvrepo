import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer-service';
import { ActivatedRoute } from '@angular/router';
import { Developer } from '../developer';

@Component({
  selector: 'app-bio-details',
  imports: [],
  templateUrl: './bio-details.html',
  styleUrl: './bio-details.css'
})
export class BioDetails implements OnInit {
  dev! : Developer | undefined;

  constructor(private developerService: DeveloperService, private route: ActivatedRoute) {}

  getDeveloper(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.dev = this.developerService.getDeveloperById(id);
  }

  ngOnInit(): void {
    this.getDeveloper();
  }
}
