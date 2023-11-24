import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private base_url = 'https://api.thecatapi.com/v1/';

  async fetchBreeds() {
    const data = await fetch(this.base_url + 'breeds', {
      method: 'GET',
      headers: {
        "x-api-key": environment.apiKey
      }
    })
    return data.json() ?? [];
  }

  async fetchBreed() {
    const data = await fetch(this.base_url + 'breeds', {
      method: 'GET',
      headers: {
        "x-api-key": environment.apiKey
      }
    })
    return data.json() ?? [];
  }

  async getBreedBySearchTerm(searchTerm: string) {
    const data = await fetch(this.base_url + `breeds/search?q=${searchTerm}`, {
      method: 'GET',
      headers: {
        "x-api-key": environment.apiKey
      }
    })
    return data.json() ?? [];
  }

  async getHeroImage(json: any) {
    const data = await fetch(this.base_url + `images/${json[0]?.reference_image_id}`, {
      method: 'GET',
      headers: {
        "x-api-key": environment.apiKey
      }
    })

    return data.json() ?? [];
  }

  async getOtherImageUrls(json: any) {
    const data = await fetch(this.base_url + `images/search?limit=6&breed_ids=${json[0]?.id}`, {
      method: 'GET',
      headers: {
        "x-api-key": environment.apiKey
      }
    });
    return data.json() ?? [];
  }

}
