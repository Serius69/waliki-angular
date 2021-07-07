
export interface Donacion {
  nombreDonador: string;
  image: string;
  montoRecaudar: number;
  comentario: string;
  imagenProyecto: string;
  buttonColor: string;
}


export const donaciones: Donacion[] = [
  {
    nombreDonador: 'Donador1',
    image: 'assets/images/users/1.jpg',
    montoRecaudar: 2000,
    comentario: 'Buen Proyecto',
    imagenProyecto: 'assets/images/big/img2.jpg',
    buttonColor: 'primary'
  },
  {
    nombreDonador: 'Donador1',
    image: 'assets/images/users/1.jpg',
    montoRecaudar: 2000,
    comentario: 'Buen Proyecto',
    imagenProyecto: 'assets/images/big/img2.jpg',
    buttonColor: 'warn'
  },


];
