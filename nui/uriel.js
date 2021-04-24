const hud = $('#hud');
const velocimetro = $('.velocimentro-container');
const velocidade = $('#velocidade');
const farol = $('#farol');
const cinto = $('#cinto');
const comb_icon = $('#c-icon');
const comb_bar = $('#comb_bar');
const logo = $('.logo-container img');
const vida = $('.bar-vida-inside');
const colete = $('.bar-colete-inside');
const fome = $('.bar-fome-inside');
const sede = $('.bar-sede-inside');
const mic = $('#mic-icon');
const micText = $('#mic-text');
const radio = $('#radio-icon');
const radioText = $('#radio-text');

$(() => {

  //inicializa os controles
  // hud = $('#hud');
  // velocimetro = $('.velocimentro-container');
  // velocidade = $('#velocidade');
  // farol = $('#farol');
  // cinto = $('#cinto');
  // comb_icon = $('#c-icon');
  // comb_bar = $('#comb_bar');
  // logo = $('.logo-container img');
  // vida = $('.bar-vida-inside');
  // colete = $('.bar-colete-inside');
  // fome = $('.bar-fome-inside');
  // sede = $('.bar-sede-inside');
  // mic = $('#mic-icon');
  // micText = $('#mic-text');
  // radio = $('#radio-icon');
  // radioText = $('#radio-text');

  setInterval(() => {
    atualizarVida(getRandomIntInclusive(0, 100));
    atualizarColete(getRandomIntInclusive(0, 100));
    atualizarFome(getRandomIntInclusive(0, 100));
    atualizarSede(getRandomIntInclusive(0, 100));
    atualizarEstadoMic(getRandomIntInclusive(0, 2));
    atualizarEstadoRadio(getRandomIntInclusive(0, 1), "200");
    // atualizarVida(100);
    // atualizarColete(100);
    // atualizarFome(100);
    // atualizarSede(100);
  }, 500);
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const atualizarVida = (value) => {
  vida.css("width", `${value}%`);
};

const atualizarColete = (value) => {
  colete.css("width", `${value}%`);
};

const atualizarFome = (value) => {
  fome.css("width", `${value}%`);
};

const atualizarSede = (value) => {
  sede.css("width", `${value}%`);
};

const atualizarEstadoMic = (value) => {
  switch (value) {
    case 0:
      //sussurrando
      mic.removeClass("mic-normal");
      mic.removeClass("mic-gritando");
      mic.addClass("mic-sussurrando");
      micText.text("Sussurrando");
      break;
    case 1:
      mic.removeClass("mic-sussurrando");
      mic.removeClass("mic-gritando");
      mic.addClass("mic-normal");
      micText.text("Normal");
      break;
    case 2:
      mic.removeClass("mic-sussurrando");
      mic.removeClass("mic-normal");
      mic.addClass("mic-gritando");
      micText.text("Gritando");
      break;
  }
};

const atualizarEstadoRadio = (value, radioFreq) => {
  if (radioText) {
    radioText.text(`${radioFreq} Mhz`);
  } else {
    radioText.text("0 Mhz");
  }

  if (value) {
    radio.toggleClass("radio-talking");
  }
};

//carro
const atualizarVelocidade = (value) => {
  velocidade.text(`${value}`);
};

const atualizarCinto = (value) => {
  switch (value) {
    case true:

      break
    case false:
      break;
  }
};

const atualizarFarol = (value) => {};

const atualizarCombustivel = (value) => {};

const mostrarVelocimentro = (bool) => {
  bool
    ? (() => {
        velocimetro.fadeIn(500);
      })()
    : (() => {
        velocimetro.fadeOut(500);
      })();
};
