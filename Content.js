function toggleTheme() 
{
    var theme = document.getElementsByTagName('link')[0]; 

    if (theme.getAttribute('href') == 'Content_dark.css')  
        theme.setAttribute('href', 'Content_light.css'); 
    else
        theme.setAttribute('href', 'Content_dark.css'); 
}

function toggleName()
{
    var name = document.getElementById("button");

    if(name.textContent === 'Light')
        name.textContent = 'Dark';
    else
        name.textContent = 'Light';
}