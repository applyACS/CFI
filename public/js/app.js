$(document).ready(function(){
    if (window.location.hash != null && window.location.hash != '') 
        $('body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 2500);
	$('.nr').on('change', function(){

		switch ($(this).find(":selected").val()){

			case "":
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<label>Alegeţi numărul de persoane pe care doriţi să le înscrie-ţi.</label>');
				$('.submit').addClass('hidden');
				break;
			default:
				$('.formular').find('*').not('.token').remove();
				$('.formular').append('<div class="form-group">'
						+'<input name="_token" type="hidden" value="{{ csrf_token() }}" />'
						+'<label for="nume">Nume *</label>'
						+'<input class="form-control" type="text" name="nume" required>'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="prenume">Prenume *</label>'
						+'<input class="form-control" type="text" name="prenume" required>'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="loc">Localitate *</label>'
						+'<input class="form-control" type="text" name="loc" required>'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="email">Email *</label>'
						+'<input class="form-control is-invalid" type="email" name="email" required>'
						+'</div>'
						+'<div class="form-group">'
						+'<label for="tel">Telefon</label>'
						+'<input class="form-control" type="tel" name="tel">'
						+'</div>'
						//
						);
				if ($(this).find(":selected").val() > 1){
					for (var index = 1; index < $(this).find(":selected").val(); index++) {
						i = index + 1;
						$('.formular').append('<hr><label class="form-group">Persoana '+i+'</label>'
											+'<div class="form-group">'
											+'<label for="nume'+i+'">Nume</label>'
											+'<input class="form-control" type="text" name="nume'+i+'">'
											+'</div>'
											+'<div class="form-group">'
											+'<label for="prenume'+i+'">Prenume</label>'
											+'<input class="form-control" type="text" name="prenume'+i+'">'
											+'</div>');
						
					}
				}
				$('.submit').removeClass('hidden');
				break;
			}
		});
/**
 * Inscriere
 */
 function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

	$('.submit').on('click', function(){
		$("input[name='loc']").removeClass('invalid');
		$("input[name='email']").removeClass('invalid');

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
			$("input[name='loc']").addClass('invalid');
			eroare = true;
		}
		if(!isValidEmailAddress(email)){
			$("input[name='email']").addClass('invalid');
			eroare = true;
		}
		if(eroare){
			$('.text-danger').removeClass('hidden');
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
					setTimeout(function() {
						  window.location.href = "http://cfi.flacarainchinarii.ro/#scrollDown";
						}, 4000);
					//location.href = "http://cfi.flacarainchinarii.ro/";
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