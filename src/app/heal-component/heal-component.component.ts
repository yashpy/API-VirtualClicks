import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-heal-component',
  templateUrl: './heal-component.component.html',
  styleUrl: './heal-component.component.scss'
})
export class HealComponentComponent {
  @Output() showSubButtons: boolean;
  @Output() selectedButton: number;

  toggleSubButtons(buttonNumber: number) {
    this.showSubButtons = !this.showSubButtons;
    this.selectedButton = buttonNumber;
  }
}
