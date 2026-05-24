import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function main() {
  const app = await NestFactory.create(AppModule);
  //un pipe sirve para transformar o validar los datos de entrada en las rutas de la aplicación.
  //En este caso, se está utilizando el ValidationPipe para validar los datos de entrada en las rutas de la aplicación. 
  //El ValidationPipe se encarga de validar los datos de entrada según las reglas definidas en los DTOs 
  // (Data Transfer Objects) y eliminar cualquier propiedad que no esté definida en el DTO.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas en el DTO
  }));

  await app.listen(3000);
}
main();
