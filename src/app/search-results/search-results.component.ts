import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  players = [
    {
      "username": "Calvin",
      "level": 813,
      "portrait": "https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000000EF7.png",
      "games": {
        "quickplay": {
          "won": 647
        },
        "competitive": {
          "won": 59,
          "lost": 48,
          "draw": 1,
          "played": 108
        }
      },
      "playtime": {
        "quickplay": "129 hours",
        "competitive": "23 hours"
      },
      "competitive": {
        "rank": 4420,
        "rank_img": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/season-2/rank-7.png"
      },
      "levelFrame": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x025000000000096F_Border.png",
      "star": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x025000000000096F_Rank.png"
    },
    {
      "username": "Calvin",
      "level": 813,
      "portrait": "https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000000EF7.png",
      "games": {
        "quickplay": {
          "won": 647
        },
        "competitive": {
          "won": 59,
          "lost": 48,
          "draw": 1,
          "played": 108
        }
      },
      "playtime": {
        "quickplay": "129 hours",
        "competitive": "23 hours"
      },
      "competitive": {
        "rank": 4420,
        "rank_img": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/season-2/rank-7.png"
      },
      "levelFrame": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x025000000000096F_Border.png",
      "star": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x025000000000096F_Rank.png"
    },
    {
      "username": "Calvin",
      "level": 813,
      "portrait": "https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000000EF7.png",
      "games": {
        "quickplay": {
          "won": 647
        },
        "competitive": {
          "won": 59,
          "lost": 48,
          "draw": 1,
          "played": 108
        }
      },
      "playtime": {
        "quickplay": "129 hours",
        "competitive": "23 hours"
      },
      "competitive": {
        "rank": 4420,
        "rank_img": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/season-2/rank-7.png"
      },
      "levelFrame": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x025000000000096F_Border.png",
      "star": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x025000000000096F_Rank.png"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
