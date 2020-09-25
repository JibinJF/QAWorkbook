import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
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
        <li>Guess an answer.</li>
        <li>Click the dropdown arrow against the question to see answer and description (if any).</li>
      </ol>`,
  ];
}
