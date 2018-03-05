<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'text', 'url', 'thumbnail_url', 'active'];
}
