function mostrarInformacion(pais) {
    var informacion = obtenerInformacionPais(pais);
    var informacionPais = document.getElementById('informacionPais');
    
    informacionPais.innerHTML = `
      <h2>${informacion.nombre}</h2>
      <img src="${informacion.imagen}"
      <p><strong>Capital:</strong> ${informacion.capital}</p>
      <p><strong>Jefe de Estado:</strong> ${informacion.jefeEstado}</p>
      <p><strong>Nombre Oficial:</strong> ${informacion.nombreOficial}</p>
      <p><strong>Para más información sobre el país en este año:</strong> ${informacion.hipervinculo}</p>
    `;
  }
  
  function obtenerInformacionPais(pais) {
    var paises = {
      'Argentina': {
        nombre: 'Argentina',
        capital: 'Buenos Aires',
        jefeEstado: 'Agustín Pedro Justo',
        nombreOficial: 'República Argentina',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Argentina_en_1936">Argentina en 1936</a>',
        imagen: 'Argentina.png'
       }, 
      'Bolivia': {
        nombre: 'Bolivia',
        capital: 'Sucre (oficial), La Paz (administrativa)',
        jefeEstado: 'José Luis Tejada Sorzano',
        nombreOficial: 'República de Bolivia',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Bolivia_en_1936">Bolivia en 1936</a>',
        imagen: 'Bolivia.jpg'
    },
      'Brasil': {
        nombre: 'Brasil',
        capital: 'Río de Janeiro',
        jefeEstado: 'Getúlio Vargas',
        nombreOficial: 'República de los Estados Unidos de Brasil',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Brasil_en_1936">Brasil en 1936</a>',
        imagen: 'Brasil.jpg'
    },
      'Chile': {
        nombre: 'Chile',
        capital: 'Santiago',
        jefeEstado: 'Arturo Alessandri',
        nombreOficial: 'República de Chile',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Chile_en_1936">Chile en 1936</a>',
        imagen: 'Chile.jpg'
    },
      'Colombia': {
        nombre: 'Colombia',
        capital: 'Bogotá',
        jefeEstado: 'Alfonso López Pumarejo',
        nombreOficial: 'República de Colombia',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Colombia_en_1936">Colombia en 1936</a>',
        imagen: 'Colombia.jpg'
    },
      'Ecuador': {
        nombre: 'Ecuador',
        capital: 'Quito',
        jefeEstado: 'Federico Páez',
        nombreOficial: 'República del Ecuador',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Ecuador_en_1936">Ecuador en 1936</a>',
        imagen: 'Ecuador.png' 
    },
      'Paraguay': {
        nombre: 'Paraguay',
        capital: 'Asunción',
        jefeEstado: 'Eusebio Ayala',
        nombreOficial: 'República de Paraguay',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Paraguay_en_1936">Paraguay en 1936</a>',
        imagen: 'Paraguay.jpg'
    },
      'Perú': {
        nombre: 'Perú',
        capital: 'Lima',
        jefeEstado: 'Óscar Benavides',
        nombreOficial: 'República Peruana',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Per%C3%BA_en_1936">Perú en 1936</a>',
        imagen: 'Peru.jpg'
    },
      'Uruguay': {
        nombre: 'Uruguay',
        capital: 'Montevideo',
        jefeEstado: 'Gabriel Terra',
        nombreOficial: 'República Oriental del Uruguay',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Uruguay_en_1936">Uruguay en 1936</a>',
        imagen: 'Uruguay.jpg'
    },
      'Venezuela': {
        nombre: 'Venezuela',
        capital: 'Caracas',
        jefeEstado: 'Eleazar López Contreras',
        nombreOficial: 'Estados Unidos de Venezuela',
        hipervinculo: '<a href="https://es.wikipedia.org/wiki/Categor%C3%ADa:Venezuela_en_1936">Venezuela en 1936</a>',
        imagen: 'Venezuela.jpg'
    }
    };
    
    return paises[pais];
  }
  