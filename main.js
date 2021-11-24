
var formBtn = document.getElementById('formulario').elements;
var link = document.getElementById('linkSite');
		
formBtn['btnEnter'].onclick = function ()
{ 
	matr = formBtn['matriculaUFC'].value;
	if (matr == 'user')
	{
		alert('Entrou!');
		link.href = 'dashboardUSER.html';
		matr = '';
		
	}
	
	else if (matr == 'admin')
	{
		alert('Entrou!');
		link.href = 'dashboardADMIN.html';
		matr = '';
	}	
	
	else
	{
		alert('Nome de usuario inválido');
		link.href = '';
		matr = '';
	}
}
