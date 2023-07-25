export class taskmodel {
  id?: string;
  description: string;
  done: boolean;
  fecha: string;

  constructor(description: string, done: boolean, fecha: string, id?: string) {
    this.description = description;
    this.done = done;
    this.fecha = fecha;
    this.id = id;
  }
}
