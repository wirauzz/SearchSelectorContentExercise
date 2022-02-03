import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-order-collection-by',
  templateUrl: './order-collection-by.component.html',
  styleUrls: ['./order-collection-by.component.css']
})
export class OrderCollectionByComponent implements OnInit {
  @Output() optionToOrder: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  orderByAsc(){
    this.optionToOrder.emit(true);
  }
  
  orderByDesc(){
    this.optionToOrder.emit(false);
  }

}
