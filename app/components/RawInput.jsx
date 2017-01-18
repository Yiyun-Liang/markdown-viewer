var React = require('react');

var RawInput = React.createClass({
  update: function(){
    var newText = this.refs.inputValue.getDOMNode().value;
    this.props.updateText(newText);
  },
  render: function(){
    <div>
      return (
        <textarea rows="22" type="text" ref="inputValue"
          value={this.props.value} onChange={this.update}
          className="form-control" />
      )
    </div>
  }
});

module.exports = RawInput;
