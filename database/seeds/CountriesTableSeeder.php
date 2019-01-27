<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insert([
            [
                'name' => 'Andorra',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Armenia',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Serbia',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Belarus',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Cyprus',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Greece',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Iceland',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Ireland',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Moldova',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Romania',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Croatia',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Portugal',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Denmark',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Sweden',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'San Marino',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Poland',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Latvia',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Estonia',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Ukraine',
                'score' => 0,
                'has_voted' => 0
            ],[
                'name' => 'Austria',
                'score' => 0,
                'has_voted' => 0
            ]
        ]);
    }
}
