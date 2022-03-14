import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
city:string="Basel";
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    /* Wetter App by Sener */
    let document = this.document;
    if (document != null) {
      let weather = {
        apiKey: "f2982a20170b92aedf610d4a7b347816",
        fetchweather: function (city: any) {
          fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&lang=de&appid="
            + this.apiKey
          )
            .then(response => response.json())
            .then(data => this.displayWeather(data, document));
        },
        displayWeather: function (data: any, document: any) {
          const {name} = data;
          const {icon, description} = data.weather[0];
          const {temp} = data.main;
          console.log(name, icon, description, temp);
          document.querySelector(".city").innerHTML = name;

          document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
          document.querySelector(".description").innerHTML = description;
          document.querySelector(".temp").innerHTML = +temp + "°C";

          /*   document.getElementsByClassName("article3").backgroundImage="url('https://source.unsplash.com/1600x900/?landscape')!important" */
        },
        search: function (document: any) {
          this.fetchweather(document.querySelector(".search-bar").value);
        }
      };


  let button1=document.querySelector(".button1");

  if(button1!=null){
    button1.addEventListener("click",function (){
      weather.search(document);
    });
  }
let searchBar= document.querySelector(".search-bar");
  if (searchBar!=null){
    searchBar.addEventListener("keyup",function (event:any){
      if(event.key=="Enter") {
        weather.search(document);
      }
    });
  }


      weather.fetchweather("Basel");
    }


  }

}
