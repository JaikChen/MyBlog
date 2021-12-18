const btn = document.querySelector('button');
                    const navpost = document.querySelector('.navpost');
                    btn.addEventListener('click', () => {
                        navpost.classList.toggle('active')
                    })