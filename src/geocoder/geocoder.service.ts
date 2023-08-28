import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class GeocoderService {

    async getAdress(lat: number, lon: number) {
        const geocoderResponse = await axios.get(`https://geocode-maps.yandex.ru/1.x?apikey=f75f2782-6c2e-438d-bfb3-77be826cff57&geocode=${lon},${lat}&format=json`);
        const responseData = geocoderResponse.data;
        const addressString = responseData["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["metaDataProperty"]["GeocoderMetaData"]["text"];
        return {adress: addressString};
    }

}