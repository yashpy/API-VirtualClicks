import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sub-heal-component',
  templateUrl: './sub-heal-component.component.html',
  styleUrl: './sub-heal-component.component.scss'
})
export class SubHealComponentComponent {
  @Input() public selectedButton: number;
  @Input() public showSubButtons: boolean;
  responseData: string='';

  constructor(private apiService: ApiService) {
    console.log(this.selectedButton)
    console.log(this.showSubButtons)
  }

  public callAPI(subButtonNumber: number) {
    // Assuming your API endpoint is different for each button, you can handle it accordingly
    let apiUrl: string;
    switch (this.selectedButton) {
      case 1:
        apiUrl = 'URL_FOR_BUTTON_1';
        break;
      case 2:
        apiUrl = 'URL_FOR_BUTTON_2';
        break;
      case 3:
        apiUrl = 'URL_FOR_BUTTON_3';
        break;
      default:
        apiUrl = ''; // Handle default case
        break;
    }

    // Here you call the API
    this.apiService.getData(apiUrl).subscribe((data: any) => {
      this.responseData = JSON.stringify(data); // Assuming you're receiving JSON data
    });
  }
}
