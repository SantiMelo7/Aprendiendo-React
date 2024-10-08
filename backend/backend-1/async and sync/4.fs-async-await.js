// modulos nativos que no tienen promesas nativas
//const { promisify } = require("node:util")
// crear version de promise
//const readFilePromise = promisify(fs.readFile)

const { readFile } = require("node:fs/promises"); // en vez de callback, mejor promesas

// CODE ASINCRONO

// IFE
(async () => {
    console.log("leyendo el 1 txt")

    //utf-8, temas de codificacion, sincrono, readFile, asincrono
    const text = await readFile("./archivo.txt", "utf-8")
    console.log("Primer texto:", text)

    console.log("Tareas mas que se ejecutan mientas devuelve la promesa")

    console.log("leyendo el 2 txt")
    //utf-8, temas de codificacion, sincrono
    const text2 = await readFile("./archivo2.txt", "utf-8")
    console.log("Segundo texto:", text2)

})() // se invoca