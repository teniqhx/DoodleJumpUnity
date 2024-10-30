document.querySelectorAll('.cycle').forEach((cycle) => {
    cycle.addEventListener('click', () => {
        const expandableDiv = cycle.querySelector('.expandable-div');
        expandableDiv.classList.toggle('active');
    });
});
