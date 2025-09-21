import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { ApiHttpClientService } from '../../services/api-http-client.service';
import { Title } from '@angular/platform-browser';
import { Breed } from '../../interfaces/Breed';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, FormsModule, RouterLink, SuggestionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  breeds: Breed[] = [];
  featuredBreeds: Breed[] = [];

  readonly apiHttpClientService = inject(ApiHttpClientService);

  title = inject(Title);

  toggle: boolean = true;

  @ViewChild('form')
  public userForm!: NgForm;

  handleSuggestion = (event: any): void => {
    this.userForm.form.controls['search'].setValue(event.target.innerText);
    this.toggle = false;
  }

  public toggleChange() {
    // triggering function with (change) isn't perfect 
    // -> sometimes you need to break focus to have the modal pop back up
    // (focus) - modal seems more responsive
    this.toggle = true;
  }

  ngOnInit(): void {

    this.title.setTitle("AngularCatWiki");
   
    this.apiHttpClientService.fetchBreeds().subscribe((data: Breed[]) => {
      this.breeds = data;
      this.featuredBreeds = data.filter((element:Breed)=> ['beng', 'sava', 'norw', 'srex'].indexOf(element.id) != -1 );
    })
  }

  router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/breed', form.value.search]);
    }
  }

}
