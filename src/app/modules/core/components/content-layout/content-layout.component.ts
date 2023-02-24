import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  menuItems = [
    {
      id: 'PROPERTIES',
      label: 'LABELS.PROPERTIES',
      iconClasses: 'fa fa-light fa-building',
      route: '/property/',
    },
    {
      id: 'RESEDENTIAL_CONTRACTS',
      label: 'LABELS.RESIDENTIAL_CONTRACTS',
      iconClasses: 'fa fa-light fa-file-contract',
      route: '/contracts/residential',
    },
    {
      id: 'COMMERCIAL_CONTRACTS',
      label: 'LABELS.COMMERCIAL_CONTRACTS',
      iconClasses: 'fa fa-light fa-file-contract',
      route: '/contracts/commercial',
    },
  ];
  constructor(private translationService: TranslationService) {
    // translationService.setLanguage('en');
  }
  ngOnInit(): void {}
}
