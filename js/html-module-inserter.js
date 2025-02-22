
const modules = document.querySelectorAll('module');

modules.forEach(module => 
{
    const url = module.attributes.src.value.split(' ');

    load_file(url[0], function(data) 
    {
        const parser = new DOMParser();
        const module_document = parser.parseFromString(data, 'text/html');

        if (url.length == 1)
        {
            const body_children = module_document.querySelector('body').children;
            // console.log(body_children);
            for (const child of body_children) { module.before(child); }

            // console.log(module_document.querySelectorAll('script'));

            module_document.querySelectorAll('script').forEach(script =>
            {
                if (!script.src) return;

                const script_element = document.createElement('script');
                script_element.src = script.src;
                //document.querySelector('head').appendChild(script);
                // script_element.onload.call();

                module.after(script_element);

                // console.log(script_element);
            });

            const head_children = module_document.querySelector('head').children;
            for (const child of head_children) { document.querySelector('head').appendChild(child); }

            
            
            // module.insertAdjacentHTML('afterend', data);
        }
        else
        {
            module.after(module_document.querySelector(url[1]));
        }

        module.remove();
    });
});

function load_file(file_name, callback) 
{
    fetch(file_name).then(response => response.text()).then(text => callback(text));
}
