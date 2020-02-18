import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from '@mdv20/core-data';

@Component({
  selector: 'mdv20-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Phone[];
  @Input() selected: Phone;
  @Output() selectPhone = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
}
