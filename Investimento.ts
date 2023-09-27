export class Investimento {
    private valor: number;
    private data: Date;
    private descricao: string;

    constructor(valor: number, data: Date, descricao: string) {
        this.valor = valor;
        this.data = data;
        this.descricao = descricao;
    }
}