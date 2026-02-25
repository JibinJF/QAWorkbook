import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notice-board',
    templateUrl: './notice-board.component.html',
    styleUrls: ['./notice-board.component.css'],
    standalone: false
})
export class NoticeBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  noticeItems: string[] = [
    `QAWorkbook is still in its infant stage. We are adding and updating contents regularly.`,
    `How to use the site?
      <ol>
        <li>Select a QAWorkbook.</li>
        <li>Read a question.</li>
        <li>Guess the answer.</li>
        <li>Click anywhere on the question to see answer and description (if any).</li>
      </ol>`,
  ];
}
