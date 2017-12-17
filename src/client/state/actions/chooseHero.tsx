import * as constants from '../constants';

interface ChooseHeroName {
    type: constants.CHOOSE_HERO_NAME;
    payload: string;
}

export type ChooseHeroNameAction = ChooseHeroName;

export function chooseHeroName(payload: string): ChooseHeroName {
    return {
      type: constants.CHOOSE_HERO_NAME,
      payload,
    };
}
