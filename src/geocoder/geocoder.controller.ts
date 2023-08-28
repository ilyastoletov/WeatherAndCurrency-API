import { Controller, Get, Query } from "@nestjs/common";
import { GeocoderService } from "./geocoder.service";

@Controller('geocode')
export class GeocoderController {
    constructor (private readonly geocoderService: GeocoderService) {}

    @Get('getAddress')
    async getAdress(@Query('lat') lat: number, @Query('lon') lon: number) {
       return await this.geocoderService.getAdress(lat, lon);
    }

}