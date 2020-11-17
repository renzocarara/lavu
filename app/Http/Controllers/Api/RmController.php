<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http; // aggiunta per poter fare chiamate http

use App\Http\Resources\RmResource;


class RmController extends Controller
{
    //
     public function index(){

        // questa API ritorna direttamente dei dati, dialoga con il front-end di questa stessa app
        // di solito si scrivono API da esporre verso l'esterno (HTTP)

        // per semplicità leggo dei dati da un API esterna, anzichè da un DB
        $rm=collect(Http::get('https://rickandmortyapi.com/api/character/')->json()['results']);
            
        return ($rm);
    
    }
}
