<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    // Define the table associated with the model
    protected $table = 'admins';

    // Define the fillable columns (mass assignable)
    protected $fillable = [
        'name', 'email', 'password','address','contact',
    ];

    // Define any additional model logic, such as relationships or custom methods
}
