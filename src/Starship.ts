export interface Starship {
    name: string;
    class: string;
    maximumSpeed: string;
    costInCredits: number;
    passengerCapacity: number;

    /** The total number of films featuring the Starship */
    filmAppearances: number
}