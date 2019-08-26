 describe('Los estudiantes login', function() {

    beforeEach(function() {
      cy.visit('https://losestudiantes.co');
      cy.contains('Cerrar').click();
      cy.contains('Ingresar').click();
    });

    it('Cree una cuenta y pruebe el login correcto y la creación de una cuenta con un login que ya existe.', function() {
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("malmal@example.com");
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1243123");
      cy.get('.cajaLogIn').contains('Ingresar').click();
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });

    it('Cree una cuenta y pruebe el login correcto y la creación de una cuenta con un login que ya existe.', function() {
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Jorge Andres");
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Vera Forero");
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ja.vera@uniandes.edu.co.edu.co");
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("Patito2428");
	  cy.get('[type="checkbox"]').check() 
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16');
      cy.get('.cajaSignUp').contains('Registrarse').click();
      cy.contains('Ya existe un usuario registrado con el correo');
      cy.contains('Ok').click();
    });

    it('Login bien realizado', function() {
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ja.vera@uniandes.edu.co");
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("Patito2428");
      cy.get('.cajaLogIn').contains('Ingresar').click();
    });
});

describe('Pruebe la funcionalidad de búsqueda de profesores', function() {

  beforeEach(function() {
    cy.visit('https://losestudiantes.co');
    cy.contains('Cerrar').click();
  });
  it('Pruebe la funcionalidad de búsqueda de profesores', function() {
    cy.get('form[role="search"] input').type('mario linares', {force: true});
    cy.contains('Mario Linares Vasquez - Ingeniería de Sistemas');
  });
  it('Pruebe la funcionalidad de búsqueda de profesores', function() {
    cy.get('form[role="search"] input').type('ProfesorX', {force: true});
    cy.contains('No se encontraron profesores');
  });
});

describe('Pruebe como dirigirse a la página de un profesor', function() {
  beforeEach(function() {
    cy.visit('https://losestudiantes.co');
    cy.contains('Cerrar').click();
    cy.get('form[role="search"] input').type('mario linares', {force: true});
    cy.contains('Mario Linares Vasquez - Ingeniería de Sistemas').click();
  });
  it('Pruebe como dirigirse a la página de un profesor', function() {
    cy.get('.infoProfesor');
  });
  it('Filters coments by subject', function() {
    cy.get('.statsProfesorDropdown').find('input[name="id:MISO4208"]').click();

  });
});
