<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Validation extends Model
{
    use HasFactory;

    protected $table = 'validations',
              $guarded = ['id'];
    public $timestamps = false;

    public function validators(): HasMany
    {
        return $this->hasMany(Validator::class, 'id');
    }

    public function jobCategories(): HasOne
    {
        return $this->hasOne(CategoryJob::class, 'id', 'job_category_id');
    }
}
