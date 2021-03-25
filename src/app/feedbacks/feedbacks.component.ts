import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
})

// type testimony = {
//   title: String,
//   body: String,
//   author: String
//   role: String
// }
export class FeedbacksComponent implements OnInit {
  feedbacks: Array<any>;

  constructor() {
    this.feedbacks = [
      {
        title: 'It surpassed our expectations',
        body:
          'Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.',
        author: 'Tania Y.',
        role: 'Flexi Content @Hello',
      },
      {
        title: 'The essential marketing tool',
        body:
          'Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.',
        author: 'Jack Francis',
        role: 'Manager @ Accidents Direct',
      },
      {
        title: 'Your company is truly upstanding',
        body:
          'The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.',
        author: 'Dawna N.',
        role: 'Editor @ Museum of Typography',
      },
    ];
  }

  ngOnInit(): void {}
}
