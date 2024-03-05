<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Societie extends Model
{
    use HasFactory;

    protected $table = 'societies',
              $guarded = ['id'];
    public    $timestamps = false;
    public function region()
    {
        return $this->belongsTo(Region::class, 'regional_id', 'id');
    }
}
