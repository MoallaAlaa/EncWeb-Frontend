import { ChequesRecuParEncaissement } from "./chequeRecuEncaissement.model";
import { Banque } from "./banque.model";
import { Client } from "./client.model";

export interface ChequeTraiteeEncaissement extends ChequesRecuParEncaissement{

    Banque : Banque;
    dateReceptionBanque: Date;
    Statut:String;
    dateSortie: Date;
    dateOuverture: Date;
    client: Client;

}