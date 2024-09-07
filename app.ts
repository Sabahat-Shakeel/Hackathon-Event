const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
    } else {
        skillsSection.classList.add('hidden');
    }
});