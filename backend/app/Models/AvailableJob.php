<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AvailableJob extends Model
{
    use HasFactory;

    protected $table = 'available_positions', $guarded = ['id'];
}
