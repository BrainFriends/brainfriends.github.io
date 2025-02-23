
function PopulateImageModal(modal, image_urls)
{
    const image_list = modal.querySelector('.image-list');

    for (const image_index in image_urls)
    {
        const new_list_image = document.createElement('img');
        new_list_image.src = image_urls[image_index];
        new_list_image.onclick = function() { OpenImageModal(modal.id, image_index); };
        image_list.appendChild(new_list_image);
    
        if (image_urls.length == 1)
        {
            image_list.style = 'display: none;';
        }
    }

    // if (collection_info.link)
    // {
    //     const blurb_fill = modal.querySelector('.blurb-fill');
    //     const project_link = modal.querySelector('.project-link');
    //     project_link.href = collection_info.link;
    
    //     fetch(collection_info.link).then(response => response.text()).then(data => 
    //     {
    //         const parser = new DOMParser();
    //         const module_document = parser.parseFromString(data, 'text/html');
    //         blurb_fill.appendChild(module_document.querySelector('.blurb'));
    //     });
    // }
    // else
    // {
    //     const blurb_box = modal.querySelector('.blurb-box');
    //     blurb_box.style = 'display: none;';
    // }
}

function CreatePageImage(modal, image_url, image_index)
{
    const page_image = document.createElement('img');

    page_image.src = image_url;
    page_image.onclick = function() { OpenImageModal(modal.id, image_index); };

    return page_image;
}

function CreateImageModal(modal_id, image_urls, modal_data)
{
    const parser = new DOMParser();
    const modal_document = parser.parseFromString(modal_data, 'text/html');

    const modal_element = modal_document.querySelector('.modal');
    modal_element.id = modal_id;

    PopulateImageModal(modal_element, image_urls);

    return modal_element;
}

function PopulateGallery(gallery, modal_data)
{
    const image_urls = gallery.attributes.src.value.split('\n');
    const modal_element = CreateImageModal(gallery.attributes.src.value, image_urls, modal_data);
    gallery.after(modal_element);

    for (const image_index in image_urls) 
    {
        gallery.appendChild(CreatePageImage(modal_element, image_urls[image_index], image_index));
        // gallery.after(CreatePageImage(modal_element, image_urls[image_index], image_index));
    }
    
    // gallery.remove();
}

function CreateGalleries(modal_data)
{
    const galleries = document.querySelectorAll('gallery');
    galleries.forEach(gallery => 
    {
        PopulateGallery(gallery, modal_data);
    });
}

async function FetchImageModalData()
{
    const response = await fetch('../modules/image-modal.html');
    return await response.text();
}
FetchImageModalData().then(modal_data => CreateGalleries(modal_data));
