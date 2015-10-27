$(document).ready(function(){
	$('.nr').on('change', function(){

		switch ($(this).find(":selected").val()){

			case "":
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<label>Alegeţi numărul de persoane pe care doriţi să le înscrie-ţi.</label>');
				$('.submit').addClass('hidden');
				break;
			case '1':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<input name="_token" type="hidden" value="{{ csrf_token() }}" />'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						//
						);
				$('.submit').removeClass('hidden');
				break;
			case '2':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '3':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '4':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 4</label>'
						+'<div class="form-group">'
						+'<label for="nume4">Nume</label>'
						+'<input class="form-control" type="text" name="nume4">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume4">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume4">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '5':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 4</label>'
						+'<div class="form-group">'
						+'<label for="nume4">Nume</label>'
						+'<input class="form-control" type="text" name="nume4">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume4">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume4">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 5</label>'
						+'<div class="form-group">'
						+'<label for="nume5">Nume</label>'
						+'<input class="form-control" type="text" name="nume5">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume5">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume5">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '6':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 4</label>'
						+'<div class="form-group">'
						+'<label for="nume4">Nume</label>'
						+'<input class="form-control" type="text" name="nume4">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume4">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume4">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 5</label>'
						+'<div class="form-group">'
						+'<label for="nume5">Nume</label>'
						+'<input class="form-control" type="text" name="nume5">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume5">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume5">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 6</label>'
						+'<div class="form-group">'
						+'<label for="nume6">Nume</label>'
						+'<input class="form-control" type="text" name="nume6">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume6">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume6">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '7':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 4</label>'
						+'<div class="form-group">'
						+'<label for="nume4">Nume</label>'
						+'<input class="form-control" type="text" name="nume4">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume4">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume4">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 5</label>'
						+'<div class="form-group">'
						+'<label for="nume5">Nume</label>'
						+'<input class="form-control" type="text" name="nume5">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume5">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume5">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 6</label>'
						+'<div class="form-group">'
						+'<label for="nume6">Nume</label>'
						+'<input class="form-control" type="text" name="nume6">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume6">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume6">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 7</label>'
						+'<div class="form-group">'
						+'<label for="nume7">Nume</label>'
						+'<input class="form-control" type="text" name="nume7">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume7">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume7">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '8':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 4</label>'
						+'<div class="form-group">'
						+'<label for="nume4">Nume</label>'
						+'<input class="form-control" type="text" name="nume4">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume4">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume4">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 5</label>'
						+'<div class="form-group">'
						+'<label for="nume5">Nume</label>'
						+'<input class="form-control" type="text" name="nume5">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume5">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume5">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 6</label>'
						+'<div class="form-group">'
						+'<label for="nume6">Nume</label>'
						+'<input class="form-control" type="text" name="nume6">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume6">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume6">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 7</label>'
						+'<div class="form-group">'
						+'<label for="nume7">Nume</label>'
						+'<input class="form-control" type="text" name="nume7">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume7">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume7">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 8</label>'
						+'<div class="form-group">'
						+'<label for="nume8">Nume</label>'
						+'<input class="form-control" type="text" name="nume8">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume8">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume8">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '9':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 4</label>'
						+'<div class="form-group">'
						+'<label for="nume4">Nume</label>'
						+'<input class="form-control" type="text" name="nume4">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume4">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume4">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 5</label>'
						+'<div class="form-group">'
						+'<label for="nume5">Nume</label>'
						+'<input class="form-control" type="text" name="nume5">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume5">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume5">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 6</label>'
						+'<div class="form-group">'
						+'<label for="nume6">Nume</label>'
						+'<input class="form-control" type="text" name="nume6">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume6">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume6">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 7</label>'
						+'<div class="form-group">'
						+'<label for="nume7">Nume</label>'
						+'<input class="form-control" type="text" name="nume7">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume7">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume7">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 8</label>'
						+'<div class="form-group">'
						+'<label for="nume8">Nume</label>'
						+'<input class="form-control" type="text" name="nume8">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume8">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume8">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 9</label>'
						+'<div class="form-group">'
						+'<label for="nume9">Nume</label>'
						+'<input class="form-control" type="text" name="nume9">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume9">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume9">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			case '10':
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<label for="nume">Nume</label>'
						+'<input class="form-control" type="text" name="nume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate</label>'
						+'<input class="form-control" type="text" name="loc">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email</label>'
						+'<input class="form-control" type="email" name="email">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 2</label>'
						+'<div class="form-group">'
						+'<label for="nume2">Nume</label>'
						+'<input class="form-control" type="text" name="nume2">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume2">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume2">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 3</label>'
						+'<div class="form-group">'
						+'<label for="nume3">Nume</label>'
						+'<input class="form-control" type="text" name="nume3">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume3">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume3">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 4</label>'
						+'<div class="form-group">'
						+'<label for="nume4">Nume</label>'
						+'<input class="form-control" type="text" name="nume4">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume4">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume4">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 5</label>'
						+'<div class="form-group">'
						+'<label for="nume5">Nume</label>'
						+'<input class="form-control" type="text" name="nume5">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume5">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume5">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 6</label>'
						+'<div class="form-group">'
						+'<label for="nume6">Nume</label>'
						+'<input class="form-control" type="text" name="nume6">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume6">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume6">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 7</label>'
						+'<div class="form-group">'
						+'<label for="nume7">Nume</label>'
						+'<input class="form-control" type="text" name="nume7">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume7">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume7">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 8</label>'
						+'<div class="form-group">'
						+'<label for="nume8">Nume</label>'
						+'<input class="form-control" type="text" name="nume8">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume8">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume8">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 9</label>'
						+'<div class="form-group">'
						+'<label for="nume9">Nume</label>'
						+'<input class="form-control" type="text" name="nume9">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume9">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume9">'
						+'</div>'
						+'<hr><label class="form-group">Persoana 10</label>'
						+'<div class="form-group">'
						+'<label for="nume10">Nume</label>'
						+'<input class="form-control" type="text" name="nume10">'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume10">Prenume</label>'
						+'<input class="form-control" type="text" name="prenume10">'
						+'</div>'
						);
				$('.submit').removeClass('hidden');
				break;
			}
		});
/**
 * Inscriere
 */
	$('.submit').on('click', function(){
		var nume = [];
		var prenume = [];
		var loc, email, tel;
		var eroare = false;
		$("input[name^='nume']").each(function(){
			nume.push($(this).val());
		});
		$("input[name^='prenume']").each(function(){
			prenume.push($(this).val());
		});
		loc = $("input[name='loc']").val();
		email = $("input[name='email']").val();
		tel = $("input[name='tel']").val();
		persoane = $('.nr').find(":selected").val();
		if (nume.length == 0){
			eroare = true;
		}
		if (prenume.length == 0){
			eroare = true;
		}
		if (loc == null || loc == ''){
			eroare == true;
		}

		if (eroare){
			alert('Numele, prenumele și localitatea sunt obligatorii!');
		}else{
			$.ajax({
				type: "POST",
				url: 'store',
				headers: {
					'X-XSRF-TOKEN': $('.token').attr('value')
				},

				data:{	pers:persoane,
						nume:nume,
						prenume:prenume,
						loc:loc,
						email:email,
						tel:tel},
				success: function(data) {
					$('.text-success').removeClass('hidden');
					$('.formular').find('*').not('.token').remove();
					$('.nr').prop('selectedIndex', 0);
					$('.submit').addClass('hidden');
				},
				error: function(){
					$('.text-danger').removeClass('hidden');
					//alert('ajax error!');
				}
			});
		}
	});
	$('.check').on('change', function(){
		if (this.checked){
			$('[type="checkbox"]').prop('checked', true);
		}else{
			$('[type="checkbox"]').prop('checked', false);
		}
	});
	/**
	 * Validare plata
	 */
	$('.validare').on('click', function(){
		var ids = [];
		$('.table').find('[type="checkbox"]').not('.check').each(function(){
			if(this.checked){
				ids.push($(this).data('id'));
			}
		});
		if (ids.length){
			$('#myModal').modal('show');
		}
	});
	$('.save').on('click', function(){
		var ids = [];
		$('.table').find('[type="checkbox"]').not('.check').each(function(){
			if(this.checked){
				ids.push($(this).data('id'));
			}
		});
		$.ajax({
	        type: "POST",
	        url: 'updateplata',
	        headers: {
                'X-XSRF-TOKEN': $('.token').attr('value')
            },

	        data:{	ids:ids},
	        success: function(data) {
//	        	$('.text-success').removeClass('hidden');
//	        	$('.formular').find('*').not('.token').remove();
//	    		$('.nr').prop('selectedIndex', 0);
//	    		$('.submit').addClass('hidden');
	        	//alert(data);

	        	$(".alert-success").removeClass('hidden');
	        	$('#myModal').modal('hide');
	        	location.reload();
	        },
	        error: function(){
	        	//$('.text-danger').removeClass('hidden');
	        	$(".alert-danger").removeClass('hidden');
	        }
	    });
	});

	/**
	 * selectare persoana
	 */
	$('.table > tbody > tr').not('.check').on('click', function(){
		if ($(this).find('[type="checkbox"]').is(':checked')){
			$(this).find('[type="checkbox"]').prop('checked', false);
		}else{
			$(this).find('[type="checkbox"]').prop('checked', true);
		}
	});
	/**
	 * Invalidare
	 */
	$('.invalidare').on('click', function(){
		var ids = [];
		$('.table').find('[type="checkbox"]').not('.check').each(function(){
			if(this.checked){
				ids.push($(this).data('id'));
			}
		});
		if (ids.length){
			$('#inModal').modal('show');
		}
	});
	$('.insave').on('click', function(){
		var ids = [];
		$('.table').find('[type="checkbox"]').not('.check').each(function(){
			if(this.checked){
				ids.push($(this).data('id'));
			}
		});
		$.ajax({
	        type: "POST",
	        url: 'updateinplata',
	        headers: {
                'X-XSRF-TOKEN': $('.token').attr('value')
            },

	        data:{	ids:ids},
	        success: function(data) {
	        	$(".alert-success").removeClass('hidden');
	        	$('#inModal').modal('hide');
	        	location.reload();
	        },
	        error: function(){
	        	$(".alert-danger").removeClass('hidden');
	        }
	    });
	});
	/**
	 * Receptie
	 */
	$('.revalidare').on('click', function(){
		var ids = [];
		$('.table').find('[type="checkbox"]').not('.check').each(function(){
			if(this.checked){
				ids.push($(this).data('id'));
			}
		});
		if (ids.length){
			$('#reModal').modal('show');
		}
	});
	$('.resave').on('click', function(){
		var ids = [];
		$('.table').find('[type="checkbox"]').not('.check').each(function(){
			if(this.checked){
				ids.push($(this).data('id'));
			}
		});
		$.ajax({
	        type: "POST",
	        url: 'updatereceptie',
	        headers: {
                'X-XSRF-TOKEN': $('.token').attr('value')
            },

	        data:{	ids:ids},
	        success: function(data) {
	        	$(".alert-success").removeClass('hidden');
	        	$('#reModal').modal('hide');
	        	location.reload();
	        },
	        error: function(){
	        	$(".alert-danger").removeClass('hidden');
	        }
	    });
	});
	/**
	 * Search
	 */
	$(".search").keyup(function () {
	    var searchTerm = $(".search").val();
	    var listItem = $('.results tbody').children('tr');
	    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

	  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
	        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	    }
	  });

	  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
	    $(this).attr('visible','false');
	  });

	  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
	    $(this).attr('visible','true');
	  });

	  var jobCount = $('.results tbody tr[visible="true"]').length;
	    $('.counter').text(jobCount + ' item');

	  if(jobCount == '0') {$('.no-result').show();}
	    else {$('.no-result').hide();}
	});
});