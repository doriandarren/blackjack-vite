import _ from 'underscore';



/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipoDeCarta Ejemplo:['C','D','H','S']
 * @param {Array<String>} tiposEspaciales Ejemplo:['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas 
 */
export const crearDeck = (tipoDeCarta, tiposEspaciales) => {

    if( !tipoDeCarta || tipoDeCarta.length === 0 ) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');


    if( !tiposEspaciales || tiposEspaciales.length === 0 ) 
        throw new Error('TiposEspaciales es obligatorio como un arreglo de string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCarta ) {
        for( let esp of tiposEspaciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}