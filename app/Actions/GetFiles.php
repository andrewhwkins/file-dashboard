<?php

namespace App\Actions;

use App\File;
use Lorisleiva\Actions\Action;

class GetFiles extends Action
{

    /**
     * Retrieve all files order by created date.
     *
     * @return mixed
     */
    public function handle()
    {
        return File::orderBy('created_at', 'desc')->get();
    }
}
