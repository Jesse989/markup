import React from 'react';
import marked from 'marked';
import defaultText from './defaultText';
import './Previewer.css'

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: defaultText
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      outputText: marked(defaultText)
    })
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
      outputText: marked(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <textarea className="DisplayBoxStyle" type="text" value={this.state.inputText} onChange={this.handleChange} />
        <div className="DisplayBoxStyle" dangerouslySetInnerHTML={{ __html: this.state.outputText }}></div>
      </div>
    );
  }
}

export default Previewer;
