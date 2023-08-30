import { Injectable } from "@nestjs/common";
import axios from "axios";
import { Coin, CryptoModel } from "./dto/crypto_model";

@Injectable()
export class CryptoService {
    async getCrypto(currency: string) {
        const cryptoResponse = await axios.get<CryptoModel[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`);
        const responseData = cryptoResponse.data;
        const responseCoinsList: Coin[] = [];
        for (var i = 0; i < responseData.length; i++) {
            responseCoinsList.push({
                name: responseData[i].name + ` (${responseData[i].symbol.toUpperCase()})`,
                course: responseData[i].current_price,
                iconLink: responseData[i].image
            })
        }
        return responseCoinsList;
    }
}