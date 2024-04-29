import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Array<ScullyRoute> = [];

  constructor(private scullyService: ScullyRoutesService) { }

  ngOnInit(): void {
    this.scullyService.available$.subscribe(posts => {
      this.posts = posts.filter(post => post.title);
    });
  }

}