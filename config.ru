# # Add user agent to log
# module Rack
#   class CommonLogger
#     MYFORMAT = %{%s - %s [%s] "%s %s%s %s" %d %s %0.4f "%s"\n}

#     private

#     def log(env, status, header, began_at)
#       now = Time.now
#       length = extract_content_length(header)

#       logger = @logger || env['rack.errors']
#       logger.write MYFORMAT % [
#         env['HTTP_X_FORWARDED_FOR'] || env["REMOTE_ADDR"] || "-",
#         env["REMOTE_USER"] || "-",
#         now.strftime("%d/%b/%Y %H:%M:%S"),
#         env["REQUEST_METHOD"],
#         env["PATH_INFO"],
#         env["QUERY_STRING"].empty? ? "" : "?"+env["QUERY_STRING"],
#         env["HTTP_VERSION"],
#         status.to_s[0..3],
#         length,
#         now - began_at,
#         env['HTTP_USER_AGENT']]
#     end
#   end
# end

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
