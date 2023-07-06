# PHP (Laravel and Symfony)

Running PHP applications on a generic container is not so easy since PHP is not a web server. You need to install a web server like Apache or Nginx and configure it to run PHP. You also need to install PHP and the required extensions. 

Therefore we have created a [PHP buildpack](https://github.com/kubero-dev/buildpacks/blob/main/packs/php-laravel/Dockerfile) that will do all the heavy lifting for you. It will install Apache, PHP and the required extensions. It will also configure Apache to run PHP and it will configure the Apache vhost to serve your application. The image is based on [thecodingmachine's docker image](https://github.com/thecodingmachine/docker-images-php)


## preconfigured Templates
Laravel and Symfony require a special configuration to run on Kubernetes. We have created a template to preconfigure the ENV vars and the volumes.

https://demo.kubero.dev/#/pipeline/demo/test/apps/new?service=symfony 

https://demo.kubero.dev/#/pipeline/demo/test/apps/new?service=laravel 