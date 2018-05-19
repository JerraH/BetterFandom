import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'

class WriteBlogEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick(event) {
    event.preventDefault();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }
  _onItalicClick(event) {
    event.preventDefault();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }
  _onUnderlineClick(event) {
    event.preventDefault();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
  }

  onSubmit(event) {

  }


  render() {
    return (
      <div className="writeEntry">
        <form className="postForm">
        <button className="btn style" onClick={this._onBoldClick.bind(this)}><strong>B</strong></button>
        <button className="btn style" onClick={this._onItalicClick.bind(this)}><em>I</em></button>
          <Editor editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} />

          <div className="buttonholder">
            <button className="btn submit">Submit</button>
            <button className="btn save">Save as draft</button>
            <button className="btn cancel">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {

}


export default WriteBlogEntry;
