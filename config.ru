use Rack::Static,
  :urls => ["/cards", "/combos"],
  :root => ".",
  :header_rules => [
    # Cache all static files in public caches (e.g. Rack::Cache)
    # as well as in the browser
    [:all, {'Cache-Control' => 'public, max-age=86400'}],
  ]

use Rack::Deflater
use Rack::Static,
  :urls => ["/lib"],
  :root => ".",
  :header_rules => [
    # Cache all static files in public caches (e.g. Rack::Cache)
    # as well as in the browser
    [:all, {'Cache-Control' => 'public, max-age=2592000'}],
  ]

map "/sitemap.xml" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/xml',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('sitemap.xml', File::RDONLY)
    ]
  }
end

map "/robots.txt" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/plain',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('robots.txt', File::RDONLY)
    ]
  }
end

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=60'
    },
    File.open('index.html', File::RDONLY)
  ]
}
