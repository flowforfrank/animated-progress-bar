const simulateDownload = (progress) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(progress + 1);
        }, 50);
    }).then(res => res);
};

document.querySelector('.download-button').onclick = () => {
    const documentStyles = document.documentElement.style;
    const progressButton = document.querySelector('.progress-button');
    const percentage = document.querySelector('.percentage');
    const loadingText = document.querySelector('.loading-text');
    const buttonText = document.querySelector('.button-text');

    progressButton.classList.add('in-progress');

    (async () => {
        let progress = 0;

        while (progress < 100) {
            progress = await simulateDownload(progress);

            if (progress % 5 === 0) {
                loadingText.innerHTML = `Loading${Array(progress % 4).fill('.').join('')}`;
                documentStyles.setProperty('--progress', `${progress}%`);
            }

            percentage.innerText = `${progress}%`;
        }

        buttonText.innerText = '🎉 Done';
        setTimeout(() => progressButton.classList.replace('in-progress', 'finished'), 1000);
    })();
}