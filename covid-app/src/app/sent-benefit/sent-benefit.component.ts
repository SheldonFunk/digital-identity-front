import { Component, OnInit } from '@angular/core';
import { SharingService } from '../services/shared.service';
import { Router } from '@angular/router';
import { title } from 'process';

export interface BlogPosts {
  title: string;
  text: string;
  image: string;
}
@Component({
  selector: 'app-sent-benefit',
  templateUrl: './sent-benefit.component.html',
  styleUrls: ['./sent-benefit.component.sass']
})
export class SentBenefitComponent implements OnInit {
  private current_user: any;
  public first_name: string;

  private post1: BlogPosts;
  private post2: BlogPosts;
  private post3: BlogPosts;


  public blog: Array<BlogPosts>;


  constructor(private sharingService: SharingService, private _route: Router) {
    this.current_user = this.sharingService.getData();
    // console.log(this.current_user);


    if (this.current_user != undefined && this.current_user != null) {
      this.first_name = this.current_user.first_name;
    } else {
      this._route.navigate(['/']);
    }

    this.post1 = {
      title: 'Latest COVID-19 Bulletin',
      text: 'Get the latest update from the government response.',
      image: '/assets/images/blog/b1.jpg',
    }

    this.post2 = {
      title: 'Know how to identify the syntoms',
      text: 'A list of most common ways to identify it.',
      image: '/assets/images/blog/b2.jpg',
    }

    this.post3 = {
      title: 'Find your closest screening location',
      text: 'An interactive map that can help you find it.',
      image: '/assets/images/blog/b3.jpg',
    }
    this.blog = [this.post1, this.post2, this.post3]
  }

  ngOnInit(): void {
  }

}
