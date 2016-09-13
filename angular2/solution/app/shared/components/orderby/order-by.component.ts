import { Component, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
import { OrderBy } from './';

@Component({
    selector: 'th[order-by]',
    templateUrl: './app/shared/Components/orderby/order-by.component.html',
    styleUrls: ['./app/shared/Components/orderby/order-by.component.css']
})
export class OrderByComponent {
    private direction: boolean;
    @Input() target: string;
    @Output() orderByUpdate = new EventEmitter();
    private active: boolean;

    checkState(state: OrderBy) {
        this.active = state.target == this.target;
    }

    @HostListener('click', ['$event.target'])
    onClick(btn) {
        this.direction = !this.direction;
        this.orderByUpdate.emit({ target: this.target, direction: this.direction });
    }
}