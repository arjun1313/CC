import { QuestDetail } from './../quest-detail';
import { ChallengeService } from './../challenge.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-challenge',
  templateUrl: './update-challenge.component.html',
  styleUrls: ['./update-challenge.component.css']
})
export class UpdateChallengeComponent implements OnInit {

  constructor(private challengeService: ChallengeService, private route: ActivatedRoute) { }

  quest: QuestDetail;
  questId: number;
  flag = 2;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 10);
      this.questId = id;
    } );
    this.challengeService.getChallengeById(this.questId.toString())
      .subscribe(data => {
        this.quest = data;
        console.log(this.quest);
    });
  }

}
