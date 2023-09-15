import { Hero } from './hero';

export const HEROES: Hero[] = [   // Вопрос: Hero это у насс список из ячеек, почему бы нам не возвращать его в heroservice
  { id: 11, name: 'Dr Nice' },    // а не константу HEROES ?
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];