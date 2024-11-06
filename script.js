import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */

export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.

    // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatliste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const uppercaseletter = currentElement.toUpperCase()

    result.push(uppercaseletter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = [] // Das ist die Resultatliste
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //Zähle
      count = count + 1
    } else if (currentElement === "E") {
      //Zähle
      count = count + 1
    } else {
      //nicht zählen
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      //Zähle
      count = count + 1
    }
  }

  return count + 1 // weil ein Wort mehr als ein Leerzeichen
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args // Speichert args unter dem Namen input
  const result = [] // Leere Liste für das Resultat

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    // Zählt über den Text in input
    const currentElement = input[i]

    const upperCaseVersion = currentElement.toUpperCase()
    if (currentElement === " ") {
    } else if (upperCaseVersion === currentElement) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  let hasSpecialCharacter = false // Name für mehr Beschreibung

  // Ein Ausdruck der nach Sonderzeichen sucht wird definiert
  const specialCharacterRegex = /[!@#$%*(),.?"{}/><]/
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (specialCharacterRegex.test(currentElement)) {
      hasSpecialCharacter = true // Es wird überprüft, ob es ein Sonderzeichen gibt
      break // Suche wird unterbrochen wenn ein Sonderzeichen gefunden wird
    }
  }
  return hasSpecialCharacter
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const hasConnector = input.includes("und")

  return hasConnector
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
    } else if (currentElement === "E") {
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe12(args) {
  const input = args
  const result = []

  // Erstelle eine Variable, um die Position des ersten e's zu speichern
  let firstPosition = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein e findest, speichere die Position
    if (currentElement === "e") {
      // Speichere die Position nur beim ersten e
      if (firstPosition === -1) {
        firstPosition = i
      }
    }
  }
  return firstPosition
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)
