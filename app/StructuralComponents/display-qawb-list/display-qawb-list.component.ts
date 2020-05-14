import { Component, OnInit, Input } from '@angular/core';
import { QAWbListModel } from '../qawb-list-model';

@Component({
  selector: 'app-display-qawb-list',
  templateUrl: './display-qawb-list.component.html',
  styleUrls: ['./display-qawb-list.component.css']
})
export class DisplayQAWbListComponent implements OnInit {

  @Input() qaWbList: QAWbListModel;
  @Input() workbookName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
