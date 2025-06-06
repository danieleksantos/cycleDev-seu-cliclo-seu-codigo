document.addEventListener('DOMContentLoaded', function () {
  const inputDate = document.getElementById('input-date');
  const buttonsContainer = document.getElementById('buttons-container');
  const infoContainer = document.getElementById('info-container');

  inputDate.addEventListener('change', function () {
    const selectedDate = new Date(this.value);
    const today = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);


    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const timeDiff = today - selectedDate;
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;

    let currentPhase = '';
    let moodTip = '';
    let workTip = '';
    let selfCareTip = '';

    if (dayDiff < 0 || selectedDate >= today) {
      currentPhase = 'Data inválida (no futuro)';
    } else if (dayDiff <= 5) {
      currentPhase = 'Fase Menstrual 🩸 ';
      moodTip = 'Fadiga, sensibilidade e oscilações de humor são comuns.';
      workTip = 'Respeite seus limites e priorize tarefas leves.';
      selfCareTip = 'Descanse, mantenha-se hidratada e use compressas quentes se necessário.';
    } else if (dayDiff >= 6 && dayDiff <= 13) {
      if (dayDiff >= 10) {
        currentPhase = 'Fase Folicular  (Janela Fértil)💚🌱 ';
        moodTip = 'Aumento de energia, criatividade e motivação.';
        workTip = 'Ótimo momento para iniciar tarefas desafiadoras ou projetos.';
        selfCareTip = 'Movimente-se! Caminhadas e exercícios fazem bem.';
      } else {
        currentPhase = 'Fase Folicular 🌱 ';
        moodTip = 'Humor mais estável, energia em ascensão.';
        workTip = 'Planeje e organize as tarefas futuras.';
        selfCareTip = 'Faça algo que eleve sua autoestima.';
      }
    } else if (dayDiff === 14) {
      currentPhase = 'Fase Ovulatória  (Pico da Janela Fértil) 💧💚 ';
      moodTip = 'Alta confiança, libido e habilidades comunicativas.';
      workTip = 'Agende reuniões ou apresentações importantes.';
      selfCareTip = 'Faça algo que te empodere — roupas, cabelo, o que gostar!';
    } else if (dayDiff === 15) {
      currentPhase = 'Fase Lútea (Último dia da Janela Fértil) 🌙  ';
      moodTip = 'Humor ainda elevado, mas pode começar a oscilar.';
      workTip = 'Mantenha foco nas prioridades.';
      selfCareTip = 'Durma bem e evite sobrecarregar-se.';
    } else if (dayDiff >= 16 && dayDiff <= 28) {
      currentPhase = 'Fase Lútea 🌙 ';
      moodTip = 'Irritabilidade, ansiedade e fadiga podem aparecer.';
      workTip = 'Divida tarefas grandes em etapas menores.';
      selfCareTip = 'Evite excesso de cafeína e pratique exercícios respiratórios.';
    } else {
      currentPhase = 'Ciclo possivelmente reiniciado (mais de 28 dias) ';
      moodTip = 'Observe os sinais do seu corpo.';
      workTip = 'Reavalie sua rotina e faça ajustes suaves.';
      selfCareTip = 'Fique atenta a sinais físicos e consulte um profissional se necessário.';
    }
console.log(dayDiff);
    buttonsContainer.innerHTML = '';
    infoContainer.innerHTML = '';

    const phaseButton = createButton('Sua fase atual', () => {
      infoContainer.innerHTML = '';
      const paragraph = document.createElement('p');
      paragraph.textContent = `${currentPhase} ${moodTip}`;
      paragraph.className = 'cycleDev__info-paragraph';

      infoContainer.appendChild(paragraph);
    });

    const workButton = createButton('Trabalho / Estudo', () => {
      infoContainer.textContent = workTip;
    });

    const selfCareButton = createButton('Cuidados pessoais', () => {
      infoContainer.textContent = selfCareTip;
    });

    buttonsContainer.append(phaseButton, workButton, selfCareButton);
  });

  function createButton(label, onClick) {
    const button = document.createElement('button');
    button.textContent = label;
    button.className = 'cycleDev__button';
    button.style.marginRight = '0.5rem';
    button.addEventListener('click', onClick);
    return button;
  }
});
