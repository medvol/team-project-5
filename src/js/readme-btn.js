      const readMoreBtn = document.querySelector('.readme-more-btn');
      const text = document.querySelector('.text');
      const dots = document.querySelector('.dots');

      readMoreBtn.addEventListener('click', (e) => {
        text.classList.toggle('show-more');
        if (readMoreBtn.innerText === 'Read more') {
          readMoreBtn.innerText = 'Read less';
          dots.style.display = 'none'
          
        } else {
          readMoreBtn.innerText = 'Read more';
          dots.style.display = 'inline'
          
        }
      })