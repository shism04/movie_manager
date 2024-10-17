let faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        
        let question = item.querySelector('.question'); 
        let img = question.querySelector('img');

        if(item.classList.contains('active')){
            img.src="images/icons/close.png";
        }else{
            img.src="images/icons/add.png";
        }
        
    });
});