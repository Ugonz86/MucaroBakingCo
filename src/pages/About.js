import React from "react";
import "../App.css";

function About() {
  return (
    <div className="About">
      <div className="aboutContainer">
        <h3 className="title">ABOUT MÚCARO</h3>
        <h4>My Story</h4>
        <p>
          ¡Wepa! I started baking when I was no more than ten years old, and
          I've been completely in love with it ever since. The days of boxed
          cake mixes are long behind me, but the passion for baking and the
          delight I feel seeing people’s reactions when they bite into something
          I made has never faded. As I got older, I started experimenting,
          troubleshooting, and sharing the outcomes with my friends (a.k.a.
          sharing the calories). After recurrent inquiries about placing orders,
          I decided to start baking for profit, and it worked out; I received
          great feedback. I was building my own brick-and-mortar when life in
          the Caribbean happened, and I ended up moving to Washington in the
          fall of 2017. As a Puerto Rican in a foreign land, I take pride and
          joy in sharing with my chosen PNW family the flavors I grew up with.
          Now I want to share my passion with everyone else and hopefully help
          others along the way.
        </p>
        <h4>Why Múcaro?</h4>
        <p>
          The Múcaro [moo-kah-roh] is the endemic screech night owl of Puerto
          Rico. Its name was chosen by the Taíno people, who were the nomad
          indigenous habitants of Borikén (the Taíno name for the island) until
          the Spanish colonizers invaded the archipelago and slaughtered its
          entire native population. I chose "Múcaro” to reclaim my heritage and
          show that although the Taíno people of the island were murdered, they
          were never erased nor forgotten. Likewise, I am a known night owl and
          a midnight baker; I've been under The Curse of The Múcaro even before
          I started baking.
        </p>
        <h4>What Múcaro Stands For</h4>
        <div className="mucaroValues">
          <p className="mucaroValuesItem">Belonging & Collaboration</p>
          <p className="mucaroValuesItem">Empathy & Compassion</p>
          <p className="mucaroValuesItem">Integrity & Equity</p>
          <p className="mucaroValuesItem">Kindness & Respect</p>
          <p className="mucaroValuesItem">Play & Joy</p>
          <p className="mucaroValuesItem">Sustainability & Excellence</p>

        </div>
        <h4>What Múcaro Stands Against</h4>
        <p>
          Bigotry and all forms of discrimination, including sexism & misogyny,
          racism & anti-Blackness, transphobia & transmisogyny, homophobia, and
          xenophobia. As well as any kind of harassment, ethnic hatred,
          classism, greed, and entitled individualism.
        </p>
      </div>
    </div>
  );
}

export default About;
