test('Esta prueba no debe de fallar', () => {
    if (0 === 0){
        throw new Error('No se pude dividir')
    }
})