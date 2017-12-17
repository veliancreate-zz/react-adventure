import * as constants from '../constants';

interface ChooseHeroName {
    type: constants.CHOOSE_HERO_NAME;
    payload: string;
}

export type ChooseHeroNameAction = ChooseHeroName;

export function chooseHeroName(payload: string): ChooseHeroName {
    console.log(payload)
    return {
      type: constants.CHOOSE_HERO_NAME,
      payload,
    };
}
