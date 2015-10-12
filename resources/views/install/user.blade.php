<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CFI - Admin Account Creation</title>
    <!-- CSS -->
     @include('install.partials.styles')
</head>
<body class="login-page">
<div class="container">
    <div class="login-logo">
        <b>CFI</b> Installation
    </div><!-- /.login-logo -->

    <div class="row">
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">

                <div class="box-body">
                    <div>
                        <div class="callout callout-info">
                            <h4>Create a user account</h4>
                        </div>
                        @if (count($errors) > 0)
                        {!! form_errors($errors) !!}
                        @endif
                        @if (Session::has('flash_notification.message'))
                        {!! message() !!}
                        @endif

                        {!! Form::open(['url'=>'/install/user']) !!}

                        <div class="form-group">
                            {!! Form::label('name', 'Name') !!}
                            {!! Form::text('name', null, ['class' => 'form-control','required', 'placeholder' => 'name' ]) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('email', 'Email') !!}
                            {!! Form::text('email', null, ['class' => 'form-control','required', 'placeholder' => 'Email' ]) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('password', 'Password') !!}
                            {!! Form::password('password', ['class' => 'form-control','required','placeholder' => 'Password' ]) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('password_confirmation', 'Password') !!}
                            {!! Form::password('password_confirmation', ['class' => 'form-control','required','placeholder' => 'Password' ]) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::submit('Submit', ['class' => 'btn btn-flat btn-success']) !!}
                        </div>

                        {!! Form::close() !!}
                    </div><!-- /.table-responsive -->
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div><!-- /.col -->
    </div>
</div>
@include('install.partials.scripts')

</body>
</html>
