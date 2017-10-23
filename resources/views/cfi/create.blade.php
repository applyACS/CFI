@extends('app')

@section('content')
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-69336484-1', 'auto');
  ga('send', 'pageview');

</script>
<div class="panel panel-info">
		<div class="panel-heading text-center">
<h3><i class="fa fa-info-circle" aria-hidden="true"></i> Dacă întâmpinaţi probleme vă rugăm să ne contactaţi pe email: <a href="mailto:flacarainchinarii@gmail.com" target="_top">flacarainchinarii@gmail.com</a>!</h3>
<h4><i class="fa fa-info-circle" aria-hidden="true"></i> Vă rugăm să vă asiguraţi că nu sunteţi înscris deja!</h4>
</div>
</div>
<h2 class="text-success hidden">Persoanele au fost înregistrate!</h2>
<h2 class="text-danger hidden">Oups! Ceva nu este completat corect. Va rugam verificaţi datele!</h2>
	<div><label for="pers">Numărul de persoane:</label>
		<select class="form-control nr" id="pers">
			<option value="">Selectaţi numărul de persoane</option>
			<?php for ($i=1;$i<=30;$i++){?>
			<option value="<?php echo $i;?>"><?php echo $i;?></option>
<!-- 			<option value="2">2</option> -->
<!-- 			<option value="3">3</option> -->
<!-- 			<option value="4">4</option> -->
<!-- 			<option value="5">5</option> -->
<!-- 			<option value="6">6</option> -->
<!-- 			<option value="7">7</option> -->
<!-- 			<option value="8">8</option> -->
<!-- 			<option value="9">9</option> -->
<!-- 			<option value="10">10</option> -->
<!-- 			<option value="10">10</option> -->
			<?php }?>
		</select>
	</div>
	<div class="forma">
		<form class="formular was-validated" id="needs-validation" role="form" type="submit">
		<input name="_token" class="token" type="hidden" value="{{ $xsrf_token }}" />

		</form>
		<button type="button" class="btn btn-default submit hidden">Submit</button>
	</div>

@stop