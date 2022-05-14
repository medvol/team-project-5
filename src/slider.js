      const readMoreBtn=document.querySelector('.response__link');
      const text=document.querySelector('.response__content');

      readMoreBtn.addEventListener('click', (e) => {
        text.classList.toggle('show-more');
        if (readMoreBtn.innerText === 'Read more') {
          readMoreBtn.innerText = 'Read less';
          
        } else {
          readMoreBtn.innerText = 'Read more';
          
        }
      })