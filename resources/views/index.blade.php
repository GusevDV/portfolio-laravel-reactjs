<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=cyrillic" rel="stylesheet">
        <link rel='stylesheet' href="{{ mix('css/app.css') }}">
        <title>Portfolio</title>

    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div id="root"></div>
        </div>
        <script type="text/javascript" src="{{ mix('js/index.js') }}/"></script>
    </body>
</html>
