


import { Component, OnInit } from '@angular/core';
import { IItems } from '../Models/Items';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  items: IItems[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { id: 100, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo1', descrizioneItem: 'Questo elem si chiama Pippo1 agf adsga sg asgsa gas esgwea gawgaeswg ea wgawg wag aw gwa ga gwer', rarita: 'grigio' },
      { id: 110, immagine: 'https://seeklogo.com/images/A/as-roma-logo-61DF23CC37-seeklogo.com.png', nomeItem: 'Pippo2', descrizioneItem: 'Questo elem si chiama Pippo2', rarita: 'verde' },
      { id: 120, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo3', descrizioneItem: 'Questo elem si chiama Pippo3', rarita: 'verde' },
      { id: 130, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo4', descrizioneItem: 'Questo elem si chiama Pippo4', rarita: 'blu' },
      { id: 140, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo5', descrizioneItem: 'Questo elem si chiama Pippo5', rarita: 'blu' },
      { id: 150, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo6', descrizioneItem: 'Questo elem si chiama Pippo6', rarita: 'viola' },
      { id: 160, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo7', descrizioneItem: 'Questo elem si chiama Pippo7', rarita: 'viola' },
      { id: 170, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo8', descrizioneItem: 'Questo elem si chiama Pippo8', rarita: 'arancione' },
      { id: 180, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo9', descrizioneItem: 'Questo elem si chiama Pippo9', rarita: 'arancione' },
      { id: 190, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo10', descrizioneItem: 'Questo elem si chiama Pippo10', rarita: 'azzurro' },
      { id: 200, immagine: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png', nomeItem: 'Pippo11', descrizioneItem: 'Questo elem si chiama Pippo11', rarita: 'azzurro' },
    ]
  }

}
