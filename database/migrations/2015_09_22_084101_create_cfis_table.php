<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CfiInscris extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	Schema::create('cfis', function (Blueprint $table) {
    		$table->increments('id');
    		$table->string('nume');
    		$table->string('prenume');
    		$table->string('localitatea');
    		$table->string('email');
    		$table->string('telefon');
    		$table->string('id_lider');
    		$table->boolean('validare_plata')->default('0');
    		$table->boolean('receptie')->default('0');
    		$table->timestamps();
    	});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    	Schema::drop('cfis');
    }
}
