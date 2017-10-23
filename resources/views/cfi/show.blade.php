@extends('app')

@section('content')
<div class="content">
<div class="panel panel-danger">
		<div class="panel-heading text-center">
		<!--<h2>Înscrierile online s-au încheiat!</h2>-->
			<!--<h4><i class="fa fa-info-circle" aria-hidden="true"></i> Plata taxei de participare se va face în maximum 3 zile la Banca Transilvania, în contul RO05BTRL00104205N75976XX, deschis pe Asociația Centrul Creștin Alba Iulia. La explicaţii, treceţi donaţie din partea lui… (treceţi numele dumneavoastră). </h4>-->
			<h4><i class="fa fa-info-circle" aria-hidden="true"></i> Înscrierile online s-au încheiat! Vă puteți înscrie și la recepția conferinței, taxa fiind de 35 lei! </h4>
		</div>
</div>
<div class="panel panel-info" >
		<div class="panel-heading">
			<i class="fa fa-info-circle" aria-hidden="true"></i> Ne puteți contacta pentru orice neînțelegeri
		</div>
		<div class="panel-body">
			
			<ul>
				<li>online: <a href="http://conferinta.flacarainchinarii.ro/#contact">conferinta.flacarainchinarii.ro</a></li>
				<li>la telefon: Cristian Alexandru - <a href="tel:0758936019">0758936019</a></li>
			<ul>
			
		</div>
	</div>

@if (Auth::guest())
@else

    <div class="table-responsive">
    <table class="table table-bordered table-hover">
    <thead>
        <tr>
            <th data-field="id">No.</th>
            <th data-field="nume">Nume</th>
            <th data-field="prenume">Prenume</th>
            <th data-field="loc">Localitate</th>
        </tr>
    </thead>
	    <tbody>
		    @foreach ($all as $key => $al)
			    <tr>
			    	<th>{{ $key+1 }}</th>
			         <th>{{ $al->nume }}</th>
			         <th>{{ $al->prenume }}</th>
			         <th>{{ $al->localitatea }}</th>
			    </tr>
		    @endforeach
	    </tbody>
	</table>
    </div>
	
	</div>
@endif
<div id="scrollDown"></div>
	
	<style>
	#footer {
	position:absolute;
	bottom:0;
	width: 61%;
	}
	</style>
@stop