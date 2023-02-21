import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyLogicService } from '../../services/property-logic/property-logic.service';

@Component({
  selector: 'property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  realestateId: number;
  propertyDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyLogicService: PropertyLogicService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.realestateId = params['id'];
      this.getRealEstateInfo();
    });
    this.realestateId = +this.activatedRoute.snapshot.params['id'];
  }

  getRealEstateInfo() {
    this.propertyLogicService
      .getRealEstateDetails(this.realestateId)
      .subscribe((res: any) => {
        this.propertyDetails = res;
      });
  }
}
