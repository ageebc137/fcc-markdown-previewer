class Previewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input:  '# Welcome to my React Markdown Previewer! \n \n ## This is a sub-heading... \n ### And here\'s some other cool stuff: \n\n Heres some code, \u0060 <div></div> \u0060, between 2 backticks. \n\n \u0060\u0060\u0060  \n // this is multi-line code:\n \n function anotherExample(firstLine, lastLine) { \n\t if (firstLine == \'\u0060\u0060\u0060\' && lastLine == \'\u0060\u0060\u0060\') { \n\t\t return multiLineCode; \n\t  } \n  } \n \u0060\u0060\u0060 \n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr...wait for it...**_both_!-**\nAnd feel free to go crazy ~~crossing stuff out~~. \n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes! \n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header? \n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this. \n \n\n1. And there are numberered lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)'
  };
     this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    
    render() {
      let markedValue = marked(this.state.input);
      return (
        <div id="block">
        <div id="editor-section">
          <div id="editor-bar">
    <label id="editor-label" for="editor"><h4>{"Editor"}</h4></label>
  
    </div>
          <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{__html:markedValue}} target="_blank"></div>
       </div>
      );
    }
  };
  
  ReactDOM.render(
   <Previewer />,
    document.getElementById("app")
  );
  