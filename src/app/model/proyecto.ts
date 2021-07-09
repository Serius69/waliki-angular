// tiene que ser igual al dto del backend
export interface Proyecto {
  proyectoId: number;
  nombreProyecto: string;
  descripcion: string;
  montoRecaudar: string;
  estado: string;
  imageUrl: string;
}
// tiene que ser igual al dto del backend
export interface ProyectoVigente {
  proyectoId: number;
  nombreProyecto: string;
  descripcion: string;
  montoRecaudar: string;
  estado: string;
  imageUrl: string;
}
// tiene que ser igual al dto del backend
export interface ProyectoEnProceso {
  proyectoId: number;
  nombreProyecto: string;
  descripcion: string;
  montoRecaudar: string;
  estado: string;
  imageUrl: string;
}
// tiene que ser igual al dto del backend
export interface ProyectoFinalizado {
  proyectoId: number;
  nombreProyecto: string;
  montoFinalRecaudado: number;
  fechaInicio: string;
  fechaFin: string;
}
