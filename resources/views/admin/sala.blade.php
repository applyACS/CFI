@extends('app')

@section('content')
<div class="row">
	<div class="col-md-12">
    <input type="text" class="search form-control" placeholder="Search">
    </div>
</div>

<div class="table-responsive">
    <table class="table table-bordered table-hover results">
    <thead>
        <tr class="info">
        	<th data-field="select"></th>
            <th data-field="id">No.</th>
            <th data-field="nume">Nume</th>
            <th data-field="prenume">Prenume</th>
            <th data-field="loc">Localitate</th>
            <th data-field="email">Email</th>
            <th data-field="tel">Telefon</th>
        </tr>
        <tr class="warning no-result">
	      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
	    </tr>
    </thead>
	    @foreach ($all as $key => $al)
	    
		    <tr  class="success" >
		    	<th><input type="checkbox" data-id="{{ $al->id }}"/></th>
		    	<th>{{ $key+1 }}</th>
		         <th>{{ $al->nume }}</th>
		         <th>{{ $al->prenume }}</th>
		         <th>{{ $al->localitatea }}</th>
		         <th>{{ $al->email }}</th>
		         <th>{{ $al->telefon }}</th>
		    </tr>
		 
	    @endforeach
	</table>
</div>

@stop