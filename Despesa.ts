export class Despesa{
    private valor: number;
    private descricao: string;
    private categoria: string;
    private data: Date;

    constructor(valor: number, descricao: string, categoria: string, data: Date){
        this.valor = valor;
        this.descricao = descricao;
        this.categoria = categoria;
        this.data = data;
    }
}