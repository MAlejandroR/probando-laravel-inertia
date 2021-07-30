<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ControllerPpal extends Controller
{
    //
public function index(){
    $num = rand(1,50);
    return Inertia::render('ppal',['num'=>$num]);

}
}
