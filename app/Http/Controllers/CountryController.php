<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::select('id', 'name', 'has_voted')
                            ->get();

        return $countries->toJson();
    }

    public function results()
    {
        $countries = Country::orderBy('score', 'desc')->get();

        return $countries->toJson();
    }
}
