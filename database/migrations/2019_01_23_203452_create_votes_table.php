<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('votes', function (Blueprint $table) {
            $table->increments('id');
            $table->smallInteger('country_id');
            $table->smallInteger('point_1')->default(0);
            $table->smallInteger('point_2')->default(0);
            $table->smallInteger('point_3')->default(0);
            $table->smallInteger('point_4')->default(0);
            $table->smallInteger('point_5')->default(0);
            $table->smallInteger('point_6')->default(0);
            $table->smallInteger('point_7')->default(0);
            $table->smallInteger('point_8')->default(0);
            $table->smallInteger('point_10')->default(0);
            $table->smallInteger('point_12')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('votes');
    }
}
