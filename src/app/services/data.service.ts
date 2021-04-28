import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  photoUrl: string;
  content: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
}
