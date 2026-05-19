import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
// la inyeccion de dependencias es un patrón de diseño que permite a una clase recibir sus dependencias de fuentes externas 
// en lugar de crearlas por sí misma. 
// En este caso, el servicio CarsService se inyecta en el controlador CarsController a través del constructor, 
// lo que permite al controlador acceder a los métodos del servicio para manejar las solicitudes HTTP relacionadas con los coches.

    constructor(
        private readonly carsService: CarsService
    ) {}

        @Get() //@ se llama decorator, es una función que se ejecuta en tiempo de compilación y se utiliza para agregar metadatos a las clases, métodos o propiedades. En este caso, @Get() indica que el método getAllCars() manejará las solicitudes HTTP GET a la ruta /cars.
    getAllCars() {
        return this.carsService.findAll();
    }

    // @Param() es un decorador que se utiliza para extraer parámetros de la ruta. 
    // En este caso, @Param('id') indica que el valor del parámetro id en la ruta /cars/:id se pasará como argumento al método getCarById(). 
    // El tipo de dato del parámetro id se especifica como number gracias al uso de ParseIntPipe, que convierte automáticamente el valor de la ruta a un número.
    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) { 
        console.log(id);
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar() {
        return {
            'message': 'Car created',
            'method': 'POST'
        };
    }
    
    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return body;
    }
    
    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            'message': `Car with id ${id} deleted`,
            'method': 'DELETE'
        };
    }

}
