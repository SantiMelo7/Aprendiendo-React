// ENUMS

// CON JS

/*export const ERROR_TYPES = { NOT_FOUND: "notFound", UNAUTHORIZED: "unananan", FORBIDDEN: "forbiden" }

function mostrarMensaje (tipodeError) {

    if( tipodeError === ERROR_TYPES.NOT_FOUND ) {
        
        console.log("No se encuentra")
    
    } else if ( tipodeError === ERROR_TYPES.UNAUTHORIZED ) {
        
        console.log("no hay permiso")
    
    } else if ( tipodeError === ERROR_TYPES.FORBIDDEN) {
        
        console.log("no hay permiso")

    }

}*/

/* --------------------------------------------------------------------------------------- */

// TS

// coleccion de datos finita
// sin const es cuando lo utilizanos afuera
const enum ERROR_TYPES{ NOT_FOUND, UNAUTHORIZED , FORBIDDEN }

// damos una funcion y como parametro es el tipo de ese enum
function mostrarMensaje (tipodeError: ERROR_TYPES) {

    if( tipodeError === ERROR_TYPES.NOT_FOUND ) {
        
        console.log("No se encuentra")
    
    } else if ( tipodeError === ERROR_TYPES.UNAUTHORIZED ) {
        
        console.log("no hay permiso")
    
    } else if ( tipodeError === ERROR_TYPES.FORBIDDEN) {
        
        console.log("no hay permiso")

    }

}