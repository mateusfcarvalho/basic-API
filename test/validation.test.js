const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Mateus",
        email: "mateus.carvalho@ges.inatel.br",
        senha: "123456789"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        email: "mateus.carvalho@ges.inatel.br",
        senha: "123456789"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
it('Caso inválido - sem o parâmetro email', () => {
    const result = Validation.create({
        nome: "Mateus",
        senha: "123456789"
    });
expect(result.email).toEqual(Constants.ErrorValidation.email);
});
it('Caso inválido - sem o parâmetro senha', () => {
    const result = Validation.create({
        nome: "Mateus",
        email: "mateus.carvalho@ges.inatel.br"
    });
expect(result.email).toEqual(Constants.ErrorValidation.senha);
});
