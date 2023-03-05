import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api_key = '6f418ca5d1499da77a2ff120a8f07681';

  base_url = 'https://api.themoviedb.org/3'

  constructor() { }
}
