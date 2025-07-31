import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeveloperService } from '../developer-service';
import { Router, RouterModule } from '@angular/router';
import { Developer } from '../developer';

@Component({
  selector: 'app-bio-create',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './bio-create.html',
  styleUrl: './bio-create.css'
})
export class BioCreate implements OnInit {

  devForm! : FormGroup;

  constructor(private developerService: DeveloperService, private formBuilder: FormBuilder, private router: Router) {}

  prepareSave(): Developer {
    return new Developer(
      'null', 
      this.devForm.value.firstName, 
      this.devForm.value.lastName, 
      this.devForm.value.favoriteLanguage, 
      Number(this.devForm.value.yearStarted)
    )
  }

  saveDeveloper(): void {
    if (this.devForm.value) {
      let dev = this.prepareSave()
      this.developerService.addDeveloper(dev);
      this.router.navigate(['/bio']);
    }
  }

  ngOnInit(): void {
    this.devForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      favoriteLanguage: [''],
      yearStarted: [''],
    });
  }
  //add constructor and inject DeveloperService, formBuilder and router
  
  //add formGroup

  //define presave method to handle form submission. create a new Developer object and call the service to save it

  //define method called saveDeveloper() and call presave() method to save the developer and call addDeveloper
}
