<?php

namespace App\Actions;

use App\File;
use Lorisleiva\Actions\Action;

class CreateFile extends Action
{
    /**
     * Get the validation rules that apply to the action.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'file_name' => 'required',
            'file_slug' => 'required',
        ];
    }

    /**
     * Create a new file in the database.
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function handle()
    {
        return File::create($this->validated());
    }
}
