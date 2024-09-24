import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
      width: 265px;
      padding: 16px;
      text-align: center;
      border-radius: 8px;
      text-color: black;
  
      margin: 8px;
      margin-left: auto;
      margin-right: auto;
      background-color: gray;
      }

      .fancy {
      background-color: orange;
      color: cyan;
      border: 10px solid green;
      margin: 100px;
      }

      .card img{
      width: 100%;
      border: 2px solid;
      border-radius: 8px;
      } 

      #SeeMore-btn:hover{
      font-size: 18px;
      background-color: green;
      color: black;
      }
    `;
  }

  render() {
    return html`
    <div class="card">

    <img src="https://assets.channelinsider.com/uploads/2022/08/CI.BCG_.Profile.png"/>
    <h2>Boston Consulting Group</h2> 
    <p>BCG is a global consulting firm that partners with 
      leaders in business and society to tackle their most important challenges</p> 
    <a href="https://hax.psu.edu/" class="See More">
    <div>
      <button class="SeeMore-btn"> See More</button>

      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      imgSrc: { type: String },
      p: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
