<?php

namespace App\Http\Controllers;

use App\Actions\DeleteFile;
use App\Actions\GetFile;
use App\Actions\GetFiles;

class FileController extends Controller
{

    /**
     * Retrieve all files.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $files = GetFiles::run();

        return response(['message' => 'Files retrieved successfully.', 'data' => $files]);
    }

    /**
     * Delete a file by slug.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {

        $isDeleted = DeleteFile::run([
            'file' => request('file'),
        ]);

        abort_unless($isDeleted, 404, ['message' => 'File deletion failed.']);

        return response(['message' => 'File deleted successfully.'], 200);
    }

    /**
     * Retrieve a file by slug.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $data = getFile::run([
            'file' => request('file'),
        ]);

        return response(['message' => 'File retrieved successfully.', 'data' => $data], 200);
    }
}
