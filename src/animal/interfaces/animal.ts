export enum AnimalCategory {
  poultry = 'poutry',
  swine = 'swine'
}

export enum AnimalStatus {
  ativo = 'ativo',
  inativo = 'inativo',
  vendido = 'vendido',
  descartado = 'descartado'
}

export interface IAnimal {
  id?: string;
  tipoAnimal: string;
  nome: string;
  localizacao: string;
  dataNascimento: Date;
  entradaPlantel: Date;
  pesoCompra: string;
  raca: string;
  codigoRastreamento: string;
  faseProducao: string;
  tipoGranja: string;
  statusAnimal: AnimalStatus;
  active?: boolean;
}