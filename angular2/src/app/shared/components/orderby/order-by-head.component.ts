import { Component, ContentChildren, AfterViewInit, OnInit, QueryList, Output, EventEmitter } from '@angular/core';
import { OrderByComponent, OrderBy } from './';

@Component({
    selector: "thead[order-by]",
    templateUrl: './app/shared/Components/orderby/order-by-head.component.html'
})
export class OrderByHeadComponent implements AfterViewInit {

    @Output() UpdateSort = new EventEmitter();
    @ContentChildren(OrderByComponent) OrderByComponents: QueryList<OrderByComponent>;

    updateChildren(state:OrderBy) {
        this.OrderByComponents.forEach(element => {
            element.checkState(state);
            this.UpdateSort.emit(state);
        });
    }

    ngAfterViewInit() {
        this.OrderByComponents.forEach(element => {
            element.orderByUpdate.subscribe(changes => this.updateChildren(changes))
        });
    }

}