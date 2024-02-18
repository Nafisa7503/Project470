<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $user=User::create([
            'name' => $request->input('name'),
            'contact' => $request->input('contact'),
            'email' =>$request->input('email'),
            'password' => Hash::make($request->input('password')) 
        ]);
    
    }
}
