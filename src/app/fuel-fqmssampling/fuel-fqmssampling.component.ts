import {Component, Input} from '@angular/core';
import {Fqmssampling} from './fqmssampling';

@Component({
    selector: 'fuel-fqmssampling',
    templateUrl: './fuel-fqmssampling.component.html',
    styleUrls: ['./fuel-fqmssampling.component.css']
})
export class FuelFqmssamplingComponent {

    @Input()
    fqmssampling: Fqmssampling;

    hasVPWGrantedOptions: string[];
    filteredHasVPWGrantedOptions: string[];

    constructor() {
        this.getVPQGrantedOptions();
    }

    getVPQGrantedOptions(){
        this.hasVPWGrantedOptions = ['Yes', 'No', 'Please select']
    }

    search(event) {
        this.filteredHasVPWGrantedOptions = this.hasVPWGrantedOptions.filter((a: string) => a.toLowerCase().includes(event.query.toLowerCase()));
    }
}
