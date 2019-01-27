<?php

namespace App\Http\Controllers;

use App\Vote;
use App\Country;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function index()
    {
        $votes = Vote::get();

        return $votes->toJson();
    }

    public function vote(Request $request)
    {
        // validate input
        $validatedData = $request->validate([
            'country_id' => 'required',
            'point_1' => 'required',
            'point_2' => 'required',
            'point_3' => 'required',
            'point_4' => 'required',
            'point_5' => 'required',
            'point_6' => 'required',
            'point_7' => 'required',
            'point_8' => 'required',
            'point_10' => 'required',
            'point_12' => 'required'
        ]);

        $votingCountry = Country::findOrFail($validatedData['country_id']);

        // check if country has voted
        if ($votingCountry->has_voted) {
            return response()->json('This country voted!');
        }
        
        // create new vote
        $vote = Vote::create([
            'country_id' => $validatedData['country_id'],
            'point_1' => $validatedData['point_1'],
            'point_2' => $validatedData['point_2'],
            'point_3' => $validatedData['point_3'],
            'point_4' => $validatedData['point_4'],
            'point_5' => $validatedData['point_5'],
            'point_6' => $validatedData['point_6'],
            'point_7' => $validatedData['point_7'],
            'point_8' => $validatedData['point_8'],
            'point_10' => $validatedData['point_10'],
            'point_12' => $validatedData['point_12']
        ]);

        // update contries scores
        for($i = 1; $i <= 10; $i++)
        {
            $point = $i;

            if ($i >= 9) 
            {
                switch($i)
                {
                    case 9: $point++; break;
                    case 10: $point+=2; break;
                }
            }

            $pointColumn = 'point_' . $point ;

            $country = Country::findOrFail($validatedData[$pointColumn]);
            $country->score += $point;
            $country->save();
        }

        // contry has voted
        $votingCountry->has_voted = true;
        $votingCountry->save();

        return response()->json('Vote accepted!');
    }
}
