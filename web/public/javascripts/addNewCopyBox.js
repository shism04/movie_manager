let copyIndex=1;
console.log("hola");
document.getElementById('add-copy').addEventListener('click', function () {
    const copiesContainer = document.getElementById('copies-container');
    const newCopy = document.createElement('div');
    const currentDate = new Date().toISOString().split('T')[0];
    
    newCopy.classList.add('copia-section');
    newCopy.innerHTML = `
        <h3>Copiy ${copyIndex+1}</h3>
        <label for="condition">Condition:</label>
        <input type="text" id="condition" name="copies[${copyIndex}][condition]">
    
        <label for="format">Format:</label>
        <input type="text" id="format" name="copies[${copyIndex}][format]">
    
    
        <input type="hidden" id="date-added" name="copies[${copyIndex}][dateAdd]" value="${currentDate}">
    `;
    copiesContainer.insertBefore(newCopy, document.getElementById('add-new-copy'));
    copyIndex++;
});