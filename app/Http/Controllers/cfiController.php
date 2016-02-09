<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Cfi;
use App\Http\Requests\cfiRequest;
use Response;

class cfiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('cfi.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    	$xsrfToken = app('Illuminate\Encryption\Encrypter')->encrypt(csrf_token());
        return view('cfi.create')->with('xsrf_token', $xsrfToken);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(cfiRequest $request)
    {
        $pers = $request['pers'];
        $nume = $request['nume'];
        $prenume = $request['prenume'];
        $loc = $request['loc'];
        $email = $request['email'];
        $tel = $request['tel'];
        //$i = 0;
        for ($i=0; $i<$pers; $i++){
        	$cfi = new Cfi;
        	$cfi->nume = $nume[$i];
        	$cfi->prenume = $prenume[$i];
        	$cfi->localitatea = $loc;
        	$cfi->email = $email;
        	$cfi->telefon = $tel;
        	$cfi->save();
        }
        $response = array(
        		'status' => 'success',
        		'msg' => $pers,
        );
        return $cfi;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $all = Cfi::all();
        //return $all;
        return view('cfi.show', compact('all'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Plata
     */

    public function plata()
    {
    	$xsrfToken = app('Illuminate\Encryption\Encrypter')->encrypt(csrf_token());
    	$all = Cfi::all();
    	return view('admin.plata', compact('all'))->with('xsrf_token', $xsrfToken);
    }

    public function updatePlata()
    {
    	$ids = $_POST['ids'];
    	foreach ($ids as $id){
    		$cfi = Cfi::findOrFail($id);

    		$cfi->validare_plata = '1';
    		$cfi->save();
    	}
    	return 'done';
    }
    public function updateInPlata()
    {
    	$ids = $_POST['ids'];
    	foreach ($ids as $id){
    		$cfi = Cfi::findOrFail($id);

    		$cfi->validare_plata = '0';
    		$cfi->save();
    	}
    	return 'done';
    }
    /**
     * Receptie
     */
    public function receptie()
    {
    	$xsrfToken = app('Illuminate\Encryption\Encrypter')->encrypt(csrf_token());
    	$all = Cfi::all();
    	return view('admin.receptie', compact('all'))->with('xsrf_token', $xsrfToken);
    }
    public function updateReceptie()
    {
    	$ids = $_POST['ids'];
    	foreach ($ids as $id){
    		$cfi = Cfi::findOrFail($id);

    		$cfi->receptie = '1';
    		$cfi->save();
    	}
    	return 'done';
    }
}
