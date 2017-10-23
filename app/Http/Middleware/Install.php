<?php namespace App\Http\Middleware;

use Closure;

class Install {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
    public function handle($request, Closure $next)
    {
        if(\File::exists('config/invoicer.php')){
            return redirect('home');
        }
        return redirect('install');
    }

}
