import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
//import { ApiHandlerService } from '../../services/api-handler.service';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { ApiHttpClientService } from '../../services/api-http-client.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SuggestionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  breeds: any;
  featuredBreeds: any;
  //apiHandlerService = inject(ApiHandlerService);

  apiHttpClientService = inject(ApiHttpClientService);

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

    /*
    this.apiHandlerService.fetchBreeds().then((data) => {
       // using this approach, the initial loaded source code will show `Error: Fetching top breeds`
      this.breeds = data;
      this.featuredBreeds = data.filter(function (element: any) { return ['beng', 'sava', 'norw', 'srex'].indexOf(element.id) != -1 });
    });
    */
   
    this.apiHttpClientService.fetchBreeds().subscribe((data: any) => {
      // Using httpClient the breed images will be added to the source code
      this.breeds = data;

      this.featuredBreeds = data.filter((element:any)=> ['beng', 'sava', 'norw', 'srex'].indexOf(element.id) != -1 )

      // to filter solution won't work if you don't add any type for data
    })
  }

  router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/breed', form.value.search]);
    }
  }

}
