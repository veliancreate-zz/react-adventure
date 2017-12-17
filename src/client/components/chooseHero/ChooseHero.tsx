import * as React from 'react';

export default class ChooseHero extends React.Component {
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
    console.log(this.state);
    console.log(this.props)
    // (this.props as any).chooseHeroName((this.state as any).heroName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose Hero:
          <input value={(this.state as any).heroName} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}