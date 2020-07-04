import { action, observable } from 'mobx';
import { getFilms } from '../../apis/star-wars.api';


export default class StartWarsStore {
    @observable films: any[] = [];

    @action buildFilms = async () => {
        const { data } = await getFilms();
        this.films = data;
    }
}

const starWars = new StartWarsStore();
export { starWars };