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
import { AvaliacaoDto } from './avaliacaoDto';
import { Link } from './link';

export interface CollectionModelAvaliacaoDto { 
    links?: Array<Link>;
    content?: Array<AvaliacaoDto>;
}