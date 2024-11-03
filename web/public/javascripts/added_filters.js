
document.querySelectorAll('.filter').forEach(checkbox => {
    checkbox.addEventListener('click', function () {
        const filterContainer = document.getElementById('active-filters');
        
        if (this.checked) {
            // Create a new filter tag for each checked item
            const filterTag = document.createElement('div');
            filterTag.classList.add('filter-tag');
            filterTag.textContent = this.value;

            
            // Add a remove button to each tag
            const removeBtn = document.createElement('span');
            removeBtn.textContent = '✖';
            removeBtn.classList.add('remove-btn');
            filterTag.appendChild(removeBtn);

            // Append to the filter container
            filterContainer.appendChild(filterTag);

            // Add click event to remove tag and uncheck the checkbox
            removeBtn.addEventListener('click', () => {
                filterContainer.removeChild(filterTag);
                this.checked = false; // Unchecks the associated checkbox
            });
        } else {
            // If unchecked, remove the corresponding filter tag
            const tagToRemove = Array.from(filterContainer.children).find(tag => tag.textContent.startsWith(this.value));
            if (tagToRemove) {
                filterContainer.removeChild(tagToRemove);
            }
        }
    });
});
