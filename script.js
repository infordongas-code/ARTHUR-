document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counterElement = document.getElementById('counter');
    const addBtn = document.getElementById('add-btn');
    const resetBtn = document.getElementById('reset-btn');

    addBtn.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        counterElement.textContent = count;
    });
});
