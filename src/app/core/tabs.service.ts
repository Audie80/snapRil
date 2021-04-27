import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private hideTabBarPages: string[] = ['connection'];

  constructor(private router: Router, private platform: Platform) {
    this.platform.ready().then(() => {
      this.navEvents();
    });
  }

  navEvents() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.showHideTabs(e);
      });
  }

  public hideTabs() {
    const tabBar = document.getElementById('myTabBar');
    if (tabBar !== null && tabBar.style.display !== 'none') {
      tabBar.style.display = 'none';
    }
  }

  public showTabs() {
    const tabBar = document.getElementById('myTabBar');
    if (tabBar !== null && tabBar.style.display !== 'flex') {
      tabBar.style.display = 'flex';
    }
  }

  private showHideTabs(e: NavigationEnd) {
    const urlArray = e.url.split('/');
    // Result: urlArray: ["", "tabs", "groups", "connection?type=group"]
    // Grab the last page url.
    const pageUrl = urlArray[urlArray.length - 1];
    // Result: connection?type=group
    // Remove the parameters from the URL.
    const page = pageUrl.split('?')[0];
    // Result: connection
    // Check if we should hide or show tabs.
    const shouldHide = this.hideTabBarPages.indexOf(page) > -1;
    // Result: true
    if (shouldHide) {
      this.hideTabs();
    } else {
      this.showTabs();
    }
  }
}
