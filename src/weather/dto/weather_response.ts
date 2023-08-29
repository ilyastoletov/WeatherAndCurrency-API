export type WeatherData = {
    now: number;
    now_dt: string;
    info: {
        url: string;
        lat: number;
        lon: number;
    };
    fact: {
        obs_time: number;
        temp: number;
        feels_like: number;
        icon: string;
        condition: string;
        wind_speed: number;
        wind_dir: string;
        pressure_mm: number;
        pressure_pa: number;
        humidity: number;
        daytime: string;
        polar: boolean;
        season: string;
        wind_gust: number;
    };
    forecast: {
        date: string;
        date_ts: number;
        week: number;
        sunrise: string;
        sunset: string;
        moon_code: number;
        moon_text: string;
        parts: Array<WeatherPart>;
    };
};

export type WeatherPart = {
    part_name: string;
    temp_min: number;
    temp_avg: number;
    temp_max: number;
    wind_speed: number;
    wind_gust: number;
    wind_dir: string;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    prec_mm: number;
    prec_prob: number;
    prec_period: number;
    icon: string;
    condition: string;
    feels_like: number;
    daytime: string;
    polar: boolean;
}

export type WeatherPartly = {
    temp: number,
    feels_like: number,
    part_of_day: string,
    icon_link: string
}

export type WeatherResponse = {
    fact: {
        temp: number,
        feels_like: number,
        condition: string,
        icon_link: string 
    },
    parts: Array<WeatherPartly>
}