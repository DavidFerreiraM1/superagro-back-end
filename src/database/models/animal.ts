import { DataTypes } from "sequelize";
import { ModelGeneric } from "./model-generic";
import {AnimalCategory, AnimalStatus, IAnimal} from '../../animal/interfaces/animal';

export class Animal extends ModelGeneric implements IAnimal {
  id!: string;
  nome!: string;
  tipoAnimal!: AnimalCategory;
  localizacao!: string;
  dataNascimento!: Date;
  entradaPlantel!: Date;
  pesoCompra!: string;
  raca!: string;
  codigoRastreamento!: string;
  faseProducao!: string;
  tipoGranja!: string;
  statusAnimal!: AnimalStatus
  active!: boolean

  static initializer(sequelize: any) {
    this.init({
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoAnimal: {
        type: DataTypes.STRING,
        allowNull: false,
        values: ['poultry', 'swine']
      },
      localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      entradaPlantel: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pesoCompra: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      raca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigoRastreamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      faseProducao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoGranja: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      statusAnimal: {
        type: DataTypes.STRING,
        allowNull: false,
        values: [ 'ativo', 'inativo', 'vendido', 'descartado' ]
      }

    }, {
      tableName: 'tbl_animal',
      sequelize,
    });

    return this;
  }
}