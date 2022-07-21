import { Bordereaux } from "./bordereaux.model";
import { Devise } from "./devise.model";

export interface Cheque {
    id: any;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    numCheque: any;
    montant:any;
    devise:Devise;
    imgCheque?:any;
    statutEncaisssement?:string;
    bordereaux:Bordereaux;

}
