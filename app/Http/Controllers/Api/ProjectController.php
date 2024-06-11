<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Project;

class ProjectController extends Controller
{
    public function index(){
        $projects = Project::with('type')->get();
        //dd($projects);
        return response()->json([
            'status' => 'success',
            'message' => 'Ok',
            'results' => $projects
        ], 200);
    }

    public function show($slug){
        //query with slug
        $project = Project::where('slug', $slug)
        //eager loading of relationships; otherwise, no info about the relationship! 
            //there are other ways to eager load
        ->with('type','technologies')
        //take the first result
        ->first();
        if($project){
            return response()->json([
                'status' => 'success',
                'message' => 'Ok',
                'results' => $project
            ],
            //code of success
                200);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'Error',
            ],
            //code of error
                404);
        }
        
    }
}
