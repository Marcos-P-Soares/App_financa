export class Orcamento{
    private descricao: string;
    private valor: number;
    private data: Date;
    
    constructor(descricao: string, valor: number, data: Date){
        this.descricao = descricao;
        this.valor = valor;
        this.data = data;
    }
}