const target = document.getElementById("target");
let array = ["novice", "expert", "maître"];
let wordIndex = 0; // Va nous servir à aller de mot en mot
let letterIndex = 0; // Va nous servir à aller de lettre en lettre

const createLetter = () => {
  const letter = document.createElement("span"); // On dit que letter injecte un span
  target.appendChild(letter); // On dit que le span est l'enfant de target

  // On lui dit que letter (donc notre span) = l'index 0 de word et l'index 0 de letter
  letter.textContent = array[wordIndex][letterIndex];

  // On lui demande d'effacer les lettre au bout de 2,8 sec
  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// On veut créer les lettres en cascade
// On va créer une fonction récursive (qui va s'appeller elle même si les conditions sont remplies)
const loop = () => {
  setTimeout(() => {
    // Si tu arrive à la fin de ta boucle (dernier mot) : recommence (c'est une boucle infinie)
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    }
    // tant que letteridex est inférieur à mon mot
    else if (letterIndex < array[wordIndex].length) {
      createLetter(); // joue la fonction crée une lettre dans un span (qui ne va pas à la ligne)
      letterIndex++; // incrémente letterIndex
      loop(); // rejoue la fonction loop, sinon il ne fait que la 1ère lettre
    } else {
      // si on arrive au bout du mot, changeons de mot
      wordIndex++; // on change de mot
      letterIndex = 0; // on remet letter index à 0 pour qu'il reparcours le mot depuis la première lettre
      setTimeout(() => {
        loop();
      }, 2800); // tu joue la loop dans 2,8sec pour qu'on ait le temps de lire : au bout de 2,8s tu efface et tu recommence avec le prochain mot
    }
  }, 60); // setTimeout = fait l'action tous les X (ici 60ms)
};
loop();
