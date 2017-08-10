import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from '../../service/articleService';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './detail.component.html',
})
export class DetailArticleComponent implements OnInit, OnDestroy{
  id: number;
  private sub: any;
  article: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ArticleService) {
    this.id = 0;
    this.article = {};
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (!this.id) {
        this.router.navigate(['/home']);
      }else {
        this.service.getDetail(this.id).subscribe((data: any) => {
          console.log(data);
          this.article = data;
        }, (err: any) => {
          console.log('errors');
        });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
