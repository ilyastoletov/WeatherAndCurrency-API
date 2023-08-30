import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from './crypto/crypto.module';
import { GeocoderModule } from './geocoder/geocoder.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [GeocoderModule, WeatherModule, CryptoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
