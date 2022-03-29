export const changeCssVar = theme => {
    const root = document.querySelector(':root');

    const cssVariales = ['header', 'bg-image'];

    cssVariales.forEach(el => {
        root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`);
    })
}