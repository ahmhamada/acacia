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
      id: 'CREDIT_LIMIT',
      label: 'Credit',
      iconClasses: 'icon-cards',
      route: 'credit',
      children: [
        {
          id: 'LEVEL_ONE1-1',
          label: 'All Credit Limits',
          iconClasses: '',
          route: 'credit-limit',
          roles: ['View Credit']
        }
      ]
    },
    {
      id: 'COMPANIES',
      label: 'Companies',
      iconClasses: 'icon-building-4',
      route: 'login',
      roles: ['View Companies'],
      linkActiveExact: false
    }]
  constructor(private translationService: TranslationService) {
    translationService.setLanguage('en');
  }
  ngOnInit(): void {
  }

}
