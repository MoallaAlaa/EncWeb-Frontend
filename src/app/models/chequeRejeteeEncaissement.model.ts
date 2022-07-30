import { ChequesRecuParEncaissement } from "./chequeRecuEncaissement.model";

export interface ChequeRejeteeEncaissement extends ChequesRecuParEncaissement{

    motifRejet : string;
    dateRejetEncaissement: Date;
    dateReceptionAgence: Date;


}