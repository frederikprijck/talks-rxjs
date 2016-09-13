import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from './person-model';
import { PersonService } from './person.service';

@Component({
    templateUrl: './app/person/person-detail.component.html',
    styleUrls: ['./app/person/person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
    submitted = false;
    @Input() person: Person;
    @Output() state = new EventEmitter();
    error: any;

    countries = ['Belgium', 'Italy', 'Germany', 'United States'];

    constructor(private personService: PersonService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = params['id'];
                this.personService.getPerson(id)
                    .subscribe(person => this.person = person);
            } else {
                this.person = new Person("","","",0,"");
            }
        });
    }

    save() {
        this.submitted = true; 
        this.personService
            .save(this.person)
            .then(person => {
                this.person = person;
            })
            .catch(error => this.error = error);
    }


}
