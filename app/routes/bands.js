import Route from '@ember/routing/route';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';
import { A } from '@ember/array';



export default Route.extend({
  model() {

    let blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    let yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    let pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    let daughter = Song.create({
      title: 'Daughter',
      band: 'Pearl Jame',
      rating: 5
    });

    let ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: A([blackDog]) });
    let pearlJam = Band.create({ name: 'Pearl Jam', songs: A([yellowLedbetter, daughter]) });
    let fooFighters = Band.create({ name: 'Foo Fighters', songs: A([pretender]) });

    return A([ledZeppelin, pearlJam, fooFighters]);
  }
});
