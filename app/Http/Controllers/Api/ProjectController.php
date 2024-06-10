<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Project;

class ProjectController extends Controller
{
    public function index(){
        $projects = Project::all();
        //dd($projects);
        return response()->json([
            'success' => true,
            'results' => $projects
        ]);
    }

    public function show($slug){
        //query with slug
        $project = Project::where('slug',$slug)
        //eager loading of relationships; otherwise, no info about the relationship! 
            //there are other ways to eager load
        ->with('type','technology')
        //take the first result
        ->first();
        if($project){
            return response()->json([
                'success' => true,
                'results' => $project
            ]);
        }else{
            return response()->json([
                'success' => false,
                'results' => 'Project not found'
            ]);
        }
        
    }
}
