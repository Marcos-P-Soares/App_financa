import { Despesa } from "./Despesa";
import { Receita } from "./Receita";

export class Conta {
    private banco: string;
    private descricao: string;
    private receitas: Receita[] = [];
    private despesas: Despesa[] = [];

    constructor(banco: string, descricao: string) {
        this.banco = banco;
        this.descricao = descricao;
    }
}