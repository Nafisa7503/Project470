<?php

namespace App\Http\Controllers;

use App\Models\TravelPackages;
use App\Http\Requests\StoreTravelPackagesRequest;
use App\Http\Requests\UpdateTravelPackagesRequest;

class TravelPackagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTravelPackagesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTravelPackagesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TravelPackages  $travelPackages
     * @return \Illuminate\Http\Response
     */
    public function show(TravelPackages $travelPackages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TravelPackages  $travelPackages
     * @return \Illuminate\Http\Response
     */
    public function edit(TravelPackages $travelPackages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTravelPackagesRequest  $request
     * @param  \App\Models\TravelPackages  $travelPackages
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTravelPackagesRequest $request, TravelPackages $travelPackages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TravelPackages  $travelPackages
     * @return \Illuminate\Http\Response
     */
    public function destroy(TravelPackages $travelPackages)
    {
        //
    }
}
