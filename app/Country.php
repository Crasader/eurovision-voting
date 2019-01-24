<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = ['name', 'score', 'has_voted'];
    protected $casts = [
        'score' => 'integer',
        'has_voted' => 'boolean'
    ];
}
