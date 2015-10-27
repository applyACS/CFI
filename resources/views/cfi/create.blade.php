@extends('app')

@section('content')
<h2 class="text-success hidden">Persoanele au fost înregistrate!</h2>
<h2 class="text-danger hidden">Oups! Toate câmpurile sunt obligatorii!</h2>
	<div><label for="pers">Numărul de persoane:</label>
		<select class="form-control nr" id="pers">
			<option value="">Selectaţi numărul de persoane</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
		</select>
	</div>
	<div class="forma">
		<form class="formular" role="form" type="submit">
		<input name="_token" class="token" type="hidden" value="{{ $xsrf_token }}" />

		</form>
		<button type="button" class="btn btn-default submit hidden">Submit</button>
	</div>

@stop