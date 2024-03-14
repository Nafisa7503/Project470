<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\login;
use Illuminate\Support\Facades\Hash;
class loginController extends Controller
{
    public function login(Request $request)
    {
        $user=User::create([
            'name' => $request->input('name'),
            'password' => Hash::make($request->input('password')) 
        ]);
        return response()->json(" Login success");
    }
}