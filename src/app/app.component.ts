import {Component, OnInit} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dashboard_Angular';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";


  ngOnInit(): void {

    let map: google.maps.Map;

    function initMap(): void {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }

  }
  //pdfSrc = "/app/bilder/signalverarbeitung.pdf";



}
