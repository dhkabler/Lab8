function back()
{
    var images = document.querySelectorAll('.img')
    
    for(i=0;i<5;i++)
    {
        if(images[i].classList.contains('show'))
        {
            images[i].classList.remove('show')
            images[i].classList.add('notShow')

            if(i==0)
            {
                images[4].classList.remove('notShow')
                images[4].classList.add('show')
            }
            else
            {
                images[i-1].classList.remove('notShow')
                images[i-1].classList.add('show')
            }
            break
        }
    }
}

function next()
{
    var images = document.querySelectorAll('.img')
    
    for(i=0;i<5;i++)
    {
        if(images[i].classList.contains('show'))
        {
            images[i].classList.remove('show')
            images[i].classList.add('notShow')

            if(i==4)
            {
                images[0].classList.remove('notShow')
                images[0].classList.add('show')
            }
            else
            {
                images[i+1].classList.remove('notShow')
                images[i+1].classList.add('show')
            }
            break
        }
    }
}

