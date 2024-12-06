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
  const input = args // args wird unter der Variable 'input' gespeichert
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

    // Wenn du eine e entdecksts, dann ersetze diese mit einer 3
    if (currentElement === "e") {
      result.push("3")
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

export function aufgabe09(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Zähle ob die Eingabe genau 6 Zeichen erhält
    if (input.length === 6) {
      return true
    } else {
      return false
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe13(args) {
  const input = args
  const result = []
  // Position des letzten `e`s
  let lastEPosition = -1
  // Suche nach der Position des letzten `e`
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      lastEPosition = i
    }
  }

  // Gebe die lastEPosition zurück
  return lastEPosition
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []
  // Suche die Position des dritten e's in einem Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe11(args) {
  const input = args
  // Erstelle eine Variable um den ASCII-Code zu speichern
  let asciiCode = null

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0) // charCodeAt gibt den Unicode-Wert des Zeichens an einer angegebenen Position zurück

  //Gib den ASCII-Code zurück
  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe15(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    // Lesen Sie die Eingabe nur bis zum ersten Leerzeichen ein.
    if (input[i] === " ") {
      return result.join("")
    } else {
      result.push(input[i])
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result1 = []
  const result2 = []

  let dollarGefunden = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn du ein $ gefunden hast, setze dollarGefunden auf true und überspringe es
    if (currentElement === "$") {
      dollarGefunden = true
      continue // Dollarzeichen wird übersprungen
    }

    // Wenn dollarGefunden falsch ist, hänge an die erste Liste an
    if (!dollarGefunden) {
      result1.push(currentElement)
    } else {
      result2.push(currentElement)
    }
  }

  return [result1.join(""), result2.join("")]
}

export function aufgabe17(args) {
  const input = args
  const result = []
  // Die Eingabe soll als Liste gelesen werden

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      //Falls es ein Leerzeichen gibt, setze ein Komma ein
      result.push(",")
    } else {
      result.push(currentElement)
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const result = []
  // Schreiben Sie folgende Aussage: Sie heissen "Name" und sind "Alter" Jahre alt, wobei "Name" und "Alter" durch Eingaben eingesetzt werden.
  result.push("Ich heisse Esma und bin 16 Jahre alt.")
  return result
}

linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  //Jedes Zeichen in der Eingabe soll verdoppelt werden.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement + currentElement)
  }
  return result
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      if (input[i + 1] !== " ") {
        return false
      }
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  for (let i = input.length - 1; i >= 0; i--) {
    result.push(input[i])
  }
  return result
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  // Markiere alle Zeichen bis zum ersten "k" indem du sie durch ein "_" ersetzt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      break
    }
    result.push("_")
  }
  return result
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
  // speichere das erste element von input als Variable
  const firstElement = input[0]
  // Das erste Zeichen an den Schluss anhängen
  result.push(firstElement)
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)
  return result
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []
  // Speichere das erste und letzte Element
  const firstElement = input[0]
  const lastElement = input[input.length - 1]
  // Tausche das erste und das letzte Zeichen
  result.push(lastElement)
  // Füge die mittleren Zeichen ein
  for (let i = 1; i < input.length - 1; i++) {
    result.push(input[i])
  }
  result.push(firstElement)
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  //Speichere das mittlere Element einer ungeraden Eingabe als Variable ab
  const middleElement = input[Math.floor(input.length / 2)]
  //Lösche das mittlere Element
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === middleElement) {
      continue
    }
    result.push(currentElement)
  }
  result.join(middleElement)
  //Speichere die mittleren Elemente einer gerade Eingabe als Variable ab

  const middleIndex = input.length / 2
  //Lösche die middleElements

  return result
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe27(args) {
  //Teste ob die Eingabe eine Zahl ist
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (isNaN(currentElement)) {
      //isNaN = Not a Number (muss nicht neu definiert werden)
      return false
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe30(args) {
  // Das ist basiert auf die Aufgabe 5 ; Erkenne ob es ein 'e' in der Eingabe gibt
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return true
    }
  }
  return false
} //eigene Aufgabe
linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function aufgabe31(args) {
  // Ist basierend auf die Aufgabe 8 ; Ersetzte alle 'n' mit einem 's'
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "n") {
      result.push("s")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("") //Liste zu Text
} // eigene Aufgabe
linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)

export function aufgabe32(args) {
  //Ist basierend auf die Aufgabe 9; Teste, ob die Eingabe genau 10 Zeichen lang ist
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "n") {
      result.push("s")
    } else {
      result.push(currentElement)
    }
  }
  if (result.length === 10) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe32]", aufgabe32)
