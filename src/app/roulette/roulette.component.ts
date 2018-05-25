import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Card } from '../models/card/card.model';
import { CardDataService } from '../shared/data.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {
  @ViewChild('mycanvas') canvas: ElementRef;
   startAngle = 0;
   arc = Math.PI / (this.cardService.cardNames.length / 2);
   spinTimeout = null;
   spinArcStart = 10;
   spinTime = 5;
   spinTimeTotal = 5;
   ctx;
   spinAngleStart;

  constructor(private cardService: CardDataService) { }

  ngOnInit() {

    this.drawRouletteWheel();
  }

// var options = [
//   "Compras",
//   "Regalo",
//   "Trabajo",
//   "Negocio Grande",
//   "Negocio Pequeño",
//   "Caridad",
//   "Mercado"
//               ];





 byte2Hex(n) {
  const nybHexString = '0123456789ABCDEF';
  // tslint:disable-next-line:no-bitwise
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}

 RGB2Color(r, g, b) {
  return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
}

 getColor(item, maxitem) {
  const phase = 0;
  const center = 128;
  const width = 127;
  const frequency = Math.PI * 2 / maxitem;

  const red   = Math.sin(frequency * item + 2 + phase) * width + center;
  const green = Math.sin(frequency * item + 0 + phase) * width + center;
  const blue  = Math.sin(frequency * item + 4 + phase) * width + center;

  return this.RGB2Color(red, green, blue);
}

 drawRouletteWheel() {
 // const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (this.canvas.nativeElement.getContext) {
    const outsideRadius = 130;
    const textRadius = 100;
    const insideRadius = 0;

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.clearRect(0, 0, 500, 500);

    this.ctx.strokeStyle = '#3f3f3f';
    this.ctx.lineWidth = 2;

    this.ctx.font = 'bold 12px Helvetica, Arial';

    for ( let i = 0; i < this.cardService.cardNames.length; i++) {
      const angle = this.startAngle + i * this.arc;
      //ctx.fillStyle = colors[i];
      this.ctx.fillStyle = this.getColor(i, this.cardService.cardNames);

      this.ctx.beginPath();
      this.ctx.arc(250, 250, outsideRadius, angle, angle + this.arc, false);
      this.ctx.arc(250, 250, insideRadius, angle + this.arc, angle, true);
      this.ctx.stroke();
      this.ctx.fill();

      this.ctx.save();
      this.ctx.shadowOffsetX = -1;
      this.ctx.shadowOffsetY = -1;
      this.ctx.shadowBlur    = 0;
      this.ctx.shadowColor   = 'rgb(0,0,0,0.5)';
      this.ctx.fillStyle = 'white';
      this.ctx.translate(250 + Math.cos(angle + this.arc / 2) * textRadius,
                    250 + Math.sin(angle + this.arc / 2) * textRadius);
                    this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
      const text = this.cardService.cardNames[i];
      this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
      this.ctx.restore();
    }

    //Arrow
    this.ctx.fillStyle = 'black';
    this.ctx.beginPath();
    this.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    this.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    this.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    this.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    this.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    this.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    this.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    this.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    this.ctx.fill();
  }
}

 spin() {
 this.spinAngleStart = Math.random() * 10 + 10;
  this.spinTime = 0;
 this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
  this.rotateWheel();
}

 rotateWheel() {
  this.spinTime += 35;
  if (this.spinTime >= this.spinTimeTotal) {
    this.stopRotateWheel();
    return;
  }
  const spinAngle = this.spinAngleStart - this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
  this.startAngle += (spinAngle * Math.PI / 180);
  this.drawRouletteWheel();
  // setTimeout(function() {
  //   this.rotateWheel();
  // }, 30);
  this.spinTimeout = setTimeout(this.rotateWheel(), 30);
}

 stopRotateWheel() {
  clearTimeout(this.spinTimeout);
  const degrees = this.startAngle * 180 / Math.PI + 90;
  const arcd = this.arc * 180 / Math.PI;
  const index = Math.floor((360 - degrees % 360) / arcd);
  this.ctx.save();
  this.ctx.shadowOffsetX = -1;
      this.ctx.shadowOffsetY = -1;
      this.ctx.shadowBlur    = 3;
      this.ctx.shadowColor   = 'rgb(0,0,0,0.5)';
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 30px Helvetica, Arial';
  const text = this.cardService.cardNames[index];
  this.ctx.fillText(text, 250 - this.ctx.measureText(text).width / 2, 20 + 10);
  this.ctx.restore();
}

 easeOut(t, b, c, d) {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}



}
