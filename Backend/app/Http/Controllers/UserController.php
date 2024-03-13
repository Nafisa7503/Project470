<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    public function register(Request $request)
    {
        $user=User::create([
            'name' => $request->input('name'),
            'contact' => $request->input('contact'),
            'email' =>$request->input('email'),
            'password' => Hash::make($request->input('password')) 
        ]);
        return response()->json("success");
    }
}
