var toggleButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skillsSection');
toggleButton.addEventListener('click', function () {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
    }
    else {
        skillsSection.classList.add('hidden');
    }
});
