import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function addEntry(emojiTerm) {
    return (
            <Entry
            id =    {emojiTerm.id}
            key =   {emojiTerm.id}
            emoji =  {emojiTerm.emoji}
            emojiName =   {emojiTerm.name}
            emojiDetail =   {emojiTerm.meaning}
            />
    );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(addEntry)}

      </dl>
    </div>
  );
}

export default App;
