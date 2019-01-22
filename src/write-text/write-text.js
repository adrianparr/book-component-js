// This will write text to a p tag using module.exports style:

/**
 * We pass the actual <p></p> tag by searching it with 
 * document.querySelector
 * @param {} p 
 */
module.exports = (p) => {
  p.innerHTML = 'Hello from write-text.js';
}