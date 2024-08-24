const textareaEl = document.getElementById('Textarea');
const TotalCharacterEl = document.getElementById('Total_character');
const Remaining_characterEl = document.getElementById('remaining_character')

textareaEl.addEventListener('keyup', () => {
    updateCounter();
})
function updateCounter() {
    TotalCharacterEl.innerText = textareaEl.value.length;
    Remaining_characterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}