import { Controller, Get, Query } from "@nestjs/common";
import { CryptoService } from "./crypto.service";

@Controller('crypto')
export class CryptoController {
    constructor(private readonly cryptoService: CryptoService) {}

    @Get('get')
    async getCrypto(@Query('vs_currency') currency: string) {
        return await this.cryptoService.getCrypto(currency);
    }
}