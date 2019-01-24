<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $fillable = ['country_id', 'point_1', 'point_2', 'point_3', 'point_4', 'point_5', 'point_6', 'point_7', 'point_8', 'point_10', 'point_12'];
    protected $casts = [
        'country_id' => 'integer',
        'point_1' => 'integer',
        'point_2' => 'integer',
        'point_3' => 'integer',
        'point_4' => 'integer',
        'point_5' => 'integer',
        'point_6' => 'integer',
        'point_7' => 'integer',
        'point_8' => 'integer',
        'point_10' => 'integer',
        'point_12' => 'integer'
    ];
}
