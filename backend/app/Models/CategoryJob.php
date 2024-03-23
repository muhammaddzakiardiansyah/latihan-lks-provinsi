<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryJob extends Model
{
    use HasFactory;

    protected $table = 'job_categories', $guarded = ['id'];
    public $timesTamps = false;
}
