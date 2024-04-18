import React from "react";

export default function About() {
    return (
        <section className="about">
            <div className="bio">
                <h1 className="bio--title">WHAT ARE SSSYMBOLSSS?</h1>
                <p className="bio--description">sssymbolsss is an Open Edition of building blocks that represent a coded language. sssymbolsss are both a visual treats and a coded method of communication.<br /><br />
                Each sssymbolsss represents a letter - can you decode the puzzle and figure out which is which?</p>
                <button className="btn">BUY</button>
            </div>
            <div className="about--img">
                <img src="./src/assets/img/nft1.png" alt="nft image" className="nft--img" />
            </div>
        </section>
    )
}