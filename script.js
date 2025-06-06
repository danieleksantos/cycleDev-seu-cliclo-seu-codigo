const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-theme", "light");
  } else {
    rootHtml.setAttribute("data-theme", "dark");
  }

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

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
      currentPhase = 'Fase Menstrual 🩸';
      moodTip = 'Fadiga, sensibilidade e oscilações de humor são comuns.';
      workTip = 'Evite pair programming ou apresentações (se possível). Foque em refatorar códigos simples ou revisar PRs com calma.';
      selfCareTip = 'Trabalhe em um ambiente confortável, use fones com música suave e lembre-se de alongar-se.';
    } else if (dayDiff >= 6 && dayDiff <= 13) {
      if (dayDiff >= 10) {
        currentPhase = 'Fase Folicular (Janela Fértil) 💚🌱';
        moodTip = 'Aumento de energia, criatividade e motivação.';
        workTip = 'Aproveite para estudar conteúdos complexos, criar novas features ou fazer brainstorming de soluções.';
        selfCareTip = 'Inclua pausas ativas na rotina: uma caminhada leve entre blocos de foco pode ser revigorante.';
      } else {
        currentPhase = 'Fase Folicular 🌱';
        moodTip = 'Humor mais estável, energia em ascensão.';
        workTip = 'Organize seu backlog pessoal, planeje seus estudos ou se envolva em pair programming leve.';
        selfCareTip = 'Anote suas conquistas diárias — isso fortalece seu senso de progresso.';
      }
    } else if (dayDiff === 14) {
      currentPhase = 'Fase Ovulatória (Pico da Janela Fértil) 💧💚';
      moodTip = 'Alta confiança, libido e habilidades comunicativas.';
      workTip = 'Perfeito para entrevistas, dailies mais participativas ou apresentações técnicas.';
      selfCareTip = 'Vista-se de forma que te faça sentir poderosa. Um boost de autoestima ajuda no desempenho.';
    } else if (dayDiff === 15) {
      currentPhase = 'Fase Lútea (Último dia da Janela Fértil) 🌙';
      moodTip = 'Humor ainda elevado, mas pode começar a oscilar.';
      workTip = 'Feche pendências iniciadas. Evite começar algo novo e mantenha o ritmo com clareza.';
      selfCareTip = 'Inclua momentos de desconexão no fim do dia para reduzir a sobrecarga mental.';
    } else if (dayDiff >= 16 && dayDiff <= 28) {
      currentPhase = 'Fase Lútea 🌙';
      moodTip = 'Irritabilidade, ansiedade e fadiga podem aparecer.';
      workTip = 'Divida aprendizados complexos em tópicos menores. Use checklists para se organizar melhor.';
      selfCareTip = 'Evite reuniões longas (se possível) e preserve seu foco com técnicas como Pomodoro.';
    } else {
      currentPhase = 'Ciclo possivelmente reiniciado (mais de 28 dias)';
      moodTip = 'Observe os sinais do seu corpo.';
      workTip = 'Reflita sobre sua produtividade ao longo do mês. O que funcionou? O que pode melhorar?';
      selfCareTip = 'Se estiver se sentindo diferente do habitual, vale buscar orientação médica ou nutricional.';
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
      infoContainer.innerHTML = '';
      const paragraph = document.createElement('p');
      paragraph.textContent = `${workTip}`;
      paragraph.className = 'cycleDev__info-paragraph';

      infoContainer.appendChild(paragraph);
    });

    const selfCareButton = createButton('Cuidados pessoais', () => {
      infoContainer.innerHTML = '';
      const paragraph = document.createElement('p');
      paragraph.textContent = `${selfCareTip}`;
      paragraph.className = 'cycleDev__info-paragraph';

      infoContainer.appendChild(paragraph);
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
