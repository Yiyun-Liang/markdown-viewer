var React = require('react');
var RawInput = require('RawInput');

var Container = React.createClass({
  getInitialState: function(){
    return {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
  },
  updateText: function(newText){
    this.setState({
      text: newText
    })
  },
  rawMarkup: function(str){
    var rawMarkup = marked(str, {sanitize: true});
    return {
      __html: rawMarkup
    };
  },
  render: function(){
    var text = this.state.text;
    return (
      <div className="row">
        <div className="col-md-6">
          <RawInput value={text} updateText={this.updateText}/>
        </div>
        <div className="col-md-6">
          <span dangerouslySetInnerHTML={this.rawMarkup(text)} />
        </div>
      </div>
    );
  }
});

module.exports = Container;
