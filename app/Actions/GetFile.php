<?php

namespace App\Actions;

use App\File;
use Lorisleiva\Actions\Action;

class GetFile extends Action
{
    /**
     * Determine if the user is authorized to make this action.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

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
     * Retrieve the file including the AWS S3 tags and meta data.
     *
     * @return array
     */
    public function handle(File $file)
    {
        $s3Client = \App::make('aws')->createClient('s3');

        $meta = $s3Client->headObject([
            'Bucket' => env('MIX_AWS_BUCKET'),
            'Key' => $file->file_slug,
        ]);

        $tags = $s3Client->getObjectTagging([
            'Bucket' => env('MIX_AWS_BUCKET'),
            'Key' => $file->file_slug,
        ]);

        return array_merge($meta->toArray(), $tags->toArray(), $file->toArray());
    }
}
