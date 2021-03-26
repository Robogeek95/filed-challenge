import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const FACEBOOK_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="12.001" height="24" viewBox="0 0 12.001 24"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M16,3.985h2.191V.169A28.292,28.292,0,0,0,15,0C11.837,0,9.673,1.987,9.673,5.639V9H6.187v4.266H9.673V24h4.274V13.267h3.345L17.823,9H13.946V6.062c0-1.233.333-2.077,2.051-2.077Z" transform="translate(-6.187)"/></svg>
`;

const INSTAGRAM_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24.234" height="24.234" viewBox="0 0 24.234 24.234"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M16.661,0H7.573A7.574,7.574,0,0,0,0,7.573v9.088a7.574,7.574,0,0,0,7.573,7.573h9.088a7.574,7.574,0,0,0,7.573-7.573V7.573A7.574,7.574,0,0,0,16.661,0Zm5.3,16.661a5.307,5.307,0,0,1-5.3,5.3H7.573a5.307,5.307,0,0,1-5.3-5.3V7.573a5.307,5.307,0,0,1,5.3-5.3h9.088a5.307,5.307,0,0,1,5.3,5.3Z"/><path class="a" d="M134.058,128a6.058,6.058,0,1,0,6.058,6.058A6.059,6.059,0,0,0,134.058,128Zm0,9.845a3.786,3.786,0,1,1,3.786-3.786A3.792,3.792,0,0,1,134.058,137.845Z" transform="translate(-121.942 -121.942)"/><circle class="a" cx="0.807" cy="0.807" r="0.807" transform="translate(17.822 4.797)"/></svg>
`;

const TWITTER_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24.188" height="20.614" viewBox="0 0 24.188 20.614"><defs><style>.a{fill:#fff;}</style></defs><g transform="translate(0 -48)"><g transform="translate(0 48)"><path class="a" d="M24.188,50.44a9.964,9.964,0,0,1-2.857.821,5.136,5.136,0,0,0,2.181-2.875,9.634,9.634,0,0,1-3.144,1.259A4.864,4.864,0,0,0,16.745,48a5.083,5.083,0,0,0-4.955,5.2,5.608,5.608,0,0,0,.115,1.186A13.831,13.831,0,0,1,1.684,48.948a5.434,5.434,0,0,0-.679,2.629,5.28,5.28,0,0,0,2.2,4.323,4.723,4.723,0,0,1-2.24-.641v.057A5.17,5.17,0,0,0,4.94,60.427a4.731,4.731,0,0,1-1.3.171A4.186,4.186,0,0,1,2.7,60.51a5.043,5.043,0,0,0,4.633,3.623,9.672,9.672,0,0,1-6.148,2.218A8.859,8.859,0,0,1,0,66.28a13.491,13.491,0,0,0,7.607,2.334c9.125,0,14.113-7.928,14.113-14.8,0-.23-.008-.452-.018-.672A10.174,10.174,0,0,0,24.188,50.44Z" transform="translate(0 -48)"/></g></g></svg>
`;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'facebook-icon',
      sanitizer.bypassSecurityTrustHtml(FACEBOOK_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'instagram-icon',
      sanitizer.bypassSecurityTrustHtml(INSTAGRAM_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'twitter-icon',
      sanitizer.bypassSecurityTrustHtml(TWITTER_ICON)
    );
  }

  ngOnInit(): void {}
}
