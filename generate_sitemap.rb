BASE_URL = 'http://www.heroes-of-camelot.info'
def generate_sitemap
  cards_skills = (Dir['cards/*'] + Dir['skills/*']).map do |f|
    unless /-[1-4].jpg/.match f
      loc = "#{ BASE_URL }/#{ f.sub("s/", "/").sub(".jpg", "").gsub(" ", "%20") }"
      lastmod = File.mtime(f).strftime('%Y-%m-%d')

      "<url><loc>#{loc}</loc><lastmod>#{lastmod}</lastmod><changefreq>daily</changefreq></url>"
    end
  end.compact.join("\n")

  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'+"\n"+
  "<url><loc>#{ BASE_URL }</loc><lastmod>#{ Time.now.strftime('%Y-%m-%d') }</lastmod><changefreq>hourly</changefreq></url>\n"+
  cards_skills+"\n</urlset>"
end

puts generate_sitemap
