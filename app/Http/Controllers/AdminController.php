<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addTag(Request $request){

        $request->validate([
            'tagName'=> 'required'
        ]);
      
        return Tag::create([
            'tagName'=>$request->tagName
        ]);
    }

    public function getTag(Request $request){
      
        return Tag::orderBy('id', 'desc')->get();
    }

    public function editTag(Request $request){
        $request->validate([
            'tagName'=> 'required'
        ]);

        $tag = Tag::find($request->id);
        $tag->tagName = $request->tagName;
        if($tag->save()){
            return response()->json([
                'tagName'=>$request->tagName,
                'id'=>$request->id
            ]);
        }
    }

    public function deleteTag(Request $request){
        return Tag::where('id', $request->id)->delete();
    }
}
