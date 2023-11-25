import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { BubbleComponent } from '../bubble/bubble.component';
import { ApiHttpClientService } from '../../services/api-http-client.service';
import { forkJoin, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [CommonModule, BubbleComponent],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.css'
})
export class BreedComponent {
  @Input() name = '';
  breed: any = null;

  loading: boolean = true;

  title = inject(Title);

  data: any;
  filteredImages: any;

  httpService = inject(ApiHttpClientService)

  retrieveBreedData(): void {

    this.httpService.getBreedBySearchTerm(this.name).pipe(
      map(breed => {
        this.breed = breed;
        return breed;
      }),
      mergeMap(breed => {
        const hero = this.httpService.getHeroImage(breed);
        const images = this.httpService.getOtherImageUrls(breed);
        return forkJoin({ hero, images });
      })
    ).subscribe(response => {
      this.data = response;
      this.loading = false;
      this.filteredImages = Array.from(new Set(this.data.images.map((el: any) => el.url).filter((el: any) => el !== this.data.hero.url).filter((el: any) => el !== this.data.hero.url)));
    })
  }

  ngOnInit() {
    this.title.setTitle(this.name + " details")
    this.retrieveBreedData();
  }

}
