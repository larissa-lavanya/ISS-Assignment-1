function toggleTheme() 
{
    var theme = document.getElementsByTagName('link')[0]; 

    if (theme.getAttribute('href') == 'Home_dark.css')  
        theme.setAttribute('href', 'Home_light.css'); 
    else
        theme.setAttribute('href', 'Home_dark.css'); 
}

function toggleName()
{
    var name = document.getElementById("button");

    if(name.textContent === 'Light')
        name.textContent = 'Dark';
    else
        name.textContent = 'Light';
}