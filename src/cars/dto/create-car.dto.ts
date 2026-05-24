import { IsNumber, IsString } from "class-validator";




export class CreateCarDto {
    // el operador ! se llama "definite assignment assertion" y se utiliza 
    // para indicar al compilador de TypeScript que una propiedad será asignada 
    // en algún momento, incluso si no se le asigna un valor en el constructor 
    // o en la declaración de la propiedad.

    //este decorador se llama "decorador de validación" 
    // y se utiliza para validar que la propiedad make sea una cadena de texto. 
    // Si el valor no es una cadena, se lanzará un error con el mensaje especificado.
    @IsString({ message: 'make must be a string' }) 
    readonly make!: string;
    
    @IsString({ message: 'model must be a string' })
    readonly model!: string;
    
    @IsString({ message: 'year must be a string data are sending as query parameter' })
    readonly year!: string;
}