import { Injectable } from '@angular/core';
import { TypeOfLetter } from '../models/profile.model';

@Injectable()
export class DataService {
 letters: TypeOfLetter[] = [
  {
    name: 'Chaney Mcfadden',
    attribute1: 3412.75,
    attribute2: 3846.74,
    attribute3: 3197.57,
    attribute4: 3663.84,
    total: 1298.54
  },
  {
    name: 'Cecilia Hoffman',
    attribute1: 2341.51,
    attribute2: 3909.48,
    attribute3: 3637.22,
    attribute4: 1340.12,
total: 1142.46
  },
  {
    name: 'Darla Rogers',
    attribute1: 2954.42,
    attribute2: 1405,
    attribute3: 1012.38,
    attribute4: 3783.44,
total: 2377.54
  },
  {
    name: 'Hood Becker',
    attribute1: 2307.48,
    attribute2: 3755.81,
    attribute3: 2982.29,
    attribute4: 3359.42,
    total: 1745.43
  },
  {
    name: 'Vincent Pitts',
    attribute1: 1284.76,
    attribute2: 1249.17,
    attribute3: 3483.05,
    attribute4: 2410.31,
    total: 2851.34
  },
  {
    name: 'Emilia Bryant',
    attribute1: 3485.68,
    attribute2: 3864.09,
    attribute3: 3485.14,
    attribute4: 3498.78,
    total: 2707.84
  },
  {
    name: 'Ophelia Moon',
    attribute1: 3188.07,
    attribute2: 1961.87,
    attribute3: 3144.04,
    attribute4: 3783.95,
    total: 3451.69
  }

];

lettersInfo: any[];
  constructor() {
this.lettersInfo = this.letters.map((item) => item.name);
  }

public getProfileData() {
  return;
}

}
