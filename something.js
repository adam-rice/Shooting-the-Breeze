return (
  <div className="Application">
    {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
    {/* <ul>
      { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
    </ul> */}
    <div className="MessageInput">
      <input
        placeholder="Message…"

        // [] Jhun Question:
        //   ⬇️ Why does this code prevent text from being entered into the field 😒 ..?
        value={this.state.draftMessage}

        onChange={(e) => this.setState({ draftMessage: e.target.value })}
      />
      <p className="charCount">{this.state.draftMessage.length}</p> <button onClick={() => this.addNewMessage()}>Submit</button>
      <ActionBtns id="ClearBtn" text="Clear" disabled={!this.state.newMessage} handleClick= { () => this.emptyInputField() }
      />
    </div>
  </div>
)
