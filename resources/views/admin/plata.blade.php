@extends('app')

@section('content')
<div class="row">
	<div class="col-md-10">
    <input type="text" class="search form-control" placeholder="Search">
    </div>
    <div class="col-md-1">
    <button class="btn btn-primary validare">Validare</button>
    </div>
    <div class="col-md-1">
    <button class="btn btn-danger invalidare">Invalidare</button>
    </div>
</div>
<span class="counter pull-right"></span>
<div class="alert alert-success alert-dismissible fade in hidden" role="alert">
	<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
		<h4>Operaţie înregistrată!</h4>
</div>
<div class="alert alert-danger alert-dismissible fade in hidden" role="alert">
	<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
		<h4>Oups! A apărut o eroare!</h4>
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
            <th data-field="email">Biserica</th>
            <th data-field="tel">Avans</th>
        </tr>
        <tr class="warning no-result">
	      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
	    </tr>
    </thead>
	    @foreach ($all as $key => $al)
		    <tr @if ($al->validare_plata == 1) class="success" @else class="danger" @endif>
		    	<th><input type="checkbox" data-id="{{ $al->id }}"/></th>
		    	<th>{{ $key+1 }}</th>
		         <th>{{ $al->nume }}</th>
		         <th>{{ $al->prenume }}</th>
		         <th>{{ $al->localitatea }}</th>
		         <th>{{ $al->biserica }}</th>
		         <th>{{ $al->avans }}</th>
		    </tr>
	    @endforeach
	</table>
</div>
    <!-- Modal validare -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title">Validare plată</h4>
	      </div>
	      <div class="modal-body">
	        <p>Sunteţi sigur?</p>
	        <input class="ids hidden" name="ids[]" value=""/>
	        <input name="_token" class="token" type="hidden" value="{{ $xsrf_token }}" />
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Nu</button>
	        <button type="button" class="btn btn-primary save">Da</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	<!-- Modal invalidare -->
    <div class="modal fade" id="inModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title">Invalidare plată</h4>
	      </div>
	      <div class="modal-body">
	        <p>Sunteţi sigur?</p>
	        <input class="ids hidden" name="ids[]" value=""/>
	        <input name="_token" class="token" type="hidden" value="{{ $xsrf_token }}" />
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Nu</button>
	        <button type="button" class="btn btn-primary insave">Da</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
@stop