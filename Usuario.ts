import { Investimento } from "./Investimento";
import { Orcamento } from "./Orcamento";
import { Meta } from "./Meta";

export class Usuario {
    private nome: string;
    private senha: string;
    private email: string;
    private investimentos: Investimento[] = [];
    private orcamentos: Orcamento[] = [];
    private metas: Meta[] = [];

    constructor(nome: string, email: string , senha: string, metas: Meta[] = [], orcamentos: Orcamento[] = [], investimentos: Investimento[] = []) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
        this.metas = metas;
        this.orcamentos = orcamentos;
        this.investimentos = investimentos;
    }
    
}