<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class JobVacancy extends Model
{
    use HasFactory;

    protected $table = 'job_vacancies', $guarded = ['id'];

    public $timesTamps = false;

    // relation table available jobs
    public function availableJobs(): HasMany
    {
        return $this->hasMany(AvailableJob::class, 'job_vacancy_id', 'id');
    }

    public function categoryJobs(): HasOne
    {
        return $this->hasOne(CategoryJob::class, 'id', 'job_category_id');
    }
}
