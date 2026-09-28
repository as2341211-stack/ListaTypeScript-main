/**19. Repetição Encapsulamento Arrays
Monitoramento de Sensores Industriais
Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
perigo.*/

export function quest19P(): void {

    class Sensor {
        private _codigo: number
        private _leitura: number

        constructor(codigo: number, leitura: number) {
            this._codigo = codigo
            this._leitura = leitura
        }

        public get codigo(): number {
            return this._codigo
        }

        public get leitura(): number {
            return this._leitura
        }
    }

    class SensorTemperatura extends Sensor {

        public exibirLeitura(): string {
            if (this.leitura > 40) {
                return `Sensor ${this.codigo}: ${this.leitura}°C - ALERTA DE PERIGO`
            }

            return `Sensor ${this.codigo}: ${this.leitura}°C`
        }

        public temAlerta(): boolean {
            return this.leitura > 40
        }
    }

    class SensorPressao extends Sensor {

        public exibirLeitura(): string {
            if (this.leitura > 5) {
                return `Sensor ${this.codigo}: ${this.leitura} atm - ALERTA DE PERIGO`
            }

            return `Sensor ${this.codigo}: ${this.leitura} atm`
        }

        public temAlerta(): boolean {
            return this.leitura > 5
        }
    }

    let sensores: Sensor[] = []

    let opcao = ""

    while (opcao != "0"){

        opcao = String(prompt(" 1 - Sensor de Temperatura | 2 - Sensor de Pressão | 0 - Encerrar"))

        if (opcao == "1") {

            let codigo = Number(prompt("Código do sensor:"))
            let leitura = Number(prompt("Temperatura em °C:"))

            let sensor = new SensorTemperatura(codigo, leitura)
            sensores.push(sensor)

            window.alert(sensor.exibirLeitura())

        }
        else if (opcao == "2"){

            let codigo = Number(prompt("Código do sensor:"))
            let leitura = Number(prompt("Pressão em atm:"))

            let sensor = new SensorPressao(codigo, leitura)
            sensores.push(sensor)

            window.alert(sensor.exibirLeitura())
        }
    }

    let resultado

    for(let sensor of sensores){

        if(sensor instanceof SensorTemperatura){

            if(sensor.temAlerta()){
                resultado = resultado + sensor.exibirLeitura() + "\n"
            }

        }
        
        else if(sensor instanceof SensorPressao){

            if(sensor.temAlerta()){
                resultado = resultado + sensor.exibirLeitura() + "\n"
            }
        }
    }

    window.alert(resultado)
}
