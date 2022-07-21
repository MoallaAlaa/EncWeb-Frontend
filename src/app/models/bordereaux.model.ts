import { Cheque } from "./cheque.model";

export interface Bordereaux {
    id: number;
    numBordereaux: number;
    dateBordereaux: Date;
    cheques: Cheque[];

}
