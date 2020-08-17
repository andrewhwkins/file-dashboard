<?php

namespace App\Actions;

use App\File;
use Lorisleiva\Actions\Action;

class DeleteFile extends Action
{

    /**
     * Get the validation rules that apply to the action.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'file' => 'required',
        ];
    }

    /**
     * Delete the file from storage / database and return the result.
     *
     * @param \Illuminate\Database\Eloquent\Model
     * @return bool
     */
    public function handle(File $file)
    {

        $s3Client = \App::make('aws')->createClient('s3');

        $result = $s3Client->deleteObject([
            'Bucket' => env('MIX_AWS_BUCKET'),
            'Key' => $file->file_slug,
        ]);

        $isFileDeleted = isset($result['@metadata']) && isset($result['@metadata']['statusCode']) && $result['@metadata']['statusCode'] === 204;

        $isDataDeleted = File::destroy($file->id);

        return $isFileDeleted && $isDataDeleted;

    }
}
