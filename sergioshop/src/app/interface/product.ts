export interface Product {
    title?: string; // Si pondríamos title:string sería ESTRICTA y sólo se le podría enviar string
    desc?: string;
    price?: number;
    picture?: string;
}
