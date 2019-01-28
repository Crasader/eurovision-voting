# Eurovision voting
Eurovision voting made in Laravel/React/SQLite.

## Installing
1. Clone repo on your PC: `git clone https://github.com/dejsan/eurovision-voting.git`
2. Run `cd eurovision-voting` to enter the project's root folder
3. Run `cp .env.example .env` to create .env file
4. Run `composer update` to download php dependencies
5. Run `php artisan key:generate` to generate app key 
6. Run `npm install` to download js dependencies
7. Create `eurovision-voting/database/database.sqlite` file
7. Run `php artisan migrate` to create database tables
8. Run `php artisan db:seed` to populate database tables
9. Run `npm run dev` or `npm run production` to build react app
10. Run `php artisan serve` to start PHP Built-in Webserver
11. Open app in browser. (url of app will be shown in console) :)