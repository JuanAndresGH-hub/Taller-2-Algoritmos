//Una empresa paga el salario por horas. Dadas las horas de trabajo de una persona durante la
//semana, calcule el pago total de la semana, teniendo en cuenta que las horas se pagan
//dependiendo de la cantidad, entre 1 y 10 se pagan a $30000 y mayores a 10 se pagan a
//$33000 Mostar un mensaje así:
//Señor tal XXXX el número de horas es XXX y su salario equivale a XXX

function calcularSalario(nombre, horas) {
    let salario = 0;

    if (horas <= 10) {
        salario = horas * 30000;
    } else {
        salario = (10 * 30000) + ((horas - 10) * 33000);
    }

    console.log(`Señor(a) ${nombre}, el número de horas trabajadas es ${horas} y su salario equivale a $${salario}`);
}
calcularSalario("Juan Andres", 35);
