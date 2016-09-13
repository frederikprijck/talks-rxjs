import { Component, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './app/shared/Components/search/search.component.html',
    styleUrls: ['./app/shared/Components/search/search.component.css']
})
export class SearchComponent {
    // allow for 'click' & 'live'
    @Input() mode: string;
    @Output() search = new EventEmitter();

    searchValue: string;

    ngOnInit() {
        
    }

    onChange() {
        this.onSearch('live', this.searchValue);
    }

    onClick() {
        this.onSearch('click', this.searchValue);
    }

    onSearch(mode: string, value: string) {
        if (this.mode === mode) {
            this.search.emit({ value: value});
        }
    }

    toggleMode() {
        this.mode === 'live' ? this.mode = 'click' : this.mode = 'live';
    }
}