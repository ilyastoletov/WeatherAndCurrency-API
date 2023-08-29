import { Injectable } from "@nestjs/common";
import axios from "axios";
import { WeatherData, WeatherPart, WeatherResponse, WeatherPartly } from "./dto/weather_response";

@Injectable()
export class WeatherService {

    async getWeather(lat: number, lon: number) {
        const requestHeader = {'X-Yandex-API-key': '8e45e1a6-86fb-44ce-8035-480574a446df'}
        const weatherResponse = await axios.get<WeatherData>(`https://api.weather.yandex.ru/v2/informers?lat=${lat}&lon=${lon}`, {headers: requestHeader})
        const iconLinkTemplate = "https://yastatic.net/weather/i/icons/funky/dark/"
        const partsList: WeatherPartly[] = [];
        const responsePartsList: WeatherPart[] = weatherResponse.data.forecast.parts
        console.log(typeof responsePartsList)
        for (var i = 0; i < responsePartsList.length; i++) {
            partsList.push({
                temp: responsePartsList[i].temp_avg,
                feels_like: responsePartsList[i].feels_like,
                part_of_day: responsePartsList[i].part_name,
                icon_link: iconLinkTemplate + responsePartsList[i].icon + ".svg"
            })
        }
        const response: WeatherResponse = {
            fact: {
                temp: weatherResponse.data.fact.temp,
                feels_like: weatherResponse.data.fact.feels_like,
                condition: weatherResponse.data.fact.condition,
                icon_link: iconLinkTemplate + weatherResponse.data.fact.icon + ".svg"
            },
            parts: partsList
        }
        return response
    }

}