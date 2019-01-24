<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index()
    {
        $contires = Country::select('id', 'name')
                            ->get();

        return $contires->toJson();
    }

    public function voteStatus()
    {
        $contires = Country::select('id', 'name', 'has_voted')
                            ->get();

        return $contires->toJson();
    }

    public function results()
    {
        $contires = Country::orderBy('score', 'desc')->get();

        return $contires->toJson();
    }
}
