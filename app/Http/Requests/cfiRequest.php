<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class cfiRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
	        'nume' => 'required',
	        'prenume' => 'required',
	        'loc' => 'required',
            'email' => 'required|email',
	        'telefon' => 'required|tel'
        ];
    }
}
