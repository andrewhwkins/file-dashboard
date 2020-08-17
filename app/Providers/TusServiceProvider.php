<?php

namespace App\Providers;

use App\Actions\CreateFile;
use Illuminate\Support\ServiceProvider;
use TusPhp\Tus\Server as TusServer;

class TusServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('tus-server', function ($app) {
            $server = new TusServer;
            $server
                ->setApiPath('/tus');

            $s3Client = \App::make('aws')->createClient('s3');

            $basePath = 's3://' . env('AWS_BUCKET');

            $s3Client->registerStreamWrapper();

            $server->setUploadDir($basePath);

            $server->event()->addListener('tus-server.upload.complete', function (\TusPhp\Events\TusEvent $event) {
                $fileMeta = $event->getFile()->details();
                $bucket_url = env('AWS_BUCKET');

                CreateFile::dispatch([
                    'file_slug' => $fileMeta['name'],
                    'file_name' => $fileMeta['metadata']['original'],
                ]);
            });

            return $server;
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
