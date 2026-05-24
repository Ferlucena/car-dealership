import { Injectable, NotFoundException } from '@nestjs/common';
import {Car} from './interfaces/car.interface';
//importar la libreria uuid para generar identificadores únicos para los coches
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarsService {
    private cars: Car[] = [
            {
                id: uuidv4(),
                make: 'Toyota',
                model: 'Corolla',
                year: 2020
            },
            {
                id: uuidv4(),
                make: 'Honda',
                model: 'Civic',
                year: 2019
            },
            {
                id: uuidv4(),
                make: 'Ford',
                model: 'Focus',
                year: 2018
            }
        ];

        findAll() {
            return this.cars;
        }

        findOneById(id: string) {            
            const car = this.cars.find(car => car.id === id);
            
            if(!car) throw new NotFoundException(`Car with id ${id} not found`);
                        
            return car;
        }
}
