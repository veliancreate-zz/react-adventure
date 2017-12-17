import * as React from 'react';
import { ChooseHeroNameAction } from '../../state/actions';

interface Props {
  heroName: string;
  chooseHeroName(name: string): ChooseHeroNameAction;
}

interface State {
  heroName: string;
}

export default class ChooseHero extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      heroName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({heroName: event.target.value});
  }

  handleSubmit(event: any) {
    this.props.chooseHeroName(this.state.heroName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose Hero:
          <input value={this.state.heroName} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}