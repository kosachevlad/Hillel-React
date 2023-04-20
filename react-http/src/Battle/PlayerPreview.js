import React from "react";

const PlayerPreview = ({avatar,userName, children}) => {
    return (
      <section>
        <section className="column">
            <img className="avatar" src={avatar} alt="Avatar"/>
            <h2 className="username">{userName}</h2>
        </section>
        {children}
      </section>
    )
}

export default PlayerPreview;

