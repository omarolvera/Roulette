export interface Card {
  name: string;
  cardList: Array<CartType>;
}

export interface CartType {
name: string;
attribute1: number;
attribute2: number;
attribute3: number;
attribute4: number;
total: number;
}
