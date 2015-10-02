@extends('app')

@section('content')
    <div class="content table-responsive">
    <table class="table table-bordered table-hover">
    <thead>
        <tr>
            <th data-field="id">ID</th>
            <th data-field="nume">Nume</th>
            <th data-field="prenume">Prenume</th>
            <th data-field="loc">Localitate</th>
            <th data-field="email">Email</th>
            <th data-field="tel">Telefon</th>
        </tr>
    </thead>
	    <tbody>
		    @foreach ($all as $al)
			    <tr>
			    	<th>{{ $al->id }}</th>
			         <th>{{ $al->nume }}</th>
			         <th>{{ $al->prenume }}</th>
			         <th>{{ $al->localitatea }}</th>
			         <th>{{ $al->email }}</th>
			         <th>{{ $al->telefon }}</th>
			    </tr>
		    @endforeach
	    </tbody>
	</table>
    </div>
@stop