<?php

use Illuminate\Database\Seeder;
use App\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = \Faker\Factory::create();

      // Create 10 post records
      for ($i = 0; $i < 10; $i++) {
          Post::create([
              'title' => $faker->sentence($nbWords = 3, $variableNbWords = true),
              'text' => $faker->paragraph,
              'url' => $faker->url,
              'thumbnail_url' => $faker->imageUrl($width = 640, $height = 480, 'cats'),
              'active' => true,
          ]);
      }
    }
}
