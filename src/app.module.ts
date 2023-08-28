import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeocoderModule } from './geocoder/geocoder.module';

@Module({
  imports: [GeocoderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
