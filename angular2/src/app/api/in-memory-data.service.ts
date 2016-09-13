import { Person } from '../person/person-model';

export class InMemoryDataService {
    createDb() {
        let persons = [
            new Person("Joris", "Brauns", "info@owic.be", 32468198772, "Belgium"),
            new Person("Tim", "Sommer", "tim.sommer@outlook.be", 32468982277, "Belgium"),
            new Person("Raphael", "Köllner", "Raphael.kollner@gmail.com", 332423423423, "Germany"),
            new Person("Frederik", "Prijck", "frederik.prijck@codacio.us", 33473339733, "Belgium"),
            new Person("Albert", "Brauns", "Raphael.kollner@gmail.com", 332423423423, "Germany")
        ];

        return { persons };
    }
}