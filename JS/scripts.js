//OBJETO CORTINAS
class Cortina{
    constructor(tipoCortina=" ", tipoTela=" ", color=" ", mecanismo=" ", ancho=1, alto=1){
        this.tipoCortina=tipoCortina
        this.tipoTela=tipoTela
        this.color=color
        this.mecanismo=mecanismo
        this.ancho=ancho
        this.alto=alto
        this.presupuesto=((this.ancho*this.alto)/10000)*costoMetro
    }
    mostrarPrecio(){
        console.log(`El precio por la Cortina ${this.tipoCortina} es de $${this.presupuesto}`)
    }
}

//VARIABLES
let tipoCortina, tipoTela, color, mecanismo, ancho, alto, continua, presupuesto
const costoMetro = 17500

//FUNCION PARA CALCULAR SUPERFICIE DE CORTINA
const Dimensiones = (ancho, alto) => ((ancho*alto)/10000) //pasa cm2 a m2 (ya que el costo se calcula con un valor por m2)

//ARRAY
const arrayCortinas = [];

//SOLICITUD DE DATOS
do{
    //VALIDACION TIPO CORTINA
    do {
        tipoCortina=prompt("Ingrese el tipo de cortina que desea: Roller / Bandas verticales / Duo").toLocaleLowerCase()
    }while(tipoCortina.length==0 || (tipoCortina != "roller" && tipoCortina != "bandas verticales" && tipoCortina !="duo"))    
    //VALIDACION TIPO TELA
    do{
        tipoTela=prompt("Ingrese el tipo de tela que desea: Screen, Decorativa, Black Out").toLocaleLowerCase()
    }while(tipoTela.length==0 || (tipoTela != "screen" && tipoTela != "decorativa" && tipoTela !="black out"))
    //VALIDACION COLOR
    do{
        color=prompt("ingrese color deseado: Blanco / Negro / Gris / Beige").toLocaleLowerCase()
    }while(color.length==0 || (color != "blanco" && color != "negro" && color !="gris" && color != "beige"))
    //VALIDACION MECANISMO
    do{    
        mecanismo=prompt("Ingrese tipo de mecanismo: Manual / Motorizado").toLocaleLowerCase()
    }while(mecanismo.length==0 ||(mecanismo != "manual" && mecanismo != "motorizado"))
    //VALIDACION ALTO/ANCHO
    do{
        ancho=parseInt(prompt("Ingresa el ancho de tu cortina en cm"))
        alto=parseInt(prompt("Ingresa el alto de tu cortina en cm"))
        if (ancho<50 || ancho>300 || alto<50 || alto>300){
            alert("Las medidas deben tener un mínimo de 50cm y un máximo de 300cm. Por favor ingrese nuevamemte los valores")
        }else if(isNaN(ancho) || isNaN(alto)){
            alert("Por favor ingrese un valor válido")
        }
        presupuesto = (Dimensiones(ancho, alto))*costoMetro
        console.log(presupuesto)
    }while((ancho<50 || alto<50 || ancho>300 || alto>300)||(isNaN(ancho) || isNaN(alto)))

    const cortina = new Cortina(tipoCortina, tipoTela, color, mecanismo, ancho, alto)
    arrayCortinas.push(cortina)
    console.log(arrayCortinas[length])
    continua=prompt("¿Desea cotizar otra cortina? Si/No").toLocaleLowerCase()
}while(continua != "no")

//VER PRESUPUESTO EN CONSOLA
do{
    verPresupuesto = parseInt(prompt("Podrá ver su presupuesto en la consola ingresando 1"))
    if(verPresupuesto===1){
        for(Cortina of arrayCortinas){
            Cortina.mostrarPrecio()            
        }
    }
}while(verPresupuesto !==1)
