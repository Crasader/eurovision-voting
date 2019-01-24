<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index()
    {
        $contires = Country::select('name')
                            ->get();

        return $contires->toJson();
    }

    public function voteStatus()
    {
        $contires = Country::select('name', 'has_voted')
                            ->get();

        return $contires->toJson();
    }

    public function results()
    {
        $contires = Country::get();

        return $contires->toJson();
    }
}
