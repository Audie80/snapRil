import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  content: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      content: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false,
    },
    {
      fromName: 'Lauren Ruthford',
      content: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false,
    },
    {
      fromName: 'Jordan Firth',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc egestas urna eget lacus sodales rhoncus.
        Nullam ullamcorper ligula ut vehicula convallis.
        Etiam sagittis condimentum placerat.
        Duis vehicula semper lorem, sit amet rhoncus nisl lobortis at.
        Proin at sollicitudin ipsum. Vivamus nec quam euismod,
        porttitor ante posuere, congue tortor.
        Sed nec erat viverra, efficitur dui sit amet, elementum enim.
        Integer egestas libero scelerisque rhoncus convallis.
        Ut blandit ante quis dui suscipit elementum.
        Vestibulum nec felis in nisi suscipit bibendum.`,
      date: '4:55 AM',
      id: 2,
      read: false,
    },
    {
      fromName: 'Bill Thomas',
      content: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false,
    },
    {
      fromName: 'Joanne Pollan',
      content: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false,
    },
    {
      fromName: 'Andrea Cornerston',
      content: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false,
    },
    {
      fromName: 'Moe Chamont',
      content: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      content: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false,
    },
  ];

  constructor() {}

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
