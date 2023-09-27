import { Despesa } from "./Despesa";
import { Receita } from "./Receita";

export class Conta {
    private banco: string;
    private descricao: string;
    private receitas: Receita[] = [];
    private despesas: Despesa[] = [];

    constructor(banco: string, descricao: string, receitas: Receita[]=[], despesas: Despesa[] = []) {
        this.banco = banco;
        this.descricao = descricao;
        this.receitas = receitas;
        this.despesas = despesas;
    }
}