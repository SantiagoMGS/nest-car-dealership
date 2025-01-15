import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Fiesta',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    if (typeof id !== 'number') {
      return 'Invalid id';
    }
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      return 'Car not found';
    }
    return car;
  }
}
