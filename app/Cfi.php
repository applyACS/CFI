<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cfi extends Model
{
	protected $fillable = [
	'nume',
	'prenume',
	'localitatea',
	'email',
	'telefon'
	];
}
