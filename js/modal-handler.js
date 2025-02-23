

function OpenModal(id)
{
    const modal = document.getElementById(id);
    if (modal.classList.contains('active')) return modal;
    modal.classList.add('active');
    LockScroll();
    return modal;
}

function OpenImageModal(id, image_index)
{
    const modal = OpenModal(id);
    const image_src = modal.querySelector('.image-list').querySelectorAll('img')[image_index].src;

    // console.log(modal, ' ', image_src);

    modal.querySelector('.current-image').src = image_src;
}

function CloseOpenModals()
{
    const modals = document.querySelectorAll('.modal');
    // console.log(modals);
    modals.forEach(modal => { 
        if (modal.classList.contains('active'))
        { 
            // console.log(modal);
            modal.classList.remove('active'); 
        }
    })
    UnlockScroll();
}


function LockScroll()
{
    document.body.style.overflowY = "hidden";
}

function UnlockScroll()
{
    document.body.style.overflowY = "auto";
}




