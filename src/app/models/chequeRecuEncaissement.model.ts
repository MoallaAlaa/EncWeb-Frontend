import { Cheque } from "./cheque.model";

export interface ChequesRecuParEncaissement extends Cheque{

    dateReceptionEncaissement: Date;

}