module.exports = {

    /**
     * Suma de dos numeros
     * @example
     * n1 = 2, n2 = 5 => Resultado 7
     * @param {*} n1 Numero uno de la suma 
     * @param {*} n2 Numero dos de la suma
     */
    suma: function( n1, n2 ) {
        return (this.esNumero(n1, n2) ? n1 + n2 : this.mensajeError);
    },
    /**
     * Resta de dos numeros
     * @example
     * n1 = 2, n2 = 5 => Resultado -3
     * @param {*} n1 Numero uno de la resta 
     * @param {*} n2 Numero dos de la resta
     */
    resta: function( n1, n2 ) {
        return (this.esNumero(n1, n2) ? n1 - n2 : this.mensajeError);
    },
    /**
     * Multiplicacion de dos numeros
     * @example
     * n1 = 2, n2 = 5 => Resultado 10
     * @param {*} n1 Numero uno de la multiplicacion 
     * @param {*} n2 Numero dos de la multiplicacion
     */
    multiplicacion: function( n1, n2 ) {
        return (this.esNumero(n1, n2) ? n1 * n2 : this.mensajeError);
    },
    /**
     * Division de dos numeros
     * @example
     * n1 = 2, n2 = 5 => Resultado 0.4
     * @param {*} n1 Numero uno de la division 
     * @param {*} n2 Numero dos de la division
     */
    division: function( n1, n2 ) {
        return (this.esNumero(n1, n2) ? n1 / n2 : this.mensajeError);
    },
    /**
     * Muestra mensaje de error cuando los valores no son numericos
     */
    mensajeError: function() {
        console.log('Los valores no son numericos');
    },
    /**
     * Comprueba que sean valores numericos.
     * @param {*} n1 
     * @param {*} n2 
     */
    esNumero: function(n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            return false;
        } else {
            return true;
        }
    },

}