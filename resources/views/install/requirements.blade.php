<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CFI - System Check Requirements</title>
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
                    <div id="system_details">
                        <div class="callout callout-info">
                            <h4>Minimum System Requirements</h4>
                        </div>

                        <?php $flag= true; ?>
                        <ul>
                            <li>
                                @if(version_compare(phpversion(),"5.4",">="))
                                <i class="glyphicon glyphicon-ok"></i> PHP Version Compatible
                                @else
                                <?php $flag = false; ?>
                                <i class="glyphicon glyphicon-remove"></i> PHP Version Not Compatible
                                @endif
                            </li>

                            <li>
                                @if(extension_loaded('pdo'))
                                <i class="glyphicon glyphicon-ok"></i>  PDO Enabled
                                @else
                                <?php $flag = false; ?>
                                <i class="glyphicon glyphicon-remove"></i> PDO Disabled
                                @endif
                            </li>

                            <li>
                                @if(extension_loaded('mcrypt'))
                                <i class="glyphicon glyphicon-ok"></i>   Mcrypt Extension Enabled
                                @else
                                <?php $flag = false; ?>
                                <i class="glyphicon glyphicon-remove"></i> Mcrypt Extension Disabled
                                @endif
                            </li>
                            <li>
                                @if(extension_loaded('gd'))
                                <i class="glyphicon glyphicon-ok"></i> GD Extension Enabled
                                @else
                                <?php $flag = false; ?>
                                <i class="glyphicon glyphicon-remove"></i> GD Extension Disabled
                                @endif
                            </li>
                            <li>
                                @if(extension_loaded('openssl'))
                                <i class="glyphicon glyphicon-ok"></i> OpenSSL Extension Enabled
                                @else
                                <?php $flag = false; ?>
                                <i class="glyphicon glyphicon-remove"></i> OpenSSL Extension Disabled
                                @endif
                            </li>
                            <li>
                                @if(extension_loaded('mbstring'))
                                <i class="glyphicon glyphicon-ok"></i> Mbstring Extension Enabled
                                @else
                                <?php $flag = false; ?>
                                <i class="glyphicon glyphicon-remove"></i> Mbstring Extension Disabled
                                @endif
                            </li>
                            <li>
                                @if(extension_loaded('tokenizer'))
                                <i class="glyphicon glyphicon-ok"></i> Tokenizer Extension Enabled
                                @else
                                <?php $flag = false; ?>
                                <i class="glyphicon glyphicon-remove"></i> Tokenizer Extension Disabled
                                @endif
                            </li>

<!--                             <li> -->
<!--                                 @if(is_writable) -->
<!--                                 <i class="glyphicon glyphicon-ok"></i> app/img/uploads folder is Writable -->
<!--                                 @else -->
                                <?php //$flag = false; ?>
<!--                                 <i class="glyphicon glyphicon-remove"></i> app/img/uploads folder is not Writable -->
<!--                                 @endif -->
<!--                             </li> -->
                        </ul>

                    </div><!-- /.table-responsive -->
                </div><!-- /.box-body -->
                <div class="box-footer clearfix hide" id="box-footer">
                    @if($flag == false)
                        {!!  Form::submit('Correct errors and try again', ['class' => 'btn-flat btn btn-danger', 'onClick'=>"location.reload(true)"]) !!}
                    @else
                        <a href="{{url('install/database')}}" class="btn btn-flat btn-success"> Let's Begin ! </a>
                    @endif
                </div><!-- /.box-footer -->
            </div><!-- /.box -->
        </div><!-- /.col -->
    </div>
</div>
@include('install.partials.scripts')
<script>
    $(document).ready(function() {
        showListItems();
    });
    var i = 0;
    function showListItems() {
        $("ul li:hidden:first").fadeIn("slow", function() {
            i=i+1;
            var result = setTimeout(showListItems, 500);
            if(i==8)
            {
                $('#box-footer').removeClass('hide');
            }
        });
    }
</script>

</body>
</html>
