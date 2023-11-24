import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpClientService {

  private base_url = 'https://api.thecatapi.com/v1/';

  http = inject(HttpClient)

  fetchBreeds() {
    return this.http.get(this.base_url + 'breeds', {
      headers: {
        "x-api-key": environment.apiKey
      }
    })
  }

  fetchBreed() {
    return this.http.get(this.base_url + 'breeds', {
      headers: {
        "x-api-key": environment.apiKey
      }
    })
  }

  getBreedBySearchTerm(searchTerm: string) {
    return this.http.get(this.base_url + `breeds/search?q=${searchTerm}`, {
      headers: {
        "x-api-key": environment.apiKey
      }
    })
  }

  getHeroImage(json: any) {
    return this.http.get(this.base_url + `images/${json[0]?.reference_image_id}`, {
      headers: {
        "x-api-key": environment.apiKey
      }
    })
  }

  getOtherImageUrls(json: any) {
    return this.http.get(this.base_url + `images/search?limit=6&breed_ids=${json[0]?.id}`, {
      headers: {
        "x-api-key": environment.apiKey
      }
    });
  }

}
