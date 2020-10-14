import { Component } from '@angular/core';
import { Article } from './article/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Starting to add article with values : { ${title.value} , ${link.value} }`)
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    console.log(`Added article : ${title.value} and link : ${link.value}`)
    return false;
  }

  constructor(){
    this.articles = [
      new Article('Africatek','http://angular.io',5),
      new Article('github','http://github.com',3),
      new Article('gitlab','http://gitlab.io',1)
    ];
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
