const bodyEl = document.querySelector('body');
const outputMssg = document.querySelector('.output');
const btnContainer = document.querySelector('.button-container');

const printOutputMssg = (cssClass) => 
    outputMssg.innerHTML = `
                            Your choosen theme is 
                            <span>${cssClass}</span>. 
                            Your changes has been saved 
                            for the nex time you will 
                            refresh this page
                            `;

const changeBodyColor = (cssClass) => bodyEl.setAttribute('class', cssClass);

const saveConfig = (cssClass) => localStorage.setItem('Config', cssClass);

const getConfig = (() => {
    const color = localStorage.getItem('Config');   
    color === null ? changeBodyColor('initial') : changeBodyColor(color);
})();

btnContainer.addEventListener('click', (e) => {
    const elementId = e.target.id;
    switch (elementId) {
        case 'angular-red':
            changeBodyColor('angular');
            printOutputMssg('Angular');
            saveConfig('angular');
            break;

        case 'react-blue':
            changeBodyColor('react');
            printOutputMssg('React');
            saveConfig('react')
            break;

        case 'sass-pink':
            changeBodyColor('sass');
            printOutputMssg('Sass');
            saveConfig('sass')
            break;

        case 'vue-green':
            changeBodyColor('vue');
            printOutputMssg('Vue');
            saveConfig('vue')
            break;
        case 'bootstrap-purple':
            changeBodyColor('bootstrap');
            printOutputMssg('Bootstrap');
            saveConfig('bootstrap')
            break;
    }
});
