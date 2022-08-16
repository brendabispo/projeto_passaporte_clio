/**
 * Passaporte Clio
 * API REST que conecta pessoas a museus.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Link } from './link';

export class EnderecoDto { 
    id?: number;
    cep: string = '';
    rua: string = '';
    numero: number = 0;
    bairro: string = '';
    cidade: string = '';
    estado: string = '';
    pais: string = '';
 }