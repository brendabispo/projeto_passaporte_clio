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
import { CriaAvaliacaoMuseuDto } from './criaAvaliacaoMuseuDto';
import { CriaAvaliacaoUserDto } from './criaAvaliacaoUserDto';
import { Link } from './link';

export interface CriaAvaliacaoDto { 
    id?: number;
    nota: number;
    avaliacao: string;
    museu: CriaAvaliacaoMuseuDto;
    autor?: CriaAvaliacaoUserDto;
    denunciada?: boolean;
    links?: Array<Link>;
}