import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  menuItems = [
    {
      id: 'PROPERTIES',
      label: 'LABELS.PROPERTIES',
      iconClasses: 'fa fa-light fa-building',
      route: '/property'
    },
    {
      id: 'CONTRACTS',
      label: 'LABELS.CONTRACTS',
      iconClasses: 'fa fa-light fa-file-contract',
      route: '/contracts'
    }]
    // {
    //   id: 'COMPANIES',
    //   label: 'Companies',
    //   iconClasses: 'icon-building-4',
    //   route: 'login',
    //   roles: ['View Companies'],
    //   linkActiveExact: false
    // }]
  constructor(private translationService: TranslationService) {
    // translationService.setLanguage('en');
  }
  ngOnInit(): void {
  }

}
