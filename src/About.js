import React from "react";

function About() {
  return (
    <div>
      <div className="homeWrapper">
        <h2>Suggestions</h2>
        <p>
          si vous avez une idée, ou des ressources à partager pour améliorer ce
          site{" "}
          <span role="img" alt="emoji" aria-label="down">
            👇
          </span>
        </p>
        <a id="underline" href="https://google.com">
          {" "}
          Envoyer ma Suggestion
        </a>
      </div>
    </div>
  );
}
export default About;
