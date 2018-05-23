import { Component, OnInit } from '@angular/core';
import { Card } from '../models/profile.model';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  cards: Card[] = [
    {
      name: 'Sarah Sellers',
      attribute1: 1792.38,
      attribute2: 1547.71,
      attribute3: 2028.30,
      attribute4: 2137.40,
      total: 3565.70
    },
    {
      name: 'Leta Whitfield',
      attribute1: 3944.89,
      attribute2: 1773.68,
      attribute3: 2876.68,
      attribute4: 3053.08,
      total: 3224.51
    },
    {
      name: 'Vickie Barker',
      attribute1: 1332.98,
      attribute2: 3083.71,
      attribute3: 1254.68,
      attribute4: 2420.87,
      total: 3993.34
    },
    {
      name: 'Holder Oliver',
      attribute1: 1324.44,
      attribute2: 1956.71,
      attribute3: 3157.37,
      attribute4: 2537.77,
      total: 1796.35
    },
    {
      name: 'Butler Graves',
      attribute1: 2931.54,
      attribute2: 2709.14,
      attribute3: 3266.68,
      attribute4: 1162.11,
      total: 2754.79
    },
    {
      name: 'Liliana Hays',
      attribute1: 3128.11,
      attribute2: 2050.03,
      attribute3: 3730.94,
      attribute4: 1332.54,
      total: 3994.28
    },
    {
      name: 'Sparks Rivers',
      attribute1: 2091.94,
      attribute2: 1260.14,
      attribute3: 2647.03,
      attribute4: 3756.05,
      total: 2599.43
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
