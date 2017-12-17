import { connect, Dispatch } from 'react-redux';
import ChooseHero from './ChooseHero';
import { ChooseHeroNameAction, chooseHeroName } from '../../state/actions';
import { StoreState } from '../../state/storeState';

function mapStateToProps({ heroName }: StoreState) {
  return {
    heroName,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<ChooseHeroNameAction>) => ({
  chooseHeroName: (name: string) => dispatch(chooseHeroName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseHero);