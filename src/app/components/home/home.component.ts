import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiHandlerService } from '../../services/api-handler.service';
import { SuggestionsComponent } from '../suggestions/suggestions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SuggestionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  breeds: any;
  featuredBreads: any;
  apiHandlerService = inject(ApiHandlerService);

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
    this.apiHandlerService.fetchBreeds().then((data) => {
      this.breeds = data;
      this.featuredBreads = data.filter(function (element: any) { return ['beng', 'sava', 'norw', 'srex'].indexOf(element.id) != -1 });
    });
  }

  router = inject(Router)

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/breed', form.value.search])
    }
  }

}
