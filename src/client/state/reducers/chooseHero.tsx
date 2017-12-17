import { ChooseHeroNameAction } from '../actions';
import { CHOOSE_HERO_NAME } from '../constants';

export function heroName(state: string = '', action: ChooseHeroNameAction): string {
  switch (action.type) {
    case CHOOSE_HERO_NAME:
      return action.payload;
    default: {
      return state;
    }
  }
}