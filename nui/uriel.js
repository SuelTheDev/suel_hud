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

  //inicializa valores padrão
  atualizarEstadoMic(1);

  window.addEventListener('message', (ev)=> {
    let data = ev.data;
    if (data.show_hud){
       atualizarVida(data.hud.vida);
       atualizarColete(data.hud.colete);
       atualizarFome(data.hud.fome);
       atualizarSede(data.hud.sede);
       mostrarHud(true);
      if (data.show_car){
        mostrarVelocimentro(true);
        atualizarVelocidade(data.car.velocidade);
        atualizarCinto(data.car.cinto);
        atualizarCombustivel(data.car.gas);
        atualizarFarol(data.car.farol);
      } else {
        mostrarVelocimentro(false);
      }
      mostrarHud(true);
    } else {
      mostrarHud(false);
    }
  });
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const mostrarHud = (value) => {
  value
  ? (() => {
      hud.fadeIn(500);
    })()
  : (() => {
      hud.fadeOut(500);
      velocimetro.fadeOut(500)
    })();
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
  velocidade.text(`${Math.trunc(value)}`);
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

const atualizarCombustivel = (value) => {
  comb_bar.css('width', `${value}%`);
  if (value>=50){
    comb_icon.removeClass('critico');
    comb_icon.removeClass('alerta');
    comb_icon.addClass('normal');
  }else if (value>=20){
    comb_icon.removeClass('critico');
    comb_icon.removeClass('normal');
    comb_icon.addClass('alerta');
  } else {
    comb_icon.removeClass('normal');
    comb_icon.removeClass('alerta');
    comb_icon.addClass('critico');
  }
};

const mostrarVelocimentro = (bool) => {
  bool
    ? (() => {
        velocimetro.fadeIn(500);
      })()
    : (() => {
        velocimetro.fadeOut(500);
      })();
};
