/**Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
Controle de Frequência do Refeitório do IFS
O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores. */


export function quest17P():void {

abstract class Usuario{
   private _matricula:string
    private _nome:string

    constructor(matri:string,no:string){

        this._matricula = matri
        this._nome = no

    }


    public get matri():string{
        
        return this._matricula
    
    }

    public get no():string{

        return this._nome
    }
    abstract Identificacao(): string 
    
}

class Aluno extends Usuario{
    private _curso:string

    constructor(matri:string,no:string,cur:string){
        super(matri,no)
        this._curso= cur

    }

    public get cur():string{
        
        return this._curso

    }


}

class 


}