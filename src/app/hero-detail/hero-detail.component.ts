import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

 
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero;
 
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
 
  ngOnInit() {
    this.getHero();
  }
  
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id'); // ? означает что может не быть свойства или метода и тогда вернется не значение а undefined это неизвестность , далее я в иф обернул , так как если ты передашь туда undefined  у тебя ошибка ббудет
	  
    if(id){
	    this.heroService.getHero(+id).subscribe(hero => {
        if(this.hero && hero){
          this.hero = hero;
        }
      }
        );
	  }
    
  }

  goBack(): void {
    this.location.back();
  }
  
}
