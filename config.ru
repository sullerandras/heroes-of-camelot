use Rack::Static,
  :urls => ["/cards", "/skills", "/lib"],
  :root => ".",
  :header_rules => [
    # Cache all static files in public caches (e.g. Rack::Cache)
    # as well as in the browser
    [:all, {'Cache-Control' => 'public, max-age=86400'}],
  ]


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
