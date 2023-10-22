import { Dispatch, SetStateAction } from "react";

export type Country = {
    id: number;
    title: string;
    code: string;
    name: string;
    image_url: string;
};

export type Team = {
    runList: number[];
    totalRun: number;
} & Country

export type Match = {
    id: string;
    ball_first: number;
    team1: Team;
    team2: Team;
};

export type CountryContextType = {
    selectedCountries: Country[];
    setSelectedCountries: Dispatch<SetStateAction<Country[]>>;
};
