import { Injectable } from '@angular/core';
import { TypeOfLetter } from '../models/profile/profile.model';
import { Card } from '../models/card/card.model';

@Injectable()
export class DataService {
 letters: Card[] = [
  {
    name: 'Mercado',
    cardList: [
      {
        name: 'Mercado',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      }
    ]
  },
  {
    name: 'Trabajo',
    cardList: [
      {
        name: 'Pago extra',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Vacaciones', // + 6000
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      }
    ]
  },
  {
    name: 'Compras',
    cardList: [
      {
        name: 'Nuevo horno',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Mochila nueva',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Arbol navidad',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Dia de madre',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Nuevo Router', // - 109
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Dia del niño', // - 80
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Dia del padre', // - 115
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Suministros', // - 115
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      }
    ]
  },
  {
    name: 'Regalo',
    cardList: [
      {
        name: 'Loteria', // + 150 000
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Mellisos',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      }, {
        name: 'Regalo para hermana',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Bautizo',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Noche en hotel',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },   {
        name: 'Juego nuevo', // -60
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Nuevos giros', // + 30 giros
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      },
      {
        name: 'Dinero encontrado', // + 32
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      }
    ]
  },
  {
    name: 'Oportunidades',
    cardList: [
      {
        name: 'Apatamento Tipo Estudio',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      }
    ]
  },
  {
    name: 'Caridad',
    cardList: [
      {
        name: 'Donar',
        attribute1: 3412.75,
        attribute2: 3846.74,
        attribute3: 3197.57,
        attribute4: 3663.84,
        total: 1298.54
      }
    ]
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
